'use client';

import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowLeft, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';

interface FormResponse {
  code?: string;
  message?: string;
  meta?: { message?: string; detail?: string };
}

interface AddressLeadFormProps {
  /** Readdy form endpoint the lead is posted to. */
  endpoint: string;
  id: string;
  addressLabel: string;
  addressPlaceholder: string;
  cta: string;
  /** Under the form, before it is sent. */
  note: string;
  successTitle: string;
  successText: string;
  /** 'dark' sits on a photo hero, 'light' on a page section. */
  tone?: 'dark' | 'light';
}

/*
 * Address-first lead form, shared by Home Valuation, Cash Offer, Sell Your
 * Home and the homepage "What's My Home Worth" box.
 *
 * It used to send the address alone, so Brandon received a property with no
 * way to reach its owner. The address is still the first step (one field is
 * easy to start); the second asks for a name and an email or phone, and both
 * go out together in one submission.
 */
export default function AddressLeadForm({
  endpoint,
  id,
  addressLabel,
  addressPlaceholder,
  cta,
  note,
  successTitle,
  successText,
  tone = 'dark',
}: AddressLeadFormProps) {
  const [step, setStep] = useState<'address' | 'contact'>('address');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');
  const dark = tone === 'dark';

  const fail = (message: string) => {
    setStatus('error');
    setFormError(message);
  };

  const next = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!address.trim()) return fail('Please enter the property address so we can get started.');
    setStatus('idle');
    setFormError('');
    setStep('contact');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;
    const data = new FormData(event.currentTarget);

    // Spam trap: a real visitor never fills this field.
    if (String(data.get('contact_alt') ?? '').trim()) {
      setStatus('success');
      return;
    }

    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const phone = String(data.get('phone') ?? '').trim();
    if (!name) return fail('Please add your name.');
    if (!email && !phone) return fail('Please add an email or phone number so Brandon can reach you.');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please check your email address.');

    setStatus('submitting');
    setFormError('');
    const payload = new URLSearchParams({ address: address.trim(), name });
    if (email) payload.append('email', email);
    if (phone) payload.append('phone', phone);

    try {
      const response = await fetch(endpoint, {
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
      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText || '';
      const isSpam = typeof serverMsg === 'string' && serverMsg.toLowerCase().includes('spam');

      if (response.ok && parsed?.code === 'OK' && !isSpam) {
        setStatus('success');
      } else {
        fail(isSpam ? 'We could not send this request. Please check it and try again.' : serverMsg || 'Something went wrong on our end. Please try again.');
      }
    } catch {
      fail('We could not reach the server. Please check your connection and try again.');
    }
  };

  const panel = dark
    ? 'border-background-50/15 bg-background-50/95 backdrop-blur-xl'
    : 'border-background-300 bg-background-100';
  const input =
    'w-full rounded-2xl border border-background-300 bg-background-50 px-4 py-3.5 text-sm text-foreground-900 outline-none placeholder:text-foreground-400 focus:border-foreground-400';
  const errorColor = dark ? 'text-primary-200' : 'text-primary-700';
  const noteColor = dark ? 'text-background-200/70' : 'text-foreground-500';

  if (status === 'success') {
    return (
      <div className={`flex max-w-2xl items-start gap-4 rounded-[22px] border p-6 ${panel}`} role="status">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="font-heading text-[20px] leading-tight text-foreground-950">{successTitle}</p>
          <p className="mt-2 max-w-md text-[14px] leading-relaxed text-foreground-600">{successText}</p>
          <a
            href="tel:+12029984593"
            className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-[13px] font-semibold text-primary-600 transition-colors duration-300 hover:text-primary-700"
          >
            Or call Brandon at 202-998-4593
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  const error =
    status === 'error' && formError ? (
      <p className={`mt-4 flex items-start gap-2 text-[13px] font-medium ${errorColor}`} role="alert">
        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{formError}</span>
      </p>
    ) : null;

  if (step === 'contact') {
    return (
      <div className="w-full">
        <form id={id} onSubmit={submit} noValidate className={`w-full max-w-2xl rounded-[22px] border p-5 md:p-6 ${panel}`}>
          <p className="flex items-center gap-2 text-[12.5px] text-foreground-600">
            <MapPin className="h-4 w-4 shrink-0 text-primary-500" aria-hidden="true" />
            <span className="truncate font-semibold text-foreground-900">{address}</span>
            <button
              type="button"
              onClick={() => setStep('address')}
              className="ml-auto inline-flex shrink-0 items-center gap-1 text-[12px] font-semibold text-foreground-500 underline-offset-4 hover:text-foreground-950 hover:underline"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              Change
            </button>
          </p>
          <p className="mt-4 text-[14px] font-semibold text-foreground-950">Where should Brandon send it?</p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className="sm:col-span-2">
              <span className="sr-only">Your name</span>
              <input name="name" autoComplete="name" placeholder="Your name" className={input} autoFocus />
            </label>
            <label>
              <span className="sr-only">Email</span>
              <input name="email" type="email" autoComplete="email" placeholder="Email" className={input} />
            </label>
            <label>
              <span className="sr-only">Phone</span>
              <input name="phone" type="tel" autoComplete="tel" placeholder="Phone" className={input} />
            </label>
          </div>
          <input
            type="text"
            name="contact_alt"
            className="valuation-hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="btn-shimmer mt-4 flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 disabled:opacity-70"
          >
            {status === 'submitting' ? 'Sending…' : 'Send to Brandon'}
          </button>
          {error}
        </form>
        <p className={`mt-4 max-w-md text-[12.5px] leading-relaxed ${noteColor}`}>
          Brandon replies personally. Your details are never shared.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form id={id} onSubmit={next} noValidate className="w-full max-w-2xl">
        <div
          className={`flex flex-col gap-2 rounded-[22px] border p-2.5 sm:flex-row sm:items-center sm:rounded-full sm:p-2 ${panel}`}
        >
          <label className="flex flex-1 items-center gap-3 rounded-2xl px-4 py-3 sm:rounded-full">
            <MapPin className="h-5 w-5 shrink-0 text-primary-500" aria-hidden="true" />
            <span className="sr-only">{addressLabel}</span>
            <input
              type="text"
              name="address"
              maxLength={120}
              autoComplete="street-address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              placeholder={addressPlaceholder}
              className="w-full bg-transparent text-sm text-foreground-800 placeholder:text-foreground-400 outline-none"
            />
          </label>
          <button
            type="submit"
            className="btn-shimmer flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl bg-primary-500 px-7 py-3.5 text-sm font-semibold text-background-50 transition-colors duration-300 hover:bg-primary-600 sm:rounded-full"
          >
            {cta}
          </button>
        </div>
        {error}
      </form>
      <p className={`mt-4 max-w-md text-[12.5px] leading-relaxed ${noteColor}`}>{note}</p>
    </div>
  );
}
