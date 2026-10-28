import type { Metadata } from 'next';
export { default } from '@/views/exclusive-listings/page';

export const metadata: Metadata = {
  title: 'Exclusive & Off-Market Listings | BW Metro Properties',
  description:
    'Ask Brandon Wilson for private access to off-market and coming-soon homes across the DMV, and browse his listings on Bright MLS.',
  alternates: { canonical: '/exclusive-listings' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/exclusive-listings', title: 'Exclusive & Off-Market Listings | BW Metro Properties', description: 'Ask Brandon Wilson for private access to off-market and coming-soon homes across the DMV, and browse his listings on Bright MLS.' },
};
