import type { Metadata } from 'next';
export { default } from '@/views/recently-sold/page';

export const metadata: Metadata = {
  title: "Recently Sold Homes | Brandon Wilson's Results",
  description:
    'Homes Brandon Wilson has recently sold and leased across Washington DC, Maryland and Northern Virginia, on the map.',
  alternates: { canonical: '/recently-sold' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/recently-sold', title: "Recently Sold Homes | Brandon Wilson's Results", description: 'Homes Brandon Wilson has recently sold and leased across Washington DC, Maryland and Northern Virginia, on the map.' },
};
