// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validBackpackBrands, validBackpackColors, validBackpackNotebookSizes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    notebookSize?: string,
    color?: string,
  }>;
};

export default async function BackpackPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const notebookSize = resolvedSearchParams.notebookSize || "";
  const color = resolvedSearchParams.color || "";  

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "backpack", filters: { brand, notebookSize, color } });

  return (
    <div className="container mx-auto px-3">
      <Title title="Mochilas" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validBackpackBrands], defaultLabel: "Todas" },
            { label: "Tamaño de Notebook", id: "notebookSize", options: [...validBackpackNotebookSizes], defaultLabel: "Todos" },
            { label: "Color", id: "color", options: [...validBackpackColors], defaultLabel: "Todos" },
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

    </div>
  )
}