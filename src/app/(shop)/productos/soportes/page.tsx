// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validSupportBrands, validSupportMaterials, validSupportMax } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    maxSupport?: string,
    materials?: string[],
  }>;
};

export default async function SupportPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const maxSupport = resolvedSearchParams.maxSupport || "";
  const materials = Array.isArray(resolvedSearchParams.materials)
    ? resolvedSearchParams.materials.join(",")
    : resolvedSearchParams.materials || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "support", filters: { brand, maxSupport, materials } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Soportes" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validSupportBrands], defaultLabel: "Todas" },
            { label: "Máximo Soporte", id: "maxSupport", options: [...validSupportMax], defaultLabel: "Todos" },
            { label: "Materiales", id: "materials", options: [...validSupportMaterials], defaultLabel: "Todos" },
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