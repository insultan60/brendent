import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, footerColumns, socialLinks } from '@/mocks/homeData';

interface SiteFooterProps {
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
}

const legalLinks = ['Accessibility', 'Privacy Policy', 'Sitemap'];

/**
 * Closing ink band.
 *
 * The CTA above this sits in a rounded image card floating on the cream
 * canvas, so the page ends on a full-bleed dark slab — the tonal opposite of
 * everything above it. Four movements, separated by hairlines rather than
 * boxes: a display statement, the link matrix, the credentials row, and the
 * legal line. The brand orange stays out of it; the wordmark carries the
 * only colour, exactly as it does elsewhere in the system.
 */
export default function SiteFooter({ linkBase = '' }: SiteFooterProps) {
  const resolve = (href: string) => (href.startsWith('#') ? `${linkBase}${href}` : href);

  const linkClass =
    'group relative inline-block text-[14.5px] leading-snug text-background-200/70 transition-colors duration-300 hover:text-background-50';
  const linkRail = (
    <span
      className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-background-50/50 transition-transform duration-300 group-hover:scale-x-100"
      aria-hidden="true"
    />
  );
  const columnHeading =
    'text-[10px] font-semibold uppercase tracking-[0.26em] text-background-300/55';

  return (
    <footer className="relative overflow-hidden bg-foreground-950 text-background-100">
      {/* Texture and a single cold light source, kept very low contrast so the
          type stays the only thing that reads. */}
      <div className="v2-grain absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -left-52 -top-52 h-[420px] w-[420px] rounded-full bg-background-50/[0.04] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1420px] px-5 py-20 md:px-10 md:py-28">
        {/* 1 — Statement. */}
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-background-200/60">
              <span className="h-px w-8 bg-current opacity-50" aria-hidden="true" />
              <span>BW Metro Properties</span>
            </p>
            <p className="mt-8 max-w-[15ch] font-heading text-[34px] font-normal leading-[1.03] tracking-[-0.025em] text-background-50 md:max-w-[18ch] md:text-[54px]">
              Clearing the path forward across the DMV.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end lg:text-right">
            <img
              src={brand.logo}
              alt="BW Metro Properties logo"
              className="h-12 w-auto object-contain md:ml-auto md:h-14"
            />
            <p className="mt-7 max-w-sm text-[14.5px] leading-relaxed text-background-200/70 md:ml-auto">
              Brandon Wilson — a full-time real estate professional serving buyers, sellers and investors
              across Washington, D.C., Maryland and Northern Virginia.
            </p>
          </div>
        </div>

        {/* 2 — Link matrix. */}
        <div className="mt-16 border-t border-background-50/[0.12] pt-14 md:mt-20 md:pt-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className={columnHeading}>{column.title}</h4>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith('#') ? (
                        <a href={resolve(link.href)} className={linkClass}>
                          {link.label}
                          {linkRail}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                          {linkRail}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className={columnHeading}>Visit &amp; Contact</h4>
              <ul className="mt-6 flex flex-col gap-4 text-[14.5px] leading-snug text-background-200/70">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-[3px] h-4 w-4 shrink-0 text-background-300/50" aria-hidden="true" />
                  <span>{brand.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-[3px] h-4 w-4 shrink-0 text-background-300/50" aria-hidden="true" />
                  <span>Open daily 8:00am – 6:00pm · free to contact 24/7</span>
                </li>
                <li>
                  <a
                    href={brand.phoneHref}
                    className="flex items-start gap-3 transition-colors duration-300 hover:text-background-50"
                  >
                    <Phone className="mt-[3px] h-4 w-4 shrink-0 text-background-300/50" aria-hidden="true" />
                    <span>(202) 998-4593</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${brand.email}`}
                    className="flex items-start gap-3 break-all transition-colors duration-300 hover:text-background-50"
                  >
                    <Mail className="mt-[3px] h-4 w-4 shrink-0 text-background-300/50" aria-hidden="true" />
                    <span>{brand.email}</span>
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck
                    className="mt-[3px] h-4 w-4 shrink-0 text-background-300/50"
                    aria-hidden="true"
                  />
                  <span>{brand.licenses}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 — Credentials: where to follow, and who the brokerage is. */}
        <div className="mt-16 flex flex-col gap-10 border-t border-background-50/[0.12] pt-10 md:mt-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className={columnHeading}>Follow Along</p>
            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background-50/20 text-background-200/80 transition-colors duration-300 hover:border-background-50 hover:bg-background-50 hover:text-foreground-950"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:text-right">
            <p className={columnHeading}>Affiliated With</p>
            <img
              src={brand.psrLogo}
              alt="Pearson Smith Realty logo"
              className="mt-5 h-10 w-auto object-contain lg:ml-auto"
            />
          </div>
        </div>

        {/* 4 — Legal. */}
        <div className="mt-12 flex flex-col gap-4 border-t border-background-50/[0.12] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-background-300/55">
            © 2026 Unbound Solutions dba BW Metro Properties · Licensed in DC, VA &amp; MD
          </p>
          <ul className="flex flex-wrap items-center gap-x-7 gap-y-2">
            {legalLinks.map((item) => (
              <li key={item}>
                <a
                  href={resolve('#top')}
                  className="whitespace-nowrap text-xs text-background-300/55 transition-colors duration-300 hover:text-background-50"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
