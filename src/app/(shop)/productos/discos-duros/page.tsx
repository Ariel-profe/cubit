// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validHddBrands, validHddCapacities, validHddThickness } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    capacity?: string,
    thickness?: string,
  }>;
};

export default async function HddPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const capacity = resolvedSearchParams.capacity || "";
  const thickness = resolvedSearchParams.thickness || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "hdd", filters: { brand, capacity, thickness } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
       <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Los mejores discos duros del mercado
      </Title>

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validHddBrands], defaultLabel: "Todas" },
            { label: "Capacidad", id: "capacity", options: [...validHddCapacities], defaultLabel: "Todas" },
            { label: "Espesor", id: "thickness", options: [...validHddThickness], defaultLabel: "Todos" },
          ]}
        />
        {
          products.length === 0 ? (
            <p className="flex items-center justify-center text-lg text-center w-full lg:w-5/6">No se encontraron productos.</p>
          ) : (
            <div className="w-full lg:w-5/6">
              <ProductsGrid products={products} />
              <Pagination totalPages={totalPages} />
            </div>
          )
        }
      </div>

    </section>
  )
}