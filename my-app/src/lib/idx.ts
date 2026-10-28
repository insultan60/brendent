import 'server-only';

import type { FactGroup, Listing, ListingDetail, ListingStatus } from '@/views/properties/types';
import { FULL_MLS_FALLBACK, formatMoney } from '@/views/properties/utils';

/*
 * Brandon's listings from IDX Broker (account 71664, Bright MLS).
 *
 * Runs on the server only: IDX_BROKER_ACCESS_KEY never reaches the browser.
 * Every call is cached for an hour (see REVALIDATE), so the whole site costs
 * IDX a handful of calls an hour however many people open /properties, which
 * keeps it well inside IDX Broker's hourly API limit.
 *
 * Failure is soft. A missing key or an IDX outage returns no listings rather
 * than throwing, and the page still renders with its "Search My Full MLS"
 * button, which works whether or not the API does.
 */

const IDX_BASE = 'https://api.idxbroker.com';
const REVALIDATE = 3600;

/** Brandon's Bright MLS agent ID: the listing agent on homes he listed, the
 *  selling agent on homes where he represented the buyer or tenant. */
const BRANDON_AGENT_ID = '3344764';

type Advanced = Record<string, unknown>;

type RawListing = {
  listingID: string;
  idxStatus?: string;
  propStatus?: string;
  rntLse?: string;
  price?: number | string;
  listingPrice?: string;
  soldPrice?: number | string;
  priceData?: { value?: { raw?: number } };
  address?: string;
  cityName?: string;
  countyName?: string;
  state?: string;
  zipcode?: string;
  subdivision?: string;
  bedrooms?: number | string;
  totalBaths?: number | string;
  sqFt?: string | number;
  acres?: string | number;
  yearBuilt?: string | number;
  propSubType?: string;
  idxPropType?: string;
  latitude?: number | string;
  longitude?: number | string;
  image?: Record<string, { url?: string } | number>;
  remarksConcat?: string;
  fullDetailsURL?: string;
  detailsUrlSlug?: string;
  soldDate?: string;
  dateAdded?: string;
  listingAgentID?: string;
  sellingAgentID?: string;
  listingOfficeID?: string;
  advanced?: Advanced;
};

type ListResponse = { data?: Record<string, RawListing> | RawListing[]; next?: string | null } | RawListing[];

async function idxGet<T>(path: string): Promise<T | null> {
  const key = process.env.IDX_BROKER_ACCESS_KEY;
  if (!key) return null;
  try {
    const res = await fetch(path.startsWith('http') ? path : `${IDX_BASE}/${path}`, {
      headers: { accesskey: key, outputtype: 'json' },
      next: { revalidate: REVALIDATE, tags: ['idx'] },
    });
    // IDX answers a bare 204 when a feed is empty (no featured listings).
    if (res.status === 204 || !res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

/** One feed, following IDX's `next` page links. Older API versions return a
 *  bare array, newer ones an envelope with `data`; both are handled. */
async function feed(path: string): Promise<RawListing[]> {
  const rows: RawListing[] = [];
  let url: string | null = path;
  for (let page = 0; url && page < 10; page += 1) {
    const res: ListResponse | null = await idxGet<ListResponse>(url);
    if (!res) break;
    if (Array.isArray(res)) {
      rows.push(...res);
      break;
    }
    const data = res.data ?? {};
    rows.push(...(Array.isArray(data) ? data : Object.values(data)));
    url = res.next || null;
  }
  return rows;
}

/** Every listing IDX holds for Brandon, featured first, each once. */
async function rawListings(): Promise<RawListing[]> {
  const [featured, supplemental, soldpending] = await Promise.all([
    feed('clients/featured'),
    feed('clients/supplemental'),
    feed('clients/soldpending'),
  ]);
  const seen = new Set<string>();
  return [...featured, ...supplemental, ...soldpending].filter((raw) => {
    if (!raw.listingID || seen.has(raw.listingID)) return false;
    seen.add(raw.listingID);
    return true;
  });
}

const STATE_CODES: Record<string, string> = {
  'district of columbia': 'DC',
  maryland: 'MD',
  virginia: 'VA',
  'west virginia': 'WV',
  delaware: 'DE',
  pennsylvania: 'PA',
};

const toNumber = (value: unknown): number => {
  const n = Number(String(value ?? '').replace(/[^0-9.-]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

function statusOf(raw: RawListing): ListingStatus {
  const lease = raw.rntLse === 'lease' || /lease/i.test(raw.idxPropType ?? '');
  const idx = (raw.idxStatus ?? '').toLowerCase();
  const prop = (raw.propStatus ?? '').toLowerCase();
  if (idx === 'sold' || prop === 'closed') return lease ? 'Leased' : 'Sold';
  if (idx === 'pending' || prop.includes('pending') || prop.includes('under contract')) return 'Pending';
  if (prop.includes('coming soon')) return 'Coming Soon';
  return lease ? 'For Rent' : 'For Sale';
}

/** The page address on this site: /property/65-bryant-street-nw-washington-20001. */
function slugOf(raw: RawListing): string {
  const base = raw.detailsUrlSlug || `${raw.address ?? ''} ${raw.cityName ?? ''} ${raw.zipcode ?? ''}`;
  return (
    base
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || raw.listingID.toLowerCase()
  );
}

function photosOf(raw: RawListing): string[] {
  return Object.entries(raw.image ?? {})
    .filter(([key, value]) => /^\d+$/.test(key) && typeof value === 'object' && value.url)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([, value]) => (value as { url: string }).url);
}

function toListing(raw: RawListing): Listing {
  const lat = toNumber(raw.latitude);
  const lng = toNumber(raw.longitude);
  const status = statusOf(raw);
  const closed = status === 'Sold' || status === 'Leased';
  const state = (raw.state ?? '').trim();
  const slug = slugOf(raw);
  return {
    id: raw.listingID,
    slug,
    status,
    price: (closed && raw.priceData?.value?.raw) || toNumber(raw.price),
    address: raw.address ?? '',
    city: raw.cityName ?? '',
    state: STATE_CODES[state.toLowerCase()] ?? state,
    zip: raw.zipcode ?? '',
    beds: toNumber(raw.bedrooms),
    baths: toNumber(raw.totalBaths),
    sqft: toNumber(raw.sqFt) || null,
    type: raw.propSubType || raw.idxPropType || 'Residential',
    lat: lat || null,
    lng: lng || null,
    image: photosOf(raw)[0] ?? null,
    url: `/property/${slug}`,
    date: raw.soldDate || raw.dateAdded || '',
  };
}

export async function getHomeSearch(): Promise<{ listings: Listing[]; fullMlsUrl: string }> {
  const [raws, links] = await Promise.all([
    rawListings(),
    idxGet<{ name: string; url: string }[]>('clients/systemlinks'),
  ]);
  const mapSearch = Array.isArray(links) ? links.find((l) => l.name === 'Map Search') : undefined;
  return { listings: raws.map(toListing), fullMlsUrl: mapSearch?.url || FULL_MLS_FALLBACK };
}

/* ---------- Detail pages ---------- */

const yesNo = (value: unknown) => (value === 'yes' ? 'Yes' : value === 'no' ? 'No' : '');

function text(value: unknown): string {
  if (value === null || value === undefined) return '';
  if (Array.isArray(value)) return value.map(text).filter(Boolean).join(', ');
  const s = String(value).trim();
  // 'None' says nothing on a feature list (e.g. Accessibility: None).
  return s === '-' || s === '0' || /^none$/i.test(s) ? '' : s;
}

/** A fee with its frequency: "$350 / Monthly". */
function fee(amount: unknown, freq: unknown): string {
  const n = toNumber(amount);
  if (!n) return '';
  const f = text(freq);
  return `${formatMoney(n)}${f ? ` / ${f}` : ''}`;
}

/** Feature groups for the detail page, built from the MLS "advanced" fields.
 *  Empty values are dropped, so a group only shows what the MLS supplied. */
function factGroups(raw: RawListing): FactGroup[] {
  const a = raw.advanced ?? {};
  const g = (key: string) => text(a[key]);
  const lotSqft = toNumber(a.lotSqft);
  const acres = toNumber(raw.acres);
  const groups: FactGroup[] = [
    {
      title: 'Interior',
      items: [
        ['Rooms', g('roomList')],
        ['Levels', g('levelsCount')],
        ['Flooring', g('flooringType')],
        ['Appliances', g('appliances')],
        ['Laundry', g('laundryType')],
        ['Basement', g('basementType')],
        ['Fireplaces', toNumber(a.fireplacesCount) ? `${toNumber(a.fireplacesCount)}` : g('fireplaceFeatures')],
        ['Windows', g('windowFeatures')],
        ['Accessibility', g('accessibilityFeatures')],
      ],
    },
    {
      title: 'Heating, cooling & utilities',
      items: [
        ['Heating', [g('heatingType'), g('heatingFuel')].filter(Boolean).join(' · ')],
        ['Cooling', [g('coolingType'), g('coolingFuel')].filter(Boolean).join(' · ')],
        ['Central air', yesNo(a.centralAirYN)],
        ['Hot water', g('hotWater')],
        ['Water', g('waterSource')],
        ['Sewer', g('sewerSeptic')],
        ['Utilities', g('utilities')],
      ],
    },
    {
      title: 'Exterior & lot',
      items: [
        ['Style', g('architecturalStyle')],
        ['Construction', g('constructionMaterials')],
        ['Roof', g('roof')],
        ['Exterior features', g('exteriorFeatures')],
        ['Outdoor living', g('outdoorLivingStructures')],
        ['Lot size', lotSqft ? `${lotSqft.toLocaleString('en-US')} sq ft${acres ? ` (${acres} acres)` : ''}` : acres ? `${acres} acres` : ''],
        ['Fencing', g('fencing')],
        ['Pool', g('pool')],
        ['View', g('view')],
        ['Waterfront', yesNo(a.waterfrontYN) === 'Yes' ? 'Yes' : ''],
      ],
    },
    {
      title: 'Parking',
      items: [
        ['Parking', [g('typeOfParking'), g('parkingFeatures')].filter(Boolean).join(' · ')],
        ['Garage spaces', toNumber(a.garageSpacesCount) ? `${toNumber(a.garageSpacesCount)}` : ''],
        ['Total spaces', toNumber(a.totalGarageAndParkingSpaces) ? `${toNumber(a.totalGarageAndParkingSpaces)}` : ''],
      ],
    },
    {
      title: 'Community & costs',
      items: [
        ['Subdivision', text(raw.subdivision)],
        ['County', text(raw.countyName)],
        ['HOA fee', fee(a.hoaFee, a.hoaFeeFreq)],
        ['Condo/co-op fee', fee(a.condoCoopFee, a.condoCoopFeeFreq)],
        ['Fee includes', g('hoaCondoCoopFeeIncludes')],
        ['Amenities', g('hoaCondoCoopAmenities')],
        ['Annual taxes', toNumber(a.taxAnnualAmount) ? `${formatMoney(toNumber(a.taxAnnualAmount))}${g('taxYear') ? ` (${g('taxYear')})` : ''}` : ''],
        ['Assessed value', toNumber(a.taxAssessedValue) ? formatMoney(toNumber(a.taxAssessedValue)) : ''],
        ['Zoning', g('zoningDscrp')],
      ],
    },
    {
      title: 'Schools & transport',
      items: [
        ['School district', g('schoolDistrictName')],
        ['Elementary', g('elementarySchool')],
        ['Middle', g('middleOrJuniorSchool')],
        ['High', g('highSchool')],
        ['Transportation', g('transportation')],
      ],
    },
    {
      title: 'Rental terms',
      items: [
        ['Pets allowed', yesNo(a.petsAllowedYN)],
        ['Rent includes', g('rentIncludes')],
        ['Tenant pays', g('tenantPays')],
        ['Furnished', g('furnished')],
        ['Minimum lease', toNumber(a.minimumLeaseInMonths) ? `${toNumber(a.minimumLeaseInMonths)} months` : ''],
      ],
    },
  ];
  return groups
    .map((group) => ({ ...group, items: group.items.filter(([, value]) => value) }))
    .filter((group) => group.items.length > 0);
}

function toDetail(raw: RawListing): ListingDetail {
  const listing = toListing(raw);
  const closed = listing.status === 'Sold' || listing.status === 'Leased';
  const role =
    raw.listingAgentID === BRANDON_AGENT_ID
      ? 'listing'
      : raw.sellingAgentID === BRANDON_AGENT_ID
        ? 'buyer'
        : null;
  return {
    ...listing,
    photos: photosOf(raw),
    description: text(raw.remarksConcat),
    listPrice: toNumber(raw.listingPrice) || toNumber(raw.price),
    closedPrice: closed ? listing.price : null,
    listedDate: raw.dateAdded || '',
    closedDate: closed ? raw.soldDate || '' : '',
    yearBuilt: toNumber(raw.yearBuilt) || null,
    lotSqft: toNumber(raw.advanced?.lotSqft) || null,
    mlsNumber: raw.listingID,
    listingOffice: raw.listingOfficeID ?? '',
    brandonRole: role,
    idxUrl: raw.fullDetailsURL ?? FULL_MLS_FALLBACK,
    facts: factGroups(raw),
  };
}

export async function getListingDetail(slug: string): Promise<ListingDetail | null> {
  const raw = (await rawListings()).find((r) => slugOf(r) === slug);
  return raw ? toDetail(raw) : null;
}
