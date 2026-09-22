'use client';

import { useMemo, useState } from 'react';
import { ExternalLink, Phone, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { schoolFilters, schools, schoolsCopy } from '@/mocks/washingtonData';
import { Eyebrow } from '@/views/home-v2/components/shared';

interface SchoolItem {
  name: string;
  phone: string;
  type: string;
  grades: string;
  rating: number;
  category: string;
  categories?: string[];
  website?: string;
}

interface SchoolsCopy {
  eyebrow: string;
  title: string;
  text: string;
}

interface SchoolsInAreaProps {
  filters?: { id: string; label: string }[];
  items?: SchoolItem[];
  copy?: SchoolsCopy;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex items-center justify-center gap-1 md:justify-end" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${star <= rating ? 'fill-accent-500 text-accent-500' : 'text-foreground-300'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export default function SchoolsInArea({ filters = schoolFilters, items = schools, copy = schoolsCopy }: SchoolsInAreaProps) {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(
    () =>
      filter === 'all'
        ? items
        : items.filter(
            (school) => school.category === filter || (school.categories?.includes(filter) ?? false),
          ),
    [filter, items],
  );

  return (
    <section id="top-schools" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="04">{copy.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {copy.title}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">{copy.text}</p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-2 rounded-full border border-background-300 bg-background-50 p-1">
              {filters.map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setFilter(option.id)}
                  aria-pressed={filter === option.id}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-[12.5px] font-medium transition-colors duration-300 ${
                    filter === option.id
                      ? 'bg-foreground-950 text-background-50'
                      : 'text-foreground-600 hover:text-foreground-950'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-[26px] border border-background-200 bg-background-50">
            {filtered.map((school, index) => (
              <div
                key={school.name}
                className={`group grid grid-cols-1 items-center gap-4 px-6 py-6 transition-colors duration-300 hover:bg-background-100 md:grid-cols-[1.6fr_0.9fr_0.6fr_0.55fr_0.9fr] md:gap-6 md:px-8 ${
                  index !== 0 ? 'border-t border-background-200' : ''
                }`}
              >
                <h3 className="font-heading text-[19px] leading-snug text-foreground-950 md:text-[20px]">
                  {school.name}
                </h3>
                <span className="flex items-center gap-2 text-[13px] text-foreground-600">
                  <Phone className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
                  {school.phone}
                </span>
                <span className="text-[12.5px] capitalize text-foreground-600">{school.type}</span>
                <span className="text-[12.5px] text-foreground-600">{school.grades}</span>
                {school.website ? (
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap rounded-full border border-foreground-300 px-4 py-2 text-[12px] font-semibold text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
                  >
                    Website
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                ) : (
                  <Stars rating={school.rating} />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}