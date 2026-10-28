// All content for the Alexandria area guide, sourced from the live
// bwmetroproperties.com/alexandria page and mapped onto the Home design system.

export const alexandriaHero = {
  eyebrow: 'Alexandria, VA — Area Guide',
  title: 'Welcome to Alexandria',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide.jpeg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaLabel: 'Alexandria, VA',
  areaText:
    'On the west bank of the Potomac, Alexandria blends a historic Old Town waterfront with leafy, walkable residential neighborhoods.',
  stats: [
    { value: '$799K', label: 'Median Sale Price' },
    { value: '23', label: 'Avg Days on Market' },
    { value: '146', label: 'Active Listings' },
    { value: '54', label: 'Schools In The Area' },
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
  text: 'Check out the hottest new listings Alexandria has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Alexandria has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Alexandria?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damhttgp3fe23ggcghl0',
  submitAddr: 'https://readdy.ai/api/form/damhttgp3fe23ggcghl0',
  areaName: 'Alexandria',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg',
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
  { name: 'St Stephens & St Agnes School - Upper School', phone: '703-212-2922', type: 'private', grades: 'PK-12', rating: 0, category: 'high' },
  { name: 'Alternative Paths Training School - Alexandria', phone: '703-766-8708', type: 'private', grades: '1-12', rating: 0, category: 'high' },
  { name: 'Bucknell Elementary School', phone: '703-660-2900', type: 'public', grades: 'PK-6', rating: 3, category: 'elementary' },
  { name: 'Mount Eagle Elementary School', phone: '703-721-2100', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Cameron Elementary School', phone: '703-329-2100', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Card Academy Alexandria', phone: '571-290-0143', type: 'private', grades: 'KG-10', rating: 0, category: 'elementary' },
  { name: 'Hayfield Secondary School', phone: '703-924-7400', type: 'public', grades: '7-12', rating: 4, category: 'high' },
  { name: 'Hybla Valley Elementary School', phone: '703-718-7000', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Bishop Ireton High School', phone: '703-751-7606', type: 'private', grades: '9-12', rating: 0, category: 'high', website: 'https://www.bishopireton.org/' },
  { name: 'Glasgow Middle School', phone: '703-813-8700', type: 'public', grades: '6-8', rating: 2, category: 'middle' },
  { name: 'Douglas MacArthur Elementary School', phone: '703-461-4190', type: 'public', grades: 'KG-5', rating: 4, category: 'elementary' },
  { name: 'Commonwealth Academy', phone: '703-548-6912', type: 'private', grades: '3-12', rating: 0, category: 'high', website: 'https://www.commonwealthacademy.org/' },
  { name: 'Browne Academy', phone: '571-451-1004', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.browneacademy.org/' },
  { name: 'James K. Polk Elementary School', phone: '703-461-4180', type: 'public', grades: 'KG-5', rating: 2, category: 'elementary' },
  { name: 'Clermont Elementary School', phone: '703-921-2400', type: 'public', grades: 'KG-6', rating: 5, category: 'elementary' },
  { name: "Governor's Health Science Academy at T.C. Williams High School", phone: '703-619-8020', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.acps.k12.va.us/' },
  { name: 'Patrick Henry K-8 School', phone: '703-461-4170', type: 'public', grades: 'KG-5', rating: 3, category: 'elementary' },
  { name: 'St Louis Catholic School', phone: '703-768-7732', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.stlouisschool.org/' },
  { name: 'Whitman Middle School', phone: '703-660-2400', type: 'public', grades: '7-8', rating: 3, category: 'middle' },
  { name: 'River Farm Cooperative School', phone: '817-320-7517', type: 'private', grades: 'KG-6', rating: 0, category: 'elementary' },
  { name: 'Holmes Middle School', phone: '703-658-5900', type: 'public', grades: '6-8', rating: 2, category: 'middle' },
  { name: 'West Potomac High School', phone: '703-718-2500', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'Alternative Paths Training School', phone: '703-348-5361', type: 'private', grades: '1-12', rating: 0, category: 'high' },
  { name: 'Montessori School of Alexandria', phone: '703-960-3498', type: 'private', grades: 'PK-3', rating: 0, category: 'preschool', website: 'https://www.montschoolalex.com/' },
  { name: 'Edison High School', phone: '703-924-8000', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'Francis C. Hammond Middle School', phone: '703-461-4100', type: 'public', grades: '6-8', rating: 1, category: 'middle' },
  { name: 'Bren Mar Park Elementary School', phone: '703-914-7200', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Mount Vernon Woods Elementary School', phone: '703-619-2800', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Little Acorn Patch at Kingstowne', phone: '703-822-0803', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool' },
  { name: 'The Living Water School', phone: '301-971-2619', type: 'private', grades: '1-12', rating: 0, category: 'high' },
  { name: 'Samuel W. Tucker Elementary School', phone: '703-933-6300', type: 'public', grades: 'KG-5', rating: 3, category: 'elementary' },
  { name: 'Episcopal High School', phone: '703-933-3000', type: 'private', grades: '9-12', rating: 0, category: 'high', website: 'https://www.episcopalhighschool.org/' },
  { name: 'Lane Elementary School', phone: '703-924-7700', type: 'public', grades: 'KG-6', rating: 4, category: 'elementary' },
  { name: 'Washington International Academy', phone: '703-941-6977', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool' },
  { name: 'Sandburg Middle School', phone: '703-799-6100', type: 'public', grades: '7-8', rating: 3, category: 'middle' },
  { name: 'West Potomac High School Academy', phone: '703-718-2500', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.fcps.edu/' },
  { name: 'Edison High School Academy', phone: '703-924-8000', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.fcps.edu/' },
  { name: 'Calvary Road Christian School', phone: '703-970-8004', type: 'private', grades: 'PK-6', rating: 0, category: 'preschool', website: 'https://www.crcs.org/' },
  { name: 'Bryant High School', phone: '703-660-2001', type: 'public', grades: '9-12', rating: 1, category: 'high' },
  { name: 'Groveton Elementary School', phone: '703-718-8000', type: 'public', grades: 'PK-6', rating: 2, category: 'elementary' },
  { name: 'Bush Hill Elementary School', phone: '703-924-5600', type: 'public', grades: 'PK-6', rating: 5, category: 'elementary' },
  { name: 'George Washington Middle School', phone: '703-706-4500', type: 'public', grades: '6-8', rating: 3, category: 'middle', website: 'https://www.acps.k12.va.us/' },
  { name: 'Mount Vernon High School', phone: '703-619-3100', type: 'public', grades: '9-12', rating: 2, category: 'high' },
  { name: 'The Howard Gardner School', phone: '703-822-9300', type: 'private', grades: '7-12', rating: 0, category: 'high' },
  { name: 'Twain Middle School', phone: '703-313-3700', type: 'public', grades: '7-8', rating: 4, category: 'middle' },
  { name: 'Alexandria City High School', phone: '703-824-6800', type: 'public', grades: '9-12', rating: 2, category: 'high' },
  { name: 'Hayfield Elementary School', phone: '703-924-4500', type: 'public', grades: 'KG-6', rating: 5, category: 'elementary' },
  { name: 'Rose Hill Elementary School', phone: '703-313-4200', type: 'public', grades: 'PK-6', rating: 4, category: 'elementary' },
  { name: 'Fusion Academy Alexandria', phone: '703-535-3130', type: 'private', grades: '6-12', rating: 0, category: 'high' },
  { name: 'Thomas Jefferson High for Science and Technology', phone: '703-750-8300', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Franconia Elementary School', phone: '703-822-2200', type: 'public', grades: 'KG-6', rating: 4, category: 'elementary' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Alexandria has to offer — from dining and drinks to shopping, coffee, fitness and coworking.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'Virtue Feed & Grain', detail: 'Historic warehouse setting for modern American plates on the Old Town waterfront' },
      { name: 'Landini Brothers', detail: 'Longtime Old Town favorite for classic Italian dining' },
      { name: 'The Wharf', detail: 'Waterfront seafood and raw bar with Potomac views' },
      { name: 'Del Ray Pizzeria', detail: 'Neighborhood favorite for craft pies and local beer in Del Ray' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'The Birchmere', detail: 'Legendary live-music hall and supper club on Mount Vernon Avenue' },
      { name: 'Bilbo Baggins', detail: 'Cozy wine bar and restaurant in the heart of Old Town' },
      { name: 'Murphy\u2019s Grand Irish Pub', detail: 'Beloved Old Town pub with live music most nights' },
      { name: 'Hops N Shine', detail: 'Craft beer and cocktails in a relaxed Del Ray setting' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'King Street', detail: 'Boutiques, galleries and shops along Old Town\u2019s main street' },
      { name: 'Torpedo Factory Art Center', detail: 'Working artists\u2019 studios and galleries on the waterfront' },
      { name: 'Del Ray', detail: 'Walkable neighborhood shopping and dining along Mount Vernon Avenue' },
      { name: 'Potomac Yard', detail: 'Modern retail and dining near the new Virginia Tech campus' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Misha\u2019s Coffee', detail: 'Local roaster with a cozy Old Town coffee bar' },
      { name: 'For Five Coffee Roasters', detail: 'Modern coffee bar and roastery near the waterfront' },
      { name: 'Grape + Bean', detail: 'Coffee by day and wine by night on King Street' },
      { name: 'St. Elmo\u2019s Coffee Pub', detail: 'Neighborhood coffee house and pub in Del Ray' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'Mount Vernon Trail', detail: '18 miles of riverside walking and biking paths along the Potomac' },
      { name: 'Old Town Alexandria', detail: 'Walkable historic streets ideal for running and strolling' },
      { name: 'Alexandria YMCA', detail: 'Full-service fitness and recreation in Old Town' },
      { name: 'Jones Point Park', detail: 'Riverfront park with trails, fields and a historic lighthouse' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase',
    places: [
      { name: 'WeWork Old Town', detail: 'Flexible offices and coworking in the heart of Old Town' },
      { name: 'Industrious Alexandria', detail: 'Premium coworking with private suites near King Street' },
      { name: 'Carr Workplaces Old Town', detail: 'Private offices and meeting rooms in Alexandria' },
      { name: 'The Garden Alexandria', detail: 'Coworking and event space near the waterfront' },
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