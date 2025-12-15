"use client";

import { useState } from "react";
import { AdminBreadcrumb, Button, ContentLayout, InvoiceForm, InvoicePreview } from "@/components";
import { IoEyeOutline } from "react-icons/io5";
import Link from "next/link";

export default function InvoicePage() {

    const [showPreview, setShowPreview] = useState(false);

    if (showPreview) {
        return <InvoicePreview />;
    };

  return (
    <ContentLayout title="Facturación">
      <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Facturación' />

        <div className="flex justify-end mt-2">
            <Link
                className="mb-4 w-fit"
                href="/admin/facturacion/new"
                >
                Crear
            </Link>
        </div>

        {/* <InvoiceForm /> */}
    </ContentLayout>
  )
}
