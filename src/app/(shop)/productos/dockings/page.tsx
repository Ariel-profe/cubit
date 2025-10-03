// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validDockingBrands, validDockingComp, validDockingConnections } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    compatibility?: string[],
    connectionType?: string[],
  }>;
};

export default async function DockingPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";

  const compatibility = Array.isArray(resolvedSearchParams.compatibility)
  ? resolvedSearchParams.compatibility.join(",")
  : resolvedSearchParams.compatibility || "";

  const connectionType = Array.isArray(resolvedSearchParams.connectionType)
  ? resolvedSearchParams.connectionType.join(",")
  : resolvedSearchParams.connectionType || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "docking", filters: { brand, compatibility, connectionType } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
       <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Los mejores dockings del mercado
      </Title>

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validDockingBrands], defaultLabel: "Todas" },
            { label: "Compatibilidad", id: "compatibility", options: [...validDockingComp], defaultLabel: "Todas" },
            { label: "Tipo de conexión", id: "connectionType", options: [...validDockingConnections], defaultLabel: "Todos" }
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