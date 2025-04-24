import Link from "next/link";
import { Title } from "@/components";
import { seedNotebooks } from "@/seed/seed";

const productsInCart = [
  seedNotebooks[0],
  seedNotebooks[1],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col w-full">
        <Title title="Verificar pedido" className="text-2xl md:text-4xl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

        {/* Cart */}
        <div className="flex flex-col mt-5">
          <Link href="/cart" className="underline mb-5 text-primary">Editar pedido</Link>
        
        {/* Items */}
        {
          productsInCart.map( product => (
            <div key={product.slug} className="flex mb-5">
              <img src={`/products/${product.images[0]}`} alt={product.title} className="w-20 h-20 mr-5 rounded aspect-square" />

              <div className="flex flex-col w-full">
                <p className="text-sm sm:text-base">{product.title}</p>
                <p>${product.price} x 3 unidades</p>
                <p className="font-bold text-white">Subtotal: ${product.price * 3}</p>
              </div>
            </div>
          ))
        }
        </div>

        {/* Checkout */}
        <div className="bg-slate-800 rounded-xl shadow-sm shadow-slate-800 text-slate-100 p-4">

          <h2 className="text-2xl mb-2">Datos del cliente:</h2>
          <div className="text-sm">
            <p>Ariel Elias</p>
            <p>60 Granaderos 15</p>
            <div className="flex gap-x-1">
              <p>CP: 5515 -</p>
              <p>Maipú</p>
            </div>
            <p>Mendoza</p>
          </div>

          {/* Divider */}
          <div className="w-full h-0.5 rounded my-3 bg-gray-300" />

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

          {/* Disclamer */}
            <div className="mb-5">
              <span className="text-xs">
              Al hacer click en "realizar pedido", aceptas nuestros <a className="underline" href="/terminos-y-condiciones">términos y condiciones</a> y <a className="underline" href="/politicas-de-privacidad">política de privacidad</a>
              </span>
            </div>
            <Link href="/orders/123" className="flex btn-primary justify-center">Realizar pedido</Link>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}