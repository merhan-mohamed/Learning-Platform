import { BrowserRouter, Routes, Route } from "react-router-dom";

// Admin Layout
import AdminLayout from "./dashboard/admin/Layout/AdminLayout";

// Admin Views

import Dashboard from './dashboard/admin/Views/Dashboard'
import Exams from './dashboard/admin/Exams/Exams'
import Users from './dashboard/admin/Views/Users'
import Coureses from './dashboard/admin/Views/Coureses'
import HomePage from './components/homepage/HomePage'
import PublicLayout from './components/Layout/PublicLayout'
import Courses from './components/Courses'
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import UpdatePassword from "./pages/auth/UpdatePassword"
import Profile from "./pages/profile/Profile"
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import Question from "./dashboard/admin/Question/Question";
import ExamQuestions from "./dashboard/admin/Question/ExamQuestion";
import GeneralDashboard from "./components/GeneralDashboard";
import StudentsCourses from "./components/StudentsCourses"
import ExamPage from "./components/StudentExams/ExamPage";
import StudentExams from "./components/StudentExams/StudentExams";




const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />

          {/* Public Routes */}
          <Route path="courses" element={<Courses />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="students" element={<GeneralDashboard/>} />
          <Route path="/Courses/:id" element={<StudentsCourses />} />
          <Route path="contact" element={<Contact />} />
          <Route path='profile' element={<Profile />} />
          <Route path='/exampage/:examId' element={<ExamPage />} />
          <Route path='studentexams' element={<StudentExams/>} />

          {/* Auth Routes */}
          <Route path='login' element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password' element={<ResetPassword />} />
          <Route path="update-password" element={<UpdatePassword />} />

        </Route>

        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="exams" element={<Exams />} />
          <Route path="users" element={<Users />} />
          <Route path="courses" element={<Coureses />} />
          <Route path="exams/:examId/questions" element={<ExamQuestions/>} />
        </Route>

        <Route path="*" element={<div>404</div>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
