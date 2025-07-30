import { BasicDetails, ContactDetails, ItemList, TaxAndTotals } from "@/components";

export const InvoiceForm = () => {
  return (
    <div className="space-y-6">
        <BasicDetails />
        <ContactDetails />
        <ItemList />
        <TaxAndTotals />
    </div>
  )
}
