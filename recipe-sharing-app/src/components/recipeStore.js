// src/components/recipeStore.js

let recipes = [
  { id: 1, title: "Pasta", ingredients: ["noodles", "sauce"] },
  { id: 2, title: "Salad", ingredients: ["lettuce", "tomato", "cucumber"] }
];

// Return all recipes
export function getRecipes() {
  return recipes;
}

// Add a recipe
export function addRecipe(recipe) {
  recipes = [...recipes, { ...recipe, id: Date.now() }];
}

// Update a recipe
export function updateRecipe(id, updatedRecipe) {
  recipes = recipes.map(r => (r.id === id ? { ...r, ...updatedRecipe } : r));
}

// Delete a recipe
export function deleteRecipe(id) {
  recipes = recipes.filter(r => r.id !== id);
}
