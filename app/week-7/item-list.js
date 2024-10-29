import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ darkMode, items }) {
  const [sortBy, setSortBy] = useState("name"); 

  // Sorting the items based on the sortBy state
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div>
      {/* Sort Buttons */}
      <div className="flex justify-center mb-6 mt-10">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 mr-4 rounded-full transition-colors duration-300 ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-300 text-gray-800"
          }`}
        >
          Sort by Category
        </button>
      </div>

      {/* Displaying Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              darkMode={darkMode}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
