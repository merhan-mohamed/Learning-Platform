import React from 'react';
import Button from './ui/Button';

const AboutUs = () => {
    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">About Us</h2>
                <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-lg">
                    We are dedicated to providing the best learning experience for students worldwide. Our mission is to democratize education through accessible, high-quality courses taught by industry experts.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#FFF9F0] rounded-full z-0"></div>
                    <img
                        src="/photo_2025-12-17_02-48-38.jpg"
                        alt="Our Team"
                        className="relative z-10 rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        At Learning Platform, we believe that education is the key to unlocking human potential. We strive to create an inclusive environment where anyone, anywhere can gain the skills they need to succeed in the modern world.
                    </p>
                    <div className="flex gap-4">
                        <div className="border border-gray-100 p-4 rounded-lg flex-1 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">50+</div>
                            <div className="text-sm text-gray-500">Mentors</div>
                        </div>
                        <div className="border border-gray-100 p-4 rounded-lg flex-1 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">10k+</div>
                            <div className="text-sm text-gray-500">Students</div>
                        </div>
                        <div className="border border-gray-100 p-4 rounded-lg flex-1 text-center">
                            <div className="text-3xl font-bold text-primary mb-1">100+</div>
                            <div className="text-sm text-gray-500">Courses</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#FFF9F0] rounded-2xl p-8 md:p-12 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Journey</h3>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    Whether you are looking to learn a new skill or share your knowledge, there is a place for you in our community.
                </p>
                <Button size="lg" className="px-8 shadow-sm">
                    Get Started Today
                </Button>
            </div>
        </section>
    );
};

export default AboutUs;
