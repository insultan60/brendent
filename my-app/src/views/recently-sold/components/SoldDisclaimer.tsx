import Reveal from '@/components/base/Reveal';
import { soldDisclaimer } from '@/mocks/recentlySoldData';

export default function SoldDisclaimer() {
  return (
    <section className="bg-background-50 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="flex flex-col gap-8 rounded-[30px] border border-background-300 bg-background-100 p-8 md:flex-row md:items-center md:gap-12 md:p-12">
            <div className="flex shrink-0 flex-col items-start gap-1.5">
              <span className="flex items-baseline gap-1 leading-none">
                <span className="font-heading text-[30px] italic text-foreground-950">b</span>
                <span className="font-heading text-[30px] text-foreground-950">right</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-foreground-500">
                MLS
              </span>
            </div>
            <p className="text-[13px] leading-relaxed text-foreground-600 md:text-[13.5px]">{soldDisclaimer}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}