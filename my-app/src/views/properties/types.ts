export type ListingStatus = 'For Sale' | 'Coming Soon' | 'Pending' | 'For Rent' | 'Sold' | 'Leased';

/** One of Brandon's listings, normalized from IDX Broker by src/lib/idx.ts. */
export interface Listing {
  id: string;
  /** Page address on this site: /property/<slug>. */
  slug: string;
  status: ListingStatus;
  /** Sale or lease price for closed deals, list price otherwise. */
  price: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  beds: number;
  baths: number;
  sqft: number | null;
  type: string;
  lat: number | null;
  lng: number | null;
  image: string | null;
  /** This listing's detail page on the site. */
  url: string;
  /** Sold date for closed deals, listed date otherwise (ISO). */
  date: string;
}

export interface FactGroup {
  title: string;
  items: [label: string, value: string][];
}

/** Everything the detail page shows, read from IDX by getListingDetail(). */
export interface ListingDetail extends Listing {
  photos: string[];
  description: string;
  listPrice: number;
  /** Sale or lease price; null while the home is on the market. */
  closedPrice: number | null;
  listedDate: string;
  closedDate: string;
  yearBuilt: number | null;
  lotSqft: number | null;
  mlsNumber: string;
  /** Bright MLS office code of the listing brokerage. */
  listingOffice: string;
  /** What Brandon did on this deal, when he was part of it. */
  brandonRole: 'listing' | 'buyer' | null;
  /** The same listing on Brandon's IDX Broker site. */
  idxUrl: string;
  facts: FactGroup[];
}

export type StatusTab = 'all' | 'active' | 'sold';

export interface PropertyFilters {
  status: StatusTab;
  location: string;
  priceMin: string;
  priceMax: string;
  bedsMin: string;
}

export function createInitialFilters(): PropertyFilters {
  return { status: 'all', location: '', priceMin: '', priceMax: '', bedsMin: '' };
}

export type PropertySort = 'newest' | 'price-asc' | 'price-desc';

export const isClosed = (status: ListingStatus) => status === 'Sold' || status === 'Leased';
export const isRental = (status: ListingStatus) => status === 'For Rent' || status === 'Leased';
