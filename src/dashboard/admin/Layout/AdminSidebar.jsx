import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  BookOpen,
  FileText,
  LogOut,
  FileQuestion,
} from "lucide-react";

import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { clearUser } from "../../../features/auth/userSlice";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    navigate("/login");
  };
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition
     ${
       isActive
         ? "bg-blue-600 text-white"
         : "text-gray-300 hover:bg-gray-800 hover:text-white"
     }`;

  return (
    <aside className="w-60 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-800">
        <h1 className="text-xl font-bold tracking-wide">
          Admin<span className="text-blue-500">Panel</span>
        </h1>
        <p className="text-xs text-gray-400 mt-1">Learning Platform</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavLink to="/dashboard/admin" end className={linkClass}>
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink to="/dashboard/admin/users" className={linkClass}>
          <Users size={18} />
          Users
        </NavLink>

        <NavLink to="/dashboard/admin/courses" className={linkClass}>
          <BookOpen size={18} />
          Courses
        </NavLink>

        <NavLink to="/dashboard/admin/exams" className={linkClass}>
          <FileText size={18} />
          Exams
        </NavLink>
        {/* <NavLink to="/dashboard/admin/questions" className={linkClass}>
          <FileQuestion size={18} />
          Questions
        </NavLink> */}
      </nav>

      {/* Logout */}
      <div className="px-4 py-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-4 py-3 text-sm text-gray-300 rounded-lg hover:bg-red-600 hover:text-white transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
