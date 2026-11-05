'use client';

import Script from 'next/script';
import type { ReactNode } from 'react';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * One of Brandon's Fello calculator widgets (Fello > Marketing > Widgets).
 *
 * Fello draws the calculator itself and captures the lead into Brandon's Fello
 * contacts, with his drip campaigns. Labels, defaults and the lead form are
 * edited in Fello, and changes show here without touching the site.
 */

type Kind = 'home-sale-calculator' | 'mortgage-calculator' | 'affordability-calculator';

export const FELLO_WIDGETS: Record<Kind, string> = {
  'home-sale-calculator': '6a83184a2f1ef230b0f250e2',
  'affordability-calculator': '6a831a3b80932f7d9ca96771',
  'mortgage-calculator': '6a8319324602dec6793339ed',
};

export default function FelloCalculator({ kind, title }: { kind: Kind; title: ReactNode }) {
  return (
    <section id="calculator" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <Eyebrow index="01">Run the numbers</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            {title}
          </h2>
        </div>

        {/* isolate: Fello's widget sets its own z-index values; this keeps them
            inside the card so the sticky site header still scrolls over it. */}
        <div className="relative isolate mt-12 min-h-[480px] rounded-[28px] border border-background-300 bg-background-50 p-4 md:p-8">
          <Script src={`https://widget.hifello.com/${kind}-widget.js`} strategy="afterInteractive" />
          {/* Fello's custom element, upgraded once its script loads. */}
          <div
            dangerouslySetInnerHTML={{
              __html: `<fello-${kind}-widget widget-id="${FELLO_WIDGETS[kind]}"></fello-${kind}-widget>`,
            }}
          />
        </div>
      </div>
    </section>
  );
}
