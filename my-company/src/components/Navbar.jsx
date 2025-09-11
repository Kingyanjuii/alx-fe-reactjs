// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
      <Link to="/about" style={{ color: "#fff", textDecoration: "none" }}>About</Link>
      <Link to="/services" style={{ color: "#fff", textDecoration: "none" }}>Services</Link>
      <Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
