import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import recipesData from "../data.json";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id.toString() === id.toString()
    );
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-20 text-gray-700">
        <h2 className="text-2xl font-bold">Recipe not found</h2>
        <Link
          to="/"
          className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow mt-10">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 sm:h-80 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
        {recipe.title}
      </h1>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">
        {recipe.description}
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700 text-sm sm:text-base">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">Instructions</h2>
        <ol className="list-decimal ml-6 text-gray-700 space-y-2 text-sm sm:text-base">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm sm:text-base"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
