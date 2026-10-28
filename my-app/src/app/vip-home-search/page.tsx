import type { Metadata } from 'next';
export { default } from '@/views/vip-home-search/page';

export const metadata: Metadata = {
  title: 'VIP Home Search | Private DMV Home Search',
  description:
    'Describe your dream home and get a private, always-on home search across Washington DC, Maryland and Northern Virginia with Brandon Wilson.',
  alternates: { canonical: '/vip-home-search' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/vip-home-search', title: 'VIP Home Search | Private DMV Home Search', description: 'Describe your dream home and get a private, always-on home search across Washington DC, Maryland and Northern Virginia with Brandon Wilson.' },
};
