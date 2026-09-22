import {
  CalendarClock,
  DoorOpen,
  Hammer,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import { cashOfferPillars } from '@/mocks/cashOfferData';

const iconMap: Record<string, LucideIcon> = {
  hammer: Hammer,
  sparkles: Sparkles,
  door: DoorOpen,
  calendar: CalendarClock,
};

export default function CashOfferPillars() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="03">What A Cash Offer Means</Eyebrow>
            <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
              All of the upside, none of the <em className="italic">hassle</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              A cash offer removes the slow, stressful parts of selling. Here is exactly what you leave behind when
              you sell to our team.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <CtaButton href="#top">Get my free offer</CtaButton>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {cashOfferPillars.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <Reveal key={item.title} delay={index * 80}>
                <article className="group flex h-full flex-col rounded-[22px] border border-background-200 bg-background-50 p-7 transition-colors duration-300 hover:border-foreground-300 md:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-900 transition-colors duration-300 group-hover:bg-foreground-950 group-hover:text-background-50">
                    {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
                  </span>
                  <h3 className="mt-7 font-heading text-[24px] leading-tight text-foreground-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}