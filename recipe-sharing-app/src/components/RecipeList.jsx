import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "../recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  // Run filtering whenever search term changes
  useEffect(() => {
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const listToShow = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {listToShow.length > 0 ? (
          listToShow.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

export default RecipeList;
