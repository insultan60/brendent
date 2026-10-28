import type { Metadata } from 'next';
export { default } from '@/views/mortgage-calculator/page';

export const metadata: Metadata = {
  title: 'Mortgage Calculator | Monthly Payment Estimate for the DMV',
  description:
    'Estimate your monthly mortgage payment with taxes, insurance and HOA dues for homes in Washington DC, Maryland and Northern Virginia.',
  alternates: { canonical: '/mortgage-calculator' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/mortgage-calculator', title: 'Mortgage Calculator | Monthly Payment Estimate for the DMV', description: 'Estimate your monthly mortgage payment with taxes, insurance and HOA dues for homes in Washington DC, Maryland and Northern Virginia.' },
};
