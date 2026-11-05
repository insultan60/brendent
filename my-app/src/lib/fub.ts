/**
 * Follow Up Boss API (FUB_API_KEY: FUB > Admin > API). Server-side only.
 *
 * Used by /api/lead to create leads, and by the dashboard's Leads section to
 * show what the website has sent in.
 */

export const FUB_SOURCE = 'bwmetroproperties.com';

/** Brandon's FUB address, for "open in FUB" links. */
export const FUB_APP = 'https://bwmetroproperties.followupboss.com';

export function fubFetch(key: string, path: string, init: RequestInit = {}) {
  return fetch(`https://api.followupboss.com/v1/${path}`, {
    ...init,
    headers: {
      Authorization: `Basic ${Buffer.from(`${key}:`).toString('base64')}`,
      'Content-Type': 'application/json',
      'X-System': 'BWMetroPropertiesWebsite',
    },
  });
}

export interface WebsiteLead {
  id: number;
  name: string;
  created: string;
  stage: string;
  contacted: boolean;
  tags: string[];
  email: string;
  phone: string;
}

export type WebsiteLeads =
  | { state: 'off' }
  | { state: 'error'; message: string }
  | { state: 'live'; total: number; leads: WebsiteLead[] };

/** The most recent leads the website created in FUB, newest first. */
export async function getWebsiteLeads(limit = 50): Promise<WebsiteLeads> {
  const key = process.env.FUB_API_KEY;
  if (!key) return { state: 'off' };

  try {
    const response = await fubFetch(
      key,
      `people?source=${encodeURIComponent(FUB_SOURCE)}&sort=-created&limit=${limit}` +
        '&fields=id,name,created,stage,contacted,tags,emails,phones',
      { next: { revalidate: 300 } } as RequestInit,
    );
    if (!response.ok) return { state: 'error', message: `Follow Up Boss replied ${response.status}.` };

    const body = (await response.json()) as {
      _metadata?: { total?: number };
      people?: {
        id: number;
        name?: string;
        created: string;
        stage?: string;
        contacted?: number | boolean;
        tags?: string[];
        emails?: { value: string }[];
        phones?: { value: string }[];
      }[];
    };
    const leads = (body.people ?? []).map((person) => ({
      id: person.id,
      name: person.name || 'No name',
      created: person.created,
      stage: person.stage || '',
      contacted: Boolean(person.contacted),
      tags: person.tags ?? [],
      email: person.emails?.[0]?.value ?? '',
      phone: person.phones?.[0]?.value ?? '',
    }));
    return { state: 'live', total: body._metadata?.total ?? leads.length, leads };
  } catch {
    return { state: 'error', message: 'Could not reach Follow Up Boss.' };
  }
}
