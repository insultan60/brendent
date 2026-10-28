// All content for the Washington area guide, sourced from the live
// bwmetroproperties.com/washington page and mapped onto the Home design system.

export const washingtonHero = {
  eyebrow: 'Washington, D.C. — Area Guide',
  title: 'Welcome to Washington',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide.jpg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  stats: [
    { value: '$1.18M', label: 'Median Sale Price' },
    { value: '26', label: 'Avg Days on Market' },
    { value: '204', label: 'Active Listings' },
    { value: '39', label: 'Neighborhoods' },
  ],
};

// Quick-jump band beneath the hero (mirrors the live area-navigation bar).
export const quickLinks = [
  { label: 'Featured Listings', href: '#featured-listings' },
  { label: 'Market Report', href: '#market-report' },
  { label: 'Top Schools', href: '#top-schools' },
  { label: 'Around The Area', href: '#the-area' },
  { label: 'Local Advice', href: '#advice' },
];

// Neighborhood options listed in the source area dropdown.
export const areaOptions = [
  'Adams Morgan',
  'American University Park',
  'Barney Circle',
  'Brightwood',
  'Brookland',
  'Capitol Hill',
  'Capitol Riverfront',
  'Cathedral Heights',
  'Chevy Chase DC',
  'Cleveland Park',
  'Columbia Heights',
  'Forest Hills',
  'Foxhall',
  'Friendship Heights (DC)',
  'Gables Dupont Circle',
  'Georgetown',
  'Glover Park',
  'H Street Corridor',
  'Hill East',
  'Kalorama',
  'Logan Circle',
  'Mount Pleasant',
  'Navy Yard',
  'NoMa',
  'North Cleveland Park',
  'Palisades',
  'Penn Quarter',
  'Petworth',
  'Shaw / U Street Corridor',
  'Southwest Waterfront',
  'Spring Valley',
  'Takoma',
  'Tenleytown',
  'The Wharf',
  'Union Market',
  'Waterfront',
  'West End / Foggy Bottom',
  'Woodley Park',
];

// Featured neighborhood cards (real imagery from the source guide).
export interface NeighborhoodCard {
  name: string;
  image: string;
  href?: string;
}

export const neighborhoods: NeighborhoodCard[] = [
  {
    name: 'Shaw / U Street Corridor',
    href: '/shaw-u-street-corridor',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/shaw-u-street-AUTOx350.fit.png',
  },
  {
    name: 'West End / Foggy Bottom',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/west-end-foggy-bottom-2-AUTOx350.fit.png',
  },
  {
    name: 'Gables Dupont Circle',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/dupont-circle-AUTOx350.fit.png',
  },
  {
    name: 'Kalorama',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/kalorama-1-AUTOx350.fit.png',
  },
  {
    name: 'Penn Quarter',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/downtown-penn-quarter-chinatown-AUTOx350.fit.png',
  },
  {
    name: 'Logan Circle',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/logan-circle-1-AUTOx350.fit.png',
  },
  {
    name: 'Columbia Heights',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/columbia-heights-1-AUTOx350.fit.png',
  },
  {
    name: 'Adams Morgan',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/adams-morgan-1-AUTOx350.fit.png',
  },
  {
    name: 'NoMa',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/noma-1-AUTOx350.fit.png',
  },
  {
    name: 'Union Market',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/union-market-1-AUTOx350.fit.png',
  },
  {
    name: 'H Street Corridor',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/h-street-AUTOx350.fit.png',
  },
  {
    name: 'Waterfront',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/waterfront-1-AUTOx350.fit.png',
  },
  {
    name: 'Navy Yard',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/navy-yard-1-AUTOx350.fit.png',
  },
  {
    name: 'Capitol Riverfront',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/capitol-riverfront-1-AUTOx350.fit.png',
  },
  {
    name: 'The Wharf',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/the-wharf-1-AUTOx350.fit.png',
  },
  {
    name: 'Capitol Hill',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/capitol-hill-1-AUTOx350.fit.png',
  },
  {
    name: 'Barney Circle',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/barney-circle-1-AUTOx350.fit.png',
  },
  {
    name: 'Hill East',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/hill-east-1-AUTOx350.fit.png',
  },
  {
    name: 'American University Park',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/american-university-park-1-AUTOx350.fit.png',
  },
  {
    name: 'Tenleytown',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/tenleytown-1-AUTOx350.fit.png',
  },
  {
    name: 'Chevy Chase DC',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/chevy-chase-dc-1-AUTOx350.fit.png',
  },
  {
    name: 'Friendship Heights (DC)',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/friendship-heights-dc-1-AUTOx350.fit.png',
  },
  {
    name: 'Glover Park',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/glover-park-1-AUTOx350.fit.png',
  },
  {
    name: 'Cathedral Heights',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/cathedral-heights-1-AUTOx350.fit.png',
  },
  {
    name: 'Cleveland Park',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/cleveland-park-1-AUTOx350.fit.png',
  },
  {
    name: 'North Cleveland Park',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/north-cleveland-park-1-AUTOx350.fit.png',
  },
  {
    name: 'Woodley Park',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/woodley-park-1-AUTOx350.fit.png',
  },
  {
    name: 'Forest Hills',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/forest-hills-1-AUTOx350.fit.png',
  },
  {
    name: 'Palisades',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/palisades-1-AUTOx350.fit.png',
  },
  {
    name: 'Foxhall',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/foxhall-1-AUTOx350.fit.png',
  },
  {
    name: 'Spring Valley',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/spring-valley-1-AUTOx350.fit.png',
  },
];

export const saleListingsLead = {
  eyebrow: 'New to the market',
  titleLead: 'New to the',
  titleAccent: 'Market',
  text: 'Check out the hottest new listings Washington has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Washington has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Washington?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damh2t8p3fe23ggcghbg',
  submitAddr: 'https://readdy.ai/api/form/damh2t8p3fe23ggcghbg',
  areaName: 'Washington',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
  disclaimer:
    "I agree to be contacted by Unbound Solutions dba BW Metro Properties via call, email, and text for real estate services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.",
};

export const schoolsCopy = {
  eyebrow: 'Education',
  title: 'Schools In The Area',
  text: 'Browse local schools, complete with ratings and contact info.',
};

export const schoolFilters = [
  { id: 'all', label: 'All Schools' },
  { id: 'preschool', label: 'Preschool' },
  { id: 'elementary', label: 'Elementary School' },
  { id: 'middle', label: 'Middle School' },
  { id: 'high', label: 'High School' },
];

export const schools = [
  { name: 'Benjamin Banneker High School', phone: '202-671-6320', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Howard University Middle School of Math and Science', phone: '202-806-7725', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'School Without Walls @ Francis-Stevens Education Campus', phone: '202-724-4841', type: 'public', grades: 'EE-8', rating: 5, category: 'elementary' },
  { name: 'Washington Global Public Charter School', phone: '202-796-2415', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'Columbia Heights Education Campus', phone: '202-939-7700', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'Smithsonian Early Enrichment Center', phone: '202-633-1399', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.seec.si.edu/education.htm' },
  { name: 'Gonzaga College High School', phone: '202-336-7100', type: 'private', grades: '9-12', rating: 0, category: 'high', website: 'https://www.gonzaga.org/' },
  { name: 'Duke Ellington School of the Arts', phone: '202-282-0123', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Capitol Hill Montessori School at Logan', phone: '202-698-4467', type: 'public', grades: 'PK-8', rating: 4, category: 'elementary' },
  { name: 'Thomson Elementary School', phone: '202-898-4660', type: 'public', grades: 'EE-5', rating: 5, category: 'elementary' },
  { name: 'School Without Walls High School', phone: '202-645-9690', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Capitol Hill Day School', phone: '202-355-4498', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.chds.org/' },
  { name: 'Brent Elementary School', phone: '202-698-3363', type: 'public', grades: 'EE-5', rating: 5, category: 'elementary' },
  { name: 'Dunbar High School', phone: '202-698-3762', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'McKinley Technology High School', phone: '202-281-3950', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Hardy Middle School', phone: '202-729-4350', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Stuart Hobson Middle School', phone: '202-671-6010', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Ross Elementary School', phone: '202-673-7200', type: 'public', grades: 'EE-5', rating: 5, category: 'elementary' },
  { name: 'Garrison Elementary School', phone: '202-673-7263', type: 'public', grades: 'EE-5', rating: 5, category: 'elementary' },
  { name: 'Basis DC Public Charter School', phone: '202-804-6390', type: 'public', grades: '5-12', rating: 5, category: 'high' },
  { name: 'Meridian Public Charter School', phone: '202-387-9830', type: 'public', grades: 'PK-8', rating: 3, category: 'elementary' },
  { name: 'St Augustine Catholic School', phone: '202-667-2608', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.staug-dc.org/' },
  { name: 'Georgetown Visitation Preparatory School', phone: '202-337-3350', type: 'private', grades: '9-12', rating: 0, category: 'high', website: 'https://www.visi.org/' },
  { name: 'Kipp DC - College Preparatory Public Charter School', phone: '202-678-2527', type: 'public', grades: '9-12', rating: 4, category: 'high' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Enjoy the best of what the Washington area has to offer — from top restaurants and coffee to shopping, wellness and coworking.',
};

export const aroundCategories = [
  {
    id: 'eat',
    label: 'Eat',
    icon: 'utensils',
    places: [
      { name: 'The Dabney', detail: 'Michelin-starred Mid-Atlantic cooking in Shaw' },
      { name: 'Oyster Oyster', detail: 'Vegetable-forward tasting menu with local produce' },
      { name: 'Little Serow', detail: 'Intimate Northern Thai prix-fixe off Dupont Circle' },
      { name: 'Un Je Ne Sais Quoi', detail: 'Beloved French pâtisserie in Dupont Circle' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'Dan\u2019s Cafe', detail: 'Historic bistro and bar open since 1947' },
      { name: 'The Gibson', detail: 'Speakeasy-style craft cocktails on U Street' },
      { name: 'Dacha Beer Garden', detail: 'Seasonal outdoor beer garden in Shaw' },
      { name: 'Service Bar', detail: 'Neighborhood cocktail bar on U Street' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Georgetown Waterfront', detail: 'Boutiques and national brands along M Street' },
      { name: 'CityCenterDC', detail: 'Luxury shopping in downtown Washington' },
      { name: 'Union Market', detail: 'Curated food hall and independent makers' },
      { name: 'Eastern Market', detail: 'Historic Capitol Hill public market since 1873' },
    ],
  },
  {
    id: 'health',
    label: 'Health',
    icon: 'heart-pulse',
    places: [
      { name: 'MedStar Washington Hospital Center', detail: 'Major teaching hospital in Northwest DC' },
      { name: 'George Washington University Hospital', detail: 'Full-service hospital in Foggy Bottom' },
      { name: 'One Medical', detail: 'Membership-based primary care across the city' },
      { name: 'Rock Creek Park Trails', detail: '23 miles of trails for walking and running' },
    ],
  },
  {
    id: 'coffee',
    label: 'Coffee',
    icon: 'coffee',
    places: [
      { name: 'Compass Coffee', detail: 'Local roaster with shops across the District' },
      { name: 'The Coffee Bar', detail: 'Neighborhood favorite on 12th Street NW' },
      { name: 'La Colombe', detail: 'Draft lattes in Blagden Alley' },
      { name: 'Seylou Bakery', detail: 'Wood-fired bakery and coffee in Shaw' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase',
    places: [
      { name: 'WeWork Metropolitan Square', detail: 'Flexible offices near the White House' },
      { name: 'Industrious Logan Circle', detail: 'Premium coworking on 14th Street NW' },
      { name: 'The Yard Pike & Rose', detail: 'Modern workspace just outside DC' },
      { name: 'Carr Workplaces', detail: 'Private offices throughout downtown' },
    ],
  },
];

export const newsCopy = {
  eyebrow: 'News and Advice',
  titleLead: 'News and',
  titleAccent: 'Advice',
  text: 'Get the latest local and national real estate news and advice.',
  cta: { label: 'View All Posts', href: '/blog' },
};

export const newsPosts = [
  {
    title: 'Your Step-by-Step Guide to Buying a Home in the DMV',
    category: 'Buying',
    date: 'March 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/buy-AUTOx575.fit.jpg',
    href: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
  },
  {
    title: 'The \u2018Unicorn\u2019 Listing: A Smart Guide for Buyers',
    category: 'Buying',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor15-AUTOx575.fit.jpeg',
    href: '/blog',
  },
  {
    title: 'How Smart DMV Buyers Negotiate in Today\u2019s Bouncing Market',
    category: 'Strategy',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/housekeys-AUTOx575.fit.jpg',
    href: '/blog',
  },
];