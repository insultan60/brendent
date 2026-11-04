'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { brand } from '@/mocks/homeData';

/**
 * Brandon's booking calendar in a pop-up.
 *
 * Mounted once in the root layout. Any plain click on a link to /schedule
 * (brand.bookingUrl: the "Schedule a Consultation" buttons, wherever they are)
 * opens this instead of leaving the page. Ctrl/Cmd-click, middle-click and
 * shared links still go to the full /schedule page, and so does everything
 * if JavaScript is off. On /schedule itself the calendar is already on the
 * page, so the pop-up stays out of the way.
 */
export default function BookingModal() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // The calendar loads on the first open and then stays mounted, so opening
  // it again is instant and keeps the visitor's place.
  const [loaded, setLoaded] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (pathname === brand.bookingUrl) return undefined;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element | null)?.closest?.('a[href]');
      if (!(link instanceof HTMLAnchorElement) || link.target === '_blank') return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== brand.bookingUrl) return;

      // Capture phase, so this runs before Next's <Link> navigates.
      event.preventDefault();
      setLoaded(true);
      setOpen(true);
    };

    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!loaded) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-center justify-center p-3 transition-opacity duration-300 md:p-8 ${
        open ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      aria-hidden={!open}
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-foreground-950/60 backdrop-blur-[3px]"
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Schedule a consultation with Brandon Wilson"
        className={`relative flex h-full max-h-[880px] w-full max-w-[1080px] flex-col overflow-hidden rounded-[24px] bg-background-50 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] transition-transform duration-300 ${
          open ? 'translate-y-0 scale-100' : 'translate-y-4 scale-[0.98]'
        }`}
      >
        <div className="flex items-center justify-between gap-4 border-b border-background-200 px-5 py-4 md:px-7">
          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
              Schedule a Consultation
            </p>
            <p className="mt-1 font-heading text-[19px] leading-tight text-foreground-950 md:text-[22px]">
              Pick a time with Brandon
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-300 text-foreground-800 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <iframe
          src={brand.bookingCalendar}
          title="Book a consultation with Brandon Wilson"
          className="block min-h-0 w-full flex-1 border-0"
        />
      </div>
    </div>
  );
}
