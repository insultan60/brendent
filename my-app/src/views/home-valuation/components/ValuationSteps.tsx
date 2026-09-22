import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { valuationSteps } from '@/mocks/valuationData';

export default function ValuationSteps() {
  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="02">How It Works</Eyebrow>
          <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
            Three simple steps to your <em className="italic">number</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            No pressure, no jargon. Just a clear, defensible value for your home — and a plan for what comes next.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {valuationSteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 100}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-100 p-7 transition-colors duration-300 hover:border-foreground-300 md:p-8">
                <span className="font-heading text-[46px] leading-none text-accent-500 tabular-nums">
                  {item.step}
                </span>
                <span
                  className="mt-6 h-px w-12 bg-foreground-300 transition-all duration-500 group-hover:w-20"
                  aria-hidden="true"
                />
                <h3 className="mt-6 font-heading text-[24px] leading-tight text-foreground-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}