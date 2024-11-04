"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json"

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="min-h-screen p-6 fade-in bg-gray-900 transition-colors duration-300">
      <h1 className="font-extrabold text-4xl text-center text-white mb-8">
        Shopping List
      </h1>

      {/* Pass handleAddItem as a prop to NewItem */}
      <NewItem onAddItem={handleAddItem} />
      
      {/* Pass items and darkMode as props to ItemList */}
      <ItemList items={items} />
    </main>
  );
}
