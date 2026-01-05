
import { useEffect, useState } from "react";

const QuestionModal = ({ question, onClose, onSubmit }) => {
  const isEdit = Boolean(question);

  const [form, setForm] = useState({
    // question: "",
    text: "",
    type: "multiple-choice",
    options: ["", "", "", ""],
    correctAnswer: "",
    points: 1,
  });

  useEffect(() => {
    if (question) {
      setForm({
        text: question.question || "",
        type: question.type || "multiple-choice",
        options: question.options || ["", "", "", ""],
        correctAnswer: question.correctAnswer || "",
        points: question.points || 1,
      });
    }
  }, [question]);

  const handleOptionChange = (index, value) => {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm({ ...form, options: newOptions });
  };

  const handleSubmit = () => {
    onSubmit(form);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">
          {isEdit ? "Edit Question" : "Add Question"}
        </h2>

        <input
          value={form.text}
          onChange={(e) => setForm({ ...form, text: e.target.value })}
          placeholder="Question text"
          className="w-full border rounded px-3 py-2"
        />

        <select
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          className="w-full border rounded px-3 py-2"
        >
          <option value="multiple-choice">Multiple Choice</option>
          <option value="true-false">True / False</option>
          <option value="short-answer">Short Answer</option>
        </select>

        {form.type === "multiple-choice" &&
          form.options.map((opt, i) => (
            <input
              key={i}
              value={opt}
              onChange={(e) => handleOptionChange(i, e.target.value)}
              placeholder={`Option ${i + 1}`}
              className="w-full border rounded px-3 py-2"
            />
          ))}

        <input
          value={form.correctAnswer}
          onChange={(e) =>
            setForm({ ...form, correctAnswer: e.target.value })
          }
          placeholder="Correct Answer"
          className="w-full border rounded px-3 py-2"
        />

        <input
          type="number"
          value={form.points}
          onChange={(e) =>
            setForm({ ...form, points: Number(e.target.value) })
          }
          className="w-full border rounded px-3 py-2"
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 text-gray-600">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            {isEdit ? "Update" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionModal;