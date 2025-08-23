import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, MouseForm, Title } from "@/components";
import { IMouse } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:IMouse = await getProductBySlug(slug, "mouse");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/mouses");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Mouses" href3={`/admin/productos/mouses`} />
      <Title title={title} />
      <MouseForm product={product ?? {}} />
    </section>
  )
}
