'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden bg-background-100 px-5 text-center">
      <span
        className="pointer-events-none absolute select-none font-heading text-[9rem] font-normal leading-none text-background-200 md:text-[16rem]"
        aria-hidden="true"
      >
        404
      </span>

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-foreground-500">
          Page not found
        </p>
        <h1 className="mt-5 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
          This page hasn&rsquo;t been generated yet
        </h1>
        <p className="mt-4 font-mono text-[13px] text-foreground-500">{pathname}</p>
        <Link
          href="/"
          className="btn-shimmer mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}