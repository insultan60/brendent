import type { Metadata } from 'next';
export { default } from '@/views/buyers/page';

export const metadata: Metadata = {
  title: "Buying a Home in the DMV | Buyer's Agent Brandon Wilson",
  description:
    'Buy your next home in Washington DC, Maryland or Northern Virginia with a clear plan, strong negotiation and VA loan experience. Work with Brandon Wilson.',
  alternates: { canonical: '/buyers' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/buyers', title: "Buying a Home in the DMV | Buyer's Agent Brandon Wilson", description: 'Buy your next home in Washington DC, Maryland or Northern Virginia with a clear plan, strong negotiation and VA loan experience. Work with Brandon Wilson.' },
};
