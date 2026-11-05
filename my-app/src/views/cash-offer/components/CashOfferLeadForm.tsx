import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { cashOfferHero } from '@/mocks/cashOfferData';

/** Source "Cash Offer" lead form: the home address, then how to reach the owner. */
export default function CashOfferLeadForm() {
  return (
    <AddressLeadForm
      endpoint="/api/lead?form=cash-offer"
      id="cash-offer-form"
      addressLabel={cashOfferHero.addressLabel}
      addressPlaceholder={cashOfferHero.addressPlaceholder}
      cta={cashOfferHero.cta}
      note="No obligation. A fair, all-cash offer with zero pressure to accept."
      successTitle="Thanks, request received."
      successText="Our team is preparing your all-cash offer for the address you shared, and Brandon will be in touch."
    />
  );
}
