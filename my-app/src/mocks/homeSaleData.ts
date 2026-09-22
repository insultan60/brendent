export const homeSaleHero = {
  eyebrow: 'Calculators',
  titleLead: 'Home Sale',
  titleAccent: 'Calculator',
  text: "When selling your home, there are additional costs like repairs, title fees, and agent commissions that impact the net cash amount after a sale is complete. Use the home sale net proceeds calculator below to estimate your home sale price, total costs, and net proceeds.",
  image:
    'https://readdy.ai/api/search-image?query=Warm%20brick%20colonial%20home%20exterior%20at%20golden%20hour%20with%20manicured%20landscaping%20and%20a%20welcoming%20front%20porch%2C%20soft%20natural%20light%20across%20clean%20architectural%20lines%2C%20refined%20editorial%20real%20estate%20photography%20with%20gentle%20shadows%20and%20a%20harmonious%20upscale%20neighborhood%20composition&width=1600&height=900&seq=homesale-hero-2026-x1&orientation=landscape',
};

export const saleStatStrip = [
  { value: '6%', label: 'Typical agent commission' },
  { value: '1–1.5%', label: 'DMV transfer taxes' },
  { value: '~2–3%', label: 'Title & closing costs' },
  { value: '3', label: 'Jurisdictions we serve' },
];

export interface HomeSaleDefaults {
  salePrice: number;
  mortgagePayoff: number;
  repairsPercent: number;
  commissionPercent: number;
  transferTaxPercent: number;
}

export const homeSaleDefaults: HomeSaleDefaults = {
  salePrice: 875000,
  mortgagePayoff: 420000,
  repairsPercent: 1.5,
  commissionPercent: 6,
  transferTaxPercent: 1,
};

export const saleDisclaimer =
  'This net proceeds calculator provides an estimate of costs that are meant for educational purposes only; our calculation is not a guarantee and is based on the information that you’ve entered. Our total costs to sell include remaining mortgage, commission and estimated closing costs.';

export const saleBottomNote =
  'All calculations are estimates and provided for informational purposes only. Actual amounts may vary.';

export const saleSteps = [
  {
    step: '01',
    title: 'Start with your sale price',
    text: 'Enter your listed or estimated home price — this figure anchors every other number in the estimate.',
  },
  {
    step: '02',
    title: 'Add your payoff and prep',
    text: 'Subtract what you still owe on the mortgage and any repairs, improvements or staging you plan to invest.',
  },
  {
    step: '03',
    title: 'Account for fees & taxes',
    text: 'Commission, transfer and recordation taxes, and title and settlement costs all come out of the proceeds.',
  },
  {
    step: '04',
    title: 'See your net, then plan',
    text: 'What remains is your estimated net — bring it to a strategy call and we will map your next move.',
  },
];

export const sellerCosts = [
  {
    icon: 'BadgePercent',
    title: 'Agent Commission',
    text: 'The largest single line item for most sellers. It covers listing, marketing, negotiation and coordination on both sides of the transaction.',
  },
  {
    icon: 'Hammer',
    title: 'Repairs, Improvements & Staging',
    text: 'Pre-listing prep — paint, updates, handyman work and staging — protects your price and helps you compete with better-presented homes.',
  },
  {
    icon: 'Landmark',
    title: 'Transfer & Recordation Taxes',
    text: 'State and local governments charge a tax when the deed transfers. Rates vary widely by jurisdiction and can reach roughly 1–1.5% of the sale price.',
  },
  {
    icon: 'FileText',
    title: 'Title & Settlement Fees',
    text: 'Title search, title insurance, escrow, notary and recording fees are handled at settlement and typically run two to three percent of the price.',
  },
  {
    icon: 'Banknote',
    title: 'Mortgage Payoff & Liens',
    text: 'Any remaining loan balance, home equity line, tax lien or HOA payoff is settled directly out of the proceeds before you are paid.',
  },
  {
    icon: 'HandCoins',
    title: 'Buyer Concessions & Credits',
    text: 'In negotiations you may agree to cover some buyer closing costs or a repair credit — a common tool that still protects your bottom line.',
  },
];

/** Approximate effective transfer & recordation tax rates across the DMV. */
export const saleRegions = [
  { id: 'dc', name: 'Washington, DC', rate: 1.1, note: 'Recordation and transfer tax applies on the full price.' },
  { id: 'arlington', name: 'Arlington, VA', rate: 0.1, note: 'Low state grantor tax — the buyer pays most at closing.' },
  { id: 'alexandria', name: 'Alexandria, VA', rate: 0.1, note: 'State grantor tax collected at settlement.' },
  { id: 'falls-church', name: 'Falls Church, VA', rate: 0.1, note: 'State grantor tax collected at settlement.' },
  { id: 'montgomery', name: 'Montgomery, MD', rate: 1.45, note: 'Combined state plus county transfer and recordation tax.' },
  { id: 'silver-spring', name: 'Silver Spring, MD', rate: 1.45, note: 'Combined state plus county transfer and recordation tax.' },
  { id: 'pg', name: 'Prince George’s, MD', rate: 1.4, note: 'Combined state plus county transfer and recordation tax.' },
];

export const saleFaqs = [
  {
    q: 'How much will I actually make selling my home?',
    a: 'Your net proceeds equal the sale price minus your remaining mortgage balance, agent commission, transfer and recordation taxes, title and settlement fees, and any repairs or concessions you agree to. For most DMV sellers this lands somewhere between 88% and 94% of the sale price, but the exact number depends on your payoff and the costs specific to your transaction. This calculator applies those figures so you can see a realistic net.',
  },
  {
    q: 'What are the biggest costs when selling a home?',
    a: 'Commission is usually the largest single expense, followed by transfer and recordation taxes and title and settlement fees. Repairs, improvements and staging can be meaningful too — but they typically protect or increase your final price rather than simply reduce it. Your mortgage payoff is not a fee, but it does come out of the proceeds before you are paid.',
  },
  {
    q: 'How much are transfer and recordation taxes in the DMV?',
    a: 'It depends on the jurisdiction. Virginia charges a low state grantor tax (around 0.1%), with buyers typically covering the larger share. Washington DC charges roughly 1.1% or more on the full price, and Maryland counties combine state and county transfer and recordation taxes that often total around 1.4–1.45%. Choosing your region above keeps the estimate grounded in local rates.',
  },
  {
    q: 'Should I make repairs before listing?',
    a: 'Often, yes — strategic preparation tends to return more than it costs. Fresh paint, small repairs and professional staging help your home photograph well and compete. That said, every project should be weighed against your timeline and goals. On a strategy call we identify which improvements actually move your net, and which do not.',
  },
  {
    q: 'When do I get the money from my home sale?',
    a: 'Proceeds are disbursed at settlement once the title company pays off any existing loans and liens and deducts the agreed costs. If you are buying your next home at the same time, funds can often be coordinated so your net rolls directly into the purchase. Barring delays, sellers typically receive their net on the day of closing.',
  },
  {
    q: 'Does this calculator replace a real net sheet?',
    a: 'No — it is an estimating tool to set expectations and guide your planning. A precise net sheet is prepared from your actual payoff statement, title quote and specific contract terms. When you are ready, BW Metro Properties will prepare an itemized net sheet so there are no surprises at the closing table.',
  },
];