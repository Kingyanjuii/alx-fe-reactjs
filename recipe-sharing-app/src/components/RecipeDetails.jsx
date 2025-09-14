// src/components/RecipeDetails.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = ({ recipeId: propRecipeId }) => {
  // Support both route usage and prop usage
  const params = useParams();
  const recipeId = propRecipeId ?? params.id;

  const recipes = useRecipeStore((state) => state.recipes);
  const recipe = recipes.find((r) => r.id === Number(recipeId));

  // favorites actions
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  if (!recipe) return <p>Recipe not found</p>;

  const isFavorite = favorites.includes(recipe.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  return (
    <div>
      <h2>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ margin: "8px 0" }}>
        <button onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>

      {/* Keep the existing edit & delete UI */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
