'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Loader2, Sparkles } from 'lucide-react';
import { dreamExamples, dreamPrompts, searchAreas } from '@/mocks/vipSearchData';

type PanelStatus = 'idle' | 'thinking' | 'done';

/**
 * Lightweight on-device interpretation of the buyer's description.
 * Pulls out the areas, budget, beds and baths they mentioned so we can
 * echo their search back as clear, scannable criteria chips.
 */
function parseDream(text: string): string[] {
  const lower = text.toLowerCase();
  const found: string[] = [];

  searchAreas.forEach((area) => {
    const key = area.toLowerCase();
    if (lower.includes(key) || lower.includes(key.split(' ')[0])) {
      if (!found.includes(area)) found.push(area);
    }
  });

  const price = text.match(/\$\s?[\d.,]+\s?(?:m|k|million|thousand)?/i);
  if (price) found.push(`Budget ${price[0].replace(/\s+/g, '').toUpperCase()}`);

  const beds = lower.match(/(\d+)\s*(?:bed|bd|bedroom)/);
  if (beds) found.push(`${beds[1]} beds`);

  const baths = lower.match(/(\d+)\s*(?:bath|ba)\b/);
  if (baths) found.push(`${baths[1]} baths`);

  return found;
}

export default function VipSearchPanel() {
  const [value, setValue] = useState('');
  const [status, setStatus] = useState<PanelStatus>('idle');
  const [detected, setDetected] = useState<string[]>([]);
  const [promptIndex, setPromptIndex] = useState(0);
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    if (value.trim()) return undefined;
    const id = window.setInterval(() => {
      setPromptIndex((current) => (current + 1) % dreamPrompts.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [value]);

  useEffect(
    () => () => {
      if (timeout.current) window.clearTimeout(timeout.current);
    },
    [],
  );

  const handleChange = (next: string) => {
    setValue(next);
    if (status === 'done') {
      setStatus('idle');
      setDetected([]);
    }
  };

  const handleFind = () => {
    if (!value.trim() || status === 'thinking') return;
    setStatus('thinking');
    if (timeout.current) window.clearTimeout(timeout.current);
    timeout.current = window.setTimeout(() => {
      setDetected(parseDream(value));
      setStatus('done');
    }, 900);
  };

  return (
    <div
      id="vip-search"
      className="mt-9 scroll-mt-32 rounded-[26px] border border-background-50/20 bg-background-50/95 p-5 backdrop-blur-md md:p-6"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
          <Sparkles className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
          AI Home Search
        </p>
        <span className="hidden text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-400 sm:inline">
          Private &amp; Secure
        </span>
      </div>

      <textarea
        value={value}
        onChange={(event) => handleChange(event.target.value)}
        rows={3}
        maxLength={500}
        aria-label="Describe your dream home"
        placeholder="Type here to describe your dream home…"
        className="mt-4 w-full resize-none rounded-2xl border border-background-300 bg-background-100 px-4 py-3.5 text-sm leading-relaxed text-foreground-900 outline-none transition-colors duration-300 placeholder:text-foreground-400 focus:border-foreground-500"
      />

      <p className="mt-3 flex flex-wrap items-center gap-2 text-[12px] text-foreground-500">
        <span className="font-semibold uppercase tracking-[0.18em] text-foreground-400">Try</span>
        <span key={promptIndex} className="vip-fade text-foreground-600">
          {dreamPrompts[promptIndex]}
        </span>
      </p>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {dreamExamples.map((example) => (
          <button
            key={example}
            type="button"
            onClick={() => handleChange(example)}
            className="rounded-full border border-background-300 bg-background-50 px-3.5 py-2 text-[11.5px] font-medium text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
          >
            {example}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleFind}
        disabled={!value.trim() || status === 'thinking'}
        className="btn-shimmer mt-5 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'thinking' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Searching the DMV&hellip;
          </>
        ) : (
          'Find my dream home'
        )}
      </button>

      {status === 'done' ? (
        <div className="vip-fade mt-4 rounded-2xl border border-background-200 bg-background-100 p-4">
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground-500">
            <Check className="h-3.5 w-3.5 text-primary-500" aria-hidden="true" />
            Here&rsquo;s what we&rsquo;ll watch for
          </p>

          {detected.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {detected.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-secondary-100 px-3.5 py-1.5 text-[11.5px] font-semibold text-secondary-900"
                >
                  {item}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-3 text-[13px] leading-relaxed text-foreground-600">
              Got it — we&rsquo;ll refine this together and turn it into a private, always-on search.
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-foreground-950 px-5 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
            >
              Talk it through with Brandon
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setDetected([]);
              }}
              className="whitespace-nowrap text-[12.5px] font-semibold text-foreground-600 underline-offset-4 transition-colors duration-300 hover:text-foreground-950 hover:underline"
            >
              Edit my search
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}