export const mortgageHero = {
  eyebrow: 'Calculate your',
  title: 'Mortgage',
  text: 'Our calculator is your virtual ally, allowing you to fine-tune variables and visualize the impact they have on your mortgage.',
  image:
    'https://readdy.ai/api/search-image?query=Warm%20brick%20colonial%20home%20exterior%20at%20golden%20hour%20with%20manicured%20landscaping%20and%20a%20welcoming%20front%20porch%2C%20soft%20natural%20light%20across%20clean%20architectural%20lines%2C%20refined%20editorial%20real%20estate%20photography%20with%20gentle%20shadows%20and%20a%20harmonious%20upscale%20neighborhood%20composition&width=1600&height=900&seq=homesale-hero-2026-x1&orientation=landscape',
};

export const mortgageStatStrip = [
  { value: '30 yr', label: 'Most common term' },
  { value: '20%', label: 'Down to avoid PMI' },
  { value: 'PITI', label: 'What builds a payment' },
  { value: '3', label: 'States + DC we serve' },
];

/** Verbatim copy from the reference calculator widget. */
export const mortgageWidget = {
  sectionTitle: 'Mortgage Calculator',
  sectionSub: 'Enter your details below to estimate your monthly mortgage payment with taxes, fees and insurance.',
  button: 'Get Started',
  disclaimer:
    'The mortgage calculator is for estimation purposes only, and its results may not represent and reflect the actual rates and costs offered. Calculators are based on your inputs and might not consider criteria such as market rates, location, and loan specifics. Please note that these results are simply an estimate. Major costs, such as taxes, insurance, and fees, are subject to change and may differ based on a variety of factors.',
  bottomNote: 'All calculations are estimates and provided for informational purposes only. Actual amounts may vary.',
};

export interface MortgageDefaults {
  homePrice: number;
  downPaymentPercent: number;
  termYears: number;
  interestRate: number;
  annualInsurance: number;
  monthlyHoa: number;
  stateId: string;
}

export const mortgageDefaults: MortgageDefaults = {
  homePrice: 750000,
  downPaymentPercent: 20,
  termYears: 30,
  interestRate: 6.5,
  annualInsurance: 1800,
  monthlyHoa: 75,
  stateId: 'virginia',
};

export const mortgageTerms = [30, 20, 15, 10];

/** Representative effective residential property-tax rates by state. */
export const mortgageStates = [
  { id: 'virginia', name: 'Virginia', taxRate: 0.82, note: 'Northern Virginia markets' },
  { id: 'maryland', name: 'Maryland', taxRate: 1.05, note: 'Montgomery & Prince George’s' },
  { id: 'dc', name: 'District of Columbia', taxRate: 0.85, note: 'The District itself' },
  { id: 'delaware', name: 'Delaware', taxRate: 0.58, note: 'No sales tax state' },
  { id: 'west-virginia', name: 'West Virginia', taxRate: 0.55, note: 'Lower-cost commuter towns' },
  { id: 'pennsylvania', name: 'Pennsylvania', taxRate: 1.42, note: 'Higher effective rate' },
  { id: 'north-carolina', name: 'North Carolina', taxRate: 0.8, note: 'Growing metro areas' },
  { id: 'new-jersey', name: 'New Jersey', taxRate: 2.23, note: 'Highest effective rate' },
  { id: 'new-york', name: 'New York', taxRate: 1.4, note: 'Upstate to metro' },
];

export const mortgageSteps = [
  {
    step: '01',
    title: 'Principal',
    text: 'The portion of each payment that actually pays down your loan balance — it grows slowly at first, then faster over time.',
  },
  {
    step: '02',
    title: 'Interest',
    text: 'The cost of borrowing, calculated on your remaining balance. Early payments are interest-heavy, which is why the rate matters so much.',
  },
  {
    step: '03',
    title: 'Property Taxes',
    text: 'Your local property tax, split into twelve monthly installments and held in escrow so it is never a surprise.',
  },
  {
    step: '04',
    title: 'Insurance & HOA',
    text: 'Homeowners insurance — and association dues if you buy in a condo or planned community — round out the full monthly figure.',
  },
];

export const mortgageFactors = [
  {
    icon: 'Home',
    title: 'Home Price',
    text: 'The purchase price anchors the loan amount, so it is the single biggest driver of your monthly principal and interest.',
  },
  {
    icon: 'PiggyBank',
    title: 'Down Payment',
    text: 'A larger down payment shrinks the loan and the payment — and twenty percent removes private mortgage insurance entirely.',
  },
  {
    icon: 'CalendarClock',
    title: 'Loan Term',
    text: 'A 30-year term keeps payments low while a 15-year term raises them but cuts total interest dramatically.',
  },
  {
    icon: 'Percent',
    title: 'Interest Rate',
    text: 'Even a small change in rate shifts your payment meaningfully over the life of the loan. Your rate depends on credit, points and the market.',
  },
  {
    icon: 'Landmark',
    title: 'Property Taxes',
    text: 'Local tax rates vary widely by state and county, and they are collected monthly — so where you buy changes what you pay.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Insurance & HOA',
    text: 'Homeowners insurance and any association dues are part of the payment, not extras, and both vary with the property.',
  },
];

export const mortgageFaqs = [
  {
    q: 'How is my monthly mortgage payment calculated?',
    a: 'Your payment is the sum of four parts — principal, interest, property taxes and insurance (often called PITI), plus any HOA or condo dues. This calculator computes each one from your home price, down payment, term, rate and location, so you can see exactly what makes up the number rather than a single opaque figure.',
  },
  {
    q: 'What is the difference between a 15-year and a 30-year mortgage?',
    a: 'A 30-year loan spreads the balance over more payments, which keeps your monthly figure lower but means you pay more total interest. A 15-year loan has higher monthly payments but typically a lower rate and dramatically less interest overall. Use the loan-term control above to compare both against your own budget.',
  },
  {
    q: 'How much should I put down?',
    a: 'Twenty percent avoids private mortgage insurance and lowers your payment, but it is not required. Many DMV buyers put down 5–15%, and VA loans for eligible service members can require nothing down. Every extra dollar of down payment reduces your loan amount and your long-term interest.',
  },
  {
    q: 'Do property taxes and insurance really change my payment?',
    a: 'Yes — they are collected monthly as part of your payment and held in escrow. Property taxes vary significantly by state and county, and homeowners insurance varies with the home and your coverage. Because they are location-dependent, choosing your state above keeps the estimate grounded in local reality.',
  },
  {
    q: 'Is this mortgage calculator a rate quote or pre-approval?',
    a: 'No. It is an estimating tool to help you plan and compare scenarios. A real rate quote and pre-approval come from a lender who reviews your credit, income and assets. When you are ready, BW Metro Properties can connect you with trusted local lenders and help you position a competitive offer.',
  },
  {
    q: 'How can I lower my monthly payment?',
    a: 'Increasing your down payment, extending the loan term, improving your credit to secure a lower rate, or shopping in a lower-tax area all reduce the monthly figure. The most effective lever depends on your goals. Bring your result to a strategy call and we will map the mix that fits your plan.',
  },
];