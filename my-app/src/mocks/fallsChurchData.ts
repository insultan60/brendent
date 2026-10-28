// All content for the Falls Church area guide, sourced from the live
// bwmetroproperties.com/falls-church page and mapped onto the Home design system.

export const fallsChurchHero = {
  eyebrow: 'Falls Church, VA — Area Guide',
  title: 'Welcome to Falls Church',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide.jpeg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaLabel: 'Falls Church, VA',
  areaText:
    'A small, walkable independent city just outside DC, Falls Church pairs a charming Broad Street downtown with quiet, tree-lined neighborhoods.',
  stats: [
    { value: '$960K', label: 'Median Sale Price' },
    { value: '22', label: 'Avg Days on Market' },
    { value: '74', label: 'Active Listings' },
    { value: '35', label: 'Schools In The Area' },
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

// Area options listed in the source area dropdown.
export const areaOptions = [
  'Alexandria',
  'Arlington',
  'Bethesda',
  'Falls Church',
  'Fort Washington',
  'Oxon Hill',
  'Silver Spring',
  'Washington',
];

export const saleListingsLead = {
  eyebrow: 'New to the market',
  titleLead: 'New to the',
  titleAccent: 'Market',
  text: 'Check out the hottest new listings Falls Church has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Falls Church has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Falls Church?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'dami3m0p3fe23ggcgho0',
  submitAddr: 'https://readdy.ai/api/form/dami3m0p3fe23ggcgho0',
  areaName: 'Falls Church',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-AUTOx1150.fit.jpeg',
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
  { name: "Bailey's Elementary School", phone: '703-575-6800', type: 'public', grades: 'PK-2', rating: 2, category: 'preschool' },
  { name: 'Mary Ellen Henderson Middle School', phone: '703-720-5700', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Oak Hill Montessori Llc', phone: '703-698-8600', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool' },
  { name: 'Shrevewood Elementary School', phone: '703-645-6600', type: 'public', grades: 'PK-6', rating: 3, category: 'elementary' },
  { name: 'Grace Christian Academy', phone: '703-534-5517', type: 'private', grades: 'KG-8', rating: 0, category: 'elementary', website: 'https://www.gracels.org/' },
  { name: 'Timber Lane Elementary School', phone: '703-206-5300', type: 'public', grades: 'PK-6', rating: 3, category: 'elementary' },
  { name: 'Graham Road Elementary School', phone: '571-226-2700', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Jackson Middle School', phone: '703-204-8100', type: 'public', grades: '7-8', rating: 3, category: 'middle' },
  { name: 'Westlawn Elementary School', phone: '703-241-5100', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Falls Church High School Academy', phone: '703-207-4000', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.fcps.edu/' },
  { name: 'Meridian High School', phone: '703-248-5500', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Marshall High School Academy', phone: '703-714-5400', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.fcps.edu/' },
  { name: 'Longfellow Middle School', phone: '703-533-2600', type: 'public', grades: '7-8', rating: 5, category: 'middle' },
  { name: 'Justice High School', phone: '703-824-3900', type: 'public', grades: '9-12', rating: 2, category: 'high' },
  { name: 'Lemon Road Elementary School', phone: '703-714-6400', type: 'public', grades: 'PK-6', rating: 5, category: 'elementary' },
  { name: 'Congressional School', phone: '703-533-9711', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool' },
  { name: 'Trinity School at Meadow View', phone: '703-876-1920', type: 'private', grades: '7-12', rating: 0, category: 'high', website: 'https://www.trinityschools.org/' },
  { name: 'St James Catholic School', phone: '703-532-2388', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.saintjamesschool.org/' },
  { name: 'Acton Academy Falls Church', phone: '202-615-5552', type: 'private', grades: '3-5', rating: 0, category: 'elementary' },
  { name: 'Pine Spring Elementary School', phone: '571-226-4400', type: 'public', grades: 'PK-6', rating: 3, category: 'elementary' },
  { name: 'Sleepy Hollow Elementary School', phone: '703-237-7000', type: 'public', grades: 'KG-5', rating: 2, category: 'elementary' },
  { name: 'Falls Church High School', phone: '703-207-4000', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'Oak Street Elementary School', phone: '703-248-5660', type: 'public', grades: '3-5', rating: 5, category: 'elementary' },
  { name: "Bailey's Upper Elementary School", phone: '703-503-2700', type: 'public', grades: '3-5', rating: 2, category: 'elementary' },
  { name: 'Woodburn Elementary School', phone: '703-641-8200', type: 'public', grades: 'KG-6', rating: 2, category: 'elementary' },
  { name: 'Marshall High School', phone: '703-714-5400', type: 'public', grades: '9-12', rating: 4, category: 'high' },
  { name: 'St Anthony of Padua School', phone: '703-820-7450', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool' },
  { name: 'Mount Daniel Elementary School', phone: '703-248-5640', type: 'public', grades: 'KG-2', rating: 5, category: 'elementary' },
  { name: 'Montessori School of Holmes Run Childrens House', phone: '703-573-7599', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool' },
  { name: 'Glen Forest Elementary School', phone: '703-578-8000', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Crossroads Child Development Center', phone: '703-845-0021', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.schoolsk-12.com/virginia/falls-church/schools.html' },
  { name: 'Falls Church Episcopal Day School', phone: '703-534-8687', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.thefallschurch.org/' },
  { name: 'Beech Tree Elementary School', phone: '703-531-2600', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Haycock Elementary School', phone: '703-531-4000', type: 'public', grades: 'KG-6', rating: 5, category: 'elementary' },
  { name: 'Belvedere Elementary School', phone: '703-916-6800', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Falls Church has to offer — from dining and drinks to shopping, coffee, fitness and garden living.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'Thompson Italian', detail: 'Chef-driven Italian plates and house-made pasta on W Broad Street' },
      { name: 'Lazy Mike\'s', detail: 'Neighborhood favorite for burgers, deli sandwiches and diner classics' },
      { name: 'Pizzeria Orso', detail: 'Wood-fired Neapolitan pizza in the heart of Falls Church' },
      { name: 'Duangrat\'s', detail: 'Longtime local spot for refined Thai cooking' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'Spacebar', detail: 'Cult-favorite grilled cheese and craft beer bar on W Broad Street' },
      { name: 'Ireland\'s Four Provinces', detail: 'Classic Irish pub with live music and a warm welcome' },
      { name: 'Dogwood Tavern', detail: 'Laid-back tavern for craft drafts and casual bites' },
      { name: 'Clare & Don\'s Beach Shack', detail: 'Island-inspired cocktails and seafood close to home' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Broad Street Downtown', detail: 'Independent boutiques, shops and services along the main street' },
      { name: 'Falls Church Farmers Market', detail: 'Year-round Saturday market with local produce and makers' },
      { name: 'Tinner Hill', detail: 'Historic neighborhood rooted in the city\'s civil-rights legacy' },
      { name: 'Eden Center', detail: 'Vibrant Vietnamese shopping and dining center nearby' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Rare Bird Coffee Roasters', detail: 'Local roaster with a cozy Broad Street coffee bar' },
      { name: 'Caffè Amouri', detail: 'European-style espresso bar and roastery in Falls Church' },
      { name: 'Northside Social Falls Church', detail: 'Coffee by day and wine and small plates by night' },
      { name: 'Killer ESP', detail: 'Small-batch coffee and espresso for serious caffeine fans' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'W&OD Trail', detail: 'Paved 45-mile rail-trail ideal for running, walking and biking' },
      { name: 'Cherry Hill Park', detail: 'Community park with trails, courts and open green space' },
      { name: 'The Fitness Equation', detail: 'Full-service gym and training studio in Falls Church' },
      { name: 'Falls Church Community Center', detail: 'Recreation, classes and fitness for all ages' },
    ],
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: 'sprout',
    places: [
      { name: 'Merrifield Garden Center', detail: 'Expansive nursery and garden center serving the area' },
      { name: 'Behnke Nurseries', detail: 'Longtime local grower of plants, trees and garden supplies' },
      { name: 'Falls Church Community Garden', detail: 'Shared plots and green thumbs right in the city' },
      { name: 'Colonial Gardens', detail: 'Neighborhood nursery for seasonal flowers and landscaping' },
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
    title: 'The VA Loan, Explained: A Smart Guide for Buyers',
    category: 'Buying',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor15-AUTOx575.fit.jpeg',
    href: '/blog',
  },
  {
    title: 'How Smart DMV Buyers Negotiate in Today\u2019s Real Estate Market',
    category: 'Buying',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/housekeys-AUTOx575.fit.jpg',
    href: '/blog',
  },
];