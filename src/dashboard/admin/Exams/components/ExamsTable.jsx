
import React from "react";
import { useNavigate } from "react-router-dom";

const ExamsTable = ({
  exams = [],
  loading,
  error,
  search = "",
  classFilter,
  statusFilter,
  onEdit,
  onDelete,
}) => {
  const navigate = useNavigate();
  // 🔍 Frontend filtering (SAFE)
  const filteredExams = exams.filter((exam) => {
    const title = exam?.title?.toLowerCase() || "";
    const searchValue = search.toLowerCase();

    const matchSearch = title.includes(searchValue);

    const matchClass = classFilter
      ? exam?.classLevel === classFilter
      : true;

    const matchStatus = statusFilter
      ? statusFilter === "published"
        ? exam?.isPublished
        : !exam?.isPublished
      : true;

    return matchSearch && matchClass && matchStatus;
  });

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow p-6 text-center text-gray-500">
        Loading exams...
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
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Class</th>
            <th className="p-3 text-left">Duration</th>
            <th className="p-3 text-left">Questions</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredExams.length === 0 ? (
            <tr>
              <td colSpan="6" className="p-6 text-center text-gray-500">
                No exams found
              </td>
            </tr>
          ) : (
            filteredExams.map((exam) => (
              <tr
                key={exam._id}
                className="border-b hover:bg-gray-50 transition"
              >
                {/* Title */}
                <td className="p-3 font-medium text-gray-800">
                  {exam?.title || "-"}
                </td>

                {/* Class */}
                <td className="p-3 text-gray-600">
                  {exam?.classLevel || "-"}
                </td>

                {/* Duration */}
                <td className="p-3">
                  {exam?.duration ? `${exam.duration} min` : "-"}
                </td>

                {/* Questions */}
                <td className="p-3">
                  {exam?.questions?.length ?? 0}
                </td>

                {/* Status */}
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      exam?.isPublished
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {exam?.isPublished ? "Published" : "Draft"}
                  </span>
                </td>

                {/* Actions */}
                <td className="p-3 flex gap-2">
                  <button
                    onClick={() => onEdit(exam)}
                    className="px-3 py-1 text-xs rounded bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(exam._id)}
                    className="px-3 py-1 text-xs rounded bg-red-100 text-red-700 hover:bg-red-200"
                  >
                    Delete
                  </button>

                  <button
                  onClick={() => navigate(`/dashboard/admin/exams/${exam._id}/questions`)}
                    className="px-3 py-1 text-xs rounded bg-blue-100 text-blue-700 hover:bg-blue-200"
                  >
                    Questions
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

export default ExamsTable;