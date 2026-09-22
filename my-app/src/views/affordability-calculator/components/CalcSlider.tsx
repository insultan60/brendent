'use client';

interface CalcSliderProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
  hint?: string;
}

/** A labelled range control used throughout the affordability calculator. */
export default function CalcSlider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
  hint,
}: CalcSliderProps) {
  const pct = max > min ? ((value - min) / (max - min)) * 100 : 0;

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <label className="text-[12.5px] font-medium text-foreground-700">{label}</label>
          {hint ? <p className="mt-0.5 text-[11px] text-foreground-400">{hint}</p> : null}
        </div>
        <span className="whitespace-nowrap font-heading text-[18px] leading-none text-foreground-950">
          {display}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        aria-label={label}
        className="calc-range mt-3.5 h-1.5 w-full cursor-pointer appearance-none rounded-full"
        style={{ background: `linear-gradient(to right, oklch(var(--primary-500)) ${pct}%, oklch(var(--background-300)) ${pct}%)` }}
      />
    </div>
  );
}