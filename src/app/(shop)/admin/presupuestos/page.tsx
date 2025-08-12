"use client";

import { useState } from "react";
import { Button, BudgetForm, BudgetPreview, Title } from "@/components";
import { IoEyeOutline } from "react-icons/io5";

export default function BudgetPage() {

    const [showPreview, setShowPreview] = useState<boolean>(false);

    if (showPreview) {
        return <BudgetPreview onBack={() => setShowPreview(false)} />;
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

        <BudgetForm />
    </section>
  )
}
