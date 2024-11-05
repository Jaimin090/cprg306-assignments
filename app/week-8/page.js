"use client";

import React, { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null); // State for selected item name

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  // New event handler to clean and set the selected item name
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0] // Remove any quantity after a comma
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\u2600-\u26FF])/g, '') // Remove emojis and symbols
      .trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="min-h-screen p-6 fade-in bg-gray-900 transition-colors duration-300">
      <h1 className="font-extrabold text-4xl text-center text-white mb-8">
        Shopping List
      </h1>

      {/* Layout container for the NewItem, ItemList, and MealIdeas components */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left side: NewItem and ItemList components */}
        <div className="flex flex-col w-full md:w-1/2">
          {/* Pass handleAddItem as a prop to NewItem */}
          <NewItem onAddItem={handleAddItem} />
          
          {/* Pass items and handleItemSelect as props to ItemList */}
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        {/* Right side: MealIdeas component, displaying meal ideas for selected item */}
        <div className="flex w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
