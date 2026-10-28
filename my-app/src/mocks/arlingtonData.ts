// All content for the Arlington area guide, sourced from the live
// bwmetroproperties.com/arlington page and mapped onto the Home design system.

export const arlingtonHero = {
  eyebrow: 'Arlington, VA — Area Guide',
  title: 'Welcome to Arlington',
  text: 'In this guide we will explore the local market including listings, schools, businesses, and more.',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide.jpeg',
  primaryCta: { label: 'Search For Listings', href: '/properties' },
  secondaryCta: { label: 'Get the Market Report', href: '#market-report' },
  areaLabel: 'Arlington, VA',
  areaText:
    'Just across the Potomac from the District, Arlington pairs urban village centers with quiet, tree-lined residential streets.',
  stats: [
    { value: '$1.02M', label: 'Median Sale Price' },
    { value: '19', label: 'Avg Days on Market' },
    { value: '112', label: 'Active Listings' },
    { value: '41', label: 'Schools In The Area' },
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
  text: 'Check out the hottest new listings Arlington has to offer!',
  viewAllHref: '/properties',
};

export const rentalListingsLead = {
  eyebrow: 'Hot New Rentals',
  titleLead: 'Hot New',
  titleAccent: 'Rentals',
  text: 'Check out the hottest new listings Arlington has to offer!',
  viewAllHref: '/rentals',
};

export const marketReport = {
  title: 'Want the full market report for Arlington?',
  text: "We want to ensure that you have all the information needed to make the best decisions when it comes to your home goals. When you enter your info below you will get instant access to the area's latest market report, complete with sales and demographic trends.",
  formId: 'damhpkgp3fe23ggcghjg',
  submitAddr: 'https://readdy.ai/api/form/damhpkgp3fe23ggcghjg',
  areaName: 'Arlington',
  coverLabel: 'Market Report',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-02.png',
  coverImage:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg',
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
  { name: 'Cardinal Elementary School', phone: '703-228-5280', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Claremont Immersion', phone: '703-228-2500', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Our Savior Lutheran School', phone: '703-892-4846', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.osva.org/' },
  { name: 'Washington - Liberty High School', phone: '703-228-6200', type: 'public', grades: '9-12', rating: 4, category: 'high' },
  { name: 'Arlington Montessori House', phone: '703-524-2511', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool', website: 'https://www.arlingtonmontessori.com/' },
  { name: 'Carlin Springs Elementary School', phone: '703-228-6645', type: 'public', grades: 'PK-5', rating: 1, category: 'elementary' },
  { name: 'Randolph Elementary School', phone: '703-228-5830', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Veritas Collegiate Academy', phone: '866-564-4233', type: 'private', grades: 'KG-12', rating: 0, category: 'high' },
  { name: 'Long Branch Elementary School', phone: '703-228-4220', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Williamsburg Middle School', phone: '703-228-5450', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'New Directions Alternative High School Program', phone: '703-228-2117', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.apsva.us/' },
  { name: 'Langston High Continuation Program', phone: '703-228-5295', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.apsva.us/' },
  { name: 'Ashlawn Elementary School', phone: '703-228-5270', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Yorktown High School', phone: '703-228-5400', type: 'public', grades: '9-12', rating: 5, category: 'high' },
  { name: 'Escuela Key Elementary School', phone: '703-228-4210', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Glebe Elementary School', phone: '703-228-6280', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Wakefield High School', phone: '703-228-6700', type: 'public', grades: '9-12', rating: 3, category: 'high' },
  { name: 'St Ann Catholic School', phone: '703-525-7599', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.stann.org/' },
  { name: 'Metta Montessori School', phone: '703-728-8133', type: 'private', grades: 'KG-2', rating: 0, category: 'preschool' },
  { name: 'Hb Woodlawn Secondary Program', phone: '703-228-6363', type: 'public', grades: '-', rating: 0, category: 'high', website: 'https://www.apsva.us/' },
  { name: 'Arlington Science Focus School', phone: '703-228-7670', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Alice West Fleet Elementary School', phone: '703-228-5820', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Barcroft Elementary School', phone: '703-228-5838', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'Arlington Community High School', phone: '703-228-5350', type: 'public', grades: '9-12', rating: 1, category: 'high' },
  { name: 'The Sycamore School', phone: '703-717-5360', type: 'private', grades: '5-12', rating: 0, category: 'high' },
  { name: 'Hoffman - Boston Elementary School', phone: '703-228-5845', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Gunston Middle School', phone: '703-228-6900', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
  { name: 'Swanson Middle School', phone: '703-228-5500', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Jefferson Middle School', phone: '703-228-5900', type: 'public', grades: '6-8', rating: 3, category: 'middle' },
  { name: 'Chesterbrook Montessori School-Arlington Forest', phone: '703-243-3914', type: 'private', grades: 'PK-KG', rating: 0, category: 'preschool' },
  { name: 'St Thomas More Cathedral School', phone: '703-528-6781', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.stmschool.org/' },
  { name: 'Barrett Elementary School', phone: '703-228-6288', type: 'public', grades: 'PK-5', rating: 3, category: 'elementary' },
  { name: 'Montessori Public School of Arlington', phone: '703-228-8871', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Taylor Elementary School', phone: '703-228-6275', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Dr. Charles R. Drew Elementary School', phone: '703-228-5825', type: 'public', grades: 'PK-5', rating: 2, category: 'elementary' },
  { name: 'St Agnes School', phone: '703-527-5423', type: 'private', grades: 'PK-8', rating: 0, category: 'preschool', website: 'https://www.saintagnes.org/school' },
  { name: 'Dorothy Hamm Middle School', phone: '703-228-2910', type: 'public', grades: '6-8', rating: 5, category: 'middle' },
  { name: 'Campbell Elementary School', phone: '703-228-6770', type: 'public', grades: 'PK-5', rating: 5, category: 'elementary' },
  { name: 'Bishop Denis J. Oconnell High School', phone: '703-237-1400', type: 'private', grades: '9-12', rating: 0, category: 'high' },
  { name: 'Innovation Elementary School', phone: '703-228-7670', type: 'public', grades: 'PK-5', rating: 4, category: 'elementary' },
  { name: 'Kenmore Middle School', phone: '703-228-6800', type: 'public', grades: '6-8', rating: 4, category: 'middle' },
];

export const aroundCopy = {
  eyebrow: 'Around The Area',
  titleLead: 'Around The',
  titleAccent: 'Area',
  text: 'Browse through the top rated businesses that Arlington has to offer — from dining and drinks to shopping, coffee, fitness and coworking.',
};

export const aroundCategories = [
  {
    id: 'dine',
    label: 'Dine',
    icon: 'utensils',
    places: [
      { name: 'The Liberty Tavern', detail: 'Local favorite serving seasonal American plates in Clarendon' },
      { name: 'Ambar', detail: 'Balkan small plates and bottomless brunch in Clarendon' },
      { name: 'Pupatella', detail: 'Neapolitan wood-fired pizza institution in Ballston' },
      { name: 'Ray\'s the Steaks', detail: 'Beloved steakhouse in the Courthouse neighborhood' },
    ],
  },
  {
    id: 'drink',
    label: 'Drink',
    icon: 'wine',
    places: [
      { name: 'Clarendon Ballroom', detail: 'Live music and late-night dancing in Clarendon' },
      { name: 'Lyon Hall', detail: 'Biergarten-style patio in the heart of Clarendon' },
      { name: 'Busboys and Poets', detail: 'Bookstore, bar and kitchen in Shirlington' },
      { name: 'Wilson Hardware', detail: 'Multi-level cocktail bar on the Clarendon strip' },
    ],
  },
  {
    id: 'shop',
    label: 'Shop',
    icon: 'shopping-bag',
    places: [
      { name: 'Ballston Quarter', detail: 'Food hall and shopping in the heart of Ballston' },
      { name: 'Fashion Centre at Pentagon City', detail: 'Regional shopping center with national brands' },
      { name: 'The Village at Shirlington', detail: 'Walkable retail and dining district' },
      { name: 'Crystal City Shops', detail: 'Underground retail concourse and dining' },
    ],
  },
  {
    id: 'perk',
    label: 'Perk',
    icon: 'coffee',
    places: [
      { name: 'Northside Social', detail: 'Coffee house and wine bar in Clarendon' },
      { name: 'Commonwealth Joe', detail: 'Local roaster with a flagship coffee bar in Ballston' },
      { name: 'Bakeshop', detail: 'Neighborhood bakery and coffee on the Clarendon strip' },
      { name: 'Compass Coffee', detail: 'Local roaster with locations across Arlington' },
    ],
  },
  {
    id: 'sweat',
    label: 'Sweat',
    icon: 'heart-pulse',
    places: [
      { name: 'Sport & Health Ballston', detail: 'Full-service gym and fitness club in Ballston' },
      { name: 'Solidcore Clarendon', detail: 'Strength-focused studio on the Clarendon strip' },
      { name: 'Mount Vernon Trail', detail: '18 miles of riverside walking and biking paths' },
      { name: 'Arlington County Parks', detail: 'Trails and recreation across the county' },
    ],
  },
  {
    id: 'work',
    label: 'Work',
    icon: 'briefcase',
    places: [
      { name: 'WeWork Rosslyn', detail: 'Flexible offices with skyline views in Rosslyn' },
      { name: 'Industrious Ballston Quarter', detail: 'Premium coworking in Ballston' },
      { name: 'Carr Workplaces Crystal City', detail: 'Private offices and suites in Crystal City' },
      { name: 'MakeOffices Clarendon', detail: 'Bright coworking space in the heart of Clarendon' },
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
    title: 'How Smart DMV Buyers Negotiate in a Shifting Market',
    category: 'Strategy',
    date: 'February 2026',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/housekeys-AUTOx575.fit.jpg',
    href: '/blog',
  },
];