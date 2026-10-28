import type { Metadata } from 'next';
export { default } from '@/views/explore-areas/page';

export const metadata: Metadata = {
  title: 'Explore DMV Neighborhoods | DC, Maryland & Virginia Area Guides',
  description:
    'Compare neighborhoods across Washington DC, Maryland and Northern Virginia: home prices, market pace, schools and lifestyle.',
  alternates: { canonical: '/explore-areas' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/explore-areas', title: 'Explore DMV Neighborhoods | DC, Maryland & Virginia Area Guides', description: 'Compare neighborhoods across Washington DC, Maryland and Northern Virginia: home prices, market pace, schools and lifestyle.' },
};
