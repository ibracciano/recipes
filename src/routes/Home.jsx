// import React from 'react'

import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  const recipes = useLoaderData();
  const allRecipes = recipes.recipes;
  //   console.log(allRecipes);
  return (
    <main className="pt-16 pb-10 bg-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 w-[90%] ld:w-[80%] mx-auto">
        {allRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-gray-950 py-2 px-3 rounded-md">
            <img src={recipe.image} alt={recipe.image} className="rounded-md" />
            <div className="flex items-center justify-between my-2">
              <h1 className="text-white text-[9px]">{recipe.name}</h1>
              <button className="text-[8px] text-white bg-white bg-opacity-20 p-1 rounded-md">
                <Link to={`recipes/${recipe.id}`}>Details</Link>
              </button>
            </div>
            <p className="text-white text-sm">
              Calories: {recipe.caloriesPerServing}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
