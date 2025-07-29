// This page is revalidated every 7 days
export const revalidate = 604800; // 7 days

import { redirect } from "next/navigation";
import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductsGrid, Title } from "@/components";
// import { useState } from "react";

interface Props {
  searchParams: Promise<{ page?: string }>
}

export default async function CarryPage ({searchParams}: Props) {

  const page = (await searchParams).page ? parseInt((await searchParams).page!) : 1;

  const {products, currentPage, totalPages} = await getPaginatedProductsWithImages({page, model: "docking"});   
  
  if (products.length === 0) {
    redirect("/productos");
  };

  // const [filteredProducts, setFilteredProducts] = useState(products);

  // const handleType = (type: string) => {
  //   if(type === "all") {
  //     setFilteredProducts(products);
  //     return;
  //   }
  //   const filtered = products.filter((product) => product.type === type);
  //   setFilteredProducts(filtered);
  // }

  return (
    <div className="container mx-auto px-3">
        <Title title="Docking"/>


        {/* <button onClick={() => handleType("all")}>Todas</button>
        <button onClick={() => handleType("hogar")}>Tipo Hogar</button>
        <button onClick={() => handleType("gamer") }>Tipo Gamer</button> */}

        {/* <ProductsGrid products={filteredProducts} /> */}
        <ProductsGrid products={products} />
        <Pagination totalPages={totalPages} />

    </div>
  )
}