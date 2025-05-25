import React, { useState, useEffect } from "react";
import "./App.css";
import { questions as initialQuestions, SECTIONS } from "./data/question";
import Registration from "./Registration";
import Login from "./Login";
import { API_BASE } from "./api";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./Admin";

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const sectionColors = [
  "#f87171", // red
  "#60a5fa", // blue
  "#34d399", // green
  "#fbbf24", // yellow
  "#a78bfa", // purple
  "#f472b6", // pink
];

const sectionOrder = ["Mathematics", "Computer Science", "Logical Reasoning", "English"];

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(true);
  const [responses, setResponses] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);
  const [questions, setQuestions] = useState(initialQuestions);

  const EXAM_DURATION = 90 * 60;
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);

  useEffect(() => {
    fetch(`${API_BASE}/questions`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched questions:", data); // Add this line for debugging
        setQuestions(data);
      })
      .catch(err => {
        console.error("Error fetching questions:", err);
        setQuestions([]);
      });
  }, []);

  useEffect(() => {
    if (!started || submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted, started]);

  const handleOptionChange = (qIndex, value) => {
    if (submitted) return;
    setResponses({ ...responses, [qIndex]: value });
  };

  const handlePrev = () => {
    if (submitted) return;
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const handleNext = () => {
    if (submitted) return;
    if (currentQ < questions.length - 1) setCurrentQ(currentQ + 1);
  };

  const handleStart = () => {
    setStarted(true);
    setTimeLeft(EXAM_DURATION);
    setSubmitted(false);
    setResponses({});
    setCurrentQ(0);
  };

  const toggleBookmark = (qIndex) => {
    setBookmarks((prev) =>
      prev.includes(qIndex)
        ? prev.filter((i) => i !== qIndex)
        : [...prev, qIndex]
    );
  };

  const calculateScores = () => {
    const breakdown = {};
    let total = 0;
    Object.entries(SECTIONS).forEach(([section, config], idx) => {
      let score = 0;
      for (let i = config.start - 1; i < config.end; i++) {
        const given = responses[i];
        const correct = questions[i]?.answer;
        if (given) {
          if (given === correct) score += 1;
          else if (config.negative) score -= 0.25;
        }
      }
      breakdown[section] = score;
      total += score;
    });
    return { breakdown, total };
  };

  const { breakdown, total } = calculateScores();

  const handleSubmitResult = async (resultData) => {
    await fetch(`${API_BASE}/results`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resultData),
    });
  };

  const handleExamSubmit = () => {
    // Calculate breakdown and total as you do for the dashboard
    const { breakdown, total } = calculateScores();
    const resultData = {
      user: user._id, // not user.contact!
      breakdown,
      total,
      submittedAt: new Date()
    };
    handleSubmitResult(resultData);
    setSubmitted(true);
  };

  if (!user) {
    return showLogin ? (
      <Login
        onLogin={(data) => setUser(data)}
        onSwitch={() => setShowLogin(false)}
      />
    ) : (
      <Registration
        onRegister={(data) => setUser(data)}
        onSwitch={() => setShowLogin(true)}
      />
    );
  }

  if (!started) {
    return (
      <div className="start-page-bg">
        <div className="start-card">
          <div className="logo-circle">
            <span role="img" aria-label="robot" className="logo-emoji">🤖</span>
          </div>
          <h1 className="welcome-title">Welcome to</h1>
          <h2 className="exam-name highlight-exam">TUEE MCA 2025 CBT Exam</h2>
          <p className="subtitle company-line">
            by <span className="company-name subtle-company">Robotics Pritam</span>
          </p>
          <p className="subtitle">Duration: <b>90 minutes</b></p>
          <button className="btn start-btn animated-btn" onClick={handleStart}>
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  // Before rendering question UI, check if questions are loaded:
  if (!questions || questions.length === 0) {
    return <div className="centered"><h2>Loading questions...</h2></div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/*" element={
          <div className="test-page-bg">
            {user && (
              <div className="profile-top-right">
                <div className="profile-avatar">👤</div>
                <div className="profile-info">
                  <div className="profile-name"><b>{user.name || "User"}</b></div>
                  <div className="profile-contact">{user.contact}</div>
                  <div className="profile-age">Age: {user.age}</div>
                </div>
              </div>
            )}
            <div className="exam-root">
              <div className="timer-bar">
                <span>Time Left: <b>{formatTime(timeLeft)}</b></span>
              </div>
              <div className="exam-layout">
                <div className="sidebar">
                  <h2>Questions</h2>
                  <div className="question-nav">
                    {questions.map((q, idx) => (
                      <button
                        key={idx}
                        className={`question-btn ${currentQ === idx ? "active" : ""} ${responses[idx] ? "answered" : ""} ${bookmarks.includes(idx) ? "bookmarked" : ""}`}
                        onClick={() => !submitted && setCurrentQ(idx)}
                        style={{
                          backgroundColor: responses[idx]
                            ? "#2563eb"
                            : (currentQ === idx ? "#f59e42" : "#f3f4f6"),
                          color: responses[idx] || currentQ === idx ? "#fff" : "#222"
                        }}
                        disabled={submitted}
                      >
                        {idx + 1}
                        {bookmarks.includes(idx) && <span style={{color:"#f59e42"}}>★</span>}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="main">
                  {!submitted ? (
                    <div className="question-container">
                      <h3>
                        Q{currentQ + 1}. {questions[currentQ].question}
                        <span className="section-badge">{questions[currentQ].section}</span>
                      </h3>
                      <div className="options">
                        {questions[currentQ].options.map((opt, i) => {
                          const optionId = `q${currentQ}_opt${i}`;
                          return (
                            <label key={i} htmlFor={optionId} className="option-label">
                              <input
                                type="radio"
                                id={optionId}
                                name={`q${currentQ}`}
                                value={String.fromCharCode(65 + i)}
                                checked={responses[currentQ] === String.fromCharCode(65 + i)}
                                onChange={(e) => handleOptionChange(currentQ, e.target.value)}
                                disabled={submitted}
                              /> {opt}
                            </label>
                          );
                        })}
                      </div>
                      <div className="nav-btns">
                        <button className="btn nav-btn" onClick={handlePrev} disabled={currentQ === 0 || submitted}>Previous</button>
                        <button
                          className={`bookmark-btn-modern ${bookmarks.includes(currentQ) ? "bookmarked" : ""}`}
                          onClick={() => toggleBookmark(currentQ)}
                          type="button"
                          aria-label={bookmarks.includes(currentQ) ? "Remove bookmark" : "Add bookmark"}
                        >
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill={bookmarks.includes(currentQ) ? "#f59e42" : "none"}
                            stroke="#f59e42"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ verticalAlign: "middle", transition: "fill 0.2s" }}
                          >
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span style={{ marginLeft: 8, fontWeight: 500 }}>
                            {bookmarks.includes(currentQ) ? "Bookmarked" : "Bookmark"}
                          </span>
                        </button>
                        <button className="btn nav-btn" onClick={handleNext} disabled={currentQ === questions.length - 1 || submitted}>Next</button>
                      </div>
                      <div className="submit-btn-row">
                        <button
                          className="btn submit-btn"
                          onClick={handleExamSubmit}
                          disabled={submitted}
                        >
                          Submit Exam
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="result-dashboard">
                      <h2>Result Dashboard</h2>
                      <div className="dashboard-cards">
                        {sectionOrder.map((sec, idx) => (
                          <div
                            key={sec}
                            className="dashboard-card"
                            style={{ background: sectionColors[idx % sectionColors.length] }}
                          >
                            <span className="dashboard-section">{sec}</span>
                            <span className="dashboard-score">
                              {breakdown[sec] !== undefined ? breakdown[sec].toFixed(2) : "0.00"}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="dashboard-total">
                        <strong>Total Score:</strong> <span>{total.toFixed(2)}</span>
                      </div>
                      {timeLeft === 0 && <p style={{ color: "red" }}>Time's up! Your exam was auto-submitted.</p>}
                      <button
                        className="btn restart-btn"
                        style={{ marginTop: "24px" }}
                        onClick={handleStart}
                      >
                        Restart Exam
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;