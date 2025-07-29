"use client";

import { useState } from 'react';
import {toast} from 'react-toastify';

import { QuantitySelector } from './quantity-selector';
import { useCartStore } from '@/store';
import { ICartProduct } from '@/interfaces/cart/cart-product';
import { Button } from '@/components';

interface Props {
    product: any;
};

export const AddToCart = ({ product }: Props) => {

    const addProductToCart = useCartStore(state => state.addProductToCart);
    const [quantity, setQuantity] = useState<number>(1);
    const [isAddingProductToCart, setIsAddingProductToCart] = useState<boolean>(false);

    const addToCart = () => {

        if (isAddingProductToCart) return;
        setIsAddingProductToCart(true);

        const cartProduct: ICartProduct = {
            id: product.id,
            title: product.title,
            slug: product.slug,
            category: product.category,
            price: product.price,
            quantity: quantity,
            image: product.images[0],
        };

        addProductToCart(cartProduct);

        setQuantity(1);
        setIsAddingProductToCart(false);
        toast.success('¡Producto añadido al carrito!', {position: "bottom-right"});
    };

    return (
        <div className=''>
            <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
            />

            <div className='relative pb-6'>
                <Button variant='default' disabled={isAddingProductToCart} onClick={addToCart}>
                    Agregar al carrito
                </Button>
            </div>

        </div>
    )
}
