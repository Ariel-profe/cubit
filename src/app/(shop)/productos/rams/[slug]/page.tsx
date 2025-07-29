// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { notFound } from "next/navigation";
import { getProductBySlug } from "@/actions";
import { ProductSlugView } from "@/components";

interface Props {  
  params: Promise<{ slug: string }>  
} 

export default async function ProductBySlugPage({ params }: Props) {

    const { slug } = await params;
    const product = await getProductBySlug(slug, "ram");    

    if (!product) {
        notFound();
    };

    return (
        <ProductSlugView product={product} />
    )
}