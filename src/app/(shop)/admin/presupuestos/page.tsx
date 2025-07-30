"use client";

import { useState } from "react";
import { Button, InvoiceForm, InvoicePreview, Title } from "@/components";
import { IoEyeOutline } from "react-icons/io5";

export default function BudgetPage() {

    const [showPreview, setShowPreview] = useState(false);

    if (showPreview) {
        return <InvoicePreview />;
    };

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20">
        <Title title="Presupuestos" subtitle="Crear y gestionar presupuestos." />

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
    </section>
  )
}
