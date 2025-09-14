import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useUser } from "./UserContext";
import RecipeDetails from "./components/RecipeDetails";
import AddRecipeForm from "./components/AddRecipeForm";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";

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
                <RecipeList />
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
