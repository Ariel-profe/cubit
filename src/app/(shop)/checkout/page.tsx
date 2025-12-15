
import { unauthorized } from "next/navigation";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { GoBackButton, PlaceOrder, ProductsInCheckout, Title } from "@/components";
import { getServerSession } from "@/lib/get-server-session";

export default async function CheckoutPage() {

    const session = await getServerSession();
      const user = session?.user;
  
      if(!user) unauthorized();
      
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