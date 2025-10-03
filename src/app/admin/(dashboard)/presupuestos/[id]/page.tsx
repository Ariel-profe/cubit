import { redirect } from "next/navigation";

import { getBudgetById } from "@/actions";
import { AdminBreadcrumb, Title, BudgetForm } from "@/components";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function BudgetAdminPage({ params }: Props) {

  const id = (await params).id;

  const budget = await getBudgetById(id);

  if (!budget && id !== 'new') {
    redirect("/admin/presupuestos");
  };

  const title = id === 'new' ? "Crear presupuesto" : "Editar presupuesto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Presupuestos" href2="/admin/presupuestos" title3={title} />
       <Title
        className="bg-gradient-to-tr from-blue-400 to-blue-600 bg-clip-text text-2xl lg:text-4xl font-medium text-transparent"
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        {title}
      </Title>
      <BudgetForm budget={budget ?? {}} />
    </section>
  )
}
