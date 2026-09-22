'use client';

import { useState } from 'react';
import { ArrowRight, BadgeCheck, MapPin, RotateCcw } from 'lucide-react';
import { MoneyInput, PercentDollarField, parseMoney } from '@/views/home-sale-calculator/components/SaleField';
import { homeSaleDefaults, saleBottomNote, saleDisclaimer } from '@/mocks/homeSaleData';
import { CtaButton, Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

const usd = (value: number) => `$${Math.round(value).toLocaleString('en-US')}`;

interface Segment {
  label: string;
  value: number;
  tone: string;
}

export default function NetProceedsCalculator() {
  const [address, setAddress] = useState('');
  const [salePrice, setSalePrice] = useState(homeSaleDefaults.salePrice);
  const [mortgagePayoff, setMortgagePayoff] = useState(homeSaleDefaults.mortgagePayoff);
  const [repairsPercent, setRepairsPercent] = useState(homeSaleDefaults.repairsPercent);
  const [commissionPercent, setCommissionPercent] = useState(homeSaleDefaults.commissionPercent);
  const [transferTaxPercent, setTransferTaxPercent] = useState(homeSaleDefaults.transferTaxPercent);

  const repairs = Math.round((salePrice * repairsPercent) / 100);
  const commission = Math.round((salePrice * commissionPercent) / 100);
  const transferTax = Math.round((salePrice * transferTaxPercent) / 100);

  const totalCosts = mortgagePayoff + repairs + commission + transferTax;
  const netProceeds = salePrice - totalCosts;
  const proceedsShare = salePrice > 0 ? (netProceeds / salePrice) * 100 : 0;

  const segments: Segment[] = [
    { label: 'Agent commission', value: commission, tone: 'bg-primary-500' },
    { label: 'Transfer & recordation tax', value: transferTax, tone: 'bg-accent-500' },
    { label: 'Repairs / improvements / staging', value: repairs, tone: 'bg-secondary-500' },
    { label: 'Mortgage payoff & liens', value: mortgagePayoff, tone: 'bg-foreground-400' },
  ];

  const reset = () => {
    setAddress('');
    setSalePrice(homeSaleDefaults.salePrice);
    setMortgagePayoff(homeSaleDefaults.mortgagePayoff);
    setRepairsPercent(homeSaleDefaults.repairsPercent);
    setCommissionPercent(homeSaleDefaults.commissionPercent);
    setTransferTaxPercent(homeSaleDefaults.transferTaxPercent);
  };

  return (
    <section id="calculator" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <Eyebrow index="01">Run the numbers</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            See what you’ll <em className="italic">walk away with</em>
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Adjust any field and your net updates instantly. Nothing is submitted — every figure is calculated right
            here as you type.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Inputs */}
          <div className="rounded-[26px] border border-background-300 bg-background-50 p-6 md:p-9">
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-heading text-[22px] leading-none text-foreground-950">Your sale details</h3>
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
              <div>
                <label className="text-[12.5px] font-medium text-foreground-700">Where is your home located?</label>
                <div className="mt-2 flex items-center rounded-xl border border-background-300 bg-background-50 px-3.5 transition-colors duration-300 focus-within:border-foreground-950">
                  <MapPin className="h-4 w-4 shrink-0 text-foreground-400" aria-hidden="true" />
                  <input
                    type="text"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                    placeholder="Enter your address"
                    aria-label="Where is your home located?"
                    className="w-full bg-transparent py-3 pl-2.5 text-[14px] text-foreground-950 outline-none placeholder:text-foreground-400"
                  />
                </div>
              </div>

              <MoneyInput
                label="Home Sale Price"
                value={salePrice}
                onChange={setSalePrice}
                tooltip="Your listed or estimated sale price. This figure anchors the entire estimate."
              />
              <MoneyInput
                label="Mortgage Payoff Amount"
                value={mortgagePayoff}
                onChange={setMortgagePayoff}
                placeholder="0"
                tooltip="The remaining balance on your mortgage plus any home equity line, lien or HOA payoff."
              />
              <PercentDollarField
                label="Repairs / Improvements / Staging"
                percent={repairsPercent}
                price={salePrice}
                onPercentChange={setRepairsPercent}
                tooltip="Pre-listing prep you plan to invest. Enter it as a percentage of the sale price or as a flat dollar amount."
              />
              <PercentDollarField
                label="Commission"
                percent={commissionPercent}
                price={salePrice}
                onPercentChange={setCommissionPercent}
                tooltip="Total listing and buyer-agent compensation, usually expressed as a percentage of the sale price."
              />
              <PercentDollarField
                label="Transfer Tax"
                percent={transferTaxPercent}
                price={salePrice}
                onPercentChange={setTransferTaxPercent}
                maxPercent={3}
                tooltip="State and local transfer and recordation tax on the deed. Rates vary by jurisdiction across the DMV."
              />

              <p className="text-[11.5px] leading-relaxed text-foreground-400">{saleBottomNote}</p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[26px] bg-foreground-950 p-6 text-background-50 md:p-9">
              <Eyebrow tone="light">Your estimate</Eyebrow>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/70">
                Estimated net when selling your home
              </p>
              <p className="mt-2 font-heading text-[46px] leading-none tracking-[-0.02em] text-background-50 md:text-[60px]">
                {salePrice > 0 ? usd(netProceeds) : '—'}
              </p>

              {salePrice > 0 && netProceeds < 0 ? (
                <p className="mt-4 rounded-xl border border-primary-400/40 bg-primary-500/10 px-4 py-3 text-[13px] leading-relaxed text-background-100">
                  Your outstanding payoff and costs exceed the sale price at these figures. Adjust your price, payoff
                  or prep budget to see a positive net.
                </p>
              ) : null}

              <div className="mt-8 grid grid-cols-2 gap-5 border-t border-background-50/15 pt-7">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Home Sale Price
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">{usd(salePrice)}</p>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Total costs to sell
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">{usd(totalCosts)}</p>
                </div>
              </div>

              {/* Cost composition */}
              <div className="mt-8 border-t border-background-50/15 pt-7">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                  Where the money goes
                </p>
                <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-background-50/10">
                  {totalCosts > 0
                    ? segments.map((segment) => (
                        <span
                          key={segment.label}
                          className={segment.tone}
                          style={{ width: `${(segment.value / totalCosts) * 100}%` }}
                          aria-hidden="true"
                        />
                      ))
                    : null}
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {segments.map((segment) => {
                    const share = totalCosts > 0 ? (segment.value / totalCosts) * 100 : 0;
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
                  Get Estimate
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </CtaButton>
              </div>

              <p className="mt-5 text-[11.5px] leading-relaxed text-background-200/70">{saleDisclaimer}</p>
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-[26px] border border-background-300 bg-background-50 p-6">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-foreground-900">
                <BadgeCheck className="h-4 w-4 text-primary-600" aria-hidden="true" />
                You keep {salePrice > 0 ? proceedsShare.toFixed(0) : '—'}% of your sale price
              </span>
              <p className="text-[13px] leading-relaxed text-foreground-600">
                Want a precise, itemized net sheet built from your actual payoff and title quote? Let’s prepare one so
                there are no surprises at the closing table.
              </p>
              <GhostButton href="#contact" className="mt-1 w-full sm:w-auto">
                Get a personalized net sheet
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}