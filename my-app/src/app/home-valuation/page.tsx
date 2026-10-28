import type { Metadata } from 'next';
export { default } from '@/views/home-valuation/page';

export const metadata: Metadata = {
  title: "What's My Home Worth? Free DMV Home Valuation",
  description:
    'Get a free, accurate home valuation from Brandon Wilson based on recent sales near you in Washington DC, Maryland or Northern Virginia.',
  alternates: { canonical: '/home-valuation' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/home-valuation', title: "What's My Home Worth? Free DMV Home Valuation", description: 'Get a free, accurate home valuation from Brandon Wilson based on recent sales near you in Washington DC, Maryland or Northern Virginia.' },
};
