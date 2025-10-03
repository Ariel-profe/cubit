// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validRamBrands, validRamCapacity, validRamSpeeds, validRamTypes, validVCBrands, validVCConnection, validVCConnector } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    type?: string,
    capacity?: string,
    speed?: string
  }>;
};

export default async function MemoryRamPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const type = resolvedSearchParams.type || "";
  const capacity = resolvedSearchParams.capacity || "";
  const speed = resolvedSearchParams.speed || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "ram", filters: { brand, type, capacity, speed } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
       <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Las mejores memorias ram del mercado
      </Title>

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validRamBrands], defaultLabel: "Todas" },
            { label: "Tipo", id: "type", options: [...validRamTypes], defaultLabel: "Todos" },
            { label: "Capacidad", id: "capacity", options: [...validRamCapacity], defaultLabel: "Todas" },
            { label: "Velocidad", id: "speed", options: [...validRamSpeeds], defaultLabel: "Todas" },
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