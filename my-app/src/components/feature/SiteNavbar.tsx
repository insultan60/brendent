'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Mail, Phone } from 'lucide-react';
import { brand, navLinks } from '@/mocks/homeData';
import SidebarDrawer from '@/views/home-v2/components/SidebarDrawer';

interface SiteNavbarProps {
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
  /** Where the logo points. */
  homeHref?: string;
}

/**
 * Site masthead.
 *
 * Three stacked bands that behave as one object:
 *   1. a utility rail carrying the licensing line and direct contact details,
 *      which folds away the moment the page starts to move,
 *   2. the main bar — wordmark, centred navigation, actions,
 *   3. a hairline that doubles as a reading-progress indicator.
 *
 * Over a hero the whole thing is transparent and reversed out in white; once
 * scrolled it settles onto the cream canvas with a hairline and a soft shadow.
 */
export default function SiteNavbar({ linkBase = '', homeHref = '#top' }: SiteNavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const travel = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 80);
      setProgress(travel > 0 ? Math.min(y / travel, 1) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // The dropdown is driven by state rather than :hover alone so it can be
  // opened from the keyboard and dismissed with Escape or an outside click.
  const closeMenu = useCallback(() => setOpenMenu(null), []);

  useEffect(() => {
    if (!openMenu) return undefined;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    const onPointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) closeMenu();
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [openMenu, closeMenu]);

  const light = !scrolled;
  const logoIsHash = homeHref.startsWith('#');
  const resolve = (href: string) => (href.startsWith('#') ? `${linkBase}${href}` : href);

  const isCurrent = (href: string) => !href.startsWith('#') && pathname === href;
  const isGroupCurrent = (children?: { href: string }[]) =>
    Boolean(children?.some((child) => isCurrent(child.href)));

  const itemClass = (active: boolean) =>
    `group relative inline-flex items-center gap-1.5 whitespace-nowrap py-1 text-[13px] font-medium tracking-wide transition-colors duration-300 ${
      light
        ? active
          ? 'text-background-50'
          : 'text-background-100/85 hover:text-background-50'
        : active
          ? 'text-foreground-950'
          : 'text-foreground-600 hover:text-foreground-950'
    }`;

  // Hairline under each item: parked at zero width, drawn left-to-right on
  // hover, and held open for the route you are currently on.
  const railClass = (active: boolean) =>
    `absolute -bottom-0.5 left-0 h-px w-full origin-left transition-transform duration-300 group-hover:scale-x-100 ${
      active ? 'scale-x-100' : 'scale-x-0'
    } ${light ? 'bg-background-50' : 'bg-foreground-950'}`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500 ${
          scrolled
            ? 'bg-background-50/95 shadow-[0_12px_40px_-32px_rgba(20,16,12,0.7)] backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        {/* 1 — Utility rail. Folds to nothing on scroll so the bar tightens. */}
        <div
          aria-hidden={scrolled}
          className={`hidden overflow-hidden border-b transition-all duration-500 lg:block ${
            scrolled
              ? 'h-0 border-transparent opacity-0'
              : `h-[38px] opacity-100 ${light ? 'border-background-50/15' : 'border-background-300/70'}`
          }`}
        >
          <div
            className={`mx-auto flex h-[38px] max-w-[1500px] items-center justify-between px-5 text-[10.5px] font-semibold uppercase tracking-[0.24em] md:px-10 ${
              light ? 'text-background-100/70' : 'text-foreground-500'
            }`}
          >
            <p className="flex items-center gap-3">
              <span>Licensed in DC · VA · MD</span>
              <span className="h-px w-6 bg-current opacity-40" aria-hidden="true" />
              <span className="normal-case tracking-[0.12em]">Open daily 8:00am – 6:00pm</span>
            </p>
            <div className="flex items-center gap-7">
              <a
                href={`mailto:${brand.email}`}
                className="flex items-center gap-2 normal-case tracking-[0.12em] transition-colors duration-300 hover:text-background-50"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {brand.email}
              </a>
              <a
                href={brand.phoneHref}
                className="flex items-center gap-2 normal-case tracking-[0.12em] transition-colors duration-300 hover:text-background-50"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {brand.phone}
              </a>
            </div>
          </div>
        </div>

        {/* 2 — Main bar. */}
        <div
          className={`mx-auto flex max-w-[1500px] items-center justify-between gap-6 px-5 transition-all duration-500 md:px-10 ${
            scrolled ? 'h-[68px] md:h-[76px]' : 'h-[72px] md:h-[84px]'
          }`}
        >
          {logoIsHash ? (
            <a href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              <img
                src={brand.logo}
                alt="BW Metro Properties logo"
                className={`w-auto transition-all duration-500 ${
                  scrolled ? 'h-7 md:h-8' : 'h-8 md:h-9'
                } ${light ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </a>
          ) : (
            <Link href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              <img
                src={brand.logo}
                alt="BW Metro Properties logo"
                className={`w-auto transition-all duration-500 ${
                  scrolled ? 'h-7 md:h-8' : 'h-8 md:h-9'
                } ${light ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </Link>
          )}

          <nav ref={navRef} className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {navLinks.map((link) => {
              if (link.children) {
                const open = openMenu === link.label;
                const active = isGroupCurrent(link.children);
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenMenu(link.label)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={open}
                      onClick={() => setOpenMenu(open ? null : link.label)}
                      className={itemClass(active || open)}
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                      <span className={railClass(active || open)} aria-hidden="true" />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full z-50 w-[268px] -translate-x-1/2 pt-5 transition-all duration-300 ${
                        open
                          ? 'pointer-events-auto translate-y-0 opacity-100'
                          : 'pointer-events-none translate-y-1 opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-background-50/10 bg-foreground-950/95 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={closeMenu}
                            aria-current={isCurrent(child.href) ? 'page' : undefined}
                            className={`group/item flex items-center justify-between gap-3 border-b border-background-50/10 px-5 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 last:border-b-0 hover:bg-background-50/10 ${
                              isCurrent(child.href)
                                ? 'bg-background-50/10 text-background-50'
                                : 'text-background-100/80 hover:text-background-50'
                            }`}
                          >
                            {child.label}
                            <span
                              className="h-px w-4 shrink-0 bg-current opacity-30 transition-all duration-300 group-hover/item:w-6 group-hover/item:opacity-80"
                              aria-hidden="true"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Leaving via a sibling link counts as an outside click that the
              // document listener cannot see, since it lands inside the nav.
              const active = isCurrent(link.href);
              return link.href.startsWith('#') ? (
                <a
                  key={link.label}
                  href={resolve(link.href)}
                  onClick={closeMenu}
                  className={itemClass(active)}
                >
                  {link.label}
                  <span className={railClass(active)} aria-hidden="true" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? 'page' : undefined}
                  className={itemClass(active)}
                >
                  {link.label}
                  <span className={railClass(active)} aria-hidden="true" />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 md:gap-3.5">
            {/* Phone repeats in the bar only once the utility rail has folded. */}
            <a
              href={brand.phoneHref}
              className={`hidden items-center gap-2 whitespace-nowrap text-[12.5px] font-medium transition-all duration-500 xl:flex ${
                scrolled
                  ? 'text-foreground-600 opacity-100 hover:text-foreground-950'
                  : 'pointer-events-none w-0 overflow-hidden opacity-0'
              }`}
            >
              <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {brand.phone}
            </a>

            {/* Every route renders CtaV2, which owns #contact, so this stays a
                same-page anchor rather than being prefixed with linkBase. */}
            <a
              href="#contact"
              className="btn-shimmer hidden whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 md:inline-block"
            >
              Schedule a Consultation
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className={`group flex h-11 items-center gap-3 whitespace-nowrap rounded-full border px-4 transition-colors duration-300 ${
                light
                  ? 'border-background-50/35 text-background-50 hover:border-background-50/80 hover:bg-background-50/10'
                  : 'border-background-300 text-foreground-900 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50'
              }`}
            >
              {/* Three rules of uneven length that re-shuffle on hover. */}
              <span className="flex h-[11px] w-[18px] flex-col justify-between" aria-hidden="true">
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-3/4" />
                <span className="h-px w-3/4 bg-current transition-all duration-300 group-hover:w-full" />
                <span className="h-px w-full bg-current transition-all duration-300 group-hover:w-1/2" />
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] sm:inline">
                Menu
              </span>
            </button>
          </div>
        </div>

        {/* 3 — Reading progress. Appears only once the bar has settled. */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px transition-opacity duration-500 ${
            scrolled ? 'bg-background-300/70 opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        >
          <div
            className="h-full origin-left bg-gradient-to-r from-primary-500 to-accent-500"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} linkBase={linkBase} />
    </>
  );
}
