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

export const ProductsGrid = ({products}: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
        {
            products.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))
        }
    </div>
  )
}
