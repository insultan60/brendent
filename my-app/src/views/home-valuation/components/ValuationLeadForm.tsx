import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { valuationHero } from '@/mocks/valuationData';

export const VALUATION_ENDPOINT = 'https://readdy.ai/api/form/daklkvkov550s8tcob1g';

/** Source "Home Valuation" lead form: the home address, then how to reach the owner. */
export default function ValuationLeadForm() {
  return (
    <AddressLeadForm
      endpoint={VALUATION_ENDPOINT}
      id="home-valuation-form"
      addressLabel={valuationHero.addressLabel}
      addressPlaceholder={valuationHero.addressPlaceholder}
      cta={valuationHero.cta}
      note="No obligation. Get an accurate value before you decide to list."
      successTitle="Thanks, we've got your request."
      successText="Brandon will follow up with an accurate value range and a plan for your home."
    />
  );
}
