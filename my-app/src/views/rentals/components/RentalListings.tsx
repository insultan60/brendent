'use client';

import { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bath, BedDouble, Home, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import FullMlsNotice from '@/components/feature/FullMlsNotice';
import { useListings } from '@/components/feature/ListingsProvider';
import { rentalListingsLead } from '@/mocks/rentalsData';
import { isRental } from '@/views/properties/types';
import { placeText, priceText, splitListings } from '@/views/properties/utils';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

/* Brandon's rentals from IDX: what he has for rent now, or the homes he has
   most recently leased when nothing is available. */
export default function RentalListings() {
  const railRef = useRef<HTMLDivElement | null>(null);
  const { listings } = useListings();
  const { current, past } = splitListings(listings.filter((l) => isRental(l.status)));
  const available = current.length > 0;
  const shown = available ? current : past;

  const scrollBy = (direction: number) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: direction * (rail.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="rentals" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow tone="light" index="02">
              {available ? rentalListingsLead.eyebrow : 'Recently Leased'}
            </Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
              {rentalListingsLead.titleLead} <em className="italic text-background-100">{rentalListingsLead.titleAccent}</em>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-background-200/80 md:text-[16.5px]">
              {available
                ? rentalListingsLead.text
                : 'Brandon has no rentals available right now. Here are homes he has recently leased; search every rental on the MLS to see what is open today.'}
            </p>
          </Reveal>

          <Reveal className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Previous rentals"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Next rentals"
              className="mr-1 flex h-12 w-12 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 hover:border-background-50 hover:bg-background-50/10"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <GhostButton href={rentalListingsLead.primaryCta.href} tone="light">
              {rentalListingsLead.primaryCta.label}
            </GhostButton>
            <CtaButton href={rentalListingsLead.secondaryCta.href}>{rentalListingsLead.secondaryCta.label}</CtaButton>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-[1280px]">
        {shown.length === 0 ? (
          <FullMlsNotice
            tone="dark"
            title="No rentals listed right now"
            text="Search every rental across D.C., Maryland and Virginia on the full MLS."
          />
        ) : null}
        <div
          ref={railRef}
          data-product-shop
          className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2"
        >
          {shown.map((listing) => (
            <a
              key={listing.id}
              href={listing.url}
                            className="group flex w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-background-50/10 bg-background-50/[0.05] transition-colors duration-300 hover:border-background-50/30 sm:w-[360px]"
            >
              <div className="relative h-[240px] w-full overflow-hidden md:h-[270px]">
                {listing.image ? (
                  <img
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    src={listing.image}
                    alt={`${listing.address}, ${placeText(listing)}`}
                    className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                ) : (
                  <span className="flex h-full items-center justify-center text-background-200/60">
                    <Home className="h-8 w-8" aria-hidden="true" />
                  </span>
                )}
                <span className="absolute left-5 top-5 rounded-full bg-primary-500 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-background-50">
                  {listing.status}
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                <div>
                  <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-background-200/70">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    {placeText(listing)}
                  </p>
                  <h3 className="mt-4 font-heading text-[22px] leading-tight text-background-50">{listing.address}</h3>
                  <p className="mt-3 font-heading text-[24px] leading-none text-background-100">{priceText(listing)}</p>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-background-50/10 pt-5">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-background-200/80">
                    {listing.beds ? (
                      <span className="flex items-center gap-1.5">
                        <BedDouble className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                        {listing.beds} Bd
                      </span>
                    ) : null}
                    {listing.baths ? (
                      <span className="flex items-center gap-1.5">
                        <Bath className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                        {listing.baths} Ba
                      </span>
                    ) : null}
                    {listing.sqft ? (
                      <span className="flex items-center gap-1.5">
                        <Ruler className="h-4 w-4 text-background-200/60" aria-hidden="true" />
                        {listing.sqft.toLocaleString('en-US')} Sqft
                      </span>
                    ) : null}
                  </div>
                  <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-background-50/25 text-background-100 transition-colors duration-300 group-hover:border-background-50 group-hover:bg-background-50 group-hover:text-foreground-950">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}