import Reveal from '@/components/base/Reveal';
import Icon from '@/components/base/Icon';
import { whyPoints } from '@/mocks/homeData';

export default function WhyBrandon() {
  return (
    <section className="px-3 pb-3 md:px-5">
      <div className="relative mx-auto max-w-[1520px] overflow-hidden rounded-[24px] bg-secondary-950 px-6 py-20 md:rounded-[36px] md:px-14 md:py-28">
        <p
          className="pointer-events-none absolute -top-4 left-1/2 w-full -translate-x-1/2 select-none text-center font-heading text-[110px] leading-none text-background-50/[0.05] md:text-[220px]"
          aria-hidden="true"
        >
          Why Brandon
        </p>
        <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-accent-500/10 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto max-w-3xl text-center">
          <p className="eyebrow text-[11px] text-accent-400">Proven Results.</p>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.015em] text-background-50 md:text-[50px]">
            Why Work With <span className="underline-brand">Brandon</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
            Our commitment to exceptional service and results has earned us recognition across the Washington DC Metro
            Area and beyond:
          </p>
        </div>

        <div className="relative mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-background-50/10 bg-background-50/10 sm:grid-cols-2 lg:grid-cols-5">
          {whyPoints.map((point, index) => (
            <Reveal key={point.title} delay={index * 70} className="bg-secondary-950">
              <div className="flex h-full flex-col bg-secondary-950 p-7 transition-colors duration-300 hover:bg-secondary-900 md:p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500/15 text-primary-300">
                  <Icon name={point.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-heading text-[19px] leading-tight text-background-50">{point.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-background-200/85">{point.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="relative mt-14 flex justify-center">
          <a
            href="#contact"
            className="whitespace-nowrap rounded-full bg-primary-500 px-9 py-4 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600"
          >
            Schedule Your Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}