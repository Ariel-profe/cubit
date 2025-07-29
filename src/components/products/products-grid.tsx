import { ProductCard } from "./product-card";

interface Props {
  products: {
    title: string;
    slug: string;
    category: string;
    price: number;
    images: string[];
  }[];
};

export const ProductsGrid = ({ products }: Props) => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 fadeIn">
      {
        products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))
      }
    </div>
  )
}
