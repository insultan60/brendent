'use client';

import { useState } from 'react';
import { ArrowRight, Compass, Minus, Plus } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { serviceTabs } from '@/mocks/homeData';

export default function ServiceTabs() {
  const [active, setActive] = useState(serviceTabs[0].id);
  const current = serviceTabs.find((tab) => tab.id === active) ?? serviceTabs[0];

  return (
    <section className="px-3 py-3 md:px-5">
      <div className="mx-auto max-w-[1520px] overflow-hidden rounded-[24px] border border-background-200 bg-background-50 px-6 py-16 md:rounded-[36px] md:px-14 md:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-[11px] text-accent-700">How We Work</p>
            <h2 className="mt-6 font-heading text-[30px] font-normal leading-[1.08] tracking-[-0.015em] text-foreground-950 md:text-[42px]">
              Services Built Around Your Goals
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Whether you are buying, selling, staging or simply exploring the DMV market, every engagement begins with
              a clear strategy and ends with results.
            </p>

            <div className="mt-10 flex flex-col gap-2.5">
              {serviceTabs.map((tab) => {
                const isActive = tab.id === active;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActive(tab.id)}
                    aria-pressed={isActive}
                    className={`flex items-center justify-between gap-4 rounded-2xl border px-6 py-5 text-left transition-colors duration-300 ${
                      isActive
                        ? 'border-primary-300 bg-primary-50'
                        : 'border-background-200 bg-background-50 hover:border-background-300'
                    }`}
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                          isActive ? 'bg-primary-500 text-background-50' : 'bg-background-200 text-foreground-700'
                        }`}
                      >
                        {isActive ? (
                          <Minus className="h-4 w-4" aria-hidden="true" />
                        ) : (
                          <Plus className="h-4 w-4" aria-hidden="true" />
                        )}
                      </span>
                      <span className="text-[15.5px] font-semibold text-foreground-950">{tab.tab}</span>
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 ${isActive ? 'text-primary-600' : 'text-foreground-400'}`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative flex h-full min-h-[380px] flex-col justify-between overflow-hidden rounded-[28px] bg-secondary-950 p-9 md:p-12">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
              <div className="relative">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                  <Compass className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-9 font-heading text-[28px] leading-tight text-background-50 md:text-[36px]">
                  {current.title}
                </h3>
                <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-background-200 md:text-[16px]">
                  {current.text}
                </p>
              </div>
              <a
                href="#contact"
                className="relative mt-12 inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
              >
                Start the Conversation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}