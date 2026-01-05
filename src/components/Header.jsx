import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { clearUser } from "../features/auth/userSlice";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearUser());
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <div className="w-full font-sans relative">
      {/* Top Banner */}
      <div className="bg-primary text-white py-3 px-4 flex justify-center items-center text-sm font-medium">
        <span className="flex items-center gap-2 text-center">
          Free Courses <span className="text-yellow-200">✨</span> Sale Ends
          Soon, Get It Now
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hidden sm:inline"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white py-4 px-6 md:px-12 flex justify-between items-center shadow-sm relative z-50">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center gap-12">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 3L5 14H11V21L19 10H13V3Z"
                  stroke="currentColor"
                  className="text-primary"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="white"
                />
                <path d="M7 7h10v10H7z" fill="white" fillOpacity="0.2" />
              </svg>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium text-sm">
            <li>
              <Link
                to="/"
                className="hover:text-gray-900 bg-gray-100 px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-gray-900 px-3 py-2">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/studentexams" className="hover:text-gray-900 px-3 py-2">
                Exams
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-900 px-3 py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/students" className="hover:text-gray-900 px-3 py-2">
               Students
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-900 px-3 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side: Auth Buttons (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          {token ? (
            <>
              {/* Profile Icon */}
              <Link
                to="/profile"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-200 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </Link>

              <Button className="shadow-sm" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button
                  variant="ghost"
                  className="text-gray-700 hover:bg-transparent hover:text-gray-900 px-0"
                >
                  Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="shadow-sm">Login</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          className="md:hidden p-2 text-gray-600 hover:bg-gray-100 h-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </Button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 z-40 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-2 text-gray-700 font-medium text-sm">
            <li>
              <Link
                to="/"
                className="block hover:text-gray-900 bg-gray-50 px-3 py-2 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block hover:text-gray-900 px-3 py-2"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-gray-900 px-3 py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="block hover:text-gray-900 px-3 py-2"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block hover:text-gray-900 px-3 py-2"
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
            {token ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-3 py-2 text-gray-700 font-medium"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <span>My Profile</span>
                </Link>
                <Button className="w-full shadow-sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/signup" className="w-full">
                  <Button
                    variant="ghost"
                    className="text-gray-700 hover:bg-transparent hover:text-gray-900 w-full justify-start"
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link to="/login" className="w-full">
                  <Button className="w-full shadow-sm">Login</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
