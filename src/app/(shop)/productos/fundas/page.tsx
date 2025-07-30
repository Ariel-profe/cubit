// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validCoverBrands, validCoverColors, validCoverMaterial, validCoverNotebookSizes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    notebookSize?: string,
    materials?: string,
    colors?: string[],
  }>;
};

export default async function CoverPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const notebookSize = resolvedSearchParams.notebookSize || "";
  const materials = resolvedSearchParams.materials || "";

  const colors = Array.isArray(resolvedSearchParams.colors)
  ? resolvedSearchParams.colors.join(",")
  : resolvedSearchParams.colors || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "cover", filters: { brand, notebookSize, materials, colors } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Fundas" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validCoverBrands], defaultLabel: "Todas" },
            { label: "Tamaño de Notebook", id: "notebookSize", options: [...validCoverNotebookSizes], defaultLabel: "Todos" },
            { label: "Materiales", id: "materials", options: [...validCoverMaterial], defaultLabel: "Todos" },
            { label: "Colores", id: "colors", options: [...validCoverColors], defaultLabel: "Todos" }
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