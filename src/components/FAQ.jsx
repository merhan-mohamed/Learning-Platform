
import { useState } from 'react';

import Button from './ui/Button';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "Can I enroll in multiple courses at once?",
            answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience. You can manage your learning schedule to fit your lifestyle.",
            linkText: "Enrollment Process for Different Courses"
        },
        {
            question: "What kind of support can I expect from instructors?",
            answer: "Our instructors offer comprehensive support through Q&A sessions, feedback on assignments, and community forum participation.",
            linkText: "Instructor Support Guidelines"
        },
        {
            question: "Are the courses self-paced or do they have specific start and end dates?",
            answer: "Most of our courses are self-paced, allowing you to learn at your own speed. Some advanced workshops may have scheduled sessions.",
            linkText: "Course Pacing Information"
        },
        {
            question: "Are there any prerequisites for the courses?",
            answer: "Prerequisites vary by course level. Beginner courses typically require no prior experience, while advanced ones may need specific skills.",
            linkText: "Checking Course Prerequisites"
        },
        {
            question: "Can I download the course materials for offline access?",
            answer: "Yes, many of our course materials, including lecture notes and certain videos, can be downloaded for offline viewing via our app.",
            linkText: "Offline Access Guide"
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                {/* Left Side: Header */}
                <div className="lg:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Still you have any questions? Contact our Team via support@skillbridge.com
                    </p>
                    <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50">
                        See All FAQ's
                    </Button>
                </div>

                {/* Right Side: Accordion */}
                <div className="lg:w-2/3 flex flex-col gap-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border border-gray-100 rounded-xl p-6 md:p-8 transition-all duration-300">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h3 className="text-lg font-medium text-gray-900 pr-8">{faq.question}</h3>
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors flex-shrink-0 ${openIndex === index ? 'bg-primary text-white' : 'bg-[#FFF4E5] text-[#1A1A1A]'}`}>
                                    {openIndex === index ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    )}
                                </div>
                            </div>

                            {/* Answer Section */}
                            {openIndex === index && (
                                <div className="mt-6 pt-6 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {faq.answer}
                                    </p>
                                    <div className="bg-[#F7F7F8] rounded-lg p-4 flex justify-between items-center group cursor-pointer hover:bg-gray-200 transition-colors">
                                        <span className="text-gray-700 font-medium">{faq.linkText}</span>
                                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-primary">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
