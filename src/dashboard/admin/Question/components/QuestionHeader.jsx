const QuestionsHeader = ({ onAdd }) => (
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold">Exam Questions</h1>
      <p className="text-gray-500 text-sm">
        Manage exam questions
      </p>
    </div>
    <button
      onClick={onAdd}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      + Add Question
    </button>
  </div>
);
export default QuestionsHeader;