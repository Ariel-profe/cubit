import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { OrderSummary, Title, ProductsInCart, GoBackButton } from "@/components";

export default function CartPage() {

  return (
    <section className="flex justify-center items-center container mx-auto px-3 mt-10 lg:mt-20">
      <div className="flex flex-col w-full">
        <Title title="Carrito de compras" subtitle="Revisa los productos que deseas pedir" className="text-2xl md:text-4xl" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Cart */}
          <div className="flex flex-col mt-5">
            <GoBackButton text="Continuar comprando" href="/productos" icon={IoArrowBackCircleOutline} />

            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Checkout */}
          <div className="bg-primary rounded p-4">
            <h2 className="text-lg lg:text-2xl mb-2">Resumen de la orden:</h2>

            <OrderSummary />

            <div className="mt-5 w-full">
              <Link href="/checkout/address" className="flex justify-center bg-secondary p-2 rounded">Realizar pedido</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}