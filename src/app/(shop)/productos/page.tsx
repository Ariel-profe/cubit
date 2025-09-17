import { CategoriesGrid } from "@/components/products/categories-grid";
import { categories } from "@/utils/products/categories";

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-32">
      <CategoriesGrid categories={categories} />
    </section>
  );
}