import Reveal from '@/components/base/Reveal';
import LeadForm from '@/components/feature/LeadForm';
import { brand } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

/**
 * Book or ask: Brandon's Google booking calendar beside the consultation
 * form, on the Buyers and Sellers pages. A visitor who knows when they are
 * free books a slot; anyone else leaves details and Brandon calls back.
 */
export default function ConsultSection({
  variant,
  sectionIndex,
}: {
  variant: 'buyer' | 'seller';
  sectionIndex?: string;
}) {
  const seller = variant === 'seller';

  return (
    <section id="consultation" className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1420px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index={sectionIndex}>Schedule a Consultation</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[54px]">
            {seller ? (
              <>
                Let&rsquo;s talk about your <em className="italic">sale</em>.
              </>
            ) : (
              <>
                Let&rsquo;s plan your <em className="italic">purchase</em>.
              </>
            )}
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Pick a time on Brandon&rsquo;s calendar, or send your details and he&rsquo;ll reach out personally.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7">
            <div className="h-full overflow-hidden rounded-[28px] border border-background-300 bg-background-50">
              <iframe
                src={brand.bookingCalendar}
                title="Book a consultation with Brandon Wilson"
                loading="lazy"
                className="block h-[1100px] w-full border-0 lg:h-full lg:min-h-[900px]"
              />
            </div>
          </Reveal>
          <Reveal className="lg:col-span-5" delay={120}>
            <LeadForm
              variant={variant}
              eyebrow="Prefer a call back?"
              title={seller ? 'Tell us about your home' : 'Tell us what you’re looking for'}
              text="Share a few details and Brandon will get back to you personally."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
