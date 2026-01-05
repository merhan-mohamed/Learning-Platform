const RecentQuestions = ({ questions }) => (
  <div className="bg-white rounded-xl shadow">
    <h3 className="p-4 font-semibold border-b">Recent Questions</h3>

    <table className="w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left">Question</th>
          <th className="p-3 text-center">Type</th>
          <th className="p-3 text-center">Points</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((q) => (
          <tr key={q._id} className="border-b">
            <td className="p-3 truncate max-w-md">{q.question}</td>
            <td className="p-3 text-center">{q.type}</td>
            <td className="p-3 text-center">{q.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentQuestions;