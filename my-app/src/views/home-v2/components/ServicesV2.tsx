import type { LucideIcon } from 'lucide-react';
import { ArrowRight, BadgeDollarSign, Home, Map } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { serviceCards } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/** Maps the icon key stored on each service card to a line icon. */
const iconMap: Record<string, LucideIcon> = {
  home: Home,
  dollar: BadgeDollarSign,
  map: Map,
};

export default function ServicesV2() {
  return (
    <section id="services" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow index="03" className="justify-center">
            DMV Real Estate Services
          </Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[54px]">
            Turning Dreams <em className="italic">into Keys</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Strategic Real Estate Guidance Across Washington, DC, Maryland &amp; Virginia.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-7 lg:gap-8">
          {serviceCards.map((card, index) => {
            const Icon = iconMap[card.icon] ?? Home;
            const featured = index === 1;
            return (
              <Reveal key={card.id} className="h-full" delay={index * 130}>
                <a
                  href={card.href}
                  aria-label={`${card.title} — ${card.cta}`}
                  className={`svc-card group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-100 p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background-50 md:p-10 ${
                    featured ? 'svc-card--featured' : ''
                  }`}
                >
                  <span
                    className="svc-hairline absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-primary-500 via-accent-500 to-transparent"
                    aria-hidden="true"
                  />

                  <span className="svc-icon flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-100 text-accent-700">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>

                  <h3 className="mt-9 font-heading text-[28px] font-normal leading-[1.05] tracking-[-0.01em] text-foreground-950 md:text-[32px]">
                    {card.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-foreground-600">
                    {card.text}
                  </p>

                  <p className="mt-6 text-[13.5px] font-semibold leading-snug text-accent-700">
                    {card.tagline}
                  </p>

                  <span className="mt-auto block pt-10">
                    <span className="inline-flex w-fit items-center gap-2 whitespace-nowrap rounded-full border border-foreground-300 px-6 py-3.5 text-[13px] font-semibold tracking-wide text-foreground-900 transition-colors duration-300 group-hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-background-50">
                      {card.cta}
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