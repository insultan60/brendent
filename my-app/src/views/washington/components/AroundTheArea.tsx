'use client';

import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Briefcase, Coffee, HeartPulse, PawPrint, Scissors, ShoppingBag, Sprout, Utensils, Wine } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { aroundCategories, aroundCopy } from '@/mocks/washingtonData';
import { Eyebrow } from '@/views/home-v2/components/shared';

interface AroundPlace {
  name: string;
  detail: string;
}

interface AroundCategory {
  id: string;
  label: string;
  icon: string;
  places: AroundPlace[];
}

interface AroundCopy {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  text: string;
}

interface AroundTheAreaProps {
  categories?: AroundCategory[];
  copy?: AroundCopy;
}

const iconMap: Record<string, LucideIcon> = {
  utensils: Utensils,
  wine: Wine,
  'shopping-bag': ShoppingBag,
  'heart-pulse': HeartPulse,
  coffee: Coffee,
  briefcase: Briefcase,
  sprout: Sprout,
  scissors: Scissors,
  'paw-print': PawPrint,
};

export default function AroundTheArea({ categories = aroundCategories, copy = aroundCopy }: AroundTheAreaProps) {
  const [activeId, setActiveId] = useState(categories[0].id);
  const active = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <section id="the-area" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow index="05" className="justify-center">
            {copy.eyebrow}
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            {copy.titleLead} <em className="italic">{copy.titleAccent}</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">{copy.text}</p>
        </Reveal>

        <Reveal className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 rounded-full border border-background-300 bg-background-100 p-1">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] ?? Utensils;
              const isActive = category.id === activeId;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveId(category.id)}
                  aria-pressed={isActive}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-5 py-2.5 text-[12.5px] font-medium transition-colors duration-300 ${
                    isActive ? 'bg-foreground-950 text-background-50' : 'text-foreground-600 hover:text-foreground-950'
                  }`}
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {category.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div key={active.id} className="blog-fade mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {active.places.map((place) => {
            const Icon = iconMap[active.icon] ?? Utensils;
            return (
              <article
                key={place.name}
                className="res-card group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-100 p-7"
              >
                <span className="res-card-hairline absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-transparent" aria-hidden="true" />
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                  <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-heading text-[21px] leading-snug text-foreground-950">{place.name}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{place.detail}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}