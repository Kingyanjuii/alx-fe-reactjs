import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Please enter at least two ingredients.";
    } else {
      const ingredientList = ingredients.split(",").map((i) => i.trim());
      if (ingredientList.length < 2) {
        newErrors.ingredients =
          "Include at least two ingredients separated by commas.";
      }
    }

    if (!instructions.trim()) {
      newErrors.instructions = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log({
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions,
      });

      alert("Recipe submitted successfully!");
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Add a New Recipe
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Recipe Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full border ${
                errors.title ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="Enter recipe title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Ingredients
            </label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className={`w-full border ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="List ingredients separated by commas"
            ></textarea>
            {errors.ingredients && (
              <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
            )}
          </div>

          {/* Instructions */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Preparation Steps
            </label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className={`w-full border ${
                errors.instructions ? "border-red-500" : "border-gray-300"
              } rounded-lg px-4 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
              placeholder="Describe how to prepare the recipe"
            ></textarea>
            {errors.instructions && (
              <p className="text-red-500 text-sm mt-1">
                {errors.instructions}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition w-full md:w-auto"
            >
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
