// app/week-4/new-item.js
"use client";

import { useState } from 'react';

export default function NewItem() {
    //
    const [quantity, setQuantity] = useState(1);

  // max 20
    const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  // min 1
    const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4"> Quantity: {quantity} </h2>
            <div className="flex items-center justify-center mb-4">

                {/*  decrement button */}
                <button
                onClick={decrement}
                disabled={quantity === 1}
                title={quantity === 1 ? "Minimum quantity is 1" : ""}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-l disabled:bg-gray-500 transition-colors duration-300"
                > - </button>

                {/* view quantity */}
                <span className="px-6 py-2 bg-gray-900 text-white font-semibold">
                {quantity}
                </span>

                {/* increment button */}
                <button
                onClick={increment}
                disabled={quantity === 20}
                title={quantity === 1 ? "Maximum quantity is 20" : ""}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-r disabled:bg-gray-500 transition-colors duration-300"
                > + </button>
            </div>

        {/* reset button */}
        <button onClick={() => setQuantity(1)}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded mt-4"
        > Reset </button>
    </div>
  );
}
