// Content for the Exclusive Listings page — mirrors the real BW Metro
// Properties "Exclusive Listings" experience, adapted to our own design system.

export const exclusiveHero = {
  eyebrow: 'Exclusive Opportunities',
  titleLead: 'Discover Homes You Won’t Find',
  titleAccent: 'Anywhere Else',
  text: 'Gain access to handpicked properties, off-market opportunities, and standout listings across the DMV. These are homes curated for buyers who want more than what’s publicly available.',
  image: 'https://cdn.pixabay.com/photo/2016/08/16/03/50/exterior-1597098_1280.jpg',
  note: 'Off-market first · Handpicked · Privately shown',
  highlights: [
    { label: 'Off-Market Access', text: 'Homes that never hit the public feed.' },
    { label: 'Handpicked For You', text: 'Curated against your real criteria.' },
    { label: 'Privately Shown', text: 'First access, on your schedule.' },
  ],
};

export interface ExclusiveListing {
  id: string;
  searchType: 'For Sale' | 'For Rent' | 'Sold';
  price: number;
  address: string;
  city: string;
  state: 'DC' | 'VA' | 'MD';
  beds: number;
  baths: number;
  sqft: number;
  lot: number;
  yearBuilt: number;
  daysOnMarket: number;
  status: 'Active' | 'Active Under Contract' | 'Coming Soon' | 'Pending';
  listingType: 'Residential' | 'Multifamily' | 'Commercial' | 'Land' | 'Farm';
  propertyType: string;
  pool: 'Private Pool' | 'Community Pool' | 'Private or Community Pool' | 'No Private Pool';
  features: string[];
  openHouse: boolean;
  tag: string;
  x: number;
  y: number;
  image: string;
}

export const exclusiveListings: ExclusiveListing[] = [
  {
    id: 'x1',
    searchType: 'For Sale',
    price: 2450000,
    address: '4820 Foxhall Crescent NW',
    city: 'Washington',
    state: 'DC',
    beds: 6,
    baths: 5,
    sqft: 6200,
    lot: 0.42,
    yearBuilt: 2019,
    daysOnMarket: 4,
    status: 'Coming Soon',
    listingType: 'Residential',
    propertyType: 'Single Family Residence',
    pool: 'Private Pool',
    features: ['Air Conditioning', 'Detached Home', 'Master Bedroom on Main', 'Gated Communities'],
    openHouse: false,
    tag: 'Off-Market',
    x: 36,
    y: 66,
    image: 'https://cdn.pixabay.com/photo/2016/08/16/03/50/exterior-1597098_1280.jpg',
  },
  {
    id: 'x2',
    searchType: 'For Sale',
    price: 1875000,
    address: '1120 N Randolph Street',
    city: 'Arlington',
    state: 'VA',
    beds: 5,
    baths: 4,
    sqft: 4110,
    lot: 0.28,
    yearBuilt: 2017,
    daysOnMarket: 9,
    status: 'Active',
    listingType: 'Residential',
    propertyType: 'Single Family Residence',
    pool: 'No Private Pool',
    features: ['Air Conditioning', 'Detached Home', 'Basement'],
    openHouse: true,
    tag: 'Exclusive Preview',
    x: 41,
    y: 48,
    image: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg',
  },
  {
    id: 'x3',
    searchType: 'For Sale',
    price: 1295000,
    address: '305 Quigley Drive',
    city: 'Falls Church',
    state: 'VA',
    beds: 4,
    baths: 3,
    sqft: 4540,
    lot: 0.35,
    yearBuilt: 2014,
    daysOnMarket: 6,
    status: 'Active',
    listingType: 'Residential',
    propertyType: 'Townhouse',
    pool: 'Community Pool',
    features: ['Air Conditioning', 'Gated Communities'],
    openHouse: true,
    tag: 'New to Market',
    x: 28,
    y: 40,
    image: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_1280.jpg',
  },
  {
    id: 'x4',
    searchType: 'For Sale',
    price: 3400000,
    address: '6 Arden Lane',
    city: 'Bethesda',
    state: 'MD',
    beds: 5,
    baths: 6,
    sqft: 6197,
    lot: 0.51,
    yearBuilt: 2021,
    daysOnMarket: 3,
    status: 'Coming Soon',
    listingType: 'Residential',
    propertyType: 'Single Family Residence',
    pool: 'Private Pool',
    features: ['Air Conditioning', 'Detached Home', 'Waterfront'],
    openHouse: false,
    tag: 'Off-Market',
    x: 54,
    y: 27,
    image: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg',
  },
  {
    id: 'x5',
    searchType: 'For Sale',
    price: 995000,
    address: '2526 Spanish Moss Court',
    city: 'Alexandria',
    state: 'VA',
    beds: 3,
    baths: 2,
    sqft: 2400,
    lot: 0.22,
    yearBuilt: 2009,
    daysOnMarket: 14,
    status: 'Active',
    listingType: 'Residential',
    propertyType: 'Condo',
    pool: 'Community Pool',
    features: ['Air Conditioning', 'ADA Accessible'],
    openHouse: false,
    tag: 'Private Listing',
    x: 24,
    y: 63,
    image: 'https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_1280.jpg',
  },
  {
    id: 'x6',
    searchType: 'For Sale',
    price: 1690000,
    address: '1426 Reiner Road',
    city: 'Silver Spring',
    state: 'MD',
    beds: 5,
    baths: 4,
    sqft: 4308,
    lot: 0.38,
    yearBuilt: 2012,
    daysOnMarket: 11,
    status: 'Active Under Contract',
    listingType: 'Residential',
    propertyType: 'Single Family Residence',
    pool: 'No Private Pool',
    features: ['Air Conditioning', 'Detached Home', 'Basement', '55+ Community'],
    openHouse: false,
    tag: 'Exclusive Preview',
    x: 47,
    y: 19,
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
  },
  {
    id: 'x7',
    searchType: 'For Sale',
    price: 1125000,
    address: '170 Winsome Circle',
    city: 'Fort Washington',
    state: 'MD',
    beds: 4,
    baths: 3,
    sqft: 3110,
    lot: 0.29,
    yearBuilt: 2006,
    daysOnMarket: 18,
    status: 'Active',
    listingType: 'Residential',
    propertyType: 'Single Family Residence',
    pool: 'Private Pool',
    features: ['Air Conditioning', 'Detached Home', 'Waterview'],
    openHouse: true,
    tag: 'New to Market',
    x: 62,
    y: 74,
    image: 'https://cdn.pixabay.com/photo/2014/01/14/13/57/building-244500_1280.jpg',
  },
  {
    id: 'x8',
    searchType: 'For Sale',
    price: 2200000,
    address: '4401 Westbrook Lane',
    city: 'Washington',
    state: 'DC',
    beds: 4,
    baths: 4,
    sqft: 3450,
    lot: 0.12,
    yearBuilt: 2020,
    daysOnMarket: 7,
    status: 'Coming Soon',
    listingType: 'Multifamily',
    propertyType: 'Townhouse',
    pool: 'No Private Pool',
    features: ['Air Conditioning', 'Master Bedroom on Main'],
    openHouse: false,
    tag: 'Off-Market',
    x: 33,
    y: 58,
    image: 'https://cdn.pixabay.com/photo/2021/09/27/19/27/building-6662138_1280.jpg',
  },
  {
    id: 'x9',
    searchType: 'For Sale',
    price: 875000,
    address: '812 Ridgely Avenue',
    city: 'Oxon Hill',
    state: 'MD',
    beds: 3,
    baths: 2,
    sqft: 1820,
    lot: 0.19,
    yearBuilt: 2003,
    daysOnMarket: 21,
    status: 'Active',
    listingType: 'Residential',
    propertyType: 'Twin Home',
    pool: 'Community Pool',
    features: ['Air Conditioning', 'Single Story'],
    openHouse: false,
    tag: 'Private Listing',
    x: 68,
    y: 66,
    image: 'https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_1280.jpg',
  },
];

export const searchTypeOptions = ['For Sale', 'For Rent', 'Sold'];

export const communities = [
  'Washington, DC',
  'Arlington, VA',
  'Alexandria, VA',
  'Falls Church, VA',
  'Bethesda, MD',
  'Silver Spring, MD',
  'Fort Washington, MD',
  'Oxon Hill, MD',
];

export const priceOptions = [
  { label: 'No Min', value: '' },
  { label: '$500,000', value: '500000' },
  { label: '$750,000', value: '750000' },
  { label: '$1,000,000', value: '1000000' },
  { label: '$1,500,000', value: '1500000' },
  { label: '$2,000,000', value: '2000000' },
  { label: '$3,000,000', value: '3000000' },
  { label: '$5,000,000', value: '5000000' },
];

export const bedsOptions = [
  { label: 'Any', value: '' },
  { label: 'Studio', value: '0' },
  { label: '1', value: '1' },
  { label: '2', value: '2' },
  { label: '3', value: '3' },
  { label: '4', value: '4' },
  { label: '5+', value: '5' },
];

export const bathsOptions = [
  { label: 'Any', value: '' },
  { label: '1+', value: '1' },
  { label: '1.5+', value: '1.5' },
  { label: '2+', value: '2' },
  { label: '2.5+', value: '2.5' },
  { label: '3+', value: '3' },
  { label: '4+', value: '4' },
];

export const listingTypeOptions = ['All', 'Residential', 'Multifamily', 'Commercial', 'Land', 'Farm'];

export const propertyTypeOptions = [
  'Apartment',
  'Condo',
  'Deeded Parking',
  'Manufactured Home',
  'Mobile Home',
  'Other',
  'Single Family Residence',
  'Stock Cooperative',
  'Timeshare',
  'Townhouse',
  'Twin Home',
];

export const statusOptions = ['Active', 'Active Under Contract', 'Coming Soon', 'Pending'];

export const sqftOptions = ['', '500', '1000', '1500', '2000', '2500', '3000', '3500', '4000'];

export const lotOptions = ['', '0.25', '0.5', '0.75', '1', '2', '3', '4', '5'];

export const yearOptions = [
  '',
  '2026',
  '2025',
  '2024',
  '2023',
  '2022',
  '2021',
  '2020',
  '2010',
  '2000',
  '1980',
  '1960',
  '1940',
  '1920',
];

export const daysOptions = ['', '1', '3', '7', '14', '30', '60', '90', '180'];

export const soldWithinOptions = [
  { label: 'Any', value: '' },
  { label: 'Last 1 week', value: '7' },
  { label: 'Last 1 month', value: '30' },
  { label: 'Last 3 months', value: '90' },
  { label: 'Last 6 months', value: '180' },
  { label: 'Last 1 year', value: '365' },
  { label: 'Last 2 years', value: '730' },
  { label: 'Last 3 years', value: '1095' },
  { label: 'Last 5 years', value: '1825' },
];

export const poolOptions = ['Any', 'Private Pool', 'Community Pool', 'Private or Community Pool', 'No Private Pool'];

export const generalFeatureOptions = [
  'Air Conditioning',
  'Single Story',
  'Basement',
  'Gated Communities',
  'Foreclosed',
  'Detached Home',
  'ADA Accessible',
  'Master Bedroom on Main',
  'Waterfront',
  'Waterview',
];

export const exclusiveAdvantage = {
  eyebrow: 'Why Exclusive',
  title: 'A Smarter Way to Buy in the DMV',
  text: 'Most buyers only ever see what everyone else sees. Exclusive listings give you a quiet head start on homes that are priced well, presented beautifully and worth moving on quickly.',
  items: [
    {
      icon: 'key',
      title: 'Off-Market Access',
      text: 'Homes shared privately before — or instead of — ever reaching the public feed, so you compete with fewer people.',
    },
    {
      icon: 'sparkles',
      title: 'Curated, Not Crowded',
      text: 'Every property is filtered against your real criteria, budget and lifestyle, so you only see what genuinely fits.',
    },
    {
      icon: 'clock',
      title: 'Priority Showings',
      text: 'Private tours arranged on your schedule the moment something lands, giving you time to move with confidence.',
    },
    {
      icon: 'shield',
      title: 'Discreet Representation',
      text: 'Handled quietly and professionally — ideal for sellers who value privacy and buyers who value a real edge.',
    },
  ],
};

export const accessSteps = [
  {
    step: '01',
    title: 'Tell Us What You Want',
    text: 'Share your budget, must-haves and timeline in a short conversation so we know exactly what to watch for.',
  },
  {
    step: '02',
    title: 'Get Curated Options',
    text: 'We match you against off-market inventory, quiet listings and coming-soon homes you won’t find on public sites.',
  },
  {
    step: '03',
    title: 'Tour Privately, First',
    text: 'Coordinate private showings and walk each home with honest guidance before the wider market ever reacts.',
  },
  {
    step: '04',
    title: 'Move With Confidence',
    text: 'Strategy, negotiation and paperwork handled end to end so you can win the right home without the guesswork.',
  },
];

export const exclusiveFaqs = [
  {
    q: 'What exactly are exclusive listings?',
    a: 'Exclusive listings are homes that are available now but are not being broadcast across the public portals. Some are quietly pre-marketed, some are coming-soon, and others are simply off-market opportunities reserved for serious buyers.',
  },
  {
    q: 'Why would a home be sold off-market?',
    a: 'Sellers choose this route for privacy, for a faster timeline, or to test interest before a public launch. It lets them control who sees the home while still reaching qualified, prepared buyers.',
  },
  {
    q: 'Do I pay extra to access exclusive listings?',
    a: 'No. Access to our curated list of off-market and coming-soon homes is part of working together as a buyer. There is no added membership or subscription fee.',
  },
  {
    q: 'How quickly will I hear about new opportunities?',
    a: 'As soon as a home matches your criteria we reach out, often before it appears anywhere publicly. The earlier you share your search profile, the faster we can surface the right opportunities.',
  },
  {
    q: 'Can exclusive listings be found on public websites?',
    a: 'Not while they remain exclusive. Many eventually appear on the broader market if they don’t sell privately — but by then you are competing with everyone. Going exclusive-first is how you stay ahead.',
  },
  {
    q: 'I’m selling — how do exclusive listings help me?',
    a: 'The same quiet network works for sellers. Pre-marketing your home privately can generate strong offers while protecting your privacy, before you commit to a full public launch.',
  },
];

export const exclusiveDisclaimer =
  'Listing information is deemed reliable but not guaranteed and is subject to change. Exclusive and off-market opportunities are shared at the discretion of the property owner and may be withdrawn at any time. Equal Housing Opportunity.';