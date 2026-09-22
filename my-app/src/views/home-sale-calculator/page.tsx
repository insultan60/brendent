'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import SaleHero from '@/views/home-sale-calculator/components/SaleHero';
import NetProceedsCalculator from '@/views/home-sale-calculator/components/NetProceedsCalculator';
import SaleSteps from '@/views/home-sale-calculator/components/SaleSteps';
import SaleCosts from '@/views/home-sale-calculator/components/SaleCosts';
import SaleRegions from '@/views/home-sale-calculator/components/SaleRegions';
import SaleFaq from '@/views/home-sale-calculator/components/SaleFaq';

export default function HomeSaleCalculatorPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <SaleHero />
        <NetProceedsCalculator />
        <SaleSteps />
        <SaleCosts />
        <SaleRegions />
        <SaleFaq />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}