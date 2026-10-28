'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

/* The site's "Get in Touch" form, so property questions arrive in the same
   inbox with the same fields, and the message names the home. */
const ENDPOINT = 'https://readdy.ai/api/form/dalsvrs4la7l5tj2iqrg';

interface FormResponse {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
}

export default function InquiryForm({ subject, prompt }: { subject: string; prompt: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const fail = (message: string) => {
    setStatus('error');
    setError(message);
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;
    const data = new FormData(event.currentTarget);
    if (String(data.get('website_alt') ?? '').trim()) {
      setStatus('success');
      return;
    }
    const first = String(data.get('first_name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone_number') ?? '').trim();
    if (!first) return fail('Please add your name.');
    if (!email && !phone) return fail('Please add an email or phone number so Brandon can reach you.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please check your email address.');

    setStatus('submitting');
    setError('');
    const payload = new URLSearchParams();
    data.forEach((value, key) => {
      const v = String(value).trim();
      if (key !== 'website_alt' && v) payload.append(key, v);
    });
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: payload.toString(),
      });
      const raw = await response.text();
      let parsed: FormResponse | null = null;
      try {
        parsed = JSON.parse(raw) as FormResponse;
      } catch {
        parsed = null;
      }
      if (response.ok && parsed?.code === 'OK') setStatus('success');
      else fail(parsed?.meta?.message || parsed?.message || 'Something went wrong on our end. Please try again.');
    } catch {
      fail('We could not reach the server. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex items-start gap-3 rounded-2xl bg-background-100 p-5" role="status">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" aria-hidden="true" />
        <p className="text-[14px] leading-relaxed text-foreground-700">
          Thanks, your message is on its way. Brandon will get back to you shortly.
        </p>
      </div>
    );
  }

  const input =
    'w-full rounded-xl border border-background-300 bg-background-50 px-4 py-3 text-[14px] text-foreground-900 outline-none placeholder:text-foreground-400 focus:border-foreground-400';
  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-2.5">
      <div className="grid grid-cols-2 gap-2.5">
        <label>
          <span className="sr-only">First name</span>
          <input name="first_name" autoComplete="given-name" placeholder="First name" className={input} />
        </label>
        <label>
          <span className="sr-only">Last name</span>
          <input name="last_name" autoComplete="family-name" placeholder="Last name" className={input} />
        </label>
      </div>
      <label>
        <span className="sr-only">Email</span>
        <input name="email" type="email" autoComplete="email" placeholder="Email" className={input} />
      </label>
      <label>
        <span className="sr-only">Phone</span>
        <input name="phone_number" type="tel" autoComplete="tel" placeholder="Phone" className={input} />
      </label>
      <label>
        <span className="sr-only">Message</span>
        <textarea name="comments" rows={4} defaultValue={`${prompt}\n\n${subject}`} className={`${input} resize-none`} />
      </label>
      <input type="text" name="website_alt" className="touch-hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-shimmer mt-1 rounded-full bg-primary-500 px-6 py-3.5 text-[13px] font-semibold text-background-50 transition-colors hover:bg-primary-600 disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending…' : 'Send to Brandon'}
      </button>
      {status === 'error' && error ? (
        <p className="flex items-start gap-2 text-[13px] font-medium text-primary-700" role="alert">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </form>
  );
}
