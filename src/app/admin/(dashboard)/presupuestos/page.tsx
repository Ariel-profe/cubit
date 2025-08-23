"use client";

import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

import { Button, BudgetForm, BudgetPreview, ContentLayout, AdminBreadcrumb } from "@/components";

export default function BudgetPage() {

    const [showPreview, setShowPreview] = useState<boolean>(false);

    if (showPreview) {
        return <BudgetPreview onBack={() => setShowPreview(false)} />;
    };

  return (
    <ContentLayout title="Presupuestos">
       <AdminBreadcrumb title1='Panel' href1='/admin/dashboard' title2='Presupuestos' />

        <div className="flex justify-end mt-2">
            <Button
                className="mb-4 w-fit"
                onClick={() => setShowPreview(true)}
                >
                <IoEyeOutline />
                Vista previa
            </Button>
        </div>

        <BudgetForm />
    </ContentLayout>
  )
}
