'use client';

import { useCallback, useState } from 'react';
import Reveal from '@/components/base/Reveal';
import { useListings } from '@/components/feature/ListingsProvider';
import { Eyebrow } from '@/views/home-v2/components/shared';
import PropertiesFeed from '@/views/properties/components/PropertiesFeed';
import { createInitialFilters, type PropertyFilters, type PropertySort } from '@/views/properties/types';

/* The same live IDX search as /properties. Off-market and coming-soon homes
   are shared privately rather than published, so the page lists Brandon's
   Bright MLS homes and invites visitors to ask for private access. */
export default function ExclusiveSearch() {
  const { listings, fullMlsUrl } = useListings();
  const [filters, setFilters] = useState<PropertyFilters>(createInitialFilters);
  const [sort, setSort] = useState<PropertySort>('newest');
  const [activeId, setActiveId] = useState<string | null>(null);

  const setFilter = useCallback(<K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  return (
    <div id="exclusive-search">
      <section className="bg-background-100 px-5 pt-24 md:px-10 md:pt-32">
        <div className="mx-auto max-w-[1500px]">
          <Reveal className="max-w-2xl">
            <Eyebrow index="01">Brandon&rsquo;s Listings</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Homes Brandon Has <em className="italic">Listed &amp; Sold</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              Off-market and coming-soon homes are shared privately, so ask Brandon for access. Below is every home he
              has on Bright MLS, on the map.
            </p>
          </Reveal>
        </div>
      </section>
      <PropertiesFeed
        listings={listings}
        fullMlsUrl={fullMlsUrl}
        filters={filters}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        activeId={activeId}
        setActiveId={setActiveId}
      />
    </div>
  );
}
