import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHomeSearch, getListingDetail } from '@/lib/idx';
import PropertyDetail from '@/views/property-detail/PropertyDetail';
import { isClosed } from '@/views/properties/types';
import { byNewest, placeText, priceText } from '@/views/properties/utils';

// Re-read from IDX at most once an hour, like the rest of the listings.
export const revalidate = 3600;

const SITE = 'https://bwmetroproperties.com';

type Props = { params: Promise<{ slug: string }> };

/** Every listing IDX has is built ahead of time; a listing added later is
 *  built on its first visit. */
export async function generateStaticParams() {
  const { listings } = await getHomeSearch();
  return listings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const detail = await getListingDetail((await params).slug);
  if (!detail) return { title: 'Listing not found', robots: { index: false } };
  const place = `${placeText(detail)} ${detail.zip}`.trim();
  const facts = [
    detail.beds ? `${detail.beds} bed` : '',
    detail.baths ? `${detail.baths} bath` : '',
    detail.sqft ? `${detail.sqft.toLocaleString('en-US')} sqft` : '',
  ]
    .filter(Boolean)
    .join(', ');
  const title = `${detail.address}, ${placeText(detail)} | ${detail.status} ${priceText(detail)}`;
  const description = `${detail.status}: ${detail.address}, ${place}. ${facts ? `${facts}. ` : ''}${detail.description}`.slice(0, 160);
  return {
    title,
    description,
    alternates: { canonical: detail.url },
    openGraph: {
      type: 'website',
      siteName: 'BW Metro Properties',
      url: detail.url,
      title,
      description,
      images: detail.photos[0] ? [detail.photos[0]] : undefined,
    },
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const [detail, { listings, fullMlsUrl }] = await Promise.all([getListingDetail(slug), getHomeSearch()]);
  if (!detail) notFound();

  // Brandon's other homes: what is on the market first, then recent closings.
  const rest = listings.filter((l) => l.id !== detail.id);
  const others = [
    ...rest.filter((l) => !isClosed(l.status)).sort(byNewest),
    ...rest.filter((l) => isClosed(l.status)).sort(byNewest),
  ].slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'RealEstateListing',
        name: `${detail.address}, ${placeText(detail)}`,
        url: `${SITE}${detail.url}`,
        description: detail.description || undefined,
        image: detail.photos.length ? detail.photos : undefined,
        datePosted: detail.listedDate || undefined,
        about: {
          '@type': 'Residence',
          address: {
            '@type': 'PostalAddress',
            streetAddress: detail.address,
            addressLocality: detail.city,
            addressRegion: detail.state,
            postalCode: detail.zip,
            addressCountry: 'US',
          },
          geo:
            detail.lat !== null && detail.lng !== null
              ? { '@type': 'GeoCoordinates', latitude: detail.lat, longitude: detail.lng }
              : undefined,
        },
        offers: isClosed(detail.status)
          ? undefined
          : { '@type': 'Offer', price: detail.price, priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Properties', item: `${SITE}/properties` },
          { '@type': 'ListItem', position: 2, name: detail.address, item: `${SITE}${detail.url}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }} />
      <PropertyDetail detail={detail} others={others} fullMlsUrl={fullMlsUrl} />
    </>
  );
}
