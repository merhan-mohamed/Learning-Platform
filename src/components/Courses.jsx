
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from './ui/Button';

const Courses = () => {
  const { token } = useSelector((state) => state.auth);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("https://edu-master-psi.vercel.app/lesson/?isPaid=true&sortBy=scheduledDate&sortOrder=asc&scheduledAfter=2025-07-01", {
          headers: {
            token: token
          }
        });
        const result = await response.json();
        if (result.success) {
          setCourses(result.data);
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    if (token) {
      fetchCourses();
    }
  }, [token]);

  const getVideoId = (videoUrl) => {
    if (!videoUrl) return null;
    try {
      let videoId = null;
      if (videoUrl.includes("v=")) {
        videoId = videoUrl.split("v=")[1].split("&")[0];
      } else if (videoUrl.includes("youtu.be/")) {
        videoId = videoUrl.split("youtu.be/")[1].split("?")[0];
      }
      return videoId;
    } catch (e) {
      console.error("Error parsing video URL", e);
    }
    return null;
  };

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Courses</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50 hover:text-gray-900 whitespace-nowrap">
          View All
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course) => (
          <div key={course._id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">

            {/* Course Video */}
            <div className="rounded-lg overflow-hidden mb-6 h-64 md:h-80 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(course.video)}`}
                title={course.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Tags and Author */}
            <div className="flex justify-between items-center mb-4 text-sm">
              <div className="flex gap-2">
                <span className="px-3 py-1 border border-gray-200 rounded-md text-gray-600">4 Weeks</span>
                <span className="px-3 py-1 border border-gray-200 rounded-md text-gray-600">{course.classLevel}</span>
              </div>
              <span className="font-medium text-gray-900">By Instructor</span>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{course.description}</p>
            </div>

            {/* Button */}
            <Button variant="ghost" className="mt-auto w-full bg-[#F7F7F8] text-gray-900 hover:bg-primary  border border-transparent hover:border-primary">
              Get it Now
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
