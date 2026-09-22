import Reveal from '@/components/base/Reveal';
import { CtaButton, Eyebrow } from '@/views/home-v2/components/shared';
import ResourceListForm from '@/views/resources/components/ResourceListForm';
import { lookingForCopy, suggestedTopics } from '@/mocks/resourcesData';

interface ResourcePathSectionProps {
  id: string;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  text: string;
  cta: string;
  ctaHref: string;
  tone?: 'light' | 'muted';
}

export default function ResourcePathSection({
  id,
  eyebrow,
  titleLead,
  titleAccent,
  text,
  cta,
  ctaHref,
  tone = 'light',
}: ResourcePathSectionProps) {
  const bg = tone === 'muted' ? 'bg-background-100' : 'bg-background-50';

  return (
    <section id={id} className={`${bg} px-5 py-20 md:px-10 md:py-28`}>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-6 font-heading text-[36px] font-normal leading-[1.04] tracking-[-0.03em] text-foreground-950 md:text-[58px]">
            {titleLead} <em className="italic">{titleAccent}</em>
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-foreground-600">{text}</p>

          <ul className="mt-10 flex flex-col">
            {suggestedTopics.map((topic, index) => (
              <li
                key={topic.title}
                className="group flex gap-5 border-t border-background-300 py-5 last:border-b"
              >
                <span className="mt-0.5 text-[11px] font-semibold tabular-nums tracking-[0.1em] text-foreground-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>
                  <h3 className="font-heading text-[19px] leading-snug text-foreground-950 transition-colors duration-300 group-hover:text-primary-600">
                    {topic.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-foreground-600">{topic.text}</p>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <CtaButton href={ctaHref}>{cta}</CtaButton>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={120}>
          <div className="lg:sticky lg:top-28">
            <Eyebrow>{lookingForCopy.eyebrow}</Eyebrow>
            <h3 className="mt-5 font-heading text-[30px] font-normal leading-tight tracking-[-0.02em] text-foreground-950 md:text-[38px]">
              {lookingForCopy.titleLead} <em className="italic">{lookingForCopy.titleAccent}</em>
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-foreground-600">{lookingForCopy.text}</p>
            <div className="mt-7">
              <ResourceListForm />
            </div>
            <a
              href={lookingForCopy.buttonHref}
              className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-primary-600 transition-colors duration-300 hover:text-primary-700"
            >
              {lookingForCopy.button}
              <i className="ri-arrow-right-line text-base" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}