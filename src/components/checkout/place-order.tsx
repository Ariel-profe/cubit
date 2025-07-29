"use client";

import { useEffect, useState } from "react";

import { useAddressStore, useCartStore } from "@/store";
import { placeOrder } from "@/actions";
import { Button, Loading } from "@/components";
import { formatCurrency } from "@/utils/common/format-currency";

export const PlaceOrder = () => {

    const [loaded, setLoaded] = useState<boolean>(false);
    const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);
    const [message, setMessage] = useState("");

    const address = useAddressStore(state => state.address);

    const getSumaryInformation = useCartStore((state) => state.getSummaryInformation);
    const { itemsInCart, subtotal, tax, totalPrice } = getSumaryInformation();

    const cart = useCartStore(state => state.cart);
    const clearCart = useCartStore(state => state.clearCart);

    useEffect(() => {
        setLoaded(true);
    }, []);

    const onPlaceOrder = async() => {
        setIsPlacingOrder(true);

        const productsToOrder = cart.map(product => ({
            productId: product.id,
            quantity: product.quantity
        }));
        
        const resp = await placeOrder(productsToOrder, address);

        if(!resp.ok){
            setIsPlacingOrder(false);
            setMessage(resp.message);
            return;
        };

        setMessage("Pedido creado. Email enviado.")

        // En este punto todo ha salido bien
        setTimeout(() => {
            clearCart();
            window.location.replace('/orders/' + resp.order!.id)
        }, 2000)
    };

    if (!loaded) {
        return <Loading />
    };

    return (
        <div className="bg-primary rounded-xl shadow-sm shadow-primary/50 text-slate-100 p-4">
            <h2 className="text-2xl mb-2">Datos del cliente:</h2>
            <div className="text-sm text-slate-300">
                <p className="font-semibold text-base text-white capitalize">{address.firstName} {address.lastName}</p>
                <p className="capitalize">{address.address}</p>
                <p>{address.address2}</p>
                <p>Tel: {address.phone}</p>
                <p>CUIT: {address.cuit}</p>
                <div className="flex gap-x-1">
                    <p>CP: {address.zipCode} -</p>
                    <p className="capitalize">{address.department}</p>
                </div>
                <p className="capitalize">{address.city}</p>
            </div>

            {/* Divider */}
            <div className="w-full h-0.5 rounded my-3 bg-background" />

            <h2 className="text-lg lg:text-2xl mb-2">Resumen de la orden:</h2>

            <div className="grid grid-cols-2">
                <span>N.º Productos</span>
                <span className="text-right">{itemsInCart === 1 ? 'artículo' : `${itemsInCart} artículos`}</span>

                <span>Subtotal</span>
                <span className="text-right">{formatCurrency(subtotal)}</span>

                <span>Impuestos (21%)</span>
                <span className="text-right">{formatCurrency(tax)}</span>

                <span className="text-xl mt-5 font-semibold">Total:</span>
                <span className="text-right text-xl mt-5 text-quaternary font-semibold">{formatCurrency(totalPrice)}</span>
            </div>

            <div className="mt-5 w-full relative">

                {/* Disclamer */}
                <div className="mb-5">
                    <span className="text-xs text-slate-400">
                        Al hacer click en "enviar pedido", crearás una orden que podrás ver en la página "Órdenes" y nos enviarás un email que responderemos lo antes posible. También aceptas nuestros <a className="underline" href="/terminos-y-condiciones">términos y condiciones</a> y <a className="underline" href="/politicas-de-privacidad">política de privacidad</a>
                    </span>
                </div>
                
                <Button variant='default' onClick={onPlaceOrder} disabled={isPlacingOrder}>
                    Enviar pedido
                </Button>
            </div>
        </div>
    )
}
