import Reveal from '@/components/base/Reveal';
import { affordabilitySteps } from '@/mocks/calcData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function CalcSteps() {
  return (
    <section className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light" index="02">
            How it works
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-background-50 md:text-[48px]">
            Four steps from a number to <em className="italic text-background-100">a plan</em>
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-background-200 md:text-[16.5px]">
            An affordability estimate is only useful when it translates into a strategy. Here is how we use yours.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
          {affordabilitySteps.map((item, index) => (
            <Reveal key={item.step} delay={index * 90}>
              <div className="border-t border-background-50/20 pt-7">
                <div className="flex items-baseline gap-4">
                  <span className="font-heading text-[34px] leading-none text-primary-400">{item.step}</span>
                  <h3 className="font-heading text-[22px] leading-snug text-background-50 md:text-[25px]">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 max-w-md text-[14.5px] leading-relaxed text-background-200/85">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}