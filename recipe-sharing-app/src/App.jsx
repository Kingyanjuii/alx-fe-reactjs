import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore"; // updated path
import RecipeDetails from "./components/RecipeDetails";
import { useUser } from "./UserContext";

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const { user } = useUser();

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <h1>Recipe Sharing App</h1>
        {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>All Recipes</h2>
                <ul>
                  {recipes.map((recipe) => (
                    <li key={recipe.id}>
                      <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
