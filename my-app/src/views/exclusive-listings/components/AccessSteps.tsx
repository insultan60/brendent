import Reveal from '@/components/base/Reveal';
import { accessSteps } from '@/mocks/exclusiveData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

export default function AccessSteps() {
  return (
    <section id="how-it-works" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="03">How It Works</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              Getting Access Is <em className="italic">Simple</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              A short conversation is all it takes to start seeing homes the rest of the market doesn’t know about yet.
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <GhostButton href="#exclusive-search">Browse Listings</GhostButton>
            <CtaButton href="#contact">Request Access</CtaButton>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-background-300 bg-background-200 sm:grid-cols-2 lg:grid-cols-4">
          {accessSteps.map((step, index) => (
            <Reveal key={step.step} delay={index * 80}>
              <div className="flex h-full flex-col bg-background-50 p-8">
                <span className="font-heading text-[44px] leading-none text-background-400">{step.step}</span>
                <h3 className="mt-8 font-heading text-[22px] leading-tight text-foreground-950">{step.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground-600">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}