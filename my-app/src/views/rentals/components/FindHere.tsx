import Reveal from '@/components/base/Reveal';
import { findHere } from '@/mocks/rentalsData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import CardIcon from '@/views/rentals/components/CardIcon';

export default function FindHere() {
  return (
    <section className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="04">{findHere.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            {findHere.titleLead} <em className="italic">{findHere.titleAccent}</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            {findHere.text}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {findHere.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="flex h-full flex-col border-t border-foreground-950 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-100 text-secondary-900">
                  <CardIcon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-heading text-[21px] leading-tight text-foreground-950">{card.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-foreground-600">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}