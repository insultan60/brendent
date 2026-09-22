'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, Phone } from 'lucide-react';
import { brand, navLinks } from '@/mocks/homeData';
import SidebarDrawer from '@/views/home-v2/components/SidebarDrawer';

interface NavbarV2Props {
  /** Prefix applied to hash links so they resolve correctly from any route. */
  linkBase?: string;
  /** Where the logo points. */
  homeHref?: string;
}

export default function NavbarV2({ linkBase = '', homeHref = '#top' }: NavbarV2Props) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const light = !scrolled;
  const logoIsHash = homeHref.startsWith('#');

  const linkClass = `group relative whitespace-nowrap text-[13px] font-medium tracking-wide transition-colors duration-300 ${
    light ? 'text-background-100 hover:text-background-50' : 'text-foreground-700 hover:text-foreground-950'
  }`;
  const triggerClass = `relative inline-flex items-center gap-1.5 whitespace-nowrap text-[13px] font-medium tracking-wide transition-colors duration-300 ${
    light ? 'text-background-100 hover:text-background-50' : 'text-foreground-700 hover:text-foreground-950'
  }`;
  const underlineClass = `absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
    light ? 'bg-background-50' : 'bg-foreground-950'
  }`;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? 'border-b border-background-300/70 bg-background-50/95 backdrop-blur-xl'
            : 'border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1500px] items-center justify-between gap-6 px-5 md:h-[88px] md:px-10">
          {logoIsHash ? (
            <a href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              <img
                src={brand.logo}
                alt="BW Metro Properties logo"
                className={`h-8 w-auto transition-all duration-500 md:h-9 ${light ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </a>
          ) : (
            <Link href={homeHref} className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
              <img
                src={brand.logo}
                alt="BW Metro Properties logo"
                className={`h-8 w-auto transition-all duration-500 md:h-9 ${light ? 'brightness-0 invert' : 'brightness-0'}`}
              />
            </Link>
          )}

          <nav className="hidden items-center gap-9 lg:flex">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="group relative">
                  <button type="button" className={triggerClass} aria-haspopup="true">
                    {link.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180"
                      aria-hidden="true"
                    />
                  </button>
                  <span className={underlineClass} aria-hidden="true" />
                  <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 pt-4 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="overflow-hidden rounded-xl border border-background-50/10 bg-foreground-950/95 backdrop-blur-xl">
                      {link.children.map((child) => {
                        const childClass =
                          'block border-b border-background-50/10 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-background-100 transition-colors duration-300 last:border-b-0 hover:bg-background-50/10 hover:text-background-50';
                        return child.href.startsWith('#') ? (
                          <a key={child.label} href={`${linkBase}${child.href}`} className={childClass}>
                            {child.label}
                          </a>
                        ) : (
                          <Link key={child.label} href={child.href} className={childClass}>
                            {child.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : link.href.startsWith('#') ? (
                <a key={link.label} href={`${linkBase}${link.href}`} className={linkClass}>
                  {link.label}
                  <span className={underlineClass} aria-hidden="true" />
                </a>
              ) : (
                <Link key={link.label} href={link.href} className={linkClass}>
                  {link.label}
                  <span className={underlineClass} aria-hidden="true" />
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={brand.phoneHref}
              className={`hidden items-center gap-2 whitespace-nowrap text-[12.5px] font-medium transition-colors duration-300 xl:flex ${
                light ? 'text-background-100 hover:text-background-50' : 'text-foreground-600 hover:text-foreground-950'
              }`}
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {brand.phone}
            </a>
            <a
              href="#contact"
              className="hidden whitespace-nowrap rounded-full bg-primary-500 px-6 py-3 text-[12.5px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 md:inline-block"
            >
              Schedule a Consultation
            </a>

            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={drawerOpen}
              className={`group flex h-11 items-center gap-2.5 whitespace-nowrap rounded-full border px-4 transition-colors duration-300 ${
                light
                  ? 'border-background-50/40 text-background-50 hover:border-background-50/80 hover:bg-background-50/10'
                  : 'border-background-300 text-foreground-900 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50'
              }`}
            >
              <Menu
                className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.24em] sm:inline">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>

      <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} linkBase={linkBase} />
    </>
  );
}