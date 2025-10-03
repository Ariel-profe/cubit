import Link from "next/link";
import { redirect } from "next/navigation";

import { getProductsByBrand } from "@/actions";
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, Pagination, ProductCard, Title } from "@/components";
import { categories, categoriesDictionary } from "@/utils";
import { MagicCard } from "@/components/ui/magic-card";

interface Props {
  params: Promise<{ 
    brand: string 
  }>,
  searchParams: Promise<{ 
    page?: string 
  }>
};

export default async function BrandPage({ params, searchParams }: Props) {

  const resolvedParams = (await params) as { brand: string };
  const resolvedSearchParams = (await searchParams) as { page?: string };

  if (!resolvedParams.brand) {
    redirect("/");
  }

  const page = resolvedSearchParams?.page ? parseInt(resolvedSearchParams.page) : 1;

  const { totalPages, products } = await getProductsByBrand({ 
    brand: resolvedParams.brand, 
    page 
  });  

  return (
    <section className="flex flex-col container mx-auto px-3 mt-10 lg:mt-20">
      <Title
          from="top"
          split="word"
          blur={3}
          delay={0.2}
          duration={1.2}
        >
          {
            products.length > 0 
            ? `Productos de la marca "${resolvedParams.brand}"`
            : ""
          }
        </Title>

      <div className="mt-5">
       {
          products.length > 0 ? (
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 fadeIn">
                {products.map(product => (
                  <Link key={product.id} href={`/productos/${categoriesDictionary[product.category]}/${product.slug}`} className="w-full max-w-xs border-none shadow-none group">
                   <Card>
                    <MagicCard
                      gradientColor="#050b25"
                      className="p-0"
                    >
                      <CardHeader className="py-2">
                        <CardTitle className="font-semibold capitalize text-slate-300 group-hover:text-slate-100 max-w-xs">{product.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0">
                        <img src={product.images[0]} alt={product.title} className="w-full h-40 object-contain" />
                      </CardContent>
                      <CardFooter className="py-2 text-sm text-slate-500 group-hover:text-slate-00 font-medium flex items-center justify-between">
                        <span>{categoriesDictionary[product.category].toUpperCase()}</span>
                        <span className="text-slate-400">{product.price.toLocaleString('es-AR')}</span>
                      </CardFooter>
                    </MagicCard>
                  </Card>
                  </Link>
                ))}
              </div>
              <Pagination totalPages={totalPages} />
              </div>
          ) : (
            <div className="text-center text-gray-400 sm:text-lg md:text-xl">
              <p>No encontramos productos para <span className="text-red-600">"{resolvedParams.brand}"</span></p>
              <div className="mt-10 lg:mt-20 flex items-center justify-center gap-x-3">
                <p>¿Quieres buscar en nuestras marcas?</p>
                <DropdownMenu >
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">
                      Seleccionar
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

