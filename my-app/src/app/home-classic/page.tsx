import type { Metadata } from 'next';
export { default } from '@/views/home/page';

// An earlier copy of the homepage: reachable, but kept out of search
// results so it does not compete with / as a duplicate.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  robots: { index: false, follow: true },
};
