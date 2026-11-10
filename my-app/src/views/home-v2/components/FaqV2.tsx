import { Plus } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { homeFaqs } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/** Native <details> rows, so the answers are in the HTML and work without JS. */
export default function FaqV2({ index }: { index: string }) {
  return (
    <section id="faq" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <Eyebrow index={index}>FAQ</Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
            Frequently Asked <em className="italic">Questions</em>
          </h2>
        </Reveal>

        <div className="border-b border-background-300">
          {homeFaqs.map((faq) => (
            <details key={faq.q} className="group border-t border-background-300">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                <h3 className="font-heading text-[19px] leading-snug text-foreground-950 md:text-[22px]">{faq.q}</h3>
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-transform duration-300 group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-[15px] leading-relaxed text-foreground-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
