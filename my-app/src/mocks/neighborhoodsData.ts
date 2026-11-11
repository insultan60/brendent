// Content for the Neighborhoods hub (/neighborhoods) and the neighborhood
// guides under it (/neighborhoods/<slug>). Copy comes from the client's
// keyword-mapped page briefs; describe homes, transit and places, never the
// people who live there (fair housing).

const ASSETS = 'https://assets.agentfire3.com/uploads/sites/2739';
/** Neighborhood photo from the old site's DC area guide, at card size. */
const photo = (path: string, size = 'AUTOx700') => `${ASSETS}/${path}-${size}.fit.png`;

/** Cities and neighborhoods that have their own guide page. Anything not here
 *  renders without a link rather than pointing at a page that doesn't exist. */
export const guideRoutes: Record<string, string> = {
  'capitol-hill': '/neighborhoods/capitol-hill',
  'shaw-u-street': '/shaw-u-street-corridor',
};

export interface HubNeighborhood {
  slug: string;
  name: string;
  hook: string;
  image: string;
  linkLabel: string;
}

export interface HubCity {
  id: string;
  label: string;
  /** City guide page, when there is one. */
  href?: string;
  image: string;
  intro: string;
  neighborhoods: HubNeighborhood[];
  /** Named neighborhoods without cards yet. Empty means the client hasn't sent the list. */
  names: string[];
}

const dcFallback = `${ASSETS}/2026/03/Washington-DC-Area-guide-500x360.jpg`;

export const hub = {
  path: '/neighborhoods',
  title: 'Washington DC Neighborhoods Guide | BW Metro Properties',
  description:
    'Compare Washington DC neighborhoods by home type, Metro access and local landmarks. Then browse homes for sale with Brandon Wilson.',
  ogTitle: "Washington DC Neighborhoods: A Home Buyer's Guide",
  ogDescription: 'Compare DC, Northern Virginia and Maryland neighborhoods, then see homes for sale in each.',
  hero: {
    eyebrow: 'Neighborhood Guide',
    h1: 'Washington DC Neighborhoods and Nearby DMV Areas',
    text: 'Choosing a neighborhood often decides more about your daily life than the house itself. This guide covers Washington DC neighborhoods first, then the Northern Virginia and Maryland areas next door. Pick a neighborhood below to see homes for sale, Metro access and local details.',
    image: `${ASSETS}/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg`,
    imageAlt: 'Washington, DC rowhouse streets and skyline, the starting point of the BW Metro Properties neighborhood guide',
  },
  start: {
    title: 'Start With Washington, DC',
    text: 'Washington DC is the primary market here, so these neighborhoods come first. Each card links to a full neighborhood guide with live listings.',
  },
  cities: [
    {
      id: 'washington-dc',
      label: 'Washington, DC',
      href: '/washington',
      image: dcFallback,
      intro: 'Row houses, condos and historic districts across the District, served by every Metro line.',
      neighborhoods: [
        { slug: 'georgetown', name: 'Georgetown', hook: 'Federal-style townhomes, the C&O Canal and the M Street shopping corridor', image: dcFallback, linkLabel: 'Georgetown homes for sale' },
        { slug: 'capitol-hill', name: 'Capitol Hill', hook: 'Brick row houses, Eastern Market and Barracks Row near four Metro stations', image: photo('2026/07/capitol-hill-1'), linkLabel: 'Capitol Hill homes for sale' },
        { slug: 'columbia-heights', name: 'Columbia Heights', hook: 'Row houses and condos beside the Green and Yellow Line station', image: photo('2026/06/columbia-heights-1'), linkLabel: 'Columbia Heights homes for sale' },
        { slug: 'dupont-circle', name: 'Dupont Circle', hook: 'Converted row-house condos around the Red Line station', image: photo('2026/06/dupont-circle'), linkLabel: 'Dupont Circle condos for sale' },
        { slug: 'adams-morgan', name: 'Adams Morgan', hook: 'Pre-war apartments and row houses along 18th Street', image: photo('2026/06/adams-morgan-1'), linkLabel: 'Adams Morgan homes for sale' },
        { slug: 'logan-circle', name: 'Logan Circle', hook: 'Victorian row houses on and around the 14th Street corridor', image: photo('2026/06/logan-circle-1'), linkLabel: 'Logan Circle homes for sale' },
        { slug: 'shaw-u-street', name: 'Shaw / U Street', hook: 'Row houses and newer condos near the Green and Yellow lines', image: photo('2026/06/shaw-u-street'), linkLabel: 'Shaw homes for sale' },
        { slug: 'navy-yard', name: 'Navy Yard', hook: 'Newer condo buildings near Nationals Park and the Anacostia riverfront', image: photo('2026/07/navy-yard-1'), linkLabel: 'Navy Yard condos for sale' },
      ],
      names: [],
    },
    {
      id: 'alexandria',
      label: 'Alexandria, VA',
      href: '/alexandria',
      image: `${ASSETS}/2026/03/Alexandria-VA-Area-Guide-500x360.jpeg`,
      intro: 'Historic townhomes in Old Town, detached homes in Del Ray and newer construction at Potomac Yard.',
      neighborhoods: [],
      names: ['Old Town', 'Del Ray', 'Carlyle', 'Potomac Yard'],
    },
    {
      id: 'arlington',
      label: 'Arlington, VA',
      href: '/arlington',
      image: `${ASSETS}/2026/03/Arlington-VA-Area-Guide-500x360.jpeg`,
      intro: 'Condo and townhome corridors along the Orange, Silver, Blue and Yellow lines.',
      neighborhoods: [],
      names: ['Clarendon', 'Ballston', 'Rosslyn', 'Crystal City'],
    },
    {
      id: 'bethesda',
      label: 'Bethesda, MD',
      href: '/bethesda',
      image: `${ASSETS}/2026/03/Bethesda-Row-Area-Guide-500x360.jpg`,
      intro: 'Red Line access, a busy downtown and residential streets just over the DC line.',
      neighborhoods: [],
      names: [],
    },
    {
      id: 'silver-spring',
      label: 'Silver Spring, MD',
      href: '/silver-spring',
      image: `${ASSETS}/2026/03/Silver-Spring-MD-Area-Guide-500x360.jpg`,
      intro: 'A Red Line downtown with condos, plus single-family streets further out.',
      neighborhoods: [],
      names: [],
    },
    {
      id: 'fort-washington',
      label: 'Fort Washington, MD',
      image: `${ASSETS}/2026/04/fort-washington-500x360.png`,
      intro: 'Residential streets near Fort Washington Park and the Potomac River.',
      neighborhoods: [],
      names: [],
    },
  ] satisfies HubCity[],
  howTo: {
    title: 'How to Find the Best Neighborhoods in Washington DC for Your Plan',
    intro:
      'No single ranking works for every buyer. A neighborhood that fits a short Metro commute may not fit someone who wants a yard. So instead of naming a winner, start with what you need from the home and the location.',
    points: [
      { title: 'Home type', text: 'Row houses dominate older areas such as Capitol Hill, Logan Circle and Columbia Heights. Condos are common in Dupont Circle, Navy Yard and the high-rise corridors in Arlington. Detached homes show up more in parts of Alexandria and in Maryland.' },
      { title: 'Transit and commute', text: 'Metro has six lines, and the ones you can reach from your door shape your commute. Georgetown, Adams Morgan and Logan Circle have no Metro station inside the neighborhood, so a walk or short ride is part of the trip. Check the actual walk from each address before you commit.' },
      { title: 'Budget and ownership costs', text: 'Prices vary by block, size and condition, not just by neighborhood name. Condo fees, property taxes and parking add to the monthly cost. Brandon can build a side-by-side cost comparison for any two areas.' },
      { title: 'Daily life', text: 'Think about where you will buy groceries, walk the dog or meet friends. Landmarks such as Eastern Market, the C&O Canal towpath and Rock Creek Park give each area its own routine.' },
    ],
  },
  compare: {
    title: 'Compare Washington DC Neighborhoods at a Glance',
    note: 'Metro lines and service patterns change. Confirm current routes on the WMATA site before planning a commute.',
    rows: [
      ['Capitol Hill', 'DC', 'Row houses, condos', 'Eastern Market, Potomac Ave, Capitol South, Stadium-Armory (Blue, Orange, Silver)', 'Eastern Market, Barracks Row, Lincoln Park'],
      ['Georgetown', 'DC', 'Townhomes, some condos', 'No station in the neighborhood. Foggy Bottom-GWU (Blue, Orange, Silver) is the closest on many routes', 'C&O Canal, M Street, Georgetown Waterfront'],
      ['Dupont Circle', 'DC', 'Row-house condos', 'Dupont Circle (Red)', 'Dupont Circle park, Embassy Row nearby'],
      ['Logan Circle', 'DC', 'Row houses, condos', 'No station inside. U Street (Green, Yellow) or Dupont Circle (Red)', 'Logan Circle park, 14th Street corridor'],
      ['Shaw / U Street', 'DC', 'Row houses, condos', 'Shaw-Howard U, U Street (Green, Yellow)', 'Howard Theatre, Convention Center area'],
      ['Columbia Heights', 'DC', 'Row houses, condos', 'Columbia Heights (Green, Yellow)', 'DC USA shopping center, Meridian Hill Park nearby'],
      ['Adams Morgan', 'DC', 'Pre-war apartments, row houses', 'No station inside. Woodley Park (Red) or U Street (Green, Yellow)', '18th Street corridor'],
      ['Navy Yard', 'DC', 'Condos, apartment-style buildings', 'Navy Yard-Ballpark (Green)', 'Nationals Park, Yards Park'],
      ['Old Town', 'Alexandria, VA', 'Historic townhomes, condos', 'King Street-Old Town (Blue, Yellow)', 'King Street, Torpedo Factory Art Center, waterfront'],
      ['Del Ray', 'Alexandria, VA', 'Detached homes, townhomes', 'Braddock Road or Potomac Yard (Blue, Yellow), depending on the block', 'Mount Vernon Avenue shops'],
      ['Potomac Yard', 'Alexandria, VA', 'Townhomes, condos', 'Potomac Yard (Blue, Yellow)', 'Newer construction, retail area'],
      ['Clarendon', 'Arlington, VA', 'Condos, townhomes', 'Clarendon (Orange, Silver)', 'Wilson Boulevard corridor'],
      ['Ballston', 'Arlington, VA', 'Condos', 'Ballston-MU (Orange, Silver)', 'Ballston Quarter'],
      ['Rosslyn', 'Arlington, VA', 'High-rise condos', 'Rosslyn (Blue, Orange, Silver)', 'Views across the Potomac, Key Bridge'],
      ['Crystal City', 'Arlington, VA', 'Condos', 'Crystal City (Blue, Yellow)', 'National Landing, close to Reagan National Airport'],
    ],
  },
  beyond: {
    title: 'Explore DC Metro Real Estate Beyond the District',
    text: 'Many buyers compare DC with the nearby suburbs before they choose. The same Metro system and the same search tools cover all of them, so you can look at DC metro real estate in one place. Brandon is licensed in DC, Virginia and Maryland.',
    vip: 'Looking for homes for sale in the DC metro area across several cities at once? Set up a VIP Home Search and Brandon will send matches as they list.',
  },
  va: {
    title: 'Buying With a VA Loan in the DMV',
    text: 'A VA loan works in DC, Virginia and Maryland, but the rules for condos and property types can differ by building. Brandon works with veterans and active-duty buyers, and he can check a building’s VA status before you tour.',
  },
  faqTitle: 'Washington DC Neighborhoods FAQ',
  faqs: [
    { q: 'How many neighborhoods does DC have?', a: 'There is no single official count. DC has 8 wards, and the city’s planning office groups areas into neighborhood clusters, but everyday names and borders differ by source. We use common local names and note where two areas overlap.' },
    { q: 'Are DC, Virginia and Maryland different to buy in?', a: 'Yes. Transfer taxes, closing costs, property tax systems and condo rules differ between DC, Virginia and Maryland. Brandon can walk you through the main differences for the two or three areas you are comparing.' },
    { q: 'Can I search by Metro line instead of by neighborhood?', a: 'Yes. Tell Brandon the stations or lines you want within a short walk, and he can build a search around them. This works well if your commute matters more than the neighborhood name.' },
    { q: 'What if my budget does not fit my first-choice neighborhood?', a: 'Look at the next area along the same Metro line or the same road. Hill East beside Capitol Hill, or Shaw next to Logan Circle, can work differently on price and home size. We compare them side by side on request.' },
    { q: 'Do property taxes differ between DC and the Virginia suburbs?', a: 'Each jurisdiction sets its own rates and rules, and some offer deductions for owner-occupants. Check current figures with the DC Office of Tax and Revenue and with the Arlington and Alexandria tax offices before you finalize a budget.' },
  ],
  cta: {
    title: 'Ready to Compare Washington DC Neighborhoods in Person?',
    text: 'Tell Brandon your budget, your commute and the home type you want. He will narrow the list, set up tours and show you the areas that fit.',
  },
};

export interface GuideSection {
  title: string;
  paragraphs: string[];
  /** Bold-led sub-points, e.g. "Capitol Hill condos for sale. Many condos…" */
  points?: { title: string; text: string }[];
}

export interface NeighborhoodGuide {
  slug: string;
  name: string;
  city: string;
  cityHref: string;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  hero: { h1: string; text: string; image: string; imageAlt: string; listingsLabel: string };
  facts: { label: string; value: string }[];
  about: GuideSection;
  listings: { title: string; text: string; zips: string[]; viewAllHref: string };
  market: GuideSection;
  sections: GuideSection[];
  agent: GuideSection;
  nearby: { name: string; text: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  cta: { title: string; text: string; button: string };
}

export const capitolHill: NeighborhoodGuide = {
  slug: 'capitol-hill',
  name: 'Capitol Hill',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Capitol Hill Homes for Sale | Capitol Hill DC Guide',
  description:
    'Capitol Hill DC guide: row houses, condos, Metro and Eastern Market. Browse Capitol Hill real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Capitol Hill, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Capitol Hill real estate near Eastern Market and Barracks Row, with a licensed DC Realtor.',
  hero: {
    h1: 'Capitol Hill, DC: Neighborhood Guide and Homes for Sale',
    text: 'Capitol Hill is a Washington, DC neighborhood of brick row houses, shaded streets and a weekend market that has run since 1873. This guide covers what Capitol Hill, DC is like, what the homes look like, and what to know if you are looking at Capitol Hill homes for sale.',
    image: photo('2026/07/capitol-hill-1', 'AUTOx1150'),
    imageAlt: 'Brick row houses on a tree-lined street in the Capitol Hill neighborhood of Washington, DC',
    listingsLabel: 'See Capitol Hill Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 6)' },
    { label: 'ZIP codes', value: '20002 and 20003' },
    { label: 'Main streets', value: '8th Street SE (Barracks Row), Pennsylvania Avenue SE, East Capitol Street, H Street NE' },
    { label: 'Metro stations', value: 'Eastern Market, Potomac Avenue, Capitol South and Stadium-Armory (Blue, Orange and Silver lines), plus Union Station (Red Line)' },
    { label: 'Parks', value: 'Lincoln Park, Stanton Park, Folger Park' },
    { label: 'Typical homes', value: 'Victorian and Federal-style row houses, converted townhomes, small condo buildings' },
    { label: 'Boundaries', value: 'These vary by source, so we use the common local definition: the area east of the U.S. Capitol toward the Anacostia River' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'What Is Capitol Hill, DC?',
    paragraphs: [
      'Capitol Hill is the residential neighborhood around the U.S. Capitol, and it takes its name from the rise the Capitol sits on, once called Jenkins Hill. The name covers a large area east of the Capitol toward the Anacostia River, with different pockets that locals call by their own names, such as Barracks Row and the Lincoln Park area.',
      'People often mix this up with “the Hill,” the news shorthand for Congress. This page covers the neighborhood where people live, not the congressional offices.',
      'Several landmarks anchor the area. The Marine Barracks on 8th Street SE dates to 1801 and Union Station opened in 1907. Lincoln Park holds the Emancipation Memorial, dedicated in 1876.',
    ],
  },
  listings: {
    title: 'Browse Capitol Hill Homes for Sale',
    text: 'Listings update throughout the day. Want a heads-up before a home goes live? Join the VIP Home Search.',
    zips: ['20002', '20003'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Capitol Hill Real Estate Market',
    paragraphs: [
      'Capitol Hill is one of the larger historic residential areas in DC, and its housing stock sells at a wide range of prices. A one-bedroom condo and a renovated corner row house can sit a few blocks apart and differ by well over a million dollars.',
      'Numbers shift by block, size and condition, so a single median never tells the full story. Brandon can pull a custom comparison for the exact street you are considering.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Capitol Hill',
      paragraphs: [
        'The main draw is the row house. Many were built in the late 1800s and early 1900s in Victorian and Federal styles, with brick fronts, bay windows and small front gardens or porches. Most blocks stay low-rise, which gives the streets their open, tree-covered look.',
      ],
      points: [
        { title: 'Capitol Hill row houses and townhomes', text: 'These range from narrow two-bedroom homes to wide corner properties with finished basements and rear additions. Capitol Hill townhomes for sale often include a back patio or a parking pad off the alley, though not all do. Check this early, because off-street parking changes both daily life and resale value.' },
        { title: 'Capitol Hill condos for sale', text: 'Many condos sit inside converted row houses, with two to six units per building. Larger condo buildings line parts of Pennsylvania Avenue SE and the blocks near Capitol South. Condo fees, reserve funds and building rules vary, so we review the documents before you make an offer.' },
        { title: 'Small multi-unit buildings', text: 'These come up now and then and can appeal to investors. DC has its own rental licensing and tenant rules, so check them with the District before you make an offer.' },
      ],
    },
    {
      title: 'Living in Capitol Hill',
      paragraphs: [
        'Eastern Market anchors the neighborhood. The enclosed market hall opened in 1873 and sells produce, meat, bread and flowers, and the weekend market outside adds crafts and vendors.',
        'Barracks Row runs along 8th Street SE from the Marine Barracks toward the Southeast Freeway. It has a mix of restaurants, coffee shops and small stores, and many are within a short walk of Eastern Market Metro.',
        'For green space, Lincoln Park is the largest on the Hill, with wide lawns and a playground. Stanton Park and Folger Park are smaller and sit closer to the Capitol side of the neighborhood. The Library of Congress, the Supreme Court and the Folger Shakespeare Library are all within walking distance of many homes.',
        'Grocery options include shops at Eastern Market and larger stores within a short drive or ride. Many people on the Hill run errands on foot, though that depends on which block you pick.',
      ],
    },
    {
      title: 'Getting Around Capitol Hill',
      paragraphs: [
        'Four Metro stations serve the area: Eastern Market, Potomac Avenue, Capitol South and Stadium-Armory. All four sit on the Blue, Orange and Silver lines. The Blue Line also reaches Reagan National Airport without a transfer.',
        'Union Station, a short ride or walk from the north side of the neighborhood, connects to the Red Line, Amtrak, MARC and VRE trains. That helps if you commute to Maryland or Northern Virginia.',
        'Driving is possible, but street parking needs planning. DC’s Residential Parking Permit program covers most blocks, and rules differ by zone. Check the DDOT website for current requirements before you commit to a home without off-street parking.',
      ],
    },
    {
      title: 'Schools and Services',
      paragraphs: [
        'School assignment in DC depends on your address and on lottery options for charter and out-of-boundary schools. Use the official DCPS boundary tool and My School DC to check any address you are considering. We do not rank schools, since the official data changes each year.',
        'For public services, review the Metropolitan Police Department’s crime map and the DC Office of Tax and Revenue for property tax details. DC offers a homestead deduction for owner-occupants, and the first-time buyer program HPAP may apply to some buyers. Confirm current rules with the District.',
      ],
    },
  ],
  agent: {
    title: 'Working With a Capitol Hill Real Estate Agent',
    paragraphs: [
      'Looking for a Capitol Hill real estate agent? Brandon Wilson is a licensed Realtor in DC, Virginia and Maryland, so he can compare Capitol Hill with nearby areas on either side of the river.',
    ],
  },
  nearby: [
    { name: 'Hill East', text: 'Row houses closer to the Anacostia River' },
    { name: 'Navy Yard', text: 'Newer condo buildings near the waterfront' },
    { name: 'Capitol Riverfront', text: 'Apartment-style living along the river' },
    { name: 'H Street / Atlas District', text: 'Row houses and nightlife east of Union Station' },
  ],
  faqTitle: 'Capitol Hill FAQ',
  faqs: [
    { q: 'Do I need approval to renovate a Capitol Hill row house?', a: 'Much of the area sits inside the Capitol Hill Historic District. Exterior changes that the public can see, such as windows, facades and rooflines, usually need review from DC’s Historic Preservation Office. Interior work generally does not, but you should confirm with the District before you plan a project.' },
    { q: 'How does parking work if a home has no garage or pad?', a: 'Most blocks use the Residential Parking Permit program, which gives permit holders priority on their zone’s streets. Visitor passes exist, but they have limits. Ask the seller or agent how current owners park, and test the block at different times of day.' },
    { q: 'Can I use a VA loan to buy a Capitol Hill condo?', a: 'Yes, but the condo building generally needs VA approval. Brandon can check a building’s status before you tour, which saves time if you plan to use VA financing.' },
    { q: 'What is the difference between Capitol Hill and Hill East?', a: 'Hill East sits east of the main Capitol Hill grid, closer to the Anacostia River and the old hospital grounds. The two share similar row house styles, but prices, block layouts and Metro access differ. We compare them side by side on request.' },
    { q: 'How close is Capitol Hill to the National Mall and downtown?', a: 'The Capitol and the National Mall sit at the western edge of the neighborhood. Blocks near Capitol South are within walking distance of the Mall, while blocks farther east rely on Metro or bus.' },
    { q: 'What should I check before buying an older row house?', a: 'Start with the roof, the basement for moisture, and the plumbing and electrical systems. A home inspector who knows pre-war DC houses is worth the cost. Ask for permits on any past additions.' },
  ],
  cta: {
    title: 'Ready to Look at Capitol Hill Homes for Sale?',
    text: 'Whether you want a condo near Eastern Market or a row house near Lincoln Park, Brandon can narrow the search to your budget and commute. Call or send a message to talk with a Capitol Hill real estate agent.',
    button: 'Search Capitol Hill Homes',
  },
};

export const neighborhoodGuides: NeighborhoodGuide[] = [capitolHill];
