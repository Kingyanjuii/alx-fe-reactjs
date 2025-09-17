import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(searchParams);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center p-12 bg-gray-900 min-h-screen text-white">
      <h1 className="text-4xl font-bold mb-6">GitHub User Search Application</h1>
      <Search onSearch={handleSearch} />

      {/* Conditional Rendering */}
      {loading && <p className="mt-6 text-xl">Loading...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      {userData && userData.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.map((user) => (
            <div
              key={user.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-gray-800"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-24 h-24 rounded-full mx-auto mb-2"
              />
              <h2 className="text-xl font-semibold">{user.name || user.login}</h2>
              <p className="text-sm text-gray-400">
                Location: {user.location || "Not specified"}
              </p>
              <p className="text-sm">Public Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mt-2 inline-block"
              >
                View GitHub Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
