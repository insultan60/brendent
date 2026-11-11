import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hub, neighborhoodGuides } from '@/mocks/neighborhoodsData';
import NeighborhoodGuidePage from '@/views/neighborhoods/GuidePage';

export const dynamicParams = false;

export function generateStaticParams() {
  return neighborhoodGuides.map((g) => ({ slug: g.slug }));
}

const find = (slug: string) => neighborhoodGuides.find((g) => g.slug === slug);

export async function generateMetadata({ params }: PageProps<'/neighborhoods/[slug]'>): Promise<Metadata> {
  const guide = find((await params).slug);
  if (!guide) return {};
  const url = `${hub.path}/${guide.slug}`;
  return {
    title: { absolute: guide.title },
    description: guide.description,
    alternates: { canonical: url },
    openGraph: { type: 'website', siteName: 'BW Metro Properties', url, title: guide.ogTitle, description: guide.ogDescription, images: [guide.hero.image] },
  };
}

export default async function Page({ params }: PageProps<'/neighborhoods/[slug]'>) {
  const guide = find((await params).slug);
  if (!guide) notFound();
  return <NeighborhoodGuidePage guide={guide} />;
}
