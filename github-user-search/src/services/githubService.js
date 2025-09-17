import axios from "axios";

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data; // Return user data
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Throw error to handle in component
  }
};
