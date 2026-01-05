import { useEffect, useState } from "react";

const ExamModal = ({ onClose, exam, onSubmit }) => {
  const isEdit = Boolean(exam);

  const [form, setForm] = useState({
    title: "",
    description: "",
    classLevel: "",
    duration: 30,
    startDate: "",
    endDate: "",
    isPublished: false,
  });

  // 🧠 Fill form in edit mode
  useEffect(() => {
    if (exam) {
      setForm({
        title: exam.title || "",
        description: exam.description || "",
        classLevel: exam.classLevel || "",
        duration: exam.duration || 30,
        isPublished: exam.isPublished || false,
        startDate: exam.startDate || "",
        endDate: exam.endDate || "",
      });
    }
  }, [exam]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSubmit(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 space-y-4">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {isEdit ? "Edit Exam" : "Create Exam"}
          </h2>

          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Title */}
        <input
          name="title"
          placeholder="Exam Title"
          className="border rounded-lg px-4 py-2 w-full"
          value={form.title}
          onChange={handleChange}
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Exam Description"
          rows={3}
          className="border rounded-lg px-4 py-2 w-full"
          value={form.description}
          onChange={handleChange}
        />

        {/* Class */}
        <select
          name="classLevel"
          className="border rounded-lg px-4 py-2 w-full"
          value={form.classLevel}
          onChange={handleChange}
        >
          <option value="">Select Class</option>
          <option value="Grade 1 Secondary">Grade 1 Secondary</option>
          <option value="Grade 2 Secondary">Grade 2 Secondary</option>
          <option value="Grade 3 Secondary">Grade 3 Secondary</option>
        </select>

        {/* Duration */}
        <input
          name="duration"
          type="number"
          min={1}
          placeholder="Duration (minutes)"
          className="border rounded-lg px-4 py-2 w-full"
          value={form.duration}
          onChange={handleChange}
        />

        {/* Start Date */}
        <input
          name="startDate"
          type="date"
          className="border rounded-lg px-4 py-2 w-full"
          value={form.startDate}
          onChange={(e)=> setForm({...form, startDate: e.target.value})}
        />

        {/* End Date */}
        <input
          name="endDate"
          type="date"
          className="border rounded-lg px-4 py-2 w-full"
          value={form.endDate}
          onChange={(e)=> setForm({...form, endDate: e.target.value})}
        />

        {/* Publish */}
        <label className="flex items-center gap-2 text-sm">
          <input
            name="isPublished"
            type="checkbox"
            checked={form.isPublished}
            onChange={handleChange}
          />
          Publish exam
        </label>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {isEdit ? "Save Changes" : "Create Exam"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamModal;