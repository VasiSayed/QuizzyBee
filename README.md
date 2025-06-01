# QuizzyBee 🎯

**QuizzyBee** is a dynamic and responsive web-based quiz application built with **React** and **React Router**. It allows users to take multiple-choice quizzes, check their scores instantly, and even create custom quizzes with ease.


## 🚀 Features

- ✅ Take interactive quizzes with multiple-choice questions
- 📊 Instant score calculation and feedback after submission
- 🔁 Option to reattempt the quiz
- ➕ Create your own quiz questions
- 📱 Fully responsive design (mobile & desktop friendly)
- 💡 Built with clean, modern UI and inline styling


## 🛠️ Tech Stack

- **Frontend**: React (with Hooks), React Router
- **Styling**: Inline CSS (fully customizable)
- **Routing**: `react-router-dom`


## 📸 Demo Preview

![Quiz Screenshot](https://your-demo-image-link.com) <!-- (Optional: Add a screenshot) -->


## 📂 Project Structure

QuizzyBee/
│
├── public/
│ └── index.html
│
├── src/
│ ├── components/
│ │ └── CreateQuiz.js
│ │ └── StartQuiz.js
│ ├── App.js
│ ├── index.js
│ └── App.css
│
├── package.json
└── README.md

---

## 🧠 Sample Questions Format

Questions are stored in an array where each entry contains:
- Question
- 4 options
- Correct answer (as the last element)

```js
[
  "What does HTML stand for?",
  "Hyperlinks and Text Markup Language",
  "Home Tool Markup Language",
  "Hyper Text Markup Language",
  "Hyperlink Text Management Language",
  "Hyper Text Markup Language", // <-- Correct Answer
]
🧪 How to Run Locally
Clone the repo


git clone https://github.com/VasiSayed/QuizzyBee.git
cd QuizzyBee
Install dependencies


npm install
Start the app


npm start
Open http://localhost:3000 in your browser.

📌 Routes
Route	Description
/	Home / Navbar
/StartQuize	Start the quiz session
/CreateQuize	Create your own quiz

🙌 Author
Vasi Sayed
🔗 GitHub

📃 License
This project is open source and free to use under the MIT License.

🌟 Star this repo if you like it!


