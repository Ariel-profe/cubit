// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validCaddyBrands, validCaddyComp, validCaddyThickness } from "@/utils";

interface Props {
  searchParams?: {
    page?: string,
    brand?: string,
    // Specific
    thickness?: string,
    compatibility?: string[],
  };
};

export default async function CaddyPage({ searchParams }: Props) {

  const resolvedSearchParams = searchParams ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const thickness = resolvedSearchParams.thickness || "";
  
  const compatibility = Array.isArray(resolvedSearchParams.compatibility)
    ? resolvedSearchParams.compatibility.join(",")
    : resolvedSearchParams.compatibility || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "caddy", filters: { brand, thickness, compatibility } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Caddys" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validCaddyBrands], defaultLabel: "Todas" },
            { label: "Espesor", id: "thickness", options: [...validCaddyThickness], defaultLabel: "Todos" },
            { label: "Compatibilidad", id: "compatibility", options: [...validCaddyComp], defaultLabel: "Todas" },
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