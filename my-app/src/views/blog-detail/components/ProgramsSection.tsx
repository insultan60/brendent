import Reveal from '@/components/base/Reveal';
import { programsSection } from '@/mocks/blogDetailData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ProgramsSection() {
  return (
    <section
      id={programsSection.id}
      className="mt-16 border-t border-background-200 pt-12 md:mt-20 md:pt-16"
    >
      <Reveal>
        <Eyebrow>{programsSection.label}</Eyebrow>
        <h2 className="mt-5 font-heading text-[27px] font-normal leading-[1.12] tracking-[-0.02em] text-foreground-950 md:text-[36px]">
          {programsSection.heading}
        </h2>
        <p className="mt-6 text-[16.5px] leading-[1.85] text-foreground-700 md:text-[17.5px]">
          {programsSection.lead}
        </p>
      </Reveal>

      <div className="mt-9 flex flex-col gap-5">
        {programsSection.regions.map((region, regionIndex) => (
          <Reveal key={region.code} delay={regionIndex * 100}>
            <div className="ref-card rounded-[22px] border border-background-200 bg-background-50 p-6 md:p-8">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-100 font-heading text-[15px] font-normal tracking-[0.02em] text-secondary-900">
                  {region.code}
                </span>
                <h3 className="font-heading text-[22px] font-normal leading-tight tracking-[-0.01em] text-foreground-950 md:text-[26px]">
                  {region.name}
                </h3>
              </div>

              <ul className="mt-6 flex flex-col divide-y divide-background-200">
                {region.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1.5 py-4 first:pt-0 last:pb-0">
                    <p className="flex items-start gap-2.5 text-[14.5px] font-semibold text-foreground-950">
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"
                        aria-hidden="true"
                      />
                      {item.name}
                    </p>
                    <p className="pl-[18px] text-[13.5px] leading-[1.75] text-foreground-600">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <blockquote className="mt-8 rounded-[20px] bg-accent-100 px-6 py-6 md:px-8 md:py-7">
          <p className="flex items-start gap-3 text-[14.5px] leading-[1.8] text-accent-950">
            <span className="mt-[3px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-500 text-background-50">
              <i className="ri-gift-line text-[13px]" aria-hidden="true" />
            </span>
            <span>
              <strong className="font-semibold">{programsSection.bonusLabel}:</strong>{' '}
              {programsSection.bonus}
            </span>
          </p>
        </blockquote>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-6 text-[13.5px] italic leading-relaxed text-foreground-500">
          {programsSection.disclaimer}
        </p>
      </Reveal>
    </section>
  );
}