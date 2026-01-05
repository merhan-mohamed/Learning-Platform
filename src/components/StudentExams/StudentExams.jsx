
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function MyExams() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);

  const [studentExams, setStudentExams] = useState([]);
  const [loading, setLoading] = useState(true);

  // ----------------- Get All Exams -----------------
  useEffect(() => {
    const fetchExams = async () => {
      try {
        const res = await axios.get("https://edu-master-psi.vercel.app/exam", {
          headers: { token }
        });
        setStudentExams(res.data.data);
      } catch (err) {
        console.log(err.response?.data);
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [token]);

  if (loading) return <p>Loading exams...</p>;

  // ----------------- Start Exam -----------------
  const startExam = async (examId) => {
    try {
      const res = await axios.post(
        `https://edu-master-psi.vercel.app/studentExam/start/${examId}`,
        {},
        { headers: { token } }
      );

      console.log("Start Exam Response:", res.data);

      // Navigate to ExamPage
      navigate(`/exampage/${examId}`, {
        state: { examData: res.data.data }
      });

    } catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <div className="space-y-4">
      {studentExams.map((exam) => (
        <div
          key={exam._id}
          className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">{exam.title}</h2>
            <p className="text-sm text-gray-500">
              ⏱ {exam.duration} min • 📄 {exam.questions.length} questions
            </p>
            <p className="text-sm text-gray-400 mt-1">{exam.description}</p>
          </div>

          <button
            onClick={() => startExam(exam._id)}
            className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-primaryHover transition"
          >
            Start Exam
          </button>
        </div>
      ))}
    </div>
  );
}
