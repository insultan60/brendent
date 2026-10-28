import type { Metadata } from 'next';
export { default } from '@/views/home-sale-calculator/page';

export const metadata: Metadata = {
  title: 'Home Sale Proceeds Calculator | What Will I Net?',
  description:
    'Estimate what you will walk away with when you sell your DMV home after commissions, closing costs and your loan payoff.',
  alternates: { canonical: '/home-sale-calculator' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/home-sale-calculator', title: 'Home Sale Proceeds Calculator | What Will I Net?', description: 'Estimate what you will walk away with when you sell your DMV home after commissions, closing costs and your loan payoff.' },
};
