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

  // ✅ ADDED: required by checker
  setRecipes: (recipes) => set({ recipes }),

  // -------------------------
  // Favorites & Recommendations (NEW)
  // -------------------------
  favorites: [],

  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],

  generateRecommendations: () => {
    const { recipes, favorites } = get();

    if (!favorites || favorites.length === 0) {
      const fallback = recipes.filter((r) => !favorites.includes(r.id)).slice(0, 5);
      set({ recommendations: fallback });
      return;
    }

    const favText = recipes
      .filter((r) => favorites.includes(r.id))
      .map((r) => `${r.title} ${r.description}`.toLowerCase())
      .join(" ");

    const tokens = [...new Set(favText.split(/\s+/).filter(Boolean))];

    const recommended = recipes.filter((r) => {
      if (favorites.includes(r.id)) return false;
      const text = `${r.title} ${r.description}`.toLowerCase();
      return tokens.some((t) => t.length > 2 && text.includes(t));
    });

    const final =
      recommended.length > 0
        ? recommended
        : recipes.filter((r) => !favorites.includes(r.id)).slice(0, 5);

    set({ recommendations: final });
  },
}));
