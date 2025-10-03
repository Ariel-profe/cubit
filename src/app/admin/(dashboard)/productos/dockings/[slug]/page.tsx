import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, DockingForm, Title } from "@/components";
import { IDocking } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:IDocking = await getProductBySlug(slug, "docking");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/dockings");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Dockings" href3={`/admin/productos/dockings`} />
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        {title}
      </Title>
      <DockingForm product={product ?? {}} />
    </section>
  )
}
