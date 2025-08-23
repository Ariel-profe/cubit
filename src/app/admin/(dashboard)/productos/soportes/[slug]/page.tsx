import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, SupportForm, Title } from "@/components";
import { ISupport } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product: ISupport = await getProductBySlug(slug, "support");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/soportes");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Soportes" href3={`/admin/productos/soportes`} />
      <Title title={title} />
      <SupportForm product={product ?? {}} />
    </section>
  )
}
