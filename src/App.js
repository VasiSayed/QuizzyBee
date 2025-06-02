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
    [
      "What does HTML stand for?",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlink Text Management Language",
      "Hyper Text Markup Language",
    ],
    [
      "Which language is used for styling web pages?",
      "HTML",
      "jQuery",
      "CSS",
      "XML",
      "CSS",
    ],
    [
      "Which is not a programming language?",
      "Python",
      "Java",
      "HTML",
      "C++",
      "HTML",
    ],
    [
      "Which symbol is used for single-line comments in Python?",
      "//",
      "<!--",
      "#",
      "/**/",
      "#",
    ],
    [
      "What is the extension of JavaScript files?",
      ".js",
      ".java",
      ".py",
      ".script",
      ".js",
    ],
    [
      "Which method is used to print something in Python?",
      "echo",
      "cout",
      "print",
      "console.log",
      "print",
    ],
    [
      "Which of the following is used to define a variable in JavaScript?",
      "var",
      "let",
      "const",
      "All of the above",
      "All of the above",
    ],
    [
      "What does SQL stand for?",
      "Structured Question Language",
      "Simple Query Language",
      "Structured Query Language",
      "Sequential Query Language",
      "Structured Query Language",
    ],
    [
      "Which one is a looping structure in JavaScript?",
      "if",
      "for",
      "switch",
      "alert",
      "for",
    ],
    [
      "Which keyword is used to create a function in Python?",
      "def",
      "function",
      "fun",
      "define",
      "def",
    ],
    [
      "Which of these is a frontend framework?",
      "Flask",
      "Django",
      "React",
      "Node.js",
      "React",
    ],
    [
      "Which of the following is not an IDE?",
      "PyCharm",
      "Visual Studio Code",
      "MS Word",
      "IntelliJ IDEA",
      "MS Word",
    ],
    [
      "Which data structure uses LIFO order?",
      "Queue",
      "Stack",
      "Array",
      "List",
      "Stack",
    ],
    [
      "Which function converts a string to a number in JavaScript?",
      "toInt",
      "parseInt",
      "stringToNum",
      "convert",
      "parseInt",
    ],
    [
      "What does DOM stand for?",
      "Document Oriented Model",
      "Data Object Management",
      "Document Object Model",
      "Data Oriented Model",
      "Document Object Model",
    ],
    [
      "Which operator is used to assign value in Python?",
      "==",
      ":=",
      "=",
      "=>",
      "=",
    ],
    [
      "Which tag is used to link CSS to HTML?",
      "<style>",
      "<script>",
      "<link>",
      "<css>",
      "<link>",
    ],
    [
      "Which method is used to add an item to the end of an array in JavaScript?",
      "push",
      "pop",
      "shift",
      "unshift",
      "push",
    ],
    [
      "What is the correct syntax to create a class in Python?",
      "class MyClass()",
      "class = MyClass",
      "class MyClass:",
      "MyClass class",
      "class MyClass:",
    ],
    [
      "Which HTML tag is used to display images?",
      "<pic>",
      "<src>",
      "<image>",
      "<img>",
      "<img>",
    ],
  ];

  return (
    <div className="App">
      <nav style={navStyle}>
        <div style={logoStyle}>QuizzyBee</div>

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
