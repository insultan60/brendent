// All content for the Silver Spring area guide, sourced from the live
// bwmetroproperties.com/silver-spring page and mapped onto the Home design system.

export const silverSpringHero = {
  eyebrow: 'Silver Spring, MD — Area Guide',
  title: 'Welcome to Silver Spring',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide.jpg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaLabel: 'Silver Spring, MD',
  areaText:
    'A vibrant Montgomery County hub just north of DC, Silver Spring pairs a bustling downtown of theaters, restaurants and the AFI Silver with leafy, diverse neighborhoods.',
  stats: [
    { value: '$720K', label: 'Median Sale Price' },
    { value: '23', label: 'Avg Days on Market' },
    { value: '131', label: 'Active Listings' },
    { value: '43', label: 'Schools In The Area' },
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
  text: 'Check out the hottest new listings Silver Spring has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Silver Spring has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Silver Spring?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damjsbop3fe23ggcgibg',
  submitAddr: 'https://readdy.ai/api/form/damjsbop3fe23ggcgibg',
  areaName: 'Silver Spring',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg',
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
  { name: 'Stonegate Elementary School', phone: '240-740-7340', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Georgian Forest Elementary School', phone: '240-740-0720', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Eastern Middle School', phone: '240-740-6280', type: 'public', grades: '6-8', rating: 3, category: 'middle' },
  { name: 'House of Hope Maryland Day School', phone: '301-774-3804', type: 'private', grades: '10-10', rating: 0, category: 'high' },
  { name: 'St John the Baptist School', phone: '301-622-3076', type: 'private', grades: 'PK-8', rating: 0, category: 'elementary', website: 'https://www.sjbsilverspring.org/' },
  { name: 'Forcey Christian School', phone: '301-622-2281', type: 'private', grades: 'PK-8', rating: 0, category: 'elementary', website: 'https://www.forcey.org/pages/page.asp?page_id=814' },
  { name: 'Glenallan Elementary School', phone: '240-740-0760', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Thomas Edison High School of Technology', phone: '240-740-2000', type: 'public', grades: '9-12', rating: 0, category: 'high', website: 'https://www.montgomeryschoolsmd.org/schools/edison' },
  { name: 'Wheaton High School', phone: '301-321-3400', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'Argyle Middle School', phone: '240-740-6370', type: 'public', grades: '6-8', rating: 3, category: 'middle' },
  { name: 'Bel Pre Elementary School', phone: '301-287-8870', type: 'public', grades: 'PK-2', rating: 0, category: 'elementary', website: 'https://www.montgomeryschoolsmd.org/schools/belprees' },
  { name: 'Silver Spring International Middle School', phone: '240-740-2750', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'Cloverly Elementary School', phone: '240-740-4660', type: 'public', grades: 'KG-5', rating: 3, category: 'elementary' },
  { name: 'St Andrew Apostle School', phone: '301-649-3555', type: 'private', grades: 'PK-8', rating: 0, category: 'elementary', website: 'https://www.standrewapostle.org/' },
  { name: 'Julia Brown Montessori School', phone: '301-622-7808', type: 'private', grades: 'PK-3', rating: 0, category: 'preschool' },
  { name: 'Pathways School--Edgewood', phone: '301-649-0778', type: 'private', grades: '9-12', rating: 0, category: 'high' },
  { name: 'Sligo Middle School', phone: '301-287-8890', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'The Siena School', phone: '301-244-3602', type: 'private', grades: '4-12', rating: 0, category: 'high', website: 'https://www.thesienaschool.org/' },
  { name: 'Yeshiva of Greater Washington Girls Division', phone: '301-962-5111', type: 'private', grades: '7-12', rating: 0, category: 'high' },
  { name: 'Kehillat Ashreinu Montessori School', phone: '301-547-9942', type: 'private', grades: 'T1-6', rating: 0, category: 'elementary' },
  { name: 'Glen Haven Elementary School', phone: '301-649-8051', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Briggs Chaney Middle School', phone: '301-288-8300', type: 'public', grades: '6-8', rating: 3, category: 'middle' },
  { name: 'Dr. Charles R. Drew Elementary School', phone: '240-740-5670', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Mcps Transitions School', phone: '240-740-5900', type: 'public', grades: '12-12', rating: 0, category: 'high', website: 'https://www.montgomeryschoolsmd.org/' },
  { name: 'The Nora School', phone: '301-495-6672', type: 'private', grades: '9-12', rating: 0, category: 'high', website: 'https://www.nora-school.org/' },
  { name: 'Yeshiva of Greater Washington Boys Division', phone: '301-962-5111', type: 'private', grades: '7-12', rating: 0, category: 'high', website: 'https://www.yeshiva.edu/' },
  { name: 'Kemp Mill Elementary School', phone: '240-740-5970', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Jackson Road Elementary School', phone: '240-740-0800', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'A. Mario Loiederman Middle School', phone: '240-740-5830', type: 'public', grades: '6-8', rating: 3, category: 'middle' },
  { name: 'Jamon Montessori Day School', phone: '301-384-3131', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.jamonmontessori.com/' },
  { name: 'Springbrook High School', phone: '240-740-3800', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'The Gan Montessori', phone: '301-593-1117', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool' },
  { name: 'Takoma Park Middle School', phone: '240-740-5220', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'James Hubert Blake High School', phone: '240-740-1400', type: 'public', grades: '9-12', rating: 4, category: 'high' },
  { name: 'Cannon Road Elementary School', phone: '240-740-0520', type: 'public', grades: 'KG-5', rating: 2, category: 'elementary' },
  { name: 'White Oak Middle School', phone: '301-288-8200', type: 'public', grades: '6-8', rating: 2, category: 'middle' },
  { name: 'Westover Elementary School', phone: '240-740-5740', type: 'public', grades: 'KG-5', rating: 4, category: 'elementary' },
  { name: 'Arcola Elementary School', phone: '301-287-8585', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Forest Knolls Elementary School', phone: '240-740-1640', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Casa de Montessori', phone: '301-384-8404', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.casademontessori.com/' },
  { name: 'Highland Elementary School', phone: '240-740-1770', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Weller Road Elementary School', phone: '301-287-8601', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'John F. Kennedy High School', phone: '240-740-0100', type: 'public', grades: '9-12', rating: 3, category: 'high' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Silver Spring has to offer — from dining and drinks to shopping, coffee, fitness, garden living and coworking.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'The Society Restaurant & Lounge', detail: 'Upscale-casual American plates and cocktails in downtown Silver Spring' },
      { name: 'All Set Restaurant & Bar', detail: 'Neighborhood spot for New England seafood and comfort classics' },
      { name: 'El Sapo Cuban Social Club', detail: 'Lively Cuban kitchen for ropa vieja, empanadas and mojitos' },
      { name: 'Quarry House Tavern', detail: 'Beloved subterranean burger-and-beer institution on Georgia Avenue' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'Denizens Brewing Co.', detail: 'Silver Spring brewery and biergarten pouring flagship local ales' },
      { name: 'Quarry House Tavern', detail: 'Legendary dive bar with an award-winning burger and whiskey list' },
      { name: 'Silver Branch Brewing Company', detail: 'Rail-adjacent taproom with German-inspired and seasonal beers' },
      { name: 'McGinty\'s Public House', detail: 'Longtime Irish pub for drafts, live music and late nights' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Downtown Silver Spring', detail: 'Walkable district of shops, restaurants and nightlife' },
      { name: 'Ellsworth Place', detail: 'Multi-level retail and dining in the heart of downtown' },
      { name: 'Fenton Street Market', detail: 'Seasonal open-air market for makers, vintage and local goods' },
      { name: 'City Place Mall', detail: 'Everyday shops and services steps from the Metro' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Kefa Cafe', detail: 'Independent neighborhood coffeehouse with art-lined walls' },
      { name: 'Bump \'n Grind', detail: 'Coffee, vinyl records and community events under one roof' },
      { name: 'Vigilante Coffee', detail: 'Maryland roaster with a bright, plant-filled cafe' },
      { name: 'Zed\'s Cafe', detail: 'Comfortable local spot for espresso, crepes and conversation' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'Sligo Creek Trail', detail: 'Paved greenway ideal for running, walking and biking' },
      { name: 'Wheaton Regional Park', detail: 'Trails, gardens and open green space for outdoor workouts' },
      { name: 'Silver Spring Recreation & Aquatic Center', detail: 'Modern pool, gym and fitness studios downtown' },
      { name: 'Rock Creek Park', detail: 'Wooded trails and paths just south along the DC line' },
    ],
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: 'sprout',
    places: [
      { name: 'American Plant', detail: 'Expansive garden center for plants, trees and supplies' },
      { name: 'Meadows Farms Nurseries', detail: 'Regional grower of flowers, shrubs and seasonal color' },
      { name: 'Silver Spring Garden Club', detail: 'Local green thumbs sharing plots, tips and plant swaps' },
      { name: 'Montgomery County Master Gardeners', detail: 'Local experts for planting, pruning and landscaping advice' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase',
    places: [
      { name: 'Launch Workplaces Silver Spring', detail: 'Flexible coworking and private offices downtown' },
      { name: 'Silver Spring Innovation Center', detail: 'Business incubator and shared workspace for founders' },
      { name: 'Grid Workspace', detail: 'Design-forward coworking lounge and meeting rooms' },
      { name: 'Capital One Cafe', detail: 'Casual cafe and open workspace with free Wi-Fi' },
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