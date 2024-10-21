import React from "react";

const Item = ({ name, quantity, category, darkMode }) => {
  return (
    <li
    className={`transition-transform transform hover:scale-105 shadow-lg rounded-lg p-4 mb-4 ${
    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-900"
    }`}
  >
      <div className={`text-xl font-bold`}>{name}</div>
      <div className={`text-md ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Buy {quantity} in {category}.</div>
    </li>
  );
};

export default Item;
    