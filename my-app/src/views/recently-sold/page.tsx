'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import RecentlySoldHero from '@/views/recently-sold/components/RecentlySoldHero';
import SoldResults from '@/views/recently-sold/components/SoldResults';
import SoldListings from '@/views/recently-sold/components/SoldListings';
import SoldDisclaimer from '@/views/recently-sold/components/SoldDisclaimer';

export default function RecentlySold() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <RecentlySoldHero />
        <SoldResults />
        <SoldListings />
        <SoldDisclaimer />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}