
import { useState, useEffect } from "react";

export default function ExamPage() {
  // ---------------- Dummy Exam Data ----------------
  const examData = {
    title: "Python Basics",
    description: "Final exam for Python beginners.",
    duration: 2,
    questions: [
      {
        _id: "q1",
        type: "multiple-choice",
        text: "Which of these is a Python data type?",
        options: ["int", "string", "bool", "all of the above"],
        correctAnswer: "all of the above"
      },
      {
        _id: "q2",
        type: "true-false",
        text: "Python is a compiled language.",
        correctAnswer: "False"
      },
      {
        _id: "q3",
        type: "short-answer",
        text: "Explain the difference between list and tuple in Python.",
        correctAnswer: "List is mutable, tuple is immutable."
      }
    ]
  };

  // ---------------- States ----------------
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(examData.duration * 60); 
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState([]);

  const question = examData.questions[currentQuestion];

  // ---------------- Timer ----------------
  useEffect(() => {
    if (submitted) return;

    if (timeLeft <= 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, submitted]);

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // ---------------- Handlers ----------------
  const handleOptionSelect = (option) => {
    setAnswers({ ...answers, [question._id]: option });
  };

  const nextQuestion = () => {
    if (currentQuestion < examData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const res = examData.questions.map((q) => {
      const userAnswer = answers[q._id] || "";
      const isCorrect =
        q.type === "short-answer"
          ? userAnswer.trim().toLowerCase() === q.correctAnswer.trim().toLowerCase()
          : userAnswer === q.correctAnswer;

      return {
        questionId: q._id,
        text: q.text,
        userAnswer,
        correctAnswer: q.correctAnswer,
        isCorrect
      };
    });

    setResults(res);
    setSubmitted(true);
  };

  const score = results.filter(r => r.isCorrect).length;

  // ---------------- UI ----------------
  if (submitted) {
    return (
      <div className="min-h-screen p-8 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">{examData.title} - Results</h1>
        <p className="text-gray-600 mb-4">Score: {score} / {examData.questions.length}</p>

        {results.map((r) => (
          <div key={r.questionId} className="mb-3 p-3 border rounded bg-white">
            <p className="font-semibold">{r.text}</p>
            <p>Your answer: {r.userAnswer || "No Answer"}</p>
            <p>Correct answer: {r.correctAnswer}</p>
            <p className={r.isCorrect ? "text-green-600" : "text-red-600"}>
              {r.isCorrect ? "Correct" : "Wrong"}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <header className="mb-6">
        <h1 className="text-2xl font-bold">{examData.title}</h1>
        <p className="text-gray-500">{examData.description}</p>
        <p className="text-gray-600 mt-1">
          Question {currentQuestion + 1} of {examData.questions.length} • Time left: {formatTime(timeLeft)}
        </p>
      </header>

      <main className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">{question.text}</h2>

        <div className="space-y-3">
          {question.type === "multiple-choice" &&
            question.options.map((opt) => (
              <button
                key={opt}
                className={`w-full text-left p-3 rounded-lg border ${
                  answers[question._id] === opt ? "bg-blue-100 border-primary" : "border-gray-300"
                }`}
                onClick={() => handleOptionSelect(opt)}
              >
                {opt}
              </button>
            ))}

          {question.type === "true-false" &&
            ["True", "False"].map((opt) => (
              <button
                key={opt}
                className={`w-full text-left p-3 rounded-lg border ${
                  answers[question._id] === opt ? "bg-blue-100 border-primary" : "border-gray-300"
                }`}
                onClick={() => handleOptionSelect(opt)}
              >
                {opt}
              </button>
            ))}

          {question.type === "short-answer" && (
            <textarea
              value={answers[question._id] || ""}
              onChange={(e) => handleOptionSelect(e.target.value)}
              className="w-full p-3 border rounded-lg"
              placeholder="Type your answer here..."
              rows={4}
            />
          )}
        </div>
      </main>

      <footer className="flex justify-between">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>

        {currentQuestion === examData.questions.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded-lg"
          >
            Submit Exam
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            Next
          </button>
        )}
      </footer>
    </div>
  );
}
