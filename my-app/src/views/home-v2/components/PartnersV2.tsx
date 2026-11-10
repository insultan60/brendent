import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '@/components/base/Reveal';
import { featuredPartners } from '@/mocks/partnersData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/** A compact row of Brandon's real partners; full details are on /resources. */
export default function PartnersV2({ index }: { index: string }) {
  return (
    <section id="partners" className="bg-background-100 px-5 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Eyebrow index={index}>Lenders, Inspectors, and Service Providers</Eyebrow>
            <h2 className="mt-7 font-heading text-[30px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[42px]">
              Our Trusted <em className="italic">Partners</em>
            </h2>
          </div>
          <Link
            href="/resources#network"
            className="group inline-flex shrink-0 items-center gap-2 text-[14px] font-semibold text-foreground-900 underline-offset-4 hover:underline"
          >
            Meet the full network
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Reveal>

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredPartners.map((partner) => (
            <li key={partner.name}>
              <a
                href={partner.site}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-[18px] border border-background-300 bg-background-50 px-5 py-4 transition-colors duration-300 hover:border-foreground-400"
              >
                <span className="block text-[10.5px] font-semibold uppercase tracking-[0.22em] text-foreground-500">
                  {partner.category}
                </span>
                <span className="mt-1.5 block text-[14px] font-medium leading-snug text-foreground-900">
                  {partner.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
