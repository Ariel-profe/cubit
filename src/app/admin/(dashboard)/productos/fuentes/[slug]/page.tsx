import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, SourceForm, Title } from "@/components";
import { ISource } from "@/interfaces";

interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:ISource = await getProductBySlug(slug, "source");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/fuentes");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Fuentes" href3={`/admin/productos/fuentes`} />
      <Title title={title} />
      <SourceForm product={product ?? {}} />
    </section>
  )
}
