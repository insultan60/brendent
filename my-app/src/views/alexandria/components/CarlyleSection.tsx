'use client';

import Reveal from '@/components/base/Reveal';
import { brand } from '@/mocks/homeData';
import { carlyle } from '@/mocks/neighborhoodGuidesVaMd';
import { CtaButton, GhostButton } from '@/views/home-v2/components/shared';
import { Prose, SectionTitle } from '@/views/neighborhoods/components/GuideParts';

/** Carlyle guide block on the Alexandria city page, linked from the hub as /alexandria#carlyle. */
export default function CarlyleSection() {
  return (
    <section id="carlyle" className="scroll-mt-28 bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <SectionTitle eyebrow="Alexandria Neighborhood" title={carlyle.title}>
            <Prose paragraphs={[carlyle.intro]} />
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton href="/properties">See Carlyle Listings</CtaButton>
              <GhostButton href="/get-in-touch">Talk With Brandon</GhostButton>
            </div>
          </SectionTitle>
          <Reveal className="self-start rounded-[26px] bg-foreground-950 p-8 md:p-10">
            <h3 className="font-heading text-[26px] text-background-50">Carlyle at a Glance</h3>
            <dl className="mt-6 divide-y divide-background-50/10">
              {carlyle.facts.map((f) => (
                <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 py-3.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background-200/70">{f.label}</dt>
                  <dd className="text-[14px] leading-relaxed text-background-100">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {carlyle.blocks.map((b) => (
          <Reveal key={b.title} className="mt-16 max-w-3xl">
            <h3 className="font-heading text-[26px] leading-tight text-foreground-950 md:text-[32px]">{b.title}</h3>
            <Prose paragraphs={b.paragraphs} />
          </Reveal>
        ))}

        <Reveal className="mt-16 max-w-3xl">
          <h3 className="font-heading text-[26px] leading-tight text-foreground-950 md:text-[32px]">{carlyle.condos.title}</h3>
          <Prose paragraphs={[carlyle.condos.lead]} />
        </Reveal>
        <Reveal className="mt-8 overflow-x-auto rounded-[22px] border border-background-200">
          <table className="w-full min-w-[640px] text-left text-[14px]">
            <thead className="bg-foreground-950 text-background-50">
              <tr>
                {carlyle.condos.headers.map((h) => (
                  <th key={h} scope="col" className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-background-200">
              {carlyle.condos.rows.map(([name, ...cells]) => (
                <tr key={name} className="align-top odd:bg-background-50 even:bg-background-100/60">
                  <th scope="row" className="px-5 py-4 font-heading text-[16px] font-normal text-foreground-950">
                    {name}
                  </th>
                  {cells.map((c, i) => (
                    <td key={i} className="px-5 py-4 leading-relaxed text-foreground-600">
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <Reveal className="max-w-3xl">
          <Prose paragraphs={carlyle.condos.after} />
        </Reveal>

        {carlyle.more.map((b) => (
          <Reveal key={b.title} className="mt-16 max-w-3xl">
            <h3 className="font-heading text-[26px] leading-tight text-foreground-950 md:text-[32px]">{b.title}</h3>
            <Prose paragraphs={b.paragraphs} />
          </Reveal>
        ))}

        <Reveal className="mt-16 max-w-3xl">
          <h3 className="font-heading text-[26px] leading-tight text-foreground-950 md:text-[32px]">Carlyle FAQ</h3>
          <dl className="mt-6 divide-y divide-background-200 border-y border-background-200">
            {carlyle.faqs.map((f) => (
              <div key={f.q} className="py-5">
                <dt className="font-heading text-[19px] text-foreground-950">{f.q}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-foreground-600">{f.a}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal className="mt-14 flex flex-col items-start gap-5 rounded-[22px] bg-foreground-950 p-8 md:flex-row md:items-center md:justify-between md:p-10">
          <p className="max-w-2xl text-[15px] leading-relaxed text-background-100">
            {carlyle.cta} Call{' '}
            <a href={brand.phoneHref} className="text-background-50 underline underline-offset-4">
              {brand.phone}
            </a>{' '}
            or send a message.
          </p>
          <div className="flex flex-wrap gap-3">
            <CtaButton href="/properties">Search Carlyle Homes</CtaButton>
            <GhostButton href={brand.bookingUrl} tone="light">
              Schedule a Call
            </GhostButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
