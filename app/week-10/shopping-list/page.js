"use client";

import React, { useState, useEffect } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas"; // Import the new MealIdeas component
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"; 

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');    // State for selected item name
  const { user } = useUserAuth();

  const handleAddItem = (item) => {
      const id =  addItem(user.uid, item);
      const newItem = {
        ...item,
        id
    }

      setItems([...items, newItem])
    
  };

  // New event handler to clean and set the selected item name
  const handleItemSelect = itemName => {
    setSelectedItemName(itemName)
  };

  async function loadItems() {
    const items = await getItems(user.uid)
    setItems(items);
  };

  // Load items when the component mounts
  useEffect(() => {
    if (!user) return
    loadItems()
}, [user])// Dependencies: only on mount


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
