// src/App.jsx
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import WelcomeMessage from "./components/WelcomeMessage";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext"; // UPDATED PATH

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <MainContent />
        <Footer />
        <WelcomeMessage />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        <UserProfile name="Bob" age="30" bio="Software engineer who enjoys gaming" />
      </div>
    </UserContext.Provider>
  );
}

export default App;
