import Reveal from '@/components/base/Reveal';
import { contactSectionCopy } from '@/mocks/getInTouchData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import ContactInfoCard from '@/views/get-in-touch/components/ContactInfoCard';
import ContactForm from '@/views/get-in-touch/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="get-in-touch" className="bg-background-50 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-3xl">
          <Eyebrow index="01">{contactSectionCopy.eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[34px] font-normal leading-[1.05] tracking-[-0.025em] text-foreground-950 md:text-[54px]">
            Every move starts with a <em className="italic">conversation</em>.
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-5">
            <ContactInfoCard />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}