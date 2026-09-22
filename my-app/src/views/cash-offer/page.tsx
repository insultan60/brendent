'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import CashOfferHero from '@/views/cash-offer/components/CashOfferHero';
import CashOfferIntro from '@/views/cash-offer/components/CashOfferIntro';
import CashOfferSteps from '@/views/cash-offer/components/CashOfferSteps';
import CashOfferPillars from '@/views/cash-offer/components/CashOfferPillars';
import CashOfferAudience from '@/views/cash-offer/components/CashOfferAudience';
import CashOfferContactButton from '@/views/cash-offer/components/CashOfferContactButton';

export default function CashOffer() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <CashOfferHero />
        <CashOfferIntro />
        <CashOfferSteps />
        <CashOfferPillars />
        <CashOfferAudience />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
      <CashOfferContactButton />
    </div>
  );
}