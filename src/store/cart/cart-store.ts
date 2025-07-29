import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { ICartProduct } from "@/interfaces/cart/cart-product";

interface State {
    cart: ICartProduct[];

    //Methods
    getTotalItems: () => number;
    getSummaryInformation: () => {
        subtotal: number;
        tax: number;
        itemsInCart: number;
        totalPrice: number;
    };
    addProductToCart: (product: ICartProduct) => void;
    updateProductQuantity: (product: ICartProduct, quantity: number) => void;
    removeProductFromCart: (product: ICartProduct) => void;

    clearCart: () => void;
};

export const useCartStore = create<State>()(

    persist(
        (set, get) => ({

            cart: [],

            //Methods

            getTotalItems: () => {
                const { cart } = get();
                return cart.reduce((total, item) => total + item.quantity, 0);
            },

            getSummaryInformation: () => {
                const { cart } = get();
                const subtotal = cart.reduce((subtotal, product) => (product.quantity * product.price) + subtotal, 0);
                const tax = subtotal * 0.21; // Assuming a tax rate of 21%
                const totalPrice = subtotal + tax;
                const itemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

                return {
                    subtotal,
                    tax,
                    itemsInCart,
                    totalPrice
                };
            },

            addProductToCart: (product: ICartProduct) => {
                const { cart } = get();

                // Check if the product already exists in the cart
                const existingProduct = cart.some(
                    (item: any) => item.id === product.id
                );

                if (!existingProduct) {
                    set({ cart: [...cart, product] });
                    return;
                }

                // If the product already exists, update the quantity
                const updatedCart = cart.map((item: any) => {
                    if (item.id === product.id) {
                        return { ...item, quantity: item.quantity + product.quantity };
                    }
                    return item;
                });

                set({ cart: updatedCart });
            },

            updateProductQuantity(product, quantity) {
                const { cart } = get();

                const updatedCart = cart.map((item) => {
                    if (item.id === product.id) {
                        return { ...item, quantity };
                    };

                    return item;
                });

                set({ cart: updatedCart });
            },

            removeProductFromCart: (product: ICartProduct) => {
                const { cart } = get();

                const updatedCart = cart.filter((item) => item.id !== product.id);

                set({ cart: updatedCart });
            },

            clearCart: () => {
                set({ cart: [] });
            }
        }),
        { 
            name: "shopping-cart" 
        }
    )
);