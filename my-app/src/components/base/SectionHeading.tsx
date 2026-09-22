import type { ReactNode } from 'react';
import Reveal from '@/components/base/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  as = 'h2',
  className = '',
}: SectionHeadingProps) {
  const Heading = as;
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <Reveal className={`${isCenter ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {eyebrow ? (
        <p className={`eyebrow mb-5 text-[11px] md:text-xs ${isDark ? 'text-accent-400' : 'text-accent-700'}`}>
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={`font-heading font-normal leading-[1.06] tracking-[-0.015em] text-balance ${
          as === 'h1'
            ? 'text-[38px] md:text-[58px] lg:text-[70px]'
            : 'text-[30px] md:text-[42px] lg:text-[50px]'
        } ${isDark ? 'text-background-50' : 'text-foreground-950'}`}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-[15px] leading-relaxed md:text-[16.5px] ${isCenter ? 'mx-auto' : ''} ${
            isDark ? 'text-background-200' : 'text-foreground-600'
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}