// src/components/FavoritesList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  const recipes = useRecipeStore((state) => state.recipes);

  const favoriteRecipes = favorites
    .map((id) => recipes.find((r) => r.id === id))
    .filter(Boolean);

  return (
    <div style={{ marginBottom: 16 }}>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map((r) => (
          <div key={r.id} style={{ border: "1px solid #eee", padding: 8, marginBottom: 8 }}>
            <h3>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
