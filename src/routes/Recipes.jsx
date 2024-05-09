// import React from 'react'

import { useLoaderData } from "react-router-dom";
import { CiClock2 } from "react-icons/ci";
const Recipes = () => {
  const recipe = useLoaderData();
  const tags = recipe.tags;
  const ingredients = recipe.ingredients;
  const instructions = recipe.instructions;
  const mealType = recipe.mealType;
  //   console.log(tags);
  return (
    <main className="bg-gray-900 pt-16 pb-10 min-h-screen">
      <div className="w-[90%] md:w-[80%]  lg:w-[40%] mx-auto bg-gray-950 py-2 px-3 text-white relative">
        {/* images */}
        <img
          src={recipe.image}
          alt={recipe.image}
          className="h-[300px] w-full rounded-md"
        />

        {/* les tags */}
        <div className="space-x-2 absolute top-3 left-5">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-950 p-1 rounded-md text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* les informations */}
        <div className="flex items-center justify-between text-sm my-2 flex-wrap gap-2">
          <h1 className="font-bold">Name : {recipe.name}</h1>
          <p className="flex items-center gap-1">
            <CiClock2 />
            <span className="text-white text-opacity-50">
              {recipe.cookTimeMinutes + recipe.prepTimeMinutes}min
            </span>
          </p>
          <p>
            <span>Difficulty: </span>
            <span className="text-white text-opacity-50">
              {recipe.difficulty}
            </span>
          </p>
          <p>
            <span>Score: </span>
            <span className="text-white text-opacity-50">{recipe.rating} </span>
          </p>
        </div>

        {/* les types de nourriture */}
        <div className="flex justify-between items-center">
          <div>
            <div className="space-x-2 mb-2">
              {mealType.map((meal, index) => (
                <span
                  key={index}
                  className="text-white text-sm bg-orange-500 px-1 rounded-md "
                >
                  {meal}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-orange-500 px-1 rounded-md text-sm font-semibold">
            <span>{recipe.cuisine}</span>
            <span> Cuisin</span>
          </div>
        </div>

        {/* Les ingrédients */}
        <div>
          <h3>Ingredients :</h3>
          <div className="space-x-2">
            {ingredients.map((ingredient, index) => (
              <span key={index} className="text-white text-sm text-opacity-50">
                {ingredient} |
              </span>
            ))}
          </div>
        </div>

        {/* Les instructions */}
        <div className="mt-2">
          <h3>Instructions :</h3>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index} className="text-white text-sm text-opacity-50">
                - {instruction}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
};

export default Recipes;
