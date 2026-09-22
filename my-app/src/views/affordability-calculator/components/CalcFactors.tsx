import {
  CreditCard,
  Landmark,
  Percent,
  PiggyBank,
  Scale,
  Wallet,
  type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { affordabilityFactors } from '@/mocks/calcData';
import { Eyebrow } from '@/views/home-v2/components/shared';

const iconMap: Record<string, LucideIcon> = {
  Wallet,
  CreditCard,
  PiggyBank,
  Percent,
  Scale,
  Landmark,
};

export default function CalcFactors() {
  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="03">What shapes your number</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            The six inputs that decide <em className="italic">your budget</em>
          </h2>
          <p className="mt-6 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Lenders weigh each of these differently, and small changes add up. Here is what moves your buying power the
            most.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-[26px] border border-background-300 bg-background-300 sm:grid-cols-2 lg:grid-cols-3">
          {affordabilityFactors.map((factor, index) => {
            const Icon = iconMap[factor.icon] ?? Wallet;
            return (
              <Reveal key={factor.title} delay={index * 70}>
                <div className="group h-full bg-background-50 p-7 transition-colors duration-300 hover:bg-background-100 md:p-9">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-900 transition-colors duration-300 group-hover:bg-foreground-950 group-hover:text-background-50">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-heading text-[21px] leading-snug text-foreground-950">{factor.title}</h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-foreground-600">{factor.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}