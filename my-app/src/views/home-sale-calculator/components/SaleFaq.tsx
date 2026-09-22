'use client';

import { useEffect, useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { saleFaqs } from '@/mocks/homeSaleData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function SaleFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'home-sale-faq-schema';
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: saleFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById('home-sale-faq-schema')?.remove();
    };
  }, []);

  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <Eyebrow index="05">Questions</Eyebrow>
            <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
              Your proceeds, <em className="italic">answered</em>
            </h2>
            <p className="mt-6 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              The questions DMV sellers ask most about costs, taxes and when the money actually arrives.
            </p>
          </Reveal>

          <div className="border-t border-background-300">
            {saleFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={faq.q} delay={index * 40}>
                  <div className="border-b border-background-300">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <h4 className="font-heading text-[19px] leading-snug text-foreground-950 md:text-[22px]">
                        {faq.q}
                      </h4>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? 'border-foreground-950 bg-foreground-950 text-background-50'
                            : 'border-background-300 text-foreground-700'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-2xl pb-7 pr-6 text-[14.5px] leading-relaxed text-foreground-600 md:pr-12">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}