import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { valuationHero } from '@/mocks/valuationData';
import { idxHomeValuationUrl } from '@/views/properties/utils';

/** "Home Valuation" lead form: the home address here, then IDX Broker's Home
 *  Valuation form (address pre-filled) for the details and contact info. */
export default function ValuationLeadForm() {
  return (
    <AddressLeadForm
      handoffUrl={idxHomeValuationUrl}
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
