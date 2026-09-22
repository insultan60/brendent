export interface PropertyFilters {
  searchType: string;
  location: string;
  priceMin: string;
  priceMax: string;
  bedsMin: string;
  bathsMin: string;
  propertyTypes: string[];
  statuses: string[];
  sqftMin: string;
  sqftMax: string;
  yearMin: string;
  yearMax: string;
  daysMax: string;
  openHouse: boolean;
  poolType: string;
  features: string[];
  keyword: string;
}

export function createInitialFilters(): PropertyFilters {
  return {
    searchType: 'For Sale',
    location: '',
    priceMin: '',
    priceMax: '',
    bedsMin: '',
    bathsMin: '',
    propertyTypes: [],
    statuses: [],
    sqftMin: '',
    sqftMax: '',
    yearMin: '',
    yearMax: '',
    daysMax: '',
    openHouse: false,
    poolType: 'Any',
    features: [],
    keyword: '',
  };
}

export type PropertySort = 'newest' | 'price-asc' | 'price-desc';