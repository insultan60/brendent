'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface GalleryProps {
  photos: string[];
  alt: string;
  status: string;
}

/* Main photo with thumbnails. Bright MLS releases a single photo once a home
   has closed, so sold listings show one image; active ones get the full set. */
export default function Gallery({ photos, alt, status }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const count = photos.length;
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  useEffect(() => {
    if (count < 2) return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.key === 'ArrowLeft') setIndex((i) => (i - 1 + count) % count);
      if (event.key === 'ArrowRight') setIndex((i) => (i + 1) % count);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  return (
    <div>
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[26px] bg-background-200">
        {count > 0 ? (
          <img
            src={photos[index]}
            alt={count > 1 ? `${alt}, photo ${index + 1} of ${count}` : alt}
            referrerPolicy="no-referrer"
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="flex h-full items-center justify-center text-foreground-400">
            <Home className="h-10 w-10" aria-hidden="true" />
          </span>
        )}
        <span className="absolute left-5 top-5 rounded-full bg-foreground-950 px-4 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-50">
          {status}
        </span>
        {count > 1 ? (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur transition-colors hover:bg-background-50"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-background-50/90 text-foreground-900 backdrop-blur transition-colors hover:bg-background-50"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
            <span className="absolute bottom-4 right-4 rounded-full bg-foreground-950/70 px-3 py-1 text-[11.5px] font-semibold text-background-50 backdrop-blur">
              {index + 1} / {count}
            </span>
          </>
        ) : null}
      </div>

      {count > 1 ? (
        <div className="no-scrollbar mt-3 flex gap-2.5 overflow-x-auto pb-1">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              className={`h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 transition-colors ${
                i === index ? 'border-primary-500' : 'border-transparent opacity-75 hover:opacity-100'
              }`}
            >
              <img src={src} alt="" loading="lazy" referrerPolicy="no-referrer" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
