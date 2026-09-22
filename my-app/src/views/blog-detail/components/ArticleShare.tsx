'use client';

import { useState } from 'react';
import { Check, Link2 } from 'lucide-react';
import { shareLinks } from '@/mocks/blogDetailData';

const ARTICLE_URL =
  'https://bwmetroproperties.com/your-step-by-step-guide-to-buying-a-home-in-the-dmv-2026-edition/';

export default function ArticleShare() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ARTICLE_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="mt-14 border-t border-background-200 pt-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-foreground-500">
          Share This Article
        </p>
        <div className="flex flex-wrap items-center gap-2.5">
          {shareLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="nofollow noopener noreferrer"
              aria-label={`Share on ${link.label}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
            >
              <i className={`${link.icon} text-[15px]`} aria-hidden="true" />
            </a>
          ))}
          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy article link"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-background-300 text-foreground-700 transition-colors duration-300 hover:border-foreground-950 hover:bg-foreground-950 hover:text-background-50"
          >
            {copied ? (
              <Check className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Link2 className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}