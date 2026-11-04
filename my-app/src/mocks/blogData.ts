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

/* Only articles that exist on this site. The old site's posts (VA loan,
   renting vs buying, condo basics...) were not carried over, so their cards
   were removed and their old addresses redirect to /blog (next.config.ts).
   Add a post back here once its page exists under /blog. */
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