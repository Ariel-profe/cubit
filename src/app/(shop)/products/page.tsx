import { CategoriesGrid } from "@/components/products/categories-grid";
import { categories } from "@/utils/products/categories";

export default function ProductsPage() {
  return (
    <div>
      <CategoriesGrid categories={categories} />
    </div>
  );
}