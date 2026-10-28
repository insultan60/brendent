import AddressLeadForm from '@/components/feature/AddressLeadForm';
import { sellHero } from '@/mocks/sellersData';

/** Source "Sell your home" lead form: the property address, then how to reach the owner. */
export default function SellLeadForm() {
  return (
    <AddressLeadForm
      endpoint="https://readdy.ai/api/form/daklagh2o72dhfjvq6c0"
      id="sell-your-home-form"
      addressLabel={sellHero.addressLabel}
      addressPlaceholder={sellHero.addressPlaceholder}
      cta={sellHero.cta}
      note="No obligation. Get an accurate value and a clear plan before you list."
      successTitle="Thanks, we've got your request."
      successText="Brandon will follow up with a tailored plan and an accurate value for your home."
    />
  );
}
