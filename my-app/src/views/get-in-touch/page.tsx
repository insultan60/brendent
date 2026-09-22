'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import GetInTouchHero from '@/views/get-in-touch/components/GetInTouchHero';
import ContactSection from '@/views/get-in-touch/components/ContactSection';

export default function GetInTouch() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <GetInTouchHero />
        <ContactSection />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}