import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/dashboard', '/api/', '/idx-wrapper'] },
    sitemap: 'https://www.bwmetroproperties.com/sitemap.xml',
  };
}
