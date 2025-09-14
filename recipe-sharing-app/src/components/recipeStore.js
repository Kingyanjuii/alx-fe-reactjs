// src/components/recipeStore.js
import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: "Pilau", description: "Spiced rice with meat" },
    { id: 2, title: "Chapati", description: "Flatbread, soft and delicious" },
  ],

  // Search + Filtering (existing)
  searchTerm: "",
  filteredRecipes: [],
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // CRUD (existing)
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, { ...recipe, id: Date.now() }],
    })),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // -------------------------
  // Favorites & Recommendations (NEW)
  // -------------------------
  // favorites: store recipe IDs that the user has favorited
  favorites: [],

  // Add a recipe id to favorites (no duplicates)
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  // Remove a recipe id from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // recommendations array (holds recipe objects)
  recommendations: [],

  // Generate recommendations (simple mock logic using favorites)
  // - Finds recipes not yet favorited that share words with favorited titles/descriptions
  // - Falls back to a small random sample (excluding favorites) if none found
  generateRecommendations: () => {
    const { recipes, favorites } = get();

    // if no favorites, we choose a small sample (first few non-favorites)
    if (!favorites || favorites.length === 0) {
      const fallback = recipes.filter((r) => !favorites.includes(r.id)).slice(0, 5);
      set({ recommendations: fallback });
      return;
    }

    // build search tokens from favorite titles/descriptions
    const favText = recipes
      .filter((r) => favorites.includes(r.id))
      .map((r) => `${r.title} ${r.description}`.toLowerCase())
      .join(" ");

    const tokens = [...new Set(favText.split(/\s+/).filter(Boolean))];

    // find non-favorited recipes that match at least one token
    const recommended = recipes.filter((r) => {
      if (favorites.includes(r.id)) return false; // skip already favorited
      const text = `${r.title} ${r.description}`.toLowerCase();
      return tokens.some((t) => t.length > 2 && text.includes(t)); // ignore very short tokens
    });

    // If none found, fallback to first few non-favorites
    const final = recommended.length > 0 ? recommended : recipes.filter((r) => !favorites.includes(r.id)).slice(0, 5);

    set({ recommendations: final });
  },
}));
