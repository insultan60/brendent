'use client';

import { useCallback, useMemo, useState } from 'react';
import { ArrowUpDown, MapPin, RotateCcw, Search, SlidersHorizontal, X } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { propertyListings, propertiesDisclaimer, sortOptions } from '@/mocks/propertiesData';
import { createInitialFilters, type PropertyFilters, type PropertySort } from '@/views/properties/types';
import { num } from '@/views/properties/utils';
import PropertiesMap from '@/views/properties/components/PropertiesMap';
import PropertiesFilters from '@/views/properties/components/PropertiesFilters';
import PropertyCard from '@/views/properties/components/PropertyCard';

interface PropertiesFeedProps {
  filters: PropertyFilters;
  setFilter: <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => void;
  sort: PropertySort;
  setSort: (sort: PropertySort) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

export default function PropertiesFeed({
  filters,
  setFilter,
  sort,
  setSort,
  activeId,
  setActiveId,
}: PropertiesFeedProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggle = useCallback(
    (key: 'propertyTypes' | 'statuses' | 'features', value: string) => {
      setFilter(
        key,
        filters[key].includes(value) ? filters[key].filter((item) => item !== value) : [...filters[key], value],
      );
    },
    [filters, setFilter],
  );

  const resetAll = useCallback(() => {
    const initial = createInitialFilters();
    (Object.keys(initial) as (keyof PropertyFilters)[]).forEach((key) => setFilter(key, initial[key]));
  }, [setFilter]);

  const activeCount = useMemo(() => {
    const base = createInitialFilters();
    let count = 0;
    if (filters.location.trim()) count += 1;
    if (filters.priceMin || filters.priceMax) count += 1;
    if (filters.bedsMin) count += 1;
    if (filters.bathsMin) count += 1;
    count += filters.propertyTypes.length;
    count += filters.statuses.length;
    if (filters.sqftMin || filters.sqftMax) count += 1;
    if (filters.yearMin || filters.yearMax) count += 1;
    if (filters.daysMax) count += 1;
    if (filters.openHouse) count += 1;
    if (filters.poolType !== base.poolType) count += 1;
    if (filters.keyword.trim()) count += 1;
    count += filters.features.length;
    return count;
  }, [filters]);

  const results = useMemo(() => {
    const list = propertyListings.filter((listing) => {
      if (filters.searchType && listing.searchType !== filters.searchType) return false;

      const location = filters.location.trim().toLowerCase();
      if (location && !`${listing.address} ${listing.city} ${listing.state} ${listing.zip}`.toLowerCase().includes(location)) {
        return false;
      }

      const priceMin = num(filters.priceMin);
      if (priceMin !== null && listing.price < priceMin) return false;
      const priceMax = num(filters.priceMax);
      if (priceMax !== null && listing.price > priceMax) return false;

      const bedsMin = num(filters.bedsMin);
      if (bedsMin !== null && listing.beds < bedsMin) return false;
      const bathsMin = num(filters.bathsMin);
      if (bathsMin !== null && listing.baths < bathsMin) return false;

      if (filters.propertyTypes.length && !filters.propertyTypes.includes(listing.propertyType)) return false;
      if (filters.statuses.length && !filters.statuses.includes(listing.status)) return false;

      const sqftMin = num(filters.sqftMin);
      if (sqftMin !== null && listing.sqft < sqftMin) return false;
      const sqftMax = num(filters.sqftMax);
      if (sqftMax !== null && listing.sqft > sqftMax) return false;

      const yearMin = num(filters.yearMin);
      if (yearMin !== null && listing.yearBuilt < yearMin) return false;
      const yearMax = num(filters.yearMax);
      if (yearMax !== null && listing.yearBuilt > yearMax) return false;

      const daysMax = num(filters.daysMax);
      if (daysMax !== null && listing.daysOnMarket > daysMax) return false;

      if (filters.openHouse && !listing.openHouse) return false;
      if (filters.poolType !== 'Any' && listing.pool !== filters.poolType) return false;
      if (filters.features.length && !filters.features.every((item) => listing.features.includes(item))) return false;

      const keyword = filters.keyword.trim().toLowerCase();
      if (keyword) {
        const haystack = [
          listing.address,
          listing.city,
          listing.state,
          listing.propertyType,
          ...listing.features,
        ]
          .join(' ')
          .toLowerCase();
        const matches = keyword.split(',').some((part) => part.trim() && haystack.includes(part.trim()));
        if (!matches) return false;
      }

      return true;
    });

    const sorted = [...list];
    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      default:
        sorted.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
    }
    return sorted;
  }, [filters, sort]);

  return (
    <section id="properties-feed" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1500px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="01">Map-First Property Search</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
            Browse Listings on the <em className="italic">Map</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Pan the metro, click a pin, and open homes in the panel beside it. Filter by price, beds, baths, property
            type and features — then save your search and let us watch the market for you.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="h-[340px] lg:sticky lg:top-24 lg:h-[calc(100svh-7rem)] lg:min-h-[520px]">
              <PropertiesMap listings={results} activeId={activeId} onActiveChange={setActiveId} />
            </div>
          </div>

          <div>
            <Reveal>
              <div className="rounded-[24px] border border-background-300 bg-background-50 p-4 md:p-5">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <span className="hidden items-center gap-2 rounded-full bg-background-100 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground-600 sm:flex">
                    <MapPin className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
                    Map Search
                  </span>
                  <label className="flex flex-1 items-center gap-2.5 rounded-full border border-background-300 bg-background-100 px-4 py-2.5">
                    <Search className="h-4 w-4 shrink-0 text-foreground-400" aria-hidden="true" />
                    <span className="sr-only">Enter City, Address or Zip</span>
                    <input
                      type="search"
                      value={filters.location}
                      onChange={(event) => setFilter('location', event.target.value)}
                      placeholder="Enter City, Address or Zip"
                      className="w-full bg-transparent text-[13px] text-foreground-900 outline-none placeholder:text-foreground-400"
                    />
                  </label>
                  <button
                    type="button"
                    className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                  >
                    Search
                  </button>
                </div>
                <a
                  href="#properties-feed"
                  className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-foreground-600 underline-offset-4 transition-colors duration-300 hover:text-foreground-950 hover:underline"
                >
                  <Search className="h-3.5 w-3.5" aria-hidden="true" />
                  Search Agent / Office
                </a>
              </div>
            </Reveal>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-foreground-600">
                Showing{' '}
                <span className="font-heading text-[18px] text-foreground-950">{results.length}</span> of 10,000 Listings
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 px-4 py-2.5 text-[12.5px] font-semibold text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
                >
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Filters
                  {activeCount > 0 ? (
                    <span className="ml-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-primary-500 px-1 text-[10px] font-bold text-background-50">
                      {activeCount}
                    </span>
                  ) : null}
                </button>

                <label className="inline-flex items-center gap-2 rounded-full border border-background-300 bg-background-50 px-4 py-2.5 text-[12.5px] text-foreground-700">
                  <ArrowUpDown className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
                  <span className="sr-only">Sort listings</span>
                  <select
                    aria-label="Sort listings"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as PropertySort)}
                    className="bg-transparent text-[12.5px] font-medium text-foreground-800 outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            </div>

            {results.length > 0 ? (
              <div data-product-shop className="mt-6 flex flex-col gap-4">
                {results.map((listing) => (
                  <PropertyCard
                    key={listing.id}
                    listing={listing}
                    onHover={setActiveId}
                    highlighted={listing.id === activeId}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center gap-5 rounded-[26px] border border-dashed border-background-400 bg-background-50 px-6 py-20 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100 text-secondary-900">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-[24px] leading-none text-foreground-950">No matches yet</h3>
                  <p className="mt-3 text-[14px] text-foreground-600">
                    To view listings, please zoom further into your desired area or add a location to the search bar.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetAll}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset Filters
                </button>
              </div>
            )}

            <p className="mt-8 border-t border-background-300 pt-6 text-[11.5px] leading-relaxed text-foreground-500">
              {propertiesDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-foreground-950/50 backdrop-blur-sm"
          />
          <div className="drawer-item absolute inset-y-0 right-0 flex w-full max-w-[420px] flex-col border-l border-background-300 bg-background-50 p-6">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="mb-4 flex h-10 w-10 items-center justify-center self-end rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="min-h-0 flex-1">
              <PropertiesFilters
                filters={filters}
                update={setFilter}
                toggle={toggle}
                onReset={resetAll}
                onApply={() => setDrawerOpen(false)}
                activeCount={activeCount}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}