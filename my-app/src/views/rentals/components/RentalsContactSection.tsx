import Reveal from '@/components/base/Reveal';
import { rentalsFormSection } from '@/mocks/rentalsData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import RentalLeadForm from '@/views/rentals/components/RentalLeadForm';

export default function RentalsContactSection() {
  return (
    <section id="rentals-form" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28">
            <Eyebrow index="09">{rentalsFormSection.eyebrow}</Eyebrow>
            <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-foreground-950 md:text-[52px]">
              {rentalsFormSection.titleLead} <em className="italic">{rentalsFormSection.titleAccent}</em>
            </h2>
            <p className="mt-7 max-w-xl text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
              {rentalsFormSection.text}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <RentalLeadForm formId="rentals-contact-form" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}