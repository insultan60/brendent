import type { LucideIcon } from 'lucide-react';
import { ArrowRight, Building2, Home, Tag, TrendingUp } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { journeyPaths } from '@/mocks/resourcesData';

/** Maps the icon key stored on each journey path to a line icon. */
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  tag: Tag,
  building: Building2,
  trending: TrendingUp,
};

export default function JourneyPaths() {
  return (
    <section id="start" className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="01">Where Are You In Your Journey?</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.025em] text-foreground-950 md:text-[48px]">
            Pick the path that fits <em className="italic">right now</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {journeyPaths.map((path, index) => {
            const IconComponent = iconMap[path.icon] ?? Home;
            return (
              <Reveal key={path.id} className="h-full" delay={index * 130}>
                <a
                  href={path.href}
                  aria-label={`${path.title} — ${path.cta}`}
                  className="svc-card group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-100 p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50"
                >
                  <span
                    className="svc-hairline absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-transparent"
                    aria-hidden="true"
                  />

                  <span className="svc-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                    <IconComponent className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>

                  <h3 className="mt-9 font-heading text-[26px] font-normal leading-[1.05] tracking-[-0.01em] text-foreground-950">
                    {path.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground-600">{path.text}</p>

                  <p className="mt-6 text-[13.5px] font-semibold leading-snug text-accent-700">{path.tagline}</p>

                  <span className="mt-auto block pt-10">
                    <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-foreground-300 px-6 py-3.5 text-[13px] font-semibold tracking-wide text-foreground-900 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-background-50">
                      {path.cta}
                      <ArrowRight className="svc-arrow h-4 w-4" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}