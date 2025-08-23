import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, CoolerpadForm, Title } from "@/components";
import { ICoolerpad } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:ICoolerpad = await getProductBySlug(slug, "coolerpad");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/cooler-pads");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Cooler pads" href3={`/admin/productos/cooler-pads`} />
      <Title title={title} />
      <CoolerpadForm product={product ?? {}} />
    </section>
  )
}
