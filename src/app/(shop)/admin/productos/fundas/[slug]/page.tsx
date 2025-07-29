import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, CoverForm, Title } from "@/components";
import { ICover } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product: ICover = await getProductBySlug(slug, "cover");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/fundas");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Fundas" href3={`/admin/productos/fundas`} />
      <Title title={title} />
      <CoverForm product={product ?? {}} />
    </section>
  )
}
