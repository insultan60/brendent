'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ExploreHero from '@/views/explore-areas/components/ExploreHero';
import AreaDirectory from '@/views/explore-areas/components/AreaDirectory';

export default function ExploreAreas() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <ExploreHero />
        <AreaDirectory />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}