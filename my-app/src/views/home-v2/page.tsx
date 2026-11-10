'use client';

import { useReveal } from '@/hooks/useReveal';
import { brand, buySection, sellSection, vaSection } from '@/mocks/homeData';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import HeroV2 from '@/views/home-v2/components/HeroV2';
import TrustBarV2 from '@/views/home-v2/components/TrustBarV2';
import ServicesV2 from '@/views/home-v2/components/ServicesV2';
import AboutV2 from '@/views/home-v2/components/AboutV2';
import IntroFilmV2 from '@/views/home-v2/components/IntroFilmV2';
import GuideSectionV2 from '@/views/home-v2/components/GuideSectionV2';
import ValuationV2 from '@/views/home-v2/components/ValuationV2';
import ListingsV2 from '@/views/home-v2/components/ListingsV2';
import NeighborhoodsV2 from '@/views/home-v2/components/NeighborhoodsV2';
import MarketSnapshotV2 from '@/views/home-v2/components/MarketSnapshotV2';
import ProcessV2 from '@/views/home-v2/components/ProcessV2';
import ToolsV2 from '@/views/home-v2/components/ToolsV2';
import WhyV2 from '@/views/home-v2/components/WhyV2';
import TestimonialsV2 from '@/views/home-v2/components/TestimonialsV2';
import PartnersV2 from '@/views/home-v2/components/PartnersV2';
import FaqV2 from '@/views/home-v2/components/FaqV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';

/* Section order and headings follow the November 2026 SEO homepage copy.
   The page has exactly one H1, in the hero. */
export default function HomeV2() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 />
      <main>
        <HeroV2 />
        <TrustBarV2 />
        <ServicesV2 index="01" />
        <AboutV2 index="02" />
        <IntroFilmV2 />
        <GuideSectionV2 section={buySection} index="03" />
        <GuideSectionV2 section={sellSection} index="04" flip />
        <ValuationV2 index="05" />
        <GuideSectionV2 section={vaSection} index="06" tone="dark" />
        <ListingsV2 index="07" />
        <NeighborhoodsV2 index="08" />
        <MarketSnapshotV2 index="09" />
        <ProcessV2 index="10" />
        <ToolsV2 index="11" />
        <WhyV2 index="12" />
        <TestimonialsV2 index="13" />
        <PartnersV2 index="14" />
        <FaqV2 index="15" />
        <CtaV2
          sectionIndex="16"
          eyebrow="Ready to Move?"
          title="Ready to Work With a Washington DC Real Estate Agent Who Has a Plan?"
          text="Tell Brandon what you want to do: buy, sell or move. He will reply with a clear first step and no pressure."
          cta={{ label: 'Schedule a Consultation', href: brand.bookingUrl }}
        />
      </main>
      <FooterV2 />
    </div>
  );
}
