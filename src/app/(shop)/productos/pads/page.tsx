// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validPadBrands, validPadColorStamp, validPadSizes } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    rgbLighting?: string,
    size?: string,
    colorStamp?: string[],
  }>;
};

export default async function PadPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const rgbLighting = resolvedSearchParams.rgbLighting || "";
  const size = resolvedSearchParams.size || "";
  const colorStamp = Array.isArray(resolvedSearchParams.colorStamp)
    ? resolvedSearchParams.colorStamp.join(",")
    : resolvedSearchParams.colorStamp || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "pad", filters: { brand, rgbLighting, size, colorStamp } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title
        from="top"
        split="word"
        blur={3}
        delay={0.2}
        duration={1.2}
      >
        Los mejores pads del mercado
      </Title>

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validPadBrands], defaultLabel: "Todas" },
            { label: "Tamaño", id: "size", options: [...validPadSizes], defaultLabel: "Todos" },
            { label: "Color", id: "colorStamp", options: [...validPadColorStamp], defaultLabel: "Todos" },
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