'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/components/base/Reveal';
import AreaCard from '@/views/explore-areas/components/AreaCard';
import { areas, areaFilters } from '@/mocks/exploreAreaData';
import type { AreaRegion } from '@/mocks/exploreAreaData';
import { Eyebrow } from '@/views/home-v2/components/shared';

type Filter = (typeof areaFilters)[number];

export default function AreaDirectory() {
  const [filter, setFilter] = useState<Filter>('All Areas');
  const [activeId, setActiveId] = useState(areas[0].id);

  const visible = filter === 'All Areas' ? areas : areas.filter((area) => area.region === (filter as AreaRegion));

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.area-anchor'));
    if (nodes.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.getAttribute('data-area') ?? '');
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [filter]);

  return (
    <section id="areas" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="01">Area Guides</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Find Your Place in the <em className="italic">DMV</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Each guide pairs the lifestyle of a community with the numbers behind it, so you can compare
              neighborhoods with confidence before you ever step through the door.
            </p>
          </Reveal>

          <Reveal className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {areaFilters.map((option) => {
                const isActive = option === filter;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setFilter(option)}
                    aria-pressed={isActive}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12px] font-medium transition-colors duration-300 ${
                      isActive
                        ? 'border-foreground-950 bg-foreground-950 text-background-50'
                        : 'border-background-300 text-foreground-600 hover:border-foreground-400 hover:text-foreground-950'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-foreground-400">
              {visible.length} of {areas.length} area guides
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-10 xl:grid-cols-[230px_1fr]">
          <aside className="hidden xl:block">
            <div className="sticky top-28">
              <p className="eyebrow text-[10px] text-foreground-400">Jump to</p>
              <ul className="mt-4 flex flex-col">
                {visible.map((area) => {
                  const isActive = area.id === activeId;
                  return (
                    <li key={area.id}>
                      <a
                        href={`#area-${area.id}`}
                        className={`group flex items-center justify-between gap-4 border-b border-background-200 py-3.5 text-[13.5px] transition-colors duration-300 ${
                          isActive ? 'text-foreground-950' : 'text-foreground-500 hover:text-foreground-900'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-300 ${
                              isActive ? 'bg-primary-500' : 'bg-background-400'
                            }`}
                            aria-hidden="true"
                          />
                          {area.name}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-400">
                          {area.tag}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {visible.map((area, index) => (
              <Reveal key={area.id} delay={index * 60}>
                <AreaCard area={area} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}