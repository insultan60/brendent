import Link from 'next/link';
import { ArrowUpRight, Bath, BedDouble, CalendarDays, ChevronRight, ExternalLink, Home, MapPin, Phone, Ruler, Trees } from 'lucide-react';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import { brand } from '@/mocks/homeData';
import { propertiesDisclaimer } from '@/mocks/propertiesData';
import Gallery from '@/views/property-detail/components/Gallery';
import LocationMap from '@/views/property-detail/components/LocationMap';
import InquiryForm from '@/views/property-detail/components/InquiryForm';
import { isClosed, isRental, type Listing, type ListingDetail } from '@/views/properties/types';
import { formatMoney, placeText, priceText } from '@/views/properties/utils';

interface PropertyDetailProps {
  detail: ListingDetail;
  others: Listing[];
  fullMlsUrl: string;
}

const longDate = (iso: string) =>
  iso ? new Date(iso).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) : '';

function roleText(detail: ListingDetail) {
  const rental = isRental(detail.status);
  if (detail.brandonRole === 'listing') return rental ? 'Leased by Brandon for the owner' : 'Listed and sold by Brandon';
  if (detail.brandonRole === 'buyer') return rental ? 'Brandon represented the tenant' : 'Brandon represented the buyer';
  return null;
}

export default function PropertyDetail({ detail, others, fullMlsUrl }: PropertyDetailProps) {
  const closed = isClosed(detail.status);
  const rental = isRental(detail.status);
  const role = roleText(detail);
  const place = `${placeText(detail)} ${detail.zip}`.trim();
  const priceLabel = closed ? (rental ? 'Leased for' : 'Sold for') : rental ? 'Rent' : 'Price';
  const facts = [
    detail.beds ? { icon: BedDouble, label: `${detail.beds} Beds` } : null,
    detail.baths ? { icon: Bath, label: `${detail.baths} Baths` } : null,
    detail.sqft ? { icon: Ruler, label: `${detail.sqft.toLocaleString('en-US')} Sqft` } : null,
    detail.lotSqft ? { icon: Trees, label: `${detail.lotSqft.toLocaleString('en-US')} Sqft lot` } : null,
    detail.yearBuilt ? { icon: CalendarDays, label: `Built ${detail.yearBuilt}` } : null,
    { icon: Home, label: detail.type },
  ].filter((f): f is { icon: typeof Home; label: string } => f !== null);

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        {/* Title band over the home's photo, darkened so the transparent
            masthead and the white text stay readable. */}
        <section
          id="top"
          className="relative isolate overflow-hidden bg-foreground-950 px-5 pb-10 pt-40 md:px-10 md:pb-14 md:pt-56"
        >
          {detail.photos[0] ? (
            <>
              <img
                src={detail.photos[0]}
                alt=""
                fetchPriority="high"
                referrerPolicy="no-referrer"
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 bg-gradient-to-t from-foreground-950 via-foreground-950/70 to-foreground-950/45"
              />
            </>
          ) : null}
          <div className="mx-auto max-w-[1280px]">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-[12px] text-background-200/70">
              <Link href="/properties" className="hover:text-background-50">
                Properties
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="text-background-200">{detail.address}</span>
            </nav>
            <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary-500 px-3.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-50">
                    {detail.status}
                  </span>
                  {role ? (
                    <span className="rounded-full border border-background-50/25 px-3.5 py-1 text-[11px] font-semibold text-background-100">
                      {role}
                    </span>
                  ) : null}
                </div>
                <h1 className="mt-4 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
                  {detail.address}
                </h1>
                <p className="mt-3 flex items-center gap-2 text-[14px] text-background-200">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {place}
                </p>
              </div>
              <div className="lg:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-background-200/70">{priceLabel}</p>
                <p className="mt-2 font-heading text-[36px] leading-none text-background-50 md:text-[46px]">
                  {priceText(detail)}
                </p>
                {closed && detail.listPrice && detail.listPrice !== detail.price ? (
                  <p className="mt-2 text-[13px] text-background-200/70">Listed at {formatMoney(detail.listPrice)}</p>
                ) : null}
              </div>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {facts.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-background-50/15 bg-background-50/[0.06] px-4 py-2 text-[13px] text-background-100"
                >
                  <Icon className="h-4 w-4 text-background-200/70" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="px-5 py-12 md:px-10 md:py-16">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="min-w-0">
              <Gallery photos={detail.photos} alt={`${detail.address}, ${place}`} status={detail.status} />
              {closed && detail.photos.length <= 1 ? (
                <p className="mt-3 text-[12px] text-foreground-500">
                  Bright MLS shows one photo once a home has {rental ? 'leased' : 'sold'}.
                </p>
              ) : null}

              {detail.description ? (
                <div className="mt-12">
                  <h2 className="font-heading text-[28px] leading-tight text-foreground-950 md:text-[34px]">About this home</h2>
                  <p className="mt-5 whitespace-pre-line text-[15.5px] leading-[1.8] text-foreground-700">{detail.description}</p>
                </div>
              ) : null}

              <div className="mt-12">
                <h2 className="font-heading text-[28px] leading-tight text-foreground-950 md:text-[34px]">
                  {closed ? 'Sale history' : 'Listing details'}
                </h2>
                <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-[22px] border border-background-300 bg-background-300 sm:grid-cols-2">
                  {[
                    ['Listed', [longDate(detail.listedDate), detail.listPrice ? formatMoney(detail.listPrice) : ''].filter(Boolean).join(' · ')],
                    closed ? [rental ? 'Leased' : 'Sold', [longDate(detail.closedDate), priceText(detail)].filter(Boolean).join(' · ')] : ['Status', detail.status],
                    ['MLS number', detail.mlsNumber],
                    ['Property type', detail.type],
                  ]
                    .filter(([, value]) => value)
                    .map(([label, value]) => (
                      <div key={label} className="bg-background-50 px-5 py-4">
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-500">{label}</dt>
                        <dd className="mt-1.5 text-[15px] text-foreground-900">{value}</dd>
                      </div>
                    ))}
                </dl>
              </div>

              {detail.facts.length ? (
                <div className="mt-12">
                  <h2 className="font-heading text-[28px] leading-tight text-foreground-950 md:text-[34px]">Features</h2>
                  <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                    {detail.facts.map((group) => (
                      <div key={group.title} className="rounded-[22px] border border-background-300 bg-background-50 p-6">
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground-500">{group.title}</h3>
                        <dl className="mt-4 space-y-3">
                          {group.items.map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[120px_minmax(0,1fr)] gap-3 text-[14px]">
                              <dt className="text-foreground-500">{label}</dt>
                              <dd className="text-foreground-900">{value}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {detail.lat !== null && detail.lng !== null ? (
                <div className="mt-12">
                  <h2 className="font-heading text-[28px] leading-tight text-foreground-950 md:text-[34px]">Location</h2>
                  <p className="mt-3 text-[14px] text-foreground-600">
                    {detail.address}, {place}
                  </p>
                  <div className="mt-5">
                    <LocationMap lat={detail.lat} lng={detail.lng} label={detail.address} />
                  </div>
                </div>
              ) : null}

              <p className="mt-12 border-t border-background-300 pt-6 text-[11.5px] leading-relaxed text-foreground-500">
                MLS# {detail.mlsNumber}
                {detail.listingOffice ? ` · Listing office (Bright MLS): ${detail.listingOffice}` : ''}. {propertiesDisclaimer}
              </p>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-[26px] border border-background-300 bg-background-50 p-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground-500">
                  {closed ? 'Looking for a home like this?' : 'Interested in this home?'}
                </p>
                <p className="mt-3 font-heading text-[24px] leading-tight text-foreground-950">Talk to Brandon Wilson</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-600">
                  {closed
                    ? 'This home has closed, but Brandon can find you similar homes and set up alerts for new ones.'
                    : 'Ask a question or book a private tour. Brandon replies personally.'}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  <a
                    href={brand.phoneHref}
                    className="flex items-center justify-center gap-2 rounded-full bg-foreground-950 px-4 py-3 text-[13px] font-semibold text-background-50 transition-colors hover:bg-foreground-800"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call
                  </a>
                  <a
                    href={`sms:${brand.phoneHref.replace('tel:', '')}`}
                    className="flex items-center justify-center rounded-full border border-background-300 px-4 py-3 text-[13px] font-semibold text-foreground-900 transition-colors hover:border-foreground-950"
                  >
                    Text
                  </a>
                </div>
                <div className="mt-5 border-t border-background-200 pt-5">
                  <InquiryForm
                    subject={`${detail.address}, ${place} (MLS# ${detail.mlsNumber})`}
                    prompt={closed ? "I'm looking for a home like this one:" : "I'd like more information about:"}
                  />
                </div>
              </div>
              <a
                href={fullMlsUrl}
                target="_blank"
                rel="noopener"
                className="mt-4 flex items-center justify-between gap-3 rounded-[22px] border border-background-300 bg-background-50 px-6 py-5 text-[14px] font-semibold text-foreground-900 transition-colors hover:border-foreground-400"
              >
                Search similar homes on the MLS
                <ExternalLink className="h-4 w-4 shrink-0 text-foreground-500" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </section>

        {others.length ? (
          <section className="border-t border-background-300 px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-[1280px]">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 className="font-heading text-[30px] leading-tight text-foreground-950 md:text-[40px]">
                  More homes from <em className="italic">Brandon</em>
                </h2>
                <Link
                  href="/properties"
                  className="text-[13px] font-semibold text-foreground-700 underline-offset-4 hover:text-foreground-950 hover:underline"
                >
                  View all on the map
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {others.map((l) => (
                  <Link
                    key={l.id}
                    href={l.url}
                    className="group flex flex-col overflow-hidden rounded-[24px] border border-background-200 bg-background-50 transition-colors hover:border-foreground-300"
                  >
                    <div className="relative h-[220px] overflow-hidden bg-background-200">
                      {l.image ? (
                        <img
                          src={l.image}
                          alt={`${l.address}, ${placeText(l)}`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                        />
                      ) : null}
                      <span className="absolute left-4 top-4 rounded-full bg-background-50/92 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-800">
                        {l.status}
                      </span>
                    </div>
                    <div className="flex flex-1 items-end justify-between gap-4 p-6">
                      <div>
                        <p className="font-heading text-[22px] leading-none text-foreground-950">{priceText(l)}</p>
                        <p className="mt-2 text-[14px] font-semibold text-foreground-900">{l.address}</p>
                        <p className="mt-1 text-[12.5px] text-foreground-500">{placeText(l)}</p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 shrink-0 text-foreground-400 group-hover:text-foreground-950" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}
