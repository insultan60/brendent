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

export const soldListings: SoldListing[] = [
  {
    id: 's-old-1',
    price: '$475,000',
    priceValue: 475000,
    address: '1463 Harvard Street NW #2',
    city: 'Washington',
    state: 'DC',
    zip: '20009',
    region: 'dc',
    beds: 2,
    baths: 2,
    sqft: '967',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/ec221937-2589-470c-9115-461914acad8f_compressed_1463-harvard-st-nw-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-2',
    price: '$960,000',
    priceValue: 960000,
    address: '65 Bryant Street NW',
    city: 'Washington',
    state: 'DC',
    zip: '20001',
    region: 'dc',
    beds: 3,
    baths: 3,
    sqft: '2,050',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/187571ee-e3f4-416c-8bcd-655dbe9ef783_compressed_65-bryant-st-nw-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-3',
    price: '$1,300',
    priceValue: 1300,
    address: '4668 York Road',
    city: 'Baltimore',
    state: 'MD',
    zip: '21212',
    region: 'md',
    beds: null,
    baths: null,
    sqft: '950',
    type: 'Commercial',
    image: 'https://readdy.ai/api/search-image?query=Modern%20commercial%20retail%20storefront%20on%20York%20Road%20Baltimore%2C%20clean%20facade%2C%20street-level%20commercial%20space%2C%20neutral%20tones%2C%20urban%20setting%2C%20professional%20exterior%20real%20estate%20photography%2C%20bright%20daylight&width=800&height=600&seq=sold-listing-03&orientation=landscape',
  },
  {
    id: 's-old-4',
    price: '$450,000',
    priceValue: 450000,
    address: '3643 Satinleaf Court',
    city: 'Waldorf',
    state: 'MD',
    zip: '20602',
    region: 'md',
    beds: 4,
    baths: 3,
    sqft: '1,896',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/8e1c64cb-ee2b-4528-8084-f51e9815338d_compressed_3643-satinleaf-ct-waldorf-md-primaryphoto.webp',
  },
  {
    id: 's-old-5',
    price: '$535,000',
    priceValue: 535000,
    address: '901 19th Street NE #PH1',
    city: 'Washington',
    state: 'DC',
    zip: '20002',
    region: 'dc',
    beds: 2,
    baths: 2,
    sqft: '1,250',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/0afc6466-c53e-499c-89cd-8079ee27eb67_compressed_901-19th-st-ne-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-6',
    price: '$279,900',
    priceValue: 279900,
    address: '1 Scott Circle NW #305',
    city: 'Washington',
    state: 'DC',
    zip: '20008',
    region: 'dc',
    beds: 1,
    baths: 1,
    sqft: '780',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/ce67bc67-1f4a-48f0-b36d-5c72c3dfc165_compressed_1-scott-cir-nw-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-7',
    price: '$925,000',
    priceValue: 925000,
    address: '1414 Kearny Street NE',
    city: 'Washington',
    state: 'DC',
    zip: '20017',
    region: 'dc',
    beds: 4,
    baths: 3,
    sqft: '2,400',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/1f319f11-c74e-4d93-8812-0324570c6cee_compressed_1414-kearny-st-ne-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-8',
    price: '$695,000',
    priceValue: 695000,
    address: '8600 Colonel Seward Drive',
    city: 'Fort Washington',
    state: 'MD',
    zip: '20744',
    region: 'md',
    beds: 4,
    baths: 3,
    sqft: '2,150',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/a85df733-ea9c-42be-ba44-a14e6e2370b9_compressed_8600-colonel-seward-dr-fort-washington-md-primaryphoto.webp',
  },
  {
    id: 's-old-9',
    price: '$1,300',
    priceValue: 1300,
    address: '4668 York Road Unit 1 (1st Fl)',
    city: 'Baltimore',
    state: 'MD',
    zip: '21212',
    region: 'md',
    beds: null,
    baths: null,
    sqft: '950',
    type: 'Commercial',
    image: 'https://readdy.ai/api/search-image?query=Commercial%20office%20space%20interior%20Baltimore%20Maryland%2C%20first%20floor%20unit%2C%20clean%20open%20floor%20plan%2C%20neutral%20walls%2C%20large%20windows%2C%20professional%20commercial%20real%20estate%20photography%2C%20bright%20and%20modern%20workspace&width=800&height=600&seq=sold-listing-09&orientation=landscape',
  },
  {
    id: 's-old-10',
    price: '$460,000',
    priceValue: 460000,
    address: '555 Massachusetts Avenue NW #908',
    city: 'Washington',
    state: 'DC',
    zip: '20001',
    region: 'dc',
    beds: 2,
    baths: 2,
    sqft: '1,100',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/cadc9f67-e01d-4626-830c-d0e2c38b3e82_compressed_555-massachusetts-ave-nw-washington-dc-primaryphoto.webp',
  },
  {
    id: 's-old-11',
    price: '$325,000',
    priceValue: 325000,
    address: '6012 Curtier Drive #504-A',
    city: 'Alexandria',
    state: 'VA',
    zip: '22304',
    region: 'va',
    beds: 2,
    baths: 2,
    sqft: '1,050',
    type: 'Residential',
    image: 'https://storage.helloreaddy.io/project_files/a4c05180-377d-4921-a669-a72d003eea7b/050d9ce3-a6b5-4efc-bf46-4366b44e4e2e_compressed_6012-curtier-dr-alexandria-va-primaryphoto.webp',
  },
];

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

export const soldMapMessage =
  'To view listings, please zoom further into your desired area or add a location to the search bar.';

export const soldDisclaimer =
  'Listing information © 2026 Bright MLS. All rights reserved. The information provided is for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Listing information is deemed reliable but is not guaranteed and should be independently verified. This content last updated on 06/02/2026.';