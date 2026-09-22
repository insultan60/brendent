import Reveal from '@/components/base/Reveal';
import { marketSection } from '@/mocks/blogDetailData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function MarketSection() {
  return (
    <section id={marketSection.id} className="mt-16 border-t border-background-200 pt-12 md:mt-20 md:pt-16">
      <Reveal>
        <Eyebrow>{marketSection.label}</Eyebrow>
        <h2 className="mt-5 font-heading text-[27px] font-normal leading-[1.12] tracking-[-0.02em] text-foreground-950 md:text-[36px]">
          {marketSection.heading}
        </h2>
        <p className="mt-6 text-[16.5px] leading-[1.85] text-foreground-700 md:text-[17.5px]">
          {marketSection.lead}
        </p>
        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground-500">
          {marketSection.intro}
        </p>
      </Reveal>

      <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {marketSection.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 90} className="h-full">
            <div className="ref-card flex h-full flex-col rounded-[20px] border border-background-200 bg-background-50 p-6">
              <p className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-foreground-500">
                {stat.label}
              </p>
              <p className="mt-4 font-heading text-[32px] font-normal leading-none tracking-[-0.02em] text-foreground-950">
                {stat.value}
              </p>
              <p className="mt-4 text-[13.5px] leading-relaxed text-foreground-600">{stat.text}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-8 rounded-[20px] border-l-2 border-primary-500 bg-secondary-50 px-6 py-5 text-[15px] leading-relaxed text-foreground-800">
          {marketSection.takeaway}
        </p>
      </Reveal>
    </section>
  );
}