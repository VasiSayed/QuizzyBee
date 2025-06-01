import React, { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 24px",
    backgroundColor: "#007bff",
    color: "#ffffff",
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    flexWrap: "wrap",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };

  const navLinksStyle = {
    display: menuOpen ? "flex" : "none",
    flexDirection: "column",
    width: "100%",
    marginTop: "16px",
    gap: "16px",
  };

  const navLinksDesktop = {
    display: "flex",
    gap: "24px",
  };

  const linkStyle = {
    fontSize: "16px",
    fontWeight: "500",
    color: "#ffffff",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "background 0.3s ease",
    backgroundColor: "rgba(255,255,255,0.1)",
  };

  const hamburgerStyle = {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
  };

  const barStyle = {
    height: "3px",
    width: "25px",
    backgroundColor: "#fff",
    margin: "4px 0",
    borderRadius: "2px",
  };

  const quizQuestions = [
    /* your existing question array here */
  ];

  return (
    <div className="App">
      <nav style={navStyle}>
        <div style={logoStyle}>QuizzyBee</div>

        {/* Hamburger Icon - Visible only on small screens */}
        <div
          style={{
            ...hamburgerStyle,
            ...(window.innerWidth <= 768 && { display: "flex" }),
          }}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={barStyle}></div>
          <div style={barStyle}></div>
          <div style={barStyle}></div>
        </div>

        <div style={window.innerWidth <= 768 ? navLinksStyle : navLinksDesktop}>
          <Link to="/" style={linkStyle} onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link
            to="/StartQuize"
            style={linkStyle}
            state={{ questions: quizQuestions }}
            onClick={() => setMenuOpen(false)}
          >
            Quizzes
          </Link>
          <Link
            to="/CreateQuize"
            style={linkStyle}
            onClick={() => setMenuOpen(false)}
          >
            Create Quiz
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default App;
