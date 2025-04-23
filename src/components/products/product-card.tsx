"use client";

import { useState } from "react";
import Link from "next/link";
import { SpotlightCard } from "@/components/ui/spotlight-card";

interface Props {
    product: {
        title: string;
        slug: string;
        category: string;
        price: number;
        images: string[];
    }
};

export const ProductCard = ({ product }: Props) => {

    const [displayImage, setDisplayImage] = useState(product.images[0]);

    return (
        <SpotlightCard>
            <Link href={`/products/${product.category}/${product.slug}`} className="flex flex-col items-center justify-center pb-1 group">
                <img
                    src={`/products/${displayImage}`}
                    alt={product.title}
                    className="w-full max-h-80 object-cover aspect-square "
                    loading="lazy"
                    onMouseEnter={() => setDisplayImage(product.images[1])}
                    onMouseLeave={() => setDisplayImage(product.images[0])}
                />

                <div className="px-4 flex flex-col gap-2 max-w-xs text-center">
                    <h3 className="text-lg md:text-xl text-white group-hover:text-slate-300">{product.title}</h3>
                    <p className="text-base md:text-lg font-bold text-secondary">${product.price.toLocaleString('es-AR')}</p>
                </div>
            </Link>

        </SpotlightCard>
    )
}
