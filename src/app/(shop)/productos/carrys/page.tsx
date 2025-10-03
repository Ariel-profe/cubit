// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validCarryBrands, validCarryConnections, validCarryTypes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    type?: string,
    connectionType?: string,
  }>;
};

export default async function CarryPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const type = resolvedSearchParams.type || "";
  const connectionType = resolvedSearchParams.connectionType || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "carry", filters: { brand, type, connectionType } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
       <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Los mejores carrys del mercado
      </Title>

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validCarryBrands], defaultLabel: "Todas" },
            { label: "Tipo", id: "type", options: [...validCarryTypes], defaultLabel: "Todos" },
            { label: "Tipo de Conexión", id: "connectionType", options: [...validCarryConnections], defaultLabel: "Todos" },
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