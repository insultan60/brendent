import type { MetadataRoute } from 'next';
import { getHomeSearch } from '@/lib/idx';

const SITE = 'https://bwmetroproperties.com';

// Every public page. /home-classic and /home-v2 are old homepage copies kept
// out of search, and /dashboard is private, so none of them are listed.
const PAGES = [
  '',
  '/properties',
  '/buyers',
  '/sellers',
  '/rentals',
  '/home-valuation',
  '/cash-offer',
  '/vip-home-search',
  '/exclusive-listings',
  '/recently-sold',
  '/explore-areas',
  '/washington',
  '/shaw-u-street-corridor',
  '/alexandria',
  '/arlington',
  '/falls-church',
  '/bethesda',
  '/silver-spring',
  '/about',
  '/success-stories',
  '/resources',
  '/blog',
  '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
  '/affordability-calculator',
  '/mortgage-calculator',
  '/home-sale-calculator',
  '/get-in-touch',
  '/privacy-policy',
  '/accessibility',
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Plus one page per listing IDX has for Brandon.
  const { listings } = await getHomeSearch();
  return [...PAGES, ...listings.map((l) => l.url)].map((path) => ({ url: `${SITE}${path}` }));
}
