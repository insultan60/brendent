import type { Metadata } from 'next';
export { default } from '@/views/rentals/page';

export const metadata: Metadata = {
  title: 'DMV Rentals & Condos | Find Your Next Rental',
  description:
    'Find condos and rentals across Washington DC, Maryland and Northern Virginia with help from Brandon Wilson of BW Metro Properties.',
  alternates: { canonical: '/rentals' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/rentals', title: 'DMV Rentals & Condos | Find Your Next Rental', description: 'Find condos and rentals across Washington DC, Maryland and Northern Virginia with help from Brandon Wilson of BW Metro Properties.' },
};
