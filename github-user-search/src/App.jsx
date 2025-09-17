import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>GitHub User Search Application</h1>
      <Search onSearch={handleSearch} />

      {/* Conditional Rendering */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt={userData.login}
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
            View GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
