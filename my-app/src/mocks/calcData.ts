export const affordabilityHero = {
  eyebrow: 'Calculators',
  titleLead: 'Affordability',
  titleAccent: 'Calculator',
  text: 'Find out how much home you can comfortably afford across Washington DC, Maryland and Northern Virginia. Adjust your income, debts, down payment and interest rate to see your target price and monthly payment update in real time — then let’s build a strategy behind the number.',
  image:
    'https://readdy.ai/api/search-image?query=Warm%20contemporary%20home%20exterior%20at%20golden%20hour%20with%20inviting%20light%2C%20clean%20architectural%20lines%2C%20soft%20neutral%20landscaping%20and%20a%20quiet%20upscale%20suburban%20setting%2C%20editorial%20real%20estate%20photography%20with%20gentle%20natural%20shadows%20and%20harmonious%20composition&width=1600&height=900&seq=afford-hero-2026-x1&orientation=landscape',
};

export interface CalcInputs {
  annualIncome: number;
  monthlyDebts: number;
  downPayment: number;
  interestRate: number;
  termYears: number;
  propertyTaxRate: number;
  annualInsurance: number;
  monthlyHoa: number;
  dti: number;
}

export const defaultInputs: CalcInputs = {
  annualIncome: 165000,
  monthlyDebts: 650,
  downPayment: 90000,
  interestRate: 6.5,
  termYears: 30,
  propertyTaxRate: 1.02,
  annualInsurance: 1800,
  monthlyHoa: 165,
  dti: 36,
};

export const loanTerms = [10, 15, 20, 30];

/** Effective residential property-tax rates across the DMV (percent of value / year). */
export const dmvRegions = [
  { id: 'dc', name: 'Washington, DC', taxRate: 0.85, note: 'Low effective rate · condo-friendly' },
  { id: 'arlington', name: 'Arlington, VA', taxRate: 1.02, note: 'Strong schools · close-in access' },
  { id: 'alexandria', name: 'Alexandria, VA', taxRate: 1.04, note: 'Old Town charm · walkable' },
  { id: 'falls-church', name: 'Falls Church, VA', taxRate: 1.08, note: 'Small-city feel · top-rated' },
  { id: 'bethesda', name: 'Bethesda, MD', taxRate: 1.05, note: 'Premium urban-suburban' },
  { id: 'silver-spring', name: 'Silver Spring, MD', taxRate: 1.05, note: 'Value · Metro-connected' },
  { id: 'pg-county', name: 'Prince George’s, MD', taxRate: 1.2, note: 'More home for the budget' },
];

export const affordabilitySteps = [
  {
    step: '01',
    title: 'Set your monthly comfort',
    text: 'Start with your gross income and the debts you already carry, then choose how much of your income you want going to housing.',
  },
  {
    step: '02',
    title: 'Dial in the financing',
    text: 'Adjust your down payment, interest rate and loan term to see how each choice moves your target price and payment.',
  },
  {
    step: '03',
    title: 'Match the DMV market',
    text: 'Pick a local tax region so the property-tax estimate reflects where you actually want to buy.',
  },
  {
    step: '04',
    title: 'Turn the number into a plan',
    text: 'Bring your result to a strategy call and we’ll align your budget with real listings, neighborhoods and timelines.',
  },
];

export const affordabilityFactors = [
  {
    icon: 'Wallet',
    title: 'Gross Annual Income',
    text: 'Lenders start with your total household income before taxes — including salary, bonus and other verifiable earnings.',
  },
  {
    icon: 'CreditCard',
    title: 'Recurring Monthly Debts',
    text: 'Car payments, student loans, minimum card payments and other obligations are subtracted before housing is added.',
  },
  {
    icon: 'PiggyBank',
    title: 'Down Payment',
    text: 'A larger down payment lowers the loan amount, the monthly principal and interest, and can remove mortgage insurance.',
  },
  {
    icon: 'Percent',
    title: 'Interest Rate',
    text: 'Even a small change in rate shifts your buying power meaningfully over a 15 or 30 year term.',
  },
  {
    icon: 'Scale',
    title: 'Debt-to-Income Ratio',
    text: 'Most conventional loans look for total housing plus debts around 36% of gross income, up to roughly 43–45% with strong files.',
  },
  {
    icon: 'Landmark',
    title: 'Taxes, Insurance & HOA',
    text: 'Property taxes, homeowners insurance and association dues are part of the payment — not extras — and vary by locality.',
  },
];

export const affordabilityFaqs = [
  {
    q: 'How much home can I afford in the DMV?',
    a: 'It depends on your income, existing debts, down payment and the interest rate you qualify for. As a general guide, most lenders look for total monthly housing costs plus debts to land near 36% of your gross income, stretching to about 43–45% with a strong credit profile. This calculator applies those ratios so you can see a realistic target price for Washington DC, Maryland and Northern Virginia.',
  },
  {
    q: 'What debt-to-income ratio do I need to buy a home?',
    a: 'Conventional loans commonly cap total debt-to-income around 43–45%, while FHA financing can allow higher with compensating factors. Keeping your housing payment plus debts near or below 36% of gross income is the most comfortable range — and it preserves room in your budget for savings and the unexpected.',
  },
  {
    q: 'How much should my down payment be?',
    a: 'Twenty percent avoids private mortgage insurance and lowers your monthly payment, but it is not required. Many DMV buyers put down 5–15%, and VA loans for eligible service members can require no down payment at all. A larger down payment always reduces your loan amount and long-term interest.',
  },
  {
    q: 'Why do property taxes and HOA dues matter so much?',
    a: 'They are part of your monthly payment and they vary widely across the region. A lower tax locality can meaningfully increase the price you can afford, while condo association dues or HOA fees reduce the portion of your budget available for principal and interest. Choosing a region above keeps the estimate grounded in local rates.',
  },
  {
    q: 'Is this calculator a pre-approval?',
    a: 'No — it is an estimating tool to guide your budget and expectations. A lender pre-approval reviews your credit, income documentation and assets to confirm a specific borrowing amount. When you are ready, BW Metro Properties can connect you with trusted local lenders and help position your offer competitively.',
  },
  {
    q: 'What if my number feels lower than I expected?',
    a: 'That is exactly the conversation worth having. Paying down a small recurring debt, adjusting your down payment, or targeting a different community can change your reach quickly. Bring your results to a strategy call and we will map the highest-value path toward the home you want.',
  },
];

export const calcStatStrip = [
  { value: '36%', label: 'Comfortable DTI guide' },
  { value: '20%', label: 'Down payment to avoid PMI' },
  { value: '15 / 30', label: 'Most common loan terms' },
  { value: '3', label: 'Jurisdictions we serve' },
];