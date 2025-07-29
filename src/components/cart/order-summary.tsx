"use client";

import { useEffect, useState } from "react";

import { useCartStore } from "@/store";
import { formatCurrency } from "@/utils/common/format-currency";
import { Loading } from "@/components";

export const OrderSummary = () => {

    const [loaded, setLoaded] = useState(false);

    useCartStore((state) => state.cart); //Al seleccionar el cart, este se vuelve a renderizar

    const getSumaryInformation = useCartStore((state) => state.getSummaryInformation);

    const { itemsInCart, subtotal, tax, totalPrice } = getSumaryInformation();

    useEffect(() => {
        setLoaded(true);
    }, []);

    if (!loaded) return <Loading />

    return (
        <div className="grid grid-cols-2">
            <span>N.º Productos</span>
            <span className="text-right">{itemsInCart === 1 ? 'artículo' : `${itemsInCart} artículos`}</span>

            <span>Subtotal</span>
            <span className="text-right">{formatCurrency(subtotal)}</span>

            <span>Impuestos (21%)</span>
            <span className="text-right">{formatCurrency(tax)}</span>

            <span className="text-xl mt-5 font-semibold">Total:</span>
            <span className="text-right mt-5">{formatCurrency(totalPrice)}</span>
        </div>
    )
}
