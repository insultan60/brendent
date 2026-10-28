// All content for the Bethesda area guide, sourced from the live
// bwmetroproperties.com/bethesda page and mapped onto the Home design system.

export const bethesdaHero = {
  eyebrow: 'Bethesda, MD — Area Guide',
  title: 'Welcome to Bethesda',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide.jpg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaLabel: 'Bethesda, MD',
  areaText:
    'An upscale Montgomery County hub just outside DC, Bethesda blends a walkable downtown of shops and restaurants with leafy, tree-lined neighborhoods.',
  stats: [
    { value: '$1.34M', label: 'Median Sale Price' },
    { value: '24', label: 'Avg Days on Market' },
    { value: '98', label: 'Active Listings' },
    { value: '33', label: 'Schools In The Area' },
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
  text: 'Check out the hottest new listings Bethesda has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Bethesda has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Bethesda?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damjhh5vmcl80jn292t0',
  submitAddr: 'https://readdy.ai/api/form/damjhh5vmcl80jn292t0',
  areaName: 'Bethesda',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg',
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
  { name: 'The Bethesda Montessori School', phone: '301-986-1260', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.bethesdamontessori.com/' },
  { name: 'Holton-Arms School', phone: '301-365-6007', type: 'private', grades: '3-12', rating: 0, category: 'high', website: 'https://www.holton-arms.edu/' },
  { name: 'St Bartholomews School', phone: '301-229-5586', type: 'private', grades: 'KG-8', rating: 0, category: 'middle' },
  { name: 'Westland Middle School', phone: '240-740-5850', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Ashburton Elementary School', phone: '240-740-1300', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Washington Waldorf School', phone: '201-229-6107', type: 'private', grades: 'PK-12', rating: 0, category: 'preschool', website: 'https://www.washingtonwaldorf.org/' },
  { name: 'Wood Acres Elementary School', phone: '240-740-1120', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Bethesda - Chevy Chase High School', phone: '240-740-0400', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Wyngate Elementary School', phone: '240-740-1080', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Apple Montessori School', phone: '301-320-8832', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.applems.com/' },
  { name: 'Norwood School', phone: '301-365-2595', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.norwoodschool.org/' },
  { name: 'St Jane de Chantal School', phone: '301-530-1221', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.dechantal.org/' },
  { name: 'Thomas W. Pyle Middle School', phone: '240-740-3500', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Burning Tree Elementary School', phone: '240-740-1750', type: 'public', grades: 'KG-5', rating: 4, category: 'elementary' },
  { name: 'Bannockburn Elementary School', phone: '240-740-1270', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Bethesda Elementary School', phone: '240-204-5300', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'The Woods Academy', phone: '301-365-3080', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.woodsacademy.org/' },
  { name: 'Landon School', phone: '301-320-1012', type: 'private', grades: '3-12', rating: 0, category: 'high', website: 'https://www.landon.net/' },
  { name: 'Bradley Hills Elementary School', phone: '240-204-5210', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'The Primary Day School', phone: '301-365-4355', type: 'private', grades: 'PK-2', rating: 0, category: 'preschool', website: 'https://www.theprimarydayschool.org/' },
  { name: 'Carderock Springs Elementary School', phone: '240-740-0540', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Seven Locks Elementary School', phone: '240-740-0940', type: 'public', grades: 'KG-5', rating: 5, category: 'elementary' },
  { name: 'Walter Johnson High School', phone: '240-740-6900', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Bethesda Country Day School', phone: '301-530-6999', type: 'private', grades: 'PK-TKG', rating: 0, category: 'preschool' },
  { name: 'North Bethesda Middle School', phone: '240-740-2100', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Mater Dei School', phone: '301-365-2700', type: 'private', grades: '1-8', rating: 0, category: 'elementary', website: 'https://www.materdeischool.net/' },
  { name: 'Fernwood Montessori School', phone: '301-469-4888', type: 'private', grades: 'PK-4', rating: 0, category: 'preschool' },
  { name: 'Our Lady of Lourdes School', phone: '301-654-5376', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool' },
  { name: 'Walt Whitman High School', phone: '240-740-4800', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Washington Episcopal School', phone: '301-652-7878', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.w-e-s.org/' },
  { name: 'Rochambeau-the French International School', phone: '301-530-8260', type: 'private', grades: 'PK-12', rating: 0, category: 'preschool' },
  { name: 'Little Flower School', phone: '301-320-3273', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://littleflowerschool.org/' },
  { name: 'Stone Ridge School of the Sacred Heart', phone: '301-657-4322', type: 'private', grades: 'PK-12', rating: 0, category: 'preschool', website: 'https://www.stoneridgeschool.org/page.cfm' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Bethesda has to offer — from dining and drinks to shopping, coffee, fitness, garden living and coworking.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'The Food Market', detail: 'Industrial-chic Bethesda Row spot for inventive American plates' },
      { name: 'Bethesda Bagels', detail: 'Local favorite for hand-rolled bagels and deli classics' },
      { name: 'Mon Ami Gabi', detail: 'Classic French bistro with steak frites and a warm dining room' },
      { name: 'Jaleo', detail: 'José Andrés\' Spanish tapas and paella on Woodmont Avenue' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'Uncork\'d', detail: 'Neighborhood wine bar and shop with tastings and small plates' },
      { name: 'Handsome Beer Company', detail: 'Craft brewery and taproom pouring small-batch local beer' },
      { name: 'Barrel & Crow', detail: 'Bourbon-forward bar with creative cocktails and shareables' },
      { name: 'Tommy Joe\'s', detail: 'Longtime Bethesda pub for drafts, sports and late nights' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Bethesda Row', detail: 'Walkable district of boutiques, restaurants and galleries' },
      { name: 'Westfield Montgomery', detail: 'Regional mall with department stores and dining' },
      { name: 'The Shops at Wisconsin Place', detail: 'Open-air retail and dining near Friendship Heights' },
      { name: 'Downtown Bethesda', detail: 'Independent shops and services along the main streets' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Ceremony Coffee Roasters', detail: 'Famed local roaster with a bright Bethesda cafe' },
      { name: 'Java Nation', detail: 'Cozy coffeehouse for espresso, pastries and light bites' },
      { name: 'Kaldi\'s Coffeehouse', detail: 'Comfortable neighborhood spot for coffee and conversation' },
      { name: 'Quartermaine Coffee Roasters', detail: 'Local micro-roaster serving fresh small-batch coffee' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'Capital Crescent Trail', detail: 'Paved rail-trail ideal for running, walking and biking' },
      { name: 'Bethesda-Chevy Chase YMCA', detail: 'Full-service fitness, pool and community programs' },
      { name: 'CorePower Yoga Bethesda', detail: 'Heated yoga and strength classes for every level' },
      { name: 'Little Falls Stream Valley Park', detail: 'Green trails and open space for outdoor workouts' },
    ],
  },
  {
    id: 'grow',
    label: 'Grow',
    icon: 'sprout',
    places: [
      { name: 'American Plant', detail: 'Expansive garden center for plants, trees and supplies' },
      { name: 'Johnson\'s Florist & Garden Centers', detail: 'Longtime local grower of flowers and seasonal plants' },
      { name: 'Bethesda Community Garden', detail: 'Shared plots and green thumbs right in the neighborhood' },
      { name: 'Montgomery County Master Gardeners', detail: 'Local experts for planting, pruning and landscaping advice' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase',
    places: [
      { name: 'Sidewell by Bandoola', detail: 'Design-forward coworking and private offices in Bethesda' },
      { name: 'The Vault Bethesda', detail: 'Modern coworking lounge and meeting space downtown' },
      { name: 'Bethesda Green', detail: 'Sustainability hub and shared workspace for local founders' },
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