import { ArrowRight, Check } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import type { GuideSection } from '@/mocks/homeData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';

interface Props {
  section: GuideSection;
  index: string;
  /** Puts the photo on the left instead of the right. */
  flip?: boolean;
  tone?: 'light' | 'dark';
}

/**
 * The Buy, Sell and VA sections of the homepage: an H2, a short intro, an H3
 * checklist and a call to action beside a photo.
 */
export default function GuideSectionV2({ section, index, flip = false, tone = 'light' }: Props) {
  const dark = tone === 'dark';
  const body = dark ? 'text-background-200' : 'text-foreground-600';

  return (
    <section
      id={section.id}
      className={`${dark ? 'bg-foreground-950' : 'bg-background-50'} px-5 py-24 md:px-10 md:py-32`}
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={flip ? 'lg:order-2' : ''}>
          <Eyebrow index={index} tone={dark ? 'light' : 'dark'}>
            {section.eyebrow}
          </Eyebrow>
          <h2
            className={`mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] md:text-[48px] ${
              dark ? 'text-background-50' : 'text-foreground-950'
            }`}
          >
            {section.title} <em className="italic">{section.accent}</em>
          </h2>
          {section.intro.map((paragraph) => (
            <p key={paragraph} className={`mt-6 max-w-xl text-[15px] leading-relaxed md:text-[16.5px] ${body}`}>
              {paragraph}
            </p>
          ))}

          <h3
            className={`mt-10 font-heading text-[22px] leading-tight md:text-[26px] ${
              dark ? 'text-background-50' : 'text-foreground-950'
            }`}
          >
            {section.listTitle}
          </h3>
          <ul className="mt-5 flex max-w-xl flex-col gap-3.5">
            {section.list.map((item) => (
              <li key={item} className={`flex items-start gap-3 text-[15px] leading-relaxed ${body}`}>
                <Check
                  className={`mt-1 h-4 w-4 shrink-0 ${dark ? 'text-background-50' : 'text-accent-700'}`}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>

          {section.outro?.map((paragraph) => (
            <p key={paragraph} className={`mt-6 max-w-xl text-[15px] leading-relaxed md:text-[16.5px] ${body}`}>
              {paragraph}
            </p>
          ))}

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <CtaButton href={section.cta.href}>{section.cta.label}</CtaButton>
            {section.link ? (
              <a
                href={section.link.href}
                className={`group inline-flex items-center gap-2 text-[14px] font-semibold underline-offset-4 hover:underline ${
                  dark ? 'text-background-50' : 'text-foreground-900'
                }`}
              >
                {section.link.label}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={120} className={flip ? 'lg:order-1' : ''}>
          <div className="h-[380px] w-full overflow-hidden rounded-[30px] md:h-[560px] lg:h-[640px]">
            <img
              loading="lazy"
              decoding="async"
              src={section.image}
              alt={section.imageAlt}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
