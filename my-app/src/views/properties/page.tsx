'use client';

import { useCallback, useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import CtaV2 from '@/views/home-v2/components/CtaV2';
import PropertiesHero from '@/views/properties/components/PropertiesHero';
import PropertiesFeed from '@/views/properties/components/PropertiesFeed';
import PropertiesBrandBand from '@/views/properties/components/PropertiesBrandBand';
import { createInitialFilters, type PropertyFilters, type PropertySort } from '@/views/properties/types';

export default function Properties() {
  useReveal();

  const [filters, setFilters] = useState<PropertyFilters>(createInitialFilters);
  const [sort, setSort] = useState<PropertySort>('newest');
  const [activeId, setActiveId] = useState<string | null>(null);

  const setFilter = useCallback(
    <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => {
      setFilters((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const scrollToFeed = useCallback(() => {
    document.getElementById('properties-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <PropertiesHero
          location={filters.location}
          onLocationChange={(value) => setFilter('location', value)}
          onSearch={scrollToFeed}
        />
        <PropertiesFeed
          filters={filters}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
          activeId={activeId}
          setActiveId={setActiveId}
        />
        <CtaV2 />
        <PropertiesBrandBand />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}