import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // The parent folder still holds the old Vite app's package-lock.json, so Next
  // would otherwise infer the workspace root as `bredent/` and warn on every build.
  turbopack: {
    root: path.resolve(__dirname),
  },

  async redirects() {
    return [
      {
        /*
         * Resources and Partners are now one page. /partners is redirected
         * rather than deleted: it is a live, indexed URL with links pointing at
         * it, and a 404 would throw away both the visitors and the ranking it
         * has already earned. permanent (308) tells Google to move that credit
         * to /resources instead of treating this as a temporary detour.
         *
         * It lands on the partner half of the page, not the top of it, so
         * someone who followed a link about partners still arrives at partners.
         */
        source: '/partners',
        destination: '/resources#network',
        permanent: true,
      },
      /*
       * Articles from the old site that were not carried over. Their cards were
       * removed from /blog; these send anyone arriving from Google or an old
       * link to the blog instead of a 404. Remove a line here if that article
       * is ever republished at the same address.
       */
      ...[
        'the-va-loan-explained-a-smart-guide-for-dmv-buyers-and-sellers',
        'how-smart-dmv-buyers-negotiate-in-todays-rebalancing-market',
        'the-3-types-of-buyers-im-seeing-right-now-and-how-sellers-should-respond',
        'renting-vs-buying-in-the-dmv',
        'condo-association-basics',
        '7-signs-youre-ready-to-buy-in-the-dmv',
        '10-things-to-check-before-buying-a-condo',
        'what-losing-a-home-really-means-for-buyers-in-a-competitive-market',
        'things-shouldnt-buying-home',
        'rent-buy-home',
        '10-top-renos-that-will-up-the-sale-price-of-your-home',
      ].map((slug) => ({ source: `/${slug}`, destination: '/blog', permanent: true })),
      // The one article that was kept moved under /blog.
      {
        source: '/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
        destination: '/blog/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition',
        permanent: true,
      },
      {
        // The contact page lives at /get-in-touch; /contact is the address
        // people (and links from other sites) are most likely to type.
        source: '/contact',
        destination: '/get-in-touch',
        permanent: true,
      },
      // The Shaw guide now lives under /neighborhoods; keep the old addresses working.
      ...['/shaw-u-street-corridor', '/washington/shaw-u-street-corridor'].map((source) => ({
        source,
        destination: '/neighborhoods/shaw-u-street',
        permanent: true,
      })),
      // Capitol Riverfront is covered on the Navy Yard guide (the BID renamed itself).
      ...['/neighborhoods/capitol-riverfront', '/capitol-riverfront'].map((source) => ({
        source,
        destination: '/neighborhoods/navy-yard',
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
