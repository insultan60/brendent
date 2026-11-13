// Content for the Neighborhoods hub (/neighborhoods) and the neighborhood
// guides under it (/neighborhoods/<slug>). Copy comes from the client's
// keyword-mapped page briefs; describe homes, transit and places, never the
// people who live there (fair housing).

import { ballston, clarendon, downtownBethesda, downtownSilverSpring, potomacYard, rosslyn } from './neighborhoodGuidesVaMd';

const ASSETS = 'https://assets.agentfire3.com/uploads/sites/2739';
/** Neighborhood photo from the old site's DC area guide, at card size. */
const photo = (path: string, size = 'AUTOx700') => `${ASSETS}/${path}-${size}.fit.png`;

/** Cities and neighborhoods that have their own guide page. Anything not here
 *  renders without a link rather than pointing at a page that doesn't exist. */
export const guideRoutes: Record<string, string> = {
  'capitol-hill': '/neighborhoods/capitol-hill',
  'shaw-u-street': '/neighborhoods/shaw-u-street',
  shaw: '/neighborhoods/shaw-u-street',
  'del-ray': '/neighborhoods/del-ray',
  'columbia-heights': '/neighborhoods/columbia-heights',
  clarendon: '/neighborhoods/clarendon',
  'potomac-yard': '/neighborhoods/potomac-yard',
  rosslyn: '/neighborhoods/rosslyn',
  ballston: '/neighborhoods/ballston',
  'downtown-bethesda': '/neighborhoods/downtown-bethesda',
  'downtown-silver-spring': '/neighborhoods/downtown-silver-spring',
  carlyle: '/alexandria#carlyle',
  georgetown: '/neighborhoods/georgetown',
  'old-town': '/neighborhoods/old-town-alexandria',
  'dupont-circle': '/neighborhoods/dupont-circle',
  'adams-morgan': '/neighborhoods/adams-morgan',
  'national-landing': '/neighborhoods/national-landing',
  'crystal-city': '/neighborhoods/national-landing',
  'old-town-alexandria': '/neighborhoods/old-town-alexandria',
  'logan-circle': '/neighborhoods/logan-circle',
  'navy-yard': '/neighborhoods/navy-yard',
};

/** Hub/nearby names → guide route, for plain-name lists such as "Old Town". */
export const routeForName = (name: string) => guideRoutes[name.toLowerCase().replace(/[^a-z]+/g, '-').replace(/-$/, '')];

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
        { slug: 'georgetown', name: 'Georgetown', hook: 'Federal-style townhomes, the C&O Canal and the M Street shopping corridor', image: photo('2026/06/georgetown'), linkLabel: 'Georgetown homes for sale' },
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
      names: ['Downtown Bethesda'],
    },
    {
      id: 'silver-spring',
      label: 'Silver Spring, MD',
      href: '/silver-spring',
      image: `${ASSETS}/2026/03/Silver-Spring-MD-Area-Guide-500x360.jpg`,
      intro: 'A Red Line downtown with condos, plus single-family streets further out.',
      neighborhoods: [],
      names: ['Downtown Silver Spring'],
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
  /** Numbered checklist, with an optional lead-in and closing line. */
  steps?: { lead: string; items: string[]; after?: string };
  /** Comparison table; the first header is the blank corner cell. */
  table?: { headers: string[]; rows: string[][] };
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
  listings: { title: string; text: string; state: 'DC' | 'VA' | 'MD'; zips: string[]; viewAllHref: string };
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
    state: 'DC',
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
    text: 'Whether you want a condo near Eastern Market or a row house near Lincoln Park, Brandon can narrow the search to your budget and commute.',
    button: 'Search Capitol Hill Homes',
  },
};

export const georgetown: NeighborhoodGuide = {
  slug: 'georgetown',
  name: 'Georgetown',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Georgetown DC Homes for Sale | Georgetown Neighborhood Guide',
  description:
    'Georgetown DC guide: historic row houses, condos and the waterfront. Browse Georgetown DC real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Georgetown, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Historic row houses, condos and waterfront living, with a licensed DC Realtor.',
  hero: {
    h1: 'Georgetown, DC: Neighborhood Guide and Homes for Sale',
    text: 'Georgetown is a Washington, DC neighborhood that was a port town before the capital existed, and it still runs on its own rules: a federal review law for exterior work and no Metro station of its own. This guide covers Georgetown, DC in practical terms, from its history to the specific issues that come up when you buy here. If you are looking at Georgetown DC homes for sale, start with these details before you tour.',
    image: photo('2026/06/georgetown', 'AUTOx1150'),
    imageAlt: 'Brick row houses on a hillside street in Georgetown, Washington, DC',
    listingsLabel: 'See Georgetown Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 2, ANC 2E)' },
    { label: 'ZIP code', value: '20007' },
    { label: 'Main corridors', value: 'M Street NW and Wisconsin Avenue NW' },
    { label: 'Waterfront', value: 'Georgetown Waterfront Park along the Potomac, and Washington Harbour at K Street' },
    { label: 'Transit', value: 'No Metro station in the neighborhood. Foggy Bottom-GWU and Rosslyn are the closest.' },
    { label: 'Landmarks', value: 'Old Stone House, the C&O Canal, Georgetown University' },
    { label: 'Typical homes', value: 'Brick row houses in Federal and Georgian styles, condos, some larger detached houses' },
    { label: 'Rules', value: 'Exterior work is reviewed under the Old Georgetown Act of 1950' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'A Port Town Older Than the Capital',
    paragraphs: [
      'Georgetown was founded in 1751 as a tobacco port on the Potomac, about 40 years before the City of Washington was laid out. Congress annexed it into Washington in 1871.',
      'Some of that history is still standing. The Old Stone House on M Street dates to 1765 and is generally cited as the oldest unchanged building in DC.',
      'The Chesapeake and Ohio Canal runs through the neighborhood and is now a National Park Service trail. It stopped operating as a canal in 1924, and a severe flood in 1936 led to its sale to the National Park Service.',
      'The waterfront stayed industrial well into the twentieth century. Today it is a park, and the shopping and dining streets of M Street and Wisconsin Avenue sit a few blocks inland.',
    ],
  },
  listings: {
    title: 'Browse Georgetown DC Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20007'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Georgetown DC Real Estate Market',
    paragraphs: [
      'Georgetown’s housing stock ranges from small row houses on narrow lots to large detached properties, so a single median says little about any one block. Prices also depend heavily on size, outdoor space and parking.',
      'For a custom comparison on a specific street, request a Georgetown price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Georgetown',
      paragraphs: [],
      points: [
        { title: 'Historic row houses', text: 'Brick Federal and Georgian row houses define the older streets, many with steep front steps, small rear gardens and narrow floor plans. Check the stairs, ceiling heights and storage against how you plan to live in the house.' },
        { title: 'Georgetown DC condos for sale', text: 'Condos appear in converted historic buildings and in larger buildings near the commercial streets and the waterfront. Fees, reserves and parking vary by building, so we review the documents before you make an offer.' },
        { title: 'Larger houses on bigger lots', text: 'Farther from M Street, some properties have more land and off-street parking. Those are the exception, and they price accordingly.' },
      ],
    },
    {
      title: 'Buying in a Historic District: What the Old Georgetown Act Means for You',
      paragraphs: [
        'Georgetown is a National Historic Landmark district, and the Old Georgetown Act of 1950 gives the U.S. Commission of Fine Arts authority to review most exterior construction here. Its advisory panel, the Old Georgetown Board, does the detailed review before DC issues a permit.',
        'In practice, exterior changes that people can see from a street or alley need approval before work starts. DC’s Historic Preservation Office separately reviews exterior work that is not visible. Interior work is generally outside that process, but normal DC permits still apply.',
      ],
      steps: {
        lead: 'Before you buy a house you plan to change, we suggest four steps:',
        items: [
          'Ask for the permit history and any approved plans for the property.',
          'Tell Brandon what you want to build, so he can check feasibility before you write an offer.',
          'Ask the Commission of Fine Arts staff for current review timelines, then build that time into your schedule.',
          'Consider whether a renovation contingency fits the contract.',
        ],
      },
    },
    {
      title: 'Getting Around Georgetown Without a Metro Station',
      paragraphs: [
        'Georgetown has no Metrorail station, which shapes how people get to work. The nearest Metro stops are Foggy Bottom-GWU on the Blue, Orange and Silver lines, and Rosslyn across the Key Bridge in Virginia.',
        'Metrobus and DC Circulator service run through the neighborhood on M Street and Wisconsin Avenue, though routes change, so check current service. The Capital Crescent Trail starts in Georgetown and runs toward Silver Spring, which gives cyclists a car-free route out of the neighborhood.',
        'Many residents drive, and many older houses have no off-street parking. Ask about a garage or pad, check the block’s permit zone with DDOT, and test the street on a weekend evening.',
      ],
    },
    {
      title: 'Living in Georgetown',
      paragraphs: [
        'The commercial center is the corner of Wisconsin Avenue and M Street, with shops, restaurants and the Georgetown Park building. The Washington Harbour complex on K Street faces the river, and Georgetown Waterfront Park runs along the Potomac from 31st Street to the Key Bridge.',
        'The C&O Canal towpath runs just south of M Street and gives a flat walking or running route. Georgetown University’s main campus sits on the hill above the river, and Dumbarton Oaks, Tudor Place and the Volta Bureau are among the other landmarks.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Georgetown Experience',
    paragraphs: [
      'Brandon Wilson holds licenses in DC, Virginia and Maryland, which helps if you are weighing Georgetown against Arlington or Alexandria across the river. If you want a Georgetown real estate agent who can compare both sides of the Potomac, start here.',
    ],
  },
  nearby: [
    { name: 'West End / Foggy Bottom', text: 'To the southeast, with the closest Metro station' },
    { name: 'Dupont Circle', text: 'Across Rock Creek to the east' },
    { name: 'Glover Park', text: 'To the north along Wisconsin Avenue' },
    { name: 'Foxhall and Palisades', text: 'To the northwest' },
  ],
  faqTitle: 'Georgetown FAQ',
  faqs: [
    { q: 'Does the Old Georgetown Act apply to interior renovations?', a: 'No. The act focuses on exterior features visible from public streets and alleys. DC’s normal building permits still apply to interior work, so confirm the rules for your project before you begin.' },
    { q: 'How long does Georgetown’s exterior review take?', a: 'It depends on the project and the review calendar. Ask the Commission of Fine Arts staff for current timelines before you set a renovation schedule.' },
    { q: 'Where does Georgetown end?', a: 'Sources draw the borders differently, but Rock Creek separates it from Dupont Circle on the east, and Glover Park lies to the north. Foxhall and Palisades sit to the northwest, and Foggy Bottom is to the southeast.' },
    { q: 'What should I check on a home near the river or the canal?', a: 'Look up the property’s FEMA flood zone and ask about flood insurance, since costs can change the monthly budget. The canal had severe flooding in 1936, and older basements near the water deserve a careful inspection.' },
    { q: 'Can I use a VA loan for a Georgetown home?', a: 'Yes, a VA loan can be used in DC, but the amount you can borrow depends on your entitlement, income and the appraisal. If a home’s price is above the standard conforming loan limit, ask a lender early about VA or jumbo options.' },
  ],
  cta: {
    title: 'Ready to Look at Georgetown DC Homes for Sale?',
    text: 'Tell Brandon whether you plan to renovate, how you want to commute without a Metro station, and whether you need parking. He will build the search around those answers.',
    button: 'Search Georgetown Homes',
  },
};

export const oldTownAlexandria: NeighborhoodGuide = {
  slug: 'old-town-alexandria',
  name: 'Old Town Alexandria',
  city: 'Alexandria, VA',
  cityHref: '/alexandria',
  title: 'Old Town Alexandria Homes for Sale | Neighborhood Guide',
  description:
    'Old Town Alexandria guide: historic townhomes, condos, Metro and the waterfront. Browse Old Town Alexandria real estate and homes for sale.',
  ogTitle: 'Old Town Alexandria: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Historic townhomes and condos near King Street and the Potomac waterfront, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Old Town Alexandria: Neighborhood Guide and Homes for Sale',
    text: 'Old Town Alexandria is the historic core of the independent city of Alexandria, Virginia, on the Potomac River just south of Washington, DC. It has its own city government, its own tax rate and its own review board for exterior changes. This guide covers Old Town Alexandria in practical terms, with the details that matter when you compare Old Town Alexandria homes for sale.',
    image: `${ASSETS}/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg`,
    imageAlt: 'Brick townhomes on a cobbled street in Old Town Alexandria, Virginia',
    listingsLabel: 'See Old Town Listings',
  },
  facts: [
    { label: 'City', value: 'Alexandria, Virginia (an independent city)' },
    { label: 'ZIP code', value: '22314, with parts of 22301' },
    { label: 'Main street', value: 'King Street, running from the Metro station to the waterfront' },
    { label: 'Metro', value: 'King Street-Old Town (Blue and Yellow lines), next to Amtrak and VRE' },
    { label: 'Waterfront', value: 'Waterfront Park, Founders Park and the Torpedo Factory area' },
    { label: 'Typical homes', value: 'Brick townhomes in Federal, Georgian and Victorian styles, condos, some detached houses' },
    { label: 'Rules', value: 'Exterior work is reviewed by the city’s Board of Architectural Review in the Old and Historic Alexandria District' },
    { label: 'Edges', value: 'Sources draw the borders differently, so treat them as approximate' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'A Colonial Port With Its Own Rulebook',
    paragraphs: [
      'Alexandria was founded in 1749 as a port on the Potomac, and it was part of the District of Columbia until Congress returned it to Virginia in 1846. That history explains why Old Town feels separate from DC: it follows Virginia law and city rules, not the District’s.',
      'The Old and Historic Alexandria District was created in 1946, and a second local district, Parker-Gray, covering the Uptown area, was added in 1984. Only those two districts are locally regulated.',
      'Most of the historic buildings you see along King Street and the streets near the waterfront fall inside the Old and Historic Alexandria District. That matters if you plan to change the outside of a home.',
    ],
  },
  listings: {
    title: 'Browse Old Town Alexandria Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'VA',
    zips: ['22314', '22301'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Old Town Alexandria Real Estate Market',
    paragraphs: [
      'Old Town’s housing mix runs from small historic townhomes to condos and larger detached houses, so one median never describes a specific street. Prices depend on location relative to the waterfront, size, condition and parking.',
      'For a custom comparison on a specific block, request an Old Town price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Old Town Alexandria',
      paragraphs: [],
      points: [
        { title: 'Historic townhomes', text: 'Brick townhomes dominate the older streets. Many are narrow, with several floors, small rear gardens or courtyards, and original details that the review board expects to be kept.' },
        { title: 'Old Town Alexandria condos for sale', text: 'Options range from a few units inside a converted historic building to larger buildings with elevators and garages. Buildings near the river raise flood insurance and building-system questions that inland ones may not, so ask the association about both. Request the budget, reserves and rules early.' },
        { title: 'Detached houses', text: 'Some Old Town blocks have freestanding houses, usually on narrow lots. They are less common than townhomes.' },
      ],
    },
    {
      title: 'Buying in the Old and Historic Alexandria District',
      paragraphs: [
        'If a property sits in the Old and Historic Alexandria District, exterior changes need approval from the city’s Board of Architectural Review before work starts. That covers changes visible from the public right of way, and the board also acts on demolition. Routine items can need approval too, so ask city staff before you assume something is exempt.',
        'Only two districts are locally regulated: Old and Historic Alexandria and Parker-Gray. Rosemont is not regulated by the board, even though it is also historic.',
        'Approvals do not last forever. A BAR approval can expire if work does not begin within a set period, and the city has been revising its design guidelines, so check the current rules.',
      ],
      steps: {
        lead: 'Before you buy a home you plan to change, we suggest:',
        items: [
          'Confirm the property’s district using the city’s historic district map, not the listing description.',
          'Ask for the permit history and any past approvals.',
          'Contact BAR staff before you write an offer, if the change matters to your decision.',
          'Build the review calendar into your renovation timeline.',
        ],
      },
    },
    {
      title: 'Waterfront Flooding: What Buyers Should Know',
      paragraphs: [
        'Parts of Old Town near the river flood when high tides and storms combine. The area around lower King Street, Union Street and The Strand is the most affected.',
        'According to city data reported in October 2026, the waterfront saw 227 flooding events at the Prince Street level between January and October 2025, compared with a 20-year average of 145.',
        'The city has a Waterfront Flood Mitigation Project under way. After the National Park Service declined a pump station at Waterfront Park earlier in 2026, City Council approved an alternate plan in June 2026 that relies on an upgraded gravity storm sewer system. The plans are still moving through review, so details can change.',
      ],
      steps: {
        lead: 'If a home is near the waterfront, we suggest:',
        items: [
          'Look up the property’s FEMA flood zone and get a flood insurance quote before you make an offer.',
          'Ask the seller about past water in basements or ground floors.',
          'Check the city’s flood mitigation project page for the latest status.',
        ],
        after: 'Blocks farther from the river are not affected in the same way, but the same questions are worth asking on any older basement.',
      },
    },
    {
      title: 'Taxes and Fees in Alexandria, Virginia',
      paragraphs: [
        'Alexandria sets its own real estate tax. The calendar year 2026 rate is $1.135 per $100 of assessed value, and the city assesses property at 100% of market value as of January 1 each year.',
        'The city also bills a refuse fee and a stormwater utility fee, separate from the real estate tax. Check the current amounts with the city when you build your monthly budget.',
        'Veterans with a 100% permanent and total service-connected disability, certified by the VA, may qualify for a full real estate tax exemption on their primary city residence. Brandon works with VA buyers and can point you to the city’s application process.',
      ],
    },
    {
      title: 'Getting Around Old Town Alexandria',
      paragraphs: [
        'The King Street-Old Town station is on the Blue and Yellow lines and sits beside Alexandria’s Amtrak and VRE station. The Yellow Line runs south toward Huntington and north into DC, and the waterfront is about a mile east of the station.',
        'The free King Street Trolley runs between the station and City Hall at Market Square, with stops every two to three blocks, and it ends close to the waterfront. DASH buses also serve the area. The Braddock Road station is closer to the north end of Old Town.',
        'Parking is tight on many historic blocks. Ask whether a home has a garage or pad, and check the city’s rules for the block’s residential parking permit.',
      ],
    },
    {
      title: 'Living in Old Town Alexandria',
      paragraphs: [
        'King Street is the main commercial street, with shops and restaurants stretching from the Metro station down to the river. City Hall and Market Square sit at the middle of the district.',
        'The waterfront has Waterfront Park, Founders Park and the Torpedo Factory area. The city’s flood project will change parts of the waterfront over the next few years, including the foot of King Street and Point Lumley Park, so expect construction in the area.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Old Town Experience',
    paragraphs: [
      'Brandon Wilson holds licenses in Virginia, DC and Maryland, so he can compare Old Town with DC neighborhoods across the river. If you want an Old Town Alexandria real estate agent who works on both sides of the Potomac, start here.',
    ],
  },
  nearby: [
    { name: 'Del Ray', text: 'To the north' },
    { name: 'Potomac Yard', text: 'To the north along the river' },
    { name: 'Carlyle', text: 'To the southwest' },
    { name: 'Rosemont', text: 'To the west' },
  ],
  faqTitle: 'Old Town Alexandria FAQ',
  faqs: [
    { q: 'Do all Alexandria homes need review board approval for exterior changes?', a: 'No. Only properties in the Old and Historic Alexandria District and the Parker-Gray District are locally regulated. Rosemont and other areas are not. Use the city’s district map to confirm a specific address.' },
    { q: 'Is Old Town part of Washington, DC?', a: 'No. Alexandria is an independent city in Virginia, so DC taxes and rules do not apply. The area was part of the District until 1846.' },
    { q: 'How far is the Metro station from the waterfront?', a: 'About a mile. Many people walk it, and the free King Street Trolley covers much of the route along King Street.' },
    { q: 'Who qualifies for Alexandria’s veteran tax exemption?', a: 'The city’s exemption applies to veterans with a service-connected, 100% permanent and total disability certified by the VA, on their primary residence. Confirm current rules and the application process with the city.' },
    { q: 'How does buying in Virginia differ from buying in DC?', a: 'Taxes, closing costs and local rules differ between Virginia and the District. Brandon is licensed in both and can walk you through the differences for the areas you are comparing.' },
  ],
  cta: {
    title: 'Ready to Look at Old Town Alexandria Homes for Sale?',
    text: 'If exterior changes, waterfront flood risk or the Metro commute will drive your decision, say so up front and Brandon will start the search there.',
    button: 'Search Old Town Homes',
  },
};

export const dupontCircle: NeighborhoodGuide = {
  slug: 'dupont-circle',
  name: 'Dupont Circle',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Dupont Circle Condos for Sale | Dupont Circle DC Guide',
  description:
    'Dupont Circle DC guide: condos, co-ops and row houses near the Red Line. Browse Dupont Circle real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Dupont Circle, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Condos, co-ops and row houses near the Red Line, with a licensed DC Realtor.',
  hero: {
    h1: 'Dupont Circle, DC: Neighborhood Guide and Homes for Sale',
    text: 'Dupont Circle is a Washington, DC neighborhood built around a traffic circle and fountain, and its housing is mostly condos, co-ops and converted row houses. This guide covers Dupont Circle, DC in practical terms. If you are comparing Dupont Circle condos for sale or Dupont Circle homes for sale, the sections below cover the rules and choices that shape the buying process here.',
    image: photo('2026/06/dupont-circle', 'AUTOx1150'),
    imageAlt: 'Victorian row houses on a street near Dupont Circle in Washington, DC',
    listingsLabel: 'See Dupont Circle Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 2, ANC 2B)' },
    { label: 'ZIP code', value: '20036' },
    { label: 'Main streets', value: 'Connecticut Avenue NW and Massachusetts Avenue NW' },
    { label: 'Metro', value: 'Dupont Circle station (Red Line), with entrances north and south of the circle' },
    { label: 'Landmarks', value: 'Dupont Circle fountain, Phillips Collection, Embassy Row, Dupont Underground' },
    { label: 'Typical homes', value: 'Condos and co-ops in converted row houses and larger buildings, plus some row houses' },
    { label: 'Rules', value: 'Exterior work in the historic district goes through DC’s Historic Preservation Office' },
    { label: 'Edges', value: 'The exact borders are loosely defined, so we confirm them listing by listing' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'A Circle, a Fountain and a Row of Mansions',
    paragraphs: [
      'The neighborhood takes its name from Dupont Circle and the fountain at its center. The fountain was designed by Daniel Chester French and Henry Bacon, the team behind the Lincoln Memorial, and it replaced an earlier statue of Admiral Samuel Francis Du Pont in the early 1920s.',
      'Most of the row houses around the circle were built before 1900, in Queen Anne and Richardsonian Romanesque styles. Larger mansions went up along Massachusetts Avenue, which is now known as Embassy Row.',
      'The Phillips Collection opened in 1921 and is often called America’s first museum of modern art. A weekly FRESHFARM market has run on 20th Street NW since 1997.',
    ],
  },
  listings: {
    title: 'Browse Dupont Circle Condos and Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20036'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Dupont Circle Real Estate Market',
    paragraphs: [
      'Condos and co-ops make up most of what sells here, so the unit type often matters more than the street. A small condo in a converted row house and a larger apartment in a full-service building can sit a block apart and differ widely in price and monthly cost.',
      'For a custom comparison on a specific building, request a Dupont Circle price check.',
    ],
  },
  sections: [
    {
      title: 'Condo, Co-op or Row House: Which Fits?',
      paragraphs: ['Dupont Circle is the neighborhood where this question comes up most. The main differences:'],
      table: {
        headers: ['', 'Condo', 'Co-op', 'Row house'],
        rows: [
          ['What you own', 'Your unit and a share of common areas', 'Shares in a corporation, plus a right to occupy a unit', 'The whole building and lot'],
          ['Monthly cost', 'Condo fee for shared costs', 'Monthly fee, often covering the building’s underlying costs', 'Your own utilities, taxes and upkeep'],
          ['Buyer approval', 'Usually governed by bylaws', 'Often requires board approval', 'None'],
          ['Financing', 'Standard mortgages in most cases', 'Share loans, with lender rules that can be narrower', 'Standard mortgages'],
        ],
      },
      points: [
        { title: 'Converted row house condos', text: 'Many Dupont Circle condos sit in old row houses divided into a few units. Small buildings have fewer owners to share costs, so ask about reserves, past special assessments and who controls the board.' },
        { title: 'Co-ops', text: 'Co-op rules vary from building to building. Ask for the application package, the financial statements and the board’s rules on financing and subletting before you make an offer.' },
        { title: 'Larger buildings', text: 'These often come with front desks and shared amenities, and the fees reflect that.' },
      ],
    },
    {
      title: 'Buying in the Dupont Circle Historic District',
      paragraphs: [
        'Much of Dupont Circle is inside the Dupont Circle Historic District, and the nearby Strivers’ Section is a separate historic district. In these districts, exterior alterations, additions and demolitions need review by DC’s Historic Preservation Office and the Historic Preservation Review Board before a building permit is issued.',
        'Dupont Circle follows the standard DC process, unlike Georgetown, which adds a federal review layer. The review desk sits at the permit office, and the Review Board has design guidelines for common alterations.',
        'Neighborhood input matters here. The Advisory Neighborhood Commission for Dupont Circle, ANC 2B, can weigh in on cases, and the Review Board gives great weight to written ANC views. A project that draws attention can take longer.',
        'If you own a condo, you may face two approvals: the association’s rules for exterior changes, and historic review for work visible from public space. Interior work is generally outside historic review, but DC building permits still apply.',
      ],
    },
    {
      title: 'Getting Around Dupont Circle',
      paragraphs: [
        'The Dupont Circle Metro station is on the Red Line, with one entrance on Q Street, north of the circle, and another on the south side. The Red Line connects with the Blue, Orange and Silver lines at Metro Center, and many bus routes run along the main avenues.',
        'Georgetown, 14th Street and downtown are all within walking or short transit distance, depending on your starting block. Street parking is tight, especially on weekend evenings, so check the block’s Residential Parking Permit zone and ask whether a unit comes with a space.',
      ],
    },
    {
      title: 'Living in Dupont Circle',
      paragraphs: [
        'The circle and its fountain are the neighborhood’s gathering point, and Connecticut Avenue runs north and south from it with shops, restaurants and Kramerbooks. Embassy Row runs along Massachusetts Avenue, starting near Scott Circle.',
        'The FRESHFARM market runs on 20th Street on Sundays year-round, and the Phillips Collection sits on 21st Street NW. Dupont Underground is a repurposed underground space used for art installations.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Dupont Circle Experience',
    paragraphs: [
      'If you want a Dupont Circle real estate agent who can explain condo and co-op paperwork before you tour, Brandon Wilson can help you compare unit types on the same budget.',
    ],
  },
  nearby: [
    { name: 'Kalorama', text: 'To the northwest' },
    { name: 'Adams Morgan', text: 'To the north' },
    { name: 'Logan Circle', text: 'To the east' },
    { name: 'West End / Foggy Bottom', text: 'To the southwest' },
    { name: 'Georgetown', text: 'Across Rock Creek to the west' },
  ],
  faqTitle: 'Dupont Circle FAQ',
  faqs: [
    { q: 'What does a co-op board review involve?', a: 'Boards commonly ask for financial documents and may hold an interview. Rules and timelines vary by building, so ask for the application package and the building’s financial statements before you make an offer.' },
    { q: 'Do I need both association and historic approval for exterior work on a condo?', a: 'Possibly. Most condo bylaws set rules for exterior changes, and historic review applies to work visible from public space in the district. Check both before you plan a project.' },
    { q: 'How do small condo associations in converted row houses work?', a: 'With only a few owners, each carries a larger share of costs and decisions. Ask for the reserve study, the meeting minutes and any history of special assessments.' },
    { q: 'Can I rent out a Dupont Circle condo?', a: 'Condo documents can limit or ban rentals and set minimum lease terms, and the District adds licensing and tenant requirements on top. Read the bylaws before you count on rental income.' },
    { q: 'Where does Dupont Circle end?', a: 'The borders are loosely defined. Connecticut and Massachusetts Avenues form the core, with Kalorama to the northwest and the Strivers’ Section historic district nearby. We confirm the boundaries listing by listing.' },
  ],
  cta: {
    title: 'Ready to Look at Dupont Circle Condos for Sale?',
    text: 'Condo, co-op or row house: pick the one you lean toward and Brandon will start with the paperwork questions that go with it.',
    button: 'Search Dupont Circle Condos',
  },
};

export const adamsMorgan: NeighborhoodGuide = {
  slug: 'adams-morgan',
  name: 'Adams Morgan',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Adams Morgan Homes for Sale | Adams Morgan DC Guide',
  description:
    'Adams Morgan DC guide: rowhouses, condos, nightlife rules and Metro access. Browse Adams Morgan real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Adams Morgan, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Rowhouses, condos and the 18th Street corridor, with a licensed DC Realtor.',
  hero: {
    h1: 'Adams Morgan, DC: Neighborhood Guide and Homes for Sale',
    text: 'Adams Morgan is a Northwest Washington, DC neighborhood centered on 18th Street and Columbia Road, known for its rowhouses and its restaurant and nightlife strip. This guide covers Adams Morgan, DC in practical terms, from its history to the rules that affect a purchase. If you are comparing Adams Morgan homes for sale, these details come before the tour.',
    image: photo('2026/06/adams-morgan-1', 'AUTOx1150'),
    imageAlt: 'Brightly painted rowhouses on a street in Adams Morgan, Washington, DC',
    listingsLabel: 'See Adams Morgan Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 1, ANC 1C)' },
    { label: 'Main streets', value: '18th Street NW and Columbia Road NW, with Florida Avenue to the south and Connecticut Avenue to the southwest' },
    { label: 'Edges', value: 'Rock Creek Park to the west, Harvard Street to the north, 16th Street to the east' },
    { label: 'Metro', value: 'None in the neighborhood. Woodley Park-Zoo/Adams Morgan (Red Line) is closest; Columbia Heights (Green, Yellow) and Dupont Circle (Red) are also nearby' },
    { label: 'Typical homes', value: 'Rowhouses, some split into condos or flats, plus older apartment buildings and small condo buildings' },
    { label: 'Historic districts', value: 'Washington Heights and Kalorama Triangle' },
    { label: 'Rules', value: 'Exterior work in historic districts is reviewed by DC’s Historic Preservation Office' },
    { label: 'Business district', value: 'The Adams Morgan Partnership Business Improvement District, active since 2005' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'How Adams Morgan Got Its Name',
    paragraphs: [
      'Adams Morgan takes its name from two elementary schools. The Thomas P. Morgan School served Black students, and the John Quincy Adams School served white students. DC schools were desegregated in 1955, and a community group formed in 1958 under the name Adams-Morgan Community Council to carry the work forward.',
      'The neighborhood’s borders were drawn through four older areas: Washington Heights, Lanier Heights, Kalorama Triangle and Meridian Hill. In the late 1960s, residents led by Bishop Marie H. Reed pushed for a community school, and the Marie H. Reed Learning Center still carries her name.',
      'Adams Morgan, Mount Pleasant and Columbia Heights have long been gateway areas for immigrants, and many newcomers since the 1960s have come from El Salvador, Guatemala and other Central American countries. Adams Morgan Day, an annual street festival, has been held each September since 1978.',
    ],
  },
  listings: {
    title: 'Browse Adams Morgan Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20009'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Adams Morgan Real Estate Market',
    paragraphs: [
      'Adams Morgan mixes rowhouses, small condo buildings and older apartment buildings, so one median says little about a single block. A rowhouse near Columbia Road and a condo near the 18th Street strip can be a short walk apart yet carry very different prices and monthly costs.',
      'For a custom comparison on a specific street, request an Adams Morgan price check.',
    ],
  },
  sections: [
    {
      title: 'Four Areas, Four Different Feels',
      paragraphs: ['Adams Morgan is not one block pattern. These four areas sit inside or beside it, and each has its own character.'],
      table: {
        headers: ['', 'Washington Heights', 'Kalorama Triangle', 'Lanier Heights', 'Reed-Cooke'],
        rows: [
          ['Where', 'Around 18th Street and Columbia Road', 'Between Connecticut Avenue, Columbia Road and Calvert Street', 'East of Adams Mill Road and the zoo, up to 16th Street, south of Harvard Street', 'Between Columbia Road and Florida Avenue, on the east side'],
          ['Housing', 'Rowhouses, with some ground-floor shops along the main streets', 'Rowhouses and early apartment buildings', 'A compact area of about 50 acres, one of the city’s early planned subdivisions', 'Rowhouses and former industrial buildings'],
          ['Good to know', 'National Register historic district, listed in 2006', 'National Register historic district, listed in 1987', 'Borders Mount Pleasant to the north', 'Residents resisted 1960s urban renewal plans'],
        ],
      },
    },
    {
      title: 'Homes You Will Find in Adams Morgan',
      paragraphs: [],
      points: [
        { title: 'Rowhouses', text: 'Three-story and four-story brick rowhouses line many streets, often with front steps and small rear yards. Some have been split into flats or condo units, so check how a building is divided before you compare prices.' },
        { title: 'Adams Morgan condos for sale', text: 'Condos appear in converted rowhouses and in small and mid-size buildings near the main streets. Ask how close a unit is to a ground-floor restaurant or bar, because noise and trash pickup affect some buildings more than others.' },
        { title: 'Older apartment buildings', text: 'Early apartment buildings add condo and co-op options in some cases. Read the financials and rules before you make an offer.' },
      ],
    },
    {
      title: 'Living Next to 18th Street: Nightlife and Liquor License Rules',
      paragraphs: [
        'DC has limited new liquor licenses around 18th Street for decades, and a moratorium zone has existed in some form since 2000. The zone covers the area around 18th Street and Columbia Road and is reviewed on a schedule by the neighborhood commission, ANC 1C, and DC’s alcohol regulator. In recent reviews, new restaurant licenses were allowed, taverns were capped and new nightclub licenses stayed blocked.',
        'For buyers, that means the mix of businesses on the corridor changes slowly, but it does change. ANC 1C also reviews license requests and has said it weighs neighbors’ concerns about noise and trash. The rules are renewed on a cycle, so confirm the current status before you rely on them.',
      ],
      steps: {
        lead: 'Before you buy near the strip, we suggest:',
        items: [
          'Visit the block on a Friday and a Saturday night, not just on a weekday',
          'Ask neighbors and the association about noise, trash and late-night traffic',
          'Check the license applications near the address on the regulator’s search page or in ANC 1C’s agendas',
        ],
      },
    },
    {
      title: 'Buying a Building With Renters: TOPA After the 2025 Changes',
      paragraphs: [
        'DC’s Tenant Opportunity to Purchase Act, known as TOPA, gives tenants in a rental building a chance to buy when the owner sells. It matters in Adams Morgan because many buildings here have renters. A new law, the RENTAL Act, took effect on December 31, 2025 and changed several rules.',
        'Buildings less than 15 years old are now exempt from the offer of sale, and certain buildings with two to four units may be exempt depending on how they are owned. Tenants must now wait a set cooling-off period before they can assign their rights, and purchase contracts must be filed with DC’s housing department. Further changes were introduced in 2026, so the details can shift.',
        'This matters most if you plan to buy a small multi-unit building and live in one unit. If you are buying a house or condo to live in, TOPA usually does not apply, but ask a title company or attorney to confirm for your property.',
      ],
    },
    {
      title: 'Getting Around Adams Morgan',
      paragraphs: [
        'The nearest station is Woodley Park-Zoo/Adams Morgan on the Red Line. It was renamed in 1999 to reflect how close it sits to the neighborhood, though it is in Woodley Park. Columbia Heights station on the Green and Yellow lines and Dupont Circle on the Red Line are also within reach, depending on your starting block.',
        'Several Metrobus routes run along 18th Street and Columbia Road. The strip fills with visitors, cars and rideshare vehicles on weekend nights, so test your own drive and parking before you buy.',
      ],
    },
    {
      title: 'Living in Adams Morgan',
      paragraphs: [
        'Restaurants, bars, music venues and small shops line 18th Street and Columbia Road. Rock Creek Park runs along the western edge, and the National Zoo is a short distance away near Adams Mill Road.',
        'Adams Morgan Day fills the main streets each September, and the business district has worked since 2005 on a clean, friendly corridor.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Adams Morgan Experience',
    paragraphs: [
      'Brandon Wilson holds licenses in DC, Virginia and Maryland, and DC is his primary market. If you want an Adams Morgan real estate agent who can explain TOPA, historic review and condo paperwork before you tour, start here.',
    ],
  },
  nearby: [
    { name: 'Dupont Circle', text: 'To the south' },
    { name: 'Kalorama', text: 'To the west' },
    { name: 'Woodley Park', text: 'To the northwest' },
    { name: 'Mount Pleasant', text: 'To the north' },
    { name: 'Columbia Heights', text: 'To the east across 16th Street' },
  ],
  faqTitle: 'Adams Morgan FAQ',
  faqs: [
    { q: 'Is Kalorama part of Adams Morgan?', a: 'Part of it, depending on who draws the map. The Kalorama Triangle sits inside Adams Morgan’s borders, while Sheridan-Kalorama lies west of Connecticut Avenue. Ask us which name a listing uses, since the label can change what shows up in a search.' },
    { q: 'How can I see which liquor licenses are near a home?', a: 'DC’s alcohol regulator keeps a searchable license record, and ANC 1C publishes agendas and minutes that list new applications. Check both for the street you are considering.' },
    { q: 'Does TOPA apply if I buy a condo to live in?', a: 'Usually not for an owner-occupied house or condo, but it can apply when a building with renters is sold. Ask a title company or attorney to confirm for your specific property.' },
    { q: 'How do school assignments work here?', a: 'Assignments depend on the address, and different parts of Adams Morgan feed different schools. Use DCPS’s boundary tool to check an address. We do not rate schools.' },
    { q: 'Can I live here without a car?', a: 'Many people do, using the nearby Red, Green and Yellow line stations and several bus routes. Walk the route to your station at the hour you would commute, and test the nearest grocery trip before you decide.' },
  ],
  cta: {
    title: 'Ready to Look at Adams Morgan Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a rowhouse or a condo, how you feel about living near 18th Street, and whether you plan to rent a unit. He will shape the search around your answers.',
    button: 'Search Adams Morgan Homes',
  },
};

export const nationalLanding: NeighborhoodGuide = {
  slug: 'national-landing',
  name: 'National Landing',
  city: 'Arlington, VA',
  cityHref: '/arlington',
  title: 'Crystal City Homes for Sale | Pentagon City Guide',
  description:
    'Crystal City and Pentagon City guide: condos, Metro, the airport and Amazon HQ2. Browse Crystal City real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'National Landing, Arlington: Crystal City and Pentagon City Homes for Sale',
  ogDescription: 'High-rise condos, Metro and airport access, with a licensed Virginia Realtor.',
  hero: {
    h1: 'National Landing, Arlington: Crystal City and Pentagon City Homes for Sale',
    text: 'National Landing is the name for Crystal City and Pentagon City, the high-rise Arlington, Virginia neighborhoods between the Pentagon and Reagan National Airport. This guide covers both areas in practical terms, from Metro stations to flight noise to condo fees. If you are comparing Crystal City homes for sale or Pentagon City condos for sale, these details come first.',
    image: `${ASSETS}/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg`,
    imageAlt: 'High-rise buildings along Crystal Drive in Crystal City, Arlington, Virginia',
    listingsLabel: 'See National Landing Listings',
  },
  facts: [
    { label: 'City', value: 'Arlington, Virginia (Arlington County)' },
    { label: 'ZIP code', value: '22202' },
    { label: 'Main streets', value: 'Route 1, Crystal Drive and South Hayes Street' },
    { label: 'Metro', value: 'Crystal City and Pentagon City stations (Blue and Yellow lines), with National Airport one stop south' },
    { label: 'Rail', value: 'Virginia Railway Express stops at Crystal City' },
    { label: 'Landmarks', value: 'Fashion Centre at Pentagon City, Pentagon Row, Crystal City Water Park and Metropolitan Park' },
    { label: 'Typical homes', value: 'High-rise and mid-rise condos, some townhomes, and houses in Aurora Highlands and Arlington Ridge next door' },
    { label: 'Rules', value: 'Arlington County zoning and taxes, plus Virginia condo law' },
    { label: 'Edges', value: 'Potomac Yard is also part of the National Landing brand but sits in Alexandria, so it has its own page' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'What National Landing Means',
    paragraphs: [
      'National Landing is a brand, not a city boundary. It appeared in 2018, when Amazon chose the area for its second headquarters, and it covers Crystal City, Pentagon City and Potomac Yard. Potomac Yard is in the City of Alexandria, so its taxes and rules differ from the Arlington side.',
      'Crystal City began as an office and apartment district in the 1960s, centered on Route 1. Pentagon City’s first high-rise apartment buildings went up on Hayes, Fern and Joyce Streets in the 1960s, and the Fashion Centre mall opened in 1989. Listings, maps and neighbors still say Crystal City and Pentagon City, so this guide uses both names.',
    ],
  },
  listings: {
    title: 'Browse Crystal City Homes for Sale and Pentagon City Condos',
    text: 'Pentagon City homes for sale and Crystal City condos in ZIP 22202. Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'VA',
    zips: ['22202'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Crystal City Real Estate Market',
    paragraphs: [
      'Crystal City and Pentagon City are mostly condos, so the building often matters more than the street. A unit in a 1960s high-rise and a unit in a newer tower with a front desk can sit a few blocks apart and differ widely in price and monthly cost. Pentagon City real estate also includes townhomes and, next door, detached houses.',
      'For a custom comparison on a specific building, request a National Landing price check.',
    ],
  },
  sections: [
    {
      title: 'What Amazon HQ2 Means Today',
      paragraphs: [
        'Amazon finished the first phase of HQ2, called Metropolitan Park, in mid-2023. It has two 22-story office towers and a public park of about 2.5 acres. The second phase in Pentagon City, known as PenPlace, has been paused, and local reports in 2026 describe temporary uses for the site.',
        'Developers have also pursued office-to-residential conversions in the area, according to local reports. Plans can change, so we separate what is built from what is only proposed. Ask us to review the status of any project near a home you like before you count on it.',
      ],
    },
    {
      title: 'Crystal City vs Pentagon City: Which Fits?',
      paragraphs: ['The two areas sit side by side along Route 1, but they feel different day to day. This table shows the main differences, with Aurora Highlands included because many condo shoppers also look there.'],
      table: {
        headers: ['', 'Crystal City', 'Pentagon City', 'Aurora Highlands'],
        rows: [
          ['Metro', 'Crystal City station', 'Pentagon City station', 'Both stations are nearby'],
          ['Main draws', 'Water Park, Metropolitan Park, 23rd Street restaurants, Reagan National Airport', 'Fashion Centre mall, Pentagon Row, the Pentagon one stop away', 'Virginia Highlands Park and residential streets'],
          ['Housing', 'Condos and apartments among office towers', 'High-rise condos and apartments around the retail', 'Mostly single-family houses, many built from 1910 to 1930'],
          ['Best for', 'Airport access and an office-district feel', 'Walking to shopping and the Pentagon commute', 'Buyers who want a yard and still want Metro'],
        ],
      },
    },
    {
      title: 'Homes You Will Find in National Landing',
      paragraphs: [],
      points: [
        { title: 'Crystal City condos for sale', text: 'Condo buildings sit among office towers along Route 1 and Crystal Drive, close to the Metro station and the Water Park. Many buildings are older, so ask about elevator age, system upgrades and the reserve balance.' },
        { title: 'Pentagon City condos', text: 'High-rises date from the 1960s onward, with newer buildings around the mall and Pentagon Row. Unit sizes run from studios to larger floor plans, and parking and storage are often separate decisions.' },
        { title: 'Houses and townhomes next door', text: 'Aurora Highlands, south of Pentagon City, is mostly single-family houses, and Arlington Ridge lies to the west. Buyers who want a yard but still want a short Metro walk often compare these streets with a condo.' },
      ],
    },
    {
      title: 'Condo Fees, Taxes and Building Questions',
      paragraphs: ['In a high-rise, the monthly fee can matter as much as the price. Ask what the fee includes, because some buildings cover certain utilities and others cover only shared costs and amenities.'],
      steps: {
        lead: 'We suggest asking each building:',
        items: [
          'Which utilities, if any, the fee covers',
          'Whether parking is deeded, assigned or leased, and what it costs',
          'Whether storage is included or sold separately',
          'The age of the elevators, windows and heating and cooling systems',
          'Move-in rules and amenity access',
        ],
        after: 'Virginia’s resale certificate gives you the fee, reserve and rule details in writing, with a short window to cancel. Arlington County’s real estate tax rate for calendar year 2026 is $1.053 per $100 of assessed value. The National Landing business improvement district adds a charge on commercial property, which is separate from the rate on condos and houses.',
      },
    },
    {
      title: 'Living Under the Flight Path: Airport Noise',
      paragraphs: [
        'Reagan National Airport sits next to the neighborhood, and aircraft noise is part of life in some buildings. Residents have raised flight noise for years, and they point to jets arriving and leaving the airport and to helicopters headed for the Pentagon. A community noise working group run by the airport authority reviews the issue with residents and the FAA.',
      ],
      steps: {
        lead: 'Noise varies by building, floor and wind direction, so one visit tells you little. Before you make an offer, we suggest:',
        items: [
          'Visit the unit in the morning, in the evening and on a weekend',
          'Stand on the balcony and listen with the windows open and closed',
          'Ask the association about window type and any past noise complaints',
        ],
      },
    },
    {
      title: 'Buying Near the Pentagon: Federal and Military Buyers',
      paragraphs: [
        'The Pentagon is the next Metro stop north of Pentagon City on the Blue and Yellow lines, so federal and military buyers often compare Crystal City and Pentagon City first. Brandon holds the Military Relocation Professional (MRP) designation and has military service in his own background. He plans around PCS orders, short house-hunting trips and report dates.',
      ],
      steps: {
        lead: 'If you are moving here on orders, we suggest lining up these steps early:',
        items: [
          'Ask whether the building is VA-approved before you fall for a unit',
          'Confirm your lender’s occupancy rules for a VA loan',
          'Set up video tours and e-signing if you cannot visit often',
          'Test the commute to your office at rush hour, by Metro and by car',
        ],
      },
    },
    {
      title: 'Getting Around National Landing',
      paragraphs: [
        'Crystal City and Pentagon City are both on the Blue and Yellow lines. Going north, the Pentagon is one stop past Pentagon City, and going south, National Airport is one stop past Crystal City. Potomac Yard is the next station after the airport.',
        'Arlington and Metro are building a second entrance to Crystal City station at 18th Street and Crystal Drive. Metro says it should open in summer 2027, and construction closed the station on several weekends in spring 2026. The county is also designing a pedestrian and bike bridge from Crystal City to the airport, and design work continued into 2026, so it is not close to opening.',
        'Virginia Railway Express serves Crystal City, and a relocated station is planned near the future bridge. The Mount Vernon Trail runs along the river nearby for cyclists. Parking varies by building, so ask whether a unit includes a space.',
      ],
    },
    {
      title: 'Living in National Landing',
      paragraphs: [
        'Crystal City Water Park sits at the center of Crystal Drive, and 23rd Street is known locally for its row of restaurants. Metropolitan Park, next to the Amazon towers, has a public park and ground-floor shops.',
        'In Pentagon City, the Fashion Centre is Arlington’s largest indoor mall. Pentagon Row next to it has a grocery store, an outdoor ice rink in winter and a free concert series in summer.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s National Landing Experience',
    paragraphs: [
      'Brandon Wilson holds licenses in Virginia, DC and Maryland, so he can compare National Landing with Capitol Hill, Navy Yard and other Metro-connected areas on the same budget. If you want a Crystal City real estate agent who can weigh both sides of the Potomac, start here.',
    ],
  },
  nearby: [
    { name: 'Potomac Yard', text: 'To the south along the Yellow and Blue lines, in Alexandria' },
    { name: 'Old Town Alexandria', text: 'Farther south' },
    { name: 'Del Ray', text: 'South of Potomac Yard' },
    { name: 'Clarendon', text: 'The other Arlington Metro hub, on the Orange and Silver lines' },
    { name: 'Navy Yard', text: 'Across the Potomac in DC' },
  ],
  faqTitle: 'National Landing FAQ',
  faqs: [
    { q: 'Can I walk to Reagan National Airport from Crystal City?', a: 'Not easily today. The walk crosses busy roads, and the pedestrian bridge is still in design. Most people ride one Metro stop south to National Airport station.' },
    { q: 'How does planned Metro work affect the Blue and Yellow lines here?', a: 'It can be significant. In September 2026, the Yellow Line shut down on two weekends for bridge and track work, and a work train derailment on September 21 stopped Yellow Line trains from crossing into DC. Check WMATA before weekend trips, and ask how a building’s commute holds up when one line is down.' },
    { q: 'Can I report aircraft noise?', a: 'Yes. The airport offers an online complaint system and a public flight tracker called DCA WebTrak. Check the airport’s current pages for how to use them, and review recent patterns before you buy.' },
    { q: 'What if I get new orders after I buy?', a: 'You can often keep a home and rent it out, but condo documents may limit or ban rentals, and VA loans carry occupancy rules. Read the rental section of the bylaws and talk to your lender before you buy.' },
    { q: 'Is Pentagon City the mall or the neighborhood?', a: 'Both uses are common. The Fashion Centre is the mall, while Pentagon City is the neighborhood around it, with Pentagon Row, high-rise condos and apartments, and the Metro station.' },
  ],
  cta: {
    title: 'Ready to Look at Crystal City Homes for Sale?',
    text: 'Tell Brandon which area you lean toward, whether airport access or the Pentagon commute matters more, and whether you need parking. He will build the search around those answers.',
    button: 'Search National Landing Homes',
  },
};

export const loganCircle: NeighborhoodGuide = {
  slug: 'logan-circle',
  name: 'Logan Circle',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Logan Circle Homes for Sale | Logan Circle DC Guide',
  description:
    'Logan Circle DC guide: Victorian rowhouses, condos, 14th Street and Metro access. Browse Logan Circle real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Logan Circle, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Victorian rowhouses and condos around a historic circle, with a licensed DC Realtor.',
  hero: {
    h1: 'Logan Circle, DC: Neighborhood Guide and Homes for Sale',
    text: 'Logan Circle is a Washington, DC neighborhood built around a historic traffic circle and park, with Victorian rowhouses on the residential blocks and the 14th Street corridor running through its western edge. This guide covers Logan Circle, DC in practical terms, from its history to the condo and tax questions that come up when you buy. If you are comparing Logan Circle homes for sale, start with these details before you tour.',
    image: photo('2026/06/logan-circle-1', 'AUTOx1150'),
    imageAlt: 'Victorian row houses facing the park at Logan Circle in Washington, DC',
    listingsLabel: 'See Logan Circle Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (mostly Ward 2, ANC 2F)' },
    { label: 'Main streets', value: '14th Street NW, P Street NW and the circle at 13th Street, Rhode Island Avenue and Vermont Avenue' },
    { label: 'Metro', value: 'None in the neighborhood. McPherson Square, Mount Vernon Square, Shaw-Howard University, U Street and Dupont Circle are all within reach' },
    { label: 'Landmarks', value: 'The General John A. Logan statue, Studio Theatre and the Mary McLeod Bethune Council House' },
    { label: 'Typical homes', value: 'Victorian rowhouses, some divided into condos, plus loft-style and newer condo buildings' },
    { label: 'Historic districts', value: 'The Logan Circle Historic District and the larger Fourteenth Street Historic District' },
    { label: 'Rules', value: 'Exterior changes in both districts go through DC’s Historic Preservation Office' },
    { label: 'Edges', value: 'Loosely drawn, with Shaw and U Street to the north and east, so we confirm the area listing by listing' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'From Iowa Circle to Logan Circle',
    paragraphs: [
      'Logan Circle was part of Pierre L’Enfant’s 1791 plan for the city, and it was first known as Iowa Circle. Houses went up around it from the 1870s, and a horse-drawn trolley line on 14th Street had arrived in 1864. President William McKinley unveiled the equestrian statue of Union General John A. Logan in 1901, and Congress renamed the circle for him in 1930.',
      'As wealthier families moved elsewhere, many of the big houses became rooming houses. In the early 1900s, the area around the circle was also a social and artistic hub for Black Washington. In the 1950s, planners cut 13th Street through the circle to move commuters, and in 1972 the Logan Circle Historic District was listed on the National Register of Historic Places.',
      'Renewed interest in the 1970s and 1980s led to the restoration of many houses and of the circle’s original shape. Studio Theatre opened on 14th Street in the late 1970s, and the corridor around it has been rebuilt since. Logan Circle is often described as the only major downtown circle that has stayed entirely residential.',
    ],
  },
  listings: {
    title: 'Browse Logan Circle Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20005'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Logan Circle Real Estate Market',
    paragraphs: [
      'Logan Circle has two very different kinds of housing, historic rowhouses on the residential blocks and condos near the 14th Street corridor. A single median blends the two, so the unit type matters more than the street name. Condos are a big part of the mix.',
      'For a custom comparison on a specific building, request a Logan Circle price check.',
    ],
  },
  sections: [
    {
      title: 'Two Historic Districts, Two Different Settings',
      paragraphs: [
        'The Logan Circle Historic District is a compact area of about eight blocks around the circle. It holds 135 late-19th-century residences, mostly in Late Victorian and Richardsonian Romanesque styles. The Fourteenth Street Historic District is much larger, with roughly 765 contributing properties, and it includes shops, churches and mixed-use buildings along the corridor.',
        'In practice, a rowhouse on a block facing the circle and a condo above a 14th Street storefront sit in very different settings, even if both are in a historic district. Exterior changes in either district are reviewed by DC’s Historic Preservation Office, so confirm the district for any address. We suggest asking for the permit history, and checking with the office before you offer if you plan to change the outside of a home.',
      ],
    },
    {
      title: 'Rowhouse, Loft or New Condo: What You Will Find',
      paragraphs: [],
      points: [
        { title: 'Victorian rowhouses', text: 'Late-19th-century rowhouses line the blocks around the circle and along nearby side streets. Some remain single-family houses, and others have been divided into condo units, so check how a building is arranged before you compare prices.' },
        { title: 'Logan Circle condos for sale', text: 'Condos include loft-style units in converted buildings and newer mid-size buildings along 14th Street and nearby avenues. Fees, parking and rules vary by building. Ask how close a unit sits to a ground-floor restaurant or bar.' },
        { title: 'Large historic houses', text: 'A few large houses near the circle have stayed single-family or become small condo buildings. They are rare, so ask us to set up an alert.' },
      ],
    },
    {
      title: 'DC Condo Paperwork: How It Differs From Virginia',
      paragraphs: [
        'Many Logan Circle buyers sign a contract on a condo, and DC has its own timetable for the documents. It differs from Virginia’s rules.',
        'Time limits are short and wording matters, so we read the contract clause and request the condo documents early when we can. Review the monthly fee and what it covers, the reserve balance, any special assessment and any lawsuit involving the association.',
      ],
      table: {
        headers: ['', 'DC resale condo', 'DC new-construction condo', 'Virginia resale condo (for comparison)'],
        rows: [
          ['Who provides the documents', 'The seller, from the association', 'The developer’s public offering statement', 'The seller, from the association'],
          ['When they are due', 'Within 10 business days after contract', 'By the time of sale', 'Association has 14 days after a written request'],
          ['Your cancellation window', '3 business days after you receive them', '15 days from signing or receipt, whichever is later', 'Generally 3 days after receipt, up to 7 if the contract extends it'],
        ],
      },
    },
    {
      title: 'Closing Costs and Taxes in DC',
      paragraphs: [
        'DC taxes residential property at $0.85 per $100 of assessed value, a lower headline rate than Arlington or Alexandria. Two deed taxes apply at closing, a recordation tax and a transfer tax. Each is 1.1% of the price under $400,000 and 1.45% at $400,000 or more.',
        'By custom, the buyer pays the recordation tax and the seller pays the transfer tax, though this can be negotiated. On a $600,000 condo, the buyer’s recordation tax would be $8,700. Qualifying first-time buyers may get a reduced recordation rate, with income and price limits that change, so ask your lender and title company.',
      ],
    },
    {
      title: 'Getting Around Without a Metro Station',
      paragraphs: [
        'Logan Circle has no station of its own, which suits people who like options. Which station is closest depends on your corner of the neighborhood.',
        'Metrobus routes run up 14th Street, and a bike or scooter covers the gap to a station quickly. Parking varies by building, so ask whether a condo includes a space. Test your commute from the exact address at your usual hour.',
      ],
      table: {
        headers: ['Station', 'Lines', 'Closest for homes toward the'],
        rows: [
          ['Shaw-Howard University and U Street', 'Green and Yellow', 'North'],
          ['Mount Vernon Square', 'Green and Yellow', 'South and east'],
          ['McPherson Square', 'Blue, Orange and Silver', 'South'],
          ['Dupont Circle (and Farragut North)', 'Red', 'West'],
        ],
      },
    },
    {
      title: 'Living in Logan Circle',
      paragraphs: [
        'The circle itself is a park with the Logan statue at its center. Studio Theatre sits on 14th Street, and the corridor has restaurants, shops and a Whole Foods Market. The Mary McLeod Bethune Council House, a National Historic Site, stands nearby.',
        'Visit on a weeknight and a weekend evening, because 14th Street is busy after dark. Noise differs from block to block, so judge the specific street.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Logan Circle Experience',
    paragraphs: [
      'Brandon Wilson is licensed in DC, Virginia and Maryland, so he can set Logan Circle beside options across the river on the same budget. If you want a Logan Circle real estate agent who can read DC condo documents with you before the cancellation window closes, start here.',
    ],
  },
  nearby: [
    { name: 'Dupont Circle', text: 'To the west' },
    { name: 'Shaw / U Street', text: 'To the north and east' },
    { name: 'Adams Morgan', text: 'To the northwest' },
    { name: 'Columbia Heights', text: 'To the north' },
    { name: 'Downtown, Penn Quarter and Chinatown', text: 'To the southeast' },
  ],
  faqTitle: 'Logan Circle FAQ',
  faqs: [
    { q: 'Where does Logan Circle begin and end?', a: 'The borders are informal. The circle sits at the center, 14th Street runs through the west side, and Shaw lies to the north and east. We note the area name on each listing so you can compare like with like.' },
    { q: 'Do I get a property tax break if I live in the home?', a: 'DC offers a homestead deduction for owner-occupied primary homes, which lowers the taxable value. You apply through DC’s tax office after you close, so confirm the deadline with your title company.' },
    { q: 'Can I see condo documents before I make an offer?', a: 'Sometimes. On resale condos, the full package usually arrives after you sign, so we ask for the budget, rules and recent minutes early when the listing allows. That way the fee and reserve picture shapes your offer.' },
    { q: 'Who speaks for the neighborhood on local issues?', a: 'Logan Circle falls under ANC 2F, which reviews zoning and licensing items, and the Logan Circle Community Association is an active neighbor group. Their meeting notes show what projects are coming to a block.' },
    { q: 'How does traffic around the circle affect nearby homes?', a: 'Four streets meet at the circle, and 13th Street passes through it. Visit at rush hour and in the evening to judge noise on the specific block.' },
  ],
  cta: {
    title: 'Ready to Look at Logan Circle Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a Victorian rowhouse or a condo, how close you want to be to 14th Street, and which Metro line you need. He will shape the search around your answers.',
    button: 'Search Logan Circle Homes',
  },
};

export const navyYard: NeighborhoodGuide = {
  slug: 'navy-yard',
  name: 'Navy Yard',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Navy Yard Homes for Sale | Navy Yard DC Guide',
  description:
    'Navy Yard DC guide: condos, Nationals Park, Metro and affordable-unit rules. Browse Navy Yard real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Navy Yard, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Waterfront condos near Yards Park, the ballpark and the Green Line, with a licensed DC Realtor.',
  hero: {
    h1: 'Navy Yard, DC: Neighborhood Guide and Homes for Sale',
    text: 'Navy Yard is a Southeast Washington, DC neighborhood on the Anacostia River, named for the Navy base that has stood here since 1799. This guide covers Navy Yard, DC in practical terms, from the base and the ballpark to the rules that apply when you buy a new condo. If you are comparing Navy Yard homes for sale, start with these details before you tour.',
    image: photo('2026/07/navy-yard-1', 'AUTOx1150'),
    imageAlt: 'Residential buildings and the boardwalk at Yards Park along the Anacostia River in Navy Yard, Washington, DC',
    listingsLabel: 'See Navy Yard Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 6, ANC 6D)' },
    { label: 'Main streets', value: 'M Street SE, Half Street SE and New Jersey Avenue SE' },
    { label: 'Metro', value: 'Navy Yard-Ballpark station (Green Line), with Capitol South (Blue, Orange and Silver lines) on the northern edge' },
    { label: 'Landmarks', value: 'The Washington Navy Yard, Nationals Park, Yards Park, Canal Park and the Frederick Douglass Memorial Bridge' },
    { label: 'Typical homes', value: 'Condos and apartments in newer mid-rise and high-rise buildings' },
    { label: 'Rules', value: 'DC condo law, plus affordable units with resale limits in some buildings' },
    { label: 'Edges', value: 'Capitol Hill to the north, the Anacostia River to the south and east, and Southwest and Buzzard Point to the west' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'Navy Yard DC History: A Shipyard Becomes a Neighborhood',
    paragraphs: [
      'Pierre L’Enfant’s 1791 plan put wharves and a commercial center on the Anacostia River, and the Washington Navy Yard was founded here in 1799. For decades it was the nation’s largest naval shipbuilding facility, and today it is the Navy’s longest continuously operated federal facility. Land that is now Yards Park was added to the base in 1916.',
      'For most of the 20th century, the area south of Capitol Hill was industrial. That changed after Nationals Park, a stadium of about 41,000 seats, opened in 2008. Yards Park, a riverfront park of roughly five acres, followed in 2010, and the Navy opened the riverwalk trail behind the base to the public.',
      'Navy Yard or Capitol Riverfront? You will see both names. A business improvement district launched in 2007 coined “Capitol Riverfront” for the area, but residents kept saying Navy Yard. The district has since renamed itself the Navy Yard BID, which is why searches and listings use both terms for the same streets.',
    ],
  },
  listings: {
    title: 'Browse Navy Yard Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20003'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Navy Yard Real Estate Market',
    paragraphs: [
      'Most Navy Yard homes sit in newer buildings, so building, floor and view often matter more than the street. Two units a block apart can differ in price and in monthly fees, because amenities vary widely. Many buildings here are rental apartments, so for-sale inventory can be narrower than it looks.',
      'For a custom comparison on a specific building, request a Navy Yard price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Navy Yard',
      paragraphs: [],
      points: [
        { title: 'Navy Yard condos for sale', text: 'Condos fill newer mid-rise and high-rise buildings near Yards Park, the ballpark and M Street, often with shared amenities. Unit sizes and fees vary, so review the budget before you compare prices.' },
        { title: 'Apartment-style buildings', text: 'Large apartment buildings stand across the neighborhood, and some buildings mix owner-occupied and investor-owned units. Ask how many units are owner-occupied.' },
        { title: 'Affordable units', text: 'Some buildings reserve units under DC’s affordable housing rules. Those are covered below.' },
      ],
    },
    {
      title: 'Buying in a Neighborhood That Is Still Being Built',
      paragraphs: [
        'Navy Yard keeps growing. Local reports describe a pipeline of thousands of homes, and the zoning commission has approved new riverfront apartment towers across from the ballpark. An open view today may change when the next parcel builds out.',
      ],
      steps: {
        lead: 'Before you offer on a unit, we suggest:',
        items: [
          'Ask which nearby lots are approved, under construction or still empty, and check DC’s zoning and permit records',
          'Read ANC 6D’s agendas to see what is coming to the block',
          'Ask whether the developer still controls the condo board, and when owners take over',
        ],
        after: 'In newer buildings, DC law lets the developer control the board for a transition period. That can affect budgets, reserves and repairs, so ask for the board history and recent minutes.',
      },
    },
    {
      title: 'Affordable Units: Inclusionary Zoning in Navy Yard Buildings',
      paragraphs: [
        'Some new buildings include units under DC’s Inclusionary Zoning program. These units carry income limits, a capped price and permanent resale rules, set in a recorded covenant. Listings often say so in the remarks, so read them closely.',
        'If you buy one, the rules shape how you live and how you sell. The unit must stay your primary home, renting it out generally needs the housing department’s consent, and you must request a maximum resale price before you sell or refinance. We help you confirm whether a unit is restricted before you fall for it.',
      ],
    },
    {
      title: 'Game Days and Events',
      paragraphs: [
        'Nationals Park draws large crowds on game days and for other events. The streets around it fill with fans, traffic and parking limits, and Metro stations get busy before and after games. Check the schedule, and visit a unit on a game night before you commit.',
        'Blocks several streets from the ballpark may feel the effect less. Parking near the stadium follows special rules, so ask the listing agent how a building handles guest and resident cars.',
      ],
    },
    {
      title: 'Buying Near the Navy Yard: Military and Federal Buyers',
      paragraphs: [
        'The Washington Navy Yard is an active base and the home of Naval District Washington and Naval Sea Systems Command. The U.S. Department of Transportation and DC Water also have headquarters in the neighborhood. Many residents work within a short walk of home.',
        'Brandon holds the Military Relocation Professional (MRP) designation and has military service in his own background. If you are moving here on orders, ask your command about base access and parking, and check whether a building is VA-approved before you tour.',
      ],
    },
    {
      title: 'Getting Around Navy Yard',
      paragraphs: [
        'Navy Yard-Ballpark is on the Green Line, and Capitol South on the northern edge adds the Blue, Orange and Silver lines. M Street is the main corridor for cars, buses and Metro access, and the Southeast and Anacostia freeways are close. The Anacostia Riverwalk Trail and the Frederick Douglass Memorial Bridge, finished in 2021, link the area to neighborhoods across the river.',
        'A regional study in October 2026 looked at electric hydrofoil ferries linking Georgetown, The Wharf, Navy Yard, Old Town Alexandria and National Harbor. Backers say Georgetown to Navy Yard could take about 24 minutes, but there is no launch date, so do not plan around it.',
      ],
    },
    {
      title: 'Living in Navy Yard',
      paragraphs: [
        'Yards Park has a boardwalk, a marina and a terraced performance space along the river, and Canal Park follows the line of the old Washington City Canal. In summer, the business district programs movies and live music in Yards Park.',
        'The riverfront and the new buildings give the neighborhood a modern feel compared with older DC areas. Walk it on a weekday and a game night to see both sides.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Navy Yard Experience',
    paragraphs: [
      'Brandon Wilson is licensed in DC, Virginia and Maryland, so he can set Navy Yard beside waterfront options in Alexandria on one budget. If you want a Navy Yard real estate agent who can explain new-building condo paperwork, affordable-unit rules and base-area commutes before you tour, start here.',
    ],
  },
  nearby: [
    { name: 'Capitol Hill', text: 'To the north' },
    { name: 'Southwest Waterfront and The Wharf', text: 'To the west' },
    { name: 'Barney Circle', text: 'To the northeast along the river' },
    { name: 'Hill East', text: 'Farther northeast' },
  ],
  faqTitle: 'Navy Yard FAQ',
  faqs: [
    { q: 'Can I walk into the Washington Navy Yard?', a: 'The base is an active military installation, so visitor access follows its security rules, which can change. The riverwalk trail along the river is public, and the base’s own visitor pages list current entry steps.' },
    { q: 'How do I apply for an affordable unit?', a: 'DC’s housing department runs registration and a lottery for these units. You complete the registration steps, submit income details to an approved certifying entity, and enter the lottery when a unit is offered.' },
    { q: 'How do I find out what is planned near a condo I like?', a: 'DC’s zoning and permit records list approved projects, and ANC 6D’s agendas show cases before they start. We pull both for the block before you make an offer.' },
    { q: 'Is Navy Yard part of Capitol Hill?', a: 'No. Navy Yard lies south of Capitol Hill, past the freeway, and listings may also call it Near Southeast. Ask us which name a listing uses so your search covers the right streets.' },
    { q: 'Do I need flood insurance near the river?', a: 'It depends on the address. Look up the property’s FEMA flood zone, and ask the association about any past water in garages or ground floors. If a lender requires flood insurance, get a quote before you set your budget.' },
  ],
  cta: {
    title: 'Ready to Look at Navy Yard Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a condo or an affordable unit, how you feel about game-day crowds, and whether you work at the base or downtown. He will shape the search around your answers.',
    button: 'Search Navy Yard Homes',
  },
};

export const delRay: NeighborhoodGuide = {
  slug: 'del-ray',
  name: 'Del Ray',
  city: 'Alexandria, VA',
  cityHref: '/alexandria',
  title: 'Del Ray Alexandria Homes for Sale | Neighborhood Guide',
  description:
    'Del Ray Alexandria guide: bungalows, townhomes, Mount Vernon Avenue and flood projects. Browse Del Ray Alexandria real estate and homes for sale.',
  ogTitle: 'Del Ray, Alexandria: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Bungalows and townhomes along Mount Vernon Avenue, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Del Ray, Alexandria: Neighborhood Guide and Homes for Sale',
    text: 'Del Ray is a neighborhood in the independent city of Alexandria, Virginia, about a mile north of Old Town and organized around Mount Vernon Avenue. This guide covers Del Ray, Alexandria in practical terms, from its history as a separate town to the stormwater and zoning questions that matter when you buy. If you are comparing Del Ray Alexandria homes for sale, start with these details before you tour.',
    image: `${ASSETS}/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg`,
    imageAlt: 'Brick and frame houses on a residential street in Del Ray, Alexandria, Virginia',
    listingsLabel: 'See Del Ray Listings',
  },
  facts: [
    { label: 'City', value: 'Alexandria, Virginia (an independent city)' },
    { label: 'ZIP code', value: 'Mostly 22301' },
    { label: 'Main streets', value: 'Mount Vernon Avenue and Commonwealth Avenue' },
    { label: 'Metro', value: 'None in Del Ray. Braddock Road and Potomac Yard stations (Blue and Yellow lines) are the closest' },
    { label: 'Landmarks', value: 'The Town of Potomac Historic District, Del Ray Artisans at the Colasanto Center, and the Saturday farmers market at Mount Vernon and East Oxford Avenues' },
    { label: 'Typical homes', value: 'Early 20th-century bungalows and Cape Cods, townhomes, and some newer infill' },
    { label: 'Rules', value: 'City of Alexandria zoning and taxes. Del Ray is not under the Board of Architectural Review' },
    { label: 'Edges', value: 'Arlandria to the north, Potomac Yard to the east and Old Town to the south, with approximate borders' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'From Streetcar Suburb to the Town of Potomac',
    paragraphs: [
      'Developers from Ohio, Wood, Harmon and Company, platted Del Ray in 1894 as a suburb, and the Potomac Yard rail yard opened around 1906 and brought more residents. In 1908, Del Ray and neighboring St. Elmo incorporated as the Town of Potomac, with its own mayor, council, police and fire service. Mount Vernon Avenue was paved in 1911, and the Bank of Del Ray opened in 1923 at 2018 Mount Vernon Avenue.',
      'The City of Alexandria annexed the town on January 1, 1930, and Potomac ceased to exist. The Town of Potomac Historic District was added to the National Register of Historic Places in 1992, and it covers modest houses built from the 1890s to 1941, including several mail-order homes. Mount Vernon Avenue struggled in the postwar decades before the city and local groups pushed to rebuild it.',
    ],
  },
  listings: {
    title: 'Browse Del Ray Alexandria Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'VA',
    zips: ['22301'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Del Ray Alexandria Real Estate Market',
    paragraphs: [
      'Del Ray is mostly houses and townhomes, so lot size, renovation level and block matter more than building amenities. A renovated bungalow and an original one can sit on the same street and differ widely in price. A single median hides that, so we compare by home type and condition.',
      'For a custom comparison on a specific street, request a Del Ray price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Del Ray',
      paragraphs: [],
      points: [
        { title: 'Bungalows and Cape Cods', text: 'Small and mid-size houses from the early 20th century fill many blocks, some original and some expanded. Check the age of the roof, wiring and plumbing, and ask what permits covered any addition.' },
        { title: 'Townhomes', text: 'Townhomes appear on side streets and near Mount Vernon Avenue. They suit buyers who want less yard work and still want a walk to the shops.' },
        { title: 'Del Ray Alexandria condos for sale', text: 'Condos are a smaller part of the market than houses and townhomes. They show up in small buildings and townhouse-style communities, so ask us to set an alert if a condo is your priority.' },
        { title: 'Infill and rebuilds', text: 'On some blocks, older houses have been expanded or replaced, and neighbors have debated how much new construction fits. Look at what sits next door before you assume the view and light will stay as they are.' },
      ],
    },
    {
      title: 'Stormwater and Flash Flooding: What Del Ray Buyers Should Ask',
      paragraphs: [
        'Del Ray’s flood risk comes from heavy rain more than from the river. When storm sewers fill, water backs up in streets, alleys and basements. Alexandria says nearly 20 percent of the city lies in mapped floodplains, and it launched Flood Action Alexandria in 2021 to respond to more intense storms.',
        'Several of the city’s flood projects are in and around Del Ray. The largest, the Commonwealth, Ashby and Glebe Flood Mitigation Project, will add storm sewer culverts along Commonwealth Avenue, East Glebe Road and Montrose Avenue, plus a new outfall to Four Mile Run. A June 2026 report said the city is targeting a summer 2027 start, and that schedule can change. Smaller upgrades near Mount Vernon Avenue include new inlets, alley storm sewers and culvert replacements.',
      ],
      steps: {
        lead: 'Before you offer on a home, we suggest:',
        items: [
          'Ask the seller about any water in the basement, crawl space or garage, and about sewer backups',
          'Check the city’s Flood Action Alexandria project list for work on the block',
          'Get quotes for flood and sewer backup coverage, since standard policies often exclude them',
        ],
        after: 'The tidal flooding near the Potomac is a separate issue, covered on our Old Town Alexandria guide.',
      },
    },
    {
      title: 'Zoning for Housing: Up to Four Units on a Single-Family Lot',
      paragraphs: [
        'In late 2023, Alexandria’s City Council adopted Zoning for Housing, which allows buildings of up to four units on lots zoned for single-family homes and cuts some parking requirements. Residents sued in January 2024. A circuit court judge ruled for the city in November 2025, and the plaintiffs filed a notice of appeal with the Virginia Court of Appeals in December 2025.',
        'City planners projected that only a small share of single-family lots, about 66 of roughly 9,000, would convert over a decade. For a buyer, the main points are what a neighbor may build, and whether your own lot could host more units. Ask city zoning staff about a specific address, and check the status of the appeal before you rely on either answer. Arlington has a similar case.',
      ],
    },
    {
      title: 'Taxes and Fees in Alexandria',
      paragraphs: [
        'The calendar year 2026 real estate tax rate in Alexandria is $1.135 per $100 of assessed value, the same rate that applies in Old Town. The city also bills a refuse fee and a stormwater utility fee, and the stormwater fee funds the flood work above. For the fiscal year 2026, the stormwater fee was $340.30 per billing unit and the refuse fee was $500 per household.',
        'The city bills real estate tax in two installments, with the 2026 dates in June and November. Veterans with a 100% permanent and total service-connected disability may qualify for a full exemption on a primary home, as explained on our Old Town Alexandria guide.',
      ],
    },
    {
      title: 'Getting Around Del Ray',
      paragraphs: [
        'Del Ray has no Metro station. The Braddock Road station sits at the southern edge, and the Potomac Yard station, which opened in May 2023, is an easier connection for northern Del Ray and Arlandria. Both are on the Blue and Yellow lines, so test the walk or bus ride from the exact address.',
        'DASH Line 33 runs along Mount Vernon Avenue between King Street Metro and Potomac Yard. DASH has been working through budget problems and proposed service changes, so check current routes. The Potomac Yard Trail and the Metro Linear Trail connect Del Ray with Old Town and Potomac Yard, and the city is redesigning parts of Braddock Road for walking and biking.',
      ],
    },
    {
      title: 'Living in Del Ray',
      paragraphs: [
        'Mount Vernon Avenue is the commercial spine, with independent shops, restaurants and cafés. A Saturday farmers market sets up at Mount Vernon and East Oxford Avenues, and a Giant grocery store sits on Monroe Avenue.',
        'Del Ray runs community events through the year. Art on the Avenue draws a large crowd in early October, the Halloween Parade is a long-running tradition, and monthly First Thursday events bring people to the Avenue. Del Ray Artisans runs an art center at 2704 Mount Vernon Avenue.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Del Ray Experience',
    paragraphs: [
      'Brandon Wilson’s Virginia license covers the whole state, and his office is in Fairfax. If you want a Del Ray real estate agent who can compare Del Ray with Old Town, Arlington and DC, start here.',
    ],
  },
  nearby: [
    { name: 'Old Town Alexandria', text: 'To the south' },
    { name: 'Potomac Yard', text: 'To the east' },
    { name: 'Rosemont', text: 'To the southwest' },
    { name: 'National Landing', text: 'Crystal City and Pentagon City, to the northeast across Four Mile Run' },
  ],
  faqTitle: 'Del Ray FAQ',
  faqs: [
    { q: 'Where does Del Ray end?', a: 'The old Town of Potomac covered six subdivisions: Del Ray, Del Ray II, St. Elmo, Abingdon, Hume and parts of Mount Vernon. People use the name Del Ray more loosely today, so we note the area name on each listing.' },
    { q: 'Does Del Ray have historic district review?', a: 'The Town of Potomac Historic District is on the National Register and the Virginia Landmarks Register, which recognizes its history. Alexandria’s Board of Architectural Review covers only Old and Historic Alexandria and Parker-Gray, so Del Ray homeowners generally do not go to that board. City permits still apply, so confirm the rules for your project.' },
    { q: 'How do I check a block’s flood history?', a: 'Ask the seller for any claims or repair records, and ask neighbors about water in alleys and basements after storms. The city’s Flood Action Alexandria page lists projects by area, which shows where work is planned or finished.' },
    { q: 'How do I follow local issues?', a: 'The Del Ray Citizens Association is a long-running neighborhood group. City planning notices and the Flood Action program pages show what is coming to specific blocks.' },
  ],
  cta: {
    title: 'Ready to Look at Del Ray Alexandria Homes for Sale?',
    text: 'Tell Brandon whether you want a bungalow or a townhome, how you feel about renovating, and which Metro line you need. He will shape the search around your answers.',
    button: 'Search Del Ray Homes',
  },
};

export const shawUStreet: NeighborhoodGuide = {
  slug: 'shaw-u-street',
  name: 'Shaw',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Shaw DC Homes for Sale | Shaw and U Street Guide',
  description:
    'Shaw DC guide: rowhouses, condos, historic districts and Metro access near U Street. Browse Shaw DC real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Shaw, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Rowhouses, condos and Black Broadway history near U Street, with a licensed DC Realtor.',
  hero: {
    h1: 'Shaw, DC: Neighborhood Guide and Homes for Sale',
    text: 'Shaw is a Northwest Washington, DC neighborhood next to Howard University and the U Street corridor, known for Victorian rowhouses, historic theaters and a long role in Black cultural life. This guide covers Shaw, DC in practical terms, including how Shaw and U Street differ. If you are comparing Shaw DC homes for sale, start with these details before you tour.',
    image: photo('2026/06/shaw-u-street', 'AUTOx1150'),
    imageAlt: 'Brick rowhouses on a residential street in Shaw, Washington, DC',
    listingsLabel: 'See Shaw Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC. Shaw spans more than one ward and advisory neighborhood commission, so we confirm both for each address' },
    { label: 'ZIP code', value: 'Mostly 20001' },
    { label: 'Main streets', value: '7th Street NW, 9th Street NW and U Street NW' },
    { label: 'Metro', value: 'Shaw-Howard University, U Street/African American Civil War Memorial/Cardozo, and Mount Vernon Square (all Green and Yellow lines)' },
    { label: 'Landmarks', value: 'Howard Theatre, Lincoln Theatre, Ben’s Chili Bowl, the Carter G. Woodson Home and the Walter E. Washington Convention Center' },
    { label: 'Typical homes', value: 'Victorian-era rowhouses, condos in lofts and new buildings, and small boutique condo buildings' },
    { label: 'Historic districts', value: 'Shaw, Greater U Street, Mount Vernon West and Blagden Alley-Naylor Court' },
    { label: 'Edges', value: 'Loosely drawn, with Logan Circle to the west and Mount Vernon Square to the south, so we confirm the area listing by listing' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'From Uptown to Midcity to Shaw',
    paragraphs: [
      'Shaw grew out of freedpeople’s encampments that formed outside Washington City during the Civil War. The area sat above the city’s old boundary at Florida Avenue, so it was first called “Uptown.” Howard University was founded here in 1867, and the neighborhood later went by “Midcity” until the 1960s.',
      'The name Shaw came from Shaw Junior High School, named for Colonel Robert Gould Shaw, who led the 54th Massachusetts Infantry in the Civil War. In 1966, planners used the school’s enrollment boundary to define an urban renewal area, and the name stuck. Today many residents and listings still say U Street, Cardozo or Mount Vernon Square, depending on the block.',
    ],
  },
  listings: {
    title: 'Browse Shaw DC Homes for Sale',
    text: 'Homes in Shaw and along U Street. Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20001'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Shaw DC Real Estate Market',
    paragraphs: [
      'Shaw mixes rowhouses and condos, and prices swing with unit type, condition and distance to the corridors. A renovated rowhouse and a loft condo a few blocks apart sit in different price brackets and carry different monthly costs. One median blends them, so we compare by home type.',
      'For a custom comparison on a specific street, request a Shaw price check.',
    ],
  },
  sections: [
    {
      title: 'Black Broadway: U Street’s Place in the Story',
      paragraphs: [
        'By 1920, the U Street neighborhood was predominantly African American, and it became known as Black Broadway, a phrase credited to singer Pearl Bailey. The Howard Theatre opened in 1910 and the Lincoln Theatre in 1921, and performers including Duke Ellington played the clubs of the era. Ellington’s childhood home stood on 13th Street between S and T Streets.',
        'The area declined after the 1968 riots and later recovered. Much of U Street is Victorian-era housing built between 1862 and 1900, and most of it falls inside the Greater U Street Historic District. The Carter G. Woodson Home on 9th Street is a National Historic Site, and a self-guided heritage trail covers the main stops.',
      ],
    },
    {
      title: 'Shaw or U Street? Three Areas Compared',
      paragraphs: [
        'Shaw and U Street are two adjacent areas, and a third pocket sits near Mount Vernon Square. This table shows how they differ day to day.',
        'Four historic districts touch this area: Shaw, Greater U Street, Mount Vernon West and Blagden Alley-Naylor Court. They overlap in places, so confirm the district for a specific address.',
      ],
      table: {
        headers: ['', 'Shaw (7th and 9th Streets)', 'U Street Corridor', 'Blagden Alley and Mount Vernon Square'],
        rows: [
          ['Closest Metro', 'Shaw-Howard University', 'U Street/African American Civil War Memorial/Cardozo', 'Mount Vernon Square'],
          ['Anchors', 'Howard University nearby, Howard Theatre, Shaw library', 'Lincoln Theatre, Ben’s Chili Bowl, the Civil War memorial', 'Convention Center, Blagden Alley'],
          ['Housing', 'Rowhouses and new condo buildings', 'Victorian rowhouses, lofts and condos', 'Alley rowhouses and newer condo buildings'],
          ['Good to know', 'Shaw’s main commercial blocks are 7th and 9th Streets', 'Many blocks sit in the Greater U Street Historic District', 'Close to downtown and event traffic'],
        ],
      },
    },
    {
      title: 'Homes You Will Find in Shaw',
      paragraphs: [],
      points: [
        { title: 'Rowhouses', text: 'Victorian-era rowhouses line many streets, some restored and some updated inside while keeping their street-facing look. Check ceiling heights, stairs and whether the lower level is a legal apartment.' },
        { title: 'Shaw DC condos for sale', text: 'Condos range from loft-style units to small boutique buildings with only a few owners. Small buildings share costs among fewer people, so ask about reserves and who controls the board.' },
        { title: 'Converted and landmark buildings', text: 'Some units sit in buildings with a longer history, such as the Gothic Revival market building now called CityMarket at O. Ask what renovation rules apply.' },
      ],
    },
    {
      title: 'Buying a Rowhouse With a Basement Apartment',
      paragraphs: [
        'Many Shaw rowhouses have an English basement, a lower level with its own entrance. Rental income can help, but only a legal unit protects you. In DC, renting a separate unit generally requires a Certificate of Occupancy, a housing business license and a rent registration with the housing department.',
        'Zoning can add another rule. In some zones, an accessory apartment requires an owner to live in the main home or the unit.',
      ],
      steps: {
        lead: 'Before you count on rental income, we suggest:',
        items: [
          'Ask the seller for the Certificate of Occupancy and the current rental license',
          'Confirm the unit’s registration or exemption with DC’s rental registry',
          'Check the zoning for the address and whether owner-occupancy is required',
        ],
        after: 'An unlicensed unit can limit your ability to enforce a lease and may be subject to rent control, so treat it as a risk, not a bonus.',
      },
    },
    {
      title: 'Venues, Events and Nights Out',
      paragraphs: [
        'U Street and Shaw host live music at venues such as the Howard Theatre, the Lincoln Theatre and the 9:30 Club, and the Convention Center brings large events to Mount Vernon Square. Crowds, rideshares and street closures follow show nights. Check the venue calendars for the block you like, and visit on a show night before you decide.',
      ],
    },
    {
      title: 'Getting Around Shaw',
      paragraphs: [
        'Three Metro stations serve the area, Shaw-Howard University, U Street and Mount Vernon Square, and all three are on the Green and Yellow lines. From there, you can transfer to the Red Line at Gallery Place and to the Blue, Orange and Silver lines at L’Enfant Plaza. Major bus routes run along 7th Street, 14th Street and Georgia Avenue.',
        'Which station is closest depends on your block, so test the walk at your usual hour. Parking is tight near the venues, so ask whether a home includes a space.',
      ],
    },
    {
      title: 'Living in Shaw',
      paragraphs: [
        'The Watha T. Daniel/Shaw Library is a neighborhood anchor. The Thurgood Marshall Center, which began as a YMCA, tells the stories of African American leaders in the area.',
        'On U Street, Ben’s Chili Bowl, the Lincoln Theatre and the African American Civil War Memorial are within a short walk of one another. The Greater U Street Heritage Trail links many of these stops.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Shaw Experience',
    paragraphs: [
      'Brandon Wilson is licensed in DC, Virginia and Maryland, so he can set Shaw side by side with Metro-served areas in Virginia. If you want a Shaw real estate agent who can check a basement unit’s paperwork and a condo’s documents before you offer, start here.',
    ],
  },
  nearby: [
    { name: 'Logan Circle', text: 'To the west' },
    { name: 'Columbia Heights', text: 'To the north' },
    { name: 'Adams Morgan', text: 'To the northwest' },
    { name: 'NoMa', text: 'To the east and southeast' },
    { name: 'Downtown, Penn Quarter and Chinatown', text: 'To the south' },
  ],
  faqTitle: 'Shaw FAQ',
  faqs: [
    { q: 'Where does Shaw end?', a: 'Older sources use the name more widely. The 1966 urban renewal area built on the school’s boundary covered what are now Shaw, the U Street Corridor and Logan Circle. Listings today may say Shaw, U Street Corridor, Cardozo or Mount Vernon Square, so we note the label on each listing.' },
    { q: 'How do historic district rules apply to a Shaw rowhouse?', a: 'Exterior work that is visible from a public street generally needs review by DC’s Historic Preservation Office before a permit is issued. Interior work is usually outside that review, but normal permits still apply. Confirm the district for your address before you plan a project.' },
    { q: 'Is there a way to learn the area before I buy?', a: 'Yes. The Greater U Street Heritage Trail is a self-guided walking tour with audio, and it passes the main sites. Walk part of it, then walk your target block at night.' },
    { q: 'What is Shaw Main Streets?', a: 'It is a neighborhood commercial association centered on 7th and 9th Streets between K and W Streets. Its news and events show which businesses are opening near the blocks you are considering.' },
  ],
  cta: {
    title: 'Ready to Look at Shaw DC Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a rowhouse or a condo, whether a rental unit matters, and how close you want to be to the venues. He will shape the search around your answers.',
    button: 'Search Shaw Homes',
  },
};

export const columbiaHeights: NeighborhoodGuide = {
  slug: 'columbia-heights',
  name: 'Columbia Heights',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Columbia Heights Homes for Sale | Columbia Heights DC Guide',
  description:
    'Columbia Heights DC guide: row houses, condos and Metro access along 14th Street. Browse Columbia Heights real estate and homes for sale.',
  ogTitle: 'Columbia Heights, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Row houses and condos beside the Green and Yellow Line Metro, with a licensed DC Realtor.',
  hero: {
    h1: 'Columbia Heights, DC: Neighborhood Guide and Homes for Sale',
    text: 'Columbia Heights is a Washington, DC neighborhood organized around 14th Street NW, where a Metro station, a large shopping center and a historic theater sit within a few blocks of each other. This guide covers Columbia Heights, DC from the ground up: how the area developed, what the homes are like, and what to check if you are looking at Columbia Heights homes for sale.',
    image: photo('2026/06/columbia-heights-1', 'AUTOx1150'),
    imageAlt: 'Row houses on a residential block near 14th Street in Columbia Heights, Washington, DC',
    listingsLabel: 'See Columbia Heights Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 1)' },
    { label: 'ZIP code', value: '20010' },
    { label: 'Main corridor', value: '14th Street NW, with Park Road NW and Irving Street NW as the key cross streets' },
    { label: 'Metro', value: 'Columbia Heights station (Green and Yellow lines)' },
    { label: 'Landmarks', value: 'DC USA, Tivoli Theatre, Civic Plaza, Meridian Hill Park' },
    { label: 'Typical homes', value: 'Row houses (many with a lower-level unit), condos in newer mid-rise buildings' },
    { label: 'Edges', value: '16th Street NW on the west, with Mount Pleasant across it. Sources draw the borders differently, so treat these edges as approximate' },
    { label: 'Last updated', value: 'November 2026' },
  ],
  about: {
    title: 'How a Metro Station Reshaped Columbia Heights',
    paragraphs: [
      'Columbia Heights began as farmland on an estate known as Pleasant Plains, and it was built up into a commercial center in the early twentieth century. A few dates explain most of what you see today.',
      '1924: the Tivoli Theatre opens on 14th Street, anchoring a busy commercial strip. 1999: the Columbia Heights Metro station opens in September, after decades of vacancy and disinvestment in the area. 2008: DC USA, a 546,000-square-foot shopping center, opens across from the station on March 5.',
      'The Metro station is the reason the neighborhood looks the way it does now. New apartment and condo buildings went up around the station and the Civic Plaza, and the Tivoli was restored as part of a new complex. Homes within a short walk of the station tend to be a different mix from blocks farther out, which is worth keeping in mind as you search.',
    ],
  },
  listings: {
    title: 'Browse Columbia Heights Homes for Sale',
    text: 'Want a heads-up before a home goes live? Join the VIP Home Search.',
    state: 'DC',
    zips: ['20010'],
    viewAllHref: '/properties',
  },
  market: {
    title: 'Columbia Heights Real Estate Market',
    paragraphs: [
      'Housing in Columbia Heights splits into two broad groups: older row houses on the residential blocks, and newer condo and apartment buildings near the Metro. Prices differ a lot between the two, and between a renovated row house and one that needs work.',
      'Brandon can pull a custom comparison for a specific block or building. Request a Columbia Heights price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Columbia Heights',
      paragraphs: [],
      points: [
        { title: 'Row houses, often with a lower-level unit', text: 'Many older row houses here have been divided or have a separate unit on the lower level. That can add rental income or space for a relative, but only if the unit is legal. Ask for the Certificate of Occupancy and check how the property is listed: single-family, single-family with an accessory unit, or multi-unit.' },
        { title: 'Columbia Heights condos for sale', text: 'Newer mid-rise buildings near the station include condos, and some also hold rentals. That matters for financing. Lenders and the VA look at how many units are owner-occupied, so check the building’s numbers early. Condo fees, reserves and parking also vary by building.' },
        { title: 'Tenant-occupied properties', text: 'Some listings come with tenants in place. In DC, the Tenant Opportunity to Purchase Act can give tenants a chance to buy when a rented building or unit is sold, which can change your timeline. Talk to a DC real estate attorney before you make an offer on any tenant-occupied home.' },
      ],
    },
    {
      title: 'Living Near 14th Street',
      paragraphs: [
        'Most daily needs sit along 14th Street NW. DC USA has national retail chains and about 1,000 underground parking spaces, and a grocery store sits nearby.',
        'The Civic Plaza, at 14th Street and Park Road, hosts a farmers market. Check the current season and hours before you plan around it, since schedules change.',
        'The Tivoli Theatre, a 1924 building on 14th Street, is now home to GALA Hispanic Theatre. Meridian Hill Park sits at the neighborhood’s western edge and is also known as Malcolm X Park. Howard University is a short distance to the southeast.',
      ],
    },
    {
      title: 'Getting Around Columbia Heights',
      paragraphs: [
        'The Columbia Heights station is the center of the neighborhood. The Green Line runs south through downtown toward Anacostia, and the Yellow Line crosses the Potomac into Virginia. Both run north toward the Maryland suburbs.',
        'Several bus routes also run along 14th Street NW, so confirm current routes on the WMATA site. Blocks near the station have the shortest walk, and blocks toward 16th Street or Georgia Avenue can add a few minutes.',
        'Street parking falls under DC’s Residential Parking Permit program. If a home has no pad or garage, test the block on a weekday evening and on a weekend before you commit.',
      ],
    },
    {
      title: 'Before You Make an Offer in Columbia Heights',
      paragraphs: [],
      steps: {
        lead: 'A few checks matter more here than in many other neighborhoods:',
        items: [
          'Lower-level unit: get the Certificate of Occupancy and confirm the unit is permitted before you count on it for income.',
          'Condo building: ask for the owner-occupancy figure, the reserve fund and the current fee, since many buildings near the Metro also hold rentals.',
          'Tenants in place: ask early whether the sale could trigger TOPA rights.',
          'Parking: confirm whether the home has a pad or garage, or how neighbors park on that block.',
          'Schools: assignment depends on your address, so use the DCPS boundary tool and My School DC. We do not rank schools.',
          'Taxes: check the DC Office of Tax and Revenue for owner-occupant deductions and current rates.',
        ],
      },
    },
  ],
  agent: {
    title: 'Brandon’s Columbia Heights Experience',
    paragraphs: ['Brandon Wilson is licensed in DC, Virginia and Maryland and has closed a sale in Columbia Heights.'],
  },
  nearby: [
    { name: 'Mount Pleasant', text: 'Across 16th Street to the west' },
    { name: 'Adams Morgan', text: 'To the southwest' },
    { name: 'Shaw / U Street', text: 'To the south' },
    { name: 'Logan Circle', text: 'South along the 14th Street corridor' },
  ],
  faqTitle: 'Columbia Heights FAQ',
  faqs: [
    { q: 'Is Columbia Heights the same as Pleasant Plains?', a: 'Pleasant Plains was the name of the estate the area grew from, and one Metro station exit still carries it. Today it is also used as the name of a separate area to the east, near Howard University. Listings sometimes use either name for blocks near the border, so ask which one the seller and the map use.' },
    { q: 'What separates Columbia Heights from Mount Pleasant?', a: '16th Street NW is the usual dividing line, with Columbia Heights to the east and Mount Pleasant to the west. Columbia Heights centers on 14th Street and the Metro, while Mount Pleasant’s shops sit along Mount Pleasant Street. The homes, prices and block layouts differ, so it helps to tour both on the same day.' },
    { q: 'Does a lower-level unit count as a legal apartment?', a: 'Not automatically. Ask for the Certificate of Occupancy and confirm how the property is classified. Lenders and appraisers may treat a permitted unit and an unpermitted one very differently.' },
    { q: 'What is TOPA, and will it affect my purchase?', a: 'TOPA is DC’s Tenant Opportunity to Purchase Act. It can give tenants a chance to buy when a rented building or unit is sold, so it mainly affects tenant-occupied properties. An attorney who handles DC real estate can tell you how it applies to a specific home.' },
    { q: 'What should I know about living close to 14th Street’s shops and restaurants?', a: 'Blocks on or near 14th Street and Park Road mix homes with retail, so activity levels differ from side streets. Visit at night and on weekends, and for buildings with ground-floor retail, ask about trash pickup and delivery hours.' },
  ],
  cta: {
    title: 'Ready to Look at Columbia Heights Homes for Sale?',
    text: 'Tell Brandon whether you are leaning toward a row house, possibly with a lower-level unit, or a condo near the station, and he will start the search from there.',
    button: 'Search Columbia Heights Homes',
  },
};

export const neighborhoodGuides: NeighborhoodGuide[] = [capitolHill, georgetown, oldTownAlexandria, dupontCircle, adamsMorgan, nationalLanding, loganCircle, navyYard, delRay, shawUStreet, columbiaHeights, clarendon, potomacYard, rosslyn, ballston, downtownBethesda, downtownSilverSpring];
