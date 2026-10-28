import { isClosed, isRental, type Listing } from '@/views/properties/types';

/** The IDX Broker map search over the whole of Bright MLS. Used when the
 *  systemlinks call fails, so the full-MLS button never disappears. */
export const FULL_MLS_FALLBACK = 'https://bwmetroproperties.idxbroker.com/idx/map/mapsearch';

export function formatMoney(value: number): string {
  return `$${value.toLocaleString('en-US')}`;
}

/** Short price for a map pin: $960K, $1.2M, $3,150. */
export function shortMoney(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(value >= 10_000_000 ? 0 : 1).replace(/\.0$/, '')}M`;
  if (value >= 10_000) return `$${Math.round(value / 1000)}K`;
  return formatMoney(value);
}

/** Parse a controlled text input into a number, treating blank as "no limit". */
export function num(value: string): number | null {
  if (value === undefined || value === null) return null;
  const trimmed = String(value).trim();
  if (trimmed === '') return null;
  const parsed = Number(trimmed);
  return Number.isNaN(parsed) ? null : parsed;
}

/** "$960,000", or "$3,150/mo" for a rental. */
export function priceText(listing: Listing): string {
  return `${formatMoney(listing.price)}${isRental(listing.status) ? '/mo' : ''}`;
}

/** "Washington, DC". */
export function placeText(listing: Listing): string {
  return [listing.city, listing.state].filter(Boolean).join(', ');
}

/** Most recent first: the listed date for current homes, the closing date for
 *  sold ones. */
export const byNewest = (a: Listing, b: Listing) => b.date.localeCompare(a.date);

/**
 * Splits a set of listings into what is on the market now and what Brandon
 * has already closed. Sections show `current` when there is any, and fall back
 * to `past` (clearly labelled as sold) so they never show made-up homes.
 */
export function splitListings(listings: Listing[]) {
  return {
    current: listings.filter((l) => !isClosed(l.status)).sort(byNewest),
    past: listings.filter((l) => isClosed(l.status)).sort(byNewest),
  };
}
