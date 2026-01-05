
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLessonsAdmin,
  createLesson,
  updateLesson,
  deleteLesson,
} from "../../../Redux/thunks/lessonsThunks";

const ITEMS_PER_PAGE = 10;

const emptyForm = {
  title: "",
  description: "",
  video: "",
  classLevel: "",
  price: 0,
  // isPaid: false,
  scheduledDate: "",
};

const Courses = () => {
  const dispatch = useDispatch();
  const {
    lessons = [],
    loading,
    error,
  } = useSelector((state) => state.courses);

  const token = localStorage.getItem("token");

  const [search, setSearch] = useState("");
  const [classFilter, setClassFilter] = useState("");
  const [page, setPage] = useState(1);

  // Modal
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    dispatch(fetchLessonsAdmin({ token, params: {} }));
  }, [dispatch, token]);

  // 🔍 Search + Filter
  const filteredLessons = useMemo(() => {
    return lessons.filter((lesson) => {
      const matchSearch =
        lesson.title.toLowerCase().includes(search.toLowerCase()) ||
        lesson.description?.toLowerCase().includes(search.toLowerCase());

      const matchClass = classFilter ? lesson.classLevel === classFilter : true;

      return matchSearch && matchClass;
    });
  }, [lessons, search, classFilter]);

  // 📄 Pagination
  const totalPages = Math.ceil(filteredLessons.length / ITEMS_PER_PAGE);
  const paginatedLessons = filteredLessons.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  // ✅ Submit (Create / Edit)
  const handleSubmit = () => {
    const payload = {
      ...form,
      price: Number(form.price) ,
      // isPaid: Number(form.price) > 0,
      scheduledDate: new Date(form.scheduledDate).toISOString(),
    };

    if (isEdit) {
      dispatch(
        updateLesson({
          token,
          id: selectedLesson._id,
          payload:{
            title: form.title,
            description: form.description,
            video: form.video,
            classLevel: form.classLevel,
            price: Number(form.price),
            // scheduledDate: new Date(form.scheduledDate).toISOString(),
          }
        })
      );
    } else {
      dispatch(
        createLesson({
          token,
          payload:{
            ...form,
            price: Number(form.price),
            // isPaid: Number(form.price) > 0,
            scheduledDate: new Date(form.scheduledDate).toISOString(),
          }
        })
      );
    }

    setOpenModal(false);
    setForm(emptyForm);
    setIsEdit(false);
    setSelectedLesson(null);
  };

  // 🗑 Delete
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      dispatch(deleteLesson({ token, id }));
    }
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Courses Management</h1>
          <p className="text-gray-500 text-sm">Manage all lessons & courses</p>
        </div>

        <button
          onClick={() => {
            setIsEdit(false);
            setForm(emptyForm);
            setOpenModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          + Add Course
        </button>
      </div>

      {/* Filters */}
      <div className="grid md:grid-cols-3 gap-4">
        <input
          className="border px-4 py-2 rounded"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border px-4 py-2 rounded"
          value={classFilter}
          onChange={(e) => setClassFilter(e.target.value)}
        >
          <option value="">All Classes</option>
          <option value="Grade 1 Secondary">Grade 1 Secondary</option>
          <option value="Grade 2 Secondary">Grade 2 Secondary</option>
          <option value="Grade 3 Secondary">Grade 3 Secondary</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow overflow-x-auto">
        {loading ? (
          <p className="p-6 text-center">Loading...</p>
        ) : error ? (
          <p className="p-6 text-center text-red-500">{error}</p>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left">Title</th>
                <th className="p-3 text-left">Class</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-left">Date</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedLessons.map((lesson) => (
                <tr key={lesson._id} className="border-b">
                  <td className="p-3">{lesson.title}</td>
                  <td className="p-3">{lesson.classLevel}</td>
                  <td className="p-3">
                    {lesson.price === 0 ? "Free" : `${lesson.price} EGP`}
                  </td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        lesson.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {lesson.isPaid ? "Paid" : "Free"}
                    </span>
                  </td>
                  <td className="p-3">
                    {new Date(lesson.scheduledDate).toLocaleDateString()}
                  </td>
                  <td className="p-3 flex gap-2">
                    <button
                      className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded"
                      onClick={() => {
                        setIsEdit(true);
                        setSelectedLesson(lesson);
                        setForm({
                          ...lesson,
                          scheduledDate: lesson.scheduledDate.slice(0, 10),
                        });
                        setOpenModal(true);
                      }}
                    >
                      Edit
                    </button>

                    <button
                      className="px-3 py-1 bg-red-100 text-red-700 rounded"
                      onClick={() => handleDelete(lesson._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-3">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-6 rounded w-full max-w-xl space-y-4">
            <h2 className="text-xl font-bold">
              {isEdit ? "Edit Course" : "Create Course"}
            </h2>

            {["title", "description", "video"].map((field) => (
              <input
                key={field}
                className="border px-4 py-2 w-full rounded"
                placeholder={field}
                value={form[field]}
                onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              />
            ))}

            <select
              className="border px-4 py-2 w-full rounded"
              value={form.classLevel}
              onChange={(e) => setForm({ ...form, classLevel: e.target.value })}
            >
              <option value="">Select Class</option>
              <option value="Grade 1 Secondary">Grade 1 Secondary</option>
              <option value="Grade 2 Secondary">Grade 2 Secondary</option>
              <option value="Grade 3 Secondary">Grade 3 Secondary</option>
            </select>

            <input
              type="number"
              className="border px-4 py-2 w-full rounded"
              placeholder="Price"
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
            />

            <input
              type="date"
              className="border px-4 py-2 w-full rounded"
              value={form.scheduledDate}
              onChange={(e) =>
                setForm({ ...form, scheduledDate: e.target.value })
              }
            />

            <div className="flex justify-end gap-3">
              <button onClick={() => setOpenModal(false)}>Cancel</button>
              <button
                onClick={handleSubmit}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                {isEdit ? "Save Changes" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
