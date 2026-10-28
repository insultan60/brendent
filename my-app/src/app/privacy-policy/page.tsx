import type { Metadata } from 'next';
import LegalPage from '@/views/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How BW Metro Properties collects, uses and protects the information you share on this website.',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="October 29, 2026">
      <p>
        BW Metro Properties (Brandon Wilson, Realtor, with Pearson Smith Realty) respects your privacy. This policy
        explains what information this website collects, how it is used, and the choices you have.
      </p>

      <h2>Information you give us</h2>
      <p>When you fill in a form on this site, such as a contact request, home valuation, cash offer request, rental
        inquiry, guide download or newsletter sign-up, we collect what you enter. That can include:</p>
      <ul>
        <li>your name, email address and phone number;</li>
        <li>a property address;</li>
        <li>what you are looking for, such as price range, locations and timeline;</li>
        <li>any message you write to us.</li>
      </ul>

      <h2>Information collected automatically</h2>
      <p>
        Like most websites, this site may use cookies and analytics tools, including Google Analytics, to understand
        how visitors use it: pages viewed, time on site, device and approximate location. This information does not
        identify you by name. You can block or delete cookies in your browser settings.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To reply to you and provide the real estate services you ask about.</li>
        <li>To prepare home valuations, offers, market reports and property searches you request.</li>
        <li>To send updates you have signed up for. Every email includes a way to unsubscribe.</li>
        <li>To improve this website.</li>
      </ul>

      <h2>How we share it</h2>
      <p>
        We do not sell your personal information. We share it only with service providers that help us run this
        website and our business, such as our website form and hosting providers, our analytics provider and IDX
        Broker, which powers our property search. We may also share it when the law requires, or with your
        permission, for example with a lender or other professional you ask us to connect you with.
      </p>

      <h2>Property listings</h2>
      <p>
        Listing information on this site is provided by Bright MLS through IDX Broker. It is for consumers&rsquo;
        personal, non-commercial use, is deemed reliable but not guaranteed, and should be independently verified.
        When you use the full MLS search, IDX Broker&rsquo;s own privacy terms also apply.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the personal information you have given us, or to stop contacting
        you, at any time by emailing <a href="mailto:brandon@bwmetroproperties.com">brandon@bwmetroproperties.com</a>.
      </p>

      <h2>Children</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect their information.</p>

      <h2>Changes to this policy</h2>
      <p>If we change this policy, we will post the new version on this page with a new &ldquo;last updated&rdquo; date.</p>

      <h2>Contact us</h2>
      <p>
        BW Metro Properties, Brandon Wilson
        <br />
        8315 Lee Hwy, Fairfax, VA 22031
        <br />
        <a href="tel:+12029984593">202-998-4593</a> &middot;{' '}
        <a href="mailto:brandon@bwmetroproperties.com">brandon@bwmetroproperties.com</a>
      </p>
    </LegalPage>
  );
}
