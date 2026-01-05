
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../../../Redux/thunks/usersThunks";

const USERS_PER_PAGE = 20;

const roleColors = {
  admin: "bg-purple-100 text-purple-700",
  user: "bg-blue-100 text-blue-700",
  "super-admin": "bg-red-100 text-red-700",
};

const Users = () => {
  const dispatch = useDispatch();
  const { list: users, loading } = useSelector((state) => state.users);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("all");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const filteredUsers = users.filter((user) => {
    const matchSearch =
      user.fullName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const matchRole = role === "all" || user.role === role;

    return matchSearch && matchRole;
  });

  const start = (page - 1) * USERS_PER_PAGE;
  const currentUsers = filteredUsers.slice(start, start + USERS_PER_PAGE);
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users Management</h1>
        <span className="text-sm text-gray-500">
          Total: {filteredUsers.length}
        </span>
      </div>

      {/* Search + Filter */}
      <div className="flex flex-wrap gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="border px-4 py-2 rounded-lg w-64 focus:ring focus:ring-blue-200 outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />

        <select
          className="border px-4 py-2 rounded-lg focus:ring focus:ring-blue-200"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
            setPage(1);
          }}
        >
          <option value="all">All Roles</option>
          <option value="user">Users</option>
          <option value="admin">Admins</option>
          <option value="super-admin">Super Admin</option>
        </select>
      </div>

      {/* Cards */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 min-w-[3rem] rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  {user.fullName.charAt(0).toUpperCase()}
                </div>

                <div>
                  <h3 className="font-semibold">{user.fullName}</h3>
                  <p className="text-sm truncate max-w-[178px] text-gray-500">{user.email}</p>
                </div>
              </div>

              {/* Role */}
              <div className="mt-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    roleColors[user.role] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {user.role}
                </span>
              </div>
            </div>
          ))}

          {currentUsers.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No users found
            </p>
          )}
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 pt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className={`px-4 py-2 rounded-lg ${
            page === 1
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className={`px-4 py-2 rounded-lg ${
            page === totalPages
              ? "bg-gray-200 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Users;