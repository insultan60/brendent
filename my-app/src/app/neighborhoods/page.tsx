import type { Metadata } from 'next';
import { hub } from '@/mocks/neighborhoodsData';
export { default } from '@/views/neighborhoods/HubPage';

export const metadata: Metadata = {
  title: { absolute: hub.title },
  description: hub.description,
  alternates: { canonical: hub.path },
  openGraph: { type: 'website', siteName: 'BW Metro Properties', url: hub.path, title: hub.ogTitle, description: hub.ogDescription },
};
