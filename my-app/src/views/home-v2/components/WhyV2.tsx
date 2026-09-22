import Reveal from '@/components/base/Reveal';
import Icon from '@/components/base/Icon';
import { whyPoints } from '@/mocks/homeData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

export default function WhyV2() {
  return (
    <section className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow tone="light" index="02">
              Proven Results.
            </Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
              Why Work With <em className="italic">Brandon</em>
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
              Our commitment to exceptional service and results has earned us recognition across the Washington DC
              Metro Area and beyond:
            </p>
            <div className="mt-10">
              <CtaButton href="#contact">Schedule Your Consultation</CtaButton>
            </div>
          </Reveal>

          <div className="flex flex-col">
            {whyPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 60}>
                <div className="group flex items-start gap-6 border-t border-background-50/10 py-8 md:gap-10 md:py-9">
                  <span className="w-8 shrink-0 font-heading text-[22px] leading-none text-background-50/40 md:text-[26px]">
                    0{index + 1}
                  </span>
                  <span className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-background-50/15 text-background-200 transition-colors duration-300 group-hover:border-background-50/40 group-hover:text-background-50">
                    <Icon name={point.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-[22px] leading-tight text-background-50 md:text-[27px]">
                      {point.title}
                    </h3>
                    <p className="mt-2.5 max-w-lg text-[14px] leading-relaxed text-background-200/80">{point.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <div className="border-t border-background-50/10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}