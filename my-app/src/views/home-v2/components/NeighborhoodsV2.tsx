'use client';

import { useState } from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { neighborhoodTabs } from '@/mocks/homeData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

/** City tabs, Washington DC open first, each listing its neighborhoods. */
export default function NeighborhoodsV2({ index }: { index: string }) {
  const [activeId, setActiveId] = useState(neighborhoodTabs[0].id);
  const active = neighborhoodTabs.find((tab) => tab.id === activeId) ?? neighborhoodTabs[0];

  return (
    <section id="communities" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index={index}>Neighborhoods</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Explore Washington DC Neighborhoods <em className="italic">and Nearby Cities</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            DC metro real estate changes block by block. Pick a city, then compare neighborhoods by price, commute and
            lifestyle.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Cities" className="no-scrollbar mt-12 flex gap-2 overflow-x-auto pb-1">
          {neighborhoodTabs.map((tab) => {
            const isActive = tab.id === activeId;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                id={`tab-${tab.id}`}
                aria-selected={isActive}
                aria-controls="neighborhood-panel"
                onClick={() => setActiveId(tab.id)}
                className={`shrink-0 whitespace-nowrap rounded-full border px-5 py-2.5 text-[13px] font-semibold transition-colors duration-300 ${
                  isActive
                    ? 'border-foreground-950 bg-foreground-950 text-background-50'
                    : 'border-background-300 text-foreground-700 hover:border-foreground-400 hover:text-foreground-950'
                }`}
              >
                {tab.city}
              </button>
            );
          })}
        </div>

        <div id="neighborhood-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="mt-10">
          <p className="max-w-2xl text-[15px] leading-relaxed text-foreground-700 md:text-[16px]">{active.blurb}</p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {active.items.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group flex h-full flex-col justify-between gap-6 rounded-[22px] border border-background-300 bg-background-50 p-6 transition-colors duration-300 hover:border-foreground-400"
              >
                <div>
                  <h3 className="font-heading text-[20px] leading-tight text-foreground-950">
                    <strong className="font-normal">{item.name} homes for sale</strong>
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{item.text}</p>
                </div>
                <span className="arrow-btn flex h-9 w-9 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </a>
            ))}
          </div>

          <a
            href={active.viewAll.href}
            className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-foreground-900 underline-offset-4 hover:underline"
          >
            {active.viewAll.label}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-background-300 pt-10 sm:flex-row sm:items-center">
          <CtaButton href="/properties">Browse homes for sale in the DC metro area</CtaButton>
          <GhostButton href="/explore-areas">View all neighborhoods</GhostButton>
        </div>
      </div>
    </section>
  );
}
