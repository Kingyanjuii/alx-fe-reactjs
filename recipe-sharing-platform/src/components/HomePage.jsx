import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recipesData from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
        Recipe Sharing Platform
      </h1>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4 line-clamp-3">
                {recipe.summary}
              </p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
