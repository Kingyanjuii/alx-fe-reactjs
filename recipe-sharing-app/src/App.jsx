// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useUser } from "./UserContext";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

// NEW imports (added)
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  const { user, logout } = useUser();

  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/">Home</Link> | <Link to="/add">Add Recipe</Link>
          {user && (
            <>
              {" "}
              | <button onClick={logout}>Logout</button>
            </>
          )}
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h1>Recipe Sharing App</h1>
                <SearchBar />

                {/* Main layout: left = list, right = favorites + recommendations */}
                <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20 }}>
                  <div>
                    <RecipeList />
                  </div>

                  <aside>
                    {/* NEW: Favorites and Recommendations */}
                    <FavoritesList />
                    <RecommendationsList />
                  </aside>
                </div>
              </>
            }
          />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
