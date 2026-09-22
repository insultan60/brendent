import { Phone } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { closingSection } from '@/mocks/blogDetailData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ClosingSection() {
  return (
    <section
      id={closingSection.id}
      className="mt-16 border-t border-background-200 pt-12 md:mt-20 md:pt-16"
    >
      <Reveal>
        <div className="relative overflow-hidden rounded-[26px] bg-foreground-950 p-7 md:p-11">
          <div className="v2-grain absolute inset-0" aria-hidden="true" />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary-500/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative">
            <Eyebrow tone="light">{closingSection.label}</Eyebrow>
            <h2 className="mt-5 font-heading text-[27px] font-normal leading-[1.1] tracking-[-0.02em] text-background-50 md:text-[38px]">
              {closingSection.heading}
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-background-200 md:text-[16.5px]">
              {closingSection.paragraph}
            </p>
            <p className="mt-4 text-[15.5px] font-medium leading-[1.85] text-background-50 md:text-[16.5px]">
              {closingSection.emphasize}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="btn-shimmer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
              >
                Connect With Brandon
              </a>
              <a
                href="tel:+12029984593"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-50/35 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:border-background-50/80 hover:bg-background-50/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                (202) 998-4593
              </a>
            </div>

            <p className="mt-9 border-t border-background-50/15 pt-7 font-heading text-[15px] italic leading-relaxed text-background-100 md:text-[16px]">
              {closingSection.signature}
            </p>
            <p className="mt-3 text-[11.5px] leading-relaxed text-background-200/60">
              {closingSection.legal}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}