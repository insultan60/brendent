import type { Metadata } from 'next';
export { default } from '@/views/blog/page';

export const metadata: Metadata = {
  title: 'DMV Real Estate Blog | Buying & Selling Advice',
  description:
    'Market updates, buying and selling guides, and local advice for Washington DC, Maryland and Northern Virginia from Brandon Wilson.',
  alternates: { canonical: '/blog' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/blog', title: 'DMV Real Estate Blog | Buying & Selling Advice', description: 'Market updates, buying and selling guides, and local advice for Washington DC, Maryland and Northern Virginia from Brandon Wilson.' },
};
