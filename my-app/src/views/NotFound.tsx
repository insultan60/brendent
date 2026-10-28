'use client';

import Link from 'next/link';

export default function NotFound() {
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
          We couldn&rsquo;t find that page
        </h1>
        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground-600">
          It may have moved. Try searching homes, or get in touch and Brandon will point you in the right direction.
        </p>
        <Link
          href="/"
          className="btn-shimmer mt-8 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
        >
          Back to Home
        </Link>
        <div className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] font-semibold">
          <Link href="/properties" className="text-foreground-700 underline-offset-4 hover:text-foreground-950 hover:underline">
            Search homes
          </Link>
          <Link href="/get-in-touch" className="text-foreground-700 underline-offset-4 hover:text-foreground-950 hover:underline">
            Contact Brandon
          </Link>
        </div>
      </div>
    </div>
  );
}