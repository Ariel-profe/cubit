
import { ProductsGrid, Title } from "@/components";
import { seedNotebooks } from "@/seed/seed";
// import { useState } from "react";

const products = seedNotebooks;

export default function NotebooksPage () {


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
    <div>
        <Title title="Notebooks" className="text-2xl md:text-4xl" />


        {/* <button onClick={() => handleType("all")}>Todas</button>
        <button onClick={() => handleType("hogar")}>Tipo Hogar</button>
        <button onClick={() => handleType("gamer") }>Tipo Gamer</button> */}

        {/* <ProductsGrid products={filteredProducts} /> */}
        <ProductsGrid products={products} />

    </div>
  )
}