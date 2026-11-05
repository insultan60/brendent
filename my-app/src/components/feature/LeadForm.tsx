'use client';

import { useEffect, useState, type FormEvent } from 'react';
import { Check, Loader2 } from 'lucide-react';

/**
 * The consultation form, posting to /api/lead (Follow Up Boss + email).
 *
 * `variant` adds the questions Brandon asked for on each page:
 *   general - contact pages
 *   buyer   - pre-approval, target area, already working with a Realtor
 *   seller  - property address (required) and when they plan to move
 *
 * Also sends the page URL and any UTM tags (hidden). UTMs are remembered for
 * the visit, so a visitor who lands from a campaign and fills the form two
 * pages later is still credited to it.
 */

type Variant = 'general' | 'buyer' | 'seller';
type Status = 'idle' | 'submitting' | 'success' | 'error';

const INTERESTS = ['Buying', 'Selling', 'Buying and selling', 'Investing', 'Renting', 'Just exploring'];
const TIMEFRAMES = ['0–3 months', '3–6 months', '6–12 months', '12+ months', 'Not sure yet'];
const PRE_APPROVED = ['Yes', 'Not yet', 'Paying cash'];
const AREAS = ['DC', 'MD', 'VA', 'Not sure'];
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const UTM_STORE = 'bw_utm';

const field =
  'w-full rounded-xl border border-background-300 bg-background-100 px-4 py-3.5 text-sm text-foreground-900 placeholder:text-foreground-400 outline-none transition-colors duration-300 focus:border-foreground-500';
const labelText = 'mb-1.5 block text-[12px] font-semibold text-foreground-700';

function rememberUtms() {
  try {
    const params = new URLSearchParams(window.location.search);
    const found = UTM_KEYS.filter((key) => params.get(key));
    if (found.length) {
      sessionStorage.setItem(UTM_STORE, JSON.stringify(Object.fromEntries(found.map((key) => [key, params.get(key)]))));
    }
  } catch {}
}

function storedUtms(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORE) ?? '{}');
  } catch {
    return {};
  }
}

function Select({ name, label, options, required, defaultValue = '' }: {
  name: string;
  label: string;
  options: string[];
  required?: boolean;
  defaultValue?: string;
}) {
  return (
    <div>
      <label htmlFor={`lead-${name}`} className={labelText}>
        {label}
        {required ? ' *' : ''}
      </label>
      <select id={`lead-${name}`} name={name} required={required} defaultValue={defaultValue} className={`${field} pr-3`}>
        <option value="" disabled={required}>
          Select…
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function LeadForm({
  variant = 'general',
  form,
  eyebrow = 'Send a message',
  title = 'Request a consultation',
  text = 'Share a few details and Brandon will get back to you personally.',
  submitLabel = 'Request My Consultation',
}: {
  variant?: Variant;
  /** Which form this is in FUB and the email; defaults to the variant. */
  form?: string;
  eyebrow?: string;
  title?: string;
  text?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  useEffect(rememberUtms, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const element = event.currentTarget;
    if (!element.reportValidity()) return;

    const data = new FormData(element);
    data.set('form', form ?? variant);
    data.set('page_url', window.location.href);
    data.set('page_title', document.title);
    for (const [key, value] of Object.entries(storedUtms())) {
      if (!data.get(key)) data.set(key, value);
    }

    setStatus('submitting');
    setError('');
    try {
      const response = await fetch('/api/lead', { method: 'POST', body: data });
      const parsed = (await response.json().catch(() => null)) as { code?: string; message?: string } | null;
      if (!response.ok || parsed?.code !== 'OK') {
        setStatus('error');
        setError(parsed?.message || 'Something went wrong. Please try again.');
        return;
      }
      setStatus('success');
      element.reset();
    } catch {
      setStatus('error');
      setError('We could not reach the server. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 rounded-[28px] border border-background-300 bg-background-50 px-6 py-20 text-center md:px-12" role="status">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <Check className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="font-heading text-[30px] leading-tight text-foreground-950">Thank you!</p>
        <p className="max-w-sm text-[14.5px] leading-relaxed text-foreground-600">
          Your request is on its way. Brandon will reach out shortly to talk through your goals.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[28px] border border-background-300 bg-background-50 p-6 md:p-10">
      <p className="eyebrow text-[11px] text-foreground-500">{eyebrow}</p>
      <h2 className="mt-4 font-heading text-[28px] font-normal leading-tight tracking-[-0.02em] text-foreground-950 md:text-[34px]">
        {title}
      </h2>
      <p className="mt-3 max-w-md text-[14.5px] leading-relaxed text-foreground-600">{text}</p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4" noValidate>
        {/* Anti-spam honeypot, hidden by the stylesheet. */}
        <input type="text" name="website_alt" tabIndex={-1} autoComplete="off" aria-hidden="true" className="touch-hp" />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="lead-first" className={labelText}>First name *</label>
            <input id="lead-first" name="first_name" required autoComplete="given-name" className={field} />
          </div>
          <div>
            <label htmlFor="lead-last" className={labelText}>Last name *</label>
            <input id="lead-last" name="last_name" required autoComplete="family-name" className={field} />
          </div>
          <div>
            <label htmlFor="lead-email" className={labelText}>Email *</label>
            <input id="lead-email" type="email" name="email" required autoComplete="email" className={field} />
          </div>
          <div>
            <label htmlFor="lead-phone" className={labelText}>Phone *</label>
            <input id="lead-phone" type="tel" name="phone" required autoComplete="tel" className={field} />
          </div>
        </div>

        {variant === 'seller' ? (
          <div>
            <label htmlFor="lead-address" className={labelText}>Property address *</label>
            <input
              id="lead-address"
              name="property_address"
              required
              autoComplete="street-address"
              placeholder="Street, city, state"
              className={field}
            />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Select
            name="interest"
            label="I'm interested in…"
            options={INTERESTS}
            defaultValue={variant === 'buyer' ? 'Buying' : variant === 'seller' ? 'Selling' : ''}
          />
          <Select
            name={variant === 'seller' ? 'moving_timeframe' : 'timeframe'}
            label={variant === 'seller' ? 'When are you thinking of moving?' : 'Timeframe'}
            options={TIMEFRAMES}
          />
          {variant === 'buyer' ? (
            <>
              <Select name="pre_approved" label="Pre-approved?" options={PRE_APPROVED} />
              <Select name="target_area" label="Target area" options={AREAS} />
              <Select name="working_with_realtor" label="Working with a Realtor?" options={['No', 'Yes']} />
            </>
          ) : null}
        </div>

        <div>
          <label htmlFor="lead-message" className={labelText}>Message</label>
          <textarea id="lead-message" name="message" rows={4} maxLength={1000} className={`${field} resize-none`} />
        </div>

        {/* Optional and unchecked by default: FUB's carrier (A2P 10DLC)
            registration requires text consent never to be a condition. */}
        <label className="mt-1 flex cursor-pointer items-start gap-3 text-[12px] leading-relaxed text-foreground-500">
          <input
            type="checkbox"
            name="sms_consent"
            value="yes"
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-background-400 accent-primary-500"
          />
          <span>
            Yes, I agree to receive text messages from Unbound Solutions dba BW Metro Properties about my inquiry
            and real estate services. Consent is not a condition of any purchase. Message frequency varies. Message
            and data rates may apply. Reply STOP to opt out or HELP for help. See our{' '}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-800 underline decoration-foreground-400 underline-offset-2 transition-colors hover:text-primary-600"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>

        {status === 'error' ? (
          <p role="alert" className="rounded-xl border border-primary-300 bg-primary-50 px-4 py-3 text-[13px] text-primary-800">
            {error}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="btn-shimmer mt-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-9 py-4 text-[13px] font-semibold tracking-wide text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            submitLabel
          )}
        </button>
      </form>
    </div>
  );
}
