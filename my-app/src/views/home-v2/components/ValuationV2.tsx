import Reveal from '@/components/base/Reveal';
import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { VALUATION_ENDPOINT } from '@/views/home-valuation/components/ValuationLeadForm';

/* The homepage valuation box sends the address and the owner's details to
   Brandon, who prepares the value himself. It used to show an "estimate"
   computed from the length of the address text, which was not a valuation. */
export default function ValuationV2() {
  return (
    <section id="value" className="bg-background-100 px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-background-300 bg-background-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-7 py-16 md:px-14 md:py-24">
            <Reveal>
              <Eyebrow index="05">What&rsquo;s My Home Worth</Eyebrow>
              <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
                Know Your Home&rsquo;s <em className="italic">Value</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                Curious about your home&rsquo;s market value? Share the address and Brandon will prepare an accurate,
                local valuation based on recent sales near you, to help you decide on selling, refinancing, or your
                next move.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10">
                <AddressLeadForm
                  endpoint={VALUATION_ENDPOINT}
                  id="home-value-form-v2"
                  addressLabel="Property address"
                  addressPlaceholder="Enter your street, city, state and zip"
                  cta="Get My Home Value"
                  note="Free and no obligation. A real valuation from Brandon, not an automated guess."
                  successTitle="Thanks, we've got your request."
                  successText="Brandon will follow up with an accurate value range for your home."
                  tone="light"
                />
              </div>
            </Reveal>
          </div>

          <div className="relative min-h-[340px] lg:min-h-full">
            <img
              loading="lazy"
              decoding="async"
              src="https://assets.agentfire3.com/uploads/sites/2739/2026/03/Arlington-VA-Area-Guide-AUTOx1150.fit.jpeg"
              alt="Arlington Virginia neighborhood — home values across the DMV"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground-950/65 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-background-200">
                Free Home Valuation
              </p>
              <p className="mt-2 font-heading text-[22px] text-background-50 md:text-[26px]">
                Built for the DMV market
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}