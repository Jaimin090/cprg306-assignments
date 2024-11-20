
"use client";

import { useState } from 'react';

export default function NewItem({onAddItem}) {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const [category, setCategory] = useState('produce');
    const [isNameValid, setIsNameValid] = useState(true);

  // max 20
    const increment = () => {
    setQuantity(prevQuantity => Math.min(prevQuantity + 1, 20));
  };

  // min 1
    const decrement = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() === '') {
            setIsNameValid(false);  
            return;
        }

    const item = { id: Math.random().toString(36).substring(2, 9), name, quantity, category };
    onAddItem(item);

    setName('');
    setCategory('produce');
    setQuantity(1);
    setIsNameValid(true);
  };

  return (
    <div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg text-center mx-auto" style={{ maxWidth: "600px" }}  >

        {/* Name and Category */}
        <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-left font-semibold mb-2">
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className={`block w-full px-3 py-2 mt-1 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 
                                ${!isNameValid ? 'border-red-500 focus:ring-red-500' : 'focus:ring-blue-500'}`}
                            placeholder="Enter item name"
                        />
                        {!isNameValid && (
                            <p className="text-red-500 text-sm mt-1">Name is required</p>
                        )}
                    </label>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-left font-semibold mb-2">
                        Category:
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="block w-full px-3 py-2 mt-1 border rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="produce">Produce</option>
                            <option value="dairy">Dairy</option>
                            <option value="bakery">Bakery</option>
                            <option value="meat">Meat</option>
                            <option value="frozen-foods">Frozen Foods</option>
                            <option value="canned-goods">Canned Goods</option>
                            <option value="dry-goods">Dry Goods</option>
                            <option value="beverages">Beverages</option>
                            <option value="snacks">Snacks</option>
                            <option value="household">Household</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                </div>   
        </form>

        {/* Quantity */}
        <div className="flex items-center justify-center mb-4 flex-row">

                {/*  decrement button */}
                <button onClick={decrement}
                disabled={quantity === 1}
                title={quantity === 1 ? "Minimum quantity is 1" : ""}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-l disabled:bg-gray-500 transition-colors duration-300"
                > - </button>

                {/* view quantity */}
                <span className="px-6 py-2 bg-gray-900 text-white font-semibold">
                    {quantity}
                </span>

                {/* increment button */}
                <button onClick={increment}
                disabled={quantity === 20}
                title={quantity === 1 ? "Maximum quantity is 20" : ""}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-bold rounded-r disabled:bg-gray-500 transition-colors duration-300"
                > + </button>
            
            {/* reset button */}
            <button onClick={() => setQuantity(1)} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded ml-14 my-6">
                Reset 
            </button>
        </div>

        {/* Submit Buttom  */}
        <form onSubmit={handleSubmit}>
                <button type="submit" 
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md transition-colors duration-300">
                    Submit Item
                </button>
        </form>
    </div>
  );
}
