// Content for the Partners page — mirrors the real BW Metro Properties
// "Partners" page section for section, adapted to our own design system.

export const partnersHero = {
  eyebrow: 'Trusted Partners',
  titleLead: 'You Can',
  titleAccent: 'Rely On',
  text: "I’ve built strong relationships with a network of trusted professionals who share the same commitment to quality, communication, and results.",
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
};

export const partnersIntro = {
  eyebrow: 'Your Trusted Network of Experts',
  title: 'My Go-To Partners',
  paragraphs: [
    'A successful real estate experience goes beyond just buying or selling a home—it requires the right team behind you. That’s why I’ve built strong relationships with a network of trusted professionals who share the same commitment to quality, communication, and results. From experienced lenders and home inspectors to contractors, title companies, and insurance providers, each partner is carefully selected to ensure you receive reliable service every step of the way. Whether you need financing guidance, property insights, or post-closing support, you’ll have access to a team that helps make the process smooth, efficient, and stress-free.',
  ],
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235.jpeg',
};

export type ContactType = 'phone' | 'email' | 'website' | 'address' | 'instagram';

export interface PartnerContact {
  type: ContactType;
  label: string;
  href: string;
}

export interface FeaturedPartner {
  category: string;
  name: string;
  image: string;
  contacts: PartnerContact[];
  site: string;
}

export const featuredPartnersCopy = {
  eyebrow: 'Lenders, inspectors, and service providers',
  title: 'Our Trusted Partners',
};

export const featuredPartners: FeaturedPartner[] = [
  {
    category: 'Home Inspector',
    name: 'Rachel Oslund · Lode Star Inspection Services',
    image: 'https://public.readdy.ai/ai/img_res/edited_7132ecb08345ec24d09e5e4737e59b03_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '410.878.3039', href: 'tel:4108783039' },
      { type: 'email', label: 'LodeStar@LodeStarInspections.com', href: 'mailto:LodeStar@LodeStarInspections.com' },
      { type: 'website', label: 'www.LodeStarInspections.com', href: 'https://www.LodeStarInspections.com/' },
    ],
    site: 'https://www.LodeStarInspections.com/',
  },
  {
    category: 'Title Company',
    name: 'Phoenix S. Ayotte, Esq. · Equity Title and Escrow',
    image: 'https://public.readdy.ai/ai/img_res/edited_c50caf7d1344bcc50109fe4e9fb519f5_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '703.544.9004 Ext. 705', href: 'tel:7035449004' },
      { type: 'email', label: 'payotte@etetitle.com', href: 'mailto:payotte@etetitle.com' },
      { type: 'website', label: 'etetitle.com/about-us', href: 'https://www.etetitle.com/about-us/' },
    ],
    site: 'https://www.etetitle.com/about-us/',
  },
  {
    category: 'Lender',
    name: 'Sam Winkeler · First Heritage Mortgage',
    image: 'https://public.readdy.ai/ai/img_res/edited_e731791c38d1d78169d919e28092e7d0_ced7ca3f.jpg',
    contacts: [
      { type: 'phone', label: '207.440.7553', href: 'tel:2074407553' },
      { type: 'email', label: 'swinkeler@fhmtg.com', href: 'mailto:swinkeler@fhmtg.com' },
      { type: 'website', label: 'fhmtg.com/officers/sam-winkeler', href: 'https://fhmtg.com/officers/sam-winkeler/' },
    ],
    site: 'https://fhmtg.com/officers/sam-winkeler/',
  },
  {
    category: 'Handy Man',
    name: 'Fredy Rodas · Home Improvement',
    image: 'https://public.readdy.ai/ai/img_res/edited_3aac949bee8f1d4424add619939e2421_7b2a4deb.jpg',
    contacts: [
      { type: 'phone', label: '703-309-7964', href: 'tel:7033097964' },
      { type: 'email', label: 'fredyhandymanremodeling@gmail.com', href: 'mailto:fredyhandymanremodeling@gmail.com' },
      { type: 'instagram', label: 'fredyhr.llc', href: 'https://www.instagram.com/fredyhr.llc/?hl=en' },
    ],
    site: 'https://www.instagram.com/fredyhr.llc/',
  },
  {
    category: 'Insurance',
    name: 'Jahan Green · RightAway Insurance',
    image: 'https://public.readdy.ai/ai/img_res/edited_29ac3aa8a96c5fc943e9b5f4c4805e82_7b2a4deb.jpg',
    contacts: [
      { type: 'phone', label: '888-643-2161', href: 'tel:8886432161' },
      { type: 'email', label: 'Info@rightawayinsurance.com', href: 'mailto:Info@rightawayinsurance.com' },
      { type: 'website', label: 'rightawayinsurance.com', href: 'https://www.rightawayinsurance.com/' },
    ],
    site: 'https://www.rightawayinsurance.com/',
  },
  {
    category: 'Cleaning Service',
    name: 'The Clean Agenda · House Cleaning Service',
    image: 'https://public.readdy.ai/ai/img_res/edited_d8ca6a474b17c3170af36a62c73fe56e_f7658f1a.jpg',
    contacts: [
      { type: 'phone', label: '202.991.1691', href: 'tel:2029911691' },
      { type: 'email', label: 'Team@thecleanagenda.com', href: 'mailto:Team@thecleanagenda.com' },
      { type: 'website', label: 'thecleanagenda.com', href: 'https://thecleanagenda.com/' },
    ],
    site: 'https://thecleanagenda.com/',
  },
  {
    category: 'Lender',
    name: 'Shannon Leydig · Vellum Mortgage',
    image: 'https://public.readdy.ai/ai/img_res/edited_9b159345eb4c76e616979f77a77335e0_f7658f1a.jpg',
    contacts: [
      { type: 'phone', label: '571.830.2814', href: 'tel:5718302814' },
      { type: 'email', label: 'sleydig@vellummortgage.com', href: 'mailto:sleydig@vellummortgage.com' },
      { type: 'website', label: 'shannonleydig.vellum-pos.com', href: 'https://shannonleydig.vellum-pos.com/' },
    ],
    site: 'https://shannonleydig.vellum-pos.com/',
  },
];

export const communityCopy = {
  eyebrow: 'Local Favorites',
  title: 'Trusted Community Businesses',
};

export const communityBusinesses: FeaturedPartner[] = [
  {
    category: 'Spa — Self Care',
    name: 'Buddies Spa · Barber, Massage, Pedicure, Manicure, Waxing',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/Buddies-Resizedpng-preview.png',
    contacts: [
      { type: 'phone', label: '202.926.7178', href: 'tel:2029267178' },
      {
        type: 'address',
        label: '317 H St NW, Washington, DC 20001',
        href: 'https://www.google.com/maps/search/?api=1&query=317+H+St+NW,+Washington,+DC+20001',
      },
      { type: 'website', label: 'buddiesspa.com', href: 'https://www.buddiesspa.com/' },
    ],
    site: 'https://www.buddiesspa.com/',
  },
];

export interface DirectoryEntry {
  category: string;
  name: string;
  contacts: PartnerContact[];
}

export const directoryCopy = {
  eyebrow: 'Recommended by Brandon',
  title: 'The Full Partner Directory',
  text: 'A trusted bench of inspectors, lenders, contractors and trades — vetted for the quality and communication our clients expect. Filter by category to find the right professional for your project.',
  cta: 'Become a partner',
  ctaHref: '/get-in-touch',
};

export const directoryEntries: DirectoryEntry[] = [
  {
    category: 'Real Estate Attorney',
    name: 'Karla Heine Goodale, Partner',
    contacts: [
      { type: 'address', label: 'Lieberman Law Office P.C.', href: 'https://maps.google.com/?q=Lieberman+Law+Office+P.C.' },
      { type: 'phone', label: '617-285-6303', href: 'tel:6172856303' },
      { type: 'email', label: 'kgoodale@gbllaw.com', href: 'mailto:kgoodale@gbllaw.com' },
    ],
  },
  {
    category: 'Tiger Home Inspection',
    name: 'Karla Heine Goodale, Partner',
    contacts: [{ type: 'phone', label: '800-628-4437', href: 'tel:8006284437' }],
  },
  {
    category: 'Home Inspector',
    name: 'Imperial Inspection Services Inc.',
    contacts: [{ type: 'phone', label: '800-628-4437', href: 'tel:8006284437' }],
  },
  {
    category: 'Septic Inspectors',
    name: 'Wadsworth Inspections',
    contacts: [
      { type: 'address', label: 'Rob Wadsworth', href: 'https://maps.google.com/?q=Wadsworth+Inspections' },
      { type: 'phone', label: '508-404-7891', href: 'tel:5084047891' },
      { type: 'email', label: 'rob@wadsworthinspections.com', href: 'mailto:rob@wadsworthinspections.com' },
    ],
  },
  {
    category: 'Insurance',
    name: 'Ironside Insurance',
    contacts: [
      { type: 'address', label: 'Anthony Cingranelli', href: 'https://maps.google.com/?q=Ironside+Insurance' },
      { type: 'phone', label: '617-777-4967', href: 'tel:6177774967' },
      { type: 'email', label: 'anthony@ironsideig.com', href: 'mailto:anthony@ironsideig.com' },
    ],
  },
  {
    category: 'Moving',
    name: 'New Generation Moving & Storage',
    contacts: [{ type: 'phone', label: '774-215-5099', href: 'tel:7742155099' }],
  },
  {
    category: 'Moving',
    name: 'Statewide Moving',
    contacts: [{ type: 'phone', label: '774-296-8515', href: 'tel:7742968515' }],
  },
  {
    category: 'Contractors',
    name: 'Lagerval Construction',
    contacts: [{ type: 'phone', label: '508-269-3144', href: 'tel:5082693144' }],
  },
  {
    category: 'Contractors',
    name: 'Cycle Carpentry',
    contacts: [{ type: 'phone', label: '781-308-0377', href: 'tel:7813080377' }],
  },
  {
    category: 'Roofer',
    name: 'Joe McEachern',
    contacts: [{ type: 'phone', label: '774-766-0792', href: 'tel:7747660792' }],
  },
  {
    category: 'Roofer',
    name: 'Lagerval Construction',
    contacts: [{ type: 'phone', label: '508-269-3144', href: 'tel:5082693144' }],
  },
  {
    category: 'Electrician',
    name: 'Do It All Electrical',
    contacts: [{ type: 'phone', label: '781-447-8121', href: 'tel:7814478121' }],
  },
  {
    category: 'Electrician',
    name: 'CRB Electrical',
    contacts: [{ type: 'phone', label: '508-378-7701', href: 'tel:5083787701' }],
  },
  {
    category: 'Electrician',
    name: 'Dan Driscoll',
    contacts: [{ type: 'phone', label: '617-212-2136', href: 'tel:6172122136' }],
  },
  {
    category: 'Plumber',
    name: 'Fleming Plumbing & Heating',
    contacts: [{ type: 'phone', label: '774-259-7936', href: 'tel:7742597936' }],
  },
  {
    category: 'Plumber',
    name: 'C.J. Plumbing & Heating',
    contacts: [{ type: 'phone', label: '508-378-1271', href: 'tel:5083781271' }],
  },
  {
    category: 'Plumber',
    name: 'LaCourse Plumbing',
    contacts: [{ type: 'phone', label: '857-891-2383', href: 'tel:8578912383' }],
  },
  {
    category: 'HVAC',
    name: 'Mc Claren Heating & Air',
    contacts: [{ type: 'phone', label: '781-355-1949', href: 'tel:7813551949' }],
  },
  {
    category: 'HVAC',
    name: 'Northern Comfort Heating & AC Contractors',
    contacts: [{ type: 'phone', label: '508-697-7583', href: 'tel:5086977583' }],
  },
  {
    category: 'HVAC',
    name: 'Mann Mechanical HVAC',
    contacts: [{ type: 'phone', label: '508-400-7769', href: 'tel:5084007769' }],
  },
  {
    category: 'Landscaper',
    name: 'Rose & Stone Landscape and Design',
    contacts: [{ type: 'phone', label: '781-733-4911', href: 'tel:7817334911' }],
  },
  {
    category: 'Landscaper',
    name: 'Whitmore’s Yard Care Inc.',
    contacts: [{ type: 'phone', label: '508-378-2628', href: 'tel:5083782628' }],
  },
  {
    category: 'Landscaper',
    name: 'CF Landscaping',
    contacts: [{ type: 'phone', label: '774-719-3932', href: 'tel:7747193932' }],
  },
  {
    category: 'House Cleaning',
    name: 'W&G Best Cleaning Inc.',
    contacts: [{ type: 'phone', label: '508-933-7635', href: 'tel:5089337635' }],
  },
  {
    category: 'Painter',
    name: 'Stop N’ Stare Painting',
    contacts: [{ type: 'phone', label: '508-208-1814', href: 'tel:5082081814' }],
  },
  {
    category: 'Junk Removal',
    name: 'Blackbeard Inc.',
    contacts: [
      { type: 'phone', label: '781-831-2376', href: 'tel:7818312376' },
      { type: 'email', label: 'blackbeardsealcoating@gmail.com', href: 'mailto:blackbeardsealcoating@gmail.com' },
    ],
  },
  {
    category: 'Sealcoating',
    name: 'Godek & Sons Sealcoating',
    contacts: [{ type: 'phone', label: '508-840-0082', href: 'tel:5088400082' }],
  },
  {
    category: 'Excavator',
    name: 'Vinny Mofford Excavation LLC',
    contacts: [{ type: 'phone', label: '508-654-7917', href: 'tel:5086547917' }],
  },
  {
    category: 'Snow Plowing',
    name: 'Godek & Sons Sealcoating',
    contacts: [{ type: 'phone', label: '508-840-0082', href: 'tel:5088400082' }],
  },
];

export const partnersTestimonialCopy = {
  eyebrow: 'What Clients Are Saying',
  title: 'Our Client Testimonials',
  text: 'Real stories from buyers and sellers who trusted me with one of the biggest decisions of their lives.',
};

export const partnersInstagramCopy = {
  eyebrow: '@bwmetroproperties',
  title: 'Follow us on Instagram',
};