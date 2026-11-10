import { Check } from 'lucide-react';
import { trustPoints } from '@/mocks/homeData';

/** The four proof points directly under the hero. */
export default function TrustBarV2() {
  return (
    <section aria-label="Why clients trust Brandon" className="border-b border-background-200 bg-background-50 px-5 md:px-10">
      <ul className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-8 gap-y-4 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:py-8">
        {trustPoints.map((point) => (
          <li key={point} className="flex items-start gap-3 text-[13.5px] font-medium leading-snug text-foreground-800">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-700" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
