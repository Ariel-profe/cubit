// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validNetworkBrands, validNetworkConnectionTypes, validNetworkConnectionUsb } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    connectionType?: string,
    usbConnection?: string,
  }>;
};

export default async function NetworkCardPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const connectionType = resolvedSearchParams.connectionType || "";
  const usbConnection = resolvedSearchParams.usbConnection || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "networkCard", filters: { brand, connectionType, usbConnection } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Placas de Red" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validNetworkBrands], defaultLabel: "Todas" },
            { label: "Tipo de Conexión", id: "connectionType", options: [...validNetworkConnectionTypes], defaultLabel: "Todos" },
            { label: "Conexión USB", id: "usbConnection", options: [...validNetworkConnectionUsb], defaultLabel: "Todos" },
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