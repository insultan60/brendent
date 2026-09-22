'use client';

import { useEffect, useRef, useState } from 'react';

interface ExploreStatProps {
  value: number;
  prefix?: string;
  className?: string;
}

/** Counts a market figure up to its real value once it scrolls into view. */
export default function ExploreStat({ value, prefix = '', className = '' }: ExploreStatProps) {
  const [display, setDisplay] = useState(0);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / 1700, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
    </span>
  );
}