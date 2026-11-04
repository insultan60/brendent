'use client';

import { CalendarDays, Mail, Phone } from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';
import Reveal from '@/components/base/Reveal';
import { brand } from '@/mocks/homeData';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * Schedule a Consultation: Brandon's Google Calendar booking schedule,
 * embedded so visitors pick a time without leaving the site. Every
 * "Schedule a Consultation" button links here (brand.bookingUrl).
 */
export default function Schedule() {
  useReveal();

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />

      <main>
        {/* Dark band so the transparent header reads, as on the other text pages. */}
        <section id="top" className="bg-foreground-950 px-5 pb-40 pt-32 md:px-10 md:pb-48 md:pt-40">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow tone="light" className="justify-center">Book a Time With Brandon</Eyebrow>
            <h1 className="mt-7 font-heading text-[40px] font-normal leading-[1.02] tracking-[-0.025em] text-background-50 md:text-[64px]">
              Schedule a <em className="italic">Consultation</em>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
              Pick a time that works for you. Whether you&rsquo;re buying, selling, renting or investing in DC,
              Maryland or Northern Virginia, Brandon will come ready with a clear plan for your next step.
            </p>
          </Reveal>
        </section>

        <div className="mx-auto -mt-28 max-w-[1180px] px-5 pb-20 md:-mt-32 md:px-10 md:pb-28">
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-[28px] border border-background-300 bg-background-50 shadow-[0_30px_80px_-50px_rgba(19,16,11,0.45)]">
              <iframe
                src={brand.bookingCalendar}
                title="Book a consultation with Brandon Wilson"
                loading="lazy"
                className="block h-[1100px] w-full border-0 md:h-[760px]"
              />
            </div>
          </Reveal>

          <Reveal delay={160} className="mt-10 flex flex-col items-center justify-center gap-x-10 gap-y-4 text-[14px] text-foreground-600 sm:flex-row">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-primary-500" aria-hidden="true" />
              Don&rsquo;t see a time that works?
            </span>
            <a
              href={brand.phoneHref}
              className="flex items-center gap-2 font-semibold text-foreground-900 transition-colors duration-300 hover:text-primary-600"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call or text {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-2 font-semibold text-foreground-900 transition-colors duration-300 hover:text-primary-600"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {brand.email}
            </a>
          </Reveal>
        </div>
      </main>

      <FooterV2 linkBase="/" />
    </div>
  );
}
