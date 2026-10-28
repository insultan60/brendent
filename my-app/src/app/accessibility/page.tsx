import type { Metadata } from 'next';
import LegalPage from '@/views/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'BW Metro Properties is committed to making this website accessible to everyone.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Legal" title="Accessibility" updated="October 29, 2026">
      <p>
        BW Metro Properties wants everyone, including people with disabilities, to be able to use this website. We
        aim to follow the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA.
      </p>

      <h2>What we do</h2>
      <ul>
        <li>Pages can be navigated with a keyboard, and menus and dialogs can be closed with Escape.</li>
        <li>Images that carry meaning have text descriptions.</li>
        <li>Text is sized and coloured for readability, and the site works when zoomed.</li>
        <li>Forms have labels and explain what needs fixing when something is missing.</li>
      </ul>

      <h2>Property listings</h2>
      <p>
        Some listing details and the full MLS search are provided by third parties (Bright MLS and IDX Broker), and we
        do not control every part of them. If anything there is hard to use, we are happy to send you the details
        directly.
      </p>

      <h2>Need help or found a problem?</h2>
      <p>
        If any part of this site is difficult for you to use, please tell us and we will help, and work to fix it.
        Call <a href="tel:+12029984593">202-998-4593</a> or email{' '}
        <a href="mailto:brandon@bwmetroproperties.com">brandon@bwmetroproperties.com</a>.
      </p>

      <h2>Fair housing</h2>
      <p>
        BW Metro Properties is committed to the Fair Housing Act and equal housing opportunity. We do not discriminate
        on the basis of race, color, religion, sex, disability, familial status, national origin, or any other class
        protected by federal, state or local law.
      </p>
    </LegalPage>
  );
}
