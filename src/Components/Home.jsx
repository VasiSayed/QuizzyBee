import React from "react";

function Home() {
  return (
    <div
      style={{
        padding: "60px 5%",
        maxWidth: "900px",
        margin: "0 auto",
        fontFamily: "'Segoe UI', sans-serif",
        background: "linear-gradient(145deg, #ffffff, #f0f4ff)",
        borderRadius: "16px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.12)",
        marginTop: "60px",
      }}
    >
      <h1
        style={{
          fontSize: "38px",
          color: "#2c3e50",
          marginBottom: "20px",
          borderBottom: "3px solid #007bff",
          display: "inline-block",
          paddingBottom: "6px",
        }}
      >
        🎓 Welcome to QuizzyBee
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#34495e",
          lineHeight: "1.8",
          marginTop: "20px",
        }}
      >
        QuizzyBee is a fun and interactive quiz application designed to test
        your knowledge across various topics. Whether you're preparing for
        competitive exams, brushing up on academics, or just looking to
        challenge yourself, QuizzyBee has something for everyone.
      </p>

      <h2
        style={{
          fontSize: "26px",
          color: "#007bff",
          marginTop: "40px",
          marginBottom: "15px",
        }}
      >
        💡 Why Choose QuizzyBee?
      </h2>

      <ul
        style={{
          fontSize: "17px",
          color: "#2f3640",
          paddingLeft: "20px",
          lineHeight: "1.8",
        }}
      >
        <li>✅ User-friendly interface with real-time scoring</li>
        <li>✅ Questions from multiple categories and levels</li>
        <li>✅ Instant feedback on your answers</li>
        <li>✅ Re-attempt quizzes and track your progress</li>
      </ul>

      <h2
        style={{
          fontSize: "26px",
          color: "#007bff",
          marginTop: "40px",
          marginBottom: "10px",
        }}
      >
        🚀 How It Works
      </h2>

      <p
        style={{
          fontSize: "18px",
          color: "#34495e",
          lineHeight: "1.8",
        }}
      >
        After selecting a quiz, you will be presented with a series of
        questions. Each question has multiple-choice answers, and your responses
        will be scored instantly upon submission. At the end of each quiz,
        you’ll see your total score and a breakdown of correct/incorrect
        answers.
      </p>

      <p
        style={{
          fontSize: "18px",
          color: "#2d3436",
          marginTop: "30px",
          fontWeight: "500",
        }}
      >
        🎯 Start your learning journey today with <strong>QuizzyBee</strong> –
        where learning meets fun!
      </p>
    </div>
  );
}

export default Home;
