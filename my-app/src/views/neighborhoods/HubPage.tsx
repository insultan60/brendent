'use client';

import { useState } from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { useReveal } from '@/hooks/useReveal';
import { guideRoutes, hub } from '@/mocks/neighborhoodsData';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';
import { CtaButton, GhostButton } from '@/views/home-v2/components/shared';
import { Faq, GuideCta, GuideHero, GuideSchema, Prose, SectionTitle } from './components/GuideParts';

export default function NeighborhoodsHub() {
  useReveal();
  const [tab, setTab] = useState(hub.cities[0].id);

  return (
    <div className="min-h-screen bg-background-100">
      <GuideSchema
        crumbs={[
          { label: 'Home', path: '' },
          { label: 'Neighborhoods', path: hub.path },
        ]}
        faqs={hub.faqs}
      />
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <GuideHero
          eyebrow={hub.hero.eyebrow}
          h1={hub.hero.h1}
          text={hub.hero.text}
          image={hub.hero.image}
          imageAlt={hub.hero.imageAlt}
          crumbs={[{ label: 'Home', href: '/' }, { label: 'Neighborhoods' }]}
          primary={{ label: 'Search Homes for Sale', href: '/properties' }}
          secondary={{ label: 'Talk With Brandon', href: '/get-in-touch' }}
        />

        <section id="areas" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="01" eyebrow="Browse by City" title={hub.start.title}>
              <Prose paragraphs={[hub.start.text]} />
            </SectionTitle>

            <div role="tablist" aria-label="Cities" className="mt-12 flex flex-wrap gap-2.5">
              {hub.cities.map((city) => (
                <button
                  key={city.id}
                  type="button"
                  role="tab"
                  id={`tab-${city.id}`}
                  aria-selected={tab === city.id}
                  aria-controls={`panel-${city.id}`}
                  onClick={() => setTab(city.id)}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-[13px] font-medium transition-colors duration-300 ${
                    tab === city.id
                      ? 'border-foreground-950 bg-foreground-950 text-background-50'
                      : 'border-background-300 text-foreground-700 hover:border-foreground-400'
                  }`}
                >
                  {city.label}
                </button>
              ))}
            </div>

            {/* Every panel is rendered and only hidden, so all card links are in the page source. */}
            {hub.cities.map((city) => (
              <div
                key={city.id}
                id={`panel-${city.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${city.id}`}
                hidden={tab !== city.id}
                className="mt-10"
              >
                {city.neighborhoods.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                      {city.neighborhoods.map((n) => {
                        const href = guideRoutes[n.slug];
                        const body = (
                          <>
                            <div className="relative h-[220px] overflow-hidden bg-background-200">
                              <img
                                loading="lazy"
                                decoding="async"
                                src={n.image}
                                alt={`${n.name} ${city.label} neighborhood guide`}
                                className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                              />
                              {!href ? (
                                <span className="absolute left-4 top-4 rounded-full bg-background-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-foreground-700">
                                  Guide coming soon
                                </span>
                              ) : null}
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-6">
                              <h3 className="font-heading text-[22px] leading-tight text-foreground-950">{n.name}</h3>
                              <p className="flex-1 text-[14px] leading-relaxed text-foreground-600">{n.hook}</p>
                              {href ? (
                                <span className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground-950">
                                  {n.linkLabel}
                                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                                </span>
                              ) : null}
                            </div>
                          </>
                        );
                        const cls = 'group flex h-full flex-col overflow-hidden rounded-[22px] border border-background-200 bg-background-50 transition-colors duration-300';
                        return (
                          <Reveal key={n.slug}>
                            {href ? (
                              <a href={href} className={`${cls} hover:border-foreground-300`}>
                                {body}
                              </a>
                            ) : (
                              <div className={cls}>{body}</div>
                            )}
                          </Reveal>
                        );
                      })}
                    </div>
                    {city.href ? (
                      <div className="mt-10">
                        <GhostButton href={city.href}>View all {city.label} neighborhoods</GhostButton>
                      </div>
                    ) : null}
                  </>
                ) : (
                  <div className="grid grid-cols-1 overflow-hidden rounded-[26px] border border-background-200 bg-background-50 md:grid-cols-[1fr_1.2fr]">
                    <img loading="lazy" decoding="async" src={city.image} alt={`${city.label} area guide`} className="h-[260px] w-full object-cover md:h-full" />
                    <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
                      <h3 className="font-heading text-[28px] text-foreground-950">{city.label}</h3>
                      <p className="text-[15px] leading-relaxed text-foreground-600">{city.intro}</p>
                      {city.names.length > 0 ? (
                        <ul className="flex flex-wrap gap-2">
                          {city.names.map((name) => (
                            <li key={name} className="flex items-center gap-1.5 rounded-full bg-background-100 px-3.5 py-1.5 text-[13px] text-foreground-800">
                              <MapPin className="h-3.5 w-3.5 text-foreground-400" aria-hidden="true" />
                              {name}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      <div>
                        {city.href ? (
                          <CtaButton href={city.href}>Explore {city.label.split(',')[0]}</CtaButton>
                        ) : (
                          <CtaButton href="/properties">Search {city.label} homes</CtaButton>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="02" eyebrow="Choosing an Area" title={hub.howTo.title}>
              <Prose paragraphs={[hub.howTo.intro]} />
            </SectionTitle>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {hub.howTo.points.map((p, i) => (
                <Reveal key={p.title} delay={(i % 2) * 70} className="rounded-[22px] border border-background-200 bg-background-50 p-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground-400">0{i + 1}</p>
                  <h3 className="mt-3 font-heading text-[24px] text-foreground-950">{p.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-foreground-600">{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="03" eyebrow="Side by Side" title={hub.compare.title} />
            <Reveal className="mt-12 overflow-x-auto rounded-[22px] border border-background-200">
              <table className="w-full min-w-[860px] text-left text-[14px]">
                <thead className="bg-foreground-950 text-background-50">
                  <tr>
                    {['Neighborhood', 'City', 'Typical homes', 'Nearest Metro', 'Known for'].map((h) => (
                      <th key={h} scope="col" className="px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-background-200">
                  {hub.compare.rows.map(([name, ...rest]) => (
                    <tr key={name} className="align-top odd:bg-background-50 even:bg-background-100/60">
                      <th scope="row" className="px-5 py-4 font-heading text-[16px] font-normal text-foreground-950">
                        {name}
                      </th>
                      {rest.map((cell, i) => (
                        <td key={i} className="px-5 py-4 leading-relaxed text-foreground-600">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
            <p className="mt-5 text-[13px] text-foreground-500">
              {hub.compare.note.split('WMATA site')[0]}
              <a href="https://www.wmata.com" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                WMATA site
              </a>
              {hub.compare.note.split('WMATA site')[1]}
            </p>
          </div>
        </section>

        <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="04" eyebrow="Across the DMV" title={hub.beyond.title}>
              <Prose paragraphs={[hub.beyond.text]} />
            </SectionTitle>
            <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hub.cities.slice(1).map((city) => (
                <li key={city.id}>
                  <Reveal className="flex h-full flex-col gap-3 rounded-[22px] border border-background-200 bg-background-50 p-7">
                    <h3 className="font-heading text-[22px] text-foreground-950">{city.label}</h3>
                    <p className="flex-1 text-[14px] leading-relaxed text-foreground-600">
                      {city.names.length > 0 ? `${city.names.join(', ')}.` : city.intro}
                    </p>
                    {city.href ? (
                      <a href={city.href} className="flex items-center gap-1.5 text-[13px] font-semibold text-foreground-950">
                        Explore {city.label.split(',')[0]}
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : null}
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal className="mt-10 flex flex-col items-start gap-5 rounded-[22px] bg-foreground-950 p-8 md:flex-row md:items-center md:justify-between md:p-10">
              <p className="max-w-2xl text-[15px] leading-relaxed text-background-100">{hub.beyond.vip}</p>
              <CtaButton href="/vip-home-search">Start a VIP Home Search</CtaButton>
            </Reveal>
          </div>
        </section>

        <section className="bg-background-50 px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[1280px]">
            <SectionTitle index="05" eyebrow="Veterans & Active Duty" title={hub.va.title}>
              <Prose paragraphs={[hub.va.text]} />
            </SectionTitle>
            <div className="mt-8">
              <GhostButton href="/buyers">Read the buyer guide</GhostButton>
            </div>
          </div>
        </section>

        <Faq index="06" title={hub.faqTitle} items={hub.faqs} />
        <GuideCta title={hub.cta.title} text={hub.cta.text} primary={{ label: 'Search Homes for Sale', href: '/properties' }} />
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}
