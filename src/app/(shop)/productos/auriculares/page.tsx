// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validHeadBrands } from "@/utils";
import { validHeadConnection, validHeadTypes, validHeadOpts, validHeadColors } from '../../../../utils/admin/products/headphonesValidations';

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    type?: string,
    connectionType?: string,
    microphone?: string,
    ledLighting?: string,
    gamer?: string,
    colors?: string[],
  }>;
};

export default async function HeadphonePage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const type = resolvedSearchParams.type || "";
  const connectionType = resolvedSearchParams.connectionType || "";
  const microphone = resolvedSearchParams.microphone || "";
  const ledLighting = resolvedSearchParams.ledLighting || "";
  const gamer = resolvedSearchParams.gamer || "";
  
  const colors = Array.isArray(resolvedSearchParams.colors)
  ? resolvedSearchParams.colors.join(",")
  : resolvedSearchParams.colors || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "headphone", filters: { brand, type, connectionType, microphone, colors, ledLighting, gamer } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Auriculares" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validHeadBrands], defaultLabel: "Todas" },
            { label: "Tipo", id: "type", options: [...validHeadTypes], defaultLabel: "Todos" },
            { label: "Conexión", id: "connectionType", options: [...validHeadConnection], defaultLabel: "Todas" },
            { label: "Micrófono", id: "microphone", options: [...validHeadOpts], defaultLabel: "Todos" },
            { label: "Color", id: "colors", options: [...validHeadColors], defaultLabel: "Todos" },
            { label: "Iluminación LED", id: "ledLighting", options: [...validHeadOpts], defaultLabel: "Todos" },
            { label: "Gamer", id: "gamer", options: [...validHeadOpts], defaultLabel: "Todos" },
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