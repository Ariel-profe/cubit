import { IProduct } from "@/interface";
import Link from "next/link";
import { FC } from "react";

interface Props {
    product: IProduct;
    cardWidth: number;
    margin: number
}

export const ProductCard:FC<Props> = ({ product, cardWidth, margin }) => {
    return (
      <Link
        href={`/productos/${product.category}/${product.slug}`}
        className="relative shrink-0 cursor-pointer transition-transform hover:-translate-y-1"
        style={{
          width: cardWidth,
          marginRight: margin,
        }}
      >
        <img
          src={product.imgUrl}
          className="mb-3 h-[200px] w-full rounded-lg object-cover"
          alt={`An image for a fake blog post titled ${product.title}`}
        />
        <span className="rounded-md border-[1px] border-neutral-500 px-1.5 py-1 text-xs capitalize text-slate-300 tracking-wider">
          {product.category}
        </span>
        <p className="mt-1.5 text-lg font-medium uppercase">{product.title}</p>
        <p className="text-sm text-slate-500">{product.description}</p>
      </Link>
    );
  };