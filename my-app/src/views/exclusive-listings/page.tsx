'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ExclusiveHero from '@/views/exclusive-listings/components/ExclusiveHero';
import ExclusiveSearch from '@/views/exclusive-listings/components/ExclusiveSearch';
import ExclusiveAdvantage from '@/views/exclusive-listings/components/ExclusiveAdvantage';
import AccessSteps from '@/views/exclusive-listings/components/AccessSteps';
import ExclusiveFaq from '@/views/exclusive-listings/components/ExclusiveFaq';

export default function ExclusiveListings() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <ExclusiveHero />
        <ExclusiveSearch />
        <ExclusiveAdvantage />
        <AccessSteps />
        <ExclusiveFaq />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}