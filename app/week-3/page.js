"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import ItemList from "./item-list";

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <main className={`min-h-screen p-6 fade-in transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-200"}`}>
      <h1 className={`font-extrabold text-4xl text-center transition-colors duration-300 ${darkMode ? "text-white" : "text-gray-800"} mb-8`}>
        Shopping List
      </h1>

        <button
            onClick={toggleDarkMode}
            className={`flex items-center justify-center p-3 mb-4 rounded-full transition-transform duration-300 ease-in-out transform ${darkMode ? "bg-gray-300 text-gray-900 hover:bg-gray-400 shadow-md" : "bg-gray-700 text-white hover:bg-gray-600 shadow-lg"}`}>
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="mr-2 text-lg" />
            Toggle Dark Mode
        </button>

      <ItemList darkMode={darkMode} /> 
    </main>
  );
}
