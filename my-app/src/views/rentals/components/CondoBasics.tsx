import Reveal from '@/components/base/Reveal';
import { condoBasics } from '@/mocks/rentalsData';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import CardIcon from '@/views/rentals/components/CardIcon';

export default function CondoBasics() {
  return (
    <section className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow tone="light" index="06">
            {condoBasics.eyebrow}
          </Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
            {condoBasics.titleLead} <em className="italic text-background-100">{condoBasics.titleAccent}</em>
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-background-200/80 md:text-[16.5px]">
            {condoBasics.text}
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-6">
          {condoBasics.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 80}>
              <div className="flex h-full flex-col border-t border-background-50/15 pt-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-background-50/10 text-background-100">
                  <CardIcon name={card.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-6 font-heading text-[21px] leading-tight text-background-50">{card.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-background-200/75">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="mt-16 flex justify-center border-t border-background-50/10 pt-14">
          <CtaButton href={condoBasics.cta.href}>{condoBasics.cta.label}</CtaButton>
        </Reveal>
      </div>
    </section>
  );
}