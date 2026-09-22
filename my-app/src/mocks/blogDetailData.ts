// Single source of truth for the Blog detail article:
// "Your Step-by-Step Guide to Buying a Home in the DMV (2026 Edition)".
// All content is carried over from the live BW Metro Properties article.

export const articleMeta = {
  title: 'Your Step-by-Step Guide to Buying a Home in the DMV (2026 Edition)',
  category: 'Buying',
  author: 'Brandon Wilson',
  date: 'June 23, 2026',
  readTime: '7 min read',
  heroImage: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/dmv-homebuying-hero.png',
  heroAlt:
    'First-time homebuyers celebrating with the keys to their new DMV home in front of a sold sign',
  breadcrumb: { label: 'Journal', href: '/blog' },
};

export const articleLead = [
  'Buying your first home in the DC / Maryland / Virginia area can feel overwhelming — competitive offers, rising prices, and a process with a lot of moving parts. The good news? 2026 is shaping up to be one of the most buyer-friendly windows we’ve seen in years, and you don’t have to navigate any of it alone.',
  'Here’s what the current market looks like, the eight steps that take you from “just looking” to “keys in hand,” and the down payment assistance programs that could make your purchase far more affordable than you think.',
];

export const marketSection = {
  id: 'the-dmv-market',
  label: 'Market Outlook',
  heading: 'The DMV Market Right Now: A “Goldilocks” Window for Buyers',
  lead: 'After years of frantic bidding wars, the 2026 spring market has shifted in buyers’ favor. The combination of lower mortgage rates and rising inventory has created what many local experts are calling the best buying conditions in years.',
  intro: 'A few numbers to anchor your expectations:',
  stats: [
    {
      label: 'DC Metro Median Sold Price',
      value: '~$635,000',
      text: 'As of March 2026, up just 1.6% year-over-year — the slowest growth in this cycle.',
    },
    {
      label: '30-Year Fixed Mortgage',
      value: '~6%',
      text: 'The 30-year fixed dipped to this level in early 2026 — the lowest level since 2022.',
    },
    {
      label: 'A Two-Speed Market',
      value: 'Two Speeds',
      text: 'Close-in areas like Arlington and Montgomery County are still competitive, while DC condos and outer suburbs are seeing price reductions and seller credits — meaning real leverage for prepared buyers.',
    },
  ],
  takeaway:
    'The takeaway: there’s opportunity here, but it rewards buyers who come prepared. That’s where a strong plan — and a strong team — makes all the difference.',
};

export const stepsSection = {
  id: 'the-8-steps',
  label: 'The Process',
  heading: 'The 8 Steps of Buying a Home',
  steps: [
    {
      n: '01',
      title: 'Consultation',
      text: 'It starts with a conversation. We sit down (in person or over Zoom) to talk through your goals, budget, must-haves, and timeline — no pressure, no jargon. This is where we build a game plan made just for you.',
    },
    {
      n: '02',
      title: 'Pre-Approval',
      text: 'Before you shop, you get pre-approved. A trusted lender reviews your finances and tells you exactly what you can comfortably afford. Your pre-approval letter shows sellers you’re serious — essential in a market where strong offers win.',
    },
    {
      n: '03',
      title: 'House Hunting',
      text: 'The fun part. We curate listings that fit your wish list, schedule showings, and tour homes together until we find the one that feels like home.',
    },
    {
      n: '04',
      title: 'Offer & Negotiation',
      text: 'When you find it, we move fast and smart — analyzing comparable sales, crafting a competitive offer, and negotiating hard on price, terms, and the contingencies that protect you.',
    },
    {
      n: '05',
      title: 'Inspection & Appraisal',
      text: 'Offer accepted? Now we protect your investment. A professional inspector examines the home top to bottom, while an appraiser confirms its value for your lender. If issues come up, we guide you through repairs or renegotiation.',
    },
    {
      n: '06',
      title: 'Underwriting',
      text: 'Your loan goes through a final financial review. It can feel quiet and a little nerve-wracking — that’s normal. We keep things moving toward your “clear to close.”',
    },
    {
      n: '07',
      title: 'Final Walkthrough',
      text: 'Just before closing, we walk the home together one last time to confirm everything is as agreed and ready for move-in day.',
    },
    {
      n: '08',
      title: 'Closing Day',
      text: 'You sign the final paperwork, the title officer makes it official, and the keys are yours. Welcome home.',
    },
  ],
};

export const programsSection = {
  id: 'first-time-buyer-programs',
  label: 'Assistance Programs',
  heading: 'First-Time Buyer Programs in DC, Maryland & Virginia',
  lead: 'Here’s what many buyers don’t realize: you may not need 20% down — or anywhere close to it. The DMV is home to some of the most generous down payment and closing cost assistance programs in the country. Here are the highlights by jurisdiction.',
  regions: [
    {
      code: 'DC',
      name: 'Washington, DC',
      items: [
        {
          name: 'Home Purchase Assistance Program (HPAP)',
          text: 'Up to $202,000 in down payment and closing cost assistance as an interest-free, deferred loan for first-time buyers at or below 80% of Area Median Income (AMI). Minimum 640 credit score and a DHCD-approved homebuyer education course required.',
        },
        {
          name: 'DC Open Doors',
          text: '3% (conventional) or 3.5% (FHA) of the purchase price toward down payment and closing costs, for both first-time and repeat buyers. Income up to ~$275,400, minimum 640 credit score.',
        },
        {
          name: 'Community Partners Product (CPP)',
          text: 'Up to $20,000 forgivable assistance for educators, healthcare workers, first responders, law enforcement, and active-duty/veteran military members.',
        },
        {
          name: 'Employer-Assisted Housing Program (EAHP)',
          text: 'For DC government employees — up to $20,000 deferred loan plus matching grants; first responders and educators may qualify for a $10,000 recoverable grant.',
        },
      ],
    },
    {
      code: 'MD',
      name: 'Maryland',
      items: [
        {
          name: 'MMP 1st Time Advantage',
          text: 'A 30-year fixed mortgage at a rate roughly 0.5%–2% below market for first-time buyers.',
        },
        {
          name: 'HomeStart 6% DPA Loan',
          text: '6% of the loan amount toward down payment and closing costs (0% interest, deferred) for buyers at or below 50% (AMI).',
        },
        {
          name: 'Pathway to Purchase (Prince George’s County)',
          text: 'Up to $25,000 at 0% interest, deferred — for new construction, resale, foreclosures, and short sales.',
        },
        {
          name: 'Montgomery Homeownership Program',
          text: 'Up to $25,000 (or 40% of qualifying income) in deferred down payment and closing cost help for Montgomery County buyers.',
        },
      ],
    },
    {
      code: 'VA',
      name: 'Virginia',
      items: [
        {
          name: 'Virginia Housing Plus Second Mortgage',
          text: '3%–5% of the purchase price toward your down payment, with up to an additional 1.5% for closing costs if your credit score is 680+.',
        },
        {
          name: 'HOMEownership DPA Program',
          text: 'A deferred, interest-free loan of up to 10% of the sales price (15% in select areas) plus up to $2,500 for closing costs, for buyers at or below 80% AMI.',
        },
        {
          name: 'Closing Cost Assistance (CCA) Grant',
          text: 'Up to 2% of the purchase price — free money toward closing costs.',
        },
        {
          name: 'First Home Dream Program',
          text: 'A 2-point interest rate buy-down for your first year, designed for first-generation buyers.',
        },
      ],
    },
  ],
  bonusLabel: 'Bonus — available region-wide',
  bonus: 'The Good Neighbor Next Door program offers teachers, police officers, firefighters, and EMTs a 50% discount on eligible HUD-owned homes.',
  disclaimer:
    'Program amounts, income limits, and availability change periodically and funds can be limited — let’s confirm what you qualify for before you start shopping.',
};

export const closingSection = {
  id: 'ready-to-make-your-move',
  label: 'Next Step',
  heading: 'Ready to Make Your Move?',
  paragraph:
    'The 2026 DMV market is full of opportunity for buyers who come prepared — and with the right assistance program, your dream home may be closer than you think.',
  emphasize:
    'Let’s build your personalized game plan. Reach out to Brandon at BW Metro Properties today, and let’s find your home together.',
  signature: 'Brandon Wilson | BW Metro Properties | Your Trusted Guide in DC · Maryland · Virginia',
  legal:
    'This article is for informational purposes only and does not constitute lending or financial advice. Program details are subject to change; verify current eligibility and terms with the administering agency or your lender.',
};

export const shareLinks = [
  {
    label: 'Facebook',
    icon: 'ri-facebook-fill',
    href: 'https://www.facebook.com/sharer.php?u=https%3A%2F%2Fbwmetroproperties.com%2Fyour-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition%2F',
  },
  {
    label: 'X',
    icon: 'ri-twitter-x-fill',
    href: 'https://x.com/intent/post?url=https%3A%2F%2Fbwmetroproperties.com%2Fyour-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition%2F&text=Your+Step-by-Step+Guide+to+Buying+a+Home+in+the+DMV+%282026+Edition%29',
  },
  {
    label: 'Pinterest',
    icon: 'ri-pinterest-fill',
    href: 'https://pinterest.com/pin/create/link/?url=https%3A%2F%2Fbwmetroproperties.com%2Fyour-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition%2F',
  },
  {
    label: 'LinkedIn',
    icon: 'ri-linkedin-fill',
    href: 'https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fbwmetroproperties.com%2Fyour-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition%2F&title=Your+Step-by-Step+Guide+to+Buying+a+Home+in+the+DMV+%282026+Edition%29&summary=',
  },
];

export const relatedArticle = {
  eyebrow: 'Check out this article next',
  title: 'The VA Loan, Explained: A Smart Guide for DMV Buyers and Sellers',
  excerpt:
    'If you have served this country, you have earned one of the most powerful tools in real estate: the VA home loan. It is a…',
  image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/va-loan-blog-header-1-500x500.png',
  href: 'https://bwmetroproperties.com/the-va-loan-explained-a-smart-guide-for-dmv-buyers-and-sellers/',
};

export const recentPosts = [
  {
    title: 'Your Step-by-Step Guide to Buying a Home in the DMV (2026 Edition)',
    href: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
  },
  {
    title: 'The VA Loan, Explained: A Smart Guide for DMV Buyers and Sellers',
    href: 'https://bwmetroproperties.com/the-va-loan-explained-a-smart-guide-for-dmv-buyers-and-sellers/',
  },
  {
    title: 'How Smart DMV Buyers Negotiate in Today’s Rebalancing Market',
    href: 'https://bwmetroproperties.com/how-smart-dmv-buyers-negotiate-in-todays-rebalancing-market/',
  },
  {
    title: 'The 3 Types of Buyers I’m Seeing Right Now (And How Sellers Should Respond)',
    href: 'https://bwmetroproperties.com/the-3-types-of-buyers-im-seeing-right-now-and-how-sellers-should-respond/',
  },
  {
    title: 'Renting vs. Buying in the DMV',
    href: 'https://bwmetroproperties.com/renting-vs-buying-in-the-dmv/',
  },
];

export const tableOfContents = [
  { id: 'the-dmv-market', label: 'The DMV Market Right Now' },
  { id: 'the-8-steps', label: 'The 8 Steps of Buying a Home' },
  { id: 'first-time-buyer-programs', label: 'First-Time Buyer Programs' },
  { id: 'ready-to-make-your-move', label: 'Ready to Make Your Move?' },
];