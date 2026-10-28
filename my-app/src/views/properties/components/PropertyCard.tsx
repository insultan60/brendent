'use client';

import { forwardRef } from 'react';
import { ArrowUpRight, Bath, BedDouble, Home, MapPin, Ruler } from 'lucide-react';
import { isClosed, isRental, type Listing } from '@/views/properties/types';
import { formatMoney } from '@/views/properties/utils';

interface PropertyCardProps {
  listing: Listing;
  onHover?: (id: string | null) => void;
  highlighted?: boolean;
}

function priceLabel(listing: Listing) {
  if (listing.status === 'Sold') return 'Sold for';
  if (listing.status === 'Leased') return 'Leased for';
  return isRental(listing.status) ? 'Rent' : 'List price';
}

function dateLabel(listing: Listing) {
  if (!listing.date) return null;
  const when = new Date(listing.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  return isClosed(listing.status) ? `Closed ${when}` : `Listed ${when}`;
}

const PropertyCard = forwardRef<HTMLAnchorElement, PropertyCardProps>(function PropertyCard(
  { listing, onHover, highlighted = false },
  ref,
) {
  const closed = isClosed(listing.status);
  const when = dateLabel(listing);

  return (
    <a
      ref={ref}
      href={listing.url}
            onMouseEnter={() => onHover?.(listing.id)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(listing.id)}
      className={`group flex flex-col overflow-hidden rounded-[22px] border bg-background-50 transition-colors duration-300 sm:flex-row ${
        highlighted ? 'border-primary-400' : 'border-background-200 hover:border-foreground-300'
      }`}
    >
      <div className="relative h-[200px] w-full shrink-0 overflow-hidden bg-background-200 sm:h-auto sm:min-h-[184px] sm:w-[184px]">
        {listing.image ? (
          <img
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            src={listing.image}
            alt={`${listing.address}, ${listing.city} ${listing.state} ${listing.zip}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
          />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center text-foreground-400">
            <Home className="h-8 w-8" aria-hidden="true" />
          </span>
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-foreground-950/45 via-transparent to-transparent"
          aria-hidden="true"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] ${
            closed ? 'bg-foreground-950 text-background-50' : 'bg-primary-500 text-background-50'
          }`}
        >
          {listing.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-5 p-5 md:p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground-400">{priceLabel(listing)}</p>
          <div className="mt-1.5 flex items-start justify-between gap-3">
            <p className="font-heading text-[24px] leading-none text-foreground-950 md:text-[27px]">
              {formatMoney(listing.price)}
              {isRental(listing.status) ? <span className="text-[14px] text-foreground-500">/mo</span> : null}
            </p>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-foreground-400 transition-colors duration-300 group-hover:text-foreground-950"
              aria-hidden="true"
            />
          </div>
          <h3 className="mt-3.5 text-[14.5px] font-semibold leading-snug text-foreground-900">{listing.address}</h3>
          <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-foreground-500">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {listing.city}, {listing.state} {listing.zip}
          </p>
        </div>

        <div className="border-t border-background-200 pt-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[12.5px] text-foreground-600">
            {listing.beds ? (
              <span className="flex items-center gap-1.5">
                <BedDouble className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                {listing.beds} Beds
              </span>
            ) : null}
            {listing.baths ? (
              <span className="flex items-center gap-1.5">
                <Bath className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                {listing.baths} Baths
              </span>
            ) : null}
            {listing.sqft ? (
              <span className="flex items-center gap-1.5">
                <Ruler className="h-4 w-4 text-foreground-400" aria-hidden="true" />
                {listing.sqft.toLocaleString('en-US')} Sqft
              </span>
            ) : null}
          </div>
          <p className="mt-2.5 text-[11.5px] text-foreground-400">
            {listing.type}
            {when ? ` · ${when}` : ''}
          </p>
        </div>
      </div>
    </a>
  );
});

export default PropertyCard;
