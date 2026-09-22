'use client';

import { useCallback, useMemo, useState } from 'react';
import { ArrowUpDown, RotateCcw, Search, SlidersHorizontal, Sparkles, X } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { communities, exclusiveDisclaimer, exclusiveListings, searchTypeOptions } from '@/mocks/exclusiveData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { createInitialFilters, type ExclusiveFilters, type SortKey } from '@/views/exclusive-listings/types';
import { num } from '@/views/exclusive-listings/utils';
import SearchFilters from '@/views/exclusive-listings/components/SearchFilters';
import ExclusiveMap from '@/views/exclusive-listings/components/ExclusiveMap';
import ExclusiveListingCard from '@/views/exclusive-listings/components/ExclusiveListingCard';

const sortOptions: { label: string; value: SortKey }[] = [
  { label: 'Newest to Market', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Largest Square Feet', value: 'sqft-desc' },
];

export default function ExclusiveSearch() {
  const [filters, setFilters] = useState<ExclusiveFilters>(createInitialFilters);
  const [sort, setSort] = useState<SortKey>('newest');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const setFilter = useCallback(<K extends keyof ExclusiveFilters>(key: K, value: ExclusiveFilters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => setFilters(createInitialFilters()), []);

  const activeCount = useMemo(() => {
    const base = createInitialFilters();
    let count = 0;
    if (filters.community) count += 1;
    if (filters.location.trim()) count += 1;
    if (filters.priceMin || filters.priceMax) count += 1;
    if (filters.bedsMin) count += 1;
    if (filters.bathsMin) count += 1;
    if (filters.listingType !== base.listingType) count += 1;
    count += filters.propertyTypes.length;
    count += filters.statuses.length;
    if (filters.sqftMin || filters.sqftMax) count += 1;
    if (filters.lotMin || filters.lotMax) count += 1;
    if (filters.yearMin || filters.yearMax) count += 1;
    if (filters.daysMin || filters.daysMax) count += 1;
    if (filters.soldWithin) count += 1;
    if (filters.exclude55) count += 1;
    if (filters.openHouse) count += 1;
    if (filters.poolType !== base.poolType) count += 1;
    count += filters.features.length;
    if (filters.keyword.trim()) count += 1;
    return count;
  }, [filters]);

  const results = useMemo(() => {
    const list = exclusiveListings.filter((listing) => {
      if (filters.searchType && listing.searchType !== filters.searchType) return false;

      const location = filters.location.trim().toLowerCase();
      if (location && !`${listing.address} ${listing.city} ${listing.state}`.toLowerCase().includes(location)) {
        return false;
      }
      if (filters.community) {
        const cityToken = filters.community.split(',')[0].trim().toLowerCase();
        if (!listing.city.toLowerCase().includes(cityToken)) return false;
      }

      const priceMin = num(filters.priceMin);
      if (priceMin !== null && listing.price < priceMin) return false;
      const priceMax = num(filters.priceMax);
      if (priceMax !== null && listing.price > priceMax) return false;

      const bedsMin = num(filters.bedsMin);
      if (bedsMin !== null && listing.beds < bedsMin) return false;
      const bathsMin = num(filters.bathsMin);
      if (bathsMin !== null && listing.baths < bathsMin) return false;

      if (filters.listingType !== 'All' && listing.listingType !== filters.listingType) return false;
      if (filters.propertyTypes.length && !filters.propertyTypes.includes(listing.propertyType)) return false;
      if (filters.statuses.length && !filters.statuses.includes(listing.status)) return false;

      const sqftMin = num(filters.sqftMin);
      if (sqftMin !== null && listing.sqft < sqftMin) return false;
      const sqftMax = num(filters.sqftMax);
      if (sqftMax !== null && listing.sqft > sqftMax) return false;

      const lotMin = num(filters.lotMin);
      if (lotMin !== null && listing.lot < lotMin) return false;
      const lotMax = num(filters.lotMax);
      if (lotMax !== null && listing.lot > lotMax) return false;

      const yearMin = num(filters.yearMin);
      if (yearMin !== null && listing.yearBuilt < yearMin) return false;
      const yearMax = num(filters.yearMax);
      if (yearMax !== null && listing.yearBuilt > yearMax) return false;

      const daysMin = num(filters.daysMin);
      if (daysMin !== null && listing.daysOnMarket < daysMin) return false;
      const daysMax = num(filters.daysMax);
      if (daysMax !== null && listing.daysOnMarket > daysMax) return false;

      if (filters.exclude55 && listing.features.includes('55+ Community')) return false;
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
          listing.listingType,
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
      case 'sqft-desc':
        sorted.sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        sorted.sort((a, b) => a.daysOnMarket - b.daysOnMarket);
    }
    return sorted;
  }, [filters, sort]);

  return (
    <section id="exclusive-search" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="01">Search the Exclusive Network</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Explore <em className="italic">Off-Market</em> Opportunities
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Filter handpicked and coming-soon homes across Washington, D.C., Maryland and Northern Virginia — then
            request a private tour before they reach the public market.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="flex flex-col gap-4 rounded-[24px] border border-background-300 bg-background-50 p-4 md:flex-row md:items-center md:p-5">
            <div className="flex items-center gap-1 rounded-full border border-background-300 bg-background-100 p-1">
              {searchTypeOptions.map((option) => {
                const active = option === filters.searchType;
                return (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter('searchType', option)}
                    className={`whitespace-nowrap rounded-full px-4 py-2 text-[12.5px] font-semibold transition-colors duration-300 ${
                      active
                        ? 'bg-foreground-950 text-background-50'
                        : 'text-foreground-600 hover:text-foreground-950'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>

            <select
              aria-label="Search by community"
              value={filters.community}
              onChange={(event) => setFilter('community', event.target.value)}
              className="rounded-full border border-background-300 bg-background-50 px-4 py-2.5 text-[12.5px] text-foreground-800 outline-none transition-colors duration-300 focus:border-foreground-500 md:w-[190px]"
            >
              <option value="">Search by Community</option>
              {communities.map((community) => (
                <option key={community} value={community}>
                  {community}
                </option>
              ))}
            </select>

            <div className="flex flex-1 items-center gap-2 rounded-full border border-background-300 bg-background-50 px-4 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-foreground-400" aria-hidden="true" />
              <input
                type="text"
                aria-label="Search by city, neighborhood or address"
                value={filters.location}
                onChange={(event) => setFilter('location', event.target.value)}
                placeholder="City, neighborhood or address"
                className="w-full bg-transparent text-[13px] text-foreground-900 outline-none placeholder:text-foreground-400"
              />
            </div>

            <button
              type="button"
              className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
            >
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Find my dream home
            </button>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr] lg:items-start">
          <aside className="hidden lg:sticky lg:top-28 lg:block">
            <div className="flex flex-col overflow-hidden rounded-[24px] border border-background-300 bg-background-50 p-6 lg:h-[calc(100svh-9rem)] lg:min-h-[460px]">
              <SearchFilters filters={filters} update={setFilter} onReset={reset} activeCount={activeCount} />
            </div>
          </aside>

          <div>
            <ExclusiveMap listings={results} activeId={activeId} onActiveChange={setActiveId} />

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[13px] text-foreground-600">
                <span className="font-heading text-[19px] text-foreground-950">{results.length}</span>{' '}
                {results.length === 1 ? 'exclusive listing' : 'exclusive listings'}
                {filters.searchType ? ` · ${filters.searchType}` : ''}
              </p>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 px-4 py-2.5 text-[12.5px] font-semibold text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950 lg:hidden"
                >
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Filters{activeCount > 0 ? ` (${activeCount})` : ''}
                </button>

                <label className="inline-flex items-center gap-2 rounded-full border border-background-300 bg-background-50 px-4 py-2.5 text-[12.5px] text-foreground-700">
                  <ArrowUpDown className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
                  <span className="sr-only">Sort listings</span>
                  <select
                    aria-label="Sort listings"
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortKey)}
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
              <div data-product-shop className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((listing) => (
                  <ExclusiveListingCard
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
                    No results matching your search criteria were found.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset Filters
                </button>
              </div>
            )}

            <p className="mt-8 border-t border-background-300 pt-6 text-[11.5px] leading-relaxed text-foreground-500">
              {exclusiveDisclaimer}
            </p>
          </div>
        </div>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            aria-label="Close filters"
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-foreground-950/50 backdrop-blur-sm"
          />
          <div className="drawer-item absolute inset-y-0 right-0 flex w-full max-w-[380px] flex-col border-l border-background-300 bg-background-50 p-6">
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              aria-label="Close filters"
              className="mb-4 flex h-10 w-10 items-center justify-center self-end rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="min-h-0 flex-1">
              <SearchFilters
                filters={filters}
                update={setFilter}
                onReset={reset}
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