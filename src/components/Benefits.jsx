
import Button from './ui/Button';

const Benefits = () => {
  const benefits = [
    {
      number: '01',
      title: 'Flexible Learning Schedule',
      description: 'Fit your coursework around your existing commitments and obligations.'
    },
    {
      number: '02',
      title: 'Expert Instruction',
      description: 'Learn from industry experts who have hands-on experience in design and development.'
    },
    {
      number: '03',
      title: 'Diverse Course Offerings',
      description: 'Explore a wide range of design and development courses covering various topics.'
    },
    {
      number: '04',
      title: 'Updated Curriculum',
      description: 'Access courses with up-to-date content reflecting the latest trends and industry practices.'
    },
    {
      number: '05',
      title: 'Practical Projects and Assignments',
      description: 'Develop a portfolio showcasing your skills and abilities to potential employers.'
    },
    {
      number: '06',
      title: 'Interactive Learning Environment',
      description: 'Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.'
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Benefits</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <Button variant="outline" className="border-gray-200 text-gray-800 hover:bg-gray-50 whitespace-nowrap">
          View All
        </Button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm flex flex-col relative group hover:shadow-md transition-shadow">
            {/* Number */}
            <div className="text-6xl font-bold text-gray-900 mb-8 self-end">
              {benefit.number}
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>

            {/* Arrow Button */}
            <div className="mt-auto self-end">
              <div className="w-12 h-12 bg-[#FCFCFD] border border-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:text-white transition-colors">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
