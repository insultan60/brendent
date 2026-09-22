'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ValuationHero from '@/views/home-valuation/components/ValuationHero';
import ValuationIntro from '@/views/home-valuation/components/ValuationIntro';
import ValuationSteps from '@/views/home-valuation/components/ValuationSteps';
import ValuationFactors from '@/views/home-valuation/components/ValuationFactors';
import ValuationContactButton from '@/views/home-valuation/components/ValuationContactButton';

export default function HomeValuation() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <ValuationHero />
        <ValuationIntro />
        <ValuationSteps />
        <ValuationFactors />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
      <ValuationContactButton />
    </div>
  );
}