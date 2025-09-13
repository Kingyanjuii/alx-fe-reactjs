// src/UserContext.js
import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();

// 2. Provider component
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Example login/logout functions
  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Custom hook for consuming context
export function useUser() {
  return useContext(UserContext);
}
