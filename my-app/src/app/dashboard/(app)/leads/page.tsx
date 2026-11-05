import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { FUB_APP, getWebsiteLeads } from '@/lib/fub';
import { SectionHead, Shell } from '@/views/dashboard/components/Chrome';

export const metadata: Metadata = { title: 'Leads | BW Metro Properties' };
export const revalidate = 300;

const dateFormat = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'America/New_York',
});

/** Tags the site adds that say little on their own in this table. */
const QUIET_TAGS = new Set(['Website']);

/**
 * Leads the website's forms created in Follow Up Boss. Read straight from FUB,
 * so this is proof each form is landing, not a copy that could drift from it.
 */
export default async function LeadsSection() {
  const result = await getWebsiteLeads();

  return (
    <Shell>
      <SectionHead
        title="Leads"
        lead="Everyone the website's forms have sent to Follow Up Boss, newest first. Refreshes every five minutes; open a lead to work it in FUB."
        days={28}
        basePath="/dashboard/leads"
        showRange={false}
      />

      {result.state === 'off' ? (
        <p className="mt-6 rounded-2xl border border-background-300 bg-background-50 p-6 text-[13.5px] text-foreground-700">
          Follow Up Boss is not connected. Set <code>FUB_API_KEY</code> in the host&rsquo;s environment settings and
          redeploy.
        </p>
      ) : result.state === 'error' ? (
        <p className="mt-6 rounded-2xl border border-background-300 bg-background-50 p-6 text-[13.5px] text-foreground-700">
          {result.message} The forms still send leads; only this list could not load.
        </p>
      ) : (
        <div className="mt-6 overflow-hidden rounded-2xl border border-background-300 bg-background-50">
          <div className="flex items-baseline justify-between gap-4 border-b border-background-300 px-5 py-4">
            <h2 className="font-heading text-[19px] leading-tight text-foreground-950">Website leads</h2>
            <p className="text-[12.5px] text-foreground-500">
              {result.total} total{result.total > result.leads.length ? `, latest ${result.leads.length} shown` : ''}
            </p>
          </div>

          {result.leads.length === 0 ? (
            <p className="px-5 py-10 text-center text-[13.5px] text-foreground-600">
              No website leads yet. The first form someone fills in will appear here within five minutes.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[13px]">
                <thead className="text-[11px] uppercase tracking-[0.12em] text-foreground-500">
                  <tr>
                    <th className="px-5 py-3 font-medium">Received</th>
                    <th className="px-5 py-3 font-medium">Name</th>
                    <th className="px-5 py-3 font-medium">Form</th>
                    <th className="px-5 py-3 font-medium">Stage</th>
                    <th className="px-5 py-3 font-medium">Contacted</th>
                    <th className="px-5 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {result.leads.map((lead) => {
                    const form = lead.tags.find((tag) => tag.startsWith('Form: '))?.slice(6) ?? '';
                    const tags = lead.tags.filter((tag) => !tag.startsWith('Form: ') && !QUIET_TAGS.has(tag));
                    return (
                      <tr key={lead.id} className="border-t border-background-200 align-top">
                        <td className="whitespace-nowrap px-5 py-3 tabular-nums text-foreground-600">
                          {dateFormat.format(new Date(lead.created))}
                        </td>
                        <td className="px-5 py-3">
                          <p className="font-medium text-foreground-950">{lead.name}</p>
                          <p className="mt-0.5 text-[12px] text-foreground-500">
                            {[lead.email, lead.phone].filter(Boolean).join(' · ')}
                          </p>
                          {tags.length ? (
                            <p className="mt-1.5 flex flex-wrap gap-1">
                              {tags.map((tag) => (
                                <span key={tag} className="rounded-full bg-background-200 px-2 py-0.5 text-[11px] text-foreground-700">
                                  {tag}
                                </span>
                              ))}
                            </p>
                          ) : null}
                        </td>
                        <td className="px-5 py-3 text-foreground-700">{form}</td>
                        <td className="px-5 py-3 text-foreground-700">{lead.stage}</td>
                        <td className="px-5 py-3 text-foreground-700">{lead.contacted ? 'Yes' : 'Not yet'}</td>
                        <td className="px-5 py-3 text-right">
                          <a
                            href={`${FUB_APP}/2/people/view/${lead.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[12.5px] font-medium text-foreground-900 hover:text-primary-600"
                          >
                            Open in FUB
                            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </Shell>
  );
}
