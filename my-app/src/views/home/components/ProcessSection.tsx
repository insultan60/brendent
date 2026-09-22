import Reveal from '@/components/base/Reveal';
import { processSteps } from '@/mocks/homeData';

export default function ProcessSection() {
  return (
    <section id="process" className="px-3 py-3 md:px-5">
      <div className="mx-auto max-w-[1520px] overflow-hidden rounded-[24px] border border-background-200 bg-background-50 px-6 py-16 md:rounded-[36px] md:px-14 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[11px] text-accent-700">How I Help You Succeed</p>
          <h2 className="mt-6 font-heading text-[30px] font-normal leading-[1.06] tracking-[-0.015em] text-foreground-950 md:text-[48px]">
            A Simple, <span className="underline-brand">Strategic Approach</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Real estate can feel overwhelming, but my process is designed to make it smooth, clear, and stress-free.
            From our first conversation to closing day, I guide you every step of the way.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 100}>
              <div className="flex h-full flex-col rounded-[26px] border border-background-200 bg-background-100 p-8 transition-colors duration-300 hover:border-primary-300">
                <span className="font-heading text-[52px] leading-none text-primary-500">{step.step}</span>
                <h3 className="mt-7 font-heading text-[21px] leading-tight text-foreground-950">{step.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}