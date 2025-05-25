import React, { useState, useEffect } from "react";
import questions from "../data/questions";

const SECTIONS = {
  Mathematics: { start: 1, end: 15, negative: false },
  "Computer Science": { start: 16, end: 30, negative: true },
  "Logical Reasoning": { start: 31, end: 40, negative: false },
  English: { start: 41, end: 50, negative: true }
};

function QuestionPage() {
  const [responses, setResponses] = useState({});
  const [currentQ, setCurrentQ] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(90 * 60);

  useEffect(() => {
    if (!started || submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, started, submitted]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleStart = () => {
    setStarted(true);
    setResponses({});
    setCurrentQ(0);
    setTimeLeft(90 * 60);
    setSubmitted(false);
  };

  const handleOptionChange = (idx, val) => {
    setResponses({ ...responses, [idx]: val });
  };

  const calcScore = () => {
    const breakdown = {};
    let total = 0;
    Object.entries(SECTIONS).forEach(([section, config]) => {
      let score = 0;
      for (let i = config.start - 1; i < config.end; i++) {
        const res = responses[i];
        const correct = questions[i]?.answer;
        if (res) {
          if (res === correct) score += 1;
          else if (config.negative) score -= 0.25;
        }
      }
      breakdown[section] = score;
      total += score;
    });
    return { breakdown, total };
  };

  const { breakdown, total } = calcScore();

  if (!started) {
    return (
      <div style={{ textAlign: "center", marginTop: "10%" }}>
        <h1>TUEE MCA 2025 CBT Exam</h1>
        <p>Duration: 90 minutes</p>
        <button onClick={handleStart}>Start Test</button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ float: "right", fontWeight: "bold" }}>Time Left: {formatTime(timeLeft)}</div>
      <h3>
        Q{currentQ + 1}. {questions[currentQ].question}
      </h3>
      {questions[currentQ].options.map((opt, i) => {
        const letter = String.fromCharCode(65 + i);
        return (
          <div key={i}>
            <label>
              <input
                type="radio"
                name={`q-${currentQ}`}
                value={letter}
                checked={responses[currentQ] === letter}
                onChange={(e) => handleOptionChange(currentQ, e.target.value)}
              />
              {letter}. {opt}
            </label>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>
        <button onClick={() => setCurrentQ(currentQ - 1)} disabled={currentQ === 0}>
          Prev
        </button>
        <button onClick={() => setCurrentQ(currentQ + 1)} disabled={currentQ === questions.length - 1}>
          Next
        </button>
        <button onClick={() => setSubmitted(true)} style={{ background: "green", color: "#fff" }}>
          Submit
        </button>
      </div>

      {submitted && (
        <div style={{ marginTop: 30 }}>
          <h2>Results</h2>
          {Object.entries(breakdown).map(([sec, s]) => (
            <p key={sec}>
              <strong>{sec}</strong>: {s.toFixed(2)}
            </p>
          ))}
          <p><strong>Total Score:</strong> {total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default QuestionPage;
