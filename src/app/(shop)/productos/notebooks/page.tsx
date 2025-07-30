// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validNotebookBrands, validNotebookGraphicMemories, validNotebookProcessors, validNotebookRamMemories, validNotebookTypes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    type?: string,
    processor?: string,
    memoryRam?: string,
    graphicCard?: string
  }>;
};

export default async function NotebooksPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const type = resolvedSearchParams.type || "";
  const processor = resolvedSearchParams.processor || "";
  const memoryRam = resolvedSearchParams.memoryRam || "";
  const graphicCard = resolvedSearchParams.graphicCard || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "notebook", filters: { brand, type, processor, memoryRam, graphicCard } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Notebooks" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validNotebookBrands], defaultLabel: "Todas" },
            { label: "Tipo", id: "type", options: [...validNotebookTypes], defaultLabel: "Todos" },
            { label: "Procesador", id: "processor", options: [...validNotebookProcessors], defaultLabel: "Todos" },
            { label: "Memoria RAM", id: "memoryRam", options: [...validNotebookRamMemories], defaultLabel: "Todas" },
            { label: "Tarjeta Gráfica", id: "graphicCard", options: [...validNotebookGraphicMemories], defaultLabel: "Todas" }
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