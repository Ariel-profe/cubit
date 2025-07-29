// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import { ProductSlugView } from "@/components";
import { Metadata } from "next";

interface Props {  
  params: Promise<{ slug: string }>  
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {

    const slug = (await params).slug;
    const product:any = await getProductBySlug(slug, "notebook");
    let pageTitle =  product.title.replace(/(^\w|\s\w)/g, (m:any) => m.toUpperCase());

    return {
        title: pageTitle ?? "Producto no encontrado",
        description: product.title + " - " + product.category || "Descripción no disponible",
        openGraph: {
            title: product.title ?? "Producto no encontrado",
            description: product.title + " - " + product.category || "Descripción no disponible" ,
            images: [`/products/${product.images[0]}`],
        }
    }
}

export default async function ProductBySlugPage({ params }: Props) {

    const { slug } = await params;
    const product = await getProductBySlug(slug, "notebook");      

    if (!product) {
        notFound();
    };

    return (
        <ProductSlugView product={product} />
    )
}