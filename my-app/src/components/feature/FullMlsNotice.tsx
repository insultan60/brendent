'use client';

import { ExternalLink, Search } from 'lucide-react';
import { useListings } from '@/components/feature/ListingsProvider';

interface FullMlsNoticeProps {
  title: string;
  text: string;
  tone?: 'light' | 'dark';
  className?: string;
}

/** Shown where a section has none of Brandon's homes to list: points to the
 *  full Bright MLS search instead of leaving a gap (or showing made-up homes). */
export default function FullMlsNotice({ title, text, tone = 'light', className = '' }: FullMlsNoticeProps) {
  const { fullMlsUrl } = useListings();
  const dark = tone === 'dark';
  return (
    <div
      className={`flex flex-col items-start gap-6 rounded-[26px] border p-7 md:flex-row md:items-center md:justify-between md:p-9 ${
        dark ? 'border-background-50/10 bg-background-50/[0.05]' : 'border-background-200 bg-background-50'
      } ${className}`}
    >
      <div className="flex items-start gap-5">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
            dark ? 'bg-background-50/10 text-background-100' : 'bg-secondary-100 text-secondary-900'
          }`}
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h3 className={`font-heading text-[22px] leading-tight md:text-[26px] ${dark ? 'text-background-50' : 'text-foreground-950'}`}>
            {title}
          </h3>
          <p className={`mt-2 max-w-xl text-[14px] leading-relaxed ${dark ? 'text-background-200/80' : 'text-foreground-600'}`}>
            {text}
          </p>
        </div>
      </div>
      <a
        href={fullMlsUrl}
        target="_blank"
        rel="noopener"
        className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
      >
        Search My Full MLS
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
      </a>
    </div>
  );
}
