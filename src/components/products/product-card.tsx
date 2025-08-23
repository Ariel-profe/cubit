import Link from "next/link";

import { categoriesDictionary } from "@/utils/products/dictionary";

interface Props {
    product: {
        title: string;
        slug: string;
        category: string;
        price: number;
        images: string[];
    },
    index: number;
};

export const ProductCard = ({ product, index }: Props) => {

    return (
        <Link
            href={`/productos/${categoriesDictionary[product.category]}/${product.slug}`}
            className="relative flex flex-col my-6 shadow-sm border border-slate-900 rounded group overflow-hidden"
        >
            <div className="relative p-2.5 h-52 overflow-hidden rounded bg-clip-border">
                <img
                    src={product.images[0]}
                    alt={product.title}
                    className="h-full w-full object-cover rounded lg:group-hover:scale-105 transition-transform opacity-90 group-hover:opacity-100"
                />
            </div>
            <div className="flex justify-end px-1">
                <p className="text-tertiary text-xl font-semibold">
                    ${product.price.toLocaleString('es-AR')}
                </p>
            </div>
            <h5 className="lg:group-hover:text-white text-xl leading-normal font-semibold px-1 pb-1 capitalize">
                {product.title}
            </h5>
        </Link>
    )
}

// <Link
//     href={`/productos/${categoriesDictionary[product.category]}/${product.slug}`}
//     className="flex flex-col items-center justify-center group relative transition-colors border border-primary rounded group"
// >
//     <img
//         src={product.images[0]}
//         alt={product.title}
//         className="w-full max-h-52 object-cover aspect-square transition-all grayscale-25 group-hover:grayscale-0"
//         loading="lazy"
//     />

//     <div className="p-1 flex flex-col gap-2 max-w-xs text-center min-h-[85px]">
//         <h3 className="text-base group-hover:text-white capitalize flex-1 pt-2">{product.title}</h3>
//         <p className="text-base font-bold text-tertiary group-hover:text-tertiary/75">${product.price.toLocaleString('es-AR')}</p>
//     </div>
// </Link>