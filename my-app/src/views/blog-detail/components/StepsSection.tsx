import Reveal from '@/components/base/Reveal';
import { stepsSection } from '@/mocks/blogDetailData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function StepsSection() {
  return (
    <section id={stepsSection.id} className="mt-16 border-t border-background-200 pt-12 md:mt-20 md:pt-16">
      <Reveal>
        <Eyebrow>{stepsSection.label}</Eyebrow>
        <h2 className="mt-5 font-heading text-[27px] font-normal leading-[1.12] tracking-[-0.02em] text-foreground-950 md:text-[36px]">
          {stepsSection.heading}
        </h2>
      </Reveal>

      <ol className="mt-11 flex flex-col">
        {stepsSection.steps.map((step, index) => (
          <li key={step.n} className="grid grid-cols-[52px_1fr] gap-5 md:grid-cols-[68px_1fr] md:gap-7">
            <div className="flex flex-col items-center">
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-background-300 bg-background-50 font-heading text-[18px] tracking-[-0.01em] text-foreground-950 transition-colors duration-300 md:h-[68px] md:w-[68px] md:text-[22px]">
                {step.n}
              </span>
              {index < stepsSection.steps.length - 1 ? (
                <span className="mt-2 w-px flex-1 bg-background-300" aria-hidden="true" />
              ) : null}
            </div>

            <Reveal delay={40 + index * 30} className="pb-10 md:pb-12">
              <div className="step-card rounded-[20px] border border-background-200 bg-background-50 px-6 py-6 md:px-7">
                <h3 className="font-heading text-[21px] font-normal leading-snug tracking-[-0.01em] text-foreground-950 md:text-[23px]">
                  {step.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-foreground-600 md:text-[15px]">
                  {step.text}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}