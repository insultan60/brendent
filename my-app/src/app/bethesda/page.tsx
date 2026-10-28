import type { Metadata } from 'next';
export { default } from '@/views/bethesda/page';

export const metadata: Metadata = {
  title: 'Bethesda, MD Homes for Sale & Neighborhood Guide',
  description:
    'Explore Bethesda, Maryland: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.',
  alternates: { canonical: '/bethesda' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/bethesda', title: 'Bethesda, MD Homes for Sale & Neighborhood Guide', description: 'Explore Bethesda, Maryland: homes for sale, rentals, schools, market trends and local advice from DMV Realtor Brandon Wilson.' },
};
