"use client";

import React, { useState, useEffect } from "react";

// Define API Fetching Function
async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || []; // Return an empty array if no meals found
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Load Function to fetch and set meal ideas
  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  // useEffect to fetch meal ideas whenever the ingredient changes
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="meal-ideas">
      <h2 className="text-2xl font-bold mb-4">Meal Ideas with {ingredient}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <li key={meal.idMeal} className="meal-item shadow-lg rounded-lg p-4">
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <div className="text-center font-semibold">{meal.strMeal}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
