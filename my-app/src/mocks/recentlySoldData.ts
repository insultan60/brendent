// Content for the Recently Sold page — mirrors the BW Metro Properties
// "Recently Sold" experience, re-authored into the finalized Home design system.

export const recentlySoldHero = {
  eyebrow: 'Proven Results',
  titleLead: 'A Track Record',
  titleAccent: 'You Can Trust',
  text: "Explore recently sold homes that reflect strategic pricing, strong negotiation, and results-driven execution. See how I help clients achieve top value in today's market.",
  image:
    'https://readdy.ai/api/search-image?query=Elegant%20contemporary%20living%20room%20interior%20of%20an%20upscale%20Washington%20DC%20home%20at%20dusk%2C%20floor%20to%20ceiling%20windows%2C%20warm%20neutral%20furnishings%2C%20soft%20golden%20light%2C%20deep%20shadows%20ideal%20for%20white%20text%20overlay%2C%20editorial%20architectural%20photography%2C%20calm%20minimal%20background%2C%20refined%20premium%20mood%2C%20high%20detail%20and%20harmonious%20composition&width=1600&height=900&seq=recently-sold-hero-01&orientation=landscape',
};

export const soldStats = [
  { value: '$5.1M', label: 'Career Sales Volume' },
  { value: '9', label: 'Transactions Closed' },
  { value: '$567K', label: 'Average Sale Price' },
  { value: '$450K–$960K', label: 'Sale Price Range' },
];

export interface SoldListing {
  id: string;
  price: string;
  priceValue: number;
  address: string;
  city: string;
  state: string;
  zip: string;
  region: 'dc' | 'md' | 'va';
  beds: number | null;
  baths: number | null;
  sqft: string;
  type: string;
  image: string;
}

export const soldRegions = [
  { id: 'all', label: 'All Areas' },
  { id: 'dc', label: 'Washington, DC' },
  { id: 'md', label: 'Maryland' },
  { id: 'va', label: 'Virginia' },
];

export const soldSortOptions = [
  { label: 'Most Recent', value: 'recent' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Price: Low to High', value: 'price-asc' },
];

export const soldDisclaimer =
  'Listing information © 2026 Bright MLS. All rights reserved. The information provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Listing information is deemed reliable but is not guaranteed and should be independently verified. This content last updated on 06/02/2026.';
