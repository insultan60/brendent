'use client';

import { useReveal } from '@/hooks/useReveal';
import SiteNavbar from '@/components/feature/SiteNavbar';
import SiteFooter from '@/components/feature/SiteFooter';
import QuickSearchBar from '@/components/feature/QuickSearchBar';
import Hero from '@/views/home/components/Hero';
import MeetBrandon from '@/views/home/components/MeetBrandon';
import WhyBrandon from '@/views/home/components/WhyBrandon';
import ServicesSection from '@/views/home/components/ServicesSection';
import FeaturedProperties from '@/views/home/components/FeaturedProperties';
import HomeValue from '@/views/home/components/HomeValue';
import Communities from '@/views/home/components/Communities';
import ServiceTabs from '@/views/home/components/ServiceTabs';
import LookingToBand from '@/views/home/components/LookingToBand';
import ProcessSection from '@/views/home/components/ProcessSection';
import ExploreAreas from '@/views/home/components/ExploreAreas';
import Partners from '@/views/home/components/Partners';
import Testimonials from '@/views/home/components/Testimonials';
import InstagramSection from '@/views/home/components/InstagramSection';
import CtaSection from '@/views/home/components/CtaSection';

export default function Home() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <SiteNavbar />
      <main>
        <Hero />
        <MeetBrandon />
        <WhyBrandon />
        <ServicesSection />
        <FeaturedProperties />
        <HomeValue />
        <Communities />
        <ServiceTabs />
        <LookingToBand />
        <ProcessSection />
        <ExploreAreas />
        <Partners />
        <Testimonials />
        <InstagramSection />
        <CtaSection />
      </main>
      <SiteFooter />
      <QuickSearchBar />
    </div>
  );
}