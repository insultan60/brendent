import Link from 'next/link';
import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { cashOfferAreas, cashOfferAudience } from '@/mocks/cashOfferData';

export default function CashOfferAudience() {
  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="04">Who It&rsquo;s For</Eyebrow>
          <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
            Built for sellers who want a <em className="italic">simpler exit</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            A cash offer is a great fit for a wide range of situations. If any of these sound like you, our team can
            help you move on your own terms.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6">
          {cashOfferAudience.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <article className="flex h-full flex-col rounded-[22px] border border-background-200 bg-background-100 p-7 transition-colors duration-300 hover:border-foreground-300 md:p-8">
                <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-accent-700">
                  <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-6 font-heading text-[24px] leading-tight text-foreground-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-foreground-600">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 rounded-[26px] border border-background-200 bg-background-50 p-7 md:p-10">
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-foreground-500">
            <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
            Cash offers across the DMV
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {cashOfferAreas.map((area) => (
              <Link
                key={area}
                href="/explore-areas"
                className="whitespace-nowrap rounded-full border border-background-300 px-5 py-2.5 text-[13px] font-medium text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
              >
                {area}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}