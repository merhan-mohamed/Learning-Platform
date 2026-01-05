import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUser, updateUser } from "../../features/auth/userSlice";
import { Link } from "react-router-dom";

export default function Profile() {
  const { token, userId } = useSelector((state) => state.auth);
  const { user, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    classLevel: "",
  });

  useEffect(() => {
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (user) {
      setFormData({
        fullName: user.fullName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        classLevel: user.classLevel || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    setSuccessMessage("");
    // Use the ID from auth state, but fallback to the loaded user object's ID
    const effectiveUserId = userId || user?._id || user?.id;

    if (!effectiveUserId) {
      console.error("Update failed: No userId found");
      return;
    }

    const result = await dispatch(
      updateUser({
        token,
        userId: effectiveUserId,
        userData: formData,
      })
    );
    if (updateUser.fulfilled.match(result)) {
      setIsEditing(false);
      setSuccessMessage("Profile updated successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  if (loading && !isEditing && !user) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-white">
        <div className="w-10 h-10 border-4 border-gray-100 border-t-primary rounded-full animate-spin"></div>
        <p className="mt-4 text-sm font-medium text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm p-8 h-fit">
        {/* Alerts */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => dispatch(fetchUser(token))}
              className="text-sm font-bold underline"
            >
              Retry
            </button>
          </div>
        )}
        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-lg">
            {successMessage}
          </div>
        )}

        <div className="flex flex-col md:flex-row items-center gap-8 border-b border-gray-100 pb-8 mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold border-2 border-primary/20">
            {formData.fullName?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="text-center md:text-left flex-1">
            {isEditing ? (
              <div className="space-y-3">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-2xl font-bold"
                  placeholder="Full Name"
                />
                <input
                  type="text"
                  name="classLevel"
                  value={formData.classLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-500"
                  placeholder="Class Level"
                />
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-900">
                  {user?.fullName}
                </h1>
                <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {user?.role || "Student"}
                </span>
                <p className="text-gray-500 text-sm mt-2">{user?.classLevel}</p>
              </>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Email
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg font-medium text-gray-900 break-all">
                {user?.email}
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            ) : (
              <p className="text-lg font-medium text-gray-900">
                {user?.phoneNumber}
              </p>
            )}
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Account Status
            </label>
            <p className="text-md font-medium text-green-600">Active</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <label className="block text-sm font-medium text-gray-500 mb-1">
              Joined Date
            </label>
            <p className="text-lg font-medium text-gray-900">
              {user?.createdAt && new Date(user.createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-4">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                disabled={loading}
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                disabled={loading}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryHover transition-colors font-medium shadow-sm"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </>
          ) : (
            <>
              {(user?.role === "admin" || user?.role === "super-admin") && (
                <Link
                  to="/dashboard/admin"
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryHover transition-all duration-300 font-bold shadow-lg hover:shadow-primary/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Admin Dashboard
                </Link>
              )}
              <Link
                to="/update-password"
                className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium"
              >
                Change Password
              </Link>
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primaryHover transition-colors font-medium shadow-sm"
              >
                Edit Profile
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
