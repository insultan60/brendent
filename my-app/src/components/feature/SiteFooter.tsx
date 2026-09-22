import { Clock, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import Icon from '@/components/base/Icon';
import { brand, footerColumns, socialLinks } from '@/mocks/homeData';

export default function SiteFooter() {
  return (
    <footer className="border-t border-background-200 bg-background-50">
      <div className="mx-auto max-w-shell px-5 py-16 md:px-6 md:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center justify-center rounded-2xl bg-foreground-950 px-5 py-3.5">
              <img
                src={brand.logo}
                alt="BW Metro Properties logo"
                className="h-11 w-auto object-contain"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground-600">
              Brandon Wilson — a full-time real estate professional serving buyers, sellers and investors across
              Washington, D.C., Maryland and Northern Virginia.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-primary-300 hover:bg-primary-50 hover:text-primary-600"
                >
                  <Icon name={social.icon} className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-3 text-[10.5px] text-accent-700">Affiliated With</p>
              <div className="inline-flex items-center justify-center rounded-2xl bg-foreground-950 px-5 py-3.5">
                <img
                  src={brand.psrLogo}
                  alt="Pearson Smith Realty logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="eyebrow mb-4 text-[10.5px] text-accent-700">{column.title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="block break-words text-sm text-foreground-600 transition-colors duration-300 hover:text-primary-600"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-4 text-[10.5px] text-accent-700">Visit &amp; Contact</h4>
            <ul className="flex flex-col gap-3 text-sm text-foreground-600">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                <span>{brand.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                <span>Open Daily 8:00am – 6:00pm · free to contact 24/7</span>
              </li>
              <li>
                <a href={brand.phoneHref} className="flex items-start gap-2.5 transition-colors hover:text-primary-600">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                  <span>(202) 998-4593</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="flex items-start gap-2.5 break-all transition-colors hover:text-primary-600">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                  <span>{brand.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
                <span>{brand.licenses}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-background-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-foreground-500">
            © 2026 Unbound Solutions dba BW Metro Properties · Licensed in DC, VA &amp; MD
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {['Accessibility', 'Privacy Policy', 'Sitemap'].map((item) => (
              <li key={item}>
                <a
                  href="#top"
                  className="whitespace-nowrap text-xs text-foreground-500 transition-colors duration-300 hover:text-primary-600"
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