'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, BadgeCheck, RotateCcw } from 'lucide-react';
import CalcSlider from '@/views/affordability-calculator/components/CalcSlider';
import { defaultInputs, dmvRegions, loanTerms } from '@/mocks/calcData';
import { Eyebrow, GhostButton } from '@/views/home-v2/components/shared';

const usd = (value: number) => `$${Math.round(value).toLocaleString('en-US')}`;

interface Segment {
  label: string;
  value: number;
  tone: string;
}

export default function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(defaultInputs.annualIncome);
  const [monthlyDebts, setMonthlyDebts] = useState(defaultInputs.monthlyDebts);
  const [downPayment, setDownPayment] = useState(defaultInputs.downPayment);
  const [interestRate, setInterestRate] = useState(defaultInputs.interestRate);
  const [termYears, setTermYears] = useState(defaultInputs.termYears);
  const [propertyTaxRate, setPropertyTaxRate] = useState(defaultInputs.propertyTaxRate);
  const [annualInsurance, setAnnualInsurance] = useState(defaultInputs.annualInsurance);
  const [monthlyHoa, setMonthlyHoa] = useState(defaultInputs.monthlyHoa);
  const [dti, setDti] = useState(defaultInputs.dti);
  const [regionId, setRegionId] = useState('arlington');

  const result = useMemo(() => {
    const monthlyIncome = annualIncome / 12;
    const monthlyRate = interestRate / 100 / 12;
    const months = Math.max(termYears * 12, 1);
    const growth = Math.pow(1 + monthlyRate, months);
    const pmtFactor =
      monthlyRate <= 0 ? 1 / months : (monthlyRate * growth) / (growth - 1);

    const maxHousing = monthlyIncome * (dti / 100) - monthlyDebts;
    const insuranceMonthly = annualInsurance / 12;
    const taxFactor = propertyTaxRate / 100 / 12;
    const denom = pmtFactor + taxFactor;
    const numerator = maxHousing - insuranceMonthly - monthlyHoa + downPayment * pmtFactor;

    let homePrice = denom > 0 ? numerator / denom : 0;
    homePrice = Math.max(homePrice, 0);

    const loanAmount = Math.max(homePrice - downPayment, 0);
    const principalInterest = loanAmount * pmtFactor;
    const propertyTax = homePrice * taxFactor;
    const totalMonthly = principalInterest + propertyTax + insuranceMonthly + monthlyHoa;

    const downPct = homePrice > 0 ? (downPayment / homePrice) * 100 : 0;
    const housingShare = monthlyIncome > 0 ? (totalMonthly / monthlyIncome) * 100 : 0;
    const effectiveDti =
      monthlyIncome > 0 ? ((totalMonthly + monthlyDebts) / monthlyIncome) * 100 : 0;

    return {
      homePrice,
      loanAmount,
      principalInterest,
      propertyTax,
      insuranceMonthly,
      totalMonthly,
      downPct,
      housingShare,
      effectiveDti,
      affordable: maxHousing > 0,
    };
  }, [
    annualIncome,
    monthlyDebts,
    downPayment,
    interestRate,
    termYears,
    propertyTaxRate,
    annualInsurance,
    monthlyHoa,
    dti,
  ]);

  const segments: Segment[] = [
    { label: 'Principal & Interest', value: result.principalInterest, tone: 'bg-primary-500' },
    { label: 'Property Taxes', value: result.propertyTax, tone: 'bg-accent-500' },
    { label: 'Home Insurance', value: result.insuranceMonthly, tone: 'bg-secondary-500' },
    { label: 'HOA / Condo Dues', value: monthlyHoa, tone: 'bg-foreground-400' },
  ];

  const handleRegion = (id: string, rate: number) => {
    setRegionId(id);
    setPropertyTaxRate(rate);
  };

  const reset = () => {
    setAnnualIncome(defaultInputs.annualIncome);
    setMonthlyDebts(defaultInputs.monthlyDebts);
    setDownPayment(defaultInputs.downPayment);
    setInterestRate(defaultInputs.interestRate);
    setTermYears(defaultInputs.termYears);
    setPropertyTaxRate(defaultInputs.propertyTaxRate);
    setAnnualInsurance(defaultInputs.annualInsurance);
    setMonthlyHoa(defaultInputs.monthlyHoa);
    setDti(defaultInputs.dti);
    setRegionId('arlington');
  };

  return (
    <section id="calculator" className="bg-background-100 px-5 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-2xl">
          <Eyebrow index="01">Run the numbers</Eyebrow>
          <h2 className="mt-6 font-heading text-[32px] font-normal leading-[1.05] tracking-[-0.02em] text-foreground-950 md:text-[48px]">
            See your target price <em className="italic">in real time</em>
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-foreground-600 md:text-[16.5px]">
            Move any control and the estimate updates instantly. Every figure below is calculated on the spot — no
            submitting required.
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

            <div className="mt-8 flex flex-col gap-8">
              <CalcSlider
                label="Annual household income"
                value={annualIncome}
                min={40000}
                max={600000}
                step={5000}
                display={usd(annualIncome)}
                onChange={setAnnualIncome}
                hint="Before taxes, all earners combined"
              />
              <CalcSlider
                label="Monthly debt payments"
                value={monthlyDebts}
                min={0}
                max={5000}
                step={50}
                display={usd(monthlyDebts)}
                onChange={setMonthlyDebts}
                hint="Cars, student loans, minimum card payments"
              />
              <CalcSlider
                label="Down payment"
                value={downPayment}
                min={0}
                max={600000}
                step={5000}
                display={usd(downPayment)}
                onChange={setDownPayment}
                hint={`About ${result.downPct.toFixed(0)}% of the estimated price`}
              />
              <CalcSlider
                label="Interest rate"
                value={interestRate}
                min={2}
                max={10}
                step={0.125}
                display={`${interestRate.toFixed(3)}%`}
                onChange={setInterestRate}
                hint="Your expected mortgage rate"
              />
              <CalcSlider
                label="Debt-to-income target"
                value={dti}
                min={25}
                max={45}
                step={1}
                display={`${dti}%`}
                onChange={setDti}
                hint="Share of gross income toward housing + debts"
              />
              <CalcSlider
                label="Homeowners insurance"
                value={annualInsurance}
                min={600}
                max={6000}
                step={100}
                display={`${usd(annualInsurance)} / yr`}
                onChange={setAnnualInsurance}
              />
              <CalcSlider
                label="Monthly HOA / condo dues"
                value={monthlyHoa}
                min={0}
                max={1200}
                step={5}
                display={`${usd(monthlyHoa)} / mo`}
                onChange={setMonthlyHoa}
              />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-[12.5px] font-medium text-foreground-700">Loan term</p>
                  <div className="mt-3 flex gap-1.5 rounded-full border border-background-300 p-1">
                    {loanTerms.map((term) => (
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

                <div>
                  <p className="text-[12.5px] font-medium text-foreground-700">Property tax region</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {dmvRegions.map((region) => (
                      <button
                        key={region.id}
                        type="button"
                        onClick={() => handleRegion(region.id, region.taxRate)}
                        className={`whitespace-nowrap rounded-full px-3.5 py-2 text-[11.5px] font-medium transition-colors duration-300 ${
                          regionId === region.id
                            ? 'bg-foreground-950 text-background-50'
                            : 'border border-background-300 text-foreground-600 hover:border-foreground-950 hover:text-foreground-950'
                        }`}
                      >
                        {region.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-[11.5px] leading-relaxed text-foreground-400">
                Applying an effective property tax rate of {propertyTaxRate.toFixed(2)}% for{' '}
                {dmvRegions.find((r) => r.id === regionId)?.name}. Estimates are for guidance only.
              </p>
            </div>
          </div>

          {/* Results */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-[26px] bg-foreground-950 p-6 text-background-50 md:p-9">
              <Eyebrow tone="light">Your estimate</Eyebrow>
              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-background-200/70">
                Home price you can afford
              </p>
              <p className="mt-2 font-heading text-[46px] leading-none tracking-[-0.02em] text-background-50 md:text-[60px]">
                {result.affordable ? usd(result.homePrice) : '—'}
              </p>

              {!result.affordable ? (
                <p className="mt-4 rounded-xl border border-primary-400/40 bg-primary-500/10 px-4 py-3 text-[13px] leading-relaxed text-background-100">
                  Your existing monthly debts currently exceed the housing budget at this income and ratio. Try
                  lowering your debts or raising your target DTI.
                </p>
              ) : null}

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
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Est. monthly payment
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">
                    {result.affordable ? usd(result.totalMonthly) : '—'}
                  </p>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                    Effective DTI
                  </p>
                  <p className="mt-2 font-heading text-[22px] leading-none text-background-50">
                    {result.effectiveDti.toFixed(0)}%
                  </p>
                </div>
              </div>

              {/* Monthly payment composition */}
              <div className="mt-8 border-t border-background-50/15 pt-7">
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-background-200/70">
                  Monthly payment breakdown
                </p>
                <div className="mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-background-50/10">
                  {result.totalMonthly > 0
                    ? segments.map((segment) => (
                        <span
                          key={segment.label}
                          className={segment.tone}
                          style={{ width: `${(segment.value / result.totalMonthly) * 100}%` }}
                          aria-hidden="true"
                        />
                      ))
                    : null}
                </div>
                <ul className="mt-5 flex flex-col gap-3">
                  {segments.map((segment) => {
                    const share =
                      result.totalMonthly > 0 ? (segment.value / result.totalMonthly) * 100 : 0;
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
            </div>

            <div className="mt-4 flex flex-col gap-3 rounded-[26px] border border-background-300 bg-background-50 p-6">
              <span className="inline-flex items-center gap-2 text-[12px] font-semibold text-foreground-900">
                <BadgeCheck className="h-4 w-4 text-primary-600" aria-hidden="true" />
                Housing is {result.affordable ? result.housingShare.toFixed(0) : '—'}% of your gross income
              </span>
              <p className="text-[13px] leading-relaxed text-foreground-600">
                Want to push this number higher? Let’s review your debts, down payment and the neighborhoods that
                stretch your budget furthest.
              </p>
              <GhostButton href="#contact" className="mt-1 w-full sm:w-auto">
                Get a personalized plan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </GhostButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}