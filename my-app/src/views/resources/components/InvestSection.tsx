import Reveal from '@/components/base/Reveal';
import { Eyebrow } from '@/views/home-v2/components/shared';
import ResourceContactForm from '@/views/resources/components/ResourceContactForm';
import { investCopy } from '@/mocks/resourcesData';

export default function InvestSection() {
  return (
    <section id={investCopy.id} className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <Eyebrow index="06">{investCopy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[52px]">
            {investCopy.titleLead} <em className="italic">{investCopy.titleAccent}</em>
          </h2>
          <p className="mt-6 text-[15px] font-semibold uppercase tracking-[0.18em] text-primary-600">
            {investCopy.feedback}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-foreground-600">{investCopy.text}</p>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={120}>
          <ResourceContactForm />
        </Reveal>
      </div>
    </section>
  );
}