import type { Metadata } from 'next';
import { homeFaqs } from '@/mocks/homeData';
import HomeV2 from '@/views/home-v2/page';

const TITLE = 'Washington DC Real Estate Agent | BW Metro Properties';
const DESCRIPTION =
  'Brandon Wilson is a Washington DC real estate agent and VA loan realtor serving DC, Northern Virginia and Maryland. Book a free consultation.';

export const metadata: Metadata = {
  // `absolute` skips the layout's "| BW Metro Properties" suffix, which the
  // title already ends with.
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Washington DC Real Estate Agent | Brandon Wilson, BW Metro Properties',
    description:
      'Buy, sell or relocate across DC, Northern Virginia and Maryland with a local realtor who plans every step. Free consultation.',
    url: '/',
  },
  twitter: { title: TITLE, description: DESCRIPTION },
};

/* FAQPage markup for the questions shown on the page. The RealEstateAgent
   entity it sits beside is in the root layout. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: homeFaqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <HomeV2 />
    </>
  );
}
