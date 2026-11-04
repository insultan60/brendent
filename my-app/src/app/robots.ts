import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/dashboard', '/api/', '/idx-wrapper'] },
    sitemap: 'https://bwmetroproperties.com/sitemap.xml',
  };
}
