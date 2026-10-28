import type { Metadata } from 'next';
export { default } from '@/views/washington/page';

export const metadata: Metadata = {
  title: 'Washington, DC Homes for Sale & Neighborhood Guide',
  description:
    'Explore Washington DC: homes for sale, rentals, neighborhoods, schools, market trends and local advice from DMV Realtor Brandon Wilson.',
  alternates: { canonical: '/washington' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/washington', title: 'Washington, DC Homes for Sale & Neighborhood Guide', description: 'Explore Washington DC: homes for sale, rentals, neighborhoods, schools, market trends and local advice from DMV Realtor Brandon Wilson.' },
};
