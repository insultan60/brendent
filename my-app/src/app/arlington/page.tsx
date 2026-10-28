import type { Metadata } from 'next';
export { default } from '@/views/arlington/page';

export const metadata: Metadata = {
  title: 'Arlington, VA Homes for Sale & Neighborhood Guide',
  description:
    'Explore Arlington, Virginia: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.',
  alternates: { canonical: '/arlington' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/arlington', title: 'Arlington, VA Homes for Sale & Neighborhood Guide', description: 'Explore Arlington, Virginia: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.' },
};
