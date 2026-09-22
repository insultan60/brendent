import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  tone?: 'dark' | 'light';
  index?: string;
  className?: string;
}

/**
 * Neutral editorial section label: an index number, a hairline rule and a
 * tracked uppercase caption. Deliberately avoids the brand orange so the
 * accent color stays reserved for buttons and CTAs only.
 */
export function Eyebrow({ children, tone = 'dark', index, className = '' }: EyebrowProps) {
  const palette = tone === 'light' ? 'text-background-200' : 'text-foreground-500';
  return (
    <p className={`flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${palette} ${className}`}>
      {index ? <span className="tabular-nums">{index}</span> : null}
      <span className="h-px w-8 bg-current opacity-40" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

interface ActionProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Primary action — the ONLY place the brand orange appears. */
export function CtaButton({ href, children, className = '' }: ActionProps) {
  return (
    <a
      href={href}
      className={`btn-shimmer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 ${className}`}
    >
      {children}
    </a>
  );
}

interface GhostButtonProps extends ActionProps {
  tone?: 'dark' | 'light';
}

/** Secondary / outline action — neutral ink, never the brand orange. */
export function GhostButton({ href, children, tone = 'dark', className = '' }: GhostButtonProps) {
  const palette =
    tone === 'light'
      ? 'border-background-50/35 text-background-50 hover:border-background-50/80 hover:bg-background-50/10'
      : 'border-foreground-300 text-foreground-900 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50';
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border px-7 py-4 text-[13px] font-semibold tracking-wide transition-colors duration-300 ${palette} ${className}`}
    >
      {children}
    </a>
  );
}