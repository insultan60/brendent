'use client';

import { useState } from 'react';
import { Compass, MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import SectionHeading from '@/components/base/SectionHeading';
import { exploreAreas } from '@/mocks/homeData';

export default function ExploreAreas() {
  const [activeId, setActiveId] = useState(exploreAreas[1].id);
  const active = exploreAreas.find((area) => area.id === activeId) ?? exploreAreas[0];

  return (
    <section id="areas" className="px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-shell">
        <SectionHeading
          eyebrow="Discover the"
          title="Vibrant Areas We Serve"
          description="Explore market trends, new listings, schools and top businesses across every corner of the Washington DC Metro."
        />

        <Reveal className="mt-14">
          <div className="grid grid-cols-1 overflow-hidden rounded-[28px] border border-background-200 bg-background-50 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative h-[420px] w-full overflow-hidden bg-gradient-to-br from-primary-50 via-background-100 to-accent-50 md:h-[560px]">
              <div className="pointer-events-none absolute left-[38%] top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200/70" aria-hidden="true" />
              <div className="pointer-events-none absolute left-[38%] top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-200/70" aria-hidden="true" />
              <div className="pointer-events-none absolute left-[38%] top-[46%] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary-300/70" aria-hidden="true" />
              <div className="pointer-events-none absolute right-10 top-10 flex h-12 w-12 items-center justify-center rounded-full bg-background-50/80 text-primary-500" aria-hidden="true">
                <Compass className="h-6 w-6" />
              </div>

              {exploreAreas.map((area) => {
                const isActive = area.id === activeId;
                return (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveId(area.id)}
                    aria-label={`View ${area.name} market snapshot`}
                    aria-pressed={isActive}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${area.x}%`, top: `${area.y}%` }}
                  >
                    <span
                      className={`flex items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-2 text-[11.5px] font-semibold transition-all duration-300 ${
                        isActive
                          ? 'border-primary-600 bg-primary-500 text-background-50'
                          : 'border-background-300 bg-background-50/95 text-foreground-800 hover:border-primary-300 hover:text-primary-600'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {area.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col justify-between gap-8 p-8 md:p-10">
              <div>
                <p className="eyebrow text-[10px] text-accent-700">Market Snapshot</p>
                <h3 className="mt-4 font-heading text-[30px] leading-none text-foreground-950 md:text-[34px]">
                  {active.name}
                </h3>
                <div className="mt-8 grid grid-cols-2 gap-7">
                  <div>
                    <p className="font-heading text-[28px] leading-none text-foreground-950">{active.price}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Median Sale Price</p>
                  </div>
                  <div>
                    <p className="font-heading text-[28px] leading-none text-foreground-950">{active.days}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Avg Days on Market</p>
                  </div>
                  <div>
                    <p className="font-heading text-[28px] leading-none text-foreground-950">{active.listings}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Active Listings</p>
                  </div>
                  <div>
                    <p className="font-heading text-[28px] leading-none text-foreground-950">{active.sales}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Recent Sales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-background-200 pt-7">
                {exploreAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveId(area.id)}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-300 ${
                      area.id === activeId
                        ? 'border-primary-300 bg-primary-50 text-primary-700'
                        : 'border-background-300 text-foreground-600 hover:border-background-400'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}