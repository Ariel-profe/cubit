import { ContentLayout } from "@/components";
import { ArcaInvoiceForm } from "@/components/admin/invoice/arca-invoice-form";

export default function InvoicePage() {
  return (
    <ContentLayout title="Crear factura">

        <ArcaInvoiceForm />

    </ContentLayout>
  )
}
