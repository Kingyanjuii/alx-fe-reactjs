import React, { useState } from "react";
import Search from "./components/Search";
import { fetchUserData } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (params) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(params);
      if (data.length === 0) {
        setError("Looks like we can't find any users");
      } else {
        setUsers(data);
      }
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

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {users.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          {users.map((user) => (
            <div key={user.id} style={{ marginBottom: "20px" }}>
              <img
                src={user.avatar_url}
                alt={user.login}
                width="100"
                style={{ borderRadius: "50%" }}
              />
              <h2>{user.name || user.login}</h2>
              <p>Location: {user.location || "Not specified"}</p>
              <p>Public Repos: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
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
