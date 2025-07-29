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
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,2fr))] sm:grid-cols-[repeat(auto-fill,minmax(250px,2fr))] gap-3 fadeIn">
      {
        products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))
      }
    </div>
  )
}
