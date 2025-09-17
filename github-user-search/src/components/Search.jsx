import React, { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== "") {
      onSearch(username); // Pass the input value to parent for API call
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", width: "250px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 20px" }}>
        Search
      </button>
    </form>
  );
}

export default Search;
