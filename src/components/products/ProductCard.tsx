import { useState } from "react";
import type { NotebooksWithImages } from "@/interfaces"
import { SpotlightCard } from "../shared/SpotlightCard";

interface Props {
  product: NotebooksWithImages;
}

export const ProductCard = ({ product }: Props) => {

  const images = product.images.split(',').map((img) => {
    return img.startsWith('http')
      ? img
      : `${import.meta.env.PUBLIC_URL}/images/products/${img}`;
  });

  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <SpotlightCard>
      <a href={`/productos/${product.category}/${product.slug}`} className="grid place-items-center text-center px-2">
        <img
          src={currentImage}
          alt={product.title}
          className="h-[230px]"
          onMouseEnter={() => setCurrentImage(images[1] ?? images[0])}
          onMouseLeave={() => setCurrentImage(images[0])}
        />
        <div className="pb-5">
          <h4>{product.title}</h4>
          <p className="text-slate-400">${product.price}</p>
        </div>
      </a>
    </SpotlightCard>
  );
};
