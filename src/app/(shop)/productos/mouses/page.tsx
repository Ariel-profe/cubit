// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validMouseBrands, validMouseButtons, validMouseConnections, validMouseOpts } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    rgbLighting?: string,
    buttons?: string,
    connectionType?: string[],
  }>;
};

export default async function MousePage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const rgbLighting = resolvedSearchParams.rgbLighting || "";
  const buttons = resolvedSearchParams.buttons || "";
  const connectionType = Array.isArray(resolvedSearchParams.connectionType)
  ? resolvedSearchParams.connectionType.join(",")
  : resolvedSearchParams.connectionType || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "mouse", filters: { brand, rgbLighting, buttons, connectionType } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Mouses" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validMouseBrands], defaultLabel: "Todas" },
            { label: "Tipo de Conexión", id: "connectionType", options: [...validMouseConnections], defaultLabel: "Todos" },
            { label: "Botones", id: "buttons", options: [...validMouseButtons], defaultLabel: "Todos" },
            { label: "Iluminación RGB", id: "rgbLighting", options: [...validMouseOpts], defaultLabel: "Todos" },
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