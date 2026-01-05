import React from "react";

export default function TestimonialsSidebar() {
  return (
    <div className="flex w-full lg:w-1/2 p-8 lg:p-12 flex-col justify-center items-center lg:items-start lg:pr-12 text-center lg:text-left">
      <h1 className="text-4xl font-bold mb-4">Students Testimonials</h1>
      <p className="text-gray-500 mb-12 leading-relaxed">
        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit
        id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
        habitasse in velit fringilla feugiat senectus in.
      </p>

      <div className="w-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
        <p className="text-gray-600 mb-8 leading-relaxed">
          The web design course provided a solid foundation for me. The
          instructors were knowledgeable and supportive, and the interactive
          learning environment was engaging. I highly recommend it!
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md overflow-hidden bg-purple-200">
              {/* Placeholder for avatar */}
              <img
                src="/newimage.jpg"
                alt="Sarah L"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-semibold text-gray-900">Sarah L</span>
          </div>
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
            Read More
          </button>
        </div>
      </div>

      <div className="flex gap-4 mt-8 ml-auto">
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition">
          &larr;
        </button>
        <button className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-white hover:shadow-sm transition">
          &rarr;
        </button>
      </div>
    </div>
  );
}
