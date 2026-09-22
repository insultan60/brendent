'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { valuationHero } from '@/mocks/valuationData';

const FORM_ENDPOINT = 'https://readdy.ai/api/form/daklkvkov550s8tcob1g';

interface FormResponse {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
}

/** Source "Home Valuation" lead form — captures the home address. */
export default function ValuationLeadForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Spam trap — a real visitor never fills this field.
    const honeypot = String(data.get('contact_alt') ?? '').trim();
    if (honeypot) {
      setStatus('success');
      return;
    }

    if (!String(data.get('address') ?? '').trim()) {
      setStatus('error');
      setFormError('Please enter your home address so we can get started.');
      return;
    }

    setStatus('submitting');
    setFormError('');

    const payload = new URLSearchParams();
    data.forEach((value, key) => {
      if (key === 'contact_alt') return;
      const text = String(value).trim();
      if (text) payload.append(key, text);
    });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });

      const responseText = await response.text();
      let parsed: FormResponse | null = null;
      try {
        parsed = JSON.parse(responseText) as FormResponse;
      } catch {
        parsed = null;
      }

      const serverMsg =
        parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
      const isSpam = typeof serverMsg === 'string' && serverMsg.toLowerCase().includes('spam');

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setFormError(
          isSpam
            ? 'We could not submit this address. Please check it and try again.'
            : serverMsg || 'Something went wrong on our end. Please try again.',
        );
      }
    } catch {
      setStatus('error');
      setFormError('We could not reach the server. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex max-w-2xl items-start gap-4 rounded-[22px] border border-background-50/15 bg-background-50/95 p-6 backdrop-blur-xl">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-[20px] leading-tight text-foreground-950">
            Thanks &mdash; we&rsquo;ve got your address.
          </p>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-foreground-600">
            Brandon will follow up with an accurate value range and a plan for your home. Prefer to talk it
            through right now?
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-primary-600 transition-colors duration-300 hover:text-primary-700"
          >
            Talk it through with Brandon
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        id="home-valuation-form"
        data-readdy-form
        onSubmit={handleSubmit}
        noValidate
        className="w-full max-w-2xl"
      >
        <div className="flex flex-col gap-2 rounded-[22px] border border-background-50/15 bg-background-50/95 p-2.5 backdrop-blur-xl sm:flex-row sm:items-center sm:rounded-full sm:p-2">
          <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full">
            <MapPin className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
            <span className="sr-only">{valuationHero.addressLabel}</span>
            <input
              type="text"
              name="address"
              maxLength={120}
              autoComplete="one-time-code"
              placeholder={valuationHero.addressPlaceholder}
              className="w-full bg-transparent text-sm text-foreground-800 placeholder:text-foreground-400 outline-none"
            />
          </label>

          <input
            type="text"
            name="contact_alt"
            className="valuation-hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
          />

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-shimmer flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-500 px-7 py-3.5 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:opacity-70 sm:rounded-full"
          >
            {status === 'submitting' ? 'Sending\u2026' : valuationHero.cta}
          </button>
        </div>

        {status === 'error' && formError ? (
          <p className="mt-4 flex items-start gap-2 text-[13px] font-medium text-primary-200">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{formError}</span>
          </p>
        ) : null}
      </form>

      <p className="mt-4 max-w-md text-[12.5px] leading-relaxed text-background-200/70">
        No obligation &mdash; get an accurate value before you decide to list.
      </p>
    </div>
  );
}