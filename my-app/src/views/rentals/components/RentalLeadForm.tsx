'use client';

import { useState, type FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';
import { rentalsForm } from '@/mocks/rentalsData';

interface RentalLeadFormProps {
  /** Unique id for this rendered form instance. */
  formId: string;
}

const LOOKING_TO = [
  'Buy a condo',
  'Rent a condo/apartment',
  'Sell a condo',
  'Rent out my condo',
  'Explore investment options',
];

const TIMELINES = ['0–3 months', '3–6 months', '6–12 months', 'Just researching'];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const fieldClass =
  'w-full rounded-xl border border-background-300 bg-background-100 px-4 py-3.5 text-sm text-foreground-900 placeholder:text-foreground-400 outline-none transition-colors duration-300 focus:border-foreground-500';

export default function RentalLeadForm({ formId }: RentalLeadFormProps) {
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: silently succeed for bots before any request is sent.
    const honeypot = String(data.get('contact_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      setFormError('');
      form.reset();
      return;
    }

    data.delete('contact_alt');

    setStatus('submitting');
    setFormError('');

    try {
      const response = await fetch(rentalsForm.submitAddr, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();
      let parsed: { code?: string; meta?: { message?: string; detail?: string }; message?: string } | null = null;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
      const isSpam = /spam/i.test(serverMsg);
      const ok = response.ok && parsed?.code === 'OK' && !isSpam;

      if (!ok) {
        setStatus('error');
        setFormError(serverMsg || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setFormError('');
      form.reset();
    } catch {
      setStatus('error');
      setFormError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="rounded-[26px] border border-background-300 bg-background-50 p-6 md:p-8">
      {status === 'success' ? (
        <div className="flex flex-col items-center justify-center gap-4 py-14 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-700">
            <Check className="h-7 w-7" aria-hidden="true" />
          </span>
          <p className="font-heading text-[26px] leading-tight text-foreground-950">Thank you!</p>
          <p className="max-w-sm text-[14.5px] leading-relaxed text-foreground-600">
            Your request is in. Brandon will send you a custom list of condos and rentals that fit your budget,
            timeline, and lifestyle.
          </p>
        </div>
      ) : (
        <form id={formId} data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <input
            type="text"
            name="contact_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            className="rentals-hp"
          />

          <input type="text" name="first_name" required placeholder="First Name *" className={fieldClass} />
          <input type="text" name="last_name" required placeholder="Last Name *" className={fieldClass} />
          <input type="tel" name="phone" placeholder="Phone" className={fieldClass} />

          <select name="looking_to" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Are you looking to?
            </option>
            {LOOKING_TO.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <input type="text" name="price_range" placeholder="Price Range" className={fieldClass} />
          <input type="text" name="preferred_locations" placeholder="Preferred locations" className={fieldClass} />

          <select name="timeline" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Timeline
            </option>
            {TIMELINES.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <label className="mt-1 flex items-start gap-3 text-[12px] leading-relaxed text-foreground-500">
            <input
              type="checkbox"
              name="disclaimer_accepted"
              value="yes"
              required
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-background-400 accent-primary-500"
            />
            <span>
              I agree to be contacted by BW Metro Properties via call, email, and text for real estate services. To opt
              out, you can reply &lsquo;stop&rsquo; at any time or reply &lsquo;help&rsquo; for assistance. Message and
              data rates may apply.
            </span>
          </label>

          {status === 'error' ? (
            <p className="rounded-xl border border-primary-300 bg-primary-50 px-4 py-3 text-[13px] text-primary-800">
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
      )}
    </div>
  );
}