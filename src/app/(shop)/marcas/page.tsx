import { Title } from "@/components";
import { CategoriesGrid } from "@/components/products/categories-grid";
import { brands } from "@/utils";

export default function BrandsPage() {
  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-32">
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Explora las marcas con las que trabajamos
      </Title>
      <CategoriesGrid categories={brands} isCategory={false} />
    </section>
  );
}