"use client";

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
    quantity: number;
}

export const QuantitySelector = ({quantity}: Props) => {

    const [count, setCount] = useState(quantity);
    const [error, setError] = useState(false);

    const onQuantityChanged = (value: number) => {
        if (count + value < 1 ) return;
        if (count + value > 5) {
            setError(true);
            return;
        } else {
            setError(false);
        }

        setCount(count + value);
    };

  return (
    <div className="flex items-center my-2">
        <button onClick={() => onQuantityChanged(-1)} className="cursor-pointer">
            <IoRemoveCircleOutline size={30} />
        </button>

        <span className="w-20 mx-3 px-5 bg-gray-900 text-center rounded">
            {count}
        </span>

        <button onClick={() => onQuantityChanged(1)} className="cursor-pointer">
            <IoAddCircleOutline size={30} />
        </button>
        
       {
            error && (
                <span className="text-red-700 text-xs ml-1">
                    Solo puedes añadir hasta 5 productos
                </span>
            )
       }
    </div>
  )
}
