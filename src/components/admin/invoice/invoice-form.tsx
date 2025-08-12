import { EmissionData1, EmissionData3, TaxAndTotals, TypeOfReceipt, EmissionData2 } from "@/components";

export const InvoiceForm = () => {
  return (
    <div className="space-y-6">
      <TypeOfReceipt />
      <EmissionData1 />
      <EmissionData2 />
      <EmissionData3 />
      <TaxAndTotals />
    </div>
  )
}
