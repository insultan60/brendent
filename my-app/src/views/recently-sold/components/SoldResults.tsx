import Reveal from '@/components/base/Reveal';
import { soldStats } from '@/mocks/recentlySoldData';

export default function SoldResults() {
  return (
    <section className="bg-foreground-950 px-5 py-16 md:px-10 md:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {soldStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 80}>
              <div className="border-t border-background-50/15 pt-6">
                <span className="mb-5 block h-0.5 w-9 rounded-full bg-accent-500" aria-hidden="true" />
                <p className="font-heading text-[38px] leading-none text-background-50 md:text-[46px]">
                  {stat.value}
                </p>
                <p className="mt-3 text-[11.5px] font-semibold uppercase tracking-[0.22em] text-background-300">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}