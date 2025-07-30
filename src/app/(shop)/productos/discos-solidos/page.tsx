// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validSsdBrands, validSsdCapacities, validSsdFormats, validSsdTypes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    format?: string,
    capacity?: string,
    type?: string,
  }>;
};

export default async function SsdPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const format = resolvedSearchParams.format || "";
  const capacity = resolvedSearchParams.capacity || "";
  const type = resolvedSearchParams.type || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "ssd", filters: { brand, capacity, type, format } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Discos Sólidos" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validSsdBrands], defaultLabel: "Todas" },
            { label: "Capacidad", id: "capacity", options: [...validSsdCapacities], defaultLabel: "Todas" },
            { label: "Tipo", id: "type", options: [...validSsdTypes], defaultLabel: "Todos" },
            { label: "Formato", id: "format", options: [...validSsdFormats], defaultLabel: "Todos" },
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