import React from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'

export default function App() {
  return (
    <div
      style={{
        maxWidth: 900,
        margin: '40px auto',
        padding: 20,
        fontFamily: 'system-ui, -apple-system, Roboto, sans-serif',
      }}
    >
      <h1>Recipe Sharing App</h1>

      <section style={{ marginBottom: 24 }}>
        <AddRecipeForm />
      </section>

      <section>
        <h2>Recipes</h2>
        <RecipeList />
      </section>
    </div>
  )
}
