'use client';

import { useCallback } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { useReveal } from '@/hooks/useReveal';
import { guideRoutes, hub, type NeighborhoodGuide } from '@/mocks/neighborhoodsData';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import { CtaButton, GhostButton } from '@/views/home-v2/components/shared';
import AreaListings from '@/views/washington/components/AreaListings';
import type { Listing } from '@/views/properties/types';
import { Faq, GuideCta, GuideHero, GuideSchema, Prose, SectionTitle } from './components/GuideParts';

export default function NeighborhoodGuidePage({ guide }: { guide: NeighborhoodGuide }) {
  useReveal();
  const path = `${hub.path}/${guide.slug}`;
  const match = useCallback((l: Listing) => l.state === 'DC' && guide.listings.zips.includes(l.zip), [guide]);

  return (
    <div className="min-h-screen bg-background-100">
      <GuideSchema
        crumbs={[
          { label: 'Home', path: '' },
          { label: 'Neighborhoods', path: hub.path },
          { label: guide.name, path },
        ]}
        faqs={guide.faqs}
      />
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <GuideHero
          eyebrow={`${guide.city} Neighborhood Guide`}
          h1={guide.hero.h1}
          text={guide.hero.text}
          image={guide.hero.image}
          imageAlt={guide.hero.imageAlt}
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Neighborhoods', href: hub.path }, { label: guide.name }]}
          primary={{ label: guide.hero.listingsLabel, href: '#listings' }}
          secondary={{ label: 'Talk With Brandon', href: '/get-in-touch' }}
        />

        <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
            <SectionTitle index="01" eyebrow="The Neighborhood" title={guide.about.title}>
              <Prose paragraphs={guide.about.paragraphs} />
            </SectionTitle>
            <Reveal className="self-start rounded-[26px] bg-foreground-950 p-8 md:p-10">
              <h2 className="font-heading text-[26px] text-background-50">{guide.name} at a Glance</h2>
              <dl className="mt-6 divide-y divide-background-50/10">
                {guide.facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[110px_1fr] gap-4 py-3.5">
                    <dt className="text-[11px] font-semibold uppercase tracking-[0.16em] text-background-200/70">{f.label}</dt>
                    <dd className="text-[14px] leading-relaxed text-background-100">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        <AreaListings
          id="listings"
          index="02"
          eyebrow="Live Listings"
          titleLead={guide.listings.title.replace(/ for Sale$/, '')}
          titleAccent="for Sale"
          text={guide.listings.text}
          match={match}
          viewAllHref={guide.listings.viewAllHref}
          variant="sale"
          tone="light"
          areaName={guide.name}
        />

        <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="03" eyebrow="Market" title={guide.market.title}>
              <Prose paragraphs={guide.market.paragraphs} />
            </SectionTitle>
            <div className="mt-8">
              <CtaButton href="/home-valuation">Request a {guide.name} Price Check</CtaButton>
            </div>
          </div>
        </section>

        {guide.sections.map((s, i) => (
          <section key={s.title} className={`px-5 py-20 md:px-10 md:py-28 ${i % 2 ? 'bg-background-100' : 'bg-background-50'}`}>
            <div className="mx-auto max-w-[1280px]">
              <SectionTitle index={`0${i + 4}`} eyebrow={guide.name} title={s.title}>
                <Prose paragraphs={s.paragraphs} />
              </SectionTitle>
              {s.points ? (
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                  {s.points.map((p) => (
                    <Reveal key={p.title} className="rounded-[22px] border border-background-200 bg-background-50 p-7">
                      <h3 className="font-heading text-[22px] leading-tight text-foreground-950">{p.title}</h3>
                      <p className="mt-4 text-[14.5px] leading-relaxed text-foreground-600">{p.text}</p>
                    </Reveal>
                  ))}
                </div>
              ) : null}
            </div>
          </section>
        ))}

        <section className="bg-foreground-950 px-5 py-20 md:px-10 md:py-24">
          <Reveal className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-heading text-[30px] leading-tight text-background-50 md:text-[40px]">{guide.agent.title}</h2>
              {guide.agent.paragraphs.map((p) => (
                <p key={p} className="mt-5 text-[15px] leading-relaxed text-background-200/85">
                  {p}
                </p>
              ))}
            </div>
            <CtaButton href={`/get-in-touch`}>Talk With Brandon</CtaButton>
          </Reveal>
        </section>

        <section className="bg-background-50 px-5 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle eyebrow="Nearby" title="Nearby Neighborhoods">
              <Prose paragraphs={[`Not sure ${guide.name} is the right fit? These areas share the same Metro lines and sit within a few minutes:`]} />
            </SectionTitle>
            <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {guide.nearby.map((n) => {
                const href = guideRoutes[n.name.toLowerCase().replace(/[^a-z]+/g, '-')];
                return (
                  <li key={n.name} className="rounded-[20px] border border-background-200 bg-background-100 p-6">
                    <h3 className="font-heading text-[20px] text-foreground-950">
                      {href ? <a href={href}>{n.name}</a> : n.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground-600">{n.text}</p>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <GhostButton href={hub.path}>View all neighborhoods</GhostButton>
              <GhostButton href={guide.cityHref}>
                {guide.city} homes for sale <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </GhostButton>
            </div>
          </div>
        </section>

        <Faq index="09" title={guide.faqTitle} items={guide.faqs} />
        <GuideCta title={guide.cta.title} text={guide.cta.text} primary={{ label: guide.cta.button, href: '#listings' }} />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}
