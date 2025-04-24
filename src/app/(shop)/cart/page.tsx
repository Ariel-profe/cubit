import Link from "next/link";

import { Title } from "@/components";
import { QuantitySelector } from "@/components/product";
import { seedNotebooks } from "@/seed/seed";
import { redirect } from "next/navigation";

const productsInCart = [
  seedNotebooks[0],
  seedNotebooks[1],
];

export default function CartPage() {

  // redirect("/empty");

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full">
        <Title title="Carrito de compras" className="text-2xl md:text-4xl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Cart */}
        <div className="flex flex-col mt-5">
          <Link href="/products" className="underline mb-5">Continúa comprando</Link>

        {/* Items */}
        {
          productsInCart.map( product => (
            <div key={product.slug} className="flex mb-5">
              <img src={`/products/${product.images[0]}`} alt={product.title} className="w-20 h-20 mr-5 rounded aspect-square" />

              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center">
                  <p className="text-sm sm:text-base">{product.title}</p>
                  <button className="underline mt-3 text-red-700 self-end cursor-pointer">Quitar</button>
                </div>
                <p>${product.price}</p>
                <QuantitySelector quantity={3} />
              </div>

            </div>
          ))
        }
        </div>

        {/* Checkout */}
        <div className="bg-slate-800 rounded-xl shadow-sm shadow-slate-800 p-4">
          <h2 className="text-lg lg:text-2xl mb-2">Resumen de la orden:</h2>

          <div className="grid grid-cols-2">
            <span>No. Productos</span>
            <span className="text-right">3 artículos</span>

            <span>Subtotal</span>
            <span className="text-right">$ 100000</span>

            <span>Impuestos (15%)</span>
            <span className="text-right">$ 10000</span>

            <span className="text-xl mt-5 font-semibold">Total:</span>
            <span className="text-right mt-5">$ 10000</span>
          </div>

          <div className="mt-5 w-full">
            <Link href="/checkout/address" className="flex btn-primary justify-center">Comprar</Link>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}