import type { Metadata } from 'next';
export { default } from '@/views/alexandria/page';

export const metadata: Metadata = {
  title: 'Alexandria, VA Homes for Sale & Neighborhood Guide',
  description:
    'Explore Alexandria, Virginia: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.',
  alternates: { canonical: '/alexandria' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/alexandria', title: 'Alexandria, VA Homes for Sale & Neighborhood Guide', description: 'Explore Alexandria, Virginia: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.' },
};
