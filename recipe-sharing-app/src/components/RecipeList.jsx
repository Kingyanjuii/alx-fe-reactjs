import React from 'react'
import { useRecipeStore } from './recipeStore'

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes)

  if (!recipes || recipes.length === 0) {
    return <div>No recipes yet — add one using the form above.</div>
  }

  return (
    <div>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid #e3e3e3',
            padding: 12,
            marginBottom: 10,
            borderRadius: 6,
          }}
        >
          <h3 style={{ margin: '0 0 6px' }}>{recipe.title}</h3>
          <p style={{ margin: 0 }}>{recipe.description}</p>
        </div>
      ))}
    </div>
  )
}

export default RecipeList
