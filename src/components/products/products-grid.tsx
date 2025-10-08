import { ProductCard } from "@/components";

interface Props {
  products: {
    title: string;
    slug: string;
    category: string;
    price: number;
    images: string[];
    ProductImage: { url: string }[];
  }[];
};

export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 fadeIn mt-10">
      {
        products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))
      }
    </div>
  )
}
