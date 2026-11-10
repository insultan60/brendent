export const brand = {
  name: 'BW Metro Properties',
  advisor: 'Brandon Wilson',
  logo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Logo-01-400xAUTO.fit.png',
  psrLogo: 'https://assets.agentfire3.com/uploads/sites/2739/2026/07/PSR-logo-footer-600xAUTO.fit.max.png',
  phone: '202-998-4593',
  phoneHref: 'tel:+12029984593',
  /** Every "Schedule a Consultation" button goes to this page, which embeds
   *  Brandon's Google Calendar booking schedule (bookingCalendar). */
  bookingUrl: '/schedule',
  /** Brandon's Google Calendar appointment schedule (short link:
   *  calendar.app.google/vZpzHV7SjmTfswtJA). `gv=true` is Google's embed mode. */
  bookingCalendar:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2DJLPz3NJkfgh5BaA9KevjOgCwSIAdYaFoDKDbk_AibAMsL67y4VZ4D3CBjr3RTYiXTj8xeX8J?gv=true',
  email: 'brandon@bwmetroproperties.com',
  address: '8315 Lee Hwy, Fairfax, VA 22031',
  licenses: 'DC: SP40002157  ·  VA: 0225262536  ·  MD: 5014155',
  instagram: 'https://www.instagram.com/brandonwilsonrealtor_dmv',
};

export interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'Properties', href: '/properties' },
  { label: 'Buyers', href: '/buyers' },
  { label: 'Sellers', href: '/sellers' },
  { label: 'Rentals', href: '/rentals' },
  { label: 'Explore Areas', href: '/explore-areas' },
  {
    label: 'Calculators',
    href: '#process',
    children: [
      { label: 'Affordability Calculator', href: '/affordability-calculator' },
      { label: 'Home Sale Calculator', href: '/home-sale-calculator' },
      { label: 'Mortgage Calculator', href: '/mortgage-calculator' },
    ],
  },
];

export const whyPoints = [
  {
    icon: 'strategy',
    title: 'Strategy backed by data',
    text: 'Pricing and offers rest on recent sales and current inventory. You see the numbers behind every recommendation.',
  },
  {
    icon: 'communication',
    title: 'Clear communication',
    text: 'Brandon updates you before you have to ask. Clients mention his fast replies and patient explanations in their reviews.',
  },
  {
    icon: 'market',
    title: 'Depth across the DMV',
    text: 'Licensed in DC, Virginia and Maryland, Brandon follows your search across state lines. Need a Northern Virginia real estate agent? His office is in Fairfax, and his Virginia license covers the whole state.',
  },
  {
    icon: 'negotiation',
    title: 'Skilled negotiation',
    text: 'Brandon holds the RENE designation and negotiates price, repairs and contract terms for you. A lender partner singled out his attention to detail in contracts.',
  },
  {
    icon: 'military',
    title: 'Military discipline',
    text: 'His military background shows up in how he plans, communicates and follows through. He is also a Military Relocation Professional (MRP).',
  },
];

/** The letters after Brandon's name, spelled out. */
export const credentials = [
  { code: 'ABR', name: 'Accredited Buyer’s Representative' },
  { code: 'SRS', name: 'Seller Representative Specialist' },
  { code: 'MRP', name: 'Military Relocation Professional' },
  { code: 'RENE', name: 'Real Estate Negotiation Expert' },
];

/** The strip directly under the hero. */
export const trustPoints = [
  '$2.7M in sales closed in the last 12 months',
  'ABR, SRS, MRP and RENE designations',
  'Licensed in DC, Virginia and Maryland',
  'Military relocation specialist',
];

export const stats = [
  { value: '$5.1M', label: 'Career Sales Volume' },
  { value: '9', label: 'Transactions Closed' },
  { value: '$2.7M', label: 'Last 12 Months' },
];

export const serviceCards = [
  {
    id: 'buyers',
    eyebrow: 'Buyers',
    title: 'Buy a Home',
    text: 'A clear, structured plan that puts you in control of every showing, offer and negotiation.',
    tagline: 'Showings · offers · negotiation, handled',
    cta: 'Start Home Search',
    icon: 'home',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1568.jpg',
    href: '/buyers',
  },
  {
    id: 'sellers',
    eyebrow: 'Sellers',
    title: 'Sell Your Home',
    text: 'Positioning, marketing and negotiation designed to attract the right buyers and the best terms.',
    tagline: 'Positioning · pricing · marketing, handled',
    cta: 'Get Home Value',
    icon: 'dollar',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
    href: '/sellers',
  },
  {
    id: 'communities',
    eyebrow: 'Communities',
    title: 'Explore Area',
    text: 'Discover the neighborhoods, market trends and lifestyle that fit the way you want to live.',
    tagline: 'Neighborhoods · trends · lifestyle, mapped',
    cta: 'Explore Opportunities',
    icon: 'map',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide.jpeg',
    href: '/explore-areas',
  },
];

export const communities = [
  { name: 'Washington', href: '/washington', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg' },
  { name: 'Arlington', href: '/arlington', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Alexandria', href: '/alexandria', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Falls Church', href: '/falls-church', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-AUTOx1150.fit.jpeg' },
  { name: 'Bethesda', href: '/bethesda', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg' },
  { name: 'Silver Spring', href: '/silver-spring', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg' },
  { name: 'Logan Circle', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Historic%20brick%20row%20houses%20along%20a%20tree%20lined%20street%20in%20Logan%20Circle%20Washington%20DC%2C%20colorful%20painted%20doors%2C%20wrought%20iron%20railings%2C%20warm%20golden%20afternoon%20light%2C%20upmarket%20urban%20neighborhood%2C%20editorial%20city%20photography%2C%20harmonious%20composition&width=800&height=600&seq=community-logan-circle-01&orientation=landscape' },
  { name: 'Shaw / U Street', href: '/shaw-u-street-corridor', image: 'https://readdy.ai/api/search-image?query=Charming%20historic%20townhomes%20in%20Shaw%20Washington%20DC%2C%20brick%20facades%20with%20bright%20accent%20doors%2C%20flower%20boxes%2C%20leafy%20street%20trees%2C%20soft%20daylight%2C%20vibrant%20urban%20neighborhood%2C%20editorial%20city%20photography&width=800&height=600&seq=community-shaw-01&orientation=landscape' },
  { name: 'Adams Morgan', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Colorful%20Victorian%20row%20houses%20in%20Adams%20Morgan%20Washington%20DC%2C%20painted%20brick%20facades%2C%20turrets%20and%20bay%20windows%2C%20tree%20lined%20street%2C%20warm%20late%20afternoon%20light%2C%20lively%20urban%20setting%2C%20editorial%20city%20photography&width=800&height=600&seq=community-adams-morgan-01&orientation=landscape' },
  { name: 'Gables Dupont Circle', href: '/washington', image: 'https://readdy.ai/api/search-image?query=Contemporary%20condo%20building%20exterior%20near%20Dupont%20Circle%20Washington%20DC%2C%20modern%20brick%20and%20glass%20facade%2C%20landscaped%20entrance%2C%20soft%20daylight%2C%20elegant%20urban%20street%2C%20editorial%20architectural%20photography%2C%20clean%20lines&width=800&height=600&seq=community-dupont-01&orientation=landscape' },
];

export const serviceTabs = [
  {
    id: 'buy',
    tab: 'Buy With Us',
    title: 'Buy With Us',
    text: 'Concierge-level guidance tailored to your lifestyle, goals, and timeline — with strategy, discretion, and clarity at every step.',
  },
  {
    id: 'sell',
    tab: 'Sell With Us',
    title: 'Sell With Us',
    text: 'Thoughtful pricing, elevated presentation, and hands-on representation designed to position your home at the highest level.',
  },
  {
    id: 'staging',
    tab: 'Strategic Staging',
    title: 'Strategic Staging',
    text: 'Expert preparation and visual storytelling that helps buyers connect emotionally, see value clearly, and act with confidence.',
  },
  {
    id: 'local',
    tab: 'Local Expertise',
    title: 'Local Expertise',
    text: 'Deep DMV market knowledge paired with honest advice, steady leadership, and insight built from years of experience.',
  },
];

export const lookingTo = [
  { icon: 'buy', eyebrow: 'Looking to', title: 'Buy', text: 'Start your search with a clear, structured plan.', href: '#services', image: 'https://readdy.ai/api/search-image?query=Bright%20modern%20condo%20interior%20in%20Washington%20DC%2C%20open%20living%20space%2C%20large%20windows%20with%20soft%20city%20light%2C%20neutral%20furnishings%2C%20warm%20minimal%20styling%2C%20editorial%20interior%20photography%2C%20calm%20inviting%20mood&width=800&height=600&seq=lookingto-buy-01&orientation=landscape' },
  { icon: 'sell', eyebrow: 'Looking to', title: 'Sell', text: 'Know your value and position your home to win.', href: '/sellers', image: 'https://readdy.ai/api/search-image?query=Beautifully%20presented%20townhouse%20exterior%20in%20the%20DMV%2C%20brick%20facade%20with%20white%20trim%2C%20manicured%20garden%20and%20walkway%2C%20warm%20golden%20light%2C%20desirable%20suburban%20street%2C%20editorial%20real%20estate%20photography%2C%20polished%20curb%20appeal&width=800&height=600&seq=lookingto-sell-01&orientation=landscape' },
  { icon: 'staging', eyebrow: 'Strategic', title: 'Staging', text: 'Prepare and present your home to stand out.', href: '#services', image: 'https://readdy.ai/api/search-image?query=Professionally%20staged%20living%20room%20with%20warm%20neutral%20tones%2C%20elegant%20minimal%20furniture%2C%20styled%20shelves%20and%20coffee%20table%2C%20natural%20light%20through%20large%20windows%2C%20editorial%20interior%20photography%2C%20refined%20calm%20atmosphere&width=800&height=600&seq=lookingto-staging-01&orientation=landscape' },
  { icon: 'expertise', eyebrow: 'Local', title: 'Expertise', text: 'Lean on real DMV neighborhood knowledge.', href: '#areas', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg' },
];

export const processSteps = [
  { step: '01', title: 'Personalized consultation', text: 'We talk about your goals, timeline and budget. You leave with a clear next step.' },
  { step: '02', title: 'Strategic planning', text: 'Brandon builds a plan from recent sales and current inventory, whether you are buying or selling.' },
  { step: '03', title: 'Hands-on guidance', text: 'Tours, offers, negotiation, inspections and paperwork. He handles the details and keeps you posted.' },
  { step: '04', title: 'Closing and beyond', text: 'Brandon stays with you through closing day and answers questions after you move in.' },
];

export interface GuideSection {
  id: string;
  eyebrow: string;
  /** The H2 is `title` followed by `accent` in italics. */
  title: string;
  accent: string;
  intro: string[];
  listTitle: string;
  list: string[];
  outro?: string[];
  cta: { label: string; href: string };
  link?: { label: string; href: string };
  image: string;
  imageAlt: string;
}

export const buySection: GuideSection = {
  id: 'buy',
  eyebrow: 'Buy a Home',
  title: 'Buy a Home in Washington DC',
  accent: 'With a Plan You Can Follow',
  intro: [
    'Homes for sale in Washington DC can go from listing to contract in days, or sit for weeks. The difference usually comes down to price, condition and timing. Brandon helps you read all three before you make an offer.',
    'Want condos for sale in Washington DC near a Metro stop? Or townhomes for sale in Washington DC with more space and a small yard? Brandon builds your search around your budget, commute and daily routine.',
  ],
  listTitle: 'What you get as a buyer',
  list: [
    'A shortlist matched to your budget, commute and must-haves',
    'Recent sales and days-on-market numbers before every showing',
    'Offer strategy and negotiation backed by the ABR and RENE designations',
    'Help coordinating your lender, inspector and closing',
  ],
  outro: [
    'Buying your first home? Brandon explains each step in plain language, from pre-approval to closing day. He also points you to local assistance programs worth asking your lender about.',
  ],
  cta: { label: 'Start Your Home Search', href: '/buyers' },
  link: { label: 'Browse homes for sale in Washington DC', href: '/properties' },
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1568.jpg',
  imageAlt: 'Brandon Wilson helping buyers find homes for sale in Washington DC',
};

export const sellSection: GuideSection = {
  id: 'sell',
  eyebrow: 'Sell Your Home',
  title: 'Sell Your Home With the Right Price',
  accent: 'and a Clear Strategy',
  intro: [
    'Many sellers begin by searching “sell my house Washington DC.” The results are often full of quick-cash offers. Brandon helps you compare a traditional listing with other options, so you can see what each path puts in your pocket.',
  ],
  listTitle: 'How Brandon prepares your listing',
  list: [
    'Pricing built on recent sales near your address',
    'Strategic staging and prep advice that fits your budget',
    'Marketing that shows buyers why your home is worth the price',
    'Negotiation focused on your net proceeds, not just the sale price',
  ],
  cta: { label: 'Sell Your Home', href: '/sellers' },
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg',
  imageAlt: 'Rowhouses in Old Town Alexandria, VA, a market where Brandon lists homes',
};

export const vaSection: GuideSection = {
  id: 'va-loan',
  eyebrow: 'Military & VA Buyers',
  title: 'VA Loan Realtor for Military,',
  accent: 'Veteran and Federal Buyers',
  intro: [
    'Brandon holds the Military Relocation Professional (MRP) designation and has military service in his own background. He knows how a VA purchase works and what a PCS timeline demands.',
    'Eligible borrowers can often buy with no down payment and no monthly mortgage insurance. A VA funding fee may apply, and your lender confirms the terms for your situation.',
  ],
  listTitle: 'How a VA loan realtor helps',
  list: [
    'Finds homes and condo projects that meet VA loan requirements',
    'Writes offers that sellers take seriously when you use VA financing',
    'Plans around PCS orders, short house-hunting trips and report dates',
    'Helps federal employees and contractors relocating to the DC area',
  ],
  outro: [
    'Many military and federal buyers look near the Pentagon, Fort Belvoir, Joint Base Andrews and Walter Reed in Bethesda. Brandon can help you compare the commute to each one.',
  ],
  // The VA and military page does not exist yet; until it does, this books a
  // consultation.
  cta: { label: 'Talk to a VA Loan Realtor', href: '/schedule' },
  link: { label: 'Read what an active-duty client said about using her VA loan', href: '/success-stories' },
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-AUTOx1150.fit.jpeg',
  imageAlt: 'Falls Church, VA neighborhood popular with military and federal buyers',
};

export interface NeighborhoodTab {
  id: string;
  city: string;
  blurb: string;
  items: { name: string; text: string; href: string }[];
  viewAll: { label: string; href: string };
}

/* Each neighborhood is meant to get its own page. Until it has one, its card
   links to the city guide it belongs to. */
export const neighborhoodTabs: NeighborhoodTab[] = [
  {
    id: 'dc',
    city: 'Washington DC',
    blurb: 'The District is Brandon’s primary market, from historic rowhouses to new waterfront condos.',
    items: [
      { name: 'Capitol Hill', text: 'Brick rowhouses, Eastern Market and a short walk to the Capitol.', href: '/washington' },
      { name: 'Navy Yard', text: 'Waterfront condos, Nationals Park and a Green Line Metro stop.', href: '/washington' },
      { name: 'Dupont Circle', text: 'Historic rowhouses, cafes and Red Line Metro access.', href: '/washington' },
      { name: 'Logan Circle', text: 'Victorian rowhouses around a park, with restaurants along 14th Street.', href: '/washington' },
      { name: 'Shaw', text: 'Walkable blocks, music venues and quick Metro access.', href: '/shaw-u-street-corridor' },
      { name: 'Columbia Heights', text: 'A mix of condos and rowhouses near the Green and Yellow Line Metro.', href: '/washington' },
      { name: 'Georgetown', text: 'Historic townhouses, the waterfront and the C&O Canal.', href: '/washington' },
      { name: 'Adams Morgan', text: 'Colorful rowhouses, global restaurants and a lively nightlife strip.', href: '/washington' },
    ],
    viewAll: { label: 'View all Washington DC neighborhoods', href: '/washington' },
  },
  {
    id: 'alexandria',
    city: 'Alexandria, VA',
    blurb: 'Old Town charm, Del Ray’s small-town feel and newer neighborhoods with Metro access.',
    items: [
      { name: 'Old Town Alexandria', text: 'Brick sidewalks, the waterfront and King Street shops.', href: '/alexandria' },
      { name: 'Del Ray', text: 'A small-town feel along Mount Vernon Avenue.', href: '/alexandria' },
      { name: 'Carlyle', text: 'Condos and townhomes with easy access to Old Town.', href: '/alexandria' },
      { name: 'Potomac Yard', text: 'Newer townhomes and condos beside the Potomac Yard Metro station.', href: '/alexandria' },
    ],
    viewAll: { label: 'View all Alexandria neighborhoods', href: '/alexandria' },
  },
  {
    id: 'arlington',
    city: 'Arlington, VA',
    blurb: 'Walkable Metro corridors, close to the Pentagon and Reagan National Airport.',
    items: [
      { name: 'Clarendon', text: 'A walkable Orange Line neighborhood with restaurants and shops.', href: '/arlington' },
      { name: 'Ballston', text: 'Condos, offices and a Metro stop in the middle of it all.', href: '/arlington' },
      { name: 'Rosslyn', text: 'High-rise condos with views of the Potomac and the DC skyline.', href: '/arlington' },
      { name: 'Crystal City', text: 'Condos and townhomes in National Landing, near Reagan National Airport.', href: '/arlington' },
    ],
    viewAll: { label: 'View all Arlington neighborhoods', href: '/arlington' },
  },
  {
    id: 'bethesda',
    city: 'Bethesda, MD',
    blurb: 'Red Line access, a busy downtown and quiet residential streets nearby.',
    items: [
      { name: 'Bethesda Row', text: 'Shops, restaurants and the Capital Crescent Trail.', href: '/bethesda' },
      { name: 'Downtown Bethesda', text: 'Red Line Metro, offices and high-rise condos.', href: '/bethesda' },
      { name: 'Chevy Chase, MD', text: 'Tree-lined streets and larger single-family homes.', href: '/bethesda' },
    ],
    viewAll: { label: 'View all Bethesda neighborhoods', href: '/bethesda' },
  },
  {
    id: 'silver-spring',
    city: 'Silver Spring, MD',
    blurb: 'Metro access and a range of price points just north of DC.',
    items: [
      { name: 'Downtown Silver Spring', text: 'Red Line Metro, the AFI Silver Theatre and plenty of restaurants.', href: '/silver-spring' },
      { name: 'Takoma Park', text: 'Leafy streets, older homes and a close-knit community.', href: '/silver-spring' },
      { name: 'Woodside', text: 'Residential streets with quick access to downtown Silver Spring.', href: '/silver-spring' },
    ],
    viewAll: { label: 'View all Silver Spring neighborhoods', href: '/silver-spring' },
  },
  {
    id: 'fort-washington',
    city: 'Fort Washington and Oxon Hill, MD',
    blurb: 'Quieter streets, river access and a short drive to National Harbor.',
    items: [
      { name: 'Fort Washington', text: 'Quiet residential streets near Fort Washington Park and the Potomac River.', href: '/explore-areas' },
      { name: 'Oxon Hill', text: 'Close to National Harbor and the Capital Beltway.', href: '/explore-areas' },
    ],
    viewAll: { label: 'View all Fort Washington and Oxon Hill neighborhoods', href: '/explore-areas' },
  },
];

/**
 * Washington DC market numbers for the snapshot tiles. The tiles stay hidden
 * until every value AND the source line are filled in: a market number with no
 * named source and date must not be published. Update monthly.
 */
export const marketSnapshot = {
  medianPrice: '', // e.g. '$650,000'
  daysOnMarket: '', // e.g. '32 days'
  activeListings: '', // e.g. '2,140'
  saleToList: '', // e.g. '99.1%'
  source: '', // e.g. 'Source: Bright MLS, October 2026'
};

export const homeTools = [
  { title: 'Mortgage Calculator', text: 'Estimate your monthly payment before you start touring.', href: '/mortgage-calculator' },
  { title: 'Affordability Calculator', text: 'See a price range that fits your income and savings.', href: '/affordability-calculator' },
  { title: 'Home Sale Calculator', text: 'Estimate what you could keep after costs when you sell.', href: '/home-sale-calculator' },
];

/** The three reviews shown on the homepage, by name, from `testimonials`. */
export const featuredReviewNames = ['Andie Coutoulakis', 'Rodrigo Soto', 'Allen Yarbrough'];

/** Homepage FAQ. Also emitted as FAQPage structured data from app/page.tsx. */
export const homeFaqs = [
  {
    q: 'Can one agent help me buy in DC, Maryland and Virginia?',
    a: 'Yes, if the agent is licensed in all three places. Brandon holds licenses in DC, Virginia and Maryland, so you work with one person even when your search crosses state lines. Rules, taxes and closing customs differ in each place, and he explains those differences up front.',
  },
  {
    q: 'What help is available for a first time home buyer in Washington DC?',
    a: 'DC offers the Home Purchase Assistance Program (HPAP). Maryland and Virginia have their own programs through the Maryland Mortgage Program and VHDA. Eligibility rules, income limits and funding change often, so confirm current terms with a participating lender.',
  },
  {
    q: 'How do I pay a buyer’s agent?',
    a: 'Compensation is discussed and signed in a written buyer agreement before you tour homes. Amounts are negotiable, and sellers may offer to cover part or all of it. Brandon walks through your options at the first consultation so there are no surprises.',
  },
  {
    q: 'Can I use a VA loan to buy a condo?',
    a: 'Yes, if the condo project meets VA requirements and is approved. Brandon checks approval status early, because an unapproved building can delay or end a deal.',
  },
  {
    q: 'Do I need to stage my home before I list it?',
    a: 'Not always, but it often helps buyers picture daily life in the space. Brandon recommends only the prep that fits your budget and your home, and sometimes that is just decluttering and fresh paint.',
  },
  {
    q: 'Can you help if I am moving to the DC area from out of state?',
    a: 'Yes. Brandon can set up video tours, share documents for e-signature and line up trusted inspectors and contractors. Many buyers then visit once to see their top choices in person.',
  },
];

export const exploreAreas = [
  { id: 'a1', name: 'Alexandria', x: 24, y: 64, price: '$875K', days: '21', listings: '146', sales: '38' },
  { id: 'a2', name: 'Arlington', x: 39, y: 47, price: '$1.02M', days: '19', listings: '112', sales: '29' },
  { id: 'a3', name: 'Bethesda', x: 53, y: 27, price: '$1.34M', days: '24', listings: '98', sales: '22' },
  { id: 'a4', name: 'Falls Church', x: 27, y: 39, price: '$960K', days: '22', listings: '74', sales: '18' },
  { id: 'a5', name: 'Fort Washington', x: 61, y: 76, price: '$640K', days: '28', listings: '63', sales: '16' },
  { id: 'a6', name: 'Oxon Hill', x: 68, y: 66, price: '$520K', days: '30', listings: '58', sales: '14' },
  { id: 'a7', name: 'Silver Spring', x: 46, y: 18, price: '$720K', days: '23', listings: '131', sales: '34' },
  { id: 'a8', name: 'Washington', x: 35, y: 67, price: '$1.18M', days: '26', listings: '204', sales: '47' },
];

export const partners = [
  { name: 'Mortgage Specialist', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/buy-AUTOx1150.fit.jpg' },
  { name: 'Home Inspector', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor15-AUTOx1150.fit.jpeg' },
  { name: 'Contractor', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor1-AUTOx1150.fit.jpeg' },
  { name: 'Plumber', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/pexels-bulat369-1243575272-32588548-AUTOx1150.fit.jpg' },
  { name: 'Electrician', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/pexels-ranjeet-860714737-27928762-AUTOx1150.fit.jpg' },
];

export const testimonials = [
  {
    name: 'Andie Coutoulakis',
    role: 'Buyer · Northern Virginia',
    rating: 5,
    text: 'Brandon was awesome to work with! He is friendly, patient, and walked us through our home buying process so it was not intimidating at all. I am active duty military and utilized the VA loan — Brandon also serves, and he knew the ins and outs of the loan which helped us a lot. I highly recommend Brandon to anyone that wants a realtor that’s by their side.',
    avatar: '/images/reviews/andie-coutoulakis.png',
  },
  {
    name: 'Rodrigo Soto',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'I had a great experience working with Brandon to buy my first home in Columbia Heights. As a first-time homebuyer, he was incredibly helpful, patient, and responsive every step of the way — he made the entire process much less intimidating and helped me find a place I’m excited to call home.',
    avatar: '/images/reviews/rodrigo-soto.png',
  },
  {
    name: 'Ronny Escobar',
    role: 'Investor · Maryland',
    rating: 5,
    text: 'I can’t recommend Brandon highly enough. From start to finish he was attentive, responsive, and genuinely invested. While I was traveling internationally an unexpected maintenance issue came up and Brandon stepped in and coordinated everything — that gave me tremendous peace of mind. He treats you like a partner, not just another client.',
    avatar: '/images/reviews/ronny-escobar.png',
  },
  {
    name: 'Kris Otto',
    role: 'Buyer · Virginia',
    rating: 5,
    text: 'Five stars doesn’t feel like enough. From the day we started looking to the day we closed took less than two months. What I appreciated most was his honesty — he never tried to sell me on a property just to close a deal, and always made sure I had what I needed to make the right decision.',
    avatar: '/images/reviews/kris-otto-kris-ngo.png',
  },
  {
    name: 'Sam Winkeler',
    role: 'Lender Partner · DMV',
    rating: 5,
    text: 'Brandon is a true professional who knows the DMV real estate market inside and out, and his attention to detail when writing contracts is second to none. His knowledge, communication, and commitment to his clients make him an outstanding Realtor.',
    avatar: '/images/reviews/sam-winkeler.png',
  },
  {
    name: 'Eliel Vega',
    role: 'Buyer · Maryland',
    rating: 5,
    text: 'Brandon has been with me in my search for about 2 years. He is educated and well-informed, and if he doesn’t know the answer he finds it — and comes back with options. He goes above and beyond and truly made me feel like I was not alone during this entire process.',
    avatar: '/images/reviews/eliel-vega.png',
  },
  {
    name: 'Allen Yarbrough',
    role: 'Seller · Washington, DC',
    rating: 5,
    text: 'Big thanks to Major Brandon Wilson for helping me sell my condo in just 21 days! As a fellow veteran, I truly appreciated his discipline, commitment, and straightforward approach. If you’re looking for someone who gets results and has your back, Brandon is the one to call.',
    avatar: '/images/reviews/allen-yarbrough.png',
  },
  {
    name: 'Leah Taylor',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'He helped me and my wife find our dream home and made the entire process feel smooth. Brandon is very knowledgeable, friendly, and proactive, which made us feel confident and well taken care of. He completed all documentation in a timely manner so we were never left uninformed.',
    avatar: '/images/reviews/leah-taylor.png',
  },
  {
    name: 'Kayla Washington',
    role: 'Buyer · Washington, DC',
    rating: 5,
    text: 'Brandon was truly a pleasure to work with! He was prompt, professional, and made the entire process smooth and stress-free from start to finish. I highly recommend him.',
    avatar: '/images/reviews/kayla-washington.png',
  },
];

export const instagramPosts = [
  { id: 'i1', image: 'https://readdy.ai/api/search-image?query=Historic%20terraced%20row%20houses%20in%20Logan%20Circle%20Washington%20DC%2C%20warm%20brick%20facades%2C%20tree%20lined%20sidewalk%2C%20soft%20golden%20light%2C%20charming%20urban%20street%20scene%2C%20editorial%20city%20photography%2C%20harmonious%20composition&width=800&height=800&seq=instagram-logan-01&orientation=squarish', alt: 'Logan Circle, Washington DC row houses' },
  { id: 'i2', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg', alt: 'Old Town Alexandria streetscape' },
  { id: 'i3', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/realtor1-AUTOx1150.fit.jpeg', alt: 'Contractor partner at work on a home project' },
  { id: 'i4', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg', alt: 'Bethesda Row neighborhood at golden hour' },
  { id: 'i5', image: 'https://readdy.ai/api/search-image?query=Historic%20townhomes%20in%20Shaw%20Washington%20DC%2C%20brick%20facades%20with%20colorful%20doors%2C%20leafy%20street%20trees%2C%20warm%20afternoon%20light%2C%20vibrant%20urban%20neighborhood%20scene%2C%20editorial%20city%20photography&width=800&height=800&seq=instagram-shaw-01&orientation=squarish', alt: 'Shaw, Washington DC townhomes' },
  { id: 'i6', image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg', alt: 'Silver Spring, Maryland street scene' },
];

export const footerColumns = [
  {
    title: 'Buy',
    links: [
      { label: 'Buyers', href: '#services' },
      { label: 'Exclusive Listings', href: '/exclusive-listings' },
      { label: 'Properties', href: '/properties' },
      { label: 'VIP Home Search', href: '/vip-home-search' },
      { label: 'Rentals', href: '/rentals' },
    ],
  },
  {
    title: 'Sell',
    links: [
      { label: 'Sellers', href: '/sellers' },
      { label: 'Home Valuation', href: '/home-valuation' },
      { label: 'Recently Sold', href: '/recently-sold' },
      { label: 'Staging', href: '#services' },
      { label: 'Calculators', href: '/affordability-calculator' },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'Explore Areas', href: '/explore-areas' },
      { label: 'Communities We Serve', href: '#communities' },
      { label: 'Resources & Partners', href: '/resources' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Get in Touch', href: '/get-in-touch' },
    ],
  },
];

export const quickSearchAreas = [
  'Washington, DC',
  'Arlington, VA',
  'Alexandria, VA',
  'Falls Church, VA',
  'Bethesda, MD',
  'Silver Spring, MD',
  'Fort Washington, MD',
  'Oxon Hill, MD',
];

export const socialLinks = [
  { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/people/Brandon-Wilson-Realtor-MRP-ABR/61577357866577/' },
  { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/brandonwilsonrealtor_dmv' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/brandon-wilson-5a95b01b' },
  { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/@BWMetroProperties' },
];

// Grouped navigation used by the right-side slide-in drawer.
// Content mirrors the real BW Metro Properties menu, rendered as a single
// vertical scrollable list and mapped to our own page anchors.
export const menuGroups = [
  {
    label: 'Buyers',
    items: [
      { label: 'Buyers', href: '/buyers' },
      { label: 'Exclusive Listings', href: '/exclusive-listings' },
      { label: 'Properties', href: '/properties' },
      { label: 'Explore Areas', href: '/explore-areas' },
      { label: 'VIP Home Search', href: '/vip-home-search' },
      { label: 'Rentals', href: '/rentals' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Success Stories', href: '/success-stories' },
      { label: 'Get in Touch', href: '/get-in-touch' },
      { label: 'Resources & Partners', href: '/resources' },
    ],
  },
  {
    label: 'Sellers',
    items: [
      { label: 'Sell Your Home', href: '/sellers' },
      { label: 'Home Valuation', href: '/home-valuation' },
      { label: 'Cash Offer', href: '/cash-offer' },
      { label: 'Recently Sold', href: '/recently-sold' },
    ],
  },
  {
    label: 'Calculators',
    items: [
      { label: 'Affordability Calculator', href: '/affordability-calculator' },
      { label: 'Home Sale Calculator', href: '/home-sale-calculator' },
      { label: 'Mortgage Calculator', href: '/mortgage-calculator' },
    ],
  },
  {
    label: 'Explore',
    items: [
      { label: 'Washington', href: '/washington' },
      { label: 'Arlington', href: '/arlington' },
      { label: 'Alexandria', href: '/alexandria' },
      { label: 'Falls Church', href: '/falls-church' },
      { label: 'Bethesda', href: '/bethesda' },
      { label: 'Silver Spring', href: '/silver-spring' },
      { label: 'Shaw / U Street Corridor', href: '/shaw-u-street-corridor' },
    ],
  },
];
