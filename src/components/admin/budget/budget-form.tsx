import { BasicDetails, ContactDetails, ItemList } from "@/components";

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
