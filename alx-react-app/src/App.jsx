// src/App.jsx
import React from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <WelcomeMessage />
      <h1>My React App</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Software engineer who enjoys gaming" />
    </div>
  );
}

export default App;
