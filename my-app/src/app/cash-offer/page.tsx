import type { Metadata } from 'next';
export { default } from '@/views/cash-offer/page';

export const metadata: Metadata = {
  title: 'Get a Cash Offer for Your DMV Home',
  description:
    'Request a fair, no-obligation all-cash offer for your home in Washington DC, Maryland or Northern Virginia from BW Metro Properties.',
  alternates: { canonical: '/cash-offer' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/cash-offer', title: 'Get a Cash Offer for Your DMV Home', description: 'Request a fair, no-obligation all-cash offer for your home in Washington DC, Maryland or Northern Virginia from BW Metro Properties.' },
};
