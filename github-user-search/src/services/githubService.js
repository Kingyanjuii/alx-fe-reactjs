// src/services/githubService.js
import axios from "axios";

const BASE_URL = "https://api.github.com";

// Advanced search: fetch users based on username, location, and minimum repositories
export const fetchUserData = async ({ username = "", location = "", minRepos = 0 }) => {
  try {
    let query = username;
    if (location) query += `+location:${location}`;
    if (minRepos > 0) query += `+repos:>=${minRepos}`;

    // GitHub Search API
    const searchResponse = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    const users = searchResponse.data.items;

    // Fetch full user details for each user
    const detailedUsers = await Promise.all(
      users.map(async (user) => {
        const res = await axios.get(`${BASE_URL}/users/${user.login}`);
        return res.data;
      })
    );

    return detailedUsers;
  } catch (error) {
    throw new Error("GitHub API request failed");
  }
};
