import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      onClick={() => onSelect(name)} 
      className="transition-transform transform hover:scale-105 shadow-lg rounded-lg p-4 mb-4 bg-gray-700 text-white cursor-pointer"
    >
      <div className="text-xl font-bold">{name}</div>
      <div className="text-md text-gray-300">Buy {quantity} in {category}.</div>
    </li>
  );
};

export default Item;
