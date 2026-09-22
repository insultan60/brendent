import { BadgeCheck, Star } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { successReviews } from '@/mocks/successStoriesData';
import { Eyebrow } from '@/views/home-v2/components/shared';
import ReviewCard from '@/views/success-stories/components/ReviewCard';

export default function ReviewsWall() {
  return (
    <section id="reviews" className="bg-background-100 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow index="01" className="justify-center">
            In the Words of Our Clients
          </Eyebrow>
          <h2 className="mt-7 font-heading text-[36px] font-normal leading-[1.04] tracking-[-0.025em] text-foreground-950 md:text-[54px]">
            Real Reviews, Real <em className="italic">Results</em>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Every quote below is a verified Google review from a buyer, seller or investor we were honored to guide.
            No edits, no spin — just the words of the people we serve.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="flex flex-col items-center justify-between gap-6 rounded-[26px] border border-background-200 bg-background-50 px-7 py-6 text-center sm:flex-row sm:text-left md:px-10">
            <div className="flex flex-col items-center gap-5 sm:flex-row">
              <span className="font-heading text-[48px] leading-none text-foreground-950">5.0</span>
              <span className="flex flex-col items-center gap-1.5 sm:items-start">
                <span className="flex items-center gap-0.5 text-primary-500">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-4 w-4" fill="currentColor" aria-hidden="true" />
                  ))}
                </span>
                <span className="text-[12.5px] text-foreground-500">
                  Averaged across {successReviews.length} verified reviews
                </span>
              </span>
            </div>
            <span className="inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-secondary-100 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary-900">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Google Verified
            </span>
          </div>
        </Reveal>

        <div className="mt-10 columns-1 gap-6 md:columns-2 lg:columns-3">
          {successReviews.map((review, index) => (
            <Reveal key={review.name} delay={(index % 3) * 90} className="mb-6 break-inside-avoid">
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}