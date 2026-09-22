// Content for the Rentals page — mirrors the real BW Metro Properties
// "Condo and Rental Hub" experience section for section, adapted to our own
// design system.

export const rentalsHero = {
  eyebrow: 'Find Your DMV Condo',
  titleLead: 'Condo and',
  titleAccent: 'Rental Hub',
  text: 'Capture leads from condo buyers, renters, sellers, and investor/landlords interested in condos and rental properties throughout Washington, DC, Maryland, and Northern Virginia. This is a dedicated Condo and Rental Hub focused on low-maintenance living opportunities.',
  primaryCta: { label: 'Get My Condo List', href: '#condo-list' },
  secondaryCta: { label: 'Ask about rentals', href: '#rentals-form' },
  image:
    'https://readdy.ai/api/search-image?query=Modern%20glass%20condo%20tower%20with%20warm%20lit%20windows%20at%20dusk%20rising%20above%20a%20calm%20city%20street%2C%20moody%20twilight%20sky%2C%20cinematic%20architectural%20photography%2C%20deep%20blue%20hour%20tones%20with%20warm%20amber%20interior%20glow%2C%20elegant%20and%20serene&width=1600&height=900&seq=rentals-hero-dmv-2026&orientation=landscape',
};

export const condoHubIntro = {
  eyebrow: 'Find the Right Home or Condo',
  titleLead: 'DMV',
  titleAccent: 'Condo Hub',
  subhead: 'Your resource for condos, rentals, and low-maintenance living across DC, Maryland, and Northern Virginia.',
  text: 'Welcome to the DMV Condo Hub, your go-to resource for condo living in Washington, DC, Maryland, and Northern Virginia. Whether you’re buying your first condo, searching for a rental, exploring investment opportunities, or planning to sell your current unit, Brandon provides full-time, concierge-level guidance tailored to your goals. With local expertise and real-world experience as an owner and investor, Brandon helps you move forward with clarity and confidence.',
  primaryCta: { label: 'Get My Condo List', href: '#condo-list' },
  secondaryCta: { label: 'Ask About Rentals', href: '#rentals-form' },
  image:
    'https://readdy.ai/api/search-image?query=Stylish%20modern%20condo%20living%20room%20with%20floor%20to%20ceiling%20windows%20overlooking%20a%20city%2C%20warm%20minimalist%20furnishings%2C%20soft%20morning%20light%2C%20editorial%20interior%20photography%2C%20calm%20neutral%20palette%2C%20elegant%20and%20inviting&width=1000&height=1300&seq=rentals-condo-hub-dmv-2026&orientation=portrait',
};

export const rentalListingsLead = {
  eyebrow: 'New to the Market',
  titleLead: 'Rental',
  titleAccent: 'Properties',
  text: 'Browse a selection of homes currently available in the DMV region. Updated regularly to showcase the best options for buyers and sellers.',
  primaryCta: { label: 'VIP Home Search', href: '/vip-home-search' },
  secondaryCta: { label: 'View All Rentals', href: '#condo-list' },
};

export const rentalListings = [
  {
    id: 'r1',
    price: '$4,500',
    street: '1514 Gingerwood Court',
    city: 'Vienna, VA',
    beds: '5',
    baths: '3',
    sqft: '1,978',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Spacious%20two-story%20family%20home%20exterior%20in%20Vienna%20Virginia%2C%20brick%20and%20siding%20facade%2C%20attached%20two%20car%20garage%2C%20green%20front%20lawn%2C%20soft%20daylight%2C%20welcoming%20suburban%20neighborhood%2C%20editorial%20real%20estate%20photography%2C%20warm%20harmonious%20tones&width=800&height=600&seq=rental-vienna-01&orientation=landscape',
  },
  {
    id: 'r2',
    price: '$2,300',
    street: '1611 Shadyside Road',
    city: 'Baltimore, MD',
    beds: '4',
    baths: '2',
    sqft: '1,844',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Classic%20row%20house%20home%20exterior%20in%20Baltimore%20Maryland%2C%20red%20brick%20facade%2C%20stone%20steps%20and%20trim%2C%20tidy%20sidewalk%2C%20warm%20afternoon%20light%2C%20historic%20residential%20street%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-baltimore-01&orientation=landscape',
  },
  {
    id: 'r3',
    price: '$1,700',
    street: '200 E High Street #3A',
    city: 'Pottstown, PA',
    beds: '2',
    baths: '1',
    sqft: '1,000',
    tag: 'Active Under Contract',
    image: 'https://readdy.ai/api/search-image?query=Charming%20two-story%20home%20exterior%20in%20Pottstown%20Pennsylvania%2C%20painted%20siding%2C%20front%20porch%2C%20neat%20shrubs%20and%20walkway%2C%20bright%20daylight%2C%20quaint%20suburban%20setting%2C%20editorial%20real%20estate%20photography%2C%20inviting%20appeal&width=800&height=600&seq=rental-pottstown-01&orientation=landscape',
  },
  {
    id: 'r4',
    price: '$2,850',
    street: '341 Lenape Way',
    city: 'Claymont, DE',
    beds: '4',
    baths: '2',
    sqft: '1,980',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Comfortable%20family%20home%20exterior%20in%20Claymont%20Delaware%2C%20brick%20front%20with%20vinyl%20siding%2C%20mature%20trees%2C%20well%20kept%20lawn%2C%20warm%20daylight%2C%20quiet%20suburban%20street%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-claymont-01&orientation=landscape',
  },
  {
    id: 'r5',
    price: '$2,500',
    street: '7403 Baltimore Drive',
    city: 'Marlton, NJ',
    beds: '2',
    baths: '2',
    sqft: '1,387',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Well%20maintained%20home%20exterior%20in%20Marlton%20New%20Jersey%2C%20neutral%20siding%2C%20black%20shutters%2C%20landscaping%20and%20driveway%2C%20soft%20daylight%2C%20friendly%20suburban%20neighborhood%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-marlton-01&orientation=landscape',
  },
  {
    id: 'r6',
    price: '$1,525',
    street: '360 N 13th Street',
    city: 'Lebanon, PA',
    beds: '4',
    baths: '1',
    sqft: '1,850',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20red%20brick%20home%20exterior%20in%20Lebanon%20Pennsylvania%2C%20tidy%20front%20garden%2C%20white%20porch%20trim%2C%20warm%20light%2C%20established%20residential%20street%2C%20editorial%20real%20estate%20photography%2C%20classic%20curb%20appeal&width=800&height=600&seq=rental-lebanon-01&orientation=landscape',
  },
  {
    id: 'r7',
    price: '$3,950',
    street: '6214 Florence Lane',
    city: 'Alexandria, VA',
    beds: '5',
    baths: '2',
    sqft: '2,303',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20townhouse%20exterior%20in%20Alexandria%20Virginia%2C%20brick%20facade%2C%20brick%20walkway%2C%20trimmed%20hedges%2C%20warm%20golden%20evening%20light%2C%20desirable%20urban%20neighborhood%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-alexandria-01&orientation=landscape',
  },
  {
    id: 'r8',
    price: '$6,700',
    street: '303 Queen Street',
    city: 'Alexandria, VA',
    beds: '4',
    baths: '3',
    sqft: '1,535',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Refined%20colonial%20home%20exterior%20in%20Old%20Town%20Alexandria%20Virginia%2C%20painted%20brick%20facade%2C%20black%20shutters%2C%20flower%20boxes%2C%20soft%20daylight%2C%20charming%20historic%20street%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-oldtown-01&orientation=landscape',
  },
  {
    id: 'r9',
    price: '$3,195',
    street: '44666 Provincetown',
    city: 'Ashburn, VA',
    beds: '3',
    baths: '2',
    sqft: '1,630',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Modern%20suburban%20home%20exterior%20in%20Ashburn%20Virginia%2C%20mixed%20brick%20and%20siding%2C%20neat%20lawn%20and%20young%20trees%2C%20bright%20daylight%2C%20newer%20residential%20community%2C%20editorial%20real%20estate%20photography%2C%20clean%20composition&width=800&height=600&seq=rental-ashburn-01&orientation=landscape',
  },
  {
    id: 'r10',
    price: '$2,900',
    street: '124 Lenore Lane',
    city: 'Winchester, VA',
    beds: '4',
    baths: '2',
    sqft: '2,463',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Spacious%20country%20style%20home%20exterior%20in%20Winchester%20Virginia%2C%20wide%20front%20porch%2C%20neutral%20siding%2C%20large%20green%20yard%2C%20warm%20afternoon%20light%2C%20peaceful%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-winchester-01&orientation=landscape',
  },
  {
    id: 'r11',
    price: '$1,800',
    street: '213 Brandywine Avenue',
    city: 'Downingtown, PA',
    beds: '2',
    baths: '1',
    sqft: '1,492',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Cozy%20two-story%20home%20exterior%20in%20Downingtown%20Pennsylvania%2C%20stone%20and%20siding%20accents%2C%20small%20front%20garden%2C%20soft%20daylight%2C%20quiet%20residential%20street%2C%20editorial%20real%20estate%20photography%2C%20welcoming%20mood&width=800&height=600&seq=rental-downingtown-01&orientation=landscape',
  },
  {
    id: 'r12',
    price: '$3,200',
    street: '318 Ridgewood Drive',
    city: 'Royersford, PA',
    beds: '3',
    baths: '2',
    sqft: '1,897',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Attractive%20family%20home%20exterior%20in%20Royersford%20Pennsylvania%2C%20light%20siding%20with%20dark%20roof%2C%20landscaped%20beds%2C%20driveway%2C%20bright%20daylight%2C%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-royersford-01&orientation=landscape',
  },
  {
    id: 'r13',
    price: '$3,700',
    street: '29137 Hickory Lane',
    city: 'Langhorne, PA',
    beds: '3',
    baths: '2',
    sqft: '2,262',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Comfortable%20detached%20home%20exterior%20in%20Langhorne%20Pennsylvania%2C%20brick%20and%20siding%2C%20mature%20shade%20trees%2C%20green%20lawn%2C%20soft%20daylight%2C%20established%20neighborhood%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-langhorne-01&orientation=landscape',
  },
  {
    id: 'r14',
    price: '$2,800',
    street: '5608 Gosling Court',
    city: 'Clifton, VA',
    beds: '2',
    baths: '3',
    sqft: '1,313',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Upscale%20home%20exterior%20in%20Clifton%20Virginia%2C%20brick%20facade%20with%20white%20trim%2C%20manicured%20landscaping%2C%20long%20driveway%2C%20warm%20light%2C%20wooded%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-clifton-01&orientation=landscape',
  },
  {
    id: 'r15',
    price: '$2,700',
    street: '1200 Happy Ridge Drive',
    city: 'Front Royal, VA',
    beds: '3',
    baths: '2',
    sqft: '1,567',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Charming%20home%20exterior%20in%20Front%20Royal%20Virginia%2C%20neutral%20siding%2C%20front%20porch%2C%20green%20yard%2C%20soft%20daylight%2C%20small%20town%20setting%2C%20editorial%20real%20estate%20photography%2C%20serene%20composition&width=800&height=600&seq=rental-frontroyal-01&orientation=landscape',
  },
  {
    id: 'r16',
    price: '$1,850',
    street: '5212 Reinhard Street',
    city: 'Philadelphia, PA',
    beds: '3',
    baths: '2',
    sqft: '1,134',
    tag: 'Open House',
    image: 'https://readdy.ai/api/search-image?query=Traditional%20row%20house%20exterior%20in%20Philadelphia%20Pennsylvania%2C%20red%20brick%20facade%2C%20stoop%20steps%2C%20tidy%20sidewalk%2C%20warm%20afternoon%20light%2C%20urban%20residential%20block%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-philadelphia-01&orientation=landscape',
  },
  {
    id: 'r17',
    price: '$3,950',
    street: '7356 Tottenham Drive',
    city: 'White Plains, MD',
    beds: '4',
    baths: '3',
    sqft: '3,785',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Large%20colonial%20home%20exterior%20in%20White%20Plains%20Maryland%2C%20brick%20front%2C%20two%20car%20garage%2C%20wide%20driveway%2C%20green%20lawn%2C%20bright%20daylight%2C%20upscale%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-whiteplains-01&orientation=landscape',
  },
  {
    id: 'r18',
    price: '$1,425',
    street: '801 N Pitt Street #220',
    city: 'Alexandria, VA',
    beds: '1',
    baths: '1',
    sqft: '384',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Compact%20condo%20building%20exterior%20in%20Alexandria%20Virginia%2C%20modern%20brick%20facade%2C%20tidy%20entrance%2C%20landscaping%2C%20soft%20daylight%2C%20convenient%20urban%20location%2C%20editorial%20real%20estate%20photography%2C%20clean%20lines&width=800&height=600&seq=rental-pitt-01&orientation=landscape',
  },
  {
    id: 'r19',
    price: '$2,850',
    street: '7717 Inversham Drive #115',
    city: 'Falls Church, VA',
    beds: '3',
    baths: '2',
    sqft: '1,277',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Townhouse%20style%20condo%20exterior%20in%20Falls%20Church%20Virginia%2C%20brick%20and%20siding%2C%20front%20garden%2C%20parking%20area%2C%20soft%20daylight%2C%20pleasant%20suburban%20setting%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-fallschurch-01&orientation=landscape',
  },
  {
    id: 'r20',
    price: '$5,600',
    street: '11211 Long Pine Trl',
    city: 'Potomac, MD',
    beds: '5',
    baths: '3',
    sqft: '2,715',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20large%20home%20exterior%20in%20Potomac%20Maryland%2C%20stately%20brick%20facade%2C%20manicured%20hedges%2C%20circular%20drive%2C%20warm%20afternoon%20light%2C%20prestigious%20neighborhood%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-potomac-01&orientation=landscape',
  },
  {
    id: 'r21',
    price: '$3,500',
    street: '8971 Katherine Johnson Avenue',
    city: 'Manassas, VA',
    beds: '4',
    baths: '3',
    sqft: '2,462',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Newer%20family%20home%20exterior%20in%20Manassas%20Virginia%2C%20mixed%20siding%20facade%2C%20two%20car%20garage%2C%20green%20lawn%2C%20bright%20daylight%2C%20modern%20suburban%20community%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-manassas-01&orientation=landscape',
  },
  {
    id: 'r22',
    price: '$4,990',
    street: '4312 Holly Ridge Road',
    city: 'Rockville, MD',
    beds: '5',
    baths: '4',
    sqft: '4,270',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Spacious%20brick%20home%20exterior%20in%20Rockville%20Maryland%2C%20columned%20entry%2C%20large%20windows%2C%20landscaped%20yard%2C%20warm%20light%2C%20upscale%20suburban%20street%2C%20editorial%20real%20estate%20photography%2C%20refined%20curb%20appeal&width=800&height=600&seq=rental-rockville-01&orientation=landscape',
  },
  {
    id: 'r23',
    price: '$1,550',
    street: '23254 Chestnut Oak Court #9-A',
    city: 'California, MD',
    beds: '1',
    baths: '1',
    sqft: '759',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Low%20maintenance%20condo%20exterior%20in%20California%20Maryland%2C%20neutral%20facade%2C%20neat%20entry%2C%20small%20garden%20beds%2C%20soft%20daylight%2C%20quiet%20residential%20setting%2C%20editorial%20real%20estate%20photography%2C%20tidy%20composition&width=800&height=600&seq=rental-california-01&orientation=landscape',
  },
  {
    id: 'r24',
    price: '$3,700',
    street: '3128 Tulip Tree Place',
    city: 'Dumfries, VA',
    beds: '4',
    baths: '3',
    sqft: '3,849',
    tag: '',
    image: 'https://readdy.ai/api/search-image?query=Attractive%20townhome%20exterior%20in%20Dumfries%20Virginia%2C%20brick%20front%20with%20garage%2C%20tidy%20landscaping%2C%20driveway%2C%20soft%20daylight%2C%20friendly%20suburban%20neighborhood%2C%20editorial%20real%20estate%20photography&width=800&height=600&seq=rental-dumfries-01&orientation=landscape',
  },
];

export const findYourCondo = {
  eyebrow: 'Tell Us What',
  titleLead: 'You’re',
  titleAccent: 'Looking For',
  text: 'Share a few details and we’ll send you a custom list of condos or rentals that fit your budget, timeline, and lifestyle.',
  cta: { label: 'Ask about out rentals', href: '#rentals-form' },
};

export const findHere = {
  eyebrow: 'What You’ll Find in the DMV Condo Hub',
  titleLead: 'What You’ll',
  titleAccent: 'Find Here',
  text: 'The DMV Condo Hub is designed to give you everything you need in one place—listings, rental options, building insights, and guidance—so you can make smart decisions about condo and low-maintenance living.',
  cards: [
    {
      icon: 'building',
      title: 'DMV Condo Listings',
      text: 'Explore condo opportunities across Washington, DC, Maryland, and Northern Virginia—all in one place.',
    },
    {
      icon: 'flexibility',
      title: 'Flexible Rental Opportunities',
      text: 'Find rental and lease options designed for your timeline, lifestyle, and budget.',
    },
    {
      icon: 'key',
      title: 'Understanding Condo Ownership',
      text: 'Learn how condo fees, amenities, reserves, and building rules impact your investment.',
    },
    {
      icon: 'finance',
      title: 'Smart Financing & Strategy',
      text: 'Get guidance on financing options, first-time buyer programs, and long-term investment planning.',
    },
    {
      icon: 'book',
      title: 'Local Insight That Matters',
      text: 'Discover neighborhoods, buildings, commute patterns, and lifestyle fit with expert local knowledge.',
    },
  ],
};

export const idealFor = {
  eyebrow: 'Who’s it for?',
  titleLead: 'Who Rentals are',
  titleAccent: 'Ideal For',
  cards: [
    {
      icon: 'buyer',
      title: 'First-Time Condo Buyers',
      text: 'You’re ready to own, but you want something manageable with great amenities and a convenient location. We’ll help you understand condo fees, building rules, financing options, and which neighborhoods fit your lifestyle and budget.',
    },
    {
      icon: 'renter',
      title: 'Renters & Relocating Professionals',
      text: 'If you’re moving into the DMV or looking for a new rental, we’ll connect you with condo and apartment options that match your price range, commute, and must-have features—like parking, pets, or in-unit laundry.',
    },
    {
      icon: 'building',
      title: 'Condo Sellers',
      text: 'Thinking about selling your condo? We’ll evaluate your unit, analyze the building and recent sales, and create a strategy that highlights what makes your condo stand out in today’s market.',
    },
    {
      icon: 'investor',
      title: 'Landlords & Investors',
      text: 'Whether you own one condo or several units, we can help you evaluate rents, attract quality tenants, and think through long-term investment potential and exit strategies.',
    },
  ],
};

export const condoBasics = {
  eyebrow: 'Condo Education & Resources',
  titleLead: 'Condo Basics: What You',
  titleAccent: 'Need to Know',
  text: 'If you’re new to condos, this section helps you understand the key pieces that impact your payment, lifestyle, and resale value.',
  cards: [
    {
      icon: 'building',
      title: 'Condo Fees & What They Cover',
      text: 'Learn how monthly fees are calculated, what they typically include (maintenance, amenities, reserves), and how to compare them between buildings.',
    },
    {
      icon: 'checklist',
      title: 'Building Rules & Restrictions',
      text: 'From pet policies to rental rules, each building has its own set of guidelines. We’ll help you understand what to look for before you commit.',
    },
    {
      icon: 'money',
      title: 'Financing a Condo',
      text: 'Some condos have special financing considerations. Get guidance on lenders, building approvals, and programs that can help first-time buyers.',
    },
    {
      icon: 'amenities',
      title: 'Amenities & Lifestyle Fit',
      text: 'Rooftop decks, gyms, parking, and concierge services can add value and convenience. We’ll help you prioritize what matters most to you.',
    },
    {
      icon: 'resale',
      title: 'Resale & Investment Considerations',
      text: 'Understand how building health, reserves, and location can impact your condo’s long-term value and rental potential.',
    },
  ],
  cta: { label: 'Have questions about fees, rules, or financing? Let’s talk.', href: '#rentals-form' },
};

export const condosByArea = {
  eyebrow: 'Explore the',
  titleLead: 'Condos',
  titleAccent: 'By Area',
  text: 'Start exploring condos and rentals in the DMV areas that interest you most.',
  areas: [
    {
      name: 'Washington',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
    },
    {
      name: 'Arlington',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg',
    },
    {
      name: 'Alexandria',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg',
    },
    {
      name: 'Falls Church',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Falls-Chruch-VA-Area-Guide-AUTOx1150.fit.jpeg',
    },
    {
      name: 'Bethesda',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg',
    },
    {
      name: 'Silver Spring',
      image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg',
    },
    {
      name: 'Gables Dupont Circle',
      image: 'https://cdn.pixabay.com/photo/2014/01/14/13/57/building-244500_1280.jpg',
    },
    {
      name: 'Logan Circle',
      image: 'https://cdn.pixabay.com/photo/2017/09/10/18/21/nyc-2736446_1280.jpg',
    },
    {
      name: 'Shaw',
      image: 'https://cdn.pixabay.com/photo/2015/11/06/11/39/terraced-house-1026367_1280.jpg',
    },
    {
      name: 'Adams Morgan',
      image: 'https://cdn.pixabay.com/photo/2020/04/18/21/11/home-5061050_1280.jpg',
    },
  ],
};

export const whyBrandon = {
  eyebrow: 'Why Work With',
  titleLead: 'Brandon',
  titleAccent: 'Wilson',
  points: [
    {
      title: 'Full-Time Focus on Real Estate',
      text: 'Real estate is Brandon’s full-time career—not a side gig. Clients benefit from his responsiveness, market awareness, and hands-on approach to every step of the process.',
    },
    {
      title: 'Local DMV Expertise',
      text: 'Based in the DC metro area and serving Washington, DC, Maryland, and Northern Virginia, Brandon understands local buildings, neighborhoods, and the nuances between different condo markets and association rules.',
    },
    {
      title: 'Owner & Investor Perspective',
      text: 'As someone who has bought, sold, and managed properties himself, Brandon brings an investor’s eye to every decision—helping you think beyond today and plan for long-term value.',
    },
    {
      title: 'Service-First, No-Pressure Approach',
      text: 'Brandon’s mission is to educate, guide, and advocate. You’ll get clear options, honest advice, and a supportive experience from start to finish.',
    },
  ],
  image:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/profile-cropped-1-1100xAUTO.fit.png',
  readyTitleLead: 'Ready to',
  readyTitleAccent: 'Talk Condos',
  readyText: 'Whether you’re buying, renting, selling, or weighing your options, you don’t have to figure it out alone. Let’s talk about your goals, your timeline, and the lifestyle you’re aiming for—then build a clear plan to get you there.',
  readyCta: { label: 'Schedule a Condo Consult', href: '#rentals-form' },
};

export const rentalsFormSection = {
  eyebrow: 'Ask about our rentals',
  titleLead: 'You’re',
  titleAccent: 'Looking For',
  text: 'Share a few details and we’ll send you a custom list of condos or rentals that fit your budget, timeline, and lifestyle.',
};

export const rentalsForm = {
  id: 'dai25dboh653ivfvo870',
  submitAddr: 'https://readdy.ai/api/form/dai25dboh653ivfvo870',
};