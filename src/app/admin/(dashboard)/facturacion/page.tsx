"use client";

import { useState } from "react";
import { AdminBreadcrumb, Button, ContentLayout, InvoiceForm, InvoicePreview, Title } from "@/components";
import { IoEyeOutline } from "react-icons/io5";

export default function InvoicePage() {

    const [showPreview, setShowPreview] = useState(false);

    if (showPreview) {
        return <InvoicePreview />;
    };

  return (
    <ContentLayout title="Facturación">
      <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Facturación' />

        <div className="flex justify-end mt-2">
            <Button
                className="mb-4 w-fit"
                onClick={() => setShowPreview(true)}
                >
                <IoEyeOutline />
                Vista previa
            </Button>
        </div>

        <InvoiceForm />
    </ContentLayout>
  )
}
