

import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";

import StatCard from "./components/StatCard";
import RecentExams from "./components/RecentExams";
import RecentQuestions from "./components/RecentQuestions";

// ✅ charts
import CoursesExamsBarChart from "../charts/CouresExamsBarChaert";
import UsersLineChart from "../charts/UsersLineChart";

// thunks
import { fetchExamsAdmin } from "../../../Redux/thunks/examThunks";
import { fetchQuestionsByExam } from "../../../Redux/thunks/questionThunks";

const Dashboard = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  /* ================= SELECTORS ================= */
  const exams = useSelector((state) => state.exams.exams || []);
  const questions = useSelector((state) => state.questions.questions || []);

  /* ================= FETCH EXAMS ================= */
  useEffect(() => {
    if (!token) return;
    dispatch(fetchExamsAdmin({ token }));
  }, [dispatch, token]);

  /* ================= FETCH QUESTIONS ================= */
  useEffect(() => {
    if (!token || !exams.length) return;

    // Dashboard → نجيب أسئلة آخر امتحان بس
    const lastExam = exams[0];
    dispatch(fetchQuestionsByExam({ token, examId: lastExam._id }));
  }, [dispatch, token, exams]);

  /* ================= STATS ================= */
  const totalExams = exams.length;
  const totalQuestions = questions.length;

  const totalPoints = useMemo(() => {
    return questions.reduce((sum, q) => sum + (q.points || 0), 0);
  }, [questions]);

  const avgQuestions =
    totalExams === 0 ? 0 : Math.round(totalQuestions / totalExams);

  /* ================= CHART DATA ================= */

  // Courses vs Exams (مؤقت – لحد ما تربط الكورسات)
  const coursesExamsData = useMemo(() => {
    return [
      {
        name: "Platform",
        courses: 0, // لما تربط courses خليها courses.length
        exams: totalExams,
      },
    ];
  }, [totalExams]);

  // Users growth (dummy data – backend بعدين)
  const usersChartData = [
    { month: "Jan", users: 120 },
    { month: "Feb", users: 200 },
    { month: "Mar", users: 350 },
    { month: "Apr", users: 480 },
    { month: "May", users: 620 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* ===== STATS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <StatCard title="Total Exams" value={totalExams} />
        <StatCard title="Total Questions" value={totalQuestions} />
        <StatCard title="Total Points" value={totalPoints} />
        <StatCard title="Avg Questions / Exam" value={avgQuestions} />
      </div>

      {/* ===== CHARTS ===== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CoursesExamsBarChart data={coursesExamsData} />
        <UsersLineChart data={usersChartData} />
      </div>

      {/* ===== TABLES ===== */}
      <RecentExams exams={exams.slice(0, 5)} />
      <RecentQuestions questions={questions.slice(0, 5)} />
    </div>
  );
};

export default Dashboard;