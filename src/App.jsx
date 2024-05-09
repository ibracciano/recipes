import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./routes/Layout"
import ErrorPage from "./routes/ErrorPage"
import Home from "./routes/Home"
import Recipes from "./routes/Recipes"
import Search from "./routes/Search"
import { allRecipes, searchRecipe, singleRecipes } from "./api/RecipesApi"

// import React from 'react'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home />, loader: allRecipes },
      { path: "recipes/:id", element: <Recipes />, loader: singleRecipes },
      { path: "search", element: <Search />, loader: searchRecipe },
    ],
    errorElement: <ErrorPage />,
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App