'use client';

import { useEffect, useRef, useState } from 'react';
import { ChevronDown, MapPin, Search } from 'lucide-react';
import { areaOptions, quickLinks } from '@/mocks/washingtonData';

interface AreaQuickNavProps {
  areas?: string[];
  defaultLabel?: string;
}

export default function AreaQuickNav({ areas = areaOptions, defaultLabel = 'Neighborhoods' }: AreaQuickNavProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultLabel);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <section className="sticky top-[74px] z-40 border-b border-background-300/70 bg-background-50/95 backdrop-blur-xl md:top-[88px]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8 md:px-10">
        <div ref={wrapperRef} className="relative w-full lg:max-w-xs">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-haspopup="listbox"
            aria-expanded={open}
            className="flex w-full items-center justify-between gap-3 whitespace-nowrap rounded-full border border-background-300 bg-background-100 px-5 py-3 text-[13px] font-medium text-foreground-800 transition-colors duration-300 hover:border-foreground-400"
          >
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-foreground-400" aria-hidden="true" />
              {selected}
            </span>
            <ChevronDown
              className={`h-4 w-4 text-foreground-500 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>

          {open ? (
            <div
              role="listbox"
              className="absolute left-0 top-full z-50 mt-3 max-h-80 w-full min-w-[260px] overflow-y-auto rounded-2xl border border-background-300 bg-background-50 p-2"
            >
              {areas.map((area) => (
                <button
                  key={area}
                  type="button"
                  role="option"
                  aria-selected={area === selected}
                  onClick={() => {
                    setSelected(area);
                    setOpen(false);
                  }}
                  className={`block w-full rounded-xl px-4 py-2.5 text-left text-[13px] transition-colors duration-200 ${
                    area === selected
                      ? 'bg-foreground-950 text-background-50'
                      : 'text-foreground-700 hover:bg-background-100 hover:text-foreground-950'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {quickLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative whitespace-nowrap text-[13px] font-medium text-foreground-700 transition-colors duration-300 hover:text-foreground-950"
            >
              {link.label}
              <span
                className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground-950 transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </a>
          ))}
        </nav>

        <a
          href="/properties"
          className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[13px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
        >
          <Search className="h-4 w-4" aria-hidden="true" />
          Search For Listings
        </a>
      </div>
    </section>
  );
}