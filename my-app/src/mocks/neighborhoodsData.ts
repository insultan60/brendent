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
  georgetown: '/neighborhoods/georgetown',
  'old-town': '/neighborhoods/old-town-alexandria',
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
  /** Numbered checklist, with an optional lead-in and closing line. */
  steps?: { lead: string; items: string[]; after?: string };
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

export const neighborhoodGuides: NeighborhoodGuide[] = [capitolHill, georgetown, oldTownAlexandria];
