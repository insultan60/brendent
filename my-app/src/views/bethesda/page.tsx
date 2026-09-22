'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import BethesdaHero from '@/views/bethesda/components/BethesdaHero';
import AreaQuickNav from '@/views/washington/components/AreaQuickNav';
import AreaListings from '@/views/washington/components/AreaListings';
import MarketReport from '@/views/washington/components/MarketReport';
import SchoolsInArea from '@/views/washington/components/SchoolsInArea';
import AroundTheArea from '@/views/washington/components/AroundTheArea';
import NewsAdvice from '@/views/washington/components/NewsAdvice';
import {
  areaOptions,
  aroundCategories,
  aroundCopy,
  marketReport,
  newsCopy,
  newsPosts,
  rentalListings,
  rentalListingsLead,
  saleListings,
  saleListingsLead,
  schoolFilters,
  schools,
  schoolsCopy,
} from '@/mocks/bethesdaData';

export default function Bethesda() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <BethesdaHero />
        <AreaQuickNav areas={areaOptions} defaultLabel="Bethesda" />
        <AreaListings
          id="featured-listings"
          index="02"
          eyebrow={saleListingsLead.eyebrow}
          titleLead={saleListingsLead.titleLead}
          titleAccent={saleListingsLead.titleAccent}
          text={saleListingsLead.text}
          listings={saleListings}
          viewAllHref={saleListingsLead.viewAllHref}
          variant="sale"
          tone="light"
          areaName="Bethesda, MD"
        />
        <AreaListings
          id="rentals"
          index="03"
          eyebrow={rentalListingsLead.eyebrow}
          titleLead={rentalListingsLead.titleLead}
          titleAccent={rentalListingsLead.titleAccent}
          text={rentalListingsLead.text}
          listings={rentalListings}
          viewAllHref={rentalListingsLead.viewAllHref}
          variant="rent"
          tone="dark"
          areaName="Bethesda, MD"
        />
        <MarketReport data={marketReport} />
        <SchoolsInArea filters={schoolFilters} items={schools} copy={schoolsCopy} />
        <AroundTheArea categories={aroundCategories} copy={aroundCopy} />
        <NewsAdvice copy={newsCopy} posts={newsPosts} />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}