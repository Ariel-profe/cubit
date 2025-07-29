"use client";

import { ICartProduct } from "@/interfaces/cart/cart-product";

interface Props {
    objectSelected?: ICartProduct;
    isModalOpened: boolean;
    setIsModalOpened: (isOpened: boolean) => void;
    onDelete: (product: ICartProduct) => void;
};

export const Modal = ({isModalOpened, onDelete, objectSelected = {} as ICartProduct, setIsModalOpened}: Props) => {
    return (
        <dialog
            open={isModalOpened}
            className="bg-white flex flex-col items-center justify-center p-10 rounded max-w-lg z-30 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
        >
            <p className="text-xl"> ¿Eliminar producto? </p>

            <div className="flex gap-5 mt-5">
                <button
                    onClick={() => setIsModalOpened(false)}
                    type="reset"
                    className="border rounded px-4 py-2 transition-colors hover:bg-secondary hover:text-white text-secondary cursor-pointer"
                >Cancelar</button>
                <button
                    type="submit"
                    onClick={() => onDelete(objectSelected)}
                    className="bg-red-600 rounded px-4 py-2 transition-colors hover:bg-red-800 text-white cursor-pointer"
                >Confirmar
                </button>
            </div>
        </dialog>
    )
}
