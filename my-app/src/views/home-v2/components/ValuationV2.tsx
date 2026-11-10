import { ArrowRight } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { Eyebrow } from '@/views/home-v2/components/shared';
import { idxHomeValuationUrl } from '@/views/properties/utils';

/* The homepage valuation box takes the address, then hands the visitor to
   IDX Broker's Home Valuation form (with the address filled in) for the
   property details and contact info. The request lands in Brandon's IDX lead
   manager and he prepares the value himself. */
export default function ValuationV2({ index }: { index?: string }) {
  return (
    <section id="value" className="bg-background-100 px-5 py-6 md:px-10 md:py-8">
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[30px] border border-background-300 bg-background-50">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-7 py-16 md:px-14 md:py-24">
            <Reveal>
              <Eyebrow index={index}>Home Value</Eyebrow>
              <h2 className="mt-7 font-heading text-[32px] font-normal leading-[1.06] tracking-[-0.02em] text-foreground-950 md:text-[50px]">
                What Is Your Home <em className="italic">Worth?</em>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
                Share your address and Brandon will prepare a valuation from recent sales near you. It is free, it is
                not an automated guess, and there is no obligation.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-10">
                <AddressLeadForm
                  handoffUrl={idxHomeValuationUrl}
                  id="home-value-form-v2"
                  addressLabel="Property address"
                  addressPlaceholder="Enter your street, city, state and zip"
                  cta="Get My Home Value"
                  note="Free and no obligation. A real valuation from Brandon, not an automated estimate."
                  successTitle="Thanks, we've got your request."
                  successText="Brandon will follow up with an accurate value range for your home."
                  tone="light"
                />
              </div>
              <a
                href="/home-sale-calculator"
                className="group mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-foreground-900 underline-offset-4 hover:underline"
              >
                Estimate your net proceeds with the home sale calculator
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
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