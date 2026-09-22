import Reveal from '@/components/base/Reveal';
import { idealFor } from '@/mocks/rentalsData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import CardIcon from '@/views/rentals/components/CardIcon';

export default function IdealFor() {
  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="05">{idealFor.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            {idealFor.titleLead} <em className="italic">{idealFor.titleAccent}</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {idealFor.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 90}>
              <article className="group flex h-full flex-col rounded-[26px] border border-background-300 bg-background-100 p-8 transition-colors duration-300 hover:border-foreground-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700 transition-colors duration-300 group-hover:bg-primary-500 group-hover:text-background-50">
                  <CardIcon name={card.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-7 font-heading text-[23px] leading-tight text-foreground-950">{card.title}</h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-foreground-600">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}