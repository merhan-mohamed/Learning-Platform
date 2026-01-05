
const Footer = () => {
    return (
        <footer className="bg-white px-6 md:px-12 py-12 md:py-8 font-sans border-t border-gray-100 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* Left Column: Logo & Contact */}
                <div className="flex flex-col gap-6 max-w-sm">
                    {/* Logo */}
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm mb-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 3L5 14H11V21L19 10H13V3Z" stroke="currentColor" className="text-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white" />
                            <path d="M7 7h10v10H7z" fill="white" fillOpacity="0.2" />
                        </svg>
                    </div>

                    <div className="flex flex-col gap-4 text-gray-700 text-sm">
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>hello@skillbridge.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>+91 91813 23 2309</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Somewhere in the World</span>
                        </div>
                    </div>
                </div>

                {/* Links Columns */}
                <div className="flex flex-wrap gap-12 md:gap-24">
                    {/* Home Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Home</h4>
                        <ul className="flex flex-col gap-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-gray-900">Benefits</a></li>
                            <li><a href="#" className="hover:text-gray-900">Our Courses</a></li>
                            <li><a href="#" className="hover:text-gray-900">Our Testimonials</a></li>
                            <li><a href="#" className="hover:text-gray-900">Our FAQ</a></li>
                        </ul>
                    </div>

                    {/* About Us Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">About Us</h4>
                        <ul className="flex flex-col gap-4 text-gray-600 text-sm">
                            <li><a href="#" className="hover:text-gray-900">Company</a></li>
                            <li><a href="#" className="hover:text-gray-900">Achievements</a></li>
                            <li><a href="#" className="hover:text-gray-900">Our Goals</a></li>
                        </ul>
                    </div>

                    {/* Social Profiles */}
                    <div>
                        <h4 className="font-bold text-gray-900 mb-6">Social Profiles</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-[#F7F7F8] rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#F7F7F8] rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#F7F7F8] rounded-lg flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-500 text-sm mt-20 pt-8 border-t border-gray-100">
                © 2023 Skillbridge. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
