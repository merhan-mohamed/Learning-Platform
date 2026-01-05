import React from 'react'

const QuestionsTable = ({
  questions = [],
  loading,
  error,
  onEdit,
  onDelete,
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        Loading questions...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="p-3 text-left">Question</th>
            <th className="p-3 text-left">Type</th>
            <th className="p-3 text-left">Correct Answer</th>
            <th className="p-3 text-center">Points</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {questions.length === 0 ? (
            <tr>
              <td
                colSpan="5"
                className="p-6 text-center text-gray-500"
              >
                No questions found
              </td>
            </tr>
          ) : (
            questions.map((q) => (
              <tr
                key={q._id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Question Text */}
                <td className="p-3 max-w-md truncate text-gray-800">
                  {q.question}
                </td>

                {/* Type */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${
                        q.type === "multiple-choice"
                          ? "bg-blue-100 text-blue-700"
                          : q.type === "true-false"
                          ? "bg-green-100 text-green-700"
                          : "bg-purple-100 text-purple-700"
                      }
                    `}
                  >
                    {q.type}
                  </span>
                </td>

                {/* Correct Answer */}
                <td className="p-3">
                  {q.type === "true-false" ? (
                    <span
                      className={`font-semibold ${
                        q.correctAnswer === "True"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {q.correctAnswer}
                    </span>
                  ) : (
                    <span className="font-medium text-gray-700">
                      {q.correctAnswer}
                    </span>
                  )}
                </td>

                {/* Points */}
                <td className="p-3 text-center font-medium">
                  {q.points}
                </td>

                {/* Actions */}
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => onEdit(q)}
                    className="px-3 py-1 text-xs rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(q._id)}
                    className="px-3 py-1 text-xs rounded bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionsTable;

