'use client';

import { useState } from 'react';
import { Compass, MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { exploreAreas } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function AreasV2() {
  const [activeId, setActiveId] = useState(exploreAreas[1].id);
  const active = exploreAreas.find((area) => area.id === activeId) ?? exploreAreas[0];

  return (
    <section id="areas" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="10">Discover the</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Vibrant Areas We <em className="italic">Serve</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Explore market trends, new listings, schools and top businesses across every corner of the Washington DC
            Metro.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid grid-cols-1 overflow-hidden rounded-[30px] border border-background-300 bg-background-50 lg:grid-cols-[1.35fr_0.65fr]">
            <div className="relative h-[440px] w-full overflow-hidden bg-background-100 md:h-[580px]">
              <div
                className="pointer-events-none absolute left-[38%] top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-[38%] top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background-300"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute left-[38%] top-[46%] h-[160px] w-[160px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-background-400"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-8 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-background-300 bg-background-50 text-foreground-500"
                aria-hidden="true"
              >
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
                          ? 'border-foreground-950 bg-foreground-950 text-background-50'
                          : 'border-background-300 bg-background-50/95 text-foreground-800 hover:border-foreground-400 hover:text-foreground-950'
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {area.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col justify-between gap-8 bg-background-50 p-8 md:p-10">
              <div>
                <Eyebrow>Market Snapshot</Eyebrow>
                <h3 className="mt-5 font-heading text-[32px] leading-none text-foreground-950 md:text-[36px]">
                  {active.name}
                </h3>
                <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-8">
                  <div>
                    <p className="font-heading text-[30px] leading-none text-foreground-950">{active.price}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Median Sale Price</p>
                  </div>
                  <div>
                    <p className="font-heading text-[30px] leading-none text-foreground-950">{active.days}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Avg Days on Market</p>
                  </div>
                  <div>
                    <p className="font-heading text-[30px] leading-none text-foreground-950">{active.listings}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Active Listings</p>
                  </div>
                  <div>
                    <p className="font-heading text-[30px] leading-none text-foreground-950">{active.sales}</p>
                    <p className="mt-2.5 text-[12px] leading-snug text-foreground-500">Recent Sales</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 border-t border-background-300 pt-7">
                {exploreAreas.map((area) => (
                  <button
                    key={area.id}
                    type="button"
                    onClick={() => setActiveId(area.id)}
                    className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-300 ${
                      area.id === activeId
                        ? 'border-foreground-950 bg-foreground-950 text-background-50'
                        : 'border-background-300 text-foreground-600 hover:border-foreground-400 hover:text-foreground-950'
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