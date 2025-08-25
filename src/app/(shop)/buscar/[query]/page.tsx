import Link from "next/link";
import { redirect } from "next/navigation";

import { getProductsByTerm } from "@/actions";
import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, Pagination, ProductCard, Title } from "@/components";
import { categories } from "@/utils";

interface Props {
  params: Promise<{ 
    query: string 
  }>,
  searchParams: Promise<{ 
    page?: string 
  }>
};

export default async function SearchPage({ params, searchParams }: Props) {

  const resolvedParams = (await params) as { query: string };
  const resolvedSearchParams = (await searchParams) as { page?: string };

  if (!resolvedParams.query) {
    redirect("/");
  }

  const page = resolvedSearchParams?.page ? parseInt(resolvedSearchParams.page) : 1;

  const { totalPages, products } = await getProductsByTerm({ 
    term: resolvedParams.query, 
    page 
  });  

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20">
      <Title title={`Resultados para: "${resolvedParams.query}"`} subtitle="Buscar productos" />

      <div className="mt-5">
       {
          products.length > 0 ? (
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {products.map(product => (
                  <ProductCard key={product.id} product={product}  />
                ))}
              </div>
              <Pagination totalPages={totalPages} />
              </div>
          ) : (
            <div className="text-center text-gray-400 sm:text-lg md:text-xl">
              <p>No encontramos productos para <span className="text-red-600">"{resolvedParams.query}"</span></p>
              <div className="mt-10 lg:mt-20 flex items-center justify-center gap-x-3">
                <p>¿Quieres buscar en nuestras categorías?</p>
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Seleccionar categoría
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="max-w-72 bg-primary grid sm:grid-cols-2">
                    {categories.map(category => (
                      <Link key={category.id} href={`/productos/${category.href}`}>
                        <Button variant="ghost" className="w-full text-left capitalize text-slate-300 cursor-pointer">
                          {category.title}
                        </Button>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          )
       }
        </div>
    </section>
  )
}

