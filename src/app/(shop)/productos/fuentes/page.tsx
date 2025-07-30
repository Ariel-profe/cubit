// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validSourceAmpers, validSourceBrands, validSourcePins, validSourceUseBrands, validSourceVolts, validSourceWatts } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    pin?: string,
    amperage?: string,
    watts?: string,
    volts?: string[],
    brandsUse?: string[],
  }>;
};

export default async function SourcePage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const pin = resolvedSearchParams.pin || "";
  const amperage = resolvedSearchParams.amperage || "";
  const watts = resolvedSearchParams.watts || "";

  const volts = Array.isArray(resolvedSearchParams.volts)
  ? resolvedSearchParams.volts.join(",")
  : resolvedSearchParams.volts || "";

  const brandsUse = Array.isArray(resolvedSearchParams.brandsUse)
  ? resolvedSearchParams.brandsUse.join(",")
  : resolvedSearchParams.brandsUse || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "source", filters: { brand, pin, amperage, watts, volts, brandsUse } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Fuentes" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validSourceBrands], defaultLabel: "Todas" },
            { label: "Pin", id: "pin", options: [...validSourcePins], defaultLabel: "Todos" },
            { label: "Amperaje", id: "amperage", options: [...validSourceAmpers], defaultLabel: "Todos" },
            { label: "Watts", id: "watts", options: [...validSourceWatts], defaultLabel: "Todos" },
            { label: "Voltaje", id: "volts", options: [...validSourceVolts], defaultLabel: "Todos" },
            { label: "Compatibilidad con", id: "brandsUse", options: [...validSourceUseBrands], defaultLabel: "Todas" }
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