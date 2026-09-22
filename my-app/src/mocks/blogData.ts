export const blogHero = {
  eyebrow: 'Your guide to',
  title: 'Our Market',
  text: 'If you want to stay ahead of the game and stay informed about the ever-changing local real estate market, subscribing to our blog is a must. Our blog provides valuable insights, market trends, and expert advice from industry professionals.',
  image:
    'https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg',
};

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  categories: string[];
  href: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'Your Step-by-Step Guide to Buying a Home in the DMV (2026 Edition)',
    excerpt:
      'Buying your first home in the DC / Maryland / Virginia area can feel overwhelming — here is the clear, step-by-step path from pre-approval to closing day.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/dmv-homebuying-hero-600x300.png',
    categories: ['Buying'],
    href: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
  },
  {
    id: 'b2',
    title: 'The VA Loan, Explained: A Smart Guide for DMV Buyers and Sellers',
    excerpt:
      'If you have served this country, you have earned one of the most powerful tools in real estate — here is how to use your VA loan to its fullest.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/va-loan-blog-header-1-600x300.png',
    categories: ['Buying', 'Selling'],
    href: 'https://bwmetroproperties.com/the-va-loan-explained-a-smart-guide-for-dmv-buyers-and-sellers/',
  },
  {
    id: 'b3',
    title: "How Smart DMV Buyers Negotiate in Today's Rebalancing Market",
    excerpt:
      'DC inventory is up 33 percent year over year, and yet a lot of buyers are still overpaying. Here is how smart buyers negotiate in a rebalancing market.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/checklist-1-600x300.jpg',
    categories: ['Buying'],
    href: 'https://bwmetroproperties.com/how-smart-dmv-buyers-negotiate-in-todays-rebalancing-market/',
  },
  {
    id: 'b4',
    title: "The 3 Types of Buyers I'm Seeing Right Now — and How Sellers Should Respond",
    excerpt:
      'The DMV market is not one thing right now, and that single fact is causing a lot of sellers to misprice their homes. Here is how to respond to each buyer.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/06/realtor9-600x300.jpeg',
    categories: ['Buying'],
    href: 'https://bwmetroproperties.com/the-3-types-of-buyers-im-seeing-right-now-and-how-sellers-should-respond/',
  },
  {
    id: 'b5',
    title: 'Renting vs. Buying in the DMV',
    excerpt:
      'Choosing whether to rent or buy in the DMV is one of the biggest financial and lifestyle decisions you will make — here is how to weigh it clearly.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-1569-600x300.jpg',
    categories: ['Buying', 'Renting'],
    href: 'https://bwmetroproperties.com/renting-vs-buying-in-the-dmv/',
  },
  {
    id: 'b6',
    title: 'Condo Association Basics',
    excerpt:
      'A condo association can protect property values and maintain shared amenities, but buyers should review the rules, reserves, and fees before they commit.',
    image:
      'https://assets.agentfire3.com/uploads/sites/2739/2026/03/luxury-condo-look-from-out-side-to-inside-see-luxury-room-600x300.jpg',
    categories: ['Uncategorized'],
    href: 'https://bwmetroproperties.com/condo-association-basics/',
  },
  {
    id: 'b7',
    title: "7 Signs You're Ready to Buy in the DMV",
    excerpt:
      'Buying a home in the DMV is not just about wanting more space or getting tired of renting — here are seven signs you are genuinely ready to buy.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/04/IMG-6235-600x300.jpeg',
    categories: ['Uncategorized'],
    href: 'https://bwmetroproperties.com/7-signs-youre-ready-to-buy-in-the-dmv/',
  },
  {
    id: 'b8',
    title: '10 Things to Check Before Buying a Condo',
    excerpt:
      'Buying a condo can be a smart path to homeownership, but not every condo community is a smart investment — check these ten things first.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/checklist-600x300.jpg',
    categories: ['Uncategorized'],
    href: 'https://bwmetroproperties.com/10-things-to-check-before-buying-a-condo/',
  },
  {
    id: 'b9',
    title: 'What Losing a Home Really Means for Buyers in a Competitive Market',
    excerpt:
      'You spent weeks walking through that three-bedroom colonial, mentally arranging your furniture in the living room — and then you lost it. Here is what that really means.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2026/03/newhomehappy-600x300.jpg',
    categories: ['Buying'],
    href: 'https://bwmetroproperties.com/what-losing-a-home-really-means-for-buyers-in-a-competitive-market/',
  },
  {
    id: 'b10',
    title: "Things You Shouldn't Do When Buying a Home",
    excerpt:
      'With a never ending list of everything you "should do" when purchasing a home, it seems the mistakes are easy to make. Here are the things to avoid.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2022/10/blog-post-2-600x300.jpg',
    categories: ['Buying'],
    href: 'https://bwmetroproperties.com/things-shouldnt-buying-home/',
  },
  {
    id: 'b11',
    title: 'Should I Rent or Buy a Home?',
    excerpt:
      'Purchasing a home will inevitably be the biggest financial discussion of your life. And the decision to rent or buy deserves a clear, honest framework.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2022/10/blog-post-3-600x300.jpg',
    categories: ['Buying', 'Renting'],
    href: 'https://bwmetroproperties.com/rent-buy-home/',
  },
  {
    id: 'b12',
    title: "10 Top Reno's That Will Up the Sale Price of Your Home",
    excerpt:
      'When getting ready to sell your home, it can be hard to know what renovations will deliver a return. These ten updates consistently up the sale price.',
    image: 'https://assets.agentfire3.com/uploads/sites/2739/2022/10/Little-Five-Points-600x300.jpg',
    categories: ['Selling'],
    href: 'https://bwmetroproperties.com/10-top-renos-that-will-up-the-sale-price-of-your-home/',
  },
];

export const blogCategories = ['All', 'Buying', 'Selling', 'Renting', 'Uncategorized'] as const;

export const blogJournal = {
  eyebrow: 'Insights & Guidance',
  title: 'Latest From the',
  titleAccent: 'Journal',
  text: 'Market trends, neighborhood deep-dives, and practical advice for buyers, sellers and investors across Washington, DC, Maryland and Northern Virginia.',
};

export const blogNewsletter = {
  eyebrow: 'Stay',
  title: 'Connected',
  text: 'From real estate must-knows to local community news, get all the important updates straight to your inbox.',
  disclaimer:
    "I agree to be contacted via call, email, and text. To opt-out, reply 'stop' at any time or click the unsubscribe link in the emails. Message and data rates may apply.",
  button: 'Subscribe',
};