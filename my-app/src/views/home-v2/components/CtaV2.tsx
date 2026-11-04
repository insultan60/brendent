import { Phone } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { Eyebrow, GhostButton } from '@/views/home-v2/components/shared';
import CtaForm from '@/views/home-v2/components/CtaForm';

/**
 * `sectionIndex` defaults to 13, which is this section's place on the home
 * page. Other pages have different section counts, so any page that numbers
 * its sections should pass its own value rather than inherit the home page's.
 */
export default function CtaV2({ sectionIndex = '13' }: { sectionIndex?: string }) {
  return (
    <section id="contact" className="bg-background-100 px-5 py-14 md:px-10 md:py-20">
      <div className="relative mx-auto flex max-w-[1420px] flex-col items-center overflow-hidden rounded-[30px] px-5 py-16 md:px-14 md:py-24 lg:px-20">
        <img
              loading="lazy"
              decoding="async"
          src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Washington-DC-Area-guide-AUTOx1150.fit.jpg"
          alt="Washington DC at dusk — the market BW Metro Properties serves"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-foreground-950/80" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-foreground-950/55 via-transparent to-foreground-950/70"
          aria-hidden="true"
        />
        <div className="v2-grain absolute inset-0" aria-hidden="true" />

        <div className="relative grid w-full items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <Reveal className="text-center lg:text-left">
            <Eyebrow tone="light" index={sectionIndex} className="justify-center lg:justify-start">
              Ready To Make Your Next Move?
            </Eyebrow>
            <h2 className="mt-8 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-background-50 [text-shadow:0_2px_28px_rgba(0,0,0,0.55)] md:text-[58px]">
              Let&rsquo;s build a strategy that works for your goals.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-background-100 [text-shadow:0_1px_16px_rgba(0,0,0,0.5)] md:text-[16.5px] lg:mx-0">
              Buyers, sellers and investors across Washington DC, Maryland and Northern Virginia trust BW Metro
              Properties to clear the path forward. Tell Brandon what you&rsquo;re planning and he&rsquo;ll come back
              with a clear next step.
            </p>
            <div className="mt-9 flex justify-center lg:justify-start">
              <GhostButton href="tel:+12029984593" tone="light">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Prefer to talk? (202) 998-4593
              </GhostButton>
            </div>
          </Reveal>

          <Reveal className="mx-auto w-full max-w-xl lg:max-w-none" delay={120}>
            <CtaForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}