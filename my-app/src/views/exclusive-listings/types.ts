export interface ExclusiveFilters {
  searchType: string;
  community: string;
  location: string;
  priceMin: string;
  priceMax: string;
  bedsMin: string;
  bathsMin: string;
  listingType: string;
  propertyTypes: string[];
  statuses: string[];
  sqftMin: string;
  sqftMax: string;
  lotMin: string;
  lotMax: string;
  yearMin: string;
  yearMax: string;
  daysMin: string;
  daysMax: string;
  soldWithin: string;
  exclude55: boolean;
  openHouse: boolean;
  poolType: string;
  features: string[];
  keyword: string;
}

export function createInitialFilters(): ExclusiveFilters {
  return {
    searchType: 'For Sale',
    community: '',
    location: '',
    priceMin: '',
    priceMax: '',
    bedsMin: '',
    bathsMin: '',
    listingType: 'All',
    propertyTypes: [],
    statuses: [],
    sqftMin: '',
    sqftMax: '',
    lotMin: '',
    lotMax: '',
    yearMin: '',
    yearMax: '',
    daysMin: '',
    daysMax: '',
    soldWithin: '',
    exclude55: false,
    openHouse: false,
    poolType: 'Any',
    features: [],
    keyword: '',
  };
}

export type SortKey = 'newest' | 'price-asc' | 'price-desc' | 'sqft-desc';