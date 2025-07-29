import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, VideoCardForm, Title } from "@/components";
import { IVideoCard } from "@/interfaces";


interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product:IVideoCard = await getProductBySlug(slug, "videoCard");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/placas-de-video");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Placas de video" href3={`/admin/productos/placas-de-video`} />
      <Title title={title} />
      <VideoCardForm product={product ?? {}} />
    </section>
  )
}
