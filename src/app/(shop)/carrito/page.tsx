import Link from "next/link";
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { OrderSummary, Title, ProductsInCart, GoBackButton } from "@/components";

export default function CartPage() {

  return (
    <section className="container mx-auto px-3 mt-10 lg:mt-20">
      <div className="flex flex-col w-full">
        <Title
          from="top"
          split="word"
          blur={3}
          delay={0.2}
          duration={1.2}
        >
          Carrito de compras
        </Title>
        <p className="text-sm text-slate-400 mb-5">Revisa los productos que has añadido</p>

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