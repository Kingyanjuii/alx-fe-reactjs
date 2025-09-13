import React from "react";
import { useRecipeStore } from "../components/recipeStore";

const RecipeCard = ({ onSelectRecipe }) => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="recipe-card-list">
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="recipe-card"
          onClick={() => onSelectRecipe(recipe)}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
