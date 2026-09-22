'use client';

import { ChevronDown, RotateCcw } from 'lucide-react';
import type { PropertyFilters } from '@/views/properties/types';
import {
  bathsOptions,
  bedsOptions,
  daysOptions,
  featureOptions,
  poolOptions,
  priceOptions,
  propertyTypeOptions,
  searchTypeOptions,
  sqftOptions,
  statusOptions,
  yearOptions,
} from '@/mocks/propertiesData';

interface PropertiesFiltersProps {
  filters: PropertyFilters;
  update: <K extends keyof PropertyFilters>(key: K, value: PropertyFilters[K]) => void;
  toggle: (key: 'propertyTypes' | 'statuses' | 'features', value: string) => void;
  onReset: () => void;
  onApply?: () => void;
  activeCount: number;
}

function toOptions(values: string[], lead = 'No Min') {
  return values.map((value, index) => ({ label: index === 0 ? lead : `$${value}`, value }));
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
        {label}
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className="w-full appearance-none rounded-md border border-background-300 bg-background-50 px-3 py-2.5 pr-8 text-[12.5px] text-foreground-900 outline-none transition-colors duration-300 focus:border-foreground-500"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-foreground-400"
          aria-hidden="true"
        />
      </div>
    </label>
  );
}

function Chip({ active, children, onClick }: { active: boolean; children: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`whitespace-nowrap rounded-full border px-3 py-1.5 text-[11.5px] font-medium transition-colors duration-300 ${
        active
          ? 'border-foreground-950 bg-foreground-950 text-background-50'
          : 'border-background-300 text-foreground-700 hover:border-foreground-400 hover:text-foreground-950'
      }`}
    >
      {children}
    </button>
  );
}

function SectionTitle({ children }: { children: string }) {
  return (
    <h3 className="text-[10.5px] font-semibold uppercase tracking-[0.22em] text-foreground-500">{children}</h3>
  );
}

export default function PropertiesFilters({
  filters,
  update,
  toggle,
  onReset,
  onApply,
  activeCount,
}: PropertiesFiltersProps) {
  const sqft = toOptions(sqftOptions, 'No Min');
  const year = yearOptions.map((value, index) => ({ label: index === 0 ? 'Any' : value, value }));

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 border-b border-background-200 pb-4">
        <div>
          <p className="font-heading text-[22px] leading-none text-foreground-950">Refine Search</p>
          <p className="mt-1.5 text-[12px] text-foreground-500">
            {activeCount > 0 ? `${activeCount} filter${activeCount === 1 ? '' : 's'} applied` : 'No filters applied'}
          </p>
        </div>
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border border-background-300 px-3.5 py-2 text-[11.5px] font-semibold text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
        >
          <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
          Reset
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-7 overflow-y-auto py-6">
        <div>
          <SectionTitle>Search Type</SectionTitle>
          <div className="mt-3 flex flex-wrap gap-2">
            {searchTypeOptions.map((option) => (
              <Chip
                key={option}
                active={filters.searchType === option}
                onClick={() => update('searchType', option)}
              >
                {option}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Price Range</SectionTitle>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <FilterSelect
              label="Min"
              value={filters.priceMin}
              options={priceOptions}
              onChange={(value) => update('priceMin', value)}
            />
            <FilterSelect
              label="Max"
              value={filters.priceMax}
              options={priceOptions.map((option) => ({
                label: option.value ? option.label : 'No Max',
                value: option.value,
              }))}
              onChange={(value) => update('priceMax', value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <SectionTitle>Beds</SectionTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              {bedsOptions.map((option) => (
                <Chip key={option.value || 'any'} active={filters.bedsMin === option.value} onClick={() => update('bedsMin', option.value)}>
                  {option.label}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <SectionTitle>Baths</SectionTitle>
            <div className="mt-3 flex flex-wrap gap-2">
              {bathsOptions.map((option) => (
                <Chip key={option.value || 'any'} active={filters.bathsMin === option.value} onClick={() => update('bathsMin', option.value)}>
                  {option.label}
                </Chip>
              ))}
            </div>
          </div>
        </div>

        <div>
          <SectionTitle>Property Type</SectionTitle>
          <div className="mt-3 flex flex-wrap gap-2">
            {propertyTypeOptions.map((option) => (
              <Chip key={option} active={filters.propertyTypes.includes(option)} onClick={() => toggle('propertyTypes', option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>

        <div>
          <SectionTitle>Listing Status</SectionTitle>
          <div className="mt-3 flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <Chip key={option} active={filters.statuses.includes(option)} onClick={() => toggle('statuses', option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FilterSelect label="Sq Ft Min" value={filters.sqftMin} options={sqft} onChange={(value) => update('sqftMin', value)} />
          <FilterSelect
            label="Sq Ft Max"
            value={filters.sqftMax}
            options={sqft.map((option) => ({ label: option.value ? option.label : 'No Max', value: option.value }))}
            onChange={(value) => update('sqftMax', value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FilterSelect label="Year Built Min" value={filters.yearMin} options={year} onChange={(value) => update('yearMin', value)} />
          <FilterSelect label="Year Built Max" value={filters.yearMax} options={year} onChange={(value) => update('yearMax', value)} />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <FilterSelect label="Days on Market" value={filters.daysMax} options={daysOptions} onChange={(value) => update('daysMax', value)} />
          <FilterSelect
            label="Pool"
            value={filters.poolType}
            options={poolOptions.map((option) => ({ label: option, value: option }))}
            onChange={(value) => update('poolType', value)}
          />
        </div>

        <div>
          <SectionTitle>Home Features</SectionTitle>
          <div className="mt-3 flex flex-wrap gap-2">
            {featureOptions.map((option) => (
              <Chip key={option} active={filters.features.includes(option)} onClick={() => toggle('features', option)}>
                {option}
              </Chip>
            ))}
          </div>
        </div>

        <label className="flex items-center justify-between gap-3 rounded-md border border-background-300 bg-background-50 px-4 py-3">
          <span className="text-[12.5px] font-medium text-foreground-800">Open Houses Only</span>
          <button
            type="button"
            role="switch"
            aria-checked={filters.openHouse}
            onClick={() => update('openHouse', !filters.openHouse)}
            className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-300 ${
              filters.openHouse ? 'bg-primary-500' : 'bg-background-400'
            }`}
          >
            <span
              className={`absolute top-1/2 h-[18px] w-[18px] -translate-y-1/2 rounded-full bg-background-50 transition-all duration-300 ${
                filters.openHouse ? 'left-[26px]' : 'left-1'
              }`}
            />
          </button>
        </label>

        <label className="block">
          <span className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-500">
            Keywords
          </span>
          <input
            type="text"
            value={filters.keyword}
            onChange={(event) => update('keyword', event.target.value)}
            placeholder="Waterfront, garage, renovation"
            className="w-full rounded-md border border-background-300 bg-background-50 px-3 py-2.5 text-[12.5px] text-foreground-900 outline-none transition-colors duration-300 placeholder:text-foreground-400 focus:border-foreground-500"
          />
        </label>
      </div>

      {onApply ? (
        <div className="border-t border-background-200 pt-4">
          <button
            type="button"
            onClick={onApply}
            className="btn-shimmer w-full whitespace-nowrap rounded-full bg-primary-500 px-6 py-3.5 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
          >
            Show Results
          </button>
        </div>
      ) : null}
    </div>
  );
}