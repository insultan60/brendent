'use client';

import { ArrowUpRight, Bath, BedDouble, Home, MapPin, Ruler } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import FullMlsNotice from '@/components/feature/FullMlsNotice';
import { useListings } from '@/components/feature/ListingsProvider';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';
import { placeText, priceText, splitListings } from '@/views/properties/utils';

/* Brandon's own IDX listings: what he has on the market, or, when there is
   nothing listed right now, the homes he has most recently sold. */
export default function ListingsV2() {
  const { listings } = useListings();
  const { current, past } = splitListings(listings);
  const selling = current.length > 0;
  const shown = (selling ? current : past).slice(0, 6);

  return (
    <section id="listings" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <Eyebrow index="04">{selling ? 'New to the Market' : 'Recent Results'}</Eyebrow>
            <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {selling ? (
                <>
                  Featured <em className="italic">Properties</em>
                </>
              ) : (
                <>
                  Recently <em className="italic">Sold</em>
                </>
              )}
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {selling
                ? 'Homes Brandon has on the market across the DMV region. See what your next chapter could look like.'
                : 'Homes Brandon has recently helped close across the DMV region. Looking for your next home? Search every listing on the MLS.'}
            </p>
          </Reveal>
          <Reveal className="flex flex-wrap items-center gap-3">
            <GhostButton href="/vip-home-search">VIP Home Search</GhostButton>
            <CtaButton href="/properties">View All Listings</CtaButton>
          </Reveal>
        </div>

        {shown.length === 0 ? (
          <FullMlsNotice
            className="mt-16"
            title="New listings are on the way"
            text="Search every home for sale across D.C., Maryland and Virginia on the full MLS."
          />
        ) : (
          <div data-product-shop className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-7 lg:grid-cols-3">
            {shown.map((listing, index) => (
              <Reveal key={listing.id} delay={index * 70}>
                <a
                  href={listing.url}
                                    className="group flex h-full flex-col overflow-hidden rounded-[26px] border border-background-200 bg-background-50 transition-colors duration-300 hover:border-foreground-300"
                >
                  <div className="relative h-[300px] w-full overflow-hidden bg-background-200 md:h-[340px]">
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
                      <span className="flex h-full items-center justify-center text-foreground-400">
                        <Home className="h-8 w-8" aria-hidden="true" />
                      </span>
                    )}
                    <span className="absolute left-5 top-5 rounded-full bg-background-50/92 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-foreground-800 backdrop-blur">
                      {listing.status}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col justify-between gap-6 p-7">
                    <div>
                      <p className="flex items-center gap-2 text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-500">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {placeText(listing)}
                      </p>
                      <h3 className="mt-4 font-heading text-[24px] leading-tight text-foreground-950 md:text-[27px]">
                        {listing.address}
                      </h3>
                      <p className="mt-4 font-heading text-[24px] leading-none text-foreground-950">{priceText(listing)}</p>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-background-200 pt-5">
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-foreground-600">
                        {listing.beds ? (
                          <span className="flex items-center gap-1.5">
                            <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                            {listing.beds} Bd
                          </span>
                        ) : null}
                        {listing.baths ? (
                          <span className="flex items-center gap-1.5">
                            <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                            {listing.baths} Ba
                          </span>
                        ) : null}
                        {listing.sqft ? (
                          <span className="flex items-center gap-1.5">
                            <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                            {listing.sqft.toLocaleString('en-US')} Sqft
                          </span>
                        ) : null}
                      </div>
                      <span className="arrow-btn flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground-300 text-foreground-800 transition-colors duration-300 group-hover:border-foreground-950 group-hover:bg-foreground-950 group-hover:text-background-50">
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
