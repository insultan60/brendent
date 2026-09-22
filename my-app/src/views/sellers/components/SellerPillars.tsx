import Reveal from '@/components/base/Reveal';
import { sellerPillars } from '@/mocks/sellersData';
import { Eyebrow } from '@/views/home-v2/components/shared';

export default function SellerPillars() {
  return (
    <section className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="max-w-2xl">
          <Eyebrow index="04">What Sets Us Apart</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[46px]">
            Built Into Every <em className="italic">Listing</em>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {sellerPillars.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 100}>
              <article className="group flex h-full flex-col justify-between rounded-[26px] border border-background-300 bg-background-50 p-8 transition-colors duration-300 hover:border-foreground-400 md:p-9">
                <div>
                  <span className="font-heading text-[15px] text-foreground-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-6 font-heading text-[26px] leading-tight text-foreground-950 md:text-[30px]">
                    {pillar.title}
                  </h3>
                  <p className="mt-5 text-[14.5px] leading-relaxed text-foreground-600">{pillar.text}</p>
                </div>
                <span
                  className="mt-9 h-px w-full origin-left scale-x-0 bg-foreground-950 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}