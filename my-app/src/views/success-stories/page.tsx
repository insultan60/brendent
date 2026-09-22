'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import SuccessHero from '@/views/success-stories/components/SuccessHero';
import ReviewsWall from '@/views/success-stories/components/ReviewsWall';

export default function SuccessStories() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <SuccessHero />
        <ReviewsWall />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}