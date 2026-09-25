'use client';

import { ArrowDown, Play } from 'lucide-react';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

interface HeroV2Props {
  onWatchFilm: () => void;
}

export default function HeroV2({ onWatchFilm }: HeroV2Props) {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-foreground-950">
      {/* Brandon's own footage, replacing the Pexels stock clip this hero used
          to stream from a third-party CDN.

          The source is a 888 MB 4K/60 camera master, which is a delivery
          format, not a web one. What ships is 720p30 with the audio track
          dropped: the hero autoplays, and an autoplaying video has to be muted
          anyway, so the audio was pure weight. 720p rather than 1080p because
          .v2-scrim lays a heavy dark gradient over this and .v2-grain a noise
          layer on top of that - the detail a larger encode buys is not
          detail anyone can see through them.

          No `preload` override: a muted autoplay background is fetched by the
          browser regardless, and declaring otherwise only fights it. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/video/hero-poster.jpg"
        className="v2-kenburns absolute inset-0 h-full w-full object-cover object-top"
        aria-hidden="true"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      {/* Vertical cinematic meta rails */}
      <div className="pointer-events-none absolute right-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Reel 01 — DMV Metro
        </span>
      </div>
      <div className="pointer-events-none absolute left-7 top-1/2 hidden -translate-y-1/2 xl:block">
        <span className="v2-vertical text-[10px] font-semibold uppercase tracking-[0.42em] text-background-200/60">
          Serving DC · MD · VA
        </span>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1500px] flex-col justify-between gap-12 px-5 pb-12 pt-32 md:px-10 md:pb-16 md:pt-44">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div className="v2-rise">
            <Eyebrow tone="light">Serving Buyers, Sellers &amp; Investors Across the DMV Region</Eyebrow>
            <h1 className="text-scrim mt-8 max-w-4xl font-heading text-[42px] font-normal leading-[0.98] tracking-[-0.03em] text-background-50 md:text-[74px] lg:text-[96px]">
              Clearing the path forward to <em className="italic">move smart</em>, build wealth, and live well.
            </h1>
          </div>

          <div className="v2-rise flex flex-col gap-6 lg:items-end" style={{ animationDelay: '220ms' }}>
            <div className="flex items-start gap-5 rounded-[26px] border border-background-50/15 bg-foreground-950/45 p-5 backdrop-blur-md md:max-w-md">
              <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl md:h-28 md:w-28">
                <img
                  src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg"
                  alt="Bethesda Row neighborhood, a DMV community BW Metro Properties serves"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <p className="font-heading text-[40px] leading-none text-background-50">$5.1M</p>
                <p className="mt-3 text-[13px] leading-relaxed text-background-200">
                  In verified career sales volume across the Washington DC Metro — built on clarity, strategy and
                  long-term wealth.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onWatchFilm}
              className="group flex items-center gap-3.5"
              aria-label="Watch the BW Metro film"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-background-50/40 text-background-50 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50/10">
                <Play className="h-4 w-4" fill="currentColor" aria-hidden="true" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-background-100">
                Watch the film
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="v2-rise flex flex-col gap-3 sm:flex-row sm:items-center" style={{ animationDelay: '340ms' }}>
            <CtaButton href="#contact">Schedule a Consultation</CtaButton>
            <GhostButton href="#value" tone="light">
              Get your home value
            </GhostButton>
          </div>
          <div className="hidden items-center gap-4 lg:flex">
            <span className="text-[10px] font-semibold uppercase tracking-[0.34em] text-background-200/80">
              Scroll to explore
            </span>
            <span className="v2-scroll-cue flex h-10 w-10 items-center justify-center rounded-full border border-background-50/30 text-background-50">
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}