"use client"

import { useState } from "react";
import { toast } from "react-toastify";
import { IoTrashOutline } from "react-icons/io5";

import { deleteProduct } from "@/actions";
import { Modal } from "@/components";

export const DeleteProduct = ({ productId, model }: { productId: string, model: string }) => {

    const [isModalOpened, setIsModalOpened] = useState(false);

    // This function will handle the deletion of the product calling the deleteProduct action
    const handleDelete = async () => {
        try {
            const {message, ok} = await deleteProduct(productId, model);
            if (ok) {
                toast.success(message, { position: "bottom-right" });
            } else {
                toast.error(message, { position: "bottom-right" });
            }
            setIsModalOpened(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex justify-center items-center">
            <button
                className="hover:underline text-red-600 hover:text-red-800 cursor-pointer"
                onClick={() => {
                    setIsModalOpened(true)
                }}
            >
                <IoTrashOutline size={20} />
            </button>
            {/* Background black */}
            {
                isModalOpened && (
                    <div className="fixed top-0 left-0 bg-black opacity-40 w-full h-screen z-20" />
                )
            }

            {/* Background blur */}
            {
                isModalOpened && (
                    <div className="fadeIn fixed top-0 left-0 w-full h-screen z-20 backdrop-blur-sm" />
                )
            }
            {
                isModalOpened && (
                    <Modal
                        isModalOpened={isModalOpened}
                        onDelete={handleDelete}

                        setIsModalOpened={setIsModalOpened}
                    />
                )
            }
        </div>
    )
}
