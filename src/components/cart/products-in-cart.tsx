"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";
import { IoTrashOutline } from "react-icons/io5";

import { useCartStore } from "@/store";
import { Loading, ProductImage, QuantitySelector, Modal } from "@/components";
import { ICartProduct } from "@/interfaces/cart/cart-product";

export const ProductsInCart = () => {

  const productsInCart = useCartStore(state => state.cart);
  const updateProductQuantity = useCartStore(state => state.updateProductQuantity);
  const removeProductFromCart = useCartStore(state => state.removeProductFromCart);

  const [loaded, setLoaded] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [productSelected, setProductSelected] = useState({} as ICartProduct);

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
    setIsModalOpened(false);
    setProductSelected({} as ICartProduct);
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
                <button
                  className="underline mt-3 text-destructive self-end cursor-pointer transition-all border border-transparent hover:destructive/80 rounded-full p-1"
                  onClick={() => {
                    setIsModalOpened(true)
                    setProductSelected(product);
                  }}
                >
                  <IoTrashOutline size={20} />
                </button>
              </div>
              <p>${product.price}</p>
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChange={(quantity) => updateProductQuantity(product, quantity)}
              />
            </div>

            {/* Background black */}
            {
              isModalOpened && product.id === productSelected.id && (
                <div className="fixed top-0 left-0 bg-black opacity-40 w-screen h-screen z-20" />
              )
            }

            {/* Background blur */}
            {
              isModalOpened && product.id === productSelected.id && (
                <div className="fadeIn fixed top-0 left-0 w-screen h-screen z-20 backdrop-blur-sm" />
              )
            }
            {
              isModalOpened && product.id === productSelected.id && (
              <Modal 
                isModalOpened={isModalOpened} 
                onDelete={onDeletedProduct} 
                objectSelected={productSelected} 
                setIsModalOpened={setIsModalOpened} 
              />
              )
            }

          </div>
        ))
      }
    </div>
  )
}
