import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, PadForm, Title } from "@/components";
import { IPad } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:IPad = await getProductBySlug(slug, "pad");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/pads");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Pads" href3={`/admin/productos/pads`} />
      <Title title={title} />
      <PadForm product={product ?? {}} />
    </section>
  )
}
