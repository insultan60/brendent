'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import PartnersHero from '@/views/partners/components/PartnersHero';
import PartnersIntro from '@/views/partners/components/PartnersIntro';
import FeaturedPartners from '@/views/partners/components/FeaturedPartners';
import CommunityBusinesses from '@/views/partners/components/CommunityBusinesses';
import PartnersDirectory from '@/views/partners/components/PartnersDirectory';
import PartnersTestimonials from '@/views/partners/components/PartnersTestimonials';
import PartnersInstagram from '@/views/partners/components/PartnersInstagram';

export default function Partners() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <PartnersHero />
        <PartnersIntro />
        <FeaturedPartners />
        <CommunityBusinesses />
        <PartnersDirectory />
        <PartnersTestimonials />
        <PartnersInstagram />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}