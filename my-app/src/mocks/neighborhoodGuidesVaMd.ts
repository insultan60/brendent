// Arlington, Alexandria and Maryland neighborhood guides (Clarendon, Potomac
// Yard, Rosslyn, Ballston, Downtown Bethesda, Downtown Silver Spring, Rosemont,
// Kenwood, Edgemoor), plus the
// Carlyle block for the Alexandria city page. Copy comes from the client's
// keyword-mapped briefs; placeholder price tables and "Brandon's experience"
// notes are left out until the client supplies them.
import type { NeighborhoodGuide } from './neighborhoodsData';

const ASSETS = 'https://assets.agentfire3.com/uploads/sites/2739';
const arlingtonPhoto = `${ASSETS}/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg`;
const alexandriaPhoto = `${ASSETS}/2026/03/Alexandria-VA-Area-Guide-AUTOx1150.fit.jpeg`;
const bethesdaPhoto = `${ASSETS}/2026/03/Bethesda-Row-Area-Guide-AUTOx1150.fit.jpg`;
const silverSpringPhoto = `${ASSETS}/2026/03/Silver-Spring-MD-Area-Guide-AUTOx1150.fit.jpg`;
const UPDATED = { label: 'Last updated', value: 'November 2026' };
const VIP = 'Want a heads-up before a home goes live? Join the VIP Home Search.';

export const clarendon: NeighborhoodGuide = {
  slug: 'clarendon',
  name: 'Clarendon',
  city: 'Arlington, VA',
  cityHref: '/arlington',
  title: 'Clarendon Homes for Sale | Clarendon Arlington Guide',
  description: 'Clarendon Arlington guide: condos, townhomes, Metro and local rules. Browse Clarendon real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Clarendon, Arlington: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Condos and townhomes along Wilson Boulevard and the Metro, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Clarendon, Arlington: Neighborhood Guide and Homes for Sale',
    text: 'Clarendon is the Arlington, Virginia neighborhood around the Clarendon Metro station on Wilson Boulevard, and it was the county’s original downtown. This Clarendon Arlington guide covers the history, the Metro and the Virginia rules that shape a purchase here. If you are comparing Clarendon homes for sale, start with these details before you tour.',
    image: arlingtonPhoto,
    imageAlt: 'Wilson Boulevard near the Clarendon Metro station in Arlington, Virginia',
    listingsLabel: 'See Clarendon Listings',
  },
  facts: [
    { label: 'City', value: 'Arlington, Virginia (Arlington County)' },
    { label: 'ZIP code', value: '22201' },
    { label: 'Main streets', value: 'Wilson Boulevard, Clarendon Boulevard and Washington Boulevard' },
    { label: 'Metro', value: 'Clarendon station (Orange and Silver lines), at Wilson Boulevard and Highland Street' },
    { label: 'Landmarks', value: 'Market Common Clarendon, the 1937 post office on Washington Boulevard, and the Little Saigon history along Wilson Boulevard' },
    { label: 'Typical homes', value: 'Condos in mid-rise and high-rise buildings, townhomes, and houses in the civic-association areas nearby' },
    { label: 'Rules', value: 'Arlington County zoning and taxes, plus Virginia condo law' },
    { label: 'Edges', value: 'The name stretches toward Court House and Virginia Square, so we confirm the neighborhood listing by listing' },
    UPDATED,
  ],
  about: {
    title: 'Clarendon Arlington History: Trolley Stop, Little Saigon, Metro Hub',
    paragraphs: [
      'Clarendon was first platted in 1900 along the Georgetown-Falls Church Road, now Wilson Boulevard. Electric trolleys arrived in 1896, and the area grew into Arlington’s original downtown. The name honors Edward Hyde, the 1st Earl of Clarendon, an English statesman and historian.',
      'After decades of decline, Clarendon changed again in the 1970s. Vietnamese families opened grocery stores and restaurants along Wilson Boulevard after 1975, and the area became known as Little Saigon. Metro construction disrupted those businesses, and the Clarendon station opened on December 1, 1979.',
      'Rents rose as the area redeveloped, and many Vietnamese businesses left from 1982. A number moved to Eden Center in Falls Church. Arlington County has said it plans historic markers to record this chapter.',
    ],
  },
  listings: { title: 'Browse Clarendon Homes for Sale', text: VIP, state: 'VA', zips: ['22201'], viewAllHref: '/properties' },
  market: {
    title: 'Clarendon Real Estate Market',
    paragraphs: [
      'Clarendon mixes condos, townhomes and a few detached houses, so one median hides the gaps between buildings. Price depends on unit size, floor, building age, parking and monthly fees.',
      'For a custom comparison on a specific building, request a Clarendon price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Clarendon',
      paragraphs: [],
      points: [
        { title: 'Clarendon condos for sale', text: 'Most buyers here look at condos in mid-rise and high-rise buildings within walking distance of the Metro. Fees, reserves, parking and storage differ from building to building, so we review the association documents before you make an offer.' },
        { title: 'Townhomes', text: 'Townhomes sit on side streets and in newer infill projects around the core. They usually give you more space and parking than a condo, so compare the full monthly cost of each.' },
        { title: 'Houses in nearby neighborhoods', text: 'Detached houses fill the civic-association areas around Clarendon, including Lyon Village, Lyon Park and Ashton Heights. The zoning case below matters most on these blocks.' },
      ],
    },
    {
      title: 'Buying a Condo in Virginia: The Resale Certificate',
      paragraphs: [
        'After you sign a contract on a resale condo, the seller must get a resale certificate from the owners’ association and pass it to you. The association has 14 days after a written request to deliver it. The certificate covers fees, reserves, rules and pending assessments.',
        'Under Virginia’s Resale Disclosure Act, you can generally cancel within three days of receiving it, or up to seven days if your contract extends the period. If it never arrives, you can generally cancel any time before settlement. Contract wording and timing matter, so read that clause before you rely on it.',
      ],
      steps: {
        lead: 'When the certificate arrives, we suggest checking:',
        items: [
          'The monthly fee and exactly what it covers',
          'The reserve balance and the date of the last reserve study',
          'Recent or planned special assessments',
          'Any lawsuit involving the association',
        ],
      },
    },
    {
      title: 'Zoning Near Clarendon: The Missing Middle Case',
      paragraphs: [
        'In 2023, Arlington’s County Board changed zoning to allow small multi-unit buildings, such as duplexes, triplexes and quadplexes, on land once limited to single-family houses. The county calls the program Expanded Housing Options. Many residents call it Missing Middle.',
        'Neighbors sued. A circuit court voided the change in 2024, the Court of Appeals put it back in place in 2025 on procedural grounds, and the Virginia Supreme Court heard arguments in October 2026. A ruling is expected in the coming months, and the county is following the ordinance until then.',
        'This matters most for houses on single-family lots, because it affects what a neighbor could build. Condo owners in existing buildings are generally less exposed, but a nearby lot could still change. If you are buying a house, ask us to check the zoning and the county’s lawsuit notice, and read current news before you close.',
      ],
    },
    {
      title: 'Real Estate Taxes in Arlington County',
      paragraphs: [
        'Arlington County sets its own real estate tax rate. The adopted rate for calendar year 2026 is $1.053 per $100 of assessed value, up two cents from $1.033 in 2025. At that rate, a $750,000 assessment produces about $7,900 a year in county real estate tax.',
        'The county mails new assessments each January, so the assessed value can differ from your purchase price. Look up the current assessment before you set a monthly budget.',
        'Virginia law gives veterans with a 100% permanent and total service-connected disability a full real estate tax exemption on their primary home. Brandon works with VA buyers and can point you to the county’s process. Confirm eligibility and the application steps with Arlington County.',
      ],
    },
    {
      title: 'Getting Around Clarendon',
      paragraphs: [
        'Clarendon station serves the Orange and Silver lines. Toward DC, the next stops are Court House and Rosslyn, where you can transfer to the Blue Line. Toward Virginia, Virginia Square and Ballston come next.',
        'ART and Metrobus routes serve the area, and Capital Bikeshare has docks in the neighborhood. Routes and service change, so check current maps and WMATA’s service page.',
        'Parking varies by building. Ask whether a condo includes a space, and check the block’s permit rules with the county before you count on street parking.',
      ],
    },
    {
      title: 'Living in Clarendon',
      paragraphs: [
        'Wilson and Clarendon Boulevards carry most of the shops and restaurants. Market Common Clarendon and a Whole Foods Market sit along Clarendon Boulevard.',
        'The Arlington Farmers Market runs year-round on Saturday mornings in the Court House area, a short Metro ride away. The Clarendon Alliance hosts Clarendon Day each fall, a street festival with music and food.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Clarendon Experience',
    paragraphs: ['Brandon Wilson holds licenses in Virginia, DC and Maryland, so he can compare Clarendon with Orange Line neighbors and DC neighborhoods on the same budget. If you want a Clarendon real estate agent who can weigh Arlington against both, start here.'],
  },
  nearby: [
    { name: 'Court House', text: 'To the east, the next Metro stop toward DC' },
    { name: 'Rosslyn', text: 'Farther east at the river' },
    { name: 'Ballston', text: 'To the west along the Orange Line' },
    { name: 'Lyon Village', text: 'To the north' },
  ],
  faqTitle: 'Clarendon FAQ',
  faqs: [
    { q: 'How well does Metro run from Clarendon?', a: 'Planned work can interrupt service. On one weekend in October 2026, trains did not run on the Orange Line between Clarendon and Foggy Bottom, or on the Silver Line between Clarendon and Downtown Largo. Check WMATA before weekend trips and ask how a unit’s commute works on those days.' },
    { q: 'Can I use a VA loan to buy a Clarendon condo?', a: 'Yes, but the building generally needs VA approval, which is separate from your own eligibility. Ask your lender to check a building’s status early, since it can narrow your shortlist. Brandon can help you compare buildings that fit.' },
    { q: 'When are Arlington real estate taxes due?', a: 'Arlington typically bills in two installments, in mid-June and early October. If your lender escrows taxes, they are folded into your monthly mortgage payment. Confirm current due dates with the county Treasurer.' },
    { q: 'Can I rent out a Clarendon condo?', a: 'Condo documents can limit rentals or set minimum lease terms. The resale certificate lists those rules, so read that section before you count on rental income.' },
    { q: 'Where does Clarendon end?', a: 'The borders are informal, and the name often stretches toward Court House and Virginia Square. Civic associations such as Lyon Village, Lyon Park and Ashton Heights surround the core. We confirm the neighborhood name on each listing so your search does not miss homes.' },
  ],
  cta: {
    title: 'Ready to Look at Clarendon Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a condo or a townhome, how you commute, and whether you need parking. He will build the search around those answers.',
    button: 'Search Clarendon Homes',
  },
};

export const potomacYard: NeighborhoodGuide = {
  slug: 'potomac-yard',
  name: 'Potomac Yard',
  city: 'Alexandria, VA',
  cityHref: '/alexandria',
  title: 'Potomac Yard Homes for Sale | Potomac Yard Guide',
  description: 'Potomac Yard guide: townhomes, condos, the Metro station and Virginia Tech. Browse Potomac Yard real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Potomac Yard, Alexandria: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Townhomes and condos near the Potomac Yard-VT Metro station, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Potomac Yard, Alexandria: Neighborhood Guide and Homes for Sale',
    text: 'Potomac Yard is a planned neighborhood in the independent city of Alexandria, Virginia, built on a former rail yard between Old Town and the Arlington line. This guide covers Potomac Yard in practical terms, from the Metro station that opened in 2023 to the tax district and open land that affect what you pay and what gets built next door. If you are comparing Potomac Yard homes for sale, start with these details before you tour.',
    image: alexandriaPhoto,
    imageAlt: 'Townhomes and a trail in Potomac Yard, Alexandria, Virginia',
    listingsLabel: 'See Potomac Yard Listings',
  },
  facts: [
    { label: 'City', value: 'Alexandria, Virginia (an independent city)' },
    { label: 'ZIP code', value: '22314 for Potomac Greens and Old Town Greens, so confirm the ZIP for each address' },
    { label: 'Main streets', value: 'Potomac Avenue, Richmond Highway (Route 1) and East Glebe Road' },
    { label: 'Metro', value: 'Potomac Yard-VT station (Blue and Yellow lines), open since May 19, 2023, with no Metro parking garage' },
    { label: 'Landmarks', value: 'Potomac Yard Park and Trail, Potomac Yard Center (Target, Best Buy and Amazon Fresh) and the Virginia Tech Innovation Campus' },
    { label: 'Typical homes', value: 'Townhomes, condos in mid-rise and high-rise buildings, and apartment buildings' },
    { label: 'Rules', value: 'City of Alexandria zoning and taxes, community association rules, and a special tax district in the north and central parts' },
    { label: 'Edges', value: 'Old Town North to the south, Crystal City in Arlington to the north across Four Mile Run, and Del Ray to the west, with approximate borders' },
    UPDATED,
  ],
  about: {
    title: 'From Rail Yard to Neighborhood',
    paragraphs: [
      'Potomac Yard takes its name from a large rail yard that handled freight through Alexandria for most of the 20th century. The site covers about 295 acres. Rail operations faded in the 1980s, and the yard was decommissioned in 1989, after which the city began planning for housing and offices.',
      'In 1999, City Council approved the Potomac Yard and Potomac Greens Small Area Plan and rezoned the land as a Coordinated Development District. That plan is the framework for what you see today. Potomac Greens, a community of townhomes, was one of the first neighborhoods built under it.',
      'The northern end took longer. Council adopted the North Potomac Yard Small Area Plan in 2010 and approved an update in June 2017, and the Metro station that anchors it opened on May 19, 2023.',
    ],
  },
  listings: { title: 'Browse Potomac Yard Homes for Sale', text: VIP, state: 'VA', zips: ['22314', '22301'], viewAllHref: '/properties' },
  market: {
    title: 'Potomac Yard Real Estate Market',
    paragraphs: [
      'Potomac Yard was built in stages by different builders, so a townhome in one community and a condo in another can differ in fees, taxes and rules. A single median hides those differences, so we compare by community and home type.',
      'For a custom comparison on a specific community, request a Potomac Yard price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Potomac Yard',
      paragraphs: [],
      points: [
        { title: 'Townhomes', text: 'Potomac Greens has more than 200 townhomes in Federal and Colonial styles, and many are brick. Old Town Greens, built earlier, adds townhomes and townhouse-style condos. Ask what the association covers and which exterior changes it allows.' },
        { title: 'Potomac Yard condos for sale', text: 'Condos here range from townhouse-style units to high-rise buildings such as The Eclipse on Center Park. Fees, parking and amenities vary by building, so compare the monthly budget before you compare prices. Ask whether parking is assigned and who owns the garage space.' },
        { title: 'Listing labels', text: 'The same streets may be listed as Potomac Yard, Potomac Greens, Old Town Greens or North Old Town. We search under each name so you do not miss a home.' },
      ],
    },
    {
      title: 'Landbays and Associations: Know Which Part You Are Buying',
      paragraphs: [
        'Potomac Yard was planned in sections the city calls landbays, and each section has its own approvals and builders. That is why two homes near each other can sit under different associations, fees and tax treatment.',
        'Ask for the association documents early. Our Clarendon guide explains the Virginia resale certificate for condos, and we confirm what applies to each townhome community.',
      ],
      steps: {
        lead: 'Before you offer, we suggest:',
        items: [
          'Ask what the monthly fee includes, such as trash collection, water and parking',
          'Read the budget, the reserve study and recent meeting minutes',
          'Ask whether any fees or rules differ from the community next door',
        ],
      },
    },
    {
      title: 'The Potomac Yard Special Tax District: What It Means for Your Bill',
      paragraphs: [
        'To help pay for the Metro station and other redevelopment costs, Alexandria created two special tax districts. The Tier I district covers the north and central parts of Potomac Yard, including Landbays F, G and H and the multi-family part of Landbay I. Since 2011, Tier I properties pay an extra $0.20 per $100 of assessed value on top of the city’s base rate.',
        'If a property is in Tier I, an assessment of $500,000 adds $1,000 a year to the bill. The Tier II district, which would have taxed homes in the southern part, was ended by a unanimous Council vote on December 15, 2018. Potomac Greens was never part of it.',
        'Not every home or condo is in Tier I, so check the address instead of assuming. The base rate is the one explained on our Old Town Alexandria guide. One more line item is trash, because the city’s refuse fee does not apply to condos or to communities where the association must hire a private collector.',
      ],
    },
    {
      title: 'What Opened: The Metro Station and Virginia Tech',
      paragraphs: [
        'The Potomac Yard-VT Metro station opened on May 19, 2023, after decades of planning. It is Metro’s 98th station and sits on the Blue and Yellow lines between Braddock Road and Reagan National Airport. The project cost about $370 million.',
        'The Virginia Tech Innovation Campus is the area’s anchor. Its first academic building welcomed students in January 2025 and held its grand opening in February 2025, and two more buildings of about 150,000 square feet each are planned. The campus grew out of the state’s push to land Amazon’s second headquarters, which our National Landing guide covers.',
      ],
    },
    {
      title: 'What Did Not Happen: The Arena That Was Proposed',
      paragraphs: [
        'In December 2023, a plan was announced for an entertainment district in Potomac Yard anchored by an arena for the Capitals and Wizards. The City of Alexandria ended negotiations on March 27, 2024, and the teams stayed in Washington.',
        'Large parts of North Potomac Yard remain undeveloped, and the city’s plan allows major buildings there. In October 2026, city economic development staff reported a 0% office vacancy rate in Potomac Yard, with no new office space available.',
      ],
      steps: {
        lead: 'The arena story shows why concept drawings should not set your expectations. Before you offer on a home near open land, we suggest:',
        items: [
          'Check the city’s Potomac Yard development page and Planning and Zoning records for projects that are approved, not just proposed',
          'Ask how tall a planned building could be and how close it would stand to the home',
          'Treat developer renderings as sales material until the city has approved the plan',
        ],
      },
    },
    {
      title: 'Trains and Planes: Check the Edges',
      paragraphs: [
        'Potomac Yard sits beside active rail lines. The Metro station was planned between the CSX railroad tracks and the north end of Potomac Greens, and Amtrak and Virginia Railway Express trains share the CSX corridor toward Washington.',
        'Virginia is building a second two-track bridge over the Potomac River to give that corridor more capacity, with work running through 2030. More capacity can mean more trains over time, so listen to the block at different hours.',
        'Reagan National Airport sits just north of the neighborhood. Our National Landing guide explains how to check aircraft noise at a specific unit.',
      ],
    },
    {
      title: 'Getting Around Potomac Yard',
      paragraphs: [
        'Metro’s two entrances are at 3201 University Drive and 3001 Potomac Avenue, joined by a walkway to the platforms. Metro runs no parking garage at the station, though private commercial lots operate nearby. Ask where a home’s own parking is.',
        'NBC4 reported these opening-day Metro estimates from the station, so check Metro’s trip planner for your hours.',
        'Buses connect the station to nearby areas. Route A1X, formerly called Metroway, runs between Braddock Road and Pentagon City, and DASH lines 33, 34 and 36 serve the station. DASH proposed changes to Lines 33 and 34 in Potomac Yard in October 2026, so confirm current routes.',
        'The city describes the Potomac Yard Trail as a 2.1-mile path from the Braddock Road Metro station north along Potomac Avenue, with exercise equipment, courts and playgrounds. It links with the Four Mile Run Park Trail and the Mount Vernon Trail. A 4.5-acre extension of Potomac Yard Park opened in fall 2024 near the northern end.',
      ],
      table: {
        headers: ['Destination', 'Estimated Metro time'],
        rows: [
          ['Reagan National Airport station', '3 minutes'],
          ['Pentagon station', '9 minutes'],
          ['Metro Center', '23 minutes'],
          ['Smithsonian station', '26 minutes'],
          ['U Street station', '27 minutes'],
        ],
      },
    },
    {
      title: 'Living in Potomac Yard',
      paragraphs: [
        'Potomac Yard Center is the main shopping area, with Target at 3101 Richmond Highway, Best Buy and Amazon Fresh. Ulta opened a store there in spring 2026.',
        'The center sits on land the city has long planned to redevelop. The city’s economic development office said in 2023 that the aim is to find a future location for Target in a reimagined Potomac Yard. Ask what is planned for retail near the home you like.',
        'Del Ray’s Mount Vernon Avenue is a short trip west, and the Old Town waterfront lies to the south.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Potomac Yard Experience',
    paragraphs: ['Brandon Wilson’s Virginia license covers the whole state, and his office is in Fairfax. If you want a Potomac Yard real estate agent who can read association budgets, check a tax bill for Tier I charges and compare Potomac Yard with Old Town, Del Ray and Arlington, start here.'],
  },
  nearby: [
    { name: 'Del Ray', text: 'To the west' },
    { name: 'Old Town Alexandria', text: 'To the south' },
    { name: 'National Landing', text: 'Crystal City and Pentagon City, to the north across Four Mile Run' },
    { name: 'Carlyle', text: 'Condo towers by the Patent Office, south of Old Town' },
  ],
  faqTitle: 'Potomac Yard FAQ',
  faqs: [
    { q: 'Is Potomac Yard in Alexandria or Arlington?', a: 'This page covers Potomac Yard in the City of Alexandria. Arlington also has a Potomac Yard Park along Four Mile Run that straddles the city line, and the National Landing brand covers parts of Crystal City, Pentagon City and Potomac Yard. We note the city on every listing.' },
    { q: 'Do all Potomac Yard owners pay the special tax?', a: 'No. Only properties in the Tier I district pay the extra $0.20 per $100, and the Tier II district was ended in 2018. Check the property’s tax bill, or ask us to look it up.' },
    { q: 'Is there parking at the Metro station?', a: 'Metro does not run a parking garage at Potomac Yard-VT, though private commercial lots operate nearby. Plan to walk, bike or take a bus, and ask about parking at the home you are considering.' },
    { q: 'What is the difference between Potomac Yard, Potomac Greens and Old Town Greens?', a: 'Potomac Yard is the planned area as a whole. Potomac Greens and Old Town Greens are communities within it, and each has its own association. Listings may also say North Old Town, so we search all the names.' },
    { q: 'How do I find out what is planned nearby?', a: 'The city’s Potomac Yard development page and Planning and Zoning records list approved projects. We pull both for the block, and we tell you which plans are approved and which are only concepts.' },
  ],
  cta: {
    title: 'Ready to Look at Potomac Yard Homes for Sale?',
    text: 'Tell Brandon whether you lean toward a townhome or a condo, how you feel about trains and a growing campus nearby, and whether Metro access matters more than parking. He will shape the search around your answers.',
    button: 'Search Potomac Yard Homes',
  },
};

export const rosslyn: NeighborhoodGuide = {
  slug: 'rosslyn',
  name: 'Rosslyn',
  city: 'Arlington, VA',
  cityHref: '/arlington',
  title: 'Rosslyn Homes for Sale | Rosslyn Arlington Guide',
  description: 'Rosslyn Arlington guide: high-rise condos, Metro, Key Bridge and height rules. Browse Rosslyn real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Rosslyn, Arlington: Neighborhood Guide and Homes for Sale',
  ogDescription: 'High-rise condos near the Rosslyn Metro station and Key Bridge, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Rosslyn, Arlington: Neighborhood Guide and Homes for Sale',
    text: 'Rosslyn is the high-rise neighborhood at the Arlington, Virginia end of Key Bridge, across the Potomac River from Georgetown. This guide covers Rosslyn, Arlington in practical terms, from its Metro hub to the height rules and approved towers that shape what you can see from a condo window. If you are comparing Rosslyn homes for sale, start with these details before you tour.',
    image: arlingtonPhoto,
    imageAlt: 'High-rise condo towers beside Gateway Park in Rosslyn, Arlington, Virginia',
    listingsLabel: 'See Rosslyn Listings',
  },
  facts: [
    { label: 'City', value: 'Arlington County, Virginia. Rosslyn is a neighborhood, not a separate city' },
    { label: 'ZIP code', value: '22209 and 22201, depending on the block' },
    { label: 'Main streets', value: 'Wilson Boulevard, Langston Boulevard (formerly Lee Highway), N. Fort Myer Drive and N. Moore Street' },
    { label: 'Metro', value: 'Rosslyn station (Orange, Silver and Blue lines), with no Metro parking' },
    { label: 'Landmarks', value: 'Gateway Park, Freedom Park, Central Place Plaza, Key Bridge and the Marine Corps War Memorial' },
    { label: 'Typical homes', value: 'High-rise and mid-rise condos, a few garden-style condos and townhomes, and many apartment buildings' },
    { label: 'Rules', value: 'Arlington County zoning and taxes, plus the 2015 Rosslyn Sector Plan for the core' },
    { label: 'Edges', value: 'Courthouse to the west, Arlington National Cemetery and Fort Myer to the south, and Georgetown across the Potomac River to the east, with approximate borders' },
    UPDATED,
  ],
  about: {
    title: 'From Ferry Landing to Urban Village',
    paragraphs: [
      'Rosslyn began as a river crossing. In the 1730s, Francis Awbrey ran a ferry that carried travelers to Georgetown, and by the 1860s a farm owned by William and Carolyn Ross had given the area its name.',
      'For much of the early 20th century, Rosslyn was known for pawnshops, bars and vice, and in 1957 Arlington’s planners said its appearance brought no credit to the county. The county rezoned Rosslyn for commercial use in its 1961 land use plan, and 19 high-rises went up between 1962 and 1967.',
      'The Metro station followed in 1977, and I-66 reached Rosslyn in the early 1980s. Later plans added housing to what had been mostly an office district.',
    ],
  },
  listings: { title: 'Browse Rosslyn Homes for Sale', text: VIP, state: 'VA', zips: ['22209'], viewAllHref: '/properties' },
  market: {
    title: 'Rosslyn Real Estate Market',
    paragraphs: [
      'Rosslyn is mostly condos, and one building can hold studios, two-bedrooms and penthouses. A single median blends those together, so we compare by building and by floor.',
      'For a custom comparison on a specific building, request a Rosslyn price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Rosslyn',
      paragraphs: [],
      points: [
        { title: 'Rosslyn condos for sale', text: 'Condos range from garden-style communities built in the 1950s to towers finished in 2009, and many sit within a few blocks of the Metro station. The next section sorts the main buildings by age.' },
        { title: 'Mid-rise and garden-style homes', text: 'Mid-rise buildings such as Terrace Lofts and 1800Wilson are smaller than the towers, and garden-style communities sit on the quieter edges. Ask how many units are owner-occupied.' },
        { title: 'Townhomes and rentals', text: 'Rosslyn has a few small townhome communities, such as Rosslyn Mews, but most of its housing is condos and apartments. If a house is your goal, our Clarendon guide covers a nearby market with more of them.' },
      ],
    },
    {
      title: 'Reading Rosslyn’s Condo Buildings by Era',
      paragraphs: [
        'Rosslyn’s condo buildings span about 55 years, and the era tells you what to ask. Older towers raise questions about major systems and reserves, while newer towers raise questions about amenities and fees. This list comes from a local condo directory, so confirm the details for any building you are considering.',
        'Waterview is both a condo tower and a hotel, so ask how the hotel and any rental program affect fees and house rules. Our National Landing guide has a general checklist for high-rise fees, parking and storage. New condos may join the market: One Rosslyn, planned beside Gateway Park, includes an 82-unit condo building.',
      ],
      table: {
        headers: ['Building', 'Year built', 'Type'],
        rows: [
          ['Rosslyn Heights', '1954', 'Garden-style'],
          ['1510 Condominium', '1972', 'High-rise'],
          ['Rosslyn Mews', '1980', 'Townhome'],
          ['The Weslie', '1981', 'High-rise'],
          ['The Atrium', '1985', 'High-rise'],
          ['Terrace Lofts', '2004', 'Mid-rise'],
          ['1800Wilson', '2006', 'Mid-rise'],
          ['Waterview', '2008', 'High-rise'],
          ['Turnberry Tower', '2009', 'High-rise'],
        ],
      },
    },
    {
      title: 'Peaks and Valleys: Height Rules and What Is Approved Next Door',
      paragraphs: [
        'Rosslyn’s heights follow the 2015 Rosslyn Sector Plan, which Arlington’s County Board adopted unanimously on July 23, 2015. The plan sets “peaks and valleys” height recommendations and protects priority views from Freedom Park and the public observation deck at Central Place.',
        'Density in the core is typically capped near 10 times the lot area, a measure planners call floor area ratio. Those protected views are from public places, so do not assume the plan protects a view from a private unit.',
        'Several office buildings are becoming homes. Federal cutbacks tied to base realignment moved roughly 17,000 public sector jobs out of the area and emptied millions of square feet in Rosslyn and Crystal City. The two 1960s buildings at 1401 Wilson and 1400 Key stood vacant for years after housing the Transportation Security Administration, and a 2014 plan for an office tower there was shelved.',
      ],
      table: {
        headers: ['Project', 'What is planned', 'Status'],
        rows: [
          ['1401 Wilson Blvd and 1400 Key Blvd', 'Two 27-story apartment towers with 831 apartments and retail, including a grocery store', 'Approved by the County Board on July 18, 2026'],
          ['One Rosslyn, 1901 and 1911 N. Fort Myer Dr', 'Three buildings with about 862 homes, including an 82-unit condo building, beside Gateway Park', 'Approved, listed as planned'],
          ['Ames Center, 1820 N. Fort Myer Dr', 'Two towers of 30 and 31 stories with more than 700 apartments', 'Approved in 2021, construction delayed'],
        ],
      },
      steps: {
        lead: 'Before you buy a unit with a view, we suggest:',
        items: [
          'Ask which nearby sites have approved plans and how tall those buildings could be',
          'Look up the block on Arlington County’s site plan pages, which list approved projects',
          'Ask us to compare the view from the floor you want against what could rise next door',
        ],
      },
    },
    {
      title: 'What the Sector Plan Is Changing at Street Level',
      paragraphs: [
        'The plan also reshapes the ground level. It calls for turning the Metro station entrance into an open-air plaza between N. Fort Myer Drive and N. Moore Street, extending Freedom Park deeper into Rosslyn and revitalizing Gateway Park.',
        'It also proposes a corridor of parks and plazas along 18th Street and two-way conversions of Lynn, Fort Myer and Kent streets. The county has said the plan is a guide and not a regulation, so ask which pieces have been built and which are still on paper.',
      ],
    },
    {
      title: 'The Rosslyn Metro Hub: Three Lines and One Tunnel',
      paragraphs: [
        'Rosslyn is the first Virginia stop for the Orange, Silver and Blue lines, so it works as both a commuter station and a transfer point. Metro has said the tunnel east of Rosslyn is a bottleneck for all three lines.',
        'Because the tunnel can carry only so many trains an hour, Metro has cut Blue Line service in the past to make room for Orange and Silver trains. Check current train frequency for the line you would ride.',
        'Metro has studied a second Rosslyn station and a second Potomac River tunnel as long-term fixes. Neither has a confirmed construction date, so do not plan around them.',
        'Metro began replacing the station’s eight escalators in January 2024 and expected to finish by May 2026. Weekend track work can still close stations, as it did in October 2026, so check Metro’s service page before you test a commute.',
      ],
    },
    {
      title: 'Getting Around Rosslyn',
      paragraphs: [
        'Key Bridge links Rosslyn to Georgetown on foot, and our Georgetown guide covers what lies on the other side. The Mount Vernon and Custis Trails both reach Rosslyn, and an Arlington Commuter Store sits at entrance B of the Metro station.',
        'Metro lists no parking at the Rosslyn station, so ask where a home’s own parking is. A civic association leader told the Planning Commission in July 2026 that pickup and drop-off is a problem in Rosslyn. Ask whether a building has a loading area for rideshares and deliveries.',
      ],
    },
    {
      title: 'Living in Rosslyn',
      paragraphs: [
        'Gateway Park, at 1300 Langston Boulevard, hosts the Rosslyn Jazz Fest each September. The 34th festival ran on September 12, 2026, and the Rosslyn Business Improvement District also programs evening events there in warm months. On festival days, organizers advise rideshare drop-offs a block south of the park because of road closures, so test the block on an event day.',
        'A farmers market has run on Wednesday afternoons at Central Place Plaza, and Freedom Park and the Marine Corps War Memorial offer views toward the Washington Monument. A full-service grocery store is part of the 1400 Key Boulevard plan but is not open yet.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Rosslyn Experience',
    paragraphs: ['Brandon Wilson’s Virginia license covers the whole state, and his office is in Fairfax. If you want a Rosslyn real estate agent who can compare Rosslyn with Clarendon, Georgetown and Old Town, and read a condo’s documents before you offer, start here.'],
  },
  nearby: [
    { name: 'Clarendon', text: 'To the west along the Orange and Silver lines' },
    { name: 'Georgetown', text: 'Across Key Bridge to the east' },
    { name: 'National Landing', text: 'Crystal City and Pentagon City, to the south' },
    { name: 'Ballston', text: 'Farther west along the Orange and Silver lines' },
  ],
  faqTitle: 'Rosslyn FAQ',
  faqs: [
    { q: 'Is Rosslyn part of Washington, DC?', a: 'No. Rosslyn is in Arlington County, Virginia, across the Potomac River from Georgetown, and the area returned to Virginia from the District in 1846. Virginia law and Arlington taxes apply, which our Clarendon guide explains.' },
    { q: 'Why do some listings say 22201 and others 22209?', a: 'Rosslyn includes addresses in both ZIP codes. We check the address on each listing, so your search covers every block.' },
    { q: 'Can I see the Washington Monument from a Rosslyn condo?', a: 'Some units have views of Washington landmarks, but the view depends on the floor and on what is built nearby. We check the unit and the approved projects around it.' },
    { q: 'Is there parking at the Rosslyn Metro station?', a: 'Metro lists no parking at Rosslyn. Plan to walk, bike or take a bus, and ask about parking at the building you are considering.' },
    { q: 'What is the Rosslyn BID?', a: 'The Rosslyn Business Improvement District runs events at Gateway Park and Central Place Plaza, including the Jazz Fest and a farmers market. Its calendar shows what is happening near a building you like.' },
  ],
  cta: {
    title: 'Ready to Look at Rosslyn Homes for Sale?',
    text: 'Tell Brandon whether you want a high-rise or a smaller building, how much a view matters, and how close you need to be to Metro. He will shape the search around your answers.',
    button: 'Search Rosslyn Homes',
  },
};

export const ballston: NeighborhoodGuide = {
  slug: 'ballston',
  name: 'Ballston',
  city: 'Arlington, VA',
  cityHref: '/arlington',
  title: 'Ballston Condos for Sale | Ballston Arlington Guide',
  description: 'Ballston Arlington guide: condos, townhomes, Metro and new construction. Browse Ballston real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Ballston, Arlington: Neighborhood Guide and Condos for Sale',
  ogDescription: 'Condos and townhome-style homes near the Ballston-MU Metro station, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Ballston, Arlington: Neighborhood Guide and Condos for Sale',
    text: 'Ballston is a dense, Metro-centered neighborhood in Arlington, Virginia, built around a shopping center that has been rebuilt twice since 1951. This guide covers Ballston, Arlington in practical terms, from its 1980s condo towers to the apartment buildings now rising on old office and retail sites. If you are comparing Ballston condos for sale, start with these details before you tour.',
    image: arlingtonPhoto,
    imageAlt: 'Condo towers and a plaza near Ballston Quarter in Ballston, Arlington, Virginia',
    listingsLabel: 'See Ballston Listings',
  },
  facts: [
    { label: 'City', value: 'Arlington County, Virginia. Ballston is a neighborhood, not a separate city' },
    { label: 'ZIP code', value: '22203 and 22201, depending on the block' },
    { label: 'Main streets', value: 'Wilson Boulevard, Fairfax Drive, N. Glebe Road and N. Randolph Street' },
    { label: 'Metro', value: 'Ballston-MU station (Orange and Silver lines), with Virginia Square-GMU one stop east' },
    { label: 'Landmarks', value: 'Ballston Quarter, Welburn Square, the Museum of Contemporary Arts Arlington and the MedStar Capitals Iceplex' },
    { label: 'Typical homes', value: 'Condos in 1980s and 1990s high-rises, townhome-style condos, and many apartment buildings' },
    { label: 'Rules', value: 'Arlington County zoning and taxes' },
    { label: 'Edges', value: 'Virginia Square and Clarendon to the east, with quieter residential streets around the core and approximate borders' },
    UPDATED,
  ],
  about: {
    title: 'From Ball’s Crossroads to Ballston Quarter',
    paragraphs: [
      'Ballston began as Ball’s Crossroads, named for the Ball family, whose tavern stood on the site of today’s shopping center in the early 1800s. The crossroads became a village in 1874 and was renamed Ballston in 1895.',
      'The Parkington Shopping Center opened on that corner in 1951 and is counted among the first major suburban shopping centers in the Washington area. It became Ballston Common in 1986 after a naming contest among Arlington residents.',
      'Ballston Common closed in 2016 and was rebuilt as Ballston Quarter, which reopened in late 2018 with a food hall, restaurants and apartments. The redevelopment cost about $330 million, and Arlington put in $55 million.',
      'The office market changed too. The National Science Foundation left for Alexandria in 2017, leaving about 700,000 square feet empty, and its old headquarters became Ballston Exchange, which links to the Metro station and Ballston Quarter by pedestrian bridges.',
    ],
  },
  listings: { title: 'Browse Ballston Condos for Sale', text: VIP, state: 'VA', zips: ['22203'], viewAllHref: '/properties' },
  market: {
    title: 'Ballston Real Estate Market',
    paragraphs: [
      'Ballston’s condo towers were mostly built in the 1980s and 1990s, so buildings of similar age can still differ in fees, renovations and views. A single median hides that, so we compare by building and by renovation level.',
      'For a custom comparison on a specific building, request a Ballston price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Ballston',
      paragraphs: [],
      points: [
        { title: 'High-rise condos', text: 'Most Ballston condos sit in towers such as Alta Vista, Westview at Ballston, Summerwalk, Windsor Plaza and Ballston Park. Fees and renovations vary by building, so compare the monthly budget before you compare prices.' },
        { title: 'Ballston homes for sale with more floor area', text: 'Ballston also has townhome-style condos, including Old Ballston Town, Randolph Square and Ballston Mews, all built around 1981 and 1982. Small buildings such as Quincy Court, a 12-unit mid-rise from 1986, sit about a 10-minute walk from two Metro stations.' },
        { title: 'Converted buildings', text: 'EastView was built in 1989 and converted to condos in 2005, so ask what was renovated and when.' },
        { title: 'A 55+ building', text: 'The Jefferson, a 1992 high-rise at 900 N. Taylor Street, is restricted to residents age 55 and older, and a local directory notes a mandatory monthly fee that runs into the thousands. Read the rules and the fee before you shop it.' },
      ],
    },
    {
      title: 'Reading Ballston’s Condo Buildings by Type',
      paragraphs: [
        'This list comes from a local condo directory and building pages, so confirm the details for any building you are considering.',
        'Several tall buildings in Ballston are rental apartments, such as Quincy Plaza, so for-sale inventory is narrower than the skyline suggests. Our Rosslyn guide compares a different set of towers, and our National Landing guide has a general checklist for high-rise fees and parking.',
      ],
      table: {
        headers: ['Building', 'Year built', 'What to know'],
        rows: [
          ['Summerwalk', '1985', 'High-rise'],
          ['Alta Vista', '1989', 'Condos on the upper floors of the Hilton Arlington tower'],
          ['Westview at Ballston', '1989', 'High-rise'],
          ['EastView', '1989', 'Converted to condos in 2005'],
          ['The Jefferson', '1992', 'Age-restricted, 55 and older'],
          ['Windsor Plaza', '1994', 'High-rise'],
          ['Ballston Park', '1995', 'High-rise'],
          ['Quincy Court', '1986', '12-unit mid-rise'],
          ['Old Ballston Town, Randolph Square, Ballston Mews', '1981 to 1982', 'Townhome-style condos'],
        ],
      },
    },
    {
      title: 'Tower Condo or Townhome-Style Home: Which Fits Ballston?',
      paragraphs: [
        'The biggest difference is the size of the association. A local directory lists the townhome-style communities at 34 to 48 units each, against 146 to 325 units in the towers. A smaller association shares costs among fewer owners, so one large repair weighs more on each household.',
        'Towers trade that for amenities and larger staffs. Townhome-style condos trade it for more floor area and fewer shared hallways. Tell us which you value, and we will sort the listings that way.',
        'Unit counts and fees come from directories and change, so we pull each building’s budget and reserve study before you offer.',
      ],
    },
    {
      title: 'Cranes and Concrete: Ballston’s Three Big Projects',
      paragraphs: [
        'Ballston’s skyline is changing on three sites, and most of the new homes are apartments, not condos. That adds neighbors and shops, but it also means construction near some buildings for years.',
        'For an owner, the effect runs both ways. New apartments bring neighbors and a full-size grocery, which plans describe as an organic grocery store, and they add rental supply that competes with condo owners who plan to rent out a unit later. Ask us for current rent comparisons before you count on rental income.',
        'The Macy’s building opened as Hecht’s in 1951 as part of Parkington and closed in March 2024 after 71 years. Its grocery tenant has not been announced.',
        'If you are touring near these sites, visit on a weekday, when construction is active. Ask the seller how long the noise has lasted and whether any unit faces a site. Dates in this table can move, so we check the county’s project pages before you offer.',
      ],
      table: {
        headers: ['Project', 'What is planned', 'Status'],
        rows: [
          ['Former Macy’s, 685 N. Glebe Rd', 'A 15-story building with 553 apartments and a 38,400-square-foot grocery space', 'Under construction, with first move-ins expected in the third quarter of 2027'],
          ['Ballston One, 4601 Fairfax Dr', 'A seven-story building with 328 apartments, replacing an office building', 'Demolition began in October 2026'],
          ['Former Holiday Inn, 4600 and 4610 Fairfax Dr', '504 apartments and townhomes, under a site plan approved in 2023', 'Hotel closed in April 2026, and the builder asked to push its start deadline to July 2029'],
        ],
      },
    },
    {
      title: 'The Ballston Metro Station and Its Bridges',
      paragraphs: [
        'Ballston-MU serves the Orange and Silver lines, and the MU stands for Marymount University, which has a presence in the neighborhood. Virginia Square-GMU is the next stop east, and Clarendon follows it.',
        'Two pedestrian bridges link the second floor of Ballston Exchange to the Metro station and to Ballston Quarter, so you can cross much of the core without meeting a street. Listings often say steps to Metro, so measure the walk from the building’s front door.',
      ],
    },
    {
      title: 'Getting Around Ballston',
      paragraphs: [
        'Ballston Quarter’s garage has about 3,000 spaces, and Fairfax Drive runs beside the I-66 ramps. Ask where a home’s own parking is, and whether the space is assigned or shared.',
        'The core is built for walking, with Welburn Square, the Metro station and Ballston Quarter within a few blocks of each other.',
      ],
    },
    {
      title: 'Living in Ballston',
      paragraphs: [
        'Ballston Quarter holds the Quarter Market food hall, restaurants, a cinema and the Museum of Contemporary Arts Arlington. The MedStar Capitals Iceplex offers public skating.',
        'Ballston Quarter’s public plaza hosts pop-up markets, including Made in Arlington weekday events for local makers, and an annual pup-friendly neighborhood event called Quarterfest.',
        'The FRESHFARM Ballston Market meets on Thursdays at Welburn Square, 901 N. Taylor Street, and became a year-round market in late 2025. The Ballston Business Improvement District also runs seasonal events at Welburn Square and Ballston Quarter Plaza.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Ballston Experience',
    paragraphs: ['Brandon Wilson’s Virginia license covers the whole state, and his office is in Fairfax. If you want a Ballston real estate agent who can compare Ballston with Clarendon, Rosslyn and Alexandria on one budget, and read a condo’s documents before you offer, start here.'],
  },
  nearby: [
    { name: 'Clarendon', text: 'To the east along the Orange and Silver lines' },
    { name: 'Rosslyn', text: 'Farther east at the Potomac River' },
  ],
  faqTitle: 'Ballston FAQ',
  faqs: [
    { q: 'Where does Ballston end and Virginia Square begin?', a: 'The Ballston Business Improvement District covers Ballston and Virginia Square, so some listings and groups treat them as one area. We note the label on each listing.' },
    { q: 'Is the old Ballston Common mall still open?', a: 'No. Ballston Common closed in 2016, and Ballston Quarter replaced it. Older directions and photos may be out of date.' },
    { q: 'Which Ballston buildings are condos and which are rentals?', a: 'Many tall buildings here are rentals, so a building’s look does not tell you. We check the ownership type before we send you a listing.' },
    { q: 'Why is the Metro station called Ballston-MU?', a: 'MU stands for Marymount University. The station serves the Orange and Silver lines.' },
    { q: 'What is Virginia Square-GMU?', a: 'It is the next Metro station east of Ballston on the Orange and Silver lines, and GMU refers to George Mason University’s Arlington presence. Some Ballston buildings on Quincy Street are about a 10-minute walk from both stations.' },
    { q: 'Is the Ballston farmers market open in winter?', a: 'Yes. FRESHFARM moved the Ballston market to a year-round schedule in late 2025, and hours vary by season.' },
  ],
  cta: {
    title: 'Ready to Look at Ballston Condos for Sale?',
    text: 'Tell Brandon whether you want a high-rise condo or a townhome-style home, how you feel about construction nearby, and how close you need to be to Metro. He will shape the search around your answers.',
    button: 'Search Ballston Condos',
  },
};

export const downtownBethesda: NeighborhoodGuide = {
  slug: 'downtown-bethesda',
  name: 'Downtown Bethesda',
  city: 'Bethesda, MD',
  cityHref: '/bethesda',
  title: 'Downtown Bethesda Homes for Sale | Neighborhood Guide',
  description: 'Downtown Bethesda guide: condos, Metro, Purple Line and Maryland closing costs. Browse downtown Bethesda real estate and homes for sale.',
  ogTitle: 'Downtown Bethesda: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Condos near the Bethesda Metro station and Bethesda Row, with a licensed Maryland Realtor.',
  hero: {
    h1: 'Downtown Bethesda: Neighborhood Guide and Homes for Sale',
    text: 'Downtown Bethesda is the urban core of southwestern Montgomery County, Maryland, built around the Bethesda Metro station and a grid that now holds condo towers, Bethesda Row and a growing list of apartments. This guide covers downtown Bethesda in practical terms, from Maryland’s closing taxes to a Purple Line that has yet to open. If you are comparing downtown Bethesda homes for sale, start with these details before you tour.',
    image: bethesdaPhoto,
    imageAlt: 'Condo buildings and shops along Woodmont Avenue in downtown Bethesda, Maryland',
    listingsLabel: 'See Downtown Bethesda Listings',
  },
  facts: [
    { label: 'Location', value: 'Bethesda, an unincorporated community in Montgomery County, Maryland' },
    { label: 'ZIP code', value: 'Mostly 20814, though some downtown buildings carry Chevy Chase, MD 20815 mailing addresses' },
    { label: 'Main streets', value: 'Wisconsin Avenue, Old Georgetown Road, East-West Highway, Woodmont Avenue and Bethesda Avenue' },
    { label: 'Metro', value: 'Bethesda station (Red Line), open since August 25, 1984, with the Purple Line terminus under construction' },
    { label: 'Landmarks', value: 'Bethesda Row, Woodmont Triangle, the Farm Women’s Cooperative Market and the Capital Crescent Trail' },
    { label: 'Typical homes', value: 'Condos in mid-rise and high-rise buildings, plus many apartment buildings' },
    { label: 'Rules', value: 'Montgomery County zoning and taxes, Maryland condo law and the 2017 Bethesda Downtown Plan' },
    { label: 'Edges', value: 'Residential Bethesda around the core and Chevy Chase to the south, with approximate borders' },
    UPDATED,
  ],
  about: {
    title: 'From Crossroads to Urban Core',
    paragraphs: [
      'Bethesda takes its name from the Bethesda Meeting House, a Presbyterian church built in 1820 and named for the Pool of Bethesda in Jerusalem. The local postmaster renamed the settlement after the church in 1871. For the rest of the 19th century it stayed a small crossroads village.',
      'The Metro station opened on August 25, 1984, and Bethesda Metro Center was built over the Red Line. That set off a wave of mid-rise and high-rise offices and housing around the stop.',
      'In 2017, the County Council approved the Bethesda Downtown Plan to guide growth over the next 20 years in places such as Bethesda Row, the Wisconsin Avenue corridor and Woodmont Triangle. Marriott moved its headquarters to downtown Bethesda in 2022.',
    ],
  },
  listings: { title: 'Browse Downtown Bethesda Homes for Sale', text: VIP, state: 'MD', zips: ['20814', '20815'], viewAllHref: '/properties' },
  market: {
    title: 'Downtown Bethesda Real Estate Market',
    paragraphs: [
      'Downtown Bethesda is mostly condos and apartments, from towers built in the 1960s to buildings finished in 2018, so age drives price and fees as much as the address. A single median hides that, so we compare by building and by era.',
      'For a custom comparison on a specific building, request a downtown Bethesda price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Downtown Bethesda',
      paragraphs: [],
      points: [
        { title: 'Downtown Bethesda condos for sale', text: 'Condos range from 1960s and 1970s towers such as Whitehall and Promenade to newer buildings such as The Darcy, finished in 2015, and Cheval Bethesda, finished in 2018. Many sit within a few blocks of Bethesda Row or the Metro station.' },
        { title: 'Boutique buildings', text: 'The Edgemoor, a 10-story building from 2003 with about 55 units, and Hampden Row, a seven-story building from 2017, are smaller than the older towers. Ask how many units each association has, because small associations share costs among fewer owners.' },
        { title: 'Mailing addresses', text: 'Several downtown buildings, including The Darcy on Woodmont Avenue, list Chevy Chase, MD 20815 as their mailing address. We search under both Bethesda and Chevy Chase so you do not miss a listing.' },
      ],
    },
    {
      title: 'Reading Downtown Bethesda’s Condo Buildings by Era',
      paragraphs: [
        'This list comes from a high-rise directory and listing pages, so confirm the details for any building you are considering.',
        'Older towers raise questions about major systems and reserves, while newer boutique buildings raise questions about amenities and fees. Our Rosslyn and Ballston guides compare Arlington towers in the same way.',
      ],
      table: {
        headers: ['Building', 'Year built', 'Floors'],
        rows: [
          ['Whitehall', '1965', '12'],
          ['Promenade', '1973', '20'],
          ['Chelsea Tower', '1983', '16'],
          ['Fairmont Plaza and Whitley Park', '1990', '9 and 10'],
          ['The Edgemoor', '2003', '10'],
          ['The Sterling', '2006', '17'],
          ['The Chase at Bethesda', '2007', '12'],
          ['Lionsgate', '2008', '12'],
          ['The Darcy', '2015', '9'],
          ['Hampden Row', '2017', '7'],
          ['Cheval Bethesda', '2018', '17'],
        ],
      },
    },
    {
      title: 'Maryland Closing Costs: What Buyers Pay Here',
      paragraphs: [
        'Maryland closing costs run high, and a Maryland counties association says recordation and transfer taxes account for about 58% of them. In Montgomery County, the county transfer tax is 1% and the state transfer tax is 0.5%. Custom and your contract decide who pays each, so we walk through the split before you sign.',
        'The county recordation tax is tiered, and the rates since October 2023 climb as the price rises. Ask your title company for exact figures, because rounding and exemptions change the total. Our Logan Circle guide covers DC deed taxes for comparison.',
      ],
      table: {
        headers: ['Price range', 'Marginal recordation rate'],
        rows: [
          ['Up to $500,000', '0.89%'],
          ['$500,000 to $600,000', '1.35%'],
          ['$600,000 to $750,000', '2.04%'],
          ['$750,000 to $1,000,000', '2.156%'],
          ['Over $1,000,000', '2.27%'],
        ],
      },
    },
    {
      title: 'Maryland Condo Law: Your Cancellation Window',
      paragraphs: [
        'Maryland’s Condominium Act requires the seller of a resale condo to give the buyer a package of association documents. The buyer can cancel in writing within 7 days after receiving the complete package, and that right ends at closing.',
        'A 2026 bill proposed changes to the timing and fees, so we confirm the current rule on every contract. Virginia uses a different certificate and window, which our Clarendon guide explains.',
      ],
    },
    {
      title: 'The Purple Line and the Capital Crescent Trail: Still Unfinished',
      paragraphs: [
        'The Purple Line is a 16-mile, 21-station light rail line that will run from Bethesda to New Carrollton. At Bethesda, it will connect to the Red Line station through a deep shaft that crews have been excavating.',
        'The state’s contractual opening date is December 30, 2027, but a Maryland Transit Administration official called the date “dynamic” in October 2026, and other dates around April 2028 have been floated. Construction was about 92% complete at that point.',
        'The Capital Crescent Trail between Bethesda and Silver Spring has been closed for construction. The Elm Street to Connecticut Avenue leg is expected to open by spring 2027, so treat the Purple Line as a future benefit and not a commute you can plan around today.',
      ],
    },
    {
      title: 'Cranes in the Skyline: Bethesda Crescent and the Pipeline',
      paragraphs: [
        'Downtown Bethesda’s development pipeline keeps growing, and an early 2024 roundup counted 23 projects. On July 23, 2026, the Planning Board approved Bethesda Crescent, a 29-story building with up to 420 apartments that will replace two vacant office buildings near Wisconsin Avenue and East-West Highway.',
        'That site sits about a block from the future Purple Line station. Brookfield Properties also won approval at the end of 2019 for 479 apartments atop the Metro station at 4 Bethesda Metro Center. Most new towers here are apartments, so for-sale inventory stays narrower than the skyline suggests.',
        'Ask which approved projects sit near a home you like, and how long construction may last. We check the Montgomery Planning Department’s project pages before you offer.',
      ],
    },
    {
      title: 'Buying Near NIH and Walter Reed: Federal and Military Buyers',
      paragraphs: [
        'The National Institutes of Health main campus and Walter Reed National Military Medical Center are both in Bethesda, so many residents work close to home. Brandon holds the Military Relocation Professional (MRP) designation and has military service in his own background.',
        'Maryland offers a full property tax exemption on the primary home of a veteran with a permanent, total service-connected disability. Ask us about the application, and check whether a building is VA-approved before you tour.',
      ],
    },
    {
      title: 'Getting Around Downtown Bethesda',
      paragraphs: [
        'The Bethesda station sits under Wisconsin Avenue near Old Georgetown Road, and Metro’s Red Line runs from there into Washington. Bethesda Row, Woodmont Triangle and the Farm Women’s Cooperative Market are all walkable from the core.',
        'The Capital Crescent Trail and the future Purple Line run along the southern edge of downtown. Ask where a home’s own parking is, since a walk to Metro does not replace a car for every errand.',
      ],
    },
    {
      title: 'Living in Downtown Bethesda',
      paragraphs: [
        'Federal Realty built much of Bethesda Row on the west side of downtown with New Urbanism principles, mixing shops, restaurants, apartments and condos. The Farm Women’s Cooperative Market has roots that go back to the Great Depression.',
        'Woodmont Triangle, bordered by Old Georgetown Road, Woodmont Avenue and Rugby Avenue, is another focal point for dining and nightlife. Visit both areas on a weekday evening and on a weekend to compare the noise.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Downtown Bethesda Experience',
    paragraphs: ['Brandon Wilson is licensed in Maryland, DC and Virginia, so he can set downtown Bethesda beside Metro-served areas in all three on one budget. If you want a downtown Bethesda real estate agent who can explain Maryland’s resale package and closing taxes before you offer, start here.'],
  },
  nearby: [
    { name: 'Downtown Silver Spring', text: 'To the northeast on the Red Line' },
    { name: 'Georgetown', text: 'At the southern end of the Capital Crescent Trail' },
  ],
  faqTitle: 'Downtown Bethesda FAQ',
  faqs: [
    { q: 'Is Bethesda its own city?', a: 'No. Bethesda is an unincorporated community in Montgomery County, Maryland, so county taxes and rules apply.' },
    { q: 'Why do some downtown Bethesda listings say Chevy Chase?', a: 'Some downtown buildings use a Chevy Chase, MD 20815 mailing address. We search under both names so your search covers every building.' },
    { q: 'When will the Purple Line open?', a: 'The contractual date is December 30, 2027, but state officials called it dynamic in October 2026. Plan as if it will open later.' },
    { q: 'How long do I have to cancel a Maryland condo purchase?', a: 'Under the Condominium Act, a resale buyer can cancel within 7 days after receiving the complete association package. A 2026 bill proposed changes, so we confirm the current rule.' },
    { q: 'Who pays Maryland transfer and recordation taxes?', a: 'Custom and the contract decide. We explain the split on your contract before you sign.' },
  ],
  cta: {
    title: 'Ready to Look at Downtown Bethesda Homes for Sale?',
    text: 'Tell Brandon whether you want a newer boutique building or an older tower, how much construction nearby you can accept, and whether Metro or the future Purple Line matters more. He will shape the search around your answers.',
    button: 'Search Downtown Bethesda Homes',
  },
};

export const downtownSilverSpring: NeighborhoodGuide = {
  slug: 'downtown-silver-spring',
  name: 'Downtown Silver Spring',
  city: 'Silver Spring, MD',
  cityHref: '/silver-spring',
  title: 'Downtown Silver Spring Homes for Sale | Area Guide',
  description: 'Downtown Silver Spring guide: condos, Metro, Purple Line and new apartments. Browse downtown Silver Spring real estate and homes for sale.',
  ogTitle: 'Downtown Silver Spring: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Condos near the Silver Spring Metro station and the Purple Line, with a licensed Maryland Realtor.',
  hero: {
    h1: 'Downtown Silver Spring: Neighborhood Guide and Homes for Sale',
    text: 'Downtown Silver Spring is the dense, Metro-centered core of southeastern Montgomery County, Maryland, just across Washington’s northern border. This guide covers downtown Silver Spring in practical terms, from the headquarters that once anchored it to the large apartment projects now moving through county review. If you are comparing downtown Silver Spring homes for sale, start with these details before you tour.',
    image: silverSpringPhoto,
    imageAlt: 'Buildings and a public plaza along Colesville Road in downtown Silver Spring, Maryland',
    listingsLabel: 'See Downtown Silver Spring Listings',
  },
  facts: [
    { label: 'Location', value: 'Silver Spring, an unincorporated community in Montgomery County, Maryland' },
    { label: 'ZIP code', value: '20910 for downtown addresses' },
    { label: 'Main streets', value: 'Georgia Avenue, Colesville Road, Wayne Avenue, Fenton Street and Ellsworth Drive' },
    { label: 'Transit', value: 'Silver Spring station (Red Line, open since 1978), the Paul S. Sarbanes Transit Center, MARC trains and a future Purple Line stop' },
    { label: 'Landmarks', value: 'The AFI Silver Theatre, The Fillmore Silver Spring, Ellsworth Place, Veterans Plaza and the NOAA headquarters' },
    { label: 'Typical homes', value: 'Condos in 1960s and 2000s buildings, plus many apartment buildings' },
    { label: 'Rules', value: 'Montgomery County zoning and taxes, Maryland condo law and the 2022 downtown plan' },
    { label: 'Edges', value: 'Washington’s border at Eastern Avenue to the south and Sligo Creek to the east, with approximate borders' },
    UPDATED,
  ],
  about: {
    title: 'From a Mica-Flecked Spring to a Downtown',
    paragraphs: [
      'Silver Spring takes its name from a spring flecked with mica that Francis Preston Blair and his daughter Elizabeth found in 1840. Acorn Park, in the southern part of downtown, is believed to mark the spot. In the 1800s the area held a crossroads community and plantations, including Blair’s, which relied on enslaved labor.',
      'The Baltimore and Ohio Railroad’s Metropolitan Branch reached the area in 1873, and the Silver Spring Shopping Center and Silver Theatre opened in 1938. Retail slid in the 1950s after Wheaton Plaza opened, and the Metro station that arrived in 1978 sat away from the historic center, so it did not spark redevelopment right away.',
      'A megamall plan for downtown fell through in 1996, and Discovery Communications began a $165 million headquarters in 1998 that anchored a new retail district, a public plaza and homes. The headquarters opened in 2003, the same year the Silver Theatre reopened as the AFI Silver.',
      'Discovery announced in 2018 that it would move to New York, and it left in 2019, though it kept a smaller Maryland hub nearby. The block-long building has since been renamed Inventa Towers and re-leased in part.',
    ],
  },
  listings: { title: 'Browse Downtown Silver Spring Homes for Sale', text: VIP, state: 'MD', zips: ['20910'], viewAllHref: '/properties' },
  market: {
    title: 'Downtown Silver Spring Real Estate Market',
    paragraphs: [
      'Downtown Silver Spring is mostly condos and apartments, from a 1968 high-rise to buildings finished in the 2000s, so what the monthly fee covers matters as much as the price. A single median blends those together, so we compare by building.',
      'For a custom comparison on a specific building, request a downtown Silver Spring price check.',
    ],
  },
  sections: [
    {
      title: 'Homes You Will Find in Downtown Silver Spring',
      paragraphs: [],
      points: [
        { title: 'Downtown Silver Spring condos for sale', text: 'Condos sit in older towers such as Mica and in newer buildings such as Silverton, 8045 at Silver Spring Metro and The Octave. Listings for Mica describe a five-minute walk to the Red Line.' },
        { title: 'Fees that include utilities', text: 'Some older buildings, including Mica, include heat, air conditioning, water, sewer and trash in the monthly fee, which can make a high fee look worse than it is. Ask for a breakdown, and ask about extra charges such as an elevator use fee.' },
        { title: 'Converted industrial sites', text: 'Silverton, finished in 2006, stands on the site of the old Canada Dry bottling plant and keeps the factory facade. Ask what the association’s budget reserves for the older parts of the building.' },
      ],
    },
    {
      title: 'Reading Downtown Silver Spring’s Condo Buildings',
      paragraphs: [
        'This list comes from listing and building pages, so confirm the details for any building you are considering.',
        'A 1960s high-rise and a 2000s five-story building raise different questions, since older towers raise questions about major systems while newer buildings raise questions about amenities. Maryland’s resale rules and closing taxes are the same for both, and our Downtown Bethesda guide lays them out.',
      ],
      table: {
        headers: ['Building', 'Year built', 'What to know'],
        rows: [
          ['Mica, 1220 Blair Mill Rd', '1968', '15 stories, with utilities included in the fee'],
          ['8045 at Silver Spring Metro, Newell St', '2005', 'Condo building near the Metro station'],
          ['Silverton, 1201 East-West Hwy', '2006', 'Five stories on the old Canada Dry plant site'],
        ],
      },
    },
    {
      title: 'A Downtown in Transition: Offices, Shops and a New Housing Pipeline',
      paragraphs: [
        'Downtown Silver Spring is shifting from an office-and-retail center toward a more residential one. A mid-2024 report found about 6 million square feet of office space, 24.1% vacant in the second quarter, and no new office building since 2004. Several large retailers also closed between 2019 and 2024.',
        'The county’s 2022 Silver Spring Downtown and Adjacent Communities Plan responds by directing more housing near transit. It created a downtown overlay zone that ties added height and density to an infrastructure fund. It was also the first county master plan drafted after Montgomery’s Racial Equity and Social Justice Act passed, and it puts equity at its center.',
        'Federal tenants add another risk. Three agencies occupied about 30% of the office space in use, and most of their leases, including NOAA’s roughly 1 million square feet, were set to expire at the end of 2028, according to the 2024 report. If you work for one of them, ask how a lease change could affect your commute.',
        'Most of these projects are apartments, so for-sale supply downtown stays mostly resale condos. We check each project’s status with the county before you offer, because dates and financing can change.',
      ],
      table: {
        headers: ['Project', 'What is planned', 'Status'],
        rows: [
          ['Woodside Place, 1545 N. Falkland Ln and 8555 16th St', 'Up to 1,340 homes in four buildings of 6 to 16 stories plus 50 townhomes, with at least 25% moderately priced units', 'Plans filed with the county, built in as many as five phases'],
          ['Former Tastee Diner site, 8676 Georgia Ave', 'A tower with 493 apartments that keeps the historic diner car', 'Planning Board approved the site plan in June 2025'],
          ['Ellsworth Place, Colesville Rd and Fenton St', 'About 450 apartments in a roughly 20-story tower on top of the mall', 'Sketch plan approved in May 2024, and the mall’s loan has been in special servicing since October 2025'],
          ['Long Branch, 831 University Blvd East', '148 apartments replacing a medical office building', 'Planning Board approved in July 2026'],
        ],
      },
    },
    {
      title: 'A Hub of Rail and Buses: What the Purple Line Adds',
      paragraphs: [
        'Silver Spring already has the Red Line, MARC commuter trains and the Paul S. Sarbanes Transit Center, which has about 30 bus bays. The Purple Line will add an east-west light rail stop here.',
        'It will link Silver Spring with Bethesda directly, instead of the Red Line’s loop through downtown Washington. Our Downtown Bethesda guide explains why the opening date is uncertain, and that applies here too.',
        'The county’s Eastern Silver Spring Communities Plan covers three future Purple Line stations east of Sligo Creek and proposes at least 15% moderately priced units in new housing. Its Planning Board hearing is scheduled for summer or fall 2026, with County Council review to follow in winter or spring 2027.',
      ],
    },
    {
      title: 'Getting Around Downtown Silver Spring',
      paragraphs: [
        'The core around Ellsworth Drive, Fenton Street and the Metro station is built for walking. The county’s Parking Lot District runs the public garages, and the Town Square Garage connects to Ellsworth Place by a skywalk.',
        'Ask where a home’s own parking is, because older buildings may assign spaces differently from newer ones. Test the walk to the Red Line from the building’s front door at your usual commute hour.',
      ],
    },
    {
      title: 'Living in Downtown Silver Spring',
      paragraphs: [
        'The AFI Silver Theatre, a 1938 theater, and The Fillmore Silver Spring music hall sit along Colesville Road. Ellsworth Place and the Downtown Silver Spring retail complex on Ellsworth Drive hold shops and restaurants.',
        'Acorn Park, Veterans Plaza and the Silver Spring Recreation and Aquatic Center add open space, and Sligo Creek Park and Rock Creek Park are close for hiking and biking. Visit on a weeknight and a weekend to judge foot traffic, since some storefronts have turned over since 2020.',
        'Atwell on Spring, a 375-apartment complex on the site of the former county planning headquarters, was scheduled to open with a MOM’s Organic Market as its grocery anchor.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Downtown Silver Spring Experience',
    paragraphs: ['Brandon Wilson is licensed in Maryland, DC and Virginia, so he can compare downtown Silver Spring with downtown Bethesda and Red Line areas in DC on one budget. If you want a downtown Silver Spring real estate agent who can read a condo fee breakdown and track the county’s pipeline, start here.'],
  },
  nearby: [
    { name: 'Downtown Bethesda', text: 'To the southwest, on the Red Line and the future Purple Line' },
    { name: 'Dupont Circle', text: 'Farther south on the Red Line' },
  ],
  faqTitle: 'Downtown Silver Spring FAQ',
  faqs: [
    { q: 'Is Silver Spring its own city?', a: 'No. Silver Spring is an unincorporated community in Montgomery County, Maryland, so county taxes and rules apply.' },
    { q: 'What happened to the Discovery headquarters?', a: 'Discovery moved its headquarters to New York in 2019 and sold the building, which is now called Inventa Towers. The company kept a smaller hub at Silver Spring Metro Plaza.' },
    { q: 'When will the Purple Line reach Silver Spring?', a: 'The contractual opening date is December 30, 2027, but state officials have called it dynamic. Our Downtown Bethesda guide has the details.' },
    { q: 'Do condo fees here include utilities?', a: 'Some older buildings include heat, air conditioning, water and trash, and others do not. We ask for the fee breakdown before we compare buildings.' },
    { q: 'Are the big downtown projects condos?', a: 'Most are apartments. We check each one before you count on new for-sale inventory.' },
  ],
  cta: {
    title: 'Ready to Look at Downtown Silver Spring Homes for Sale?',
    text: 'Tell Brandon whether you want an older high-rise with utilities in the fee or a newer building, how you feel about construction and a changing retail scene, and whether the Red Line or the future Purple Line matters more. He will shape the search around your answers.',
    button: 'Search Downtown Silver Spring Homes',
  },
};

/** Carlyle block on the Alexandria city page (/alexandria#carlyle). */
export const carlyle = {
  title: 'Carlyle, Alexandria: Condo Towers Beside the Patent Office',
  intro:
    'Carlyle is a 76-acre neighborhood in Alexandria, Virginia, bounded roughly by Duke Street, Holland Lane, Eisenhower Avenue and Mill Road. This guide covers Carlyle, Alexandria in practical terms, from the Patent Office that anchors it to the condo towers and Metro stations around it. If you are comparing Carlyle Alexandria homes for sale, start with these details before you tour.',
  facts: [
    { label: 'City', value: 'Alexandria, Virginia (an independent city)' },
    { label: 'ZIP code', value: '22314' },
    { label: 'Metro', value: 'Eisenhower Avenue (Yellow Line) and King Street-Old Town (Blue and Yellow lines)' },
    { label: 'Anchors', value: 'The U.S. Patent and Trademark Office, a federal courthouse, Hoffman Town Center and the headquarters at 2415 Eisenhower Avenue' },
    { label: 'Typical homes', value: 'Condo towers and mid-rise condo buildings, plus many apartments' },
    { label: 'Rules', value: 'City of Alexandria taxes and zoning, and the Eisenhower East Small Area Plan' },
    UPDATED,
  ],
  blocks: [
    {
      title: 'From Flour Mills to a Federal Campus',
      paragraphs: [
        'The Eisenhower corridor held two flour mills along Cameron Run in the late 1700s, and the Eisenhower Avenue Metro station opened in 1983. The name Carlyle honors John Carlyle, a well-known figure in early Alexandria whose Old Town house is now Carlyle House Historic Park.',
        'The city planned Carlyle and the Patent Office campus together as one project, and the Patent Office moved from Crystal City to Alexandria in 2005. It has roughly 12,000 employees, according to one count.',
        'The Eisenhower East Small Area Plan, first adopted in 2003 and updated in 2020, sets how nearby blocks can grow. The Carlyle Community Council speaks for residents on those plans.',
      ],
    },
    {
      title: 'A Headquarters Changing Hands',
      paragraphs: [
        'The National Science Foundation moved into a two-tower headquarters at 2415 Eisenhower Avenue in 2017. In June 2025, federal officials announced that HUD would take over the building, with about 2,700 employees expected to move in.',
        'The foundation stayed in Carlyle by leasing space at 401 Dulany Street, and the city’s economic development partnership told City Council in October 2026 that HUD’s move would finish by the end of the year. The District of Columbia has sued to block the move.',
        'Carlyle’s office vacancy stood at 27.7% in October 2026, and a council member asked whether HUD’s arrival would help bring other businesses. If you work in one of the area’s federal buildings, a Carlyle condo can mean a short walk to work. If you do not, visit on a weekend as well as a weekday to see how the neighborhood feels.',
      ],
    },
  ],
  condos: {
    title: 'Carlyle Alexandria Condos for Sale',
    lead: 'Most Carlyle homes are condos, and the main buildings date from the late 1990s and 2000s. This list comes from listing and building pages, so confirm the details for any building you are considering.',
    headers: ['Building', 'Year built', 'What to know'],
    rows: [
      ['Carlyle Towers, 2121 to 2181 Jamieson Ave', '1996 to 2001', '21 stories, rooftop pool and a nine-hole putting green'],
      ['The Condominiums at Carlyle Square, 520 John Carlyle St', '2006', 'Four stories, about 148 units'],
      ['The Royalton, 309 Holland Ln', '2006', 'Five stories, about 116 units'],
      ['The Jamieson', 'Not confirmed', 'Condos on the upper floors of the Westin Alexandria hotel'],
    ],
    after: [
      'Listings for Carlyle Towers show monthly fees near $900 for a two-bedroom, so ask what the fee covers. If you are searching for houses for sale in Carlyle Alexandria, you will find mostly condos here, and our Old Town and Del Ray guides cover areas with more houses.',
      'Real estate taxes follow the city rate explained on our Old Town guide, and Alexandria’s zoning case is covered on our Del Ray guide.',
    ],
  },
  more: [
    {
      title: 'Getting Around Carlyle',
      paragraphs: [
        'The Eisenhower Avenue station serves the western part of the neighborhood, and King Street-Old Town serves the east. One listing puts Carlyle Towers about 0.3 miles from King Street, so measure the walk from the building you like.',
        'Alexandria Union Station, beside King Street, adds Virginia Railway Express and Amtrak service, and DASH buses connect the two Metro stops. The Eisenhower Avenue trail runs about 1.8 miles from Cameron Run Regional Park toward the Eisenhower Avenue station.',
      ],
    },
    {
      title: 'Living in Carlyle',
      paragraphs: [
        'Hoffman Town Center holds a Wegmans grocery store, and officials discussing the HUD move have pointed to the nearby restaurants and businesses. King Street and the Old Town waterfront are close by.',
      ],
    },
    {
      title: 'Brandon’s Carlyle Experience',
      paragraphs: [
        'Brandon Wilson’s Virginia license covers the whole state, and his office is in Fairfax. If you want a Carlyle Alexandria real estate agent who can check whether a condo building is VA-approved and compare Carlyle with Old Town and National Landing, start here.',
      ],
    },
  ],
  faqs: [
    { q: 'Is Carlyle the same as Eisenhower East?', a: 'They overlap. Carlyle is part of the larger Eisenhower East area, and both follow the same small area plan.' },
    { q: 'Which Metro station is closer, Eisenhower Avenue or King Street?', a: 'It depends on the building. We measure the walk from the front door to each station before you decide.' },
    { q: 'Is Carlyle good for federal and military buyers?', a: 'It is close to the Patent Office, a federal courthouse and the HUD headquarters. We check whether a building is VA-approved before you tour, since an unapproved building can delay a VA loan.' },
  ],
  cta: 'Ready to look at Carlyle Alexandria homes for sale? Tell Brandon whether you want a high-rise or a smaller building, how close you need to be to work, and which Metro station fits your commute.',
};

export const rosemont: NeighborhoodGuide = {
  slug: 'rosemont',
  name: 'Rosemont',
  city: 'Alexandria, VA',
  cityHref: '/alexandria',
  title: 'Rosemont Alexandria Homes for Sale | Rosemont Alexandria Guide',
  description: 'Rosemont Alexandria guide: bungalows and colonials near King Street Metro and Old Town. Browse Rosemont Alexandria real estate and homes for sale.',
  ogTitle: 'Rosemont, Alexandria: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Bungalows and colonials near King Street Metro and Old Town, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Rosemont, Alexandria: Neighborhood Guide and Homes for Sale',
    text: 'Rosemont is a northwest Alexandria, Virginia neighborhood of bungalows, colonials and Arts and Crafts houses on tree-lined streets, a few blocks from the King Street Metro. This guide covers Rosemont, Alexandria in practical terms. If you are comparing Rosemont Alexandria homes for sale, the sections below explain what the historic label does and does not mean, the streetcar-era plan and the transit nearby.',
    image: alexandriaPhoto,
    imageAlt: 'Tree-lined residential street in Rosemont, Alexandria, Virginia',
    listingsLabel: 'See Rosemont Listings',
  },
  facts: [
    { label: 'City', value: 'Alexandria, Virginia (an independent city)' },
    { label: 'ZIP code', value: '22301' },
    { label: 'Main streets', value: 'King Street, Commonwealth Avenue, Russell Road and Braddock Road' },
    { label: 'Metro', value: 'King Street-Old Town (Blue and Yellow lines) and Braddock Road are both within walking distance. Alexandria Union Station adds Amtrak and Virginia Railway Express' },
    { label: 'Landmarks', value: 'The George Washington Masonic National Memorial, Ivy Hill Cemetery, Alexandria Union Station' },
    { label: 'Typical homes', value: 'Craftsman bungalows, traditional colonials and Arts and Crafts houses' },
    { label: 'Rules', value: 'A National Register and Virginia Landmarks Register district of about 84 acres, not regulated by the city’s Board of Architectural Review' },
    { label: 'Edges', value: 'Northwest of Old Town, with King Street on the south and Commonwealth Avenue on the east' },
    UPDATED,
  ],
  about: {
    title: 'A Streetcar Suburb on Spring Park Land',
    paragraphs: [
      'Rosemont, Alexandria dates to 1908. The land was once known as Spring Park before the Alexandria Realty Company and then the Rosemont Development Company acquired it and laid out a planned suburb served by the Washington, Alexandria and Mount Vernon Electric Railway.',
      'The original street plan is still intact and reflects City Beautiful ideals of the early 1900s. About half a dozen older houses stand near King Street, the old Leesburg Turnpike, including Eastern View at 2525 King Street, built around 1819. The district joined the National Register in 1992.',
    ],
  },
  listings: { title: 'Browse Rosemont Alexandria Homes for Sale', text: VIP, state: 'VA', zips: ['22301'], viewAllHref: '/properties' },
  market: {
    title: 'Rosemont Real Estate Market',
    paragraphs: [
      'Rosemont Alexandria real estate is a small, mostly single-family market, so one or two sales can move the averages. Bungalows and larger colonials draw different buyers.',
      'For a custom comparison on a specific house, request a Rosemont price check.',
    ],
  },
  sections: [
    {
      title: 'A Historic District With No Design Board',
      paragraphs: [
        'Rosemont’s National Register listing recognizes its history, but the City of Alexandria says National Register districts are not regulated by its historic preservation staff. The city’s Board of Architectural Review covers only the Old and Historic Alexandria District, the Parker-Gray District and buildings the City Council designates as 100 years old.',
        'For a Rosemont buyer, a porch or window project usually needs a standard building permit, not a design certificate. Zoning still applies, and Alexandria’s recent zoning changes are covered in our Del Ray guide.',
      ],
    },
    {
      title: 'Streets Named for Washington’s Circle',
      paragraphs: [
        'Most Rosemont streets carry tree names. When the northeast corner was laid out in the 1920s, the Masonic Memorial was under construction, and several streets there were first named for people from George Washington’s circle, including a pallbearer and two of his physicians.',
      ],
    },
    {
      title: 'A Fourth of July Tradition',
      paragraphs: [
        'The Rosemont Citizens Association, founded in 1954, has hosted an old-fashioned Fourth of July celebration since 1967. Neighbors gather on school grounds, and the event reflects the association’s goal of getting people out to meet each other.',
      ],
    },
    {
      title: 'Getting Around Rosemont',
      paragraphs: [
        'The King Street Metro station is a few blocks away and serves the Blue and Yellow lines. Braddock Road station is also within walking distance, and Union Station next to King Street adds Amtrak and Virginia Railway Express service. Nearly every westbound DASH and Metro bus passes along King Street and Braddock Road.',
      ],
    },
    {
      title: 'Living in Rosemont',
      paragraphs: [
        'The George Washington Masonic National Memorial sits at the neighborhood’s edge, and Ivy Hill Cemetery to the northeast is the burial place of rocket scientist Wernher von Braun. Rosemont residents can walk to Old Town and Del Ray, according to the civic association.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Rosemont Experience',
    paragraphs: ['If you want a Rosemont real estate agent who can explain what the National Register label means for a renovation and compare Rosemont with Old Town and Del Ray, Brandon Wilson is licensed across Virginia and works from an office in Fairfax.'],
  },
  nearby: [
    { name: 'Old Town Alexandria', text: 'To the southeast' },
    { name: 'Del Ray', text: 'To the north' },
    { name: 'Carlyle', text: 'On the Alexandria city page' },
  ],
  faqTitle: 'Rosemont FAQ',
  faqs: [
    { q: 'Can a Rosemont house still have design protections?', a: 'Yes, if the City Council has designated it a 100-year-old building. Those buildings fall under the Board of Architectural Review even outside the local historic districts, so ask the city whether the address is designated.' },
    { q: 'Is Rosemont part of Old Town?', a: 'No. Rosemont lies northwest of Old Town, within walking distance of both Old Town and Del Ray. Its district rules differ from Old Town’s.' },
    { q: 'Where does the Rosemont historic district end?', a: 'It is roughly bounded by Commonwealth Avenue, West Walnut Street, Russell Road, Rucker Place and King Street. Check the city’s historic preservation map for a specific address.' },
  ],
  cta: {
    title: 'Ready to Look at Rosemont Alexandria Homes for Sale?',
    text: 'Tell Brandon whether you want a bungalow or a larger colonial, and how important the walk to the Metro is. He will check the permit rules and any 100-year-old building designation before you tour.',
    button: 'Search Rosemont Homes',
  },
};

export const kenwood: NeighborhoodGuide = {
  slug: 'kenwood',
  name: 'Kenwood',
  city: 'Bethesda, MD',
  cityHref: '/bethesda',
  title: 'Kenwood Bethesda Homes for Sale | Kenwood Bethesda Guide',
  description: 'Kenwood Bethesda guide: the cherry blossom neighborhood off River Road. Browse Kenwood Bethesda real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Kenwood, Bethesda: Neighborhood Guide and Homes for Sale',
  ogDescription: 'The cherry blossom neighborhood off River Road, with a licensed Maryland Realtor.',
  hero: {
    h1: 'Kenwood, Bethesda: Neighborhood Guide and Homes for Sale',
    text: 'Kenwood is a Bethesda, Maryland neighborhood known for about 1,200 cherry trees along its streets, set between River Road and Little Falls Parkway near the DC line. This guide covers Kenwood, Bethesda in practical terms. If you are comparing Kenwood Bethesda homes for sale, the sections below explain life on a blossom street, the layout and the Montgomery County details that matter.',
    image: bethesdaPhoto,
    imageAlt: 'Bethesda, Maryland, near the Kenwood neighborhood',
    listingsLabel: 'See Kenwood Listings',
  },
  facts: [
    { label: 'County', value: 'Montgomery County, Maryland (Bethesda)' },
    { label: 'ZIP code', value: '20816' },
    { label: 'Main streets', value: 'River Road, Dorset Avenue, Kennedy Drive, Kenwood Avenue and Little Falls Parkway' },
    { label: 'Metro', value: 'None inside. Bethesda station (Red Line) is about a mile and a half away by way of the Capital Crescent Trail' },
    { label: 'Landmarks', value: 'The cherry trees, Kenwood Golf and Country Club (5601 River Road), the Capital Crescent Trail' },
    { label: 'Typical homes', value: 'Large detached houses on bigger-than-average lots, with new construction mixed in' },
    { label: 'Rules', value: 'Montgomery County zoning and permits' },
    { label: 'Edges', value: 'Between Little Falls Parkway and River Road, about two miles east of downtown Bethesda' },
    UPDATED,
  ],
  about: {
    title: 'A Developer Who Planted Trees',
    paragraphs: [
      'Kenwood, Bethesda was planned in 1926 by the developers Edgar Kennedy and Donald Chamberlain, with Charles Jerman, on land they first meant to turn into an amusement park. To draw buyers, the developer planted cherry trees in the 1930s and 1940s, and some of the first trees went in during the 1920s.',
      'About 1,200 of those trees remain, and some are more than 90 years old. The best viewing is along Kennedy Drive, Dorset Avenue and Kenwood Avenue.',
    ],
  },
  listings: { title: 'Browse Kenwood Bethesda Homes for Sale', text: VIP, state: 'MD', zips: ['20816'], viewAllHref: '/properties' },
  market: {
    title: 'Kenwood Real Estate Market',
    paragraphs: [
      'Kenwood Bethesda real estate is a market of large houses, often on larger lots than nearby neighborhoods, and new construction competes with older homes. Prices swing with lot size and finish level.',
      'For a custom comparison on a specific house, request a Kenwood price check.',
    ],
  },
  sections: [
    {
      title: 'Living on a Blossom Street',
      paragraphs: [
        'Each spring, thousands of visitors come. Peak bloom arrives about three to four days after the Tidal Basin’s, and Montgomery County bans street parking in Kenwood during peak bloom.',
        'The streets are narrow and have no sidewalks, so everyone moves slowly. Residents post playful signs and welcome visitors, but a buyer should see the neighborhood once during bloom and once in another season to judge whether the spring crowds suit the way you live.',
      ],
    },
    {
      title: 'Large Lots, Few Shops',
      paragraphs: [
        'People move to Kenwood for larger lots, schools and a short trip to downtown Bethesda, according to local agents. Retail is limited, with a Whole Foods and a Giant on River Road, and Bethesda’s restaurants and shops are about two miles away.',
        'The members-only Kenwood Golf and Country Club runs through the hilly land from River Road across Goldsboro Road, and parts of the club reach into the neighborhood.',
      ],
    },
    {
      title: 'Getting Around Kenwood',
      paragraphs: [
        'There is no Metro station inside Kenwood. The Capital Crescent Trail runs along the neighborhood, and the walk from the Bethesda Metro station is about a mile and a half. Driving from DC takes 30 to 45 minutes, depending on the hour.',
      ],
    },
    {
      title: 'Living in Kenwood',
      paragraphs: [
        'Jump Park, on the Capital Crescent Trail at Little Falls Parkway, is a popular picnic spot. Students are zoned for Montgomery County Public Schools, and the private Landon School and Holton-Arms School are nearby.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Kenwood Experience',
    paragraphs: ['If you want a Kenwood real estate agent who can weigh a large lot here against the smaller, more walkable lots around Edgemoor and Chevy Chase, Brandon Wilson holds a Maryland license and can run that comparison for you.'],
  },
  nearby: [
    { name: 'Edgemoor', text: 'To the west' },
    { name: 'Downtown Bethesda', text: 'To the west' },
    { name: 'Chevy Chase DC', text: 'To the southeast, across the DC line' },
  ],
  faqTitle: 'Kenwood FAQ',
  faqs: [
    { q: 'Is it Kenwood or Kenwood Park?', a: 'Both names appear. Many listing sites use Kenwood Park, and neighbors and visitors use Kenwood, so search both.' },
    { q: 'How do the cherry trees affect a buyer?', a: 'They are an asset and a maintenance item. Ask which trees sit on the lot and which stand in the county right-of-way, and ask whether an arborist has looked at the older ones.' },
    { q: 'Is Kenwood in DC or Maryland?', a: 'Kenwood is in Montgomery County, Maryland, close to the DC line, and is considered part of Bethesda and Chevy Chase. Taxes, permits and schools follow Maryland and the county.' },
  ],
  cta: {
    title: 'Ready to Look at Kenwood Bethesda Homes for Sale?',
    text: 'Tell Brandon what lot size you want and how you feel about the spring crowds. He will help you plan a visit during bloom and check county rules for each address.',
    button: 'Search Kenwood Homes',
  },
};

export const edgemoor: NeighborhoodGuide = {
  slug: 'edgemoor',
  name: 'Edgemoor',
  city: 'Bethesda, MD',
  cityHref: '/bethesda',
  title: 'Edgemoor Bethesda Homes for Sale | Edgemoor Bethesda Guide',
  description: 'Edgemoor Bethesda guide: houses beside Bethesda Row and the Metro. Browse Edgemoor Bethesda real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Edgemoor, Bethesda: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Houses beside Bethesda Row and the Metro, with a licensed Maryland Realtor.',
  hero: {
    h1: 'Edgemoor, Bethesda: Neighborhood Guide and Homes for Sale',
    text: 'Edgemoor is a Bethesda, Maryland neighborhood of single-family houses on the edge of downtown, within walking distance of Bethesda Row and about a mile from the Metro. This guide covers Edgemoor, Bethesda in practical terms. If you are comparing Edgemoor Bethesda homes for sale, the sections below explain how the neighborhood began, how downtown growth reaches its borders and which county rules matter.',
    image: bethesdaPhoto,
    imageAlt: 'Bethesda Row, a short walk from Edgemoor, Bethesda, Maryland',
    listingsLabel: 'See Edgemoor Listings',
  },
  facts: [
    { label: 'County', value: 'Montgomery County, Maryland (Bethesda)' },
    { label: 'ZIP code', value: '20814' },
    { label: 'Main streets', value: 'Edgemoor Lane, Woodmont Avenue, Old Georgetown Road and Wisconsin Avenue' },
    { label: 'Metro', value: 'Bethesda station (Red Line), about a mile east' },
    { label: 'Landmarks', value: 'Bethesda Row, Woodmont Triangle, Sidwell Friends Lower School, the Bethesda-Chevy Chase Regional Services Center, the Capital Crescent Trail' },
    { label: 'Typical homes', value: 'Single-family houses, many renovated or rebuilt, with apartment and condo buildings toward downtown' },
    { label: 'Rules', value: 'Montgomery County zoning, with downtown planning rules nearby' },
    { label: 'Edges', value: 'The Edgemoor Citizens Association covers Edgemoor, Bradley Village and parts of Bradley Hills' },
    UPDATED,
  ],
  about: {
    title: 'Old Edgemoor: A Farm Becomes the First Streets',
    paragraphs: [
      'Edgemoor began when a local landowner, Mr. Tuckerman, known as Tuck, turned his farm into Old Edgemoor, described in a local history collection as the finest residential neighborhood and first commercial center of Bethesda. In his day, he said, you could not buy a cup of coffee in Bethesda.',
      'Edgemoor Lane started as a trail used by Native Americans and grew into a major street. Early residents remembered walking along its muddy surface to catch the streetcar on Wisconsin Avenue.',
    ],
  },
  listings: { title: 'Browse Edgemoor Bethesda Homes for Sale', text: VIP, state: 'MD', zips: ['20814'], viewAllHref: '/properties' },
  market: {
    title: 'Edgemoor Real Estate Market',
    paragraphs: [
      'Edgemoor Bethesda real estate is mostly single-family, and the walk to Bethesda Row and the Metro is a large part of the price. Renovated and rebuilt houses compete with original ones on the same streets.',
      'For a custom comparison on a specific house, request an Edgemoor price check.',
    ],
  },
  sections: [
    {
      title: 'Where Downtown Meets the Neighborhood',
      paragraphs: [
        'The Edge, a 15-story tower at Edgemoor Lane and Woodmont Avenue, links the older Woodmont Triangle to the north with Bethesda Row to the south. A 12-story building proposed at 4824 Edgemoor Lane was designed as a transition from the neighborhood to the urban core.',
        'A 2026 UrbanTurf report counted 16 projects and about 6,500 units in Bethesda’s building pipeline. Before you buy, look at what is planned within a few blocks of the house you like.',
      ],
    },
    {
      title: 'Montgomery County’s New Housing Rules',
      paragraphs: [
        'On July 22, 2025, the Montgomery County Council voted 8 to 3 for Zoning Text Amendment 25-02. It allows duplexes, triplexes, townhouses and small apartment buildings up to 40 feet tall on land zoned for single-family homes along designated corridors, with Planning Board review of each project.',
        'The measure is narrower than the Planning Board’s earlier Attainable Housing Strategies, which would have allowed duplexes in most single-family zones. Ask whether an address sits on a designated corridor, since that decides whether the rule can apply next door.',
      ],
    },
    {
      title: 'Schools and Civic Life',
      paragraphs: [
        'Sidwell Friends Lower School sits at Edgemoor Lane and Beverly Road, and the Bethesda-Chevy Chase Regional Services Center at 4805 Edgemoor Lane hosts community meetings, including project reviews for downtown Bethesda. Local guides name Bethesda Elementary and Westland Middle School for public school zoning.',
      ],
    },
    {
      title: 'Getting Around Edgemoor',
      paragraphs: [
        'The Bethesda Metro station, built in 1984 on the Red Line, is about a mile east of Edgemoor. The Capital Crescent Trail starts on Bethesda Avenue, and most daily errands are within walking distance of Bethesda Row.',
      ],
    },
    {
      title: 'Living in Edgemoor',
      paragraphs: [
        'Bethesda Row holds shops, restaurants and a fall arts festival, and Woodmont Triangle adds bars and late-night dining. Edgemoor’s own streets are quiet, residential and a short walk from both.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Edgemoor Experience',
    paragraphs: ['If you want an Edgemoor real estate agent who will read the downtown plans before your offer, Brandon Wilson’s Maryland license covers Montgomery County, and he can check what is proposed near each address.'],
  },
  nearby: [
    { name: 'Downtown Bethesda', text: 'To the east' },
    { name: 'Kenwood', text: 'To the east' },
  ],
  faqTitle: 'Edgemoor FAQ',
  faqs: [
    { q: 'Is Edgemoor part of downtown Bethesda?', a: 'It borders downtown. Edgemoor is a single-family neighborhood, and downtown Bethesda begins at Bethesda Row and Woodmont Triangle.' },
    { q: 'Is The Edgemoor the same as the neighborhood?', a: 'No. The Edgemoor is an apartment building at 4821 Montgomery Lane that shares the name. Searches for the name can return both, so check the address.' },
    { q: 'What is the Edgemoor Citizens Association?', a: 'It is an all-volunteer civic group for Edgemoor, Bradley Village and parts of Bradley Hills. It follows development proposals and neighborhood issues.' },
  ],
  cta: {
    title: 'Ready to Look at Edgemoor Bethesda Homes for Sale?',
    text: 'Tell Brandon how close to Bethesda Row you want to be and whether a renovated or original house suits you. He will check nearby projects and county rules for each address before you tour.',
    button: 'Search Edgemoor Homes',
  },
};

const dcPhoto = `${ASSETS}/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg`;

export const woodleyPark: NeighborhoodGuide = {
  slug: 'woodley-park',
  name: 'Woodley Park',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Woodley Park DC Real Estate | Woodley Park DC Guide',
  description: 'Woodley Park DC guide: a Red Line village by the National Zoo with rowhouses and apartments. Browse Woodley Park DC real estate and homes for sale.',
  ogTitle: 'Woodley Park, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'A Red Line village beside the National Zoo, with historic rowhouses and apartments and a licensed DC Realtor.',
  hero: {
    h1: 'Woodley Park, DC: Neighborhood Guide and Homes for Sale',
    text: 'Woodley Park is a Washington, DC neighborhood beside the National Zoo, with a Red Line station, a Connecticut Avenue restaurant strip, historic rowhouses and mid-rise apartment buildings. This guide covers Woodley Park, DC in practical terms. If you are comparing Woodley Park DC real estate, the sections below explain the historic district, the avenue and a hotel site that is about to change.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Woodley Park neighborhood beside the National Zoo',
    listingsLabel: 'See Woodley Park Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3C)' },
    { label: 'ZIP code', value: '20008' },
    { label: 'Main streets', value: 'Connecticut Avenue NW, Calvert Street NW, Woodley Road NW and Cathedral Avenue NW' },
    { label: 'Metro', value: 'Woodley Park-Zoo/Adams Morgan station (Red Line), between Dupont Circle and Cleveland Park' },
    { label: 'Landmarks', value: 'The Smithsonian’s National Zoo, the Taft Bridge, the Omni Shoreham Hotel, the former Marriott Wardman Park site and the Wardman Tower' },
    { label: 'Typical homes', value: 'Early 1900s rowhouses in the historic district, plus condos, co-ops and rentals in mid-rise apartment buildings on Connecticut Avenue' },
    { label: 'Rules', value: 'The Old Woodley Park Historic District' },
    { label: 'Edges', value: 'The historic district is roughly bounded by Rock Creek Park, 24th Street, 29th Street, Woodley Road and Cathedral Avenue' },
    UPDATED,
  ],
  about: {
    title: 'A Streetcar Stop Beside a Zoo',
    paragraphs: [
      'Woodley Park, DC developed between 1905 and 1938, according to the city’s historic district record, and the builder Harry Wardman shaped the look of the Connecticut Avenue corridor. Two large hotels grew up on the edges, the Omni Shoreham on Calvert Street and the Marriott Wardman Park on Woodley Road.',
      'The Metro station opened in 1982 and turned the neighborhood into a daytime destination. The National Zoo occupies 163 acres along Rock Creek, and about two million people visit it each year.',
    ],
  },
  listings: { title: 'Browse Woodley Park DC Real Estate', text: VIP, state: 'DC', zips: ['20008'], viewAllHref: '/properties' },
  market: {
    title: 'Woodley Park Real Estate Market',
    paragraphs: [
      'Most Woodley Park DC homes for sale are apartments, so monthly fees and building rules shape value as much as location. Rowhouses in the historic district trade less often and separately.',
      'For a custom comparison on a specific building, request a Woodley Park price check.',
    ],
  },
  sections: [
    {
      title: 'The Hotel Site Is Becoming Homes',
      paragraphs: [
        'The former Marriott Wardman Park site on Woodley Road is slated for about 900 homes in two new buildings, according to plans filed by a developer affiliated with Carmel Partners. The design by Shalom Baranes Associates would shrink the building footprint, add more than two acres of open space and fold the existing arcade and the Wardman Tower into the new layout.',
        'Historic review applies to the site, so timing and details can change. If you are buying nearby, ask Brandon for the latest status before you commit.',
      ],
    },
    {
      title: 'Old Woodley Park Historic District',
      paragraphs: [
        'The Old Woodley Park Historic District joined the National Register on June 15, 1990. It covers the rowhouses and streets above Rock Creek between 24th and 29th Streets, and exterior work visible from the street goes through DC’s Historic Preservation Office.',
        'Connecticut Avenue north of the district looks different. High-rise apartment houses line it, kept to about eight stories by the city’s height limit.',
      ],
    },
    {
      title: 'Getting Around Woodley Park',
      paragraphs: [
        'The Woodley Park-Zoo/Adams Morgan station sits between Dupont Circle and Cleveland Park on the Red Line. The Taft Bridge carries Connecticut Avenue across Rock Creek Park toward Kalorama, and the Calvert Street Bridge leads to Adams Morgan, about a half-mile walk from the station.',
      ],
    },
    {
      title: 'Living in Woodley Park',
      paragraphs: [
        'The Connecticut Avenue strip holds restaurants and shops, and the Smithsonian’s National Zoo is free to enter. Rock Creek Park’s trails start at the neighborhood’s edge, so walkers and runners have green space close to the apartments.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Woodley Park Experience',
    paragraphs: ['If you want a Woodley Park real estate agent who knows how Connecticut Avenue buildings differ and who tracks the Wardman Park plans, Brandon Wilson can compare buildings with you on the same budget.'],
  },
  nearby: [
    { name: 'Adams Morgan', text: 'To the east across the Calvert Street Bridge' },
    { name: 'Dupont Circle', text: 'One stop south on the Red Line' },
    { name: 'Cleveland Park', text: 'To the north' },
    { name: 'Kalorama', text: 'To the south across the Taft Bridge' },
  ],
  faqTitle: 'Woodley Park FAQ',
  faqs: [
    { q: 'How is Woodley Park different from Cleveland Park?', a: 'Woodley Park sits south of Cleveland Park and has its own station beside the zoo. Its historic district lies west of the avenue above Rock Creek, while Cleveland Park’s district spreads west toward Wisconsin Avenue.' },
    { q: 'Is Woodley Park part of Adams Morgan?', a: 'No, though the station carries both names. Adams Morgan is to the east across the Calvert Street Bridge, and listings may use either name, so check the address.' },
    { q: 'How does the zoo affect parking and traffic?', a: 'Between the zoo and the station, visitors fill nearby streets, and parking has been a recurring topic for the neighborhood commission. Ask about the block’s permit rules and whether a unit comes with a space.' },
  ],
  cta: {
    title: 'Ready to Look at Woodley Park DC Real Estate?',
    text: 'Tell Brandon whether you want an apartment on the avenue or a rowhouse in the historic district, and how close you need to be to the Metro. He will check the building and the district rules before you tour.',
    button: 'Search Woodley Park Homes',
  },
};

export const shirlington: NeighborhoodGuide = {
  slug: 'shirlington',
  name: 'Shirlington',
  city: 'Arlington, VA',
  cityHref: '/arlington',
  title: 'Shirlington VA Real Estate | Shirlington VA Guide',
  description: 'Shirlington VA guide: an Arlington urban village with a theater, shops and a bus hub. Browse Shirlington VA real estate, condos and homes for sale.',
  ogTitle: 'Shirlington, VA: Neighborhood Guide and Homes for Sale',
  ogDescription: 'An Arlington urban village with a theater, shops and a bus hub, with a licensed Virginia Realtor.',
  hero: {
    h1: 'Shirlington, VA: Neighborhood Guide and Homes for Sale',
    text: 'Shirlington is an urban village in southern Arlington, Virginia, built around a theater, a library, a movie house and a bus hub, with condos and townhomes close by. This guide covers Shirlington, VA in practical terms. If you are comparing Shirlington VA real estate, the sections below explain the village, the bus connections and the Virginia rules for buying a condo.',
    image: arlingtonPhoto,
    imageAlt: 'Arlington, Virginia, home to the Village at Shirlington',
    listingsLabel: 'See Shirlington Listings',
  },
  facts: [
    { label: 'County', value: 'Arlington County, Virginia (an unincorporated “urban village”)' },
    { label: 'ZIP code', value: '22206' },
    { label: 'Main streets', value: 'Campbell Avenue (formerly South 28th Street), South Quincy Street, South Arlington Mill Drive and Shirley Highway (I-395), with an exit at Shirlington Circle' },
    { label: 'Metro', value: 'None. The Shirlington Bus Station offers direct service to the Pentagon Metro station' },
    { label: 'Landmarks', value: 'Signature Theatre, Shirlington Library, AMC Loews Shirlington 7, Four Mile Run' },
    { label: 'Typical homes', value: 'Condos, including some above shops, plus garden-style condos and townhomes in the West Village' },
    { label: 'Rules', value: 'Arlington County zoning and the Virginia Condominium Act' },
    { label: 'Edges', value: 'Shirlington sits in the valley of Four Mile Run, with Fairlington rising to the south and Green Valley to the north' },
    UPDATED,
  ],
  about: {
    title: 'Named for a Highway, Built as a Village',
    paragraphs: [
      'The name Shirlington combines Shirley, for Shirley Highway (I-395), and Arlington. Fairlington, a combination of Fairfax and Arlington, came first, and the area’s first library opened in 1947 as the Fairlington Library, inside the Shirlington Trust Building on South Randolph Street.',
      'Shirley Highway was rebuilt between 1969 and 1972, which set the traffic circle that exists today. Since the mid-1980s, the shopping center has been known as the Village at Shirlington, and later additions brought a Harris Teeter, a library branch and a new home for Signature Theatre, which opened in March 2007.',
    ],
  },
  listings: { title: 'Browse Shirlington VA Real Estate', text: VIP, state: 'VA', zips: ['22206'], viewAllHref: '/properties' },
  market: {
    title: 'Shirlington Real Estate Market',
    paragraphs: [
      'Condos and townhomes dominate the market, so fees and association rules matter as much as price. Shirlington VA homes for sale in detached form are rare, and buyers who want a house usually look in nearby Arlington and Alexandria neighborhoods.',
      'For a custom comparison on a specific building, request a Shirlington price check.',
    ],
  },
  sections: [
    {
      title: 'A Bus Station That Works Like a Metro Stop',
      paragraphs: [
        'Shirlington has no Metro station. The Shirlington Bus Station is the only enclosed public bus station in Arlington and the main transfer point for Metrobus and Arlington Transit in South Arlington. It offers direct service to the Pentagon Metro station, plus rush-hour service to Pentagon City.',
        'Time the bus, not the train, when you judge the commute, and test the trip at rush hour before you decide.',
      ],
    },
    {
      title: 'Shirlington VA Condos for Sale and Townhomes',
      paragraphs: [
        'Some homes sit above the restaurants and shops in the Village at Shirlington. Across Four Mile Run, the West Village holds garden-style condos, two-bedroom cottages and three-bedroom townhomes, according to local brokers.',
        'Fairlington, next door, predates Shirlington and has its own historic district and historical society, so check which neighborhood a listing belongs to.',
      ],
    },
    {
      title: 'Buying a Condo in Virginia',
      paragraphs: [
        'Virginia gives condo buyers a clear paper trail. The seller must get a resale certificate from the association, on a standard state form, and deliver it to you, normally within 14 days of your request.',
        'After you receive it, you can cancel the contract within three days, or up to seven if your contract extends the period. If the certificate never arrives, you can cancel at any time before settlement. Brandon explains how that clock runs on each purchase.',
      ],
    },
    {
      title: 'Getting Around Shirlington',
      paragraphs: [
        'Drivers reach the village from Shirlington Circle on I-395, and the Four Mile Run Trail links with the Washington and Old Dominion Trail and the Mount Vernon Trail. A large dog park sits beside Four Mile Run behind the village.',
      ],
    },
    {
      title: 'Living in Shirlington',
      paragraphs: [
        'Signature Theatre, a Tony Award-winning company, anchors the village, along with Theatre on the Run, the AMC Loews Shirlington 7 and the Harris Teeter. Shirlington Park, Jennie Dean Park and the Fairlington Community Center are close by, and the library branch shares a building with the theater.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Shirlington Experience',
    paragraphs: ['If you want a Shirlington real estate agent who works in Virginia and can walk you through a resale certificate line by line, Brandon Wilson is licensed across the state and works from an office in Fairfax.'],
  },
  nearby: [
    { name: 'Old Town Alexandria', text: 'To the southeast' },
    { name: 'Potomac Yard', text: 'To the east' },
    { name: 'Carlyle', text: 'On the Alexandria city page' },
  ],
  faqTitle: 'Shirlington FAQ',
  faqs: [
    { q: 'Is Shirlington part of Alexandria?', a: 'No. Shirlington is in Arlington County, next to Fairlington and close to the Alexandria line. Check the county on every listing, since the two jurisdictions have different taxes and rules.' },
    { q: 'How is Shirlington different from Fairlington?', a: 'Fairlington came first and holds a historic district of its own. Shirlington is the newer commercial village on the valley floor, with the theater, shops and bus hub.' },
    { q: 'Which Arlington schools serve Shirlington?', a: 'Arlington Public Schools assign students by address and adjust boundaries from time to time. Confirm the assigned schools with the district’s boundary locator before you make an offer.' },
  ],
  cta: {
    title: 'Ready to Look at Shirlington VA Real Estate?',
    text: 'Tell Brandon whether you want a condo above the shops, a townhome across Four Mile Run or a house nearby, and how you will commute. He will walk you through the resale certificate and the bus options before you tour.',
    button: 'Search Shirlington Homes',
  },
};

export const mountPleasant: NeighborhoodGuide = {
  slug: 'mount-pleasant',
  name: 'Mount Pleasant',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Mount Pleasant DC Real Estate | Mount Pleasant DC Guide',
  description: 'Mount Pleasant DC guide: rowhouses, a historic district and a Saturday market. Browse Mount Pleasant DC real estate, condos and homes for sale with Brandon.',
  ogTitle: 'Mount Pleasant, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Rowhouses, a historic district and a village-style main street, with a licensed DC Realtor.',
  hero: {
    h1: 'Mount Pleasant, DC: Neighborhood Guide and Homes for Sale',
    text: 'Mount Pleasant is a Washington, DC neighborhood built around an old streetcar terminus, with a mix of building types on tree-lined blocks beside Rock Creek Park. This guide covers Mount Pleasant, DC in practical terms. If you are comparing Mount Pleasant DC real estate, the sections below explain the historic district, the main street and what daily life looks like here.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Mount Pleasant neighborhood',
    listingsLabel: 'See Mount Pleasant Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 1, ANC 1D)' },
    { label: 'ZIP code', value: '20010' },
    { label: 'Main streets', value: 'Mount Pleasant Street NW, 16th Street NW, Park Road NW and Lamont Street NW' },
    { label: 'Metro', value: 'No station inside. Columbia Heights (Green and Yellow lines) is the closest' },
    { label: 'Landmarks', value: 'Lamont Park and its Saturday farmers market, the 1925 Mount Pleasant Library, Walter-Pierce Park, Rock Creek Park' },
    { label: 'Typical homes', value: 'Rowhouses, detached houses and small apartment buildings, with some condos' },
    { label: 'Rules', value: 'The Mount Pleasant Historic District, with design guidelines published by Historic Mount Pleasant' },
    { label: 'Edges', value: 'North of Adams Morgan and west of Columbia Heights, with Rock Creek Park along the west side. About 10,000 people live here' },
    UPDATED,
  ],
  about: {
    title: 'A Streetcar Terminus Turned Village',
    paragraphs: [
      'Mount Pleasant, DC grew where the streetcar line ended, at what is now Lamont Park. Stores followed the riders, and in 1905 a Capitol Hill druggist built a turreted drugstore at the corner of Park Road that is still standing.',
      'The Mount Pleasant Library opened in 1925 with Carnegie funds, and it is among the oldest library buildings still in use in the city. The neighborhood joined the National Register of Historic Places as a district in 1987, with nearly 1,000 contributing buildings. Historic Mount Pleasant, formed in 1985, led the nomination.',
    ],
  },
  listings: { title: 'Browse Mount Pleasant DC Real Estate', text: VIP, state: 'DC', zips: ['20010'], viewAllHref: '/properties' },
  market: {
    title: 'Mount Pleasant Real Estate Market',
    paragraphs: [
      'Houses, rowhouses and condos all trade here, and each follows its own price path, so a single neighborhood median says little. Mount Pleasant DC homes for sale range from small apartments to full rowhouses.',
      'For a custom comparison on a specific home, request a Mount Pleasant price check.',
    ],
  },
  sections: [
    {
      title: 'Mount Pleasant Street and Lamont Park',
      paragraphs: [
        'The commercial corridor along Mount Pleasant Street is the neighborhood’s spine. Lamont Park at its southern end hosts a farmers market every Saturday, plus movie nights and concerts, and Walter-Pierce Park nearby has a community garden, a dog park and chess tables.',
        'The library at 16th and Lamont Streets and the Saturday market give buyers two easy places to start a first visit.',
      ],
    },
    {
      title: 'Mount Pleasant DC Condos for Sale in Smaller Buildings',
      paragraphs: [
        'Condos here tend to sit in smaller buildings and converted houses. Fewer owners means one decision can move everyone’s monthly cost, so ask what repairs are planned and how the building handles them.',
      ],
    },
    {
      title: 'Living in a Historic District Here',
      paragraphs: [
        'Historic Mount Pleasant publishes the district’s design guidelines, a brochure and maps, and its journal explains building permit rules in plain terms. Read them before you plan exterior work, since much of the neighborhood sits inside the district.',
      ],
    },
    {
      title: 'Getting Around Mount Pleasant',
      paragraphs: [
        'There is no Metro station inside the neighborhood. Columbia Heights is the closest, and Metrobus routes run along 16th Street and Mount Pleasant Street. Adams Morgan and Columbia Heights are both within walking distance of many blocks, and Rock Creek Park trails start at the western edge.',
      ],
    },
    {
      title: 'Living in Mount Pleasant',
      paragraphs: [
        'Bancroft Elementary at 1755 Newton Street and Sacred Heart School at 1625 Park Road anchor the school scene. The western part of the neighborhood is a wooded enclave bounded on two sides by Rock Creek Park, just east of the National Zoo.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Mount Pleasant Experience',
    paragraphs: ['If you want a Mount Pleasant real estate agent who can explain both rowhouse and small-building purchases, Brandon Wilson can compare the two on the same budget and walk you through the historic district guidelines.'],
  },
  nearby: [
    { name: 'Adams Morgan', text: 'To the south' },
    { name: 'Columbia Heights', text: 'To the east' },
    { name: 'Kalorama', text: 'To the southwest' },
  ],
  faqTitle: 'Mount Pleasant FAQ',
  faqs: [
    { q: 'What is the Mount Pleasant Heritage Trail?', a: 'It is a self-guided walking trail called Village in the City, produced by Cultural Tourism DC, with signs that tell the neighborhood’s story. Walking it is a good way to see the historic blocks before you tour homes.' },
    { q: 'Which parts of Mount Pleasant are quieter?', a: 'The western blocks beside Rock Creek Park are a wooded residential area, while the commercial strip and the 16th Street edge are busier. Visit at different times of day to compare.' },
    { q: 'Which schools serve Mount Pleasant?', a: 'Bancroft Elementary is the school named in local sources. Zoned schools at every level depend on the address, so confirm with the DCPS boundary tool before you make an offer.' },
  ],
  cta: {
    title: 'Ready to Look at Mount Pleasant DC Real Estate?',
    text: 'Tell Brandon whether you want a rowhouse, a detached house or a condo in a smaller building, and how close you need to be to the Metro. He will match the search to the historic district rules before you tour.',
    button: 'Search Mount Pleasant Homes',
  },
};

export const foxhall: NeighborhoodGuide = {
  slug: 'foxhall',
  name: 'Foxhall',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Foxhall DC Homes for Sale | Foxhall DC Guide',
  description: 'Foxhall DC guide: Tudor Revival rowhouses in a planned village near Georgetown. Browse Foxhall DC real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Foxhall, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Tudor Revival rowhouses in a planned village near Georgetown, with a licensed DC Realtor.',
  hero: {
    h1: 'Foxhall, DC: Neighborhood Guide and Homes for Sale',
    text: 'Foxhall is a Washington, DC neighborhood best known for Foxhall Village, a planned community of Tudor Revival rowhouses from the 1920s and 1930s, set between Georgetown and the Palisades. This guide covers Foxhall, DC in practical terms. If you are comparing Foxhall DC homes for sale, the sections below explain the village, its design rules and the area around it.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to Foxhall Village',
    listingsLabel: 'See Foxhall Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3D)' },
    { label: 'ZIP code', value: '20007' },
    { label: 'Main streets', value: 'Foxhall Road NW, Reservoir Road NW, Q Street NW and P Street NW' },
    { label: 'Metro', value: 'No station in the neighborhood' },
    { label: 'Landmarks', value: 'Foxhall Village Historic District, Colony Hill, Glover-Archbold Park, Hardy Recreation Center, the Kreeger Museum' },
    { label: 'Typical homes', value: 'Tudor Revival rowhouses in the village, Colonial Revival houses in Colony Hill and detached houses elsewhere' },
    { label: 'Rules', value: 'Exterior alterations in Foxhall Village follow the Historic Preservation Review Board’s design guidelines' },
    { label: 'Edges', value: 'The village district is bounded by Foxhall Road, Reservoir Road, Glover-Archbold Park and P Street, with a few properties south of P' },
    UPDATED,
  ],
  about: {
    title: 'From a Cannon Maker to a Tudor Village',
    paragraphs: [
      'Foxhall, DC is named for Henry Foxall, a Scottish immigrant and mayor of Georgetown who ran a cannon foundry on Foundry Creek. A spelling error on an early sign turned Foxall into Foxhall.',
      'The village itself came a century later. After visiting Tewkesbury, England, the builder Harry Boss set out to copy its Tudor houses, and with Herbert Phelps he built 190 rowhouses between 1925 and 1930. A second builder, Waverly Taylor, added more in the same style, and about 310 buildings now make up the district.',
    ],
  },
  listings: { title: 'Browse Foxhall DC Homes for Sale', text: VIP, state: 'DC', zips: ['20007'], viewAllHref: '/properties' },
  market: {
    title: 'Foxhall Real Estate Market',
    paragraphs: [
      'Foxhall DC real estate is a small market with few listings at a time, and a rowhouse in the village trades differently from a detached house elsewhere in the area.',
      'For a custom comparison on a specific house, request a Foxhall price check.',
    ],
  },
  sections: [
    {
      title: 'A Village Planned Around Lanes and Circles',
      paragraphs: [
        'Foxhall Village was designed as a village in the city. Winding lanes, small circles and crescent-shaped open spaces replace the usual street grid, and many lots are irregular in size. Rear alleys hold garages that were built with the houses, often in pairs.',
        'Nearly all of the buildings use the Tudor Revival style, with variety in brick, stucco and wood. The Colony Hill enclave across Foxhall Road, begun in 1931 on about 12 acres, took the opposite approach and used Colonial Revival throughout.',
      ],
    },
    {
      title: 'Design Review in Foxhall Village',
      paragraphs: [
        'DC designated Foxhall Village a historic district in July 2007, and it joined the National Register that November. Because the houses have kept their original details, exterior changes go through design review under guidelines the Review Board published for the district.',
        'Colony Hill has its own historic district nomination on file. Check which district, if any, covers the address you like, since the two follow different guidelines.',
        'Georgetown University and its hospital sit nearby, and campus plans and construction are regular topics for the Foxhall Community Citizens Association. Ask about current projects when you tour.',
      ],
    },
    {
      title: 'Getting Around Foxhall',
      paragraphs: [
        'Foxhall has no Metro station. Metrobus links Foxhall Road with Georgetown and Dupont Circle, and Glover-Archbold Park gives walkers and runners a wooded route on the neighborhood’s edge.',
      ],
    },
    {
      title: 'Living in Foxhall',
      paragraphs: [
        'The Hardy Recreation Center at 4500 Q Street hosts the neighborhood association’s meetings, and the lower Q Street circle is the site of a yearly Halloween gathering. The Kreeger Museum on Foxhall Road houses modern art, so check its current visiting hours before you go.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Foxhall Experience',
    paragraphs: ['If you want a Foxhall real estate agent who can explain what the village’s guidelines mean for a window, a porch or a garage, Brandon Wilson can read them with you before you make an offer.'],
  },
  nearby: [
    { name: 'Palisades', text: 'To the northwest' },
    { name: 'Georgetown', text: 'To the southeast' },
  ],
  faqTitle: 'Foxhall FAQ',
  faqs: [
    { q: 'Why is it spelled Foxhall when the namesake spelled it Foxall?', a: 'A spelling error on an early sign added the extra letter, and the new spelling stuck. The southern part of the original subdivision briefly kept the Foxall spelling.' },
    { q: 'What is the difference between Foxhall Village and Colony Hill?', a: 'Foxhall Village is a Tudor Revival rowhouse district. Colony Hill is a smaller Colonial Revival enclave across Foxhall Road, and it is covered by a separate historic district proposal.' },
    { q: 'Where can I read the design guidelines?', a: 'The DC Historic Preservation Office publishes the Foxhall Village nomination, a brochure, maps and design guidelines. The neighborhood association also invites city staff to explain permit rules at its meetings.' },
  ],
  cta: {
    title: 'Ready to Look at Foxhall DC Homes for Sale?',
    text: 'Tell Brandon whether you want a Tudor rowhouse in the village or a detached house nearby. He will read the district guidelines with you and flag what could affect your plans.',
    button: 'Search Foxhall Homes',
  },
};

export const clevelandPark: NeighborhoodGuide = {
  slug: 'cleveland-park',
  name: 'Cleveland Park',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Cleveland Park DC Homes for Sale | Cleveland Park DC Guide',
  description: 'Cleveland Park DC guide: Victorian houses, a historic Connecticut Avenue strip and a Red Line stop. Browse Cleveland Park DC real estate and homes for sale.',
  ogTitle: 'Cleveland Park, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Historic houses, a Connecticut Avenue main street and a Red Line station, with a licensed DC Realtor.',
  hero: {
    h1: 'Cleveland Park, DC: Neighborhood Guide and Homes for Sale',
    text: 'Cleveland Park is a Washington, DC neighborhood of Victorian and Tudor houses on shaded streets, with a historic shopping strip and a Red Line station on Connecticut Avenue. This guide covers Cleveland Park, DC in practical terms. If you are comparing Cleveland Park DC homes for sale, the sections below explain the historic district, the avenue and the area to the north that shares the name.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Cleveland Park neighborhood',
    listingsLabel: 'See Cleveland Park Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3C)' },
    { label: 'ZIP code', value: '20008' },
    { label: 'Main streets', value: 'Connecticut Avenue NW and Wisconsin Avenue NW' },
    { label: 'Metro', value: 'Cleveland Park station (Red Line), on Connecticut Avenue between Ordway and Porter Streets' },
    { label: 'Landmarks', value: 'Uptown Theater, the Park and Shop, the 1916 firehouse, Rosedale and Tregaron. The National Zoo and Rock Creek Park are close' },
    { label: 'Typical homes', value: 'Detached houses in Queen Anne, bungalow, Italianate and Tudor styles, plus apartment buildings along Connecticut Avenue' },
    { label: 'Rules', value: 'The Cleveland Park Historic District, where visible exterior work is reviewed by DC’s Historic Preservation Office' },
    { label: 'Edges', value: 'The historic district is roughly bounded by Tilden Street, Connecticut Avenue, Klingle Road and Wisconsin Avenue' },
    UPDATED,
  ],
  about: {
    title: 'A Streetcar Suburb Named for a President',
    paragraphs: [
      'Cleveland Park, DC takes its name from President Grover Cleveland, who bought a country house here in 1886. The Connecticut Avenue streetcar, more than the Wisconsin Avenue line, opened the area to development, and builders filled the hillsides with houses over the next few decades.',
      'The historic district was designated in 1987, with a period of significance from 1880 to 1941. The Cleveland Park Historical Society, founded in 1985, and ANC 3C applied for it together. Rosedale, one of the oldest surviving houses in Washington, still stands inside the neighborhood.',
    ],
  },
  listings: { title: 'Browse Cleveland Park DC Homes for Sale', text: VIP, state: 'DC', zips: ['20008'], viewAllHref: '/properties' },
  market: {
    title: 'Cleveland Park Real Estate Market',
    paragraphs: [
      'Cleveland Park DC real estate covers two different purchases, a detached house on a side street and an apartment on Connecticut Avenue.',
      'For a custom comparison on a specific home, request a Cleveland Park price check.',
    ],
  },
  sections: [
    {
      title: 'A Main Street Built Along the Streetcar',
      paragraphs: [
        'The shopping strip grew beside the streetcar line. The 1916 firehouse at 3522 Connecticut Avenue was its first commercial building, and the Park and Shop at 3529, built in 1930, is recognized as a milestone in shopping center design, with parking and a gas station planned in from the start.',
        'The Uptown Theater opened in 1936. DC designated it a historic landmark on May 26, 2022, and it joined the National Register that December. In 2023, the Cleveland Park Historical Society published design guidelines for the commercial district, which matter if you plan to live above or next to a shop.',
      ],
    },
    {
      title: 'Living in the Historic District',
      paragraphs: [
        'The rules here are about how a block looks from the street. Before you plan a new porch, a rear addition or window replacements, ask the Historic Preservation Office whether the work is reviewed.',
        'The district has an edge worth knowing. Local reporting notes that the Connecticut Avenue strip is in the district while the west side of Wisconsin Avenue is not, so two nearby commercial streets can follow different rules.',
      ],
    },
    {
      title: 'North Cleveland Park',
      paragraphs: [
        'The area to the north, listed as North Cleveland Park, shares the trees and quiet streets, and Brandon covers it in the same search. In the 1980s, the city set aside 47 acres in North Cleveland Park for embassies, so some blocks have diplomatic neighbors.',
      ],
    },
    {
      title: 'Getting Around Cleveland Park',
      paragraphs: [
        'Cleveland Park has its own Red Line station, which puts Dupont Circle and downtown on one train. Woodley Park and the National Zoo sit just south on Connecticut Avenue, and Wisconsin Avenue has frequent bus service.',
      ],
    },
    {
      title: 'Living in Cleveland Park',
      paragraphs: [
        'Connecticut Avenue holds restaurants, shops and the Uptown, and the Rosedale and Tregaron conservancies protect open land and old houses nearby. The neighborhood sits beside the National Cathedral, the National Zoo, Glover-Archbold Park and Rock Creek Park.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Cleveland Park Experience',
    paragraphs: ['If you want a Cleveland Park real estate agent who knows which exterior projects need city review before you write an offer, Brandon Wilson can walk you through the district rules and compare the neighborhood with nearby areas.'],
  },
  nearby: [
    { name: 'Woodley Park', text: 'To the south' },
    { name: 'Forest Hills', text: 'To the north' },
    { name: 'Chevy Chase DC', text: 'To the north up Connecticut Avenue' },
  ],
  faqTitle: 'Cleveland Park FAQ',
  faqs: [
    { q: 'Are there condos or co-ops in Cleveland Park?', a: 'Yes, in apartment buildings along Connecticut Avenue, including 1920s buildings such as the Broadmoor and Sedgwick Gardens. Ask whether a unit is a condo or a co-op, since approval and financing rules differ.' },
    { q: 'Is the whole neighborhood inside the historic district?', a: 'No. Listings use the Cleveland Park name for blocks outside the district boundary. Ask the Historic Preservation Office whether the address sits inside it.' },
    { q: 'How is Cleveland Park different from Woodley Park?', a: 'They are Red Line neighbors on Connecticut Avenue. Cleveland Park’s historic district runs west from the avenue to Wisconsin Avenue, while Woodley Park sits to the south toward the National Zoo and has its own station. Compare both before you decide.' },
  ],
  cta: {
    title: 'Ready to Look at Cleveland Park DC Homes for Sale?',
    text: 'Tell Brandon whether you want a house inside the historic district or an apartment on Connecticut Avenue near the Metro. He will check what the district rules mean for your plans before you tour.',
    button: 'Search Cleveland Park Homes',
  },
};

export const kalorama: NeighborhoodGuide = {
  slug: 'kalorama',
  name: 'Kalorama',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Kalorama DC Homes for Sale | Kalorama DC Guide',
  description: 'Kalorama DC guide: row houses, pre-war apartments and large homes near Embassy Row. Browse Kalorama DC real estate and homes for sale with Brandon.',
  ogTitle: 'Kalorama, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Row houses, historic apartments and large homes near Embassy Row, with a licensed DC Realtor.',
  hero: {
    h1: 'Kalorama, DC: Neighborhood Guide and Homes for Sale',
    text: 'Kalorama is a Washington, DC neighborhood made of two parts, Kalorama Triangle and Sheridan-Kalorama, with housing that runs from row houses and pre-war apartments to large detached houses near Embassy Row. This guide covers Kalorama, DC in practical terms. If you are comparing Kalorama DC homes for sale, the sections below explain the rules and choices that shape the buying process here.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to Kalorama and Embassy Row',
    listingsLabel: 'See Kalorama Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Wards 1 and 2)' },
    { label: 'Advisory Neighborhood Commissions', value: 'ANC 1C covers Kalorama Triangle and ANC 2D covers Sheridan-Kalorama' },
    { label: 'ZIP codes', value: '20008 and 20009' },
    { label: 'Main streets', value: 'Connecticut Avenue NW, Massachusetts Avenue NW, Columbia Road NW and Florida Avenue NW' },
    { label: 'Metro', value: 'No station inside the neighborhood. Dupont Circle and Woodley Park-Zoo/Adams Morgan (both Red Line) are the closest' },
    { label: 'Landmarks', value: 'Spanish Steps, Sheridan Circle, Mitchell Park, Woodrow Wilson House' },
    { label: 'Typical homes', value: 'Apartment buildings with condos and co-ops, row houses and large detached houses' },
    { label: 'Rules', value: 'Exterior work in both historic districts goes through DC’s Historic Preservation Office' },
    { label: 'Edges', value: 'Kalorama Triangle sits roughly between Connecticut Avenue, Columbia Road and Calvert Street. Sheridan-Kalorama is roughly bounded by Rock Creek Park, P Street, 22nd Street, Florida Avenue and Connecticut Avenue' },
    UPDATED,
  ],
  about: {
    title: 'A Country Estate Named for a Fine View',
    paragraphs: [
      'The name Kalorama means fine view in Greek. The poet Joel Barlow gave it to his country estate in the early 1800s, and the main house stood where Mitchell Park is today. The Union Army used it as a smallpox hospital during the Civil War, and a fire destroyed it in 1865.',
      'Kalorama, DC grew in two stages after that. Streetcar lines on Connecticut Avenue and Columbia Road pulled development north, and the Triangle filled first with rows of houses and apartment buildings for middle-class buyers. Sheridan-Kalorama followed with larger houses and mansions along Massachusetts Avenue.',
      'Starting in the Great Depression, many of those mansions were sold to foreign governments. By 1993, more than a quarter of Sheridan-Kalorama’s buildings were foreign-owned. Both areas are now historic districts on the National Register of Historic Places, the Triangle listed in 1987 and Sheridan-Kalorama in 1989.',
    ],
  },
  listings: { title: 'Browse Kalorama DC Homes for Sale', text: VIP, state: 'DC', zips: ['20008', '20009'], viewAllHref: '/properties' },
  market: {
    title: 'Kalorama Real Estate Market',
    paragraphs: [
      'Kalorama DC real estate depends on the building and the block more than on the neighborhood name. A one-bedroom in an older apartment building and a detached house near Sheridan Circle can sit a few blocks apart and sell in very different price ranges.',
      'For a custom comparison on a specific building, request a Kalorama price check.',
    ],
  },
  sections: [
    {
      title: 'Kalorama Triangle or Sheridan-Kalorama: Which Fits?',
      paragraphs: [
        'Many buyers search for Kalorama without knowing it holds two separate neighborhoods. Connecticut Avenue divides them, and the differences shape what you can buy.',
      ],
      table: {
        headers: ['', 'Kalorama Triangle', 'Sheridan-Kalorama'],
        rows: [
          ['Location', 'East of Connecticut Avenue, toward Columbia Road and Adams Morgan', 'West and south of Connecticut Avenue, along Rock Creek Park'],
          ['Typical homes', 'Row houses and apartment buildings', 'Apartment buildings, large detached houses, larger row houses and embassies'],
          ['Built for', 'Mostly middle-class buyers', 'Mostly wealthier residents'],
          ['Historic district', 'Kalorama Triangle Historic District (1987)', 'Sheridan-Kalorama Historic District (1989)'],
          ['ANC', 'ANC 1C', 'ANC 2D'],
        ],
      },
      points: [
        { title: 'Kalorama Triangle', text: 'The Triangle is roughly bounded by Connecticut Avenue, Columbia Road and Calvert Street. Its blocks hold narrower row houses and apartment buildings, and Adams Morgan’s restaurant strip is a short walk away, depending on the block.' },
        { title: 'Sheridan-Kalorama', text: 'This part is larger in scale, with mansions along Massachusetts Avenue, apartment buildings near Connecticut Avenue and dozens of embassies and ambassadors’ residences.' },
      ],
    },
    {
      title: 'Kalorama DC Condos for Sale in Older Apartment Buildings',
      paragraphs: [
        'By World War I, most Sheridan-Kalorama residents lived in apartment buildings, and the neighborhood had about 30 of them by 1940. Several still stand, including The Dresden on Connecticut Avenue and The Westmoreland on California Street.',
        'Units in these buildings may be condos or co-ops, and the approval process and financing differ between the two. Older buildings also carry older systems, so the FAQ below lists what to ask before you make an offer.',
      ],
    },
    {
      title: 'Buying in Kalorama’s Historic Districts',
      paragraphs: [
        'Kalorama is protected in layers. The Kalorama Triangle district covers 352 contributing buildings, and the Sheridan-Kalorama district covers more than 600, including four National Historic Landmarks. Massachusetts Avenue has its own district on top of that, overlapping part of Sheridan-Kalorama.',
        'Before DC issues a permit for visible exterior work, such as new windows, an addition or a demolition, the Historic Preservation Office reviews the plans. Larger projects go to the Historic Preservation Review Board for a vote.',
        'Neighbors can comment too. ANC 1C and ANC 2D both send written views to the Board, and those views carry weight, so a controversial project can take longer to clear.',
        'In an apartment building, the association’s rules and the city’s review are separate steps, and you need both for work that shows from the street. Ask the Historic Preservation Office which district or districts cover the address you like.',
      ],
    },
    {
      title: 'Getting Around Kalorama',
      paragraphs: [
        'Kalorama has no Metro station of its own. The closest are Dupont Circle and Woodley Park-Zoo/Adams Morgan on the Red Line, and the walk depends on your block. Riders heading for the Blue, Orange or Silver lines transfer at Metro Center.',
        'Connecticut Avenue carries Metrobus service and crosses Rock Creek Park on the Taft Bridge toward Woodley Park. Ask whether a unit includes a parking space, and look up the block’s permit zone if you would rely on street parking.',
      ],
    },
    {
      title: 'Living in Kalorama',
      paragraphs: [
        'Sheridan Circle holds the equestrian statue of General Philip Sheridan, and Mitchell Park, the neighborhood’s largest park, sits on its highest ground. The Spanish Steps stand at 22nd Street and Decatur Place.',
        'The Woodrow Wilson House is one of four National Historic Landmarks in Sheridan-Kalorama. The Islamic Center of Washington stands on Massachusetts Avenue, along the stretch known as Embassy Row.',
        'Dozens of embassies and ambassadors’ residences share the streets with homes, so visit a block on a weekday and on a weekend before you decide. Adams Morgan and Dupont Circle are both close for dining and shops.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Kalorama Experience',
    paragraphs: ['If you want a Kalorama real estate agent who can explain historic-district rules and condo or co-op paperwork before you tour, Brandon Wilson can help you compare the Triangle and Sheridan-Kalorama on the same budget.'],
  },
  nearby: [
    { name: 'Dupont Circle', text: 'To the south and east' },
    { name: 'Adams Morgan', text: 'To the northeast' },
    { name: 'Georgetown', text: 'To the southwest across Rock Creek Park' },
    { name: 'Woodley Park', text: 'To the north across the Taft Bridge' },
  ],
  faqTitle: 'Kalorama FAQ',
  faqs: [
    { q: 'Why do some listings say Kalorama Heights?', a: 'Some sources apply Kalorama Heights to both neighborhoods, and others use it for Sheridan-Kalorama alone. Search both names, because listing sites and MLS area labels do not always match.' },
    { q: 'Do embassies affect daily life in Kalorama?', a: 'Embassies and ambassadors’ residences occupy many buildings, especially near Massachusetts Avenue and Sheridan Circle. Visit the block at different times of day to see how traffic and street activity feel.' },
    { q: 'Are condos in the older apartment buildings harder to finance?', a: 'Some buildings are co-ops, and co-op loans follow narrower lender rules than standard condo mortgages. For a VA loan, the condo project must meet VA requirements, so Brandon checks building status before you tour.' },
    { q: 'What should I ask before buying in a pre-war building?', a: 'Ask how the building pays for major repairs and when the elevator, boiler and roof were last replaced. Request the last two years of budgets and any engineering report, since older systems can mean larger bills.' },
    { q: 'What is the Massachusetts Avenue Historic District?', a: 'It covers the avenue’s mansions and embassies and overlaps part of Sheridan-Kalorama, so one property can sit inside two districts. Ask the Historic Preservation Office which guidelines apply before you plan any exterior work.' },
  ],
  cta: {
    title: 'Ready to Look at Kalorama DC Homes for Sale?',
    text: 'Tell Brandon whether you lean toward the Triangle or Sheridan-Kalorama, and what you need from a home. He will start with the building, district and permit questions that apply to your pick.',
    button: 'Search Kalorama Homes',
  },
};

export const chevyChaseDc: NeighborhoodGuide = {
  slug: 'chevy-chase-dc',
  name: 'Chevy Chase DC',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Chevy Chase DC Homes for Sale | Chevy Chase DC Guide',
  description: 'Chevy Chase DC guide: houses, Connecticut Avenue and the Maryland line explained. Browse Chevy Chase DC real estate and homes for sale with Brandon.',
  ogTitle: 'Chevy Chase, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Houses on tree-lined streets and apartments on Connecticut Avenue, with a licensed DC and Maryland Realtor.',
  hero: {
    h1: 'Chevy Chase, DC: Neighborhood Guide and Homes for Sale',
    text: 'Chevy Chase, DC is a Washington neighborhood on the Maryland line, built around Connecticut Avenue and Chevy Chase Circle, with detached houses on tree-lined side streets and apartments along the avenue. This guide covers Chevy Chase, DC in practical terms. If you are comparing Chevy Chase DC homes for sale, the sections below explain the line with Maryland, the plans for Connecticut Avenue and the rules that shape buying here.',
    image: `${ASSETS}/2026/07/chevy-chase-dc-1-AUTOx1150.fit.png`,
    imageAlt: 'Chevy Chase, Washington, DC, near the Maryland line',
    listingsLabel: 'See Chevy Chase Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3/4G)' },
    { label: 'ZIP code', value: '20015' },
    { label: 'Main streets', value: 'Connecticut Avenue NW, Nebraska Avenue NW, Military Road NW, Reno Road NW and Western Avenue NW' },
    { label: 'Metro', value: 'No station inside the neighborhood. Friendship Heights (Red Line) is the closest, and Metrobus routes run along Connecticut Avenue' },
    { label: 'Landmarks', value: 'Chevy Chase Circle and the Newlands Memorial Fountain, Chevy Chase Neighborhood Library, Avalon Theatre, Chevy Chase Arcade' },
    { label: 'Typical homes', value: 'Detached houses of many styles on side streets, plus apartment buildings along Connecticut Avenue' },
    { label: 'Rules', value: 'Standard DC permit and zoning rules. The neighborhood is not a historic district today' },
    { label: 'Edges', value: 'Rock Creek Park to the east, Western Avenue and Tennyson Street to the north and Reno Road to the west. The southern edge is debated, and many residents place it at Broad Branch Road' },
    UPDATED,
  ],
  about: {
    title: 'A Land Company, a Streetcar and an Avenue',
    paragraphs: [
      'Chevy Chase, DC began with the Chevy Chase Land Company, founded in 1890 by Francis Newlands and partners who bought several thousand acres along what would become Connecticut Avenue. The company extended the avenue north from Calvert Street, ran a streetcar line along it and took the name Chevy Chase from the Belt family estate it absorbed.',
      'The company set minimum house prices of $5,000 on Connecticut Avenue and $3,000 on a side street, which limited who could buy. It later attached racial covenants to its houses, and local groups and city planners now address that history in their work.',
      'Builders filled the neighborhood over about six decades. A 2023 historic district application counted roughly 150 architects, and the housing includes mail-order kit houses.',
    ],
  },
  listings: { title: 'Browse Chevy Chase DC Homes for Sale', text: VIP, state: 'DC', zips: ['20015'], viewAllHref: '/properties' },
  market: {
    title: 'Chevy Chase Real Estate Market',
    paragraphs: [
      'Chevy Chase DC real estate splits into two markets. Detached houses on the side streets and apartments along Connecticut Avenue draw different buyers and carry different monthly costs.',
      'For a custom comparison on a specific street, request a Chevy Chase price check.',
    ],
  },
  sections: [
    {
      title: 'Chevy Chase, DC or Chevy Chase, MD?',
      paragraphs: [
        'Two places share the name, and Western Avenue divides them. Chevy Chase, DC sits on the District side, and Chevy Chase, Maryland is a separate group of communities in Montgomery County.',
        'The line matters when you buy. Taxes, permit rules and public schools follow the jurisdiction, so two houses a few blocks apart can sit under different governments. Brandon is licensed in DC, Virginia and Maryland, so he can compare homes on both sides of Western Avenue on the same budget.',
        'Listings may say Chevy Chase DC, Chevy Chase MD or just Chevy Chase, so check the address and the jurisdiction on every result.',
      ],
    },
    {
      title: 'Houses on Side Streets, Apartments on the Avenue',
      paragraphs: [],
      points: [
        { title: 'Houses', text: 'The side streets hold detached houses from many eras, from kit houses to newer builds. With so many architects at work, one block can mix very different styles, so judge each house on its own condition and lot.' },
        { title: 'Apartments', text: 'Apartment buildings line Connecticut Avenue, and some units may be condos or co-ops. Ask which one a unit is before you tour, since approval rules and financing differ between the two.' },
      ],
    },
    {
      title: 'Not a Historic District, at Least for Now',
      paragraphs: [
        'In late 2023, a group called the Chevy Chase DC Conservancy applied to turn a large part of the neighborhood into a historic district. On April 8, 2024, DC’s Historic Preservation Office said it was not prepared to recommend the proposal to the Review Board, citing a lack of community consensus and concerns about the boundaries.',
        'The office said it would study historic resources across the District before judging future proposals. Individual landmarks still exist, such as the Chevy Chase Savings Bank at 5530 Connecticut Avenue, which the Review Board designated in January 2023.',
        'For a buyer, standard DC permit rules apply to most houses today. Check the address on the Historic Preservation Office map and ask whether any new proposal is pending, because the status could change.',
      ],
    },
    {
      title: 'Connecticut Avenue Is Changing',
      paragraphs: [
        'DC’s Council approved the Chevy Chase Small Area Plan on July 12, 2022. The plan covers Connecticut Avenue between Military Road and Western Avenue and calls for more housing, including affordable housing, and more retail along the avenue.',
        'The Zoning Commission followed on January 30, 2025, approving new mixed-use zones that allow more height and density at the civic core and on several commercial blocks on either side of the avenue. The civic core holds the Chevy Chase library and community center, and the city has sought redevelopment proposals with housing planned above them.',
        'If a house backs onto the avenue or sits within a block or two of it, look at the zoning map and the redevelopment plans before you buy.',
      ],
    },
    {
      title: 'Getting Around Chevy Chase',
      paragraphs: [
        'Chevy Chase DC has no Metro station of its own. Friendship Heights on the Red Line is the closest, and Metrobus routes run along Connecticut Avenue.',
        'Connecticut Avenue leads south to Dupont Circle and downtown, and Military Road connects east and west. Rock Creek Park lines the eastern edge, with trails close to the neighborhood.',
      ],
    },
    {
      title: 'Living in Chevy Chase',
      paragraphs: [
        'Chevy Chase Circle, at the Maryland line, holds the Newlands Memorial Fountain. The Chevy Chase Neighborhood Library and a community center sit along Connecticut Avenue, and both are part of the redevelopment plans.',
        'The Avalon Theatre began as the Chevy Chase Theater and is one of the avenue’s early landmarks. The Chevy Chase Arcade is listed on the National Register of Historic Places, and a Main Street group works to support the shops and restaurants along the corridor.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Chevy Chase Experience',
    paragraphs: ['If you want a Chevy Chase real estate agent who can compare both sides of Western Avenue and read the Connecticut Avenue plans for you, Brandon Wilson works in DC and Maryland and can walk you through both.'],
  },
  nearby: [
    { name: 'Cleveland Park', text: 'To the south down Connecticut Avenue' },
    { name: 'Forest Hills', text: 'To the south' },
    { name: 'Friendship Heights', text: 'To the west' },
    { name: 'Kenwood', text: 'Across the Maryland line in Bethesda' },
  ],
  faqTitle: 'Chevy Chase DC FAQ',
  faqs: [
    { q: 'Does the Connecticut Avenue rezoning reach the side streets?', a: 'The approved zones cover the civic core and several commercial blocks on either side of the avenue, not the whole neighborhood. Look up the zone for the exact address on the DC zoning map, and ask about plans for any nearby site.' },
    { q: 'Which schools serve Chevy Chase DC?', a: 'Local sources name Lafayette Elementary. Zoned schools at each level depend on the address and boundaries change, so confirm all three with the DCPS boundary tool before you make an offer.' },
    { q: 'Is Chevy Chase DC in Ward 3 or Ward 4?', a: 'The neighborhood is mostly in Ward 3, but ANC 3/4G is the only ANC in DC that spans two wards, so a few addresses fall in Ward 4. Confirm the ward and commission district for the address, since they decide your councilmember and your commissioner.' },
    { q: 'Do I pay DC or Maryland taxes if I live in Chevy Chase DC?', a: 'Property taxes follow the side of Western Avenue where the home sits, so a Chevy Chase DC address is taxed by the District. Income tax depends on where you live and work, so ask a tax professional how your own situation works.' },
  ],
  cta: {
    title: 'Ready to Look at Chevy Chase DC Homes for Sale?',
    text: 'Tell Brandon whether you want a house on a side street or an apartment on Connecticut Avenue, and which side of Western Avenue you will consider. He will pull the zoning and permit facts for each address before you tour.',
    button: 'Search Chevy Chase Homes',
  },
};

export const palisades: NeighborhoodGuide = {
  slug: 'palisades',
  name: 'Palisades',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Palisades DC Homes for Sale | Palisades DC Guide',
  description: 'Palisades DC guide: bungalows, colonials and townhouses along the Potomac. Browse Palisades DC real estate and homes for sale with Brandon Wilson.',
  ogTitle: 'Palisades, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Bungalows, colonials and townhouses along the Potomac, near the C&O Canal, with a licensed DC Realtor.',
  hero: {
    h1: 'Palisades, DC: Neighborhood Guide and Homes for Sale',
    text: 'Palisades is a Washington, DC neighborhood that runs in a long, narrow strip along the Potomac River, with mostly single-family homes, from 1920s bungalows to newer builds, plus a few townhouses and condos. This guide covers Palisades, DC in practical terms. If you are comparing Palisades DC homes for sale, the sections below explain what the housing, the rules and the commute look like here.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Palisades neighborhood along the Potomac',
    listingsLabel: 'See Palisades Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3D)' },
    { label: 'ZIP codes', value: '20007 and 20016' },
    { label: 'Main streets', value: 'MacArthur Boulevard NW (once called Conduit Road), Chain Bridge Road NW, Arizona Avenue NW and Loughboro Road NW' },
    { label: 'Metro', value: 'No station in the neighborhood. Buses, driving and the Capital Crescent Trail fill the gap' },
    { label: 'Landmarks', value: 'Fletcher’s Cove, Battery Kemble Park, Palisades Firehouse, Capital Crescent Trail, the former MacArthur Theater' },
    { label: 'Typical homes', value: 'Detached houses from 1920s bungalows to newer builds, plus some townhouses and a few condos and apartments' },
    { label: 'Rules', value: 'DC building permits, zoning and tree-protection rules apply. Check the address on the DC Historic Preservation Office map, since a few individual landmarks and nearby Foxhall Village have their own status' },
    { label: 'Edges', value: 'From Foxhall Road near Georgetown University to the DC-Maryland line near Sibley Hospital, hugging MacArthur Boulevard and the river. The Potomac Heights area sits between MacArthur, Loughboro Road, Arizona Avenue and the Potomac' },
    UPDATED,
  ],
  about: {
    title: 'A Streetcar Suburb on the Potomac',
    paragraphs: [
      'Palisades, DC began as a planned suburb. The Palisades Improvement Company laid out the subdivision in 1893, and streetcar service reached it two years later on a line that ran from Georgetown to Glen Echo. In 1909, the Potomac Heights Land Company offered 800 lots at $450 to $500 each, with a rule that no house could cost less than $2,500.',
      'The old routes still shape the area. The Glen Echo trolley stopped running in 1968, and after the B&O Georgetown Branch rail line closed in 1985, its path became part of the Capital Crescent Trail.',
      'Residents organized early. The Palisades Community Association began in 1916 as the Conduit Road Citizens Association, and the Palisades Playground was dedicated in 1936. A July 4 parade with local bands, fire engines and decorated bicycles is still a high point of the year.',
    ],
  },
  listings: { title: 'Browse Palisades DC Homes for Sale', text: VIP, state: 'DC', zips: ['20016', '20007'], viewAllHref: '/properties' },
  market: {
    title: 'Palisades Real Estate Market',
    paragraphs: [
      'Palisades DC real estate is mostly single-family, so the number of listings at any one time is usually small and condos are rare. When a house does list, the lot, the level of renovation and the street matter as much as the neighborhood name.',
      'For a custom comparison on a specific street, request a Palisades price check.',
    ],
  },
  sections: [
    {
      title: 'Houses, Townhouses and the Few Condos',
      paragraphs: ['Palisades is one of the lesser-known DC neighborhoods, and its housing is easy to sort into two groups.'],
      table: {
        headers: ['', 'Houses', 'Townhouses, condos and apartments'],
        rows: [
          ['What you find', '1920s bungalows, colonials and modern homes, often on generous lots', 'A small number, many of them along or near MacArthur Boulevard'],
          ['Why it matters', 'Lot size and trees decide what you can add or change', 'Fees, reserves and building rules decide the monthly cost'],
          ['Ask about', 'Permits for past work, drainage, trees, off-street parking', 'Condo fee, reserve study, rental rules, parking'],
        ],
      },
      points: [
        { title: 'Houses', text: 'Over the years, some older houses have been replaced with larger new ones, so a single street can mix very different sizes. Homes on the bluff above the river can have broad views, and an inspector should check drainage and retaining walls on any sloped lot.' },
        { title: 'Palisades DC condos for sale', text: 'Condos are few and far between here, so they are worth watching when they list. If you plan to use a VA loan, Brandon checks whether the building is VA-approved before you tour, since an unapproved building can delay or end a deal.' },
      ],
    },
    {
      title: 'Trees, Lots and Renovation Rules',
      paragraphs: [
        'Many Palisades lots hold mature trees, and DC protects the biggest ones, even on private property. Removing a tree with a circumference of 44 inches or more needs a Special Tree Removal Permit from DDOT’s Urban Forestry Division, and a healthy tree of 100 inches or more generally cannot be removed. The permit can carry a fee based on the tree’s size.',
        'This matters if you want an addition, a new driveway or a teardown. A protected tree can change where you build, and the plans may need to be redrawn around it.',
        'DC building permits and zoning limits on lot coverage and height also apply to additions and new construction. ANC 3D can weigh in when a project needs zoning relief, so ask before you buy whether a house has the room for the project you have in mind.',
      ],
    },
    {
      title: 'Getting Around Palisades',
      paragraphs: [
        'Palisades has no Metro station. Metrobus serves MacArthur Boulevard with routes toward Georgetown and Dupont Circle, and many residents drive. The nearest Red Line station, Tenleytown-AU, is about 3 miles from the main commercial strip.',
        'The Capital Crescent Trail, built on the old rail line, gives walkers and bikers a car-free route toward Georgetown. The C&O Canal towpath runs along the river at the neighborhood’s edge.',
        'MacArthur Boulevard is the main route in and out by car. Check whether a house has a driveway or garage, since street parking varies by block.',
      ],
    },
    {
      title: 'Living in Palisades',
      paragraphs: [
        'The small commercial strip on MacArthur Boulevard has a Safeway, shops and restaurants. The CVS there sits in the former MacArthur Theater, which showed movies from 1946 to 1997. A weekly farmers market also runs along the boulevard.',
        'Fletcher’s Cove, on the Potomac inside the C&O Canal National Historical Park, has been a fishing and boating spot since the 1850s. The nearby Abner Cloud House, built in 1802, is the oldest building on the canal. Battery Kemble Park, once a Civil War gun position above Chain Bridge, is now a park for walks and picnics.',
        'The Palisades Neighborhood Library, renovated in 2018, and the Palisades Recreation Center anchor daily life. The Palisades Firehouse at 4811 MacArthur Boulevard, built in 1925, is listed on the National Register of Historic Places.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Palisades Experience',
    paragraphs: ['If you want a Palisades real estate agent who can explain DC permit and tree rules before you make an offer on a house you plan to expand, Brandon Wilson can help you compare Palisades with nearby neighborhoods on the same budget.'],
  },
  nearby: [
    { name: 'Georgetown', text: 'To the south' },
    { name: 'Foxhall', text: 'To the southeast' },
    { name: 'Spring Valley', text: 'To the northeast' },
  ],
  faqTitle: 'Palisades FAQ',
  faqs: [
    { q: 'Why do some listings say Palisades-Kent or Foxhall-Palisades?', a: 'Listing sites group neighborhoods in different ways, and some combine Palisades with Kent or Foxhall. Search by street and address as well as by name, since area labels do not always match.' },
    { q: 'Which schools serve Palisades?', a: 'Local sources list Key and Mann elementary schools and Hardy Middle School for the neighborhood. Since fall 2023, MacArthur High School at 4530 MacArthur Boulevard has been the in-boundary high school for students in the Hardy boundary, which eased crowding at Jackson-Reed. Zoned schools depend on the address, so confirm with the DCPS boundary tool before you make an offer.' },
    { q: 'Is flood risk a concern near the river?', a: 'It depends on the address. Ask your lender and insurer whether the property sits in a FEMA flood zone, and ask the seller about any water history. A block near the river or canal is not the same as one uphill.' },
    { q: 'Is there a homeowners association?', a: 'The Palisades Community Association is a civic group that dates to 1916, and ANC 3D is the elected advisory body. Neither is an HOA, so check each property’s documents for an association, and expect one in a condo building.' },
    { q: 'Can I rent out a Palisades home or condo?', a: 'Condo documents can limit rentals and set minimum lease terms, and DC adds licensing and tenant rules on top. Read the documents and the District’s requirements before you count on rental income.' },
  ],
  cta: {
    title: 'Ready to Look at Palisades DC Homes for Sale?',
    text: 'House, townhouse or one of the few condos: tell Brandon which you lean toward and he will start with the questions that go with it.',
    button: 'Search Palisades Homes',
  },
};

export const forestHills: NeighborhoodGuide = {
  slug: 'forest-hills',
  name: 'Forest Hills',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Forest Hills DC Homes for Sale | Forest Hills DC Guide',
  description: 'Forest Hills DC guide: houses by Rock Creek Park, Connecticut Avenue co-ops and the Van Ness Metro. Browse Forest Hills DC real estate and homes for sale.',
  ogTitle: 'Forest Hills, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Houses by Rock Creek Park, co-ops and condos on Connecticut Avenue and a Red Line station, with a licensed DC Realtor.',
  hero: {
    h1: 'Forest Hills, DC: Neighborhood Guide and Homes for Sale',
    text: 'Forest Hills is a Washington, DC neighborhood east of Connecticut Avenue and beside Rock Creek Park, with houses on quiet streets, a row of co-ops and condos along the avenue and a Red Line station at Van Ness. This guide covers Forest Hills, DC in practical terms. If you are comparing Forest Hills DC homes for sale, the sections below explain the Van Ness name, the apartment buildings and the parks around the neighborhood.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Forest Hills neighborhood beside Rock Creek Park',
    listingsLabel: 'See Forest Hills Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3F)' },
    { label: 'ZIP code', value: '20008' },
    { label: 'Main streets', value: 'Connecticut Avenue NW, Tilden Street NW, Van Ness Street NW and Upton Street NW' },
    { label: 'Metro', value: 'Van Ness-UDC station (Red Line)' },
    { label: 'Landmarks', value: 'UDC’s Van Ness campus, the Levine School of Music, Soapstone Valley Park, Melvin C. Hazen Park, Hillwood Estate' },
    { label: 'Typical homes', value: 'Detached houses and some rowhouses east of Connecticut Avenue, plus co-ops and condos along the avenue' },
    { label: 'Rules', value: 'Standard DC permit and zoning rules' },
    { label: 'Edges', value: 'Connecticut Avenue to the west, Rock Creek Park to the east, Chevy Chase to the north and Tilden Street to the south. Sources place the borders slightly differently' },
    UPDATED,
  ],
  about: {
    title: 'From Fernwood Heights to Van Ness',
    paragraphs: [
      'Forest Hills began as Fernwood Heights, two streets east of Connecticut Avenue, Tilden (then Quincy) and Upton (then Randolph), shown on a 1908 map. The National Bureau of Standards had bought land near today’s Van Ness Street in 1901, and its employees built or bought homes nearby.',
      'People often call the neighborhood Van Ness, after the Red Line station and the University of the District of Columbia campus. The Bureau is gone, but a gate and fence on Connecticut Avenue between Van Ness and Tilden Streets are remnants of its site.',
    ],
  },
  listings: { title: 'Browse Forest Hills DC Homes for Sale', text: VIP, state: 'DC', zips: ['20008'], viewAllHref: '/properties' },
  market: {
    title: 'Forest Hills Real Estate Market',
    paragraphs: [
      'Forest Hills DC real estate splits between detached houses near the park and apartments along the avenue, and the two behave differently.',
      'For a custom comparison on a specific home, request a Forest Hills price check.',
    ],
  },
  sections: [
    {
      title: 'Houses on the Park Side, Co-ops on the Avenue',
      paragraphs: [
        'East of Connecticut Avenue, detached houses and some rowhouses sit on quiet streets close to Rock Creek Park. Along the avenue, apartment buildings hold a mix of ownership types. The neighborhood commission’s resource list names Tilden Gardens and Van Ness North as co-ops, and Parker House, Truman House and Van Ness East as condos.',
        'Several buildings along the avenue are rent-controlled apartments that are not for sale. If you plan to buy, confirm the building’s ownership structure on the first call, before you tour.',
      ],
    },
    {
      title: 'Parks and Creek Valleys',
      paragraphs: [
        'Rock Creek Park forms the eastern edge of the neighborhood. Soapstone Valley Park, added to Rock Creek Park under 1924 legislation to protect the creek’s watershed, runs along 32nd Street at Albemarle Street. Melvin C. Hazen Park and its trail sit at Reno Road and Tilden Street, and Peirce Mill is a short trip away inside Rock Creek Park.',
        'Homes beside the creek valleys can have drainage and sewer questions. Local reporting has covered concerns about an aging sewer line in the Soapstone Valley area, so ask the seller what they know and ask your inspector to look closely at the lot.',
      ],
    },
    {
      title: 'A University, Embassies and an Avenue',
      paragraphs: [
        'UDC’s Van Ness campus sits at 4200 Connecticut Avenue, and Howard University’s law school is across the avenue on Upton Street. The Levine School of Music uses the former Carnegie Geophysical Laboratory, one of the neighborhood’s early science buildings.',
        'Embassies cluster on International Court and Connecticut Avenue, including Austria and the United Arab Emirates. Politics and Prose sits at 5015 Connecticut Avenue, and Hillwood Estate, Museum and Gardens is at 4155 Linnean Avenue.',
      ],
    },
    {
      title: 'Getting Around Forest Hills',
      paragraphs: [
        'The Van Ness-UDC station sits on Connecticut Avenue and puts the Red Line within a short walk of the blocks nearest the avenue. Metrobus routes also run along the avenue, and the Cleveland Park station is the next stop south.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Forest Hills Experience',
    paragraphs: ['If you want a Forest Hills real estate agent who can tell a co-op from a condo before you tour and who will ask about drainage on a creekside lot, Brandon Wilson can sort both questions out with you.'],
  },
  nearby: [
    { name: 'Cleveland Park', text: 'To the south' },
    { name: 'Chevy Chase DC', text: 'To the north' },
  ],
  faqTitle: 'Forest Hills FAQ',
  faqs: [
    { q: 'Is Forest Hills the same as Van Ness?', a: 'They overlap. Van Ness is a nickname tied to the Red Line station and the UDC campus, and many listings use it. The Forest Hills name is the older one for the residential blocks east of the avenue.' },
    { q: 'What is Van Ness Main Street?', a: 'It is a community group that supports the Connecticut Avenue business corridor. It has commissioned retail studies and organizes events such as a Taste of Van Ness.' },
    { q: 'Which blocks are closest to the Metro?', a: 'Blocks near Connecticut Avenue are the closest to the Van Ness-UDC station. Blocks beside Rock Creek Park take a longer walk or a bus ride, so measure the route before you decide.' },
  ],
  cta: {
    title: 'Ready to Look at Forest Hills DC Homes for Sale?',
    text: 'Tell Brandon whether you want a house near the park or a co-op or condo on the avenue, and how close you need to be to the station. He will check the building’s structure or the lot’s drainage before you tour.',
    button: 'Search Forest Hills Homes',
  },
};

export const friendshipHeightsDc: NeighborhoodGuide = {
  slug: 'friendship-heights-dc',
  name: 'Friendship Heights',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Friendship Heights DC Real Estate | Friendship Heights DC Guide',
  description: 'Friendship Heights DC guide: the Red Line, big-name shops and the Maryland line explained. Browse Friendship Heights DC real estate and homes for sale.',
  ogTitle: 'Friendship Heights, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'A Red Line station, shops and homes on the DC side of Western Avenue, with a licensed DC and Maryland Realtor.',
  hero: {
    h1: 'Friendship Heights, DC: Neighborhood Guide and Homes for Sale',
    text: 'Friendship Heights, DC is the District half of a border downtown, where Wisconsin Avenue meets Western Avenue and the Maryland line, with a Red Line station, major shops and houses and apartments on the blocks around the core. This guide covers Friendship Heights, DC in practical terms. If you are comparing Friendship Heights DC real estate, the sections below explain what sits on the DC side, what is changing and how it differs from the Maryland side.',
    image: `${ASSETS}/2026/07/friendship-heights-dc-1-AUTOx1150.fit.png`,
    imageAlt: 'Friendship Heights, Washington, DC, near Wisconsin and Western Avenues',
    listingsLabel: 'See Friendship Heights Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3E)' },
    { label: 'ZIP code', value: '20015' },
    { label: 'Main streets', value: 'Wisconsin Avenue NW and Western Avenue NW' },
    { label: 'Metro', value: 'Friendship Heights station (Red Line)' },
    { label: 'Landmarks', value: 'The former Mazza Gallerie site, the former Lord and Taylor building on Western Avenue, Bloomingdale’s across Wisconsin Avenue' },
    { label: 'Typical homes', value: 'Houses and townhouses on the side streets, with apartment and condo buildings near the core on both sides of the line' },
    { label: 'Rules', value: 'DC zoning, and the Wisconsin Avenue Development Framework for the corridor' },
    { label: 'Edges', value: 'Western Avenue forms the border with Maryland, and Wisconsin Avenue runs south toward Tenleytown' },
    UPDATED,
  ],
  about: {
    title: 'A Land Grant, a Quaker Farm and Two Department Stores',
    paragraphs: [
      'Friendship Heights takes its name from a 1713 land grant called Friendship, according to a local guide. In the 1800s a Quaker family farmed land along what is now Wisconsin Avenue, on both sides of the District line, and by the early 1900s the area was single-family homes reached by streetcar.',
      'The shopping district arrived in the early 1950s. Woodward and Lothrop opened on the Maryland side of Wisconsin Avenue, and Lord and Taylor opened on the DC side. In the early 1960s, zoning near the future Metro station was changed to allow dense development on the Maryland side.',
    ],
  },
  listings: { title: 'Browse Friendship Heights DC Real Estate', text: VIP, state: 'DC', zips: ['20015', '20016'], viewAllHref: '/properties' },
  market: {
    title: 'Friendship Heights Real Estate Market',
    paragraphs: [
      'Few homes sit on the DC side, so the market is thin and each sale says more about one building than about the neighborhood. Houses for sale in Friendship Heights, DC and homes on the side streets come up only occasionally.',
      'For a custom comparison on a specific home, request a Friendship Heights price check.',
    ],
  },
  sections: [
    {
      title: 'A Border Downtown',
      paragraphs: [
        'A 2022 report counted about 540 residents on the DC side, ten times fewer than on the Maryland side, which is the Village of Friendship Heights. Many listings that use the Friendship Heights name are on the Maryland side, so check the state on every result.',
        'The two sides plan separately, which complicates coordination. That means DC buyers benefit from a Realtor who is licensed in both places, and Brandon holds licenses in DC and Maryland.',
      ],
    },
    {
      title: 'What Is Changing on Wisconsin Avenue',
      paragraphs: [
        'DC’s Office of Planning released the Wisconsin Avenue Development Framework on February 16, 2024, after an 18-month process. It covers the corridor from Friendship Heights to Tenleytown and recommends zoning that would add housing near the Metro stations.',
        'A 2022 report counted nearly 1,400 multifamily units planned for the area, and the former Mazza Gallerie is under redevelopment. Montgomery County is also updating its Friendship Heights Sector Plan, so the Maryland side may change as well.',
      ],
    },
    {
      title: 'Getting Around Friendship Heights',
      paragraphs: [
        'The Friendship Heights station on the Red Line is the area’s main asset. Metrobus routes, including service toward Georgetown and M Street, and Montgomery County’s Ride On buses connect the station with the surrounding neighborhoods.',
      ],
    },
    {
      title: 'Living in Friendship Heights',
      paragraphs: [
        'Wisconsin Avenue holds the big department stores and shops that draw visitors from across the region. Quieter residential streets begin a block or two off the avenue, and Chevy Chase and Tenleytown are both a short trip away.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Friendship Heights Experience',
    paragraphs: ['If you want a Friendship Heights real estate agent who can search both sides of Western Avenue and explain which one a listing sits on, Brandon Wilson works in DC and Maryland and can compare the two for you.'],
  },
  nearby: [
    { name: 'Chevy Chase DC', text: 'To the east' },
    { name: 'Downtown Bethesda', text: 'Up Wisconsin Avenue in Maryland' },
  ],
  faqTitle: 'Friendship Heights FAQ',
  faqs: [
    { q: 'Are there condo towers on the DC side?', a: 'The tall condo buildings, such as Somerset House, stand on the Maryland side. The DC side has few residents, and new multifamily buildings are the main source of new homes there.' },
    { q: 'Is Friendship Heights the same as Chevy Chase DC?', a: 'No. They are neighbors, and Chevy Chase DC lies to the east and begins at Reno Road. Friendship Heights is the commercial and Metro hub around Wisconsin and Western Avenues.' },
    { q: 'Does the Maryland plan update matter to DC buyers?', a: 'It can. Montgomery County’s sector plan update covers shops, traffic and transit that DC residents also use. Brandon tracks both plans when he advises buyers here.' },
  ],
  cta: {
    title: 'Ready to Look at Friendship Heights DC Real Estate?',
    text: 'Tell Brandon whether you want a house on a side street or a unit near the Metro, and which side of Western Avenue you will consider. He will confirm the jurisdiction and the plans for each address before you tour.',
    button: 'Search Friendship Heights Homes',
  },
};

export const westEndFoggyBottom: NeighborhoodGuide = {
  slug: 'west-end-foggy-bottom',
  name: 'West End and Foggy Bottom',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Foggy Bottom DC Real Estate | West End and Foggy Bottom Guide',
  description: 'Foggy Bottom DC guide: condos, co-ops and historic rowhouses near GWU and the Kennedy Center. Browse Foggy Bottom DC real estate with Brandon Wilson.',
  ogTitle: 'West End and Foggy Bottom, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Condos, co-ops and historic rowhouses near the Metro, with a licensed DC Realtor.',
  hero: {
    h1: 'West End and Foggy Bottom, DC: Neighborhood Guide and Homes for Sale',
    text: 'Foggy Bottom and the West End sit side by side west of the White House, and their housing is mostly condos and co-ops, with a historic district of brick rowhouses. This guide covers Foggy Bottom, DC in practical terms. If you are comparing Foggy Bottom DC real estate, the sections below explain the two neighborhoods, their historic districts and the university next door.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the West End and Foggy Bottom',
    listingsLabel: 'See Foggy Bottom Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 2, ANC 2A)' },
    { label: 'ZIP code', value: '20037' },
    { label: 'Main streets', value: 'Pennsylvania Avenue NW, 23rd Street NW and New Hampshire Avenue NW' },
    { label: 'Metro', value: 'Foggy Bottom-GWU station (Blue, Orange and Silver lines), the last DC stop before the trains cross to Rosslyn' },
    { label: 'Landmarks', value: 'The Kennedy Center, the Watergate, George Washington University, Washington Circle' },
    { label: 'Typical homes', value: 'Mid-rise and high-rise condos and co-ops, plus brick rowhouses in the Foggy Bottom Historic District' },
    { label: 'Rules', value: 'Two historic districts and a university campus plan' },
    { label: 'Edges', value: 'Foggy Bottom lies north of the National Mall and east of the Potomac, and the West End lies to its north and east, with Georgetown across Rock Creek' },
    UPDATED,
  ],
  about: {
    title: 'A West End, a Bottom and a University',
    paragraphs: [
      'The West End got its name because it was literally the west end of Pierre L’Enfant’s plan for Washington. Foggy Bottom, west of 23rd Street, grew with humbler housing, and the brick rowhouses of that era are the heart of today’s Foggy Bottom Historic District.',
      'George Washington University arrived in 1912 and has shaped the area ever since. The Kennedy Center and the Watergate came in the 1960s and 1970s and gave the name new weight, and mid-rise condos and co-ops have been added since then.',
    ],
  },
  listings: { title: 'Browse Foggy Bottom DC Real Estate', text: VIP, state: 'DC', zips: ['20037'], viewAllHref: '/properties' },
  market: {
    title: 'Foggy Bottom Real Estate Market',
    paragraphs: [
      'Foggy Bottom DC real estate is mostly apartments, so monthly fees matter as much as price. Foggy Bottom DC homes for sale in rowhouse form are rare and trade separately.',
      'For a custom comparison on a specific building, request a Foggy Bottom price check.',
    ],
  },
  sections: [
    {
      title: 'Two Neighborhoods, Two Historic Districts',
      paragraphs: [
        'The Foggy Bottom Historic District covers the modest brick rowhouses of the old neighborhood. A second district, the George Washington University/Old West End Historic District, covers about 125 buildings, mostly the university’s historic core, across portions of 13 blocks between 19th and 23rd Streets.',
        'The second district exists because of the campus plan. In the 2007 plan, GW agreed to help create it, and the Historic Preservation Review Board adopted it in October 2014. The two districts are separate, so check which one, if either, covers a unit or building.',
      ],
    },
    {
      title: 'Foggy Bottom DC Condos and Co-ops',
      paragraphs: [
        'Mid-rise and high-rise buildings from the 1960s and 1970s hold most of the homes here. The Watergate, a 10-acre complex beside the Potomac, is a co-op development.',
        'A co-op sale usually needs board approval, while a condo sale follows its bylaws. Ask which structure a building uses, how many units are owner-occupied and whether the building is approved for the loan type you plan to use.',
      ],
    },
    {
      title: 'Getting Around West End and Foggy Bottom',
      paragraphs: [
        'The Foggy Bottom-GWU station opened in 1977 and serves the Blue, Orange and Silver lines. Farragut West and Farragut North are also within reach, and Washington Circle at Pennsylvania Avenue and 23rd Street ties the two neighborhoods together.',
      ],
    },
    {
      title: 'Living in West End and Foggy Bottom',
      paragraphs: [
        'The Kennedy Center and the Watergate sit on the Potomac, and George Washington University fills much of the area with campus buildings and student life. Restaurants and hotels cluster along Pennsylvania Avenue and in the West End.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Foggy Bottom Experience',
    paragraphs: ['If you want a Foggy Bottom real estate agent who can explain co-op boards and check whether a building is VA-approved before you tour, Brandon Wilson can compare buildings on the same budget.'],
  },
  nearby: [
    { name: 'Georgetown', text: 'To the west across Rock Creek' },
    { name: 'Dupont Circle', text: 'To the north and east' },
    { name: 'Rosslyn', text: 'Across the Potomac, one Metro stop away' },
  ],
  faqTitle: 'West End and Foggy Bottom FAQ',
  faqs: [
    { q: 'Is the West End part of Georgetown?', a: 'No. Georgetown ends at Rock Creek, and the West End lies on the other side. Some hotels and listings borrow the Georgetown name, so check the address.' },
    { q: 'Does the university’s campus plan affect nearby owners?', a: 'It can. GW’s plan is reviewed by DC’s Zoning Commission, and ANC 2A takes part. Construction, traffic and student housing are recurring topics, so ask about current projects near the building you like.' },
    { q: 'Are Foggy Bottom and the West End the same place?', a: 'They are neighbors with different histories. Foggy Bottom is the older, lower-scale area west of 23rd Street, and the West End is the denser strip of condos and hotels to its north and east.' },
  ],
  cta: {
    title: 'Ready to Look at Foggy Bottom DC Real Estate?',
    text: 'Tell Brandon whether you want a condo, a co-op or a rowhouse, and how important a short walk to the Metro is. He will check each building’s structure and rules before you tour.',
    button: 'Search Foggy Bottom Homes',
  },
};

export const springValley: NeighborhoodGuide = {
  slug: 'spring-valley',
  name: 'Spring Valley',
  city: 'Washington, DC',
  cityHref: '/washington',
  title: 'Spring Valley DC Homes for Sale | Spring Valley DC Guide',
  description: 'Spring Valley DC guide: houses on curving streets beside American University. Browse Spring Valley DC real estate and homes for sale with Brandon.',
  ogTitle: 'Spring Valley, DC: Neighborhood Guide and Homes for Sale',
  ogDescription: 'Custom houses on curving streets near American University, with a licensed DC Realtor.',
  hero: {
    h1: 'Spring Valley, DC: Neighborhood Guide and Homes for Sale',
    text: 'Spring Valley is a Washington, DC neighborhood of custom-built houses on curving streets, set beside American University in northwest DC. This guide covers Spring Valley, DC in practical terms. If you are comparing Spring Valley DC homes for sale, the sections below explain the neighborhood’s history, its World War I cleanup record and what daily life looks like here.',
    image: dcPhoto,
    imageAlt: 'Washington, DC, home to the Spring Valley neighborhood beside American University',
    listingsLabel: 'See Spring Valley Listings',
  },
  facts: [
    { label: 'City', value: 'Washington, DC (Ward 3, ANC 3D)' },
    { label: 'ZIP code', value: '20016' },
    { label: 'Main streets', value: 'Massachusetts Avenue NW, Nebraska Avenue NW, Loughboro Road NW and Dalecarlia Parkway NW' },
    { label: 'Metro', value: 'No station in the neighborhood. Metrobus stops line Massachusetts Avenue' },
    { label: 'Landmarks', value: 'American University’s main campus (4400 Massachusetts Avenue), Wesley Theological Seminary (4500 Massachusetts Avenue), Westmoreland Circle' },
    { label: 'Typical homes', value: 'Custom-built detached houses, some townhouses and a few embassy-owned properties' },
    { label: 'Records worth reading', value: 'The Army Corps of Engineers’ Spring Valley cleanup files (see the section below)' },
    { label: 'Edges', value: 'Nebraska Avenue and Loughboro Road to the south, Dalecarlia Parkway to the west and Massachusetts Avenue to the northeast. Dalecarlia Parkway and Massachusetts Avenue meet at Westmoreland Circle on the Maryland line' },
    UPDATED,
  ],
  about: {
    title: 'Curving Streets on Former University Land',
    paragraphs: [
      'Spring Valley, DC sits on land that American University once owned. Builders laid out custom houses along curving streets that depart from the city’s street grid, which gives the neighborhood a different feel from the rowhouse areas downtown.',
      'Massachusetts Avenue is the main commercial corridor, with two retail strips and medical offices on its eastern end. The avenue runs northwest to Westmoreland Circle, where the neighborhood meets the Maryland line.',
      'Spring Valley has housed well-known residents. Richard Nixon lived on Tilden Street from 1951 to 1957, first as a senator and then as vice president, before moving to nearby Wesley Heights.',
    ],
  },
  listings: { title: 'Browse Spring Valley DC Homes for Sale', text: VIP, state: 'DC', zips: ['20016'], viewAllHref: '/properties' },
  market: {
    title: 'Spring Valley Real Estate Market',
    paragraphs: [
      'Spring Valley DC real estate is mostly single-family houses with a handful of townhouses, so prices swing with lot size, age and how recently a house was renovated. An updated custom house and an original one on the same street can sell at very different prices.',
      'For a custom comparison on a specific street, request a Spring Valley price check.',
    ],
  },
  sections: [
    {
      title: 'Houses, Townhouses and Embassy Neighbors',
      paragraphs: [
        'Land use here is mostly low-density residential, with detached houses and some townhouses. The Army Corps of Engineers counts about 1,600 homes and lots inside the Spring Valley area, which also holds several embassy-owned properties, American University and Wesley Theological Seminary.',
        'Many houses were custom-built, so floor plans vary a great deal from one address to the next. Ask for the permit history on any addition, and ask when the roof, mechanical systems and windows were last replaced.',
      ],
    },
    {
      title: 'The World War I Cleanup: What Buyers Should Know',
      paragraphs: [
        'From 1917 to 1920, the U.S. Army ran the American University Experiment Station here, where it researched and tested chemical agents and munitions. When the war ended, much of that material was buried, and the land was later built over.',
        'Workers digging a utility trench found buried munitions on January 5, 1993. The Army Corps of Engineers began a long investigation and cleanup, with the Environmental Protection Agency and DC’s environmental agency as regulators.',
      ],
      table: {
        headers: ['What the Corps reports', 'Figure'],
        rows: [
          ['Size of the site', 'About 661 acres in northwest DC'],
          ['Homes and lots in the area', 'About 1,600'],
          ['Properties and lots sampled for arsenic', '1,632'],
          ['Properties and lots that needed soil cleanup', '177'],
          ['Main contaminant of concern', 'Arsenic'],
          ['Lead agency', 'U.S. Army Corps of Engineers, Baltimore District'],
          ['Status', 'The Corps described the 30-year project as concluded in a January 2026 release'],
        ],
      },
      points: [
        { title: 'What it means when you buy', text: 'The cleanup is public record, so you can check it for a specific address. Ask the seller whether the property was sampled or had soil removed, request any related paperwork, and ask your title company whether any recorded notices or use restrictions apply. Brandon builds these requests into every Spring Valley offer and points you to the Corps’ records for the technical details.' },
      ],
    },
    {
      title: 'Living Beside American University',
      paragraphs: [
        'American University’s main campus sits at 4400 Massachusetts Avenue, and Wesley Theological Seminary is next door at 4500. Visit the street you like at different times, including a weekday afternoon, to see how campus activity affects traffic and parking.',
        'Campus and nearby development projects go to the DC Zoning Commission, where ANC 3D and the Spring Valley-Wesley Heights Citizens Association have taken part. Ask the seller or the ANC about any project near the house you want.',
        'The university also adds things to do. The Katzen Arts Center brings visual and performing arts to campus, and Massachusetts Avenue has restaurants, a pharmacy and everyday shops within a short drive.',
      ],
    },
    {
      title: 'Getting Around Spring Valley',
      paragraphs: [
        'Spring Valley has no Metro station. Metrobus stops line Massachusetts Avenue, and the closest Red Line station is Tenleytown-AU, a bus ride or short drive away depending on the block.',
        'Massachusetts Avenue leads northwest to the Maryland line and southeast toward downtown. Blocks near campus can have parking limits, so confirm the rules for the exact street.',
      ],
    },
  ],
  agent: {
    title: 'Brandon’s Spring Valley Experience',
    paragraphs: ['If you want a Spring Valley real estate agent who will walk you through the Corps’ records before you tour a house, Brandon Wilson can pull that paperwork and compare the neighborhood with Palisades and other areas on the same budget.'],
  },
  nearby: [
    { name: 'Palisades', text: 'To the southwest' },
    { name: 'Chevy Chase DC', text: 'To the east' },
  ],
  faqTitle: 'Spring Valley FAQ',
  faqs: [
    { q: 'Is Spring Valley the same as American University Park?', a: 'No, they are neighboring areas, and the names confuse many buyers. American University Park lies to the northeast, even though most of American University’s main campus sits inside Spring Valley.' },
    { q: 'Where can I find records for a specific property?', a: 'The Army Corps of Engineers’ Baltimore District led the cleanup, so start there for work done on a given address. The seller and the title company may also hold sampling results or recorded notices.' },
    { q: 'Which schools serve Spring Valley?', a: 'Local guides point to Horace Mann Elementary in nearby Wesley Heights, but zoned schools depend on the address. DC opened MacArthur High School in 2023 and adjusted some boundaries, so check all three levels with the DCPS boundary tool before you make an offer.' },
    { q: 'Are there condos in Spring Valley?', a: 'Very few. The neighborhood is mostly single-family houses with some townhouses, so buyers who want a condo usually look in nearby areas. Brandon can compare those options on the same budget.' },
  ],
  cta: {
    title: 'Ready to Look at Spring Valley DC Homes for Sale?',
    text: 'Tell Brandon your budget, your commute and how close you want to be to campus. He will line up the Spring Valley houses that fit and pull the available records on each one before you tour.',
    button: 'Search Spring Valley Homes',
  },
};
