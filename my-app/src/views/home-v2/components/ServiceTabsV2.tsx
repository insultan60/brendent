'use client';

import { useState } from 'react';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { serviceTabs } from '@/mocks/homeData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function ServiceTabsV2() {
  const [active, setActive] = useState(serviceTabs[0].id);
  const current = serviceTabs.find((tab) => tab.id === active) ?? serviceTabs[0];
  const activeIndex = serviceTabs.findIndex((tab) => tab.id === active);

  return (
    <section className="bg-background-100 px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-background-300 bg-background-50 px-6 py-16 md:px-14 md:py-24">
        <Reveal className="max-w-3xl">
          <Eyebrow index="07">How We Work</Eyebrow>
          <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            Services Built Around <em className="italic">Your Goals</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Whether you are buying, selling, staging or simply exploring the DMV market, every engagement begins with a
            clear strategy and ends with results.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-col">
              {serviceTabs.map((tab, index) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    aria-pressed={isActive}
                    className={`group flex items-center justify-between gap-4 border-t py-6 text-left transition-colors duration-300 ${
                      isActive ? 'border-foreground-950' : 'border-background-300'
                    }`}
                  >
                    <span className="flex items-center gap-5">
                      <span className="w-7 font-heading text-[15px] text-foreground-400">0{index + 1}</span>
                      <span
                        className={`font-heading text-[22px] leading-none transition-colors duration-300 md:text-[26px] ${
                          isActive ? 'text-foreground-950' : 'text-foreground-500 group-hover:text-foreground-800'
                        }`}
                      >
                        {tab.tab}
                      </span>
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                        isActive
                          ? 'border-foreground-950 bg-foreground-950 text-background-50'
                          : 'border-background-300 text-foreground-500 group-hover:border-foreground-400'
                      }`}
                    >
                      {isActive ? (
                        <Minus className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Plus className="h-4 w-4" aria-hidden="true" />
                      )}
                    </span>
                  </button>
                );
              })}
              <div className="border-t border-background-300" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-foreground-950 p-9 md:p-12">
              <div className="relative">
                <span className="font-heading text-[64px] leading-none text-background-50/15 md:text-[80px]">
                  0{activeIndex + 1}
                </span>
                <h3 className="mt-3 font-heading text-[30px] font-normal leading-tight text-background-50 md:text-[40px]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-background-200 md:text-[16px]">
                  {current.text}
                </p>
              </div>
              <div className="relative mt-12 flex flex-wrap items-center gap-4">
                <CtaButton href="#contact">Start the Conversation</CtaButton>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 text-background-200">
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}