"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { IoTrashOutline, IoWarningOutline } from "react-icons/io5";

import { useCartStore } from "@/store";
import { Button, Loading, ProductImage, QuantitySelector } from "@/components";
import { ICartProduct } from "@/interfaces/cart/cart-product";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";

export const ProductsInCart = () => {

  const productsInCart = useCartStore(state => state.cart);
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProductFromCart = useCartStore(state => state.removeProductFromCart);

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

  const onDeletedProduct = (product: ICartProduct) => {
    removeProductFromCart(product);
    toast.error(`El producto fue eliminado del carrito`, { position: "bottom-right" });
  };

  return (
    <div className="mt-5 relative">
      {
        productsInCart.map((product, idx) => (
          <div key={`${product.slug}-${idx}`} className="flex mb-5">
            <ProductImage src={product.image} alt={product.title} className="w-12 h-12 lg:w-16 lg:h-16 mr-5 rounded aspect-square" />

            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <Link href={`/products/${product.category}/${product.slug}`} className="text-tertiary hover:underline">
                  <h3 className="text-sm sm:text-base capitalize">{product.title}</h3>
                </Link>
                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="icon">
                        <IoTrashOutline className="" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          {`¿Deseas eliminar este producto?`}
                        </DialogTitle>
                        <DialogDescription className="flex items-center gap-x-1 text-amber-400">
                          <IoWarningOutline />
                          Esta acción no se puede deshacer.
                        </DialogDescription>
                      </DialogHeader>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" variant="destructive" onClick={() => onDeletedProduct(product)}>Eliminar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
              </div>
              <p>${product.price}</p>
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChange={(quantity) => updateProductQuantity(product, quantity)}
              />
            </div>
          </div>
        ))
      }
    </div>
  )
}
