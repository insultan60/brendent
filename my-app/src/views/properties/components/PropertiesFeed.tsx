'use client';

import { useEffect, useMemo, useRef } from 'react';
import { ArrowUpDown, ExternalLink, RotateCcw, Search } from 'lucide-react';
import { propertiesDisclaimer, sortOptions } from '@/mocks/propertiesData';
import {
  createInitialFilters,
  isClosed,
  type Listing,
  type PropertyFilters,
  type PropertySort,
  type StatusTab,
} from '@/views/properties/types';
import { num } from '@/views/properties/utils';
import PropertiesMap from '@/views/properties/components/PropertiesMap';
import PropertyCard from '@/views/properties/components/PropertyCard';

interface PropertiesFeedProps {
  listings: Listing[];
  fullMlsUrl: string;
  filters: PropertyFilters;
  setFilter: <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => void;
  sort: PropertySort;
  setSort: (sort: PropertySort) => void;
  activeId: string | null;
  setActiveId: (id: string | null) => void;
}

const PRICE_STEPS = [100000, 200000, 300000, 400000, 500000, 750000, 1000000, 1500000, 2000000, 3000000];
const priceLabel = (value: number) =>
  value >= 1000000 ? `$${value / 1000000}M` : `$${Math.round(value / 1000)}K`;

const selectClass =
  'rounded-full border border-background-300 bg-background-50 px-4 py-2.5 text-[12.5px] font-medium text-foreground-800 outline-none transition-colors duration-300 hover:border-foreground-400 focus:border-foreground-950';

function matchesTab(listing: Listing, tab: StatusTab) {
  if (tab === 'sold') return isClosed(listing.status);
  if (tab === 'active') return !isClosed(listing.status);
  return true;
}

export default function PropertiesFeed({
  listings,
  fullMlsUrl,
  filters,
  setFilter,
  sort,
  setSort,
  activeId,
  setActiveId,
}: PropertiesFeedProps) {
  const cardRefs = useRef(new Map<string, HTMLAnchorElement>());

  const counts = useMemo(
    () => ({
      all: listings.length,
      active: listings.filter((l) => matchesTab(l, 'active')).length,
      sold: listings.filter((l) => matchesTab(l, 'sold')).length,
    }),
    [listings],
  );

  const results = useMemo(() => {
    const location = filters.location.trim().toLowerCase();
    const priceMin = num(filters.priceMin);
    const priceMax = num(filters.priceMax);
    const bedsMin = num(filters.bedsMin);
    const list = listings.filter((listing) => {
      if (!matchesTab(listing, filters.status)) return false;
      if (location && !`${listing.address} ${listing.city} ${listing.state} ${listing.zip}`.toLowerCase().includes(location)) {
        return false;
      }
      if (priceMin !== null && listing.price < priceMin) return false;
      if (priceMax !== null && listing.price > priceMax) return false;
      if (bedsMin !== null && listing.beds < bedsMin) return false;
      return true;
    });
    const sorted = [...list];
    if (sort === 'price-asc') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') sorted.sort((a, b) => b.price - a.price);
    else sorted.sort((a, b) => b.date.localeCompare(a.date));
    return sorted;
  }, [listings, filters, sort]);

  const filtered =
    filters.location.trim() !== '' || filters.priceMin !== '' || filters.priceMax !== '' || filters.bedsMin !== '';

  const resetAll = () => {
    const initial = createInitialFilters();
    (Object.keys(initial) as (keyof PropertyFilters)[]).forEach((key) => setFilter(key, initial[key]));
  };

  // A pin clicked on the map brings its card into view in the list.
  const lastScrolled = useRef<string | null>(null);
  useEffect(() => {
    if (!activeId || lastScrolled.current === activeId) return;
    const card = cardRefs.current.get(activeId);
    if (card && !card.matches(':hover')) {
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      lastScrolled.current = activeId;
    }
  }, [activeId]);

  const tabs: { key: StatusTab; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'active', label: 'Active' },
    { key: 'sold', label: 'Sold' },
  ];

  return (
    <section id="properties-feed" className="scroll-mt-20 bg-background-100 px-5 pb-20 pt-6 md:px-10 md:pb-28 md:pt-8">
      <div className="mx-auto max-w-[1500px]">

        <div className="rounded-[24px] border border-background-300 bg-background-50 p-4 md:p-5">
          <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
            <div role="tablist" aria-label="Listing status" className="flex shrink-0 rounded-full bg-background-100 p-1">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={filters.status === tab.key}
                  onClick={() => setFilter('status', tab.key)}
                  className={`flex-1 whitespace-nowrap rounded-full px-4 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                    filters.status === tab.key
                      ? 'bg-foreground-950 text-background-50'
                      : 'text-foreground-600 hover:text-foreground-950'
                  }`}
                >
                  {tab.label} <span className="opacity-60">{counts[tab.key]}</span>
                </button>
              ))}
            </div>
            <label className="flex flex-1 items-center gap-2.5 rounded-full border border-background-300 bg-background-100 px-4 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-foreground-400" aria-hidden="true" />
              <span className="sr-only">City, address or zip</span>
              <input
                type="search"
                value={filters.location}
                onChange={(event) => setFilter('location', event.target.value)}
                placeholder="City, address or zip"
                className="w-full bg-transparent text-[13px] text-foreground-900 outline-none placeholder:text-foreground-400"
              />
            </label>
            <div className="flex flex-wrap items-center gap-2">
              <select
                aria-label="Minimum price"
                value={filters.priceMin}
                onChange={(event) => setFilter('priceMin', event.target.value)}
                className={selectClass}
              >
                <option value="">Min price</option>
                {PRICE_STEPS.map((value) => (
                  <option key={value} value={value}>
                    {priceLabel(value)}+
                  </option>
                ))}
              </select>
              <select
                aria-label="Maximum price"
                value={filters.priceMax}
                onChange={(event) => setFilter('priceMax', event.target.value)}
                className={selectClass}
              >
                <option value="">Max price</option>
                {PRICE_STEPS.map((value) => (
                  <option key={value} value={value}>
                    Up to {priceLabel(value)}
                  </option>
                ))}
              </select>
              <select
                aria-label="Minimum bedrooms"
                value={filters.bedsMin}
                onChange={(event) => setFilter('bedsMin', event.target.value)}
                className={selectClass}
              >
                <option value="">Beds</option>
                {[1, 2, 3, 4, 5].map((value) => (
                  <option key={value} value={value}>
                    {value}+ beds
                  </option>
                ))}
              </select>
              <label className="inline-flex items-center gap-2 rounded-full border border-background-300 bg-background-50 px-4 py-2.5 text-[12.5px] text-foreground-700">
                <ArrowUpDown className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
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
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <div className="h-[380px] lg:sticky lg:top-24 lg:h-[calc(100svh-7rem)] lg:min-h-[520px]">
              <PropertiesMap
                listings={results}
                activeId={activeId}
                onActiveChange={setActiveId}
                fullMlsUrl={fullMlsUrl}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-[13px] text-foreground-600">
                Showing <span className="font-heading text-[18px] text-foreground-950">{results.length}</span> of{' '}
                {listings.length} {listings.length === 1 ? 'home' : 'homes'}
              </p>
              {filtered ? (
                <button
                  type="button"
                  onClick={resetAll}
                  className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-foreground-600 underline-offset-4 transition-colors duration-300 hover:text-foreground-950 hover:underline"
                >
                  <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  Clear filters
                </button>
              ) : null}
            </div>

            {results.length > 0 ? (
              <div className="mt-5 flex flex-col gap-4">
                {results.map((listing) => (
                  <PropertyCard
                    key={listing.id}
                    ref={(node) => {
                      if (node) cardRefs.current.set(listing.id, node);
                      else cardRefs.current.delete(listing.id);
                    }}
                    listing={listing}
                    onHover={setActiveId}
                    highlighted={listing.id === activeId}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-5 flex flex-col items-center justify-center gap-5 rounded-[26px] border border-dashed border-background-400 bg-background-50 px-6 py-16 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary-100 text-secondary-900">
                  <Search className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading text-[24px] leading-none text-foreground-950">
                    {listings.length === 0 ? 'Listings are loading soon' : 'None of Brandon’s homes match'}
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-foreground-600">
                    Search the full MLS to see every home for sale that fits, across D.C., Maryland and Virginia.
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={fullMlsUrl}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                  >
                    Search My Full MLS
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                  {filtered || filters.status !== 'all' ? (
                    <button
                      type="button"
                      onClick={() => {
                        resetAll();
                        setFilter('status', 'all');
                      }}
                      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 px-6 py-3 text-[12.5px] font-semibold text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
                    >
                      <RotateCcw className="h-4 w-4" aria-hidden="true" />
                      Reset filters
                    </button>
                  ) : null}
                </div>
              </div>
            )}

            {results.length > 0 ? (
              <div className="mt-4 rounded-[22px] bg-foreground-950 p-6 text-background-50 md:p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-background-200/80">
                  Looking for more?
                </p>
                <h3 className="mt-3 font-heading text-[26px] leading-tight">Search My Full MLS</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-background-200">
                  See every active home on Bright MLS across D.C., Maryland and Virginia, on a live map with saved
                  searches and new-listing alerts.
                </p>
                <a
                  href={fullMlsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-5 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
                >
                  Start Searching
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            ) : null}

            <p className="mt-8 border-t border-background-300 pt-6 text-[11.5px] leading-relaxed text-foreground-500">
              {propertiesDisclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
