"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
    onQuantityChange: (value: number) => void;
};

export const QuantitySelector = ({quantity, onQuantityChange}: Props) => {

    const [error, setError] = useState(false);

    const onValueChanged = (value: number) => {
        if (quantity + value < 1 ) return;
        if (quantity + value > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }

        onQuantityChange(quantity + value);
    };

  return (
    <div className="flex items-center my-2">
        <button onClick={() => onValueChanged(-1)} className="cursor-pointer">
            <IoRemoveCircleOutline size={30} />
        </button>

        <span className="w-20 mx-3 px-5 bg-primary text-center rounded">
            {quantity}
        </span>

        <button onClick={() => onValueChanged(1)} className="cursor-pointer">
            <IoAddCircleOutline size={30} />
        </button>
        
       {
            error && (
                <span className="text-rose-400 text-xs ml-1">
                    ¡Límite alcanzado!
                </span>
            )
       }
    </div>
  )
}
