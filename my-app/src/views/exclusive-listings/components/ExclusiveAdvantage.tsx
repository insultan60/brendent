import type { ComponentType } from 'react';
import { Clock, KeyRound, ShieldCheck, Sparkles } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { exclusiveAdvantage } from '@/mocks/exclusiveData';
import { Eyebrow } from '@/views/home-v2/components/shared';

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  key: KeyRound,
  sparkles: Sparkles,
  clock: Clock,
  shield: ShieldCheck,
};

export default function ExclusiveAdvantage() {
  return (
    <section id="advantage" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow tone="light" index="02">
            {exclusiveAdvantage.eyebrow}
          </Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
            {exclusiveAdvantage.title}
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
            {exclusiveAdvantage.text}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-background-50/10 bg-background-50/10 sm:grid-cols-2 lg:grid-cols-4">
          {exclusiveAdvantage.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? KeyRound;
            return (
              <Reveal key={item.title} delay={index * 80}>
                <div className="flex h-full flex-col bg-foreground-950 p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50/10 text-background-50">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 font-heading text-[22px] leading-tight text-background-50">{item.title}</h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-background-200">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}