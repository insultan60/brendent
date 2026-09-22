'use client';

import { useState, type FormEvent } from 'react';
import { Check, Mail } from 'lucide-react';
import Reveal from '@/components/base/Reveal';
import { blogNewsletter } from '@/mocks/blogData';
import { Eyebrow } from '@/views/home-v2/components/shared';

const SUBMIT_ADDR = 'https://readdy.ai/api/form/dalej08uus3pn58u99u0';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function BlogNewsletter() {
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const honeypot = String(data.get('website_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      form.reset();
      return;
    }
    data.delete('website_alt');

    const payload = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === 'string') {
        payload.append(key, value);
      }
    });

    setFormError('');
    setStatus('submitting');

    try {
      const response = await fetch(SUBMIT_ADDR, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      const responseText = await response.text();
      let parsed: { code?: string; message?: string; meta?: { message?: string; detail?: string } } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }
      const message =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;
      const isSpam = typeof message === 'string' && message.toLowerCase().includes('spam');

      if (!response.ok || parsed?.code !== 'OK' || isSpam) {
        setStatus('error');
        setFormError(
          isSpam
            ? 'Your submission could not be processed. Please try again.'
            : message || 'Something went wrong. Please try again.',
        );
        return;
      }

      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setFormError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="newsletter" className="bg-background-50 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1280px]">
        <Reveal>
          <div className="relative overflow-hidden rounded-[30px] bg-foreground-950 px-6 py-16 md:px-16 md:py-24">
            <div className="v2-grain absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-500/20 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div>
                <Eyebrow tone="light" index="02">
                  {blogNewsletter.eyebrow}
                </Eyebrow>
                <h2 className="mt-6 font-heading text-[40px] font-normal leading-[1.02] tracking-[-0.025em] text-background-50 md:text-[64px]">
                  <em className="italic">{blogNewsletter.title}</em>
                </h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-background-200 md:text-[16.5px]">
                  {blogNewsletter.text}
                </p>
              </div>

              <div>
                {status === 'success' ? (
                  <div className="blog-fade flex items-start gap-4 rounded-[22px] border border-background-50/15 bg-background-50/5 p-7">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-500 text-background-50">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-heading text-[22px] text-background-50">You&rsquo;re subscribed.</p>
                      <p className="mt-2 text-[13.5px] leading-relaxed text-background-200">
                        Thanks for signing up — the latest DMV market insights are on the way to your inbox.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form
                    id="blog-newsletter-form"
                    data-readdy-form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                    noValidate
                  >
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="relative flex-1">
                        <span className="pointer-events-none absolute left-5 top-1/2 flex -translate-y-1/2 items-center text-foreground-400">
                          <Mail className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <label htmlFor="blog-email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="blog-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          placeholder="Email *"
                          className="w-full rounded-full border border-background-300/40 bg-background-50/95 py-4 pl-12 pr-5 text-sm text-foreground-900 outline-none transition-colors placeholder:text-foreground-400 focus:border-primary-400"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="btn-shimmer inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-8 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:opacity-70"
                      >
                        {status === 'submitting' ? 'Subscribing…' : blogNewsletter.button}
                      </button>
                    </div>

                    <label className="flex cursor-pointer items-start gap-3 text-[11.5px] leading-relaxed text-background-200/85">
                      <input
                        type="checkbox"
                        name="consent"
                        value="yes"
                        required
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-background-300/50 accent-[oklch(var(--primary-500))]"
                      />
                      <span>
                        {blogNewsletter.disclaimer}{' '}
                        <span className="text-background-50 underline decoration-background-50/40 underline-offset-2">
                          Privacy Policy
                        </span>
                      </span>
                    </label>

                    {/* Anti-spam honeypot — hidden via stylesheet only, never inline. */}
                    <input
                      type="text"
                      name="website_alt"
                      className="blog-hp"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                      readOnly
                    />

                    {status === 'error' ? (
                      <p role="alert" className="text-[12.5px] text-primary-300">
                        {formError}
                      </p>
                    ) : null}
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}