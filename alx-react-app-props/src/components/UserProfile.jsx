// src/components/UserProfile.jsx
import React, { useContext } from "react";
import UserContext from "./UserContext"; // UPDATED PATH

const UserProfile = (props) => {
  const contextUser = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px", borderRadius: "8px", maxWidth: "300px", margin: "10px" }}>
      <h2 style={{ color: "blue" }}>{props.name || contextUser.name}</h2>
      <p>Age: <span style={{ fontWeight: "bold" }}>{props.age || "N/A"}</span></p>
      <p>Bio: {props.bio || "No bio available"}</p>
      <p>Context Email: {contextUser.email}</p>
    </div>
  );
};

export default UserProfile;
