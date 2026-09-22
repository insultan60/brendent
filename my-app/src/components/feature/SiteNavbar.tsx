'use client';

import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, navLinks, socialLinks } from '@/mocks/homeData';

export default function SiteNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="px-4 pt-4 md:px-6 md:pt-6">
        <nav
          className={`mx-auto flex max-w-[1200px] items-center justify-between gap-4 rounded-full border px-5 py-2.5 backdrop-blur-xl transition-all duration-500 md:px-7 md:py-3 ${
            scrolled
              ? 'border-background-300/80 bg-background-50/92 shadow-[0_10px_40px_-24px_rgba(20,16,12,0.45)]'
              : 'border-background-50/50 bg-background-50/80'
          }`}
        >
          <a href="#top" className="flex shrink-0 items-center" aria-label="BW Metro Properties home">
            <img
              src={brand.logo}
              alt="BW Metro Properties logo"
              className="h-8 w-auto md:h-9"
            />
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="whitespace-nowrap text-[13.5px] font-medium text-foreground-700 transition-colors duration-300 hover:text-primary-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 md:gap-4">
            <a
              href={brand.phoneHref}
              className="hidden items-center gap-2 whitespace-nowrap text-[13px] font-medium text-foreground-700 transition-colors duration-300 hover:text-primary-600 xl:flex"
            >
              <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
              {brand.phone}
            </a>
            <a
              href="#contact"
              className="hidden whitespace-nowrap rounded-full bg-primary-500 px-5 py-2.5 text-[13px] font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 md:inline-block"
            >
              Schedule a Consultation
            </a>
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-background-300 text-foreground-900 transition-colors duration-300 hover:border-primary-300 hover:text-primary-600 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {menuOpen ? (
          <div className="mx-auto mt-3 max-w-[1200px] rounded-3xl border border-background-300/80 bg-background-50 p-5 lg:hidden">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-xl px-3 py-2.5 text-sm font-medium text-foreground-800 transition-colors hover:bg-background-100 hover:text-primary-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={brand.phoneHref}
                className="flex items-center justify-center gap-2 rounded-full border border-background-300 px-4 py-3 text-sm font-semibold text-foreground-900"
              >
                <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
                {brand.phone}
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-full bg-primary-500 px-4 py-3 text-center text-sm font-semibold text-background-50"
              >
                Schedule a Consultation
              </a>
            </div>
            <div className="mt-5 flex items-center justify-center gap-3 border-t border-background-200 pt-5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-background-300 text-foreground-700"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}