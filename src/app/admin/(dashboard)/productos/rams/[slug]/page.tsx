import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, RamForm, Title } from "@/components";
import { IRam } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product: IRam = await getProductBySlug(slug, "ram");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/rams");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Memorias ram" href3={`/admin/productos/rams`} />
      <Title title={title} />
      <RamForm product={product ?? {}} />
    </section>
  )
}
