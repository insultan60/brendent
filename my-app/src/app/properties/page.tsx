import type { Metadata } from 'next';
import { getHomeSearch } from '@/lib/idx';
import Properties from '@/views/properties/page';

// Brandon's listings are re-read from IDX Broker at most once an hour.
export const revalidate = 3600;

export default async function PropertiesPage() {
  const { listings, fullMlsUrl } = await getHomeSearch();
  return <Properties listings={listings} fullMlsUrl={fullMlsUrl} />;
}

export const metadata: Metadata = {
  title: 'Search DMV Homes for Sale | Map Search',
  description:
    "See Brandon Wilson's listings and recent sales on the map, and search every home for sale on Bright MLS across DC, Maryland and Virginia.",
  alternates: { canonical: '/properties' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/properties', title: 'Search DMV Homes for Sale | Map Search', description: "See Brandon Wilson's listings and recent sales on the map, and search every home for sale on Bright MLS across DC, Maryland and Virginia." },
};
