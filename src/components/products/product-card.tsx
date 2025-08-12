"use client";

import { useState } from "react";
import Link from "next/link";

import { GlowingEffect } from '@/components';
import { categoriesDictionary } from "@/utils/products/dictionary";

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

        <Link
            href={`/productos/${ categoriesDictionary[product.category] }/${product.slug}`}
            className="flex flex-col items-center justify-center pb-1 group relative transition-colors bg-primary/20"
        >
            <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
            />
            <img
                src={displayImage ? displayImage : '/imgs/placeholder.svg'}
                alt={product.title}
                className="w-full max-h-80 object-contain aspect-square"
                loading="lazy"
                onMouseEnter={() => setDisplayImage(product.images[1])}
                onMouseLeave={() => setDisplayImage(product.images[0])}
            />

            <div className="px-4 flex flex-col gap-2 max-w-xs text-center">
                <h3 className="text-lg md:text-xl group-hover:text-white capitalize">{product.title}</h3>
                <p className="text-base md:text-lg font-bold text-tertiary group-hover:text-tertiary/75">${product.price.toLocaleString('es-AR')}</p>
            </div>
        </Link>


    )
}
