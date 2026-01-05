const RecentExams = ({ exams }) => (
  <div className="bg-white rounded-xl shadow">
    <h3 className="p-4 font-semibold border-b">Recent Exams</h3>

    <table className="w-full text-sm">
      <thead className="bg-gray-50">
        <tr>
          <th className="p-3 text-left">Title</th>
          <th className="p-3 text-center">Questions</th>
        </tr>
      </thead>
      <tbody>
        {exams.map((exam) => (
          <tr key={exam._id} className="border-b">
            <td className="p-3">{exam.title}</td>
            <td className="p-3 text-center">
              {exam.questionsCount || 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RecentExams;