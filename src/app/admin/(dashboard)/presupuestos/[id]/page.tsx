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
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Presupuestos" href2="/admin/presupuestos" title3={title} href3={`/admin/presupuestos/${id}`} />
      <Title title={title} />
      <BudgetForm budget={budget ?? {}} />
    </section>
  )
}
