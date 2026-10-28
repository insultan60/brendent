import { ExternalLink } from 'lucide-react';
import { propertiesHero } from '@/mocks/propertiesData';
import { Eyebrow } from '@/views/home-v2/components/shared';

interface PropertiesHeroProps {
  fullMlsUrl: string;
}

/* A slim dark band rather than a full-screen hero, so the map and listings
   are on screen from the first view (client request, October 2026). It stays
   dark because the masthead is transparent until the page scrolls. */
export default function PropertiesHero({ fullMlsUrl }: PropertiesHeroProps) {
  return (
    <section id="top" className="relative overflow-hidden bg-foreground-950">
      <img
        loading="eager"
        fetchPriority="high"
        decoding="async"
        src={propertiesHero.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground-950 via-foreground-950/85 to-foreground-950/40" aria-hidden="true" />

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col gap-6 px-5 pb-10 pt-32 md:flex-row md:items-end md:justify-between md:px-10 md:pb-12 md:pt-36">
        <div className="max-w-3xl">
          <Eyebrow tone="light">{propertiesHero.eyebrow}</Eyebrow>
          <h1 className="mt-5 font-heading text-[34px] font-normal leading-[1.02] tracking-[-0.02em] text-background-50 md:text-[48px]">
            {propertiesHero.titleLead} <em className="italic">{propertiesHero.titleAccent}</em>
          </h1>
          <p className="mt-4 max-w-2xl text-[14.5px] leading-relaxed text-background-200 md:text-[15.5px]">
            {propertiesHero.text}
          </p>
        </div>
        <a
          href={fullMlsUrl}
          target="_blank"
          rel="noopener"
          className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 self-start whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 md:self-auto"
        >
          Search My Full MLS
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
