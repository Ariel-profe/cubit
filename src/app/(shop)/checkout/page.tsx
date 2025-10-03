import Link from "next/link";
import { GoBackButton, PlaceOrder, ProductsInCheckout, Title } from "@/components";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function CheckoutPage() {
  return (
    <section className="flex justify-center items-center container mx-auto px-3 mt-10 lg:mt-20">
      <div className="flex flex-col w-full">
        <Title
          from="top"
          split="word"
          blur={3}
          delay={0.2}
          duration={1.2}
        >
          Verificar y realizar pedido
        </Title>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Cart */}
          <div className="flex flex-col">
            <GoBackButton text="Editar carrito" href="/carrito" icon={IoArrowBackCircleOutline} />

            {/* Items */}
            <ProductsInCheckout />
          </div>

          {/* Checkout */}
          <PlaceOrder />
        </div>
      </div>
    </section>
  );
}