import { BasicDetails, ContactDetails, ItemList, TaxAndTotals } from "@/components";

export const BudgetForm = () => {
  return (
    <div className="space-y-6 fadeIn">
      <BasicDetails />
      <ContactDetails />
      <ItemList />
      {/* <TaxAndTotals /> */}
    </div>
  )
}
