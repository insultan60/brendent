import { Globe, Mail, MapPin, Phone } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ContactType, DirectoryEntry } from '@/mocks/partnersData';

const contactIcons: Record<Exclude<ContactType, 'instagram'>, LucideIcon> = {
  phone: Phone,
  email: Mail,
  website: Globe,
  address: MapPin,
};

interface DirectoryCardProps {
  entry: DirectoryEntry;
}

export default function DirectoryCard({ entry }: DirectoryCardProps) {
  return (
    <article className="dir-card flex h-full flex-col rounded-[20px] border border-background-200 bg-background-50 p-6">
      <span className="inline-flex w-fit rounded-full bg-secondary-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-secondary-900">
        {entry.category}
      </span>
      <h3 className="mt-4 font-heading text-[19px] leading-snug text-foreground-950">{entry.name}</h3>

      <ul className="mt-4 flex flex-col gap-2.5 border-t border-background-200 pt-4">
        {entry.contacts.map((contact) => {
          const Icon = contactIcons[contact.type as Exclude<ContactType, 'instagram'>];
          const isLink = contact.type !== 'address';
          return (
            <li key={`${contact.type}-${contact.label}`}>
              {isLink ? (
                <a
                  href={contact.href}
                  target={contact.type === 'website' ? '_blank' : undefined}
                  rel={contact.type === 'website' ? 'noopener noreferrer nofollow' : undefined}
                  className="group/row flex items-start gap-2.5 text-[13px] text-foreground-600 transition-colors duration-300 hover:text-foreground-950"
                >
                  {Icon ? <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground-400" aria-hidden="true" /> : null}
                  <span className="break-words leading-tight">{contact.label}</span>
                </a>
              ) : (
                <span className="flex items-start gap-2.5 text-[13px] text-foreground-600">
                  {Icon ? <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground-400" aria-hidden="true" /> : null}
                  <span className="break-words leading-tight">{contact.label}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </article>
  );
}