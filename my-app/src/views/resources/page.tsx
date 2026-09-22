'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import ResourcesHero from '@/views/resources/components/ResourcesHero';
import JourneyPaths from '@/views/resources/components/JourneyPaths';
import GuidesChecklists from '@/views/resources/components/GuidesChecklists';
import CondoEducation from '@/views/resources/components/CondoEducation';
import ResourcePathSection from '@/views/resources/components/ResourcePathSection';
import BookBand from '@/views/resources/components/BookBand';
import Insights from '@/views/resources/components/Insights';
import FaqSection from '@/views/resources/components/FaqSection';
import InvestSection from '@/views/resources/components/InvestSection';
import { bookBands, buyerResources, sellerResources } from '@/mocks/resourcesData';

export default function Resources() {
  useReveal();

  const [buyGuide, homeLoan] = bookBands;

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <ResourcesHero />
        <JourneyPaths />
        <GuidesChecklists />
        <CondoEducation />

        <ResourcePathSection
          id={buyerResources.id}
          eyebrow={buyerResources.eyebrow}
          titleLead={buyerResources.titleLead}
          titleAccent={buyerResources.titleAccent}
          text={buyerResources.text}
          cta={buyerResources.cta}
          ctaHref={buyerResources.ctaHref}
          tone="muted"
        />

        <BookBand
          id={buyGuide.id}
          eyebrow={buyGuide.eyebrow}
          titleLead={buyGuide.titleLead}
          titleAccent={buyGuide.titleAccent}
          text={buyGuide.text}
          cover={buyGuide.cover}
          bookTitle={buyGuide.bookTitle}
          tone="light"
        />

        <ResourcePathSection
          id={sellerResources.id}
          eyebrow={sellerResources.eyebrow}
          titleLead={sellerResources.titleLead}
          titleAccent={sellerResources.titleAccent}
          text={sellerResources.text}
          cta={sellerResources.cta}
          ctaHref={sellerResources.ctaHref}
          tone="muted"
        />

        <Insights />

        <BookBand
          id={homeLoan.id}
          eyebrow={homeLoan.eyebrow}
          titleLead={homeLoan.titleLead}
          titleAccent={homeLoan.titleAccent}
          text={homeLoan.text}
          cover={homeLoan.cover}
          bookTitle={homeLoan.bookTitle}
          tone="muted"
        />

        <FaqSection />
        <InvestSection />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}