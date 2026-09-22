'use client';

import { Info } from 'lucide-react';

export const parseMoney = (value: string): number => {
  const digits = value.replace(/[^0-9]/g, '');
  return digits ? Number(digits) : 0;
};

const formatPercent = (value: number): string => {
  if (Number.isInteger(value)) return value.toString();
  return value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
};

function Tip({ text }: { text: string }) {
  return (
    <span className="group relative inline-flex">
      <Info
        className="h-3.5 w-3.5 text-foreground-400 transition-colors duration-300 group-hover:text-foreground-700"
        aria-hidden="true"
      />
      <span className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-60 -translate-x-1/2 rounded-xl border border-background-300 bg-background-50 px-3.5 py-2.5 text-[11.5px] leading-relaxed text-foreground-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {text}
      </span>
    </span>
  );
}

interface MoneyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  placeholder?: string;
  tooltip?: string;
}

export function MoneyInput({ label, value, onChange, placeholder = '0', tooltip }: MoneyInputProps) {
  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="text-[12.5px] font-medium text-foreground-700">{label}</label>
        {tooltip ? <Tip text={tooltip} /> : null}
      </div>
      <div className="mt-2 flex items-center rounded-xl border border-background-300 bg-background-50 px-3.5 transition-colors duration-300 focus-within:border-foreground-950">
        <span className="text-[13px] text-foreground-400">$</span>
        <input
          inputMode="numeric"
          value={value === 0 ? '' : value.toLocaleString('en-US')}
          placeholder={placeholder}
          onChange={(event) => onChange(parseMoney(event.target.value))}
          aria-label={label}
          className="w-full bg-transparent py-3 pl-2 text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
        />
      </div>
    </div>
  );
}

interface PercentInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  max?: number;
  tooltip?: string;
}

export function PercentInput({ label, value, onChange, max = 25, tooltip }: PercentInputProps) {
  const handle = (raw: string) => {
    const parsed = Number(raw.replace(/[^0-9.]/g, ''));
    if (Number.isNaN(parsed)) {
      onChange(0);
      return;
    }
    onChange(Math.min(Math.max(parsed, 0), max));
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="text-[12.5px] font-medium text-foreground-700">{label}</label>
        {tooltip ? <Tip text={tooltip} /> : null}
      </div>
      <div className="mt-2 flex items-center rounded-xl border border-background-300 bg-background-50 px-3.5 transition-colors duration-300 focus-within:border-foreground-950">
        <input
          inputMode="decimal"
          value={formatPercent(value)}
          onChange={(event) => handle(event.target.value)}
          aria-label={label}
          className="w-full bg-transparent py-3 text-[14px] text-foreground-950 outline-none"
        />
        <span className="text-[13px] text-foreground-400">%</span>
      </div>
    </div>
  );
}

interface DownPaymentFieldProps {
  label: string;
  homePrice: number;
  amount: number;
  onAmountChange: (value: number) => void;
  tooltip?: string;
}

/** Linked dollar <-> percent field for the down payment. */
export function DownPaymentField({ label, homePrice, amount, onAmountChange, tooltip }: DownPaymentFieldProps) {
  const percent = homePrice > 0 ? (amount / homePrice) * 100 : 0;

  const handlePercent = (raw: string) => {
    const parsed = Number(raw.replace(/[^0-9.]/g, ''));
    if (Number.isNaN(parsed)) {
      onAmountChange(0);
      return;
    }
    const clamped = Math.min(Math.max(parsed, 0), 100);
    onAmountChange(Math.round((homePrice * clamped) / 100));
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <label className="text-[12.5px] font-medium text-foreground-700">{label}</label>
        {tooltip ? <Tip text={tooltip} /> : null}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-3">
        <div className="flex items-center rounded-xl border border-background-300 bg-background-50 px-3.5 transition-colors duration-300 focus-within:border-foreground-950">
          <span className="text-[13px] text-foreground-400">$</span>
          <input
            inputMode="numeric"
            value={amount === 0 ? '' : amount.toLocaleString('en-US')}
            placeholder="0"
            onChange={(event) => onAmountChange(parseMoney(event.target.value))}
            aria-label={`${label} dollars`}
            className="w-full bg-transparent py-3 pl-2 text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
          />
        </div>
        <div className="flex items-center rounded-xl border border-background-300 bg-background-50 px-3.5 transition-colors duration-300 focus-within:border-foreground-950">
          <input
            inputMode="decimal"
            value={formatPercent(percent)}
            onChange={(event) => handlePercent(event.target.value)}
            aria-label={`${label} percent`}
            className="w-full bg-transparent py-3 text-[14px] text-foreground-950 outline-none"
          />
          <span className="text-[13px] text-foreground-400">%</span>
        </div>
      </div>
    </div>
  );
}