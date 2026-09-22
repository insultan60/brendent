'use client';

import { useEffect, useState } from 'react';
import { Building2, ChevronDown, Search, X } from 'lucide-react';
import { quickSearchAreas } from '@/mocks/homeData';

export default function QuickSearchBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4 md:bottom-6">
      <div className="pointer-events-auto flex w-full max-w-3xl flex-col gap-2 rounded-2xl border border-background-300/80 bg-background-50/95 p-2.5 backdrop-blur-xl sm:flex-row sm:items-center md:rounded-full">
        <label className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2 md:rounded-full">
          <Building2 className="h-5 w-5 text-primary-500" aria-hidden="true" />
          <span className="sr-only">Search by community</span>
          <select
            defaultValue=""
            className="w-full cursor-pointer appearance-none bg-transparent text-sm text-foreground-800 outline-none"
          >
            <option value="" disabled>
              Search by Community
            </option>
            {quickSearchAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
          <ChevronDown className="h-4 w-4 text-foreground-400" aria-hidden="true" />
        </label>

        <span className="hidden h-6 w-px bg-background-300 sm:block" aria-hidden="true" />

        <form
          className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2 md:rounded-full"
          onSubmit={(event) => event.preventDefault()}
        >
          <Search className="h-5 w-5 text-foreground-400" aria-hidden="true" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Find my dream home"
            aria-label="Find my dream home"
            className="w-full bg-transparent text-sm text-foreground-800 placeholder:text-foreground-400 outline-none"
          />
        </form>

        <div className="flex items-center gap-2">
          <a
            href="#listings"
            className="whitespace-nowrap rounded-xl bg-primary-500 px-5 py-2.5 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 md:rounded-full"
          >
            Search
          </a>
          <button
            type="button"
            aria-label="Close quick search"
            onClick={() => setDismissed(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground-500 transition-colors hover:bg-background-100 hover:text-foreground-900"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}