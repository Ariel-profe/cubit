import { Title } from "@/components";
import { CategoriesGrid } from "@/components/products/categories-grid";
import { categories } from "@/utils/products/categories";

export default function ProductsPage() {
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-32">
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Explora los productos que tenemos para vos
      </Title>
      <CategoriesGrid categories={categories} />
    </section>
  );
}