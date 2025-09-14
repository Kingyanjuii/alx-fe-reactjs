// src/components/RecommendationsList.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  return (
    <div>
      <h2>Recommended For You</h2>

      <div style={{ marginBottom: 8 }}>
        <button onClick={() => generateRecommendations()}>
          Generate Recommendations
        </button>
      </div>

      {recommendations.length === 0 ? (
        <p>No recommendations yet — click the button to generate.</p>
      ) : (
        recommendations.map((r) => (
          <div key={r.id} style={{ border: "1px solid #eee", padding: 8, marginBottom: 8 }}>
            <h3>
              <Link to={`/recipe/${r.id}`}>{r.title}</Link>
            </h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecommendationsList;
