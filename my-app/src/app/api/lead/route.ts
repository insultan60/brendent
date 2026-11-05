/**
 * Every lead form on the site posts here.
 *
 * Each submission is sent two ways, so nothing sits unseen:
 *   1. Follow Up Boss, as an event (FUB_API_KEY). The person is created or
 *      matched in FUB and Brandon's action plans fire as for any other source.
 *   2. An email to Brandon (RESEND_API_KEY), as a safety net.
 * The request succeeds when either one goes through.
 *
 * Accepts form-encoded or JSON bodies. Field names from the older forms
 * (first_name, phone_number, comments...) are understood as well as the new
 * LeadForm's. Pass ?form=<name> to say which form it came from.
 *
 * Replies { code: 'OK' } on success, the shape the site's forms check for.
 */

import { FUB_SOURCE, fubFetch } from '@/lib/fub';

const RESEND_EMAILS = 'https://api.resend.com/emails';
const SYSTEM = 'BW Metro Properties Website';

type Fields = Record<string, string>;

/** Field names that are read into the lead itself rather than listed as extras. */
const CORE = new Set([
  'first_name', 'firstName', 'last_name', 'lastName', 'name',
  'email', 'phone', 'phone_number', 'message', 'comments',
  'page_url', 'page_title', 'form',
  'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content',
  'sms_consent', 'disclaimer_accepted', 'consent',
]);

/** Readable labels for the extra fields, in the order they are listed. */
const LABELS: Record<string, string> = {
  interest: "I'm interested in",
  looking_to: 'Looking to',
  timeframe: 'Timeframe',
  timeline: 'Timeline',
  moving_timeframe: 'When are you thinking of moving?',
  property_address: 'Property address',
  address: 'Property address',
  pre_approved: 'Pre-approved?',
  target_area: 'Target area',
  working_with_realtor: 'Working with a Realtor?',
  price_range: 'Price range',
  preferred_locations: 'Preferred locations',
};

/** Which FUB event type each form creates. */
const FORM_TYPES: Record<string, string> = {
  seller: 'Seller Inquiry',
  'home-value': 'Seller Inquiry',
  'sell-your-home': 'Seller Inquiry',
  'cash-offer': 'Seller Inquiry',
  property: 'Property Inquiry',
  newsletter: 'Registration',
  'resource-download': 'Registration',
};

const ok = () => Response.json({ code: 'OK' });
const fail = (message: string, status: number) => Response.json({ code: 'ERROR', message }, { status });

async function readFields(request: Request): Promise<Fields> {
  const fields: Fields = {};
  if ((request.headers.get('content-type') ?? '').includes('application/json')) {
    const body = (await request.json().catch(() => ({}))) as Record<string, unknown>;
    for (const [key, value] of Object.entries(body)) {
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        fields[key] = String(value).trim();
      }
    }
  } else {
    const data = await request.formData().catch(() => null);
    data?.forEach((value, key) => {
      if (typeof value === 'string') fields[key] = value.trim();
    });
  }
  return fields;
}

const label = (key: string) =>
  LABELS[key] ?? key.replace(/_/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

export async function POST(request: Request) {
  const fields = await readFields(request);
  const url = new URL(request.url);
  const form = fields.form || url.searchParams.get('form') || 'contact';

  // Honeypots: the older forms name theirs *_alt. A filled one is a bot, and
  // it gets the same reply as a person so it learns nothing.
  if (Object.entries(fields).some(([key, value]) => key.endsWith('_alt') && value)) return ok();

  let firstName = fields.first_name || fields.firstName || '';
  let lastName = fields.last_name || fields.lastName || '';
  if (!firstName && fields.name) {
    const [first, ...rest] = fields.name.split(/\s+/);
    firstName = first;
    lastName = rest.join(' ');
  }
  const email = fields.email || '';
  const phone = fields.phone || fields.phone_number || '';
  const message = fields.message || fields.comments || '';

  if (!email && !phone) return fail('Please add an email or phone number.', 400);
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please check your email address.', 400);

  // Where it came from: the form sends the page, else fall back to the referrer.
  const pageUrl = fields.page_url || request.headers.get('referer') || '';
  let pageParams = new URLSearchParams();
  try {
    pageParams = new URL(pageUrl).searchParams;
  } catch {}
  const utm = (key: string) => fields[`utm_${key}`] || pageParams.get(`utm_${key}`) || '';
  const campaign = {
    source: utm('source'),
    medium: utm('medium'),
    campaign: utm('campaign'),
    term: utm('term'),
    content: utm('content'),
  };
  // The older forms call their (now optional) texting-consent box disclaimer_accepted or consent.
  const smsConsent = [fields.sms_consent, fields.disclaimer_accepted, fields.consent].includes('yes');

  const extras = Object.entries(fields)
    .filter(([key, value]) => value && !CORE.has(key) && !key.endsWith('_alt') && !key.startsWith('prop_'))
    .map(([key, value]) => `${label(key)}: ${value}`);
  const details = [
    ...extras,
    `SMS consent: ${smsConsent ? 'Yes' : 'No'}`,
    `Form: ${form}`,
    pageUrl && `Page: ${pageUrl}`,
    campaign.campaign && `UTM campaign: ${campaign.campaign}`,
    campaign.source && `UTM source: ${campaign.source}`,
    campaign.medium && `UTM medium: ${campaign.medium}`,
  ].filter(Boolean) as string[];

  const fullName = [firstName, lastName].filter(Boolean).join(' ') || email || phone;
  const type = FORM_TYPES[form] ?? 'General Inquiry';
  const interest = fields.interest || fields.looking_to || '';
  const profile = {
    interest,
    timeframe: fields.timeframe || fields.moving_timeframe || fields.timeline || '',
    preApproved: fields.pre_approved || '',
    targetArea: fields.target_area || '',
    workingWithRealtor: fields.working_with_realtor || '',
  };
  const property = readProperty(fields);
  const role = type === 'Seller Inquiry' || /sell/i.test(interest) ? 'Seller' : /buy/i.test(interest) || form === 'buyer' ? 'Buyer' : '';

  const results = await Promise.allSettled([
    sendToFub({ type, firstName, lastName, email, phone, message, details, pageUrl, campaign, smsConsent, form, property, profile, role }),
    sendEmail({ type, fullName, email, phone, message, details }),
  ]);
  const sent = results.filter((r) => r.status === 'fulfilled' && r.value).length;
  results.forEach((r) => {
    if (r.status === 'rejected') console.error('[lead] delivery failed:', r.reason);
  });

  if (!sent) {
    return fail('We could not send your request. Please call or text (202) 998-4593.', 502);
  }
  return ok();
}

type FubLead = {
  type: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  details: string[];
  pageUrl: string;
  campaign: Record<string, string>;
  smsConsent: boolean;
  form: string;
  property: Record<string, string | number> | null;
  profile: Record<string, string>;
  role: string;
};

/**
 * The home a lead is about. Property pages send the listing's details as
 * prop_* fields; seller forms send just the address the owner typed.
 */
function readProperty(fields: Fields): Record<string, string | number> | null {
  const property: Record<string, string | number> = {};
  const text: Record<string, string> = {
    prop_street: 'street', prop_city: 'city', prop_state: 'state', prop_code: 'code',
    prop_mls: 'mlsNumber', prop_url: 'url', prop_type: 'type',
  };
  const numbers: Record<string, string> = {
    prop_price: 'price', prop_beds: 'bedrooms', prop_baths: 'bathrooms', prop_sqft: 'area',
  };
  for (const [from, to] of Object.entries(text)) if (fields[from]) property[to] = fields[from];
  for (const [from, to] of Object.entries(numbers)) {
    const value = Number(fields[from]);
    if (fields[from] && Number.isFinite(value) && value > 0) property[to] = value;
  }
  if (!property.street) {
    const address = fields.property_address || fields.address;
    if (address) property.street = address;
  }
  return Object.keys(property).length ? property : null;
}

/**
 * Custom fields created in Brandon's FUB for the form's answers (Admin >
 * Custom Fields), so they can be filtered and used in smart lists.
 */
const CUSTOM_FIELDS: Record<string, string> = {
  interest: 'customWebsiteInterest',
  timeframe: 'customWebsiteTimeframe',
  preApproved: 'customPreApproved',
  targetArea: 'customTargetArea',
  workingWithRealtor: 'customWorkingWithRealtor',
};

/**
 * Brandon's existing FUB action plans, started for brand-new website leads
 * when FUB_ACTION_PLANS=on. Leave it off while FUB's own Lead Flow starts
 * plans for this source, or the lead would get both.
 */
const ACTION_PLANS = { Seller: 5, Buyer: 3, other: 6 } as const; // Seller - Home Evaluation Request, Buyer New Lead Website Registration, Web Inquiry Option 01

/** Resolves true once FUB has the lead, false when FUB is not configured. */
async function sendToFub(lead: FubLead) {
  const key = process.env.FUB_API_KEY;
  if (!key) return false;

  const tags = ['Website', `Form: ${lead.form}`];
  if (lead.smsConsent) tags.push('SMS Opt-In');
  if (lead.role) tags.push(lead.role);

  const event: Record<string, unknown> = {
    source: FUB_SOURCE,
    system: SYSTEM,
    type: lead.type,
    message: lead.message || undefined,
    description: lead.details.join('\n'),
    person: {
      firstName: lead.firstName || undefined,
      lastName: lead.lastName || undefined,
      emails: lead.email ? [{ value: lead.email }] : undefined,
      phones: lead.phone ? [{ value: lead.phone }] : undefined,
      tags,
    },
    pageUrl: lead.pageUrl || undefined,
  };
  if (Object.values(lead.campaign).some(Boolean)) event.campaign = lead.campaign;
  if (lead.property) event.property = lead.property;

  const response = await fubFetch(key, 'events', { method: 'POST', body: JSON.stringify(event) });
  // 200 = existing person updated, 201 = new person, 204 = FUB's lead flow
  // chose to ignore it (still a successful hand-off).
  if (!response.ok) throw new Error(`FUB ${response.status}: ${await response.text()}`);

  // The lead is in FUB at this point; the extras below must never fail it.
  const person = response.status === 204 ? null : ((await response.json().catch(() => null)) as { id?: number } | null);
  if (person?.id) {
    await addProfile(key, person.id, lead, response.status === 201).catch((error) =>
      console.error('[lead] FUB follow-up failed:', error),
    );
  }
  return true;
}

/** Fills the custom fields and, for a new person, starts an action plan if enabled. */
async function addProfile(key: string, personId: number, lead: FubLead, isNew: boolean) {
  const update: Record<string, string> = {};
  for (const [field, name] of Object.entries(CUSTOM_FIELDS)) {
    if (lead.profile[field]) update[name] = lead.profile[field];
  }
  // Only ever record a yes: an older form without the box must not undo a
  // consent the person gave earlier.
  if (lead.smsConsent) update.customSMSConsent = 'Yes';
  if (Object.keys(update).length) {
    const response = await fubFetch(key, `people/${personId}`, { method: 'PUT', body: JSON.stringify(update) });
    if (!response.ok) throw new Error(`FUB custom fields ${response.status}: ${await response.text()}`);
  }

  if (isNew && process.env.FUB_ACTION_PLANS === 'on') {
    const actionPlanId = lead.role === 'Seller' ? ACTION_PLANS.Seller : lead.role === 'Buyer' ? ACTION_PLANS.Buyer : ACTION_PLANS.other;
    const response = await fubFetch(key, 'actionPlansPeople', { method: 'POST', body: JSON.stringify({ personId, actionPlanId }) });
    if (!response.ok) throw new Error(`FUB action plan ${response.status}: ${await response.text()}`);
  }
}

type EmailLead = {
  type: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
  details: string[];
};

/** Resolves true once the email is accepted, false when email is not configured. */
async function sendEmail(lead: EmailLead) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const to = process.env.LEAD_EMAIL_TO || 'brandon@bwmetroproperties.com';
  // resend.dev can send to the Resend account's own address without any DNS
  // setup; switch to a bwmetroproperties.com address once the domain is verified.
  const from = process.env.LEAD_EMAIL_FROM || 'BW Metro Website <onboarding@resend.dev>';

  const text = [
    `New ${lead.type.toLowerCase()} from the website.\n`,
    `Name: ${lead.fullName}`,
    lead.email && `Email: ${lead.email}`,
    lead.phone && `Phone: ${lead.phone}`,
    lead.message && `\nMessage:\n${lead.message}\n`,
    ...lead.details,
  ]
    .filter(Boolean)
    .join('\n');

  const response = await fetch(RESEND_EMAILS, {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: to.split(',').map((address) => address.trim()),
      reply_to: lead.email || undefined,
      subject: `New website lead: ${lead.fullName} (${lead.type})`,
      text,
    }),
  });
  if (!response.ok) throw new Error(`Resend ${response.status}: ${await response.text()}`);
  return true;
}
