'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ConsultSection from '@/components/feature/ConsultSection';
import SellersHero from '@/views/sellers/components/SellersHero';
import SellContactButton from '@/views/sellers/components/SellContactButton';
import SellPlanSection from '@/views/sellers/components/SellPlanSection';
import SellerStats from '@/views/sellers/components/SellerStats';
import SellerPillars from '@/views/sellers/components/SellerPillars';
import SellerAdvantage from '@/views/sellers/components/SellerAdvantage';
import HomeValueBand from '@/views/sellers/components/HomeValueBand';
import SellerReviews from '@/views/sellers/components/SellerReviews';

export default function Sellers() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <SellersHero />
        <SellPlanSection />
        <SellerStats />
        <SellerPillars />
        <SellerAdvantage />
        <HomeValueBand />
        <SellerReviews />
        <ConsultSection variant="seller" sectionIndex="08" />
        <CtaV2 sectionIndex="09" />
      </main>
      <FooterV2 linkBase="/" />
      <SellContactButton />
    </div>
  );
}