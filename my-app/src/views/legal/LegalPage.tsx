import type { ReactNode } from 'react';
import NavbarV2 from '@/views/home-v2/components/NavbarV2';
import FooterV2 from '@/views/home-v2/components/FooterV2';

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
}

/** Plain text page (Privacy Policy, Accessibility) under a slim dark band, so
 *  the transparent masthead stays legible. */
export default function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background-100">
      <NavbarV2 linkBase="/" homeHref="/" />
      <main>
        <section id="top" className="bg-foreground-950 px-5 pb-12 pt-32 md:px-10 md:pb-14 md:pt-40">
          <div className="mx-auto max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-background-200">{eyebrow}</p>
            <h1 className="mt-5 font-heading text-[36px] font-normal leading-[1.04] tracking-[-0.02em] text-background-50 md:text-[52px]">
              {title}
            </h1>
            <p className="mt-4 text-[13px] text-background-200/70">Last updated {updated}</p>
          </div>
        </section>
        <section className="px-5 py-16 md:px-10 md:py-20">
          <div className="legal-copy mx-auto max-w-3xl text-[15.5px] leading-relaxed text-foreground-700 [&_a]:font-medium [&_a]:text-primary-600 [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mt-12 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:leading-tight [&_h2]:text-foreground-950 [&_li]:mt-2 [&_p]:mt-4 [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6">
            {children}
          </div>
        </section>
      </main>
      <FooterV2 linkBase="/" />
    </div>
  );
}
