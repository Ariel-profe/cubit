"use client";

import { getStockBySlug } from "@/actions";
import { useEffect, useState } from "react";

interface Props{
    slug: string;
    category: string;
}

export const StockLabel = ({slug, category}:Props) => {

    const [stock, setStock] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getStock();
    }, []);

    const getStock = async () => {
        const inStock = await getStockBySlug(slug, category);
        setStock(inStock);
        setIsLoading(false);
    };

    return (
        <>
        {
            isLoading ? (
            <p className="text-lg font-light animate-pulse bg-gray-200 max-w-[150px]">
                &nbsp;
            </p>
            ) : (
            <p className="text-lg text-tertiary">
                Stock: {stock > 0 ? stock : "Agotado! Contactanos para más información"}
            </p>
            )
        }
        </>
    )
}
