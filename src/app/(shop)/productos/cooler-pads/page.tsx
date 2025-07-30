// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title, ProductFilters } from "@/components";
import { validCoolerBrands, validCoolerFan, validCoolerHeigthLevels, validCoolerOpts, validCoolerUsb } from "@/utils";

interface Props {
  searchParams?: Promise<{
    page?: string,
    brand?: string,
    // Specific
    heightLevel?: string,
    fan?: string,
    usbPorts?: string,
    rgbLighting?: string,
  }>;
};

export default async function CoolerPadPage({ searchParams }: Props) {

  const resolvedSearchParams = (await searchParams) ?? {};
  const page = resolvedSearchParams.page ? parseInt(resolvedSearchParams.page) : 1;
  const brand = resolvedSearchParams.brand || "";
  const heightLevel = resolvedSearchParams.heightLevel || "";
  const fan = resolvedSearchParams.fan || "";
  const usbPorts = resolvedSearchParams.usbPorts || "";
  const rgbLighting = resolvedSearchParams.rgbLighting || "";

  const { products, totalPages } = await getPaginatedProductsWithImages({ page, model: "coolerpad", filters: { brand, heightLevel, fan, usbPorts, rgbLighting } });

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <Title title="Cooler Pads" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ProductFilters
          filters={[
            { label: "Marca", id: "brand", options: [...validCoolerBrands], defaultLabel: "Todas" },
            { label: "Nivel de Altura", id: "heightLevel", options: [...validCoolerHeigthLevels], defaultLabel: "Todos" },
            { label: "Fan", id: "fan", options: [...validCoolerFan], defaultLabel: "Todos" },
            { label: "Puertos USB", id: "usbPorts", options: [...validCoolerUsb], defaultLabel: "Todos" },
            { label: "Iluminación RGB", id: "rgbLighting", options: [...validCoolerOpts], defaultLabel: "Todos" },
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