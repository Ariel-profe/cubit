"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

import { useCartStore } from "@/store";
import { Loading, ProductImage } from "@/components";
import { formatCurrency } from "@/utils/common/format-currency";

export const ProductsInCheckout = () => {

  const productsInCart = useCartStore(state => state.cart);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true)
  }, []);

  useEffect(() => {
    if (!productsInCart || productsInCart.length === 0 && loaded === true) {
      redirect("/empty");
    }
  }, [productsInCart, loaded])

  if (!loaded) {
    return <Loading />
  };

  return (
    <div className="mt-5">
      {
        productsInCart.map((product, idx) => (
          <div key={`${product.slug}-${idx}`} className="flex mb-5">
            <ProductImage src={product.image} alt={product.title} className="w-12 h-12 lg:w-16 lg:h-16 mr-5 rounded aspect-square" />

            <div className="flex flex-col w-full">
              <h3 className="text-sm sm:text-base capitalize">{product.title} - ({product.quantity})</h3>

              <p className="font-bold text-quaternary">{formatCurrency(product.price * product.quantity)}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}
