import { notFound } from "next/navigation";
import { ProductSlugView } from "@/components/product";
import { seedNotebooks } from "@/seed/seed";

interface Props {
    params: {
        slug: string;
    };
}


export default function ProductBySlugPage({ params }: Props) {

    const { slug } = params;
    const product = seedNotebooks.find((product) => product.slug === slug);

    if (!product) {
        notFound();
    };

    return (
        <ProductSlugView product={product} />
    )
}