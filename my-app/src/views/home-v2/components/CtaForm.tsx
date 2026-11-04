'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, Check, Loader2 } from 'lucide-react';

/* Same Readdy form as the Get in Touch page, with the same field names, so
   these leads land in Brandon's inbox in the format he already receives. */
const SUBMIT_ADDR = 'https://readdy.ai/api/form/dalsvrs4la7l5tj2iqrg';

const INTERESTS = ['Buying', 'Selling', 'Renting', 'Investing', 'Something else'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-xl border border-background-300 bg-background-50 px-4 py-3.5 text-sm text-foreground-900 placeholder:text-foreground-400 outline-none transition-colors duration-300 focus:border-foreground-500';

/**
 * The closing "Ready to make your next move?" panel's form. It sits on the
 * dark photo, so it is a solid cream card rather than inputs on the image.
 */
export default function CtaForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [formError, setFormError] = useState('');

  const fail = (message: string) => {
    setStatus('error');
    setFormError(message);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: a real visitor never fills this field.
    if (String(data.get('website_alt') ?? '').trim()) {
      setStatus('success');
      return;
    }

    const firstName = String(data.get('first_name') ?? '').trim();
    const lastName = String(data.get('last_name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone_number') ?? '').trim();
    const message = String(data.get('comments') ?? '').trim();

    if (!firstName) return fail('Please add your first name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please check your email address.');
    if (!phone) return fail('Please add a phone number so Brandon can reach you.');

    // The interest goes at the top of the comments so it shows in the email
    // without adding a field the existing form does not have.
    const payload = new URLSearchParams({
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phone,
      comments: `Interested in: ${interest}${message ? `\n\n${message}` : ''}`,
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

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        fail(isSpam ? 'We could not send this request. Please check it and try again.' : serverMsg || 'Something went wrong. Please try again.');
      }
    } catch {
      fail('We could not reach the server. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className="flex flex-col items-center justify-center gap-4 rounded-[26px] bg-background-50 px-6 py-16 text-center shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] md:px-10"
        role="status"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <Check className="h-7 w-7" aria-hidden="true" />
        </span>
        <p className="font-heading text-[28px] leading-tight text-foreground-950">Thank you!</p>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-foreground-600">
          Your message is on its way. Brandon will reach out shortly to talk through your goals.
        </p>
      </div>
    );
  }

  return (
    <form
      id="cta-contact-form"
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[26px] bg-background-50 p-6 text-left shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] md:p-8"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-foreground-500">I&rsquo;m interested in</p>
      <div className="mt-3 flex flex-wrap gap-2" role="radiogroup" aria-label="I'm interested in">
        {INTERESTS.map((option) => {
          const active = option === interest;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setInterest(option)}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-[12.5px] font-semibold transition-colors duration-300 ${
                active
                  ? 'border-foreground-950 bg-foreground-950 text-background-50'
                  : 'border-background-300 text-foreground-700 hover:border-foreground-400'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Anti-spam honeypot, hidden by the stylesheet. */}
      <input
        type="text"
        name="website_alt"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="touch-hp"
      />

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label>
          <span className="sr-only">First name</span>
          <input name="first_name" required autoComplete="given-name" placeholder="First name *" className={fieldClass} />
        </label>
        <label>
          <span className="sr-only">Last name</span>
          <input name="last_name" autoComplete="family-name" placeholder="Last name" className={fieldClass} />
        </label>
        <label>
          <span className="sr-only">Email</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Email *" className={fieldClass} />
        </label>
        <label>
          <span className="sr-only">Phone</span>
          <input name="phone_number" type="tel" required autoComplete="tel" placeholder="Phone *" className={fieldClass} />
        </label>
        <label className="sm:col-span-2">
          <span className="sr-only">How can Brandon help?</span>
          <textarea
            name="comments"
            rows={3}
            maxLength={500}
            placeholder="How can Brandon help? (optional)"
            className={`${fieldClass} resize-none`}
          />
        </label>
      </div>

      {status === 'error' && formError ? (
        <p className="mt-4 flex items-start gap-2 text-[13px] font-medium text-primary-700" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{formError}</span>
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-shimmer mt-5 inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            Connect With Brandon
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>
      <p className="mt-4 text-center text-[12px] leading-relaxed text-foreground-500">
        Brandon replies personally, usually the same day. Your details are never shared.
      </p>
    </form>
  );
}
