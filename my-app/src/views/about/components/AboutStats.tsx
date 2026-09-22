import Reveal from '@/components/base/Reveal';
import { aboutStats } from '@/mocks/aboutData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import StatCounter from '@/views/about/components/StatCounter';

export default function AboutStats() {
  return (
    <section className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow tone="light" index="03" className="justify-center">
            Our Stats
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
            Experience <em className="italic">Matters</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-y-14 border-t border-background-50/10 pt-14 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-background-50/10">
          {aboutStats.map((stat, index) => (
            <Reveal key={stat.caption} delay={index * 90} className="lg:px-8 lg:first:pl-0 lg:last:pr-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200/70">
                {stat.label}
              </p>
              <p className="mt-4 font-heading text-[46px] leading-none text-background-50 md:text-[62px]">
                {stat.prefix}
                <StatCounter to={stat.to} decimals={stat.decimals} />
                {stat.suffix}
              </p>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-background-200/70">
                {stat.caption}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}