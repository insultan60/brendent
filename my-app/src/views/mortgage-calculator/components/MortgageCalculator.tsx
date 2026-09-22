'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, ChevronDown, RotateCcw } from 'lucide-react';
import {
  DownPaymentField,
  MoneyInput,
  PercentInput,
} from '@/views/mortgage-calculator/components/MortgageField';
import {
  mortgageDefaults,
  mortgageStates,
  mortgageTerms,
  mortgageWidget,
} from '@/mocks/mortgageData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

const usd = (value: number) => `$${Math.round(value).toLocaleString('en-US')}`;

interface Segment {
  label: string;
  value: number;
  tone: string;
}

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(mortgageDefaults.homePrice);
  const [downPayment, setDownPayment] = useState(
    Math.round((mortgageDefaults.homePrice * mortgageDefaults.downPaymentPercent) / 100),
  );
  const [termYears, setTermYears] = useState(mortgageDefaults.termYears);
  const [interestRate, setInterestRate] = useState(mortgageDefaults.interestRate);
  const [stateId, setStateId] = useState(mortgageDefaults.stateId);
  const [annualInsurance, setAnnualInsurance] = useState(mortgageDefaults.annualInsurance);
  const [monthlyHoa, setMonthlyHoa] = useState(mortgageDefaults.monthlyHoa);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const activeState = mortgageStates.find((s) => s.id === stateId) ?? mortgageStates[0];

  const result = useMemo(() => {
    const months = Math.max(termYears * 12, 1);
    const monthlyRate = interestRate / 100 / 12;
    const growth = Math.pow(1 + monthlyRate, months);
    const pmtFactor = monthlyRate <= 0 ? 1 / months : (monthlyRate * growth) / (growth - 1);

    const loanAmount = Math.max(homePrice - downPayment, 0);
    const principalInterest = loanAmount * pmtFactor;
    const propertyTax = (homePrice * (activeState.taxRate / 100)) / 12;
    const insurance = annualInsurance / 12;
    const other = insurance + monthlyHoa;
    const total = principalInterest + propertyTax + other;

    const downPct = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
    const piShare = total > 0 ? (principalInterest / total) * 100 : 0;

    return { loanAmount, principalInterest, propertyTax, insurance, other, total, downPct, piShare };
  }, [homePrice, downPayment, termYears, interestRate, annualInsurance, monthlyHoa, activeState.taxRate]);

  const segments: Segment[] = [
    { label: 'Principal & Interest', value: result.principalInterest, tone: 'bg-primary-500' },
    { label: 'Property tax', value: result.propertyTax, tone: 'bg-accent-500' },
    { label: 'Other', value: result.other, tone: 'bg-secondary-500' },
  ];

  const reset = () => {
    setHomePrice(mortgageDefaults.homePrice);
    setDownPayment(Math.round((mortgageDefaults.homePrice * mortgageDefaults.downPaymentPercent) / 100));
    setTermYears(mortgageDefaults.termYears);
    setInterestRate(mortgageDefaults.interestRate);
    setStateId(mortgageDefaults.stateId);
    setAnnualInsurance(mortgageDefaults.annualInsurance);
    setMonthlyHoa(mortgageDefaults.monthlyHoa);
    setShowAdvanced(false);
  };

  return (
    <section id="calculator" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <Eyebrow index="01">Run the numbers</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            {mortgageWidget.sectionTitle}
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            {mortgageWidget.sectionSub}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Inputs */}
          <div className="rounded-[26px] border border-background-300 bg-background-50 p-6 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-heading text-[22px] leading-none text-foreground-950">Your details</h3>
              <button
                type="button"
                onClick={reset}
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-background-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground-600 transition-colors duration-300 hover:border-foreground-950 hover:text-foreground-950"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-7">
              <MoneyInput
                label="Home price"
                value={homePrice}
                onChange={setHomePrice}
                tooltip="The purchase price of the home. This anchors the loan amount and your monthly principal and interest."
              />
              <DownPaymentField
                label="Down payment"
                homePrice={homePrice}
                amount={downPayment}
                onAmountChange={setDownPayment}
                tooltip="Enter a dollar amount or a percentage of the home price. Twenty percent avoids private mortgage insurance."
              />

              <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
                <div>
                  <label className="text-[12.5px] font-medium text-foreground-700">Loan term</label>
                  <div className="mt-3 flex gap-1.5 rounded-full border border-background-300 p-1">
                    {mortgageTerms.map((term) => (
                      <button
                        key={term}
                        type="button"
                        onClick={() => setTermYears(term)}
                        className={`flex-1 whitespace-nowrap rounded-full px-2 py-2 text-[12px] font-semibold transition-colors duration-300 ${
                          termYears === term
                            ? 'bg-foreground-950 text-background-50'
                            : 'text-foreground-600 hover:text-foreground-950'
                        }`}
                      >
                        {term} yr
                      </button>
                    ))}
                  </div>
                </div>

                <PercentInput
                  label="Interest rate"
                  value={interestRate}
                  onChange={setInterestRate}
                  tooltip="Your expected mortgage interest rate. Even a small change shifts your payment meaningfully."
                />
              </div>

              <div>
                <label className="text-[12.5px] font-medium text-foreground-700">State</label>
                <div className="relative mt-2">
                  <select
                    value={stateId}
                    onChange={(event) => setStateId(event.target.value)}
                    aria-label="State"
                    className="w-full appearance-none rounded-xl border border-background-300 bg-background-50 py-3 pl-3.5 pr-10 text-[14px] text-foreground-950 outline-none transition-colors duration-300 focus:border-foreground-950"
                  >
                    {mortgageStates.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-400"
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-2 text-[11.5px] text-foreground-400">
                  Applying an effective property tax rate of {activeState.taxRate.toFixed(2)}% for {activeState.name}.
                </p>
              </div>

              {/* Advanced */}
              <div className="rounded-xl border border-background-300">
                <button
                  type="button"
                  onClick={() => setShowAdvanced((prev) => !prev)}
                  aria-expanded={showAdvanced}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3.5 text-left"
                >
                  <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-foreground-700">
                    Advanced
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-foreground-500 transition-transform duration-300 ${
                      showAdvanced ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    showAdvanced ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-1 gap-5 border-t border-background-300 px-4 py-5 sm:grid-cols-2">
                      <MoneyInput
                        label="Homeowners insurance"
                        value={annualInsurance}
                        onChange={setAnnualInsurance}
                        tooltip="Your estimated annual homeowners insurance premium, divided into twelve monthly payments."
                      />
                      <MoneyInput
                        label="HOA / condo dues"
                        value={monthlyHoa}
                        onChange={setMonthlyHoa}
                        tooltip="Monthly association dues, common in condos and planned communities. Leave at zero if not applicable."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-[11.5px] leading-relaxed text-foreground-400">{mortgageWidget.bottomNote}</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[26px] bg-foreground-950 p-6 text-background-50 md:p-9">
              <Eyebrow tone="light">Your estimate</Eyebrow>
              <div className="mt-5 flex items-end gap-2">
                <p className="font-heading text-[46px] leading-none tracking-[-0.02em] text-background-50 md:text-[60px]">
                  {result.total > 0 ? usd(result.total) : '—'}
                </p>
                <span className="pb-1.5 text-[14px] text-background-200/70">/month</span>
              </div>
              <p className="mt-3 text-[13px] text-background-200/80">
                {termYears} Year Fixed, {interestRate}% Interest
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-background-50/15 pt-7">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Loan amount
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">
                    {usd(result.loanAmount)}
                  </p>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Down payment
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">
                    {result.downPct.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Monthly payment composition */}
              <div className="mt-8 border-t border-background-50/15 pt-7">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                  Monthly payment breakdown
                </p>
                <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-background-50/10">
                  {result.total > 0
                    ? segments.map((segment) => (
                        <span
                          key={segment.label}
                          className={segment.tone}
                          style={{ width: `${(segment.value / result.total) * 100}%` }}
                          aria-hidden="true"
                        />
                      ))
                    : null}
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {segments.map((segment) => {
                    const share = result.total > 0 ? (segment.value / result.total) * 100 : 0;
                    return (
                      <li key={segment.label} className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2.5 text-[13px] text-background-100">
                          <span className={`h-2.5 w-2.5 rounded-full ${segment.tone}`} aria-hidden="true" />
                          {segment.label}
                        </span>
                        <span className="whitespace-nowrap text-[13px] font-medium text-background-50">
                          {usd(segment.value)}
                          <span className="ml-2 text-background-200/60">{share.toFixed(0)}%</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="mt-8">
                <CtaButton href="#contact" className="w-full">
                  {mortgageWidget.button}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CtaButton>
              </div>

              <p className="mt-5 text-[11.5px] leading-relaxed text-background-200/70">{mortgageWidget.disclaimer}</p>
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-[26px] border border-background-300 bg-background-50 p-6">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-foreground-900">
                <BadgeCheck className="h-4 w-4 text-primary-600" aria-hidden="true" />
                Principal &amp; interest is {result.piShare.toFixed(0)}% of your payment
              </span>
              <p className="text-[13px] leading-relaxed text-foreground-600">
                Want a sharper figure? Let’s review your credit, down payment and lender options so your rate — and your
                monthly payment — are as strong as they can be.
              </p>
              <GhostButton href="#contact" className="mt-1 w-full sm:w-auto">
                Get pre-approved
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}