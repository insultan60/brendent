'use client';

import { useEffect, useState } from 'react';

/**
 * Tracks which of the given section ids is currently in view so a table of
 * contents can highlight the reader's position. Uses a simple scroll listener
 * with an upper-viewport threshold — no layout thrash, no observers to leak.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '');

  useEffect(() => {
    if (!ids.length) return undefined;

    let frame = 0;

    const update = () => {
      frame = 0;
      const threshold = window.innerHeight * 0.34;
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.getBoundingClientRect().top <= threshold) current = id;
      });
      setActive(current);
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
    };
  }, [ids]);

  return active;
}

export default useActiveSection;