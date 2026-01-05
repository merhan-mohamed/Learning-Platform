import React, { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
            <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                {/* Contact Info */}
                <div className="md:w-1/3">
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">Contact Us</h2>
                    <p className="text-gray-600 leading-relaxed mb-12">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFF9F0] p-3 rounded-lg text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                                <p className="text-gray-600">hello@learningplatform.com</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFF9F0] p-3 rounded-lg text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                                <p className="text-gray-600">+1 (555) 000-0000</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-[#FFF9F0] p-3 rounded-lg text-primary">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Office</h4>
                                <p className="text-gray-600">123 Education St, Knowledge City</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="md:w-2/3 bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="Enter First Name"
                                className="py-3 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                            />
                            <Input
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Enter Last Name"
                                className="py-3 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                            />
                        </div>

                        <Input
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your Email"
                            className="py-3 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                        />

                        <Input
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Enter Subject"
                            className="py-3 bg-gray-50 border-gray-200 focus:border-primary focus:ring-primary/20"
                        />

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-gray-50 resize-none"
                                placeholder="Enter your Message here..."
                            ></textarea>
                        </div>

                        <Button type="submit" size="lg" className="w-full shadow-sm">
                            Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
