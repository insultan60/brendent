'use client';

import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import RentalsHero from '@/views/rentals/components/RentalsHero';
import CondoHubIntro from '@/views/rentals/components/CondoHubIntro';
import RentalListings from '@/views/rentals/components/RentalListings';
import FindCondoSection from '@/views/rentals/components/FindCondoSection';
import FindHere from '@/views/rentals/components/FindHere';
import IdealFor from '@/views/rentals/components/IdealFor';
import CondoBasics from '@/views/rentals/components/CondoBasics';
import CondosByArea from '@/views/rentals/components/CondosByArea';
import WhyBrandon from '@/views/rentals/components/WhyBrandon';
import RentalsContactSection from '@/views/rentals/components/RentalsContactSection';

export default function Rentals() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <RentalsHero />
        <CondoHubIntro />
        <RentalListings />
        <FindCondoSection />
        <FindHere />
        <IdealFor />
        <CondoBasics />
        <CondosByArea />
        <WhyBrandon />
        <RentalsContactSection />
        <CtaV2 />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}