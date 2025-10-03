import { redirect } from "next/navigation";

import { getProductBySlug } from "@/actions";
import { AdminBreadcrumb, SsdForm, Title } from "@/components";
import { ISsd } from "@/interfaces";

interface Props {
  params: Promise<{ slug: string }>
};

export default async function ProductAdminPage({ params }: Props) {

  const slug = (await params).slug;

  const product: ISsd = await getProductBySlug(slug, "ssd");

  if (!product && slug !== 'new') {
    redirect("/admin/productos/discos-solidos");
  };

  const title = slug === 'new' ? "Crear producto" : "Editar producto";

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <AdminBreadcrumb title1="Administración" href1="/admin" title2="Productos" href2="/admin/productos" title3="Discos sólidos" href3={`/admin/productos/discos-solidos`} />
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        {title}
      </Title>
      <SsdForm product={product ?? {}} />
    </section>
  )
}
