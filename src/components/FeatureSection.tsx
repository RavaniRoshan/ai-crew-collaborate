
import React, { useEffect } from 'react';

const features = [
  {
    title: "Sees what you need",
    description: "CrewHub helps you manage all your AI agents, tools, and workflows in one unified place - eliminating the need for multiple platforms."
  },
  {
    title: "Hears what you say",
    description: "Create complex, multi-step workflows involving various AI models and tools, collaborate in real-time, and share your creations with your team."
  }
];

const FeatureSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if (position.top < window.innerHeight - 100) {
          element.classList.add('visible');
        }
      });
    };
    
    // Initial check on load
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center fade-in">
          <span className="text-[#3B82F6] dark:text-[#10B981] font-medium uppercase tracking-wider text-sm">THE TURNING POINT OF AI MANAGEMENT</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            CrewHub orchestrates<br />
            all your AI agents.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 stagger-container">
          {features.map((feature, index) => (
            <div key={index} className={`${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'} bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03]`}>
              <div className="border-l-4 border-[#3B82F6] dark:border-[#10B981] pl-4 mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
