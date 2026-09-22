'use client';

import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { resourceFormDisclaimer } from '@/mocks/resourcesData';

const SUBMIT_ADDR = 'https://readdy.ai/api/form/daluh7th599pccsgtup0';
const COMMENT_LIMIT = 500;

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-xl border border-background-300 bg-background-100 px-4 py-3.5 text-sm text-foreground-900 placeholder:text-foreground-400 outline-none transition-colors duration-300 focus:border-foreground-500';

export default function ResourceContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');
  const [commentLength, setCommentLength] = useState(0);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setCommentLength(event.currentTarget.value.length);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently succeed for bots before any request is sent.
    const honeypot = String(data.get('phone_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      setFormError('');
      form.reset();
      setCommentLength(0);
      return;
    }
    data.delete('phone_alt');

    const payload = new URLSearchParams();
    data.forEach((value, key) => {
      if (typeof value === 'string') payload.append(key, value);
    });

    setStatus('submitting');
    setFormError('');

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

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
      const isSpam = /spam/i.test(serverMsg);
      const ok = response.ok && parsed?.code === 'OK' && !isSpam;

      if (!ok) {
        setStatus('error');
        setFormError(
          isSpam ? 'Your submission could not be processed. Please try again.' : serverMsg || 'Something went wrong. Please try again.',
        );
        return;
      }

      setStatus('success');
      setFormError('');
      form.reset();
      setCommentLength(0);
    } catch {
      setStatus('error');
      setFormError('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="blog-fade flex h-full flex-col items-center justify-center gap-4 rounded-[26px] border border-background-300 bg-background-50 px-6 py-16 text-center md:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="font-heading text-[26px] leading-tight text-foreground-950">Thank you!</p>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-foreground-600">
          Your message is on its way. Brandon will follow up shortly to talk through your investment goals.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[26px] border border-background-300 bg-background-50 p-6 md:p-8">
      <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-3.5" noValidate>
        <input
          type="text"
          name="phone_alt"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          readOnly
          className="res-hp"
        />

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
          <input id="res-invest-first" type="text" name="first_name" required placeholder="First Name *" className={fieldClass} />
          <input id="res-invest-last" type="text" name="last_name" required placeholder="Last Name *" className={fieldClass} />
        </div>
        <input id="res-invest-email" type="email" name="email" required autoComplete="email" placeholder="Email *" className={fieldClass} />

        <div>
          <textarea
            id="res-invest-comments"
            name="comments"
            required
            rows={5}
            maxLength={COMMENT_LIMIT}
            onChange={handleCommentChange}
            placeholder="Comments, Questions? *"
            className={`${fieldClass} resize-none`}
          />
          <p className="mt-2 text-right text-[11px] tabular-nums text-foreground-400">
            {commentLength}/{COMMENT_LIMIT}
          </p>
        </div>

        <label className="mt-1 flex items-start gap-3 text-[12px] leading-relaxed text-foreground-500">
          <input
            type="checkbox"
            name="disclaimer_accepted"
            value="yes"
            required
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-background-400 accent-primary-500"
          />
          <span>
            {resourceFormDisclaimer}{' '}
            <a
              href="https://bwmetroproperties.com/privacy-policy/"
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="text-foreground-800 underline decoration-foreground-400 underline-offset-2 transition-colors hover:text-primary-600"
            >
              Privacy Policy
            </a>
          </span>
        </label>

        {status === 'error' ? (
          <p role="alert" className="rounded-xl border border-primary-300 bg-primary-50 px-4 py-3 text-[13px] text-primary-800">
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-shimmer mt-1 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-6 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Get My Custom List'
          )}
        </button>
      </form>
    </div>
  );
}