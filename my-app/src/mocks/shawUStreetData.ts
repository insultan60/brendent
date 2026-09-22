// All content for the Shaw / U Street Corridor area guide, sourced from the live
// bwmetroproperties.com/washington/shaw-u-street-corridor page and mapped onto the
// Home design system.

export const shawHero = {
  eyebrow: 'Shaw / U Street Corridor — Washington, DC',
  title: 'Welcome to Shaw / U Street Corridor',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  city: 'Washington, DC',
  image:
    'https://readdy.ai/api/search-image?query=Historic%20brick%20row%20houses%20along%20the%20U%20Street%20Corridor%20in%20Washington%20DC%20at%20golden%20hour%2C%20colorful%20painted%20doors%2C%20wrought%20iron%20railings%2C%20leafy%20street%20trees%20and%20a%20lively%20storefront%20sidewalk%2C%20warm%20cinematic%20light%2C%20elegant%20editorial%20city%20photography%2C%20rich%20contrast%20and%20harmonious%20composition&width=1920&height=1080&seq=shaw-u-street-hero-01&orientation=landscape',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaText:
    'A storied DC corridor steeped in Black history and culture, Shaw / U Street pairs landmark theaters and live-music venues with acclaimed dining, boutique shopping and classic rowhouse blocks.',
  stats: [
    { value: '$685K', label: 'Median Sale Price' },
    { value: '21', label: 'Avg Days on Market' },
    { value: '76', label: 'Active Listings' },
    { value: '7', label: 'Schools In The Area' },
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
  text: 'Check out the hottest new listings Shaw / U Street Corridor has to offer!',
  viewAllHref: '/properties',
};

export const saleListings = [
  {
    id: 'shaw-sale-1',
    price: '$2,699,000',
    street: '1701 6th Street NW',
    city: 'Washington, DC',
    beds: '',
    baths: '',
    sqft: '1,784',
    tag: 'New',
    image:
      'https://readdy.ai/api/search-image?query=Historic%20red%20brick%20rowhouse%20exterior%20in%20Shaw%20Washington%20DC%2C%20tall%20bay%20windows%20with%20black%20trim%2C%20restored%20cornice%20detail%2C%20tidy%20sidewalk%20and%20street%20trees%2C%20warm%20late%20afternoon%20light%2C%20editorial%20real%20estate%20photography%2C%20handsome%20and%20urban&width=800&height=600&seq=shaw-sale-01&orientation=landscape',
  },
  {
    id: 'shaw-sale-2',
    price: '$620,000',
    street: '435 R Street NW #101',
    city: 'Washington, DC',
    beds: '2',
    baths: '2',
    sqft: '820',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Contemporary%20condominium%20interior%20in%20Shaw%20Washington%20DC%2C%20bright%20open%20living%20and%20dining%20space%20with%20warm%20neutral%20finishes%20and%20light%20wood%20floors%2C%20large%20windows%20with%20soft%20city%20daylight%2C%20minimal%20styling%2C%20editorial%20interior%20photography%2C%20refined%20and%20airy&width=800&height=600&seq=shaw-sale-02&orientation=landscape',
  },
  {
    id: 'shaw-sale-3',
    price: '$2,699,900',
    street: '1703 6th Street NW',
    city: 'Washington, DC',
    beds: '',
    baths: '',
    sqft: '2,156',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Elegant%20historic%20brick%20townhome%20exterior%20in%20Shaw%20Washington%20DC%2C%20symmetrical%20facade%20with%20tall%20windows%2C%20wrought%20iron%20stair%20rail%20and%20a%20colorful%20front%20door%2C%20leafy%20sidewalk%2C%20warm%20golden%20light%2C%20editorial%20real%20estate%20photography%2C%20stately%20and%20inviting&width=800&height=600&seq=shaw-sale-03&orientation=landscape',
  },
  {
    id: 'shaw-sale-4',
    price: '$1,650,000',
    street: '607 Q Street NW',
    city: 'Washington, DC',
    beds: '4',
    baths: '3',
    sqft: '3,054',
    tag: 'Open House',
    image:
      'https://readdy.ai/api/search-image?query=Spacious%20Victorian%20rowhouse%20exterior%20in%20Shaw%20Washington%20DC%2C%20ornate%20brick%20detail%20and%20bay%20windows%2C%20tidy%20front%20garden%20with%20boxwood%2C%20tree%20lined%20street%2C%20soft%20daylight%2C%20editorial%20real%20estate%20photography%2C%20gracious%20and%20established&width=800&height=600&seq=shaw-sale-04&orientation=landscape',
  },
  {
    id: 'shaw-sale-5',
    price: '$470,000',
    street: '922 N Street NW #2',
    city: 'Washington, DC',
    beds: '1',
    baths: '1',
    sqft: '750',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Bright%20one%20bedroom%20condominium%20interior%20in%20Shaw%20Washington%20DC%2C%20compact%20open%20living%20space%20with%20warm%20neutral%20finishes%20and%20light%20floors%2C%20large%20window%20with%20soft%20daylight%2C%20minimal%20decor%2C%20editorial%20interior%20photography%2C%20clean%20and%20comfortable&width=800&height=600&seq=shaw-sale-05&orientation=landscape',
  },
  {
    id: 'shaw-sale-6',
    price: '$524,999',
    street: '2125 14th Street NW #629',
    city: 'Washington, DC',
    beds: '1',
    baths: '1',
    sqft: '767',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Modern%20high%20rise%20condominium%20interior%20near%2014th%20Street%20Washington%20DC%2C%20open%20living%20area%20with%20warm%20neutral%20finishes%2C%20wide%20window%20with%20soft%20city%20views%2C%20minimal%20furnishings%2C%20editorial%20interior%20photography%2C%20sleek%20and%20airy&width=800&height=600&seq=shaw-sale-06&orientation=landscape',
  },
  {
    id: 'shaw-sale-7',
    price: '$999,000',
    street: '1817 8th Street NW',
    city: 'Washington, DC',
    beds: '3',
    baths: '3',
    sqft: '1,600',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Renovated%20brick%20rowhouse%20exterior%20in%20Shaw%20Washington%20DC%2C%20sleek%20black%20trim%20windows%20and%20a%20modern%20front%20door%2C%20small%20tidy%20courtyard%2C%20soft%20daylight%2C%20editorial%20real%20estate%20photography%2C%20polished%20contemporary%20urban&width=800&height=600&seq=shaw-sale-07&orientation=landscape',
  },
  {
    id: 'shaw-sale-8',
    price: '$825,000',
    street: '429 R Street NW',
    city: 'Washington, DC',
    beds: '2',
    baths: '2',
    sqft: '1,412',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Charming%20historic%20rowhouse%20exterior%20in%20Shaw%20Washington%20DC%2C%20warm%20brick%20facade%20with%20white%20trim%20and%20a%20bright%20front%20door%2C%20flower%20boxes%20and%20street%20trees%2C%20warm%20afternoon%20light%2C%20editorial%20real%20estate%20photography%2C%20welcoming%20urban&width=800&height=600&seq=shaw-sale-08&orientation=landscape',
  },
  {
    id: 'shaw-sale-9',
    price: '$785,000',
    street: '440 R Street NW #101',
    city: 'Washington, DC',
    beds: '2',
    baths: '2',
    sqft: '1,238',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Refined%20condominium%20interior%20in%20Shaw%20Washington%20DC%2C%20open%20living%20and%20dining%20space%20with%20warm%20wood%20floors%20and%20neutral%20finishes%2C%20tall%20windows%20with%20soft%20daylight%2C%20minimal%20styling%2C%20editorial%20interior%20photography%2C%20elegant%20and%20calm&width=800&height=600&seq=shaw-sale-09&orientation=landscape',
  },
  {
    id: 'shaw-sale-10',
    price: '$999,000',
    street: '2016 10th Street NW',
    city: 'Washington, DC',
    beds: '3',
    baths: '3',
    sqft: '2,000',
    tag: 'New',
    image:
      'https://readdy.ai/api/search-image?query=Beautifully%20restored%20brick%20townhome%20exterior%20in%20Shaw%20Washington%20DC%2C%20tall%20windows%20with%20black%20trim%2C%20decorative%20cornice%20and%20a%20stone%20stoop%2C%20leafy%20sidewalk%2C%20warm%20golden%20light%2C%20editorial%20real%20estate%20photography%2C%20classic%20and%20upscale&width=800&height=600&seq=shaw-sale-10&orientation=landscape',
  },
  {
    id: 'shaw-sale-11',
    price: '$789,900',
    street: '1440 Church Street NW #103',
    city: 'Washington, DC',
    beds: '2',
    baths: '2',
    sqft: '1,034',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Contemporary%20condominium%20interior%20on%20Church%20Street%20Washington%20DC%2C%20open%20living%20space%20with%20warm%20neutral%20finishes%20and%20wide%20plank%20floors%2C%20large%20window%20with%20soft%20city%20light%2C%20minimal%20furnishing%2C%20editorial%20interior%20photography%2C%20modern%20and%20inviting&width=800&height=600&seq=shaw-sale-11&orientation=landscape',
  },
  {
    id: 'shaw-sale-12',
    price: '$699,000',
    street: '1421 T Street NW #11',
    city: 'Washington, DC',
    beds: '2',
    baths: '2',
    sqft: '952',
    tag: '',
    image:
      'https://readdy.ai/api/search-image?query=Bright%20two%20bedroom%20condominium%20interior%20near%20T%20Street%20Washington%20DC%2C%20efficient%20open%20layout%20with%20warm%20neutral%20finishes%2C%20tall%20window%20with%20soft%20daylight%2C%20minimal%20decor%2C%20editorial%20interior%20photography%2C%20tidy%20and%20comfortable&width=800&height=600&seq=shaw-sale-12&orientation=landscape',
  },
];

// "Discover Shaw / U Street Corridor" editorial intro band (source: custom block).
export const discoverCopy = {
  eyebrow: 'Discover Shaw / U Street Corridor',
  title: 'A neighborhood rooted in history, culture and everyday rhythm',
  image:
    'https://readdy.ai/api/search-image?query=Leafy%20residential%20block%20in%20Shaw%20Washington%20DC%20at%20golden%20hour%2C%20historic%20brick%20rowhouses%20with%20colorful%20painted%20doors%20and%20iron%20railings%2C%20quiet%20sidewalk%20with%20street%20trees%2C%20warm%20inviting%20light%2C%20elegant%20editorial%20neighborhood%20photography%2C%20rich%20and%20harmonious&width=900&height=1100&seq=shaw-discover-01&orientation=portrait',
  paragraphs: [
    'Shaw and the U Street Corridor sit at the heart of Washington, DC — a walkable district where landmark theaters and live-music venues share the block with acclaimed restaurants, indie boutiques and long-standing neighborhood institutions. The tree-lined residential streets carry some of the city’s finest historic rowhouses.',
    'Today the area pairs its deep cultural heritage with everyday convenience: two Metro lines, farmers markets, parks and a steady flow of new shops and cafés. Whether you are drawn by the architecture, the nightlife or the close-in location, Shaw / U Street offers a DC lifestyle that is equal parts historic and contemporary.',
  ],
};

export const marketReport = {
  title: 'Want the full market report for Shaw / U Street Corridor?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damk02lvmcl80jn2930g',
  submitAddr: 'https://readdy.ai/api/form/damk02lvmcl80jn2930g',
  areaName: 'Shaw / U Street Corridor',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage:
    'https://readdy.ai/api/search-image?query=Historic%20brick%20rowhouses%20along%20the%20U%20Street%20Corridor%20in%20Washington%20DC%20at%20dusk%2C%20warm%20glowing%20street%20lamps%20and%20storefront%20lights%2C%20tree%20lined%20avenue%2C%20moody%20cinematic%20light%2C%20elegant%20editorial%20city%20photography%2C%20rich%20contrast&width=900&height=1200&seq=shaw-market-report-01&orientation=portrait',
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
  {
    name: 'Benjamin Banneker High School',
    phone: '202-671-6320',
    type: 'public',
    grades: '9-12',
    rating: 5,
    category: 'high',
    categories: ['high'],
  },
  {
    name: 'Kipp DC - Will Academy Public Charter School',
    phone: '202-328-9455',
    type: 'public',
    grades: '5-8',
    rating: 3,
    category: 'middle',
    categories: ['middle'],
  },
  {
    name: 'Seaton Elementary School',
    phone: '202-673-7215',
    type: 'public',
    grades: 'EE-5',
    rating: 4,
    category: 'elementary',
    categories: ['elementary', 'preschool'],
  },
  {
    name: 'Center City Public Charter School - Shaw',
    phone: '202-234-1093',
    type: 'public',
    grades: 'PK-8',
    rating: 3,
    category: 'elementary',
    categories: ['elementary', 'middle', 'preschool'],
  },
  {
    name: 'Kipp DC - Lead Academy Public Charter School',
    phone: '202-469-3300',
    type: 'public',
    grades: '1-4',
    rating: 4,
    category: 'elementary',
    categories: ['elementary'],
  },
  {
    name: 'Kipp DC - Grow Academy Public Charter School',
    phone: '202-986-4769',
    type: 'public',
    grades: 'PK-KG',
    rating: 0,
    category: 'preschool',
    categories: ['preschool', 'elementary'],
    website: 'https://www.kippdc.org/',
  },
  {
    name: 'Cleveland Elementary School',
    phone: '202-939-4380',
    type: 'public',
    grades: 'EE-5',
    rating: 1,
    category: 'elementary',
    categories: ['elementary', 'preschool'],
  },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Shaw / U Street Corridor has to offer — from dining and drinks to shopping, coffee, fitness, grooming and pet care.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'Unconventional Diner', detail: 'Modern comfort food and cocktails beside the Convention Center' },
      { name: 'Gypsy Kitchen DC', detail: 'Spanish and Mediterranean small plates on 14th Street' },
      { name: 'Old Ebbitt Grill', detail: 'DC’s historic saloon for oysters, steaks and classic American fare' },
      { name: 'Le Diplomate', detail: 'Beloved Parisian-style bistro on 14th Street' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'The Brixton', detail: 'Two-level U Street spot for pints and late-night music' },
      { name: 'Marvin', detail: 'Soul-food kitchen and rooftop bar inspired by Marvin Gaye' },
      { name: 'Nellie’s Sports Bar', detail: 'Longtime neighborhood sports bar with a beloved rooftop' },
      { name: 'Copycat Co.', detail: 'Intimate cocktail den for craft drinks and dumplings' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Union Market', detail: 'Curated food hall and makers market just east of the corridor' },
      { name: 'Miss Pixie’s Furnishings', detail: 'Vintage and eclectic home goods on 14th Street' },
      { name: 'GoodWood', detail: 'Design-forward vintage furniture and accessories' },
      { name: 'Salt & Sundry', detail: 'Gifts, pantry staples and homeware from local makers' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Compass Coffee', detail: 'DC-born roaster with a flagship above the U Street corridor' },
      { name: 'The Coffee Bar', detail: 'Independent neighborhood café for espresso and pastries' },
      { name: 'La Colombe Coffee', detail: 'Bright, modern café for draft lattes and cold brew' },
      { name: 'Tryst', detail: 'Adams Morgan coffeehouse for lingering over a cup' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'Meridian Hill Park', detail: 'Grand terraced park ideal for running and open-air workouts' },
      { name: 'Banneker Recreation Center', detail: 'Community gym, courts and fields in the heart of Shaw' },
      { name: 'VIDA Fitness U Street', detail: 'Full-service gym with classes and rooftop pool' },
      { name: 'Balance Gym', detail: 'Locally loved strength and conditioning studio' },
    ],
  },
  {
    id: 'groom',
    label: 'Groom',
    icon: 'scissors',
    places: [
      { name: 'Barber Shop on U', detail: 'Classic cuts and hot-towel shaves on the corridor' },
      { name: 'Smoothtown Barbershop', detail: 'Neighborhood barber known for clean fades' },
      { name: 'Be Polished Nail Bar', detail: 'Modern nail and beauty studio near 14th Street' },
      { name: 'Salon Revive', detail: 'Full-service hair and styling studio in Shaw' },
    ],
  },
  {
    id: 'wag',
    label: 'Wag',
    icon: 'paw-print',
    places: [
      { name: 'Shaw Dog Park', detail: 'Popular fenced run for neighborhood pups' },
      { name: 'District Dogs', detail: 'Daycare, boarding and grooming for local dogs' },
      { name: 'City Paws Animal Hospital', detail: 'Full-service veterinary care steps from the corridor' },
      { name: 'Metro Mutts', detail: 'Boutique pet supply and self-wash for dog owners' },
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
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/dmv-homebuying-hero-500x300.png',
    href: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
  },
  {
    title: 'The VA Loan, Explained: A Smart Guide for DMV Buyers and Sellers',
    category: 'Buying, Selling',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/va-loan-blog-header-1-500x300.png',
    href: '/blog',
  },
  {
    title: 'How Smart DMV Buyers Negotiate in Today\u2019s Rebalancing Market',
    category: 'Buying',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/checklist-1-500x300.jpg',
    href: '/blog',
  },
];