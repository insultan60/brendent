'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Phone, Search } from 'lucide-react';
import { recentPosts, tableOfContents } from '@/mocks/blogDetailData';
import { useActiveSection } from '@/hooks/useActiveSection';

const TOC_IDS = tableOfContents.map((item) => item.id);

export default function ArticleSidebar() {
  const [query, setQuery] = useState('');
  const activeId = useActiveSection(TOC_IDS);

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recentPosts;
    return recentPosts.filter((post) => post.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-[116px] lg:self-start">
      <nav
        aria-label="On this page"
        className="rounded-[22px] border border-background-200 bg-background-50 p-6"
      >
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
          On This Page
        </p>
        <ul className="mt-3 flex flex-col">
          {tableOfContents.map((item) => {
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`block border-l-2 py-2.5 pl-4 text-[13.5px] leading-snug transition-colors duration-300 ${
                    isActive
                      ? 'border-primary-500 font-medium text-foreground-950'
                      : 'border-background-200 text-foreground-500 hover:border-foreground-400 hover:text-foreground-900'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="rounded-[22px] border border-background-200 bg-background-50 p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
          Recent Posts
        </p>

        <div className="relative mt-4">
          <span className="pointer-events-none absolute left-4 top-1/2 flex -translate-y-1/2 text-foreground-400">
            <Search className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <label htmlFor="article-search" className="sr-only">
            Search posts
          </label>
          <input
            id="article-search"
            type="search"
            name="s"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="w-full rounded-full border border-background-300 bg-background-100 py-3 pl-10 pr-4 text-[13px] text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400"
          />
        </div>

        <ul className="mt-4 flex flex-col divide-y divide-background-200">
          {filteredPosts.map((post) =>
            post.href.startsWith('/') ? (
              <li key={post.title}>
                <Link
                  href={post.href}
                  className="block py-3.5 text-[13.5px] leading-snug text-foreground-700 transition-colors duration-300 hover:text-primary-600"
                >
                  {post.title}
                </Link>
              </li>
            ) : (
              <li key={post.title}>
                <a
                  href={post.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="block py-3.5 text-[13.5px] leading-snug text-foreground-700 transition-colors duration-300 hover:text-primary-600"
                >
                  {post.title}
                </a>
              </li>
            ),
          )}
          {filteredPosts.length === 0 ? (
            <li className="py-3.5 text-[13px] text-foreground-500">
              No posts match your search.
            </li>
          ) : null}
        </ul>
      </div>

      <div className="rounded-[22px] border border-background-200 bg-foreground-950 p-6">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-background-200/70">
          Let&rsquo;s Talk
        </p>
        <p className="mt-4 font-heading text-[22px] font-normal leading-snug text-background-50">
          Wondering what you qualify for?
        </p>
        <p className="mt-3 text-[13px] leading-relaxed text-background-200">
          Let&rsquo;s find out together — no pressure, no jargon.
        </p>
        <a
          href="#contact"
          className="btn-shimmer mt-5 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-3.5 text-[12.5px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600"
        >
          Connect With Brandon
        </a>
        <a
          href="tel:+12029984593"
          className="mt-3 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-background-50/30 px-6 py-3.5 text-[12.5px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:border-background-50/70 hover:bg-background-50/10"
        >
          <Phone className="h-3.5 w-3.5" aria-hidden="true" />
          (202) 998-4593
        </a>
      </div>
    </aside>
  );
}