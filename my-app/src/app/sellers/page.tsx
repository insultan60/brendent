import type { Metadata } from 'next';
export { default } from '@/views/sellers/page';

export const metadata: Metadata = {
  title: 'Sell Your Home in the DMV | Listing Agent Brandon Wilson',
  description:
    "Sell your Washington DC, Maryland or Northern Virginia home with strategic pricing, staging and strong negotiation. Get your home's value.",
  alternates: { canonical: '/sellers' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/sellers', title: 'Sell Your Home in the DMV | Listing Agent Brandon Wilson', description: "Sell your Washington DC, Maryland or Northern Virginia home with strategic pricing, staging and strong negotiation. Get your home's value." },
};
