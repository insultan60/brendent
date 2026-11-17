import { MLS_CITIES } from '@/lib/mlsCities';

/*
 * Turns what a visitor types into a full Bright MLS search on Brandon's IDX
 * Broker site, so a search covers every home for sale, not only the handful
 * of listings in Brandon's own feed.
 *
 * IDX's results page takes the filters in the query string (checked against
 * the live site, November 2026): idxID, pt (1 = for sale, 2 = for rent),
 * city[] (Bright MLS city IDs, see mlsCities.ts), zipcode[], lp / hp (price),
 * bd (beds), tb (baths) and a_propSubType[] (home type).
 */

const RESULTS = 'https://bwmetroproperties.idxbroker.com/idx/results/listings';

export type ListingKind = 'sale' | 'rent';
export type HomeType = '' | 'house' | 'townhouse' | 'condo';

export interface MlsQuery {
  location?: string;
  kind?: ListingKind;
  homeType?: HomeType;
  priceMin?: string;
  priceMax?: string;
  beds?: string;
  baths?: string;
}

const SUBTYPES: Record<Exclude<HomeType, ''>, string[]> = {
  house: ['Detached'],
  townhouse: ['Interior Row/Townhouse', 'End of Row/Townhouse', 'Townhouse', 'Row/Townhouse'],
  condo: ['Unit/Flat/Apartment', 'Penthouse Unit/Flat/Apartment', 'Garden 1-4 Floors', 'Mid-Rise 5-8 Floors', 'Hi-Rise 9+ Floors'],
};

/** Neighborhood names people type, mapped to the ZIP codes our guides use. */
const NEIGHBORHOOD_ZIPS: Record<string, string[]> = {
  'capitol hill': ['20002', '20003'],
  georgetown: ['20007'],
  'dupont circle': ['20036'],
  'adams morgan': ['20009'],
  'logan circle': ['20005'],
  'navy yard': ['20003'],
  'capitol riverfront': ['20003'],
  shaw: ['20001'],
  'u street': ['20001', '20009'],
  'columbia heights': ['20010'],
  'old town': ['22314'],
  'old town alexandria': ['22314'],
  'del ray': ['22301'],
  'potomac yard': ['22314', '22301'],
  carlyle: ['22314'],
  clarendon: ['22201'],
  rosslyn: ['22209'],
  ballston: ['22203', '22201'],
  'crystal city': ['22202'],
  'pentagon city': ['22202'],
  'national landing': ['22202'],
  'downtown bethesda': ['20814'],
  'downtown silver spring': ['20910'],
  rosemont: ['22301'],
  kenwood: ['20816'],
  edgemoor: ['20814'],
};

const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/[.,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const STATE_WORDS: Record<string, string> = { dc: 'DC', 'd c': 'DC', md: 'MD', maryland: 'MD', va: 'VA', virginia: 'VA' };

export interface ResolvedLocation {
  zips: string[];
  cityIds: string[];
  label: string;
  /** Text the visitor typed that we could not match to a place. */
  unmatched: boolean;
}

/** "22201", "Arlington, VA", "Capitol Hill", "dc" → MLS filters. */
export function resolveLocation(raw: string): ResolvedLocation {
  const text = norm(raw);
  const empty = { zips: [], cityIds: [], label: '', unmatched: false };
  if (!text) return empty;

  const zips = raw.match(/\b\d{5}\b/g);
  if (zips) return { ...empty, zips: [...new Set(zips)], label: zips.join(', ') };

  const hood = NEIGHBORHOOD_ZIPS[text.replace(/ (dc|va|md|alexandria|arlington)$/, '')];
  if (hood) return { ...empty, zips: hood, label: raw.trim() };

  if (['dc', 'd c', 'washington', 'washington dc', 'washington d c', 'district of columbia'].includes(text)) {
    return { ...empty, cityIds: ['50057'], label: 'Washington, DC' };
  }

  // "Arlington va" → city "arlington", state "VA".
  const parts = text.split(' ');
  const last = parts[parts.length - 1];
  const state = parts.length > 1 ? STATE_WORDS[last] : undefined;
  const city = state ? parts.slice(0, -1).join(' ') : text;
  const matches = MLS_CITIES.filter(([name, st]) => name.toLowerCase() === city && (!state || st === state));
  if (matches.length) {
    // MLS_CITIES is sorted by listing count, so the busiest match comes first.
    const [name, st, id] = matches[0];
    return { ...empty, cityIds: [id], label: `${name}, ${st}` };
  }
  return { ...empty, unmatched: true, label: raw.trim() };
}

/** Full-MLS results link for these filters. */
export function mlsSearchUrl(query: MlsQuery): string {
  const p = new URLSearchParams();
  p.set('idxID', 'b004');
  p.set('pt', query.kind === 'rent' ? '2' : '1');
  const where = resolveLocation(query.location ?? '');
  if (where.cityIds.length) {
    p.set('ccz', 'city');
    where.cityIds.forEach((id) => p.append('city[]', id));
  }
  where.zips.forEach((z) => p.append('zipcode[]', z));
  const digits = (v?: string) => (v ?? '').replace(/[^0-9.]/g, '');
  if (digits(query.priceMin)) p.set('lp', digits(query.priceMin));
  if (digits(query.priceMax)) p.set('hp', digits(query.priceMax));
  if (digits(query.beds)) p.set('bd', digits(query.beds));
  if (digits(query.baths)) p.set('tb', digits(query.baths));
  if (query.homeType) SUBTYPES[query.homeType].forEach((s) => p.append('a_propSubType[]', s));
  p.set('srt', 'newest');
  return `${RESULTS}?${p.toString()}`;
}
