// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { NotebookFilters, Pagination, ProductsGrid, Title } from "@/components";

interface Props {
  searchParams?: Promise<{ page?: string, type?: string, processor?: string, memoryRam?: string, graphicCard?: string }>;
};

export default async function NotebooksPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const type = resolvedSearchParams.type || "";
  const processor = resolvedSearchParams.processor || "";
  const memoryRam = resolvedSearchParams.memoryRam || "";
  const graphicCard = resolvedSearchParams.graphicCard || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "notebook", filters: { type, processor, memoryRam, graphicCard } });


  return (
    <div className="container mx-auto px-3">
      <Title title="Notebooks" />

      <div className="flex flex-col lg:flex-row gap-4">
        <NotebookFilters />
        {
          products.length === 0 ? (
            <p className="flex items-center justify-center text-lg w-full">No se encontraron productos.</p>
          ) : (
            <div className="w-full lg:w-3/4">
              <ProductsGrid products={products} />
              <Pagination totalPages={totalPages} />
            </div>
          )
        }
      </div>

    </div>
  )
}