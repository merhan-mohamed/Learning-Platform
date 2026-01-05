import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch(
        "https://edu-master-psi.vercel.app/user/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message || "Reset link sent! Redirecting...");
        setTimeout(() => {
          navigate("/reset-password", { state: { message: data.message } });
        }, 2000);
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Forgot password error:", error);
      setError(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 font-sans text-gray-900 p-4">
      {/* Forgot Password Form */}
      <div className="w-full max-w-xl bg-white p-10 rounded-lg shadow-xs">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Forgot Password?
          </h2>
          <p className="text-gray-500">
            Enter your email to reset your password.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full py-3">
            Reset Password
          </Button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-3 py-2 rounded-md text-xs text-center mt-3">
              {error}
            </div>
          )}

          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-3 py-2 rounded-md text-xs text-center mt-3">
              {success}
            </div>
          )}

          <p className="text-center text-sm text-gray-600 mt-4">
            Remember your password?{" "}
            <Link
              to="/login"
              className="font-semibold text-gray-900 hover:underline inline-flex items-center gap-1"
            >
              Login
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
