export type AreaRegion = 'Washington DC' | 'Virginia' | 'Maryland';

export interface AreaGuide {
  id: string;
  name: string;
  tag: string;
  region: AreaRegion;
  image: string;
  /**
   * Route for this area's own guide page. Left undefined for areas that do not
   * have one yet (Fort Washington, Oxon Hill) so the card can say so instead of
   * rendering a link that goes nowhere.
   */
  href?: string;
  stats: {
    price: number;
    days: number;
    listings: number;
    sales: number;
  };
}

export const exploreHero = {
  eyebrow: 'Explore Our',
  titleLead: 'Vibrant',
  titleAccent: 'Communities',
  text: 'Discover the vibrant neighborhoods and cities that make up the heart of the Washington, DC region. From bustling urban centers to charming suburban streets, each area offers unique amenities, lifestyle perks, and housing opportunities. Use our area guides to explore local schools, market trends, and hidden gems—everything you need to find the place that truly feels like home.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
};

// Every area guide from the source page, with its 30-day market snapshot intact.
export const areas: AreaGuide[] = [
  {
    id: 'alexandria',
    name: 'Alexandria',
    tag: 'VA',
    region: 'Virginia',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-500x360.jpeg',
    href: '/alexandria',
    stats: { price: 700000, days: 15, listings: 689, sales: 276 },
  },
  {
    id: 'arlington',
    name: 'Arlington',
    tag: 'VA',
    region: 'Virginia',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-500x360.jpeg',
    href: '/arlington',
    stats: { price: 872000, days: 13, listings: 388, sales: 175 },
  },
  {
    id: 'bethesda',
    name: 'Bethesda',
    tag: 'MD',
    region: 'Maryland',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-500x360.jpg',
    href: '/bethesda',
    stats: { price: 1200000, days: 22, listings: 257, sales: 57 },
  },
  {
    id: 'falls-church',
    name: 'Falls Church',
    tag: 'VA',
    region: 'Virginia',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-500x360.jpeg',
    href: '/falls-church',
    stats: { price: 790000, days: 13, listings: 223, sales: 87 },
  },
  {
    id: 'fort-washington',
    name: 'Fort Washington',
    tag: 'MD',
    region: 'Maryland',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/fort-washington-500x360.png',
    stats: { price: 585000, days: 19, listings: 56, sales: 11 },
  },
  {
    id: 'oxon-hill',
    name: 'Oxon Hill',
    tag: 'MD',
    region: 'Maryland',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/oxon-hill-1-500x360.png',
    stats: { price: 373750, days: 19, listings: 177, sales: 30 },
  },
  {
    id: 'silver-spring',
    name: 'Silver Spring',
    tag: 'MD',
    region: 'Maryland',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-500x360.jpg',
    href: '/silver-spring',
    stats: { price: 568527, days: 12, listings: 443, sales: 160 },
  },
  {
    id: 'washington',
    name: 'Washington',
    tag: 'DC',
    region: 'Washington DC',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-500x360.jpg',
    href: '/washington',
    stats: { price: 680000, days: 21, listings: 2301, sales: 357 },
  },
];

export const areaFilters = ['All Areas', 'Washington DC', 'Virginia', 'Maryland'] as const;