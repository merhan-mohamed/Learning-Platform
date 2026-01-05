import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-16 px-4 text-center bg-white relative overflow-hidden">
      {/* Decorative elements - Top Left strokes */}
      <div className="absolute top-10 left-10 md:left-1/4 opacity-50">
        <svg width="40" height="40" viewBox="0 0 50 50" fill="none" stroke="black" strokeWidth="2">
          <path d="M10 40 L20 30" />
          <path d="M0 25 L15 25" />
          <path d="M10 10 L20 20" />
        </svg>
      </div>

      {/* Main Headline Box */}
      <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-3 mb-6 inline-flex items-center gap-3 relative z-10">
        <div className="bg-[#FFF4E5] p-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-800">
            <path d="M13 2L3 14h9v8l10-12h-9l9-8z" />
          </svg>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
          <span className="text-primary">Unlock</span> Your Creative Potential
        </h1>
      </div>

      {/* Sub-headline part 2 */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
        with Online Design and Development Courses.
      </h2>

      {/* Subtext */}
      <p className="text-gray-600 text-sm md:text-base mb-10">
        Learn from Industry Experts and Enhance Your Skills.
      </p>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <Button size="lg">
          Explore Courses
        </Button>
        <Button variant="outline" size="lg" className="border-gray-200 text-gray-800 hover:bg-gray-50">
          View Pricing
        </Button>
      </div>

      {/* Decorative element - Abstract shape/curve could be added here if needed to match further */}
    </div>
  );
};

export default Hero;
