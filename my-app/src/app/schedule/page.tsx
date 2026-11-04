import type { Metadata } from 'next';
export { default } from '@/views/schedule/page';

export const metadata: Metadata = {
  title: 'Schedule a Consultation with Brandon Wilson',
  description:
    'Book a time with Brandon Wilson to talk about buying, selling, renting or investing in Washington DC, Maryland and Northern Virginia.',
  alternates: { canonical: '/schedule' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/schedule', title: 'Schedule a Consultation with Brandon Wilson', description: 'Book a time with Brandon Wilson to talk about buying, selling, renting or investing in Washington DC, Maryland and Northern Virginia.' },
};
