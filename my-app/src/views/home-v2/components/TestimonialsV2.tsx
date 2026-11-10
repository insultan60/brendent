import { ArrowRight, BadgeCheck, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { featuredReviewNames, testimonials } from '@/mocks/homeData';
import { Eyebrow } from '@/views/home-v2/components/shared';

const featured = featuredReviewNames
  .map((name) => testimonials.find((review) => review.name === name))
  .filter((review) => review !== undefined);

export default function TestimonialsV2({ index }: { index: string }) {
  return (
    <section id="testimonials" className="bg-foreground-950 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow tone="light" index={index} className="justify-center">
            Client Reviews
          </Eyebrow>
          <h2 className="mt-7 font-heading text-[34px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
            What Clients Say About <em className="italic">Working With Brandon</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
            Reviews from buyers, sellers, investors and a lender partner across DC, Maryland and Virginia.
          </p>
        </Reveal>

        <div className="mt-16 columns-1 gap-6 md:columns-2 lg:columns-3">
          {featured.map((review, i) => (
            <Reveal key={review.name} delay={i * 60} className="mb-6 break-inside-avoid">
              <figure className="rounded-[24px] border border-background-50/10 bg-background-50/[0.04] p-7 transition-colors duration-300 hover:bg-background-50/[0.07]">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-0.5 text-background-100">
                    {Array.from({ length: review.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true" />
                    ))}
                  </div>
                  <BadgeCheck className="h-5 w-5 text-background-200/60" aria-hidden="true" />
                </div>
                <blockquote className="mt-6 text-[14.5px] leading-relaxed text-background-100">
                  {review.text}
                </blockquote>
                <figcaption className="mt-7 flex items-center gap-3.5 border-t border-background-50/10 pt-6">
                  <span className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
                    <img
              loading="lazy"
              decoding="async"
                      src={review.avatar}
                      alt={`${review.name}, BW Metro Properties client`}
                      className="h-full w-full object-cover object-top"
                    />
                  </span>
                  <span>
                    <span className="block text-[14px] font-semibold text-background-50">{review.name}</span>
                    <span className="block text-[12px] text-background-200/70">{review.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/success-stories"
            className="group inline-flex items-center gap-2 text-[14px] font-semibold text-background-50 underline-offset-4 hover:underline"
          >
            Read all reviews
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}