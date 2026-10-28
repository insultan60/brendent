import type { Metadata } from 'next';
export { default } from '@/views/get-in-touch/page';

export const metadata: Metadata = {
  title: 'Contact Brandon Wilson | BW Metro Properties',
  description:
    'Call, text or message Brandon Wilson about buying, selling, renting or investing in Washington DC, Maryland and Northern Virginia.',
  alternates: { canonical: '/get-in-touch' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/get-in-touch', title: 'Contact Brandon Wilson | BW Metro Properties', description: 'Call, text or message Brandon Wilson about buying, selling, renting or investing in Washington DC, Maryland and Northern Virginia.' },
};
