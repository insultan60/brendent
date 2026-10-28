import type { Metadata } from 'next';
export { default } from '@/views/affordability-calculator/page';

export const metadata: Metadata = {
  title: 'Home Affordability Calculator | How Much House Can I Afford?',
  description:
    "Estimate how much home you can afford in the DMV from your income, debts, down payment and today's rates. Free calculator from BW Metro Properties.",
  alternates: { canonical: '/affordability-calculator' },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: '/affordability-calculator', title: 'Home Affordability Calculator | How Much House Can I Afford?', description: "Estimate how much home you can afford in the DMV from your income, debts, down payment and today's rates. Free calculator from BW Metro Properties." },
};
