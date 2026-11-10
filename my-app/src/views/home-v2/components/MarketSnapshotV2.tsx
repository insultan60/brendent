import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { marketSnapshot } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * Washington DC market snapshot. The number tiles only render once every value
 * and the source line in `marketSnapshot` are filled in; until then the section
 * shows the explanation and the market-report link on their own.
 */
export default function MarketSnapshotV2({ index }: { index: string }) {
  const tiles = [
    { label: 'Median sale price', value: marketSnapshot.medianPrice },
    { label: 'Median days on market', value: marketSnapshot.daysOnMarket },
    { label: 'Active listings', value: marketSnapshot.activeListings },
    { label: 'Sale-to-list price', value: marketSnapshot.saleToList },
  ];
  const hasData = Boolean(marketSnapshot.source) && tiles.every((tile) => tile.value);

  return (
    <section id="market" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index={index}>Market Snapshot</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Washington DC Real Estate <em className="italic">Market Snapshot</em>
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Four numbers tell you most of what you need to know: the median sale price, days on market, homes for sale
            and the sale-to-list price ratio.
          </p>
        </Reveal>

        {hasData ? (
          <Reveal className="mt-12">
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[26px] border border-background-300 bg-background-300 lg:grid-cols-4">
              {tiles.map((tile) => (
                <div key={tile.label} className="bg-background-50 p-7 md:p-9">
                  <dt className="text-[12.5px] leading-snug text-foreground-500">{tile.label}</dt>
                  <dd className="mt-3 font-heading text-[30px] leading-none text-foreground-950 md:text-[40px]">
                    {tile.value}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[12.5px] text-foreground-500">{marketSnapshot.source}</p>
          </Reveal>
        ) : null}

        <Reveal className="mt-12 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <p className="text-[15px] leading-relaxed text-foreground-600">
            A citywide median hides big gaps. A Georgetown townhouse and a Columbia Heights condo can sit in very
            different price ranges, so Brandon pulls numbers for your block and property type.
          </p>
          <p className="text-[15px] leading-relaxed text-foreground-600">
            When days on market rise and inventory grows, buyers usually gain leverage. When homes sell fast and
            inventory is thin, sellers hold more power.
          </p>
        </Reveal>

        <a
          href="/schedule"
          className="group mt-10 inline-flex items-center gap-2 text-[14px] font-semibold text-foreground-900 underline-offset-4 hover:underline"
        >
          Get a market report for your neighborhood
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
