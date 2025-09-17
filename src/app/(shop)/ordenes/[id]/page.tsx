import { IoMailOpenOutline, IoMailOutline } from "react-icons/io5";
import clsx from "clsx";

import { Title } from "@/components";
import { getOrderById } from "@/actions";
import { redirect } from "next/navigation";
import { formatCurrency } from "@/utils/common/format-currency";

interface Props {
  params: Promise<{ id: string }>
}

export default async function OrderByIdPage({ params }: Props) {

  const { id } = await params;

  const { ok, order } = await getOrderById(id);

  if (!ok) {
    redirect("/")
  };

  const address = order!.OrderAddress;  

  return (
    <section className="flex justify-center items-center container mx-auto px-3 mt-10 lg:mt-20">
      <div className="flex flex-col w-full">
        <Title title={`Orden #${id.split('-').at(-1)}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:mt-5">

          {/* Cart */}
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-800": !order!.isSentByEmail,
                  "bg-green-800": order?.isSentByEmail,
                }
              )
            }>
              {
                order?.isSentByEmail
                  ? (
                    <IoMailOpenOutline size={20} />
                  ) : (
                    <IoMailOutline size={20} />
                  )
              }
              {
                order?.isSentByEmail
                  ? (
                    <span className="mx-2">Pedido enviado por email</span>

                  ) : (
                    <span className="mx-2">Pendiente de envío</span>
                  )
              }
            </div>

            {/* Items */}
            {
              order!.OrderItem.map(item => {

                // Unify slugs: use item.slug if exists, else fallback to item.caddy?.slug            
                const slug = item.caddy?.slug || item.notebook?.slug;

                const image = item.caddy?.ProductImage[0].url || item.notebook?.ProductImage[0].url; //TODO: Agregar los demas productos
                const title = item.caddy?.title || item.notebook?.title; //TODO: Agregar los demas productos

                return (
                  <div key={slug} className="flex mb-5">
                    <img src={`/products/${image}`} alt={title} className="w-20 h-20 mr-5 rounded aspect-square" />

                    <div className="flex flex-col w-full">
                      <p className="text-sm sm:text-base capitalize">{title}</p>
                      <p className="text-sm">{formatCurrency(item.price)} x <span className="text-tertiary">{item.quantity} {item.quantity === 1 ? 'artículo' : 'artículos'}</span></p>
                      <p className="font-bold text-white">Subtotal: {formatCurrency(item.price * (item.quantity))}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>

          {/* Checkout */}
          <div className="bg-primary rounded-xl shadow-sm shadow-primary text-slate-100 p-4">

            <h2 className="text-2xl mb-2">Datos del cliente:</h2>
            <div className="text-sm text-slate-300">
                <p className="font-semibold text-base text-white capitalize">{address!.firstName} {address!.lastName}</p>
                <p className="capitalize">{address!.address!}</p>
                <p>{address!.address2}</p>
                <p>Tel: {address!.phone}</p>
                <p>CUIT: {address!.cuit}</p>
                <div className="flex gap-x-1">
                    <p>CP: {address!.zipCode} -</p>
                    <p className="capitalize">{address!.department.name}</p>
                </div>
                <p className="capitalize">{address!.city}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded my-3 bg-background" />

            <h2 className="text-lg lg:text-2xl mb-2">Resumen de la orden:</h2>

            <div className="grid grid-cols-2">
              <span>N.º Productos</span>
              <span className="text-right">{order?.itemsInOrder} {order?.itemsInOrder === 1 ? 'artículo' : 'artículos'}</span>

              <span>Subtotal</span>
              <span className="text-right">{formatCurrency(order!.subTotal)}</span>

              <span>Impuestos (21%)</span>
              <span className="text-right">{formatCurrency(order!.tax)}</span>

              <span className="text-xl mt-5 font-semibold">Total:</span>
              <span className="text-right mt-5">{formatCurrency(order!.total)}</span>
            </div>

            <div className="mt-5 w-full">
              <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  "bg-red-800": !order!.isSentByEmail,
                  "bg-green-800": order?.isSentByEmail,
                }
              )
            }>
              {
                order?.isSentByEmail
                  ? (
                    <IoMailOpenOutline size={20} />
                  ) : (
                    <IoMailOutline size={20} />
                  )
              }
              {
                order?.isSentByEmail
                  ? (
                    <span className="mx-2 text-base">Pedido enviado por email</span>

                  ) : (
                    <span className="mx-2 text-base">Pendiente de envío</span>
                  )
              }
            </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}