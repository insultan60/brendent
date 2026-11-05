'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import MortgageHero from '@/views/mortgage-calculator/components/MortgageHero';
import FelloCalculator from '@/components/feature/FelloCalculator';
import MortgageSteps from '@/views/mortgage-calculator/components/MortgageSteps';
import MortgageFactors from '@/views/mortgage-calculator/components/MortgageFactors';
import MortgageRegions from '@/views/mortgage-calculator/components/MortgageRegions';
import MortgageFaq from '@/views/mortgage-calculator/components/MortgageFaq';

export default function MortgageCalculatorPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <MortgageHero />
        <FelloCalculator kind="mortgage-calculator" title={<>Estimate your <em className="italic">monthly payment</em></>} />
        <MortgageSteps />
        <MortgageFactors />
        <MortgageRegions />
        <MortgageFaq />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}