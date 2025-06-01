import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Givequize() {
  const location = useLocation();
  const questions = location.state?.questions || [];

  const [selectedans, setselectedans] = useState({});
  const [score, setscore] = useState(0);
  const [totalscore, settotalscore] = useState(0);
  const [iscompleted, setiscompleted] = useState(false);

  // Hover states for buttons
  const [submitHover, setSubmitHover] = useState(false);
  const [reattemptHover, setReattemptHover] = useState(false);

  function handleSelectedAnswer(value, index) {
    setselectedans((prev) => ({
      ...prev,
      [index]: value,
    }));
  }

  function reattempt() {
    setiscompleted(false);
    setselectedans({});
    setscore(0);
    settotalscore(0);
  }

  function submit() {
    const allAnswered = questions.every((_, index) => selectedans[index]);
    if (!allAnswered) {
      alert("Please answer all the questions before submitting!");
      return;
    }

    let count = 0;
    let total = 0;
    questions.forEach((element, index) => {
      total += 10;
      const ans = element[element.length - 1];
      if (ans === selectedans[index]) {
        count += 10;
      }
    });

    setscore(count);
    settotalscore(total);
    setiscompleted(true);
  }

  const allAnswered =
    questions.length > 0 && questions.every((_, idx) => selectedans[idx]);

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ccc",
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        fontFamily: "'Segoe UI', sans-serif",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
      }}
    >
      <form>
        {!iscompleted ? (
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#007bff",
            }}
          >
            Start the Quiz
          </h1>
        ) : (
          <h1
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "#007bff",
            }}
          >
            Quiz Completed
          </h1>
        )}

        {questions.map((value, index) => {
          const [question, ...rest] = value;
          const options = rest.slice(0, 4);
          const Ans = rest[rest.length - 1];

          return (
            <div
              key={index}
              style={{
                padding: "20px",
                marginBottom: "25px",
                borderRadius: "16px",
                backgroundColor: "#f9f9f9",
                border: "1px solid #ddd",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "15px",
                  color: "#333",
                }}
              >
                Question {index + 1}: {question}
              </div>
              {options.map((optValue, opIndex) => (
                <div
                  key={opIndex}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <input
                    type="radio"
                    name={`question${index}`}
                    id={`quest${index}_opt${opIndex}`}
                    value={optValue}
                    onChange={(e) =>
                      handleSelectedAnswer(e.target.value, index)
                    }
                    checked={selectedans[index] === optValue}
                  />
                  <label
                    htmlFor={`quest${index}_opt${opIndex}`}
                    style={{
                      marginLeft: "10px",
                      fontSize: "17px",
                      cursor: "pointer",
                      color: "#444",
                    }}
                  >
                    {optValue}
                  </label>
                </div>
              ))}
              {iscompleted && (
                <div
                  style={{
                    marginTop: "10px",
                    fontSize: "16px",
                    fontWeight: "500",
                    color: selectedans[index] === Ans ? "green" : "crimson",
                    whiteSpace: "pre-line",
                  }}
                >
                  {selectedans[index] === Ans
                    ? "✔️ Correct (10 Marks)"
                    : `❌ Incorrect\nYour Ans: ${selectedans[index]}\nCorrect: ${Ans}`}
                </div>
              )}
            </div>
          );
        })}

        {iscompleted && (
          <div
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#007bff",
              marginBottom: "20px",
            }}
          >
            ✅ Your Score: {score} / {totalscore}
          </div>
        )}

        <button
          type="button"
          disabled={iscompleted || !allAnswered}
          onClick={submit}
          onMouseEnter={() => setSubmitHover(true)}
          onMouseLeave={() => setSubmitHover(false)}
          style={{
            padding: "12px 24px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            cursor: iscompleted || !allAnswered ? "not-allowed" : "pointer",
            transition: "background-color 0.3s ease",
            color: "white",
            margin: "8px 4px 0 0",
            minWidth: "140px",
            userSelect: "none",
            backgroundColor:
              iscompleted || !allAnswered
                ? "#a0c8ff"
                : submitHover
                ? "#0056b3"
                : "#007BFF",
          }}
        >
          Submit Quiz
        </button>

        {iscompleted && (
          <button
            type="button"
            onClick={reattempt}
            onMouseEnter={() => setReattemptHover(true)}
            onMouseLeave={() => setReattemptHover(false)}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
              color: "white",
              margin: "8px 4px 0 0",
              minWidth: "140px",
              userSelect: "none",
              backgroundColor: reattemptHover ? "#1e7e34" : "#28a745",
            }}
          >
            Reattempt
          </button>
        )}
      </form>
    </div>
  );
}

export default Givequize;
