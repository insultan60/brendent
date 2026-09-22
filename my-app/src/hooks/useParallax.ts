'use client';

import { useEffect, useRef } from 'react';

/**
 * Gentle scroll-linked parallax. Attaches a vertical translate to the
 * referenced element based on how far it sits from the viewport center, so it
 * drifts slower (positive speed) or reaches the opposite way (negative speed)
 * than the page scroll.
 *
 * Runs on a rAF-throttled passive scroll listener, is disabled when the user
 * prefers reduced motion, and stays off small screens to keep mobile smooth.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(speed = 60) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof window === 'undefined') return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || window.innerWidth < 1024) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const offset = (center - viewport / 2) / viewport;
      const clamped = Math.max(-1, Math.min(1, offset));
      node.style.transform = `translate3d(0, ${(-clamped * speed).toFixed(2)}px, 0)`;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      node.style.transform = '';
    };
  }, [speed]);

  return ref;
}

export default useParallax;