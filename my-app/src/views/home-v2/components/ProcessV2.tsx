import Reveal from '@/components/base/Reveal';
import { processSteps } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function ProcessV2() {
  return (
    <section id="process" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="09">How I Help You Succeed</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[54px]">
            A Simple, <em className="italic">Strategic Approach</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Real estate can feel overwhelming, but my process is designed to make it smooth, clear, and stress-free.
            From our first conversation to closing day, I guide you every step of the way.
          </p>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-[46px] hidden h-px bg-background-300 lg:block" aria-hidden="true" />
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, index) => (
              <Reveal key={step.step} delay={index * 100}>
                <div className="relative">
                  <div className="relative mb-8 flex items-center gap-4 bg-background-50 pr-4 lg:inline-flex">
                    <span className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-background-300 bg-background-50 font-heading text-[34px] leading-none text-foreground-950">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-[22px] leading-tight text-foreground-950 md:text-[25px]">
                    {step.title}
                  </h3>
                  <p className="mt-3.5 max-w-xs text-[14px] leading-relaxed text-foreground-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}