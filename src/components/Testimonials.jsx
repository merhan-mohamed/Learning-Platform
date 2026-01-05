
import Button from './ui/Button';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            image: "/photo_2025-12-17_02-49-09.jpg",
            name: "Sarah L"
        },
        {
            id: 2,
            quote: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
            image: "/photo_2025-12-17_02-49-14.jpg"
        },
        {
            id: 3,
            quote: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
            image: "/photo_2025-12-17_02-49-17.jpg",
            name: "Emily R"
        },
        {
            id: 4,
            quote: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!",
            image: "/photo_2025-12-17_02-49-21.jpg",
            name: "Michael K"
        }
    ];

    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Testimonials</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
                    </p>
                </div>
                <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50 whitespace-nowrap">
                    View All
                </Button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                        <div className="p-8">
                            <p className="text-gray-600 leading-relaxed text-base">
                                "{testimonial.quote}"
                            </p>
                        </div>

                        <div className="mt-auto px-8 py-6 bg-[#FDFDFD] border-t border-gray-50 rounded-b-xl flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-lg object-cover bg-gray-200" />
                                <span className="font-bold text-gray-900">{testimonial.name}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="bg-[#F7F7F8] text-gray-900 hover:bg-gray-200">
                                Read Full Story
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
