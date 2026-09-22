'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  to: number;
  decimals?: number;
  duration?: number;
}

/** Counts up (with optional decimals) once the value scrolls into view. */
export default function StatCounter({ to, decimals = 0, duration = 1800 }: StatCounterProps) {
  const [value, setValue] = useState(0);
  const nodeRef = useRef<HTMLSpanElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return undefined;

    if (!('IntersectionObserver' in window)) {
      setValue(to);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || startedRef.current) return;
          startedRef.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(eased * to);
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(to);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [to, duration]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}