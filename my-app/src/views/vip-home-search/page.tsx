'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import VipHero from '@/views/vip-home-search/components/VipHero';
import VipSearchBy from '@/views/vip-home-search/components/VipSearchBy';

export default function VipHomeSearch() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <VipHero />
        <VipSearchBy />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}