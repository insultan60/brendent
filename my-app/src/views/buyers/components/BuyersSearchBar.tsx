'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Search } from 'lucide-react';

const bedOptions = ['Any', '1+', '2+', '3+', '4+', '5+'];
const bathOptions = ['Any', '1+', '1.5+', '2+', '2.5+', '3+', '4+'];

/** Buyer-facing property search bar: location, price range, beds, baths. */
export default function BuyersSearchBar() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState<'' | 'price' | 'beds' | 'baths'>('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [beds, setBeds] = useState('Any');
  const [baths, setBaths] = useState('Any');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!open) return undefined;
    const onClick = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen('');
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const priceLabel =
    minPrice || maxPrice ? `$${minPrice || '0'} – $${maxPrice || 'Any'}` : 'Price';

  const handleSearch = () => {
    const where = location.trim() || 'the DMV';
    const budget =
      minPrice || maxPrice
        ? ` between $${minPrice || '0'} and $${maxPrice || 'any'}`
        : '';
    const roomText = `${beds === 'Any' ? 'any' : beds} beds and ${
      baths === 'Any' ? 'any' : baths
    } baths`;
    setResult(`Showing ${roomText} near ${where}${budget}.`);
    setOpen('');
  };

  const toggle = (key: 'price' | 'beds' | 'baths') => {
    setOpen((current) => (current === key ? '' : key));
  };

  return (
    <div ref={containerRef} className="v2-rise w-full max-w-4xl" style={{ animationDelay: '300ms' }}>
      <div className="flex flex-col gap-2 rounded-[26px] border border-background-50/15 bg-background-50/95 p-2.5 backdrop-blur-xl lg:flex-row lg:items-center lg:rounded-full">
        <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 lg:rounded-full">
          <MapPin className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
          <span className="sr-only">Enter City, Address or Zip</span>
          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            placeholder="Enter City, Address or Zip"
            className="w-full bg-transparent text-sm text-foreground-800 placeholder:text-foreground-400 outline-none"
          />
        </label>

        <span className="hidden h-6 w-px bg-background-300 lg:block" aria-hidden="true" />

        <div className="relative flex-1 lg:max-w-[210px]">
          <button
            type="button"
            onClick={() => toggle('price')}
            aria-expanded={open === 'price'}
            className={`flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-2xl px-4 py-3 text-sm transition-colors duration-300 hover:bg-background-100 lg:rounded-full ${
              minPrice || maxPrice ? 'text-foreground-900' : 'text-foreground-600'
            }`}
          >
            {priceLabel}
            <ChevronDown
              className={`h-4 w-4 text-foreground-400 transition-transform duration-300 ${
                open === 'price' ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {open === 'price' ? (
            <div className="absolute bottom-[calc(100%+10px)] left-0 z-20 w-[260px] rounded-2xl border border-background-300 bg-background-50 p-4 shadow-none">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-foreground-500">
                Price Range
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  inputMode="numeric"
                  value={minPrice}
                  onChange={(event) => setMinPrice(event.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Min"
                  aria-label="Minimum price"
                  className="w-full rounded-xl border border-background-300 bg-background-100 px-3 py-2.5 text-sm text-foreground-800 placeholder:text-foreground-400 outline-none focus:border-foreground-400"
                />
                <span className="text-foreground-400" aria-hidden="true">
                  —
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={maxPrice}
                  onChange={(event) => setMaxPrice(event.target.value.replace(/[^0-9]/g, ''))}
                  placeholder="Max"
                  aria-label="Maximum price"
                  className="w-full rounded-xl border border-background-300 bg-background-100 px-3 py-2.5 text-sm text-foreground-800 placeholder:text-foreground-400 outline-none focus:border-foreground-400"
                />
              </div>
            </div>
          ) : null}
        </div>

        <span className="hidden h-6 w-px bg-background-300 lg:block" aria-hidden="true" />

        <div className="relative flex-1 lg:max-w-[150px]">
          <button
            type="button"
            onClick={() => toggle('beds')}
            aria-expanded={open === 'beds'}
            className="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-2xl px-4 py-3 text-sm text-foreground-600 transition-colors duration-300 hover:bg-background-100 lg:rounded-full"
          >
            {beds === 'Any' ? 'Beds' : `${beds} Beds`}
            <ChevronDown
              className={`h-4 w-4 text-foreground-400 transition-transform duration-300 ${
                open === 'beds' ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {open === 'beds' ? (
            <div className="absolute bottom-[calc(100%+10px)] left-0 z-20 w-[180px] rounded-2xl border border-background-300 bg-background-50 p-2">
              {bedOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setBeds(option);
                    setOpen('');
                  }}
                  className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors duration-200 ${
                    beds === option
                      ? 'bg-foreground-950 text-background-50'
                      : 'text-foreground-700 hover:bg-background-100'
                  }`}
                >
                  {option === 'Any' ? 'Any' : `${option} Beds`}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <span className="hidden h-6 w-px bg-background-300 lg:block" aria-hidden="true" />

        <div className="relative flex-1 lg:max-w-[150px]">
          <button
            type="button"
            onClick={() => toggle('baths')}
            aria-expanded={open === 'baths'}
            className="flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-2xl px-4 py-3 text-sm text-foreground-600 transition-colors duration-300 hover:bg-background-100 lg:rounded-full"
          >
            {baths === 'Any' ? 'Baths' : `${baths} Baths`}
            <ChevronDown
              className={`h-4 w-4 text-foreground-400 transition-transform duration-300 ${
                open === 'baths' ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {open === 'baths' ? (
            <div className="absolute bottom-[calc(100%+10px)] left-0 z-20 w-[180px] rounded-2xl border border-background-300 bg-background-50 p-2">
              {bathOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setBaths(option);
                    setOpen('');
                  }}
                  className={`block w-full rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors duration-200 ${
                    baths === option
                      ? 'bg-foreground-950 text-background-50'
                      : 'text-foreground-700 hover:bg-background-100'
                  }`}
                >
                  {option === 'Any' ? 'Any' : `${option} Baths`}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-500 px-7 py-3.5 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 lg:rounded-full"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search
        </button>
      </div>

      {result ? (
        <p className="mt-4 text-[13px] font-medium text-background-100 [text-shadow:0_1px_12px_rgba(0,0,0,0.5)]">
          {result}
        </p>
      ) : null}
    </div>
  );
}