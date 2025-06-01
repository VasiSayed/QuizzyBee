import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Createquize() {
  const [questionlist, setquestionlist] = useState([]);
  const [question, setQuestion] = useState("");
  const [que1, setQue1] = useState("");
  const [que2, setQue2] = useState("");
  const [que3, setQue3] = useState("");
  const [que4, setQue4] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  function addQuestion() {
    // Trim all inputs before adding
    const q = question.trim();
    const o1 = que1.trim();
    const o2 = que2.trim();
    const o3 = que3.trim();
    const o4 = que4.trim();
    const ans = answer.trim();

    if (![o1, o2, o3, o4].includes(ans)) {
      alert("Answer must be one of the options!");
      return;
    }

    setquestionlist([...questionlist, [q, o1, o2, o3, o4, ans]]);

    // Reset inputs
    setQuestion("");
    setQue1("");
    setQue2("");
    setQue3("");
    setQue4("");
    setAnswer("");
  }

  function removeQuestion(index) {
    setquestionlist(questionlist.filter((_, idx) => idx !== index));
  }

  const styles = {
    container: {
      maxWidth: "600px",
      margin: "40px auto",
      padding: "20px",
      border: "2px solid #ccc",
      borderRadius: "16px",
      fontFamily: "Segoe UI, sans-serif",
      backgroundColor: "#f9f9f9",
    },
    formGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      marginBottom: "20px",
    },
    label: {
      fontWeight: "bold",
      fontSize: "14px",
      marginBottom: "4px",
    },
    input: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    select: {
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      padding: "12px",
      backgroundColor: "#007BFF",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontWeight: "bold",
      marginTop: "10px",
    },
    questionCard: {
      backgroundColor: "#fff",
      padding: "15px",
      borderRadius: "12px",
      border: "1px solid #ddd",
      marginBottom: "15px",
    },
    questionTitle: {
      fontWeight: "bold",
      fontSize: "16px",
      marginBottom: "10px",
    },
    optionsList: {
      paddingLeft: "20px",
      marginBottom: "8px",
    },
    answer: {
      color: "green",
      fontWeight: "bold",
    },
    removeButton: {
      backgroundColor: "#ff4d4f",
      color: "white",
      border: "none",
      padding: "8px 12px",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "10px",
    },
  };

  const isAddDisabled =
    !(
      question.trim() &&
      que1.trim() &&
      que2.trim() &&
      que3.trim() &&
      que4.trim() &&
      answer.trim()
    );

  return (
    <div style={styles.container}>
      <form style={styles.formGroup} onSubmit={(e) => e.preventDefault()}>
        <label style={styles.label} htmlFor="question">
          Question
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Option 1</label>
        <input
          type="text"
          value={que1}
          onChange={(e) => setQue1(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Option 2</label>
        <input
          type="text"
          value={que2}
          onChange={(e) => setQue2(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Option 3</label>
        <input
          type="text"
          value={que3}
          onChange={(e) => setQue3(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Option 4</label>
        <input
          type="text"
          value={que4}
          onChange={(e) => setQue4(e.target.value)}
          required
          style={styles.input}
        />

        <label style={styles.label}>Select Answer</label>
        <select
          value={answer}
          required
          onChange={(e) => setAnswer(e.target.value)}
          style={styles.select}
        >
          <option value="">-- Select --</option>
          {[que1, que2, que3, que4]
            .filter((opt) => opt.trim())
            .map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
        </select>

        <button
          disabled={isAddDisabled}
          type="button"
          onClick={addQuestion}
          style={styles.button}
        >
          Add Question
        </button>
      </form>

      {questionlist.map((value, index) => (
        <div key={index} style={styles.questionCard}>
          <div style={styles.questionTitle}>
            Question {index + 1}: {value[0]}
          </div>
          <ol style={styles.optionsList}>
            <li>{value[1]}</li>
            <li>{value[2]}</li>
            <li>{value[3]}</li>
            <li>{value[4]}</li>
          </ol>
          <div style={styles.answer}>Answer: {value[5]}</div>
          <button
            onClick={() => removeQuestion(index)}
            style={styles.removeButton}
          >
            Remove Question
          </button>
        </div>
      ))}

      <button
        disabled={questionlist.length === 0}
        style={styles.button}
        onClick={() => {
          navigate("/StartQuize", { state: { questions: questionlist } });
        }}
      >
        Give Quiz
      </button>
    </div>
  );
}

export default Createquize;
