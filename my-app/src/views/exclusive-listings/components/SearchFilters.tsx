'use client';

import type { ReactNode } from 'react';
import {
  bathsOptions,
  bedsOptions,
  daysOptions,
  generalFeatureOptions,
  listingTypeOptions,
  lotOptions,
  poolOptions,
  priceOptions,
  propertyTypeOptions,
  soldWithinOptions,
  sqftOptions,
  statusOptions,
  yearOptions,
} from '@/mocks/exclusiveData';
import type { ExclusiveFilters } from '@/views/exclusive-listings/types';

interface SearchFiltersProps {
  filters: ExclusiveFilters;
  update: <K extends keyof ExclusiveFilters>(key: K, value: ExclusiveFilters[K]) => void;
  onReset: () => void;
  onApply?: () => void;
  activeCount: number;
}

interface ShortOption {
  label: string;
  value: string;
}

const fieldClass =
  'w-full rounded-lg border border-background-300 bg-background-50 px-3.5 py-2.5 text-[13px] text-foreground-900 outline-none transition-colors duration-300 placeholder:text-foreground-400 focus:border-foreground-500';

const selectClass =
  'w-full appearance-none rounded-lg border border-background-300 bg-background-50 py-2.5 pl-3.5 pr-10 text-[13px] text-foreground-900 outline-none transition-colors duration-300 focus:border-foreground-500';

function Group({ title, hint, children }: { title: string; hint?: string; children: ReactNode }) {
  return (
    <div className="border-t border-background-200 py-6 first:border-t-0 first:pt-0">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-500">{title}</h3>
        {hint ? <span className="text-[11px] text-foreground-400">{hint}</span> : null}
      </div>
      {children}
    </div>
  );
}

function PillSingle({ options, value, onChange }: { options: ShortOption[]; value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={`${option.label}-${option.value}`}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-300 ${
              active
                ? 'border-foreground-950 bg-foreground-950 text-background-50'
                : 'border-background-300 text-foreground-600 hover:border-foreground-400 hover:text-foreground-950'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function PillMulti({
  options,
  values,
  onToggle,
}: {
  options: string[];
  values: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const active = values.includes(option);
        return (
          <button
            key={option}
            type="button"
            aria-pressed={active}
            onClick={() => onToggle(option)}
            className={`whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium transition-colors duration-300 ${
              active
                ? 'border-foreground-950 bg-foreground-950 text-background-50'
                : 'border-background-300 text-foreground-600 hover:border-foreground-400 hover:text-foreground-950'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

function SelectInput({
  value,
  onChange,
  options,
  placeholder,
  label,
}: {
  value: string;
  onChange: (value: string) => void;
  options: ShortOption[];
  placeholder?: string;
  label: string;
}) {
  return (
    <div className="relative">
      <select
        aria-label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={selectClass}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option key={`${option.label}-${option.value}`} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-3.5 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-foreground-500">
        <i className="ri-arrow-down-s-line text-base" aria-hidden="true" />
      </span>
    </div>
  );
}

function RangeInputs({
  minValue,
  maxValue,
  onMinChange,
  onMaxChange,
  minOptions,
  maxOptions,
  label,
  suffix,
}: {
  minValue: string;
  maxValue: string;
  onMinChange: (value: string) => void;
  onMaxChange: (value: string) => void;
  minOptions: string[];
  maxOptions: string[];
  label: string;
  suffix?: string;
}) {
  const toOptions = (values: string[], fallback: string): ShortOption[] =>
    values.map((item) => (item === '' ? { label: fallback, value: '' } : { label: `${item}${suffix ?? ''}`, value: item }));

  return (
    <div className="grid grid-cols-2 gap-3">
      <SelectInput
        label={`${label} minimum`}
        value={minValue}
        onChange={onMinChange}
        options={toOptions(minOptions, 'No min')}
      />
      <SelectInput
        label={`${label} maximum`}
        value={maxValue}
        onChange={onMaxChange}
        options={toOptions(maxOptions, 'No max')}
      />
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (value: boolean) => void }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-4 py-1">
      <span className="text-[13px] text-foreground-700">{label}</span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative flex h-6 w-11 shrink-0 items-center rounded-full border transition-colors duration-300 ${
          checked ? 'border-primary-500 bg-primary-500' : 'border-background-400 bg-background-200'
        }`}
      >
        <span
          className={`h-4 w-4 rounded-full bg-background-50 transition-transform duration-300 ${
            checked ? 'translate-x-[22px]' : 'translate-x-[3px]'
          }`}
        />
      </button>
    </label>
  );
}

export default function SearchFilters({ filters, update, onReset, onApply, activeCount }: SearchFiltersProps) {
  const toggleIn = (key: 'propertyTypes' | 'statuses' | 'features', value: string) => {
    const current = filters[key];
    const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
    update(key, next);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between gap-3 pb-4">
        <h2 className="font-heading text-[22px] leading-none text-foreground-950">Filters</h2>
        {activeCount > 0 ? (
          <span className="rounded-full bg-secondary-100 px-3 py-1 text-[11px] font-semibold text-secondary-900">
            {activeCount} active
          </span>
        ) : null}
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto pr-1">
        <Group title="Listing Type">
          <PillSingle
            options={listingTypeOptions.map((item) => ({ label: item, value: item }))}
            value={filters.listingType}
            onChange={(value) => update('listingType', value)}
          />
        </Group>

        <Group title="Price">
          <RangeInputs
            label="Price"
            minValue={filters.priceMin}
            maxValue={filters.priceMax}
            onMinChange={(value) => update('priceMin', value)}
            onMaxChange={(value) => update('priceMax', value)}
            minOptions={priceOptions.map((option) => option.value)}
            maxOptions={priceOptions.map((option) => option.value)}
          />
        </Group>

        <Group title="Beds" hint="Select a minimum">
          <PillSingle
            options={bedsOptions}
            value={filters.bedsMin}
            onChange={(value) => update('bedsMin', value)}
          />
        </Group>

        <Group title="Baths">
          <PillSingle
            options={bathsOptions}
            value={filters.bathsMin}
            onChange={(value) => update('bathsMin', value)}
          />
        </Group>

        <Group title="Property Type" hint="Optional">
          <PillMulti
            options={propertyTypeOptions}
            values={filters.propertyTypes}
            onToggle={(value) => toggleIn('propertyTypes', value)}
          />
        </Group>

        <Group title="Listing Status">
          <PillMulti options={statusOptions} values={filters.statuses} onToggle={(value) => toggleIn('statuses', value)} />
        </Group>

        <Group title="Property Details">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Square feet</p>
              <RangeInputs
                label="Square feet"
                minValue={filters.sqftMin}
                maxValue={filters.sqftMax}
                onMinChange={(value) => update('sqftMin', value)}
                onMaxChange={(value) => update('sqftMax', value)}
                minOptions={sqftOptions}
                maxOptions={sqftOptions}
              />
            </div>
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Lot size (acres)</p>
              <RangeInputs
                label="Lot size"
                minValue={filters.lotMin}
                maxValue={filters.lotMax}
                onMinChange={(value) => update('lotMin', value)}
                onMaxChange={(value) => update('lotMax', value)}
                minOptions={lotOptions}
                maxOptions={lotOptions}
              />
            </div>
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Year built</p>
              <RangeInputs
                label="Year built"
                minValue={filters.yearMin}
                maxValue={filters.yearMax}
                onMinChange={(value) => update('yearMin', value)}
                onMaxChange={(value) => update('yearMax', value)}
                minOptions={yearOptions}
                maxOptions={yearOptions}
              />
            </div>
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Days on market</p>
              <RangeInputs
                label="Days on market"
                minValue={filters.daysMin}
                maxValue={filters.daysMax}
                onMinChange={(value) => update('daysMin', value)}
                onMaxChange={(value) => update('daysMax', value)}
                minOptions={daysOptions}
                maxOptions={daysOptions}
              />
            </div>
          </div>
        </Group>

        <Group title="Sold Within">
          <SelectInput
            label="Sold within"
            value={filters.soldWithin}
            onChange={(value) => update('soldWithin', value)}
            options={soldWithinOptions.filter((option) => option.value !== '')}
            placeholder="Any"
          />
          <div className="mt-3">
            <Toggle
              label="Exclude 55+ communities"
              checked={filters.exclude55}
              onChange={(value) => update('exclude55', value)}
            />
          </div>
        </Group>

        <Group title="Open House & Tour">
          <Toggle label="Open house" checked={filters.openHouse} onChange={(value) => update('openHouse', value)} />
        </Group>

        <Group title="Home Features">
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Pool type</p>
              <SelectInput
                label="Pool type"
                value={filters.poolType}
                onChange={(value) => update('poolType', value)}
                options={poolOptions.filter((option) => option !== 'Any').map((option) => ({ label: option, value: option }))}
                placeholder="Any"
              />
            </div>
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">General features</p>
              <PillMulti
                options={generalFeatureOptions}
                values={filters.features}
                onToggle={(value) => toggleIn('features', value)}
              />
            </div>
            <div>
              <p className="mb-2 text-[12px] font-medium text-foreground-600">Search by keywords</p>
              <input
                type="text"
                aria-label="Search by keywords"
                value={filters.keyword}
                onChange={(event) => update('keyword', event.target.value)}
                placeholder="Enter keywords separated by comma"
                className={fieldClass}
              />
            </div>
          </div>
        </Group>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-background-200 pt-5">
        <button
          type="button"
          onClick={onReset}
          className="flex-1 whitespace-nowrap rounded-full border border-background-300 px-5 py-3 text-[12.5px] font-semibold text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={onApply}
          className="flex-1 whitespace-nowrap rounded-full bg-primary-500 px-5 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
        >
          Apply
        </button>
      </div>
    </div>
  );
}