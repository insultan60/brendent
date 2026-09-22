'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import CalcHero from '@/views/affordability-calculator/components/CalcHero';
import AffordabilityCalculator from '@/views/affordability-calculator/components/AffordabilityCalculator';
import CalcSteps from '@/views/affordability-calculator/components/CalcSteps';
import CalcFactors from '@/views/affordability-calculator/components/CalcFactors';
import CalcRegions from '@/views/affordability-calculator/components/CalcRegions';
import CalcFaq from '@/views/affordability-calculator/components/CalcFaq';

export default function AffordabilityCalculatorPage() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <CalcHero />
        <AffordabilityCalculator />
        <CalcSteps />
        <CalcFactors />
        <CalcRegions />
        <CalcFaq />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}