'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { brand } from '@/mocks/homeData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

/** Full-bleed photo hero with the page's single H1 and two actions. */
export function GuideHero({
  eyebrow,
  h1,
  text,
  image,
  imageAlt,
  crumbs,
  primary,
  secondary,
}: {
  eyebrow: string;
  h1: string;
  text: string;
  image: string;
  imageAlt: string;
  crumbs: { label: string; href?: string }[];
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}) {
  return (
    <section id="top" className="relative min-h-[86svh] w-full overflow-hidden bg-foreground-950">
      <img
        loading="eager"
        fetchPriority="high"
        decoding="async"
        src={image}
        alt={imageAlt}
        className="v2-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="v2-scrim absolute inset-0" aria-hidden="true" />
      <div className="v2-grain absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto flex min-h-[86svh] max-w-[1500px] flex-col justify-end px-5 pb-16 pt-36 md:px-10 md:pb-24 md:pt-44">
        <div className="v2-rise max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-[12px] text-background-200">
              {crumbs.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {i > 0 ? <span aria-hidden="true">/</span> : null}
                  {crumb.href ? (
                    <a href={crumb.href} className="transition-colors hover:text-background-50">
                      {crumb.label}
                    </a>
                  ) : (
                    <span aria-current="page" className="text-background-50">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <Eyebrow tone="light">{eyebrow}</Eyebrow>
          <h1 className="text-scrim mt-7 font-heading text-[40px] font-normal leading-[1.02] tracking-[-0.025em] text-background-50 md:text-[64px] lg:text-[76px]">
            {h1}
          </h1>
          <p className="mt-7 max-w-2xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.45)] md:text-[16.5px]">
            {text}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton href={primary.href}>{primary.label}</CtaButton>
            <GhostButton href={secondary.href} tone="light">
              {secondary.label}
            </GhostButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Section heading block used down every guide page. */
export function SectionTitle({ index, eyebrow, title, children }: { index?: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow index={index}>{eyebrow}</Eyebrow>
      <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
        {title}
      </h2>
      {children}
    </Reveal>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)} className="mt-5 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
          {p}
        </p>
      ))}
    </>
  );
}

export function Faq({ index, title, items }: { index: string; title: string; items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionTitle index={index} eyebrow="Questions, Answered" title={title} />
        <div className="divide-y divide-background-200 border-y border-background-200">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-heading text-[19px] text-foreground-950 md:text-[21px]"
                  >
                    {item.q}
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-foreground-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {/* Kept in the DOM when closed so the answers are in the page source. */}
                <div hidden={!isOpen} className="pb-6 pr-10 text-[15px] leading-relaxed text-foreground-600">
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Dark closing band: call, message and a primary search button. */
export function GuideCta({ title, text, primary }: { title: string; text: string; primary: { label: string; href: string } }) {
  return (
    <section className="bg-foreground-950 px-5 py-24 md:px-10 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-background-50 md:text-[48px]">
          {title}
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed text-background-200/85 md:text-[16.5px]">
          {text} Call{' '}
          <a href={brand.phoneHref} className="text-background-50 underline underline-offset-4">
            {brand.phone}
          </a>{' '}
          or send a message to get started.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <CtaButton href={primary.href}>{primary.label}</CtaButton>
          <GhostButton href={brand.bookingUrl} tone="light">
            Schedule a Call
          </GhostButton>
        </div>
        <p className="mt-12 text-[12px] leading-relaxed text-background-200/60">
          {brand.name} | Pearson Smith Realty | {brand.address} | Equal Housing Opportunity
        </p>
      </Reveal>
    </section>
  );
}

const SITE = 'https://www.bwmetroproperties.com';

/** BreadcrumbList plus FAQPage structured data. */
export function GuideSchema({ crumbs, faqs }: { crumbs: { label: string; path: string }[]; faqs: { q: string; a: string }[] }) {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: `${SITE}${c.path}` })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
