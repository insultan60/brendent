import type { Metadata } from 'next';
export { default } from '@/views/about/page';

export const metadata: Metadata = {
  title: 'About Brandon Wilson | DMV Realtor & Army Reserve Officer',
  description:
    'Meet Brandon Wilson of BW Metro Properties: a DMV Realtor serving buyers, sellers and investors across Washington DC, Maryland and Northern Virginia.',
  alternates: { canonical: '/about' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/about', title: 'About Brandon Wilson | DMV Realtor & Army Reserve Officer', description: 'Meet Brandon Wilson of BW Metro Properties: a DMV Realtor serving buyers, sellers and investors across Washington DC, Maryland and Northern Virginia.' },
};
