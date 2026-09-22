'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { useParallax } from '@/hooks/useParallax';
import { exclusiveFaqs } from '@/mocks/exclusiveData';
import { Eyebrow } from '@/views/home-v2/components/shared';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: exclusiveFaqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};

export default function ExclusiveFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const introRef = useParallax<HTMLDivElement>(44);
  const ghostRef = useParallax<HTMLDivElement>(-96);

  return (
    <section id="faq" className="relative overflow-hidden bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div
        ref={ghostRef}
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-12 -left-6 hidden select-none font-heading text-[260px] leading-none tracking-tighter text-foreground-950/[0.035] will-change-transform lg:block"
      >
        04
      </div>

      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div ref={introRef} className="will-change-transform">
            <Reveal>
              <Eyebrow index="04">Exclusive Listings, Answered</Eyebrow>
              <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
                Questions Buyers <em className="italic">Ask</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                Everything you need to know about off-market opportunities and how to get first access to them.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div className="border-t border-background-300">
              {exclusiveFaqs.map((item, index) => {
                const isOpen = index === openIndex;
                return (
                  <div key={item.q} className="border-b border-background-300">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span className="font-heading text-[19px] leading-snug text-foreground-950 md:text-[21px]">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-foreground-500 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <p className="min-h-0 pr-2 text-[14.5px] leading-relaxed text-foreground-600 md:pr-14">
                        <span className="block pb-7">{item.a}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}