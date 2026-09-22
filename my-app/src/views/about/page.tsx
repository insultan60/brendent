'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import AboutHero from '@/views/about/components/AboutHero';
import MeetBrandon from '@/views/about/components/MeetBrandon';
import AboutStats from '@/views/about/components/AboutStats';
import SuccessStories from '@/views/about/components/SuccessStories';
import AboutServices from '@/views/about/components/AboutServices';

export default function About() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <AboutHero />
        <MeetBrandon />
        <AboutStats />
        <SuccessStories />
        <AboutServices />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}