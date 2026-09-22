'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import BuyersHero from '@/views/buyers/components/BuyersHero';
import PlanSection from '@/views/buyers/components/PlanSection';
import StatsSection from '@/views/buyers/components/StatsSection';
import BuyerPillars from '@/views/buyers/components/BuyerPillars';
import WinSection from '@/views/buyers/components/WinSection';
import BuyerReviews from '@/views/buyers/components/BuyerReviews';
import HandpickedListings from '@/views/buyers/components/HandpickedListings';

export default function Buyers() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <BuyersHero />
        <PlanSection />
        <StatsSection />
        <BuyerPillars />
        <WinSection />
        <BuyerReviews />
        <HandpickedListings />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}