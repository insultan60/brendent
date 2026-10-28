'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Listing } from '@/views/properties/types';
import { FULL_MLS_FALLBACK } from '@/views/properties/utils';

/*
 * Brandon's IDX listings, shared with every page.
 *
 * The root layout reads them once on the server (src/lib/idx.ts, cached for an
 * hour) and hands them down here, so the homepage, Buyers, Rentals, Recently
 * Sold and every area page all show the same real homes without each making
 * its own IDX call.
 */
interface ListingsValue {
  listings: Listing[];
  fullMlsUrl: string;
}

const ListingsContext = createContext<ListingsValue>({ listings: [], fullMlsUrl: FULL_MLS_FALLBACK });

export function ListingsProvider({ value, children }: { value: ListingsValue; children: ReactNode }) {
  return <ListingsContext.Provider value={value}>{children}</ListingsContext.Provider>;
}

export function useListings() {
  return useContext(ListingsContext);
}
