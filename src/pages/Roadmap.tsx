
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Phase 1: MVP",
      timeline: "Q3 2025",
      features: [
        "Basic user account system",
        "Integration with 2-3 major AI models",
        "Simple workflow builder",
        "Core tool integrations",
        "Project management basics"
      ]
    },
    {
      phase: "Phase 2: Early Expansion",
      timeline: "Q4 2025",
      features: [
        "Additional AI model integrations",
        "Enhanced workflow capabilities",
        "Improved collaboration features",
        "Basic analytics",
        "Mobile app development"
      ]
    },
    {
      phase: "Phase 3: Full Platform",
      timeline: "Q1 2026",
      features: [
        "Complete marketplace launch",
        "Advanced analytics and reporting",
        "Enterprise features and security",
        "Extensive third-party integrations",
        "Public API and developer tools"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Product Roadmap</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our vision and development plan for CrewHub over the next year.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {/* Timeline items */}
            {roadmapItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-16 md:mb-24 opacity-0 animate-fade-in ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}
                style={{ animationDelay: `${index * 200}ms`, width: '100%', maxWidth: '500px' }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-8px] md:left-[-8px] md:left-[auto] md:right-[-8px] md:transform md:translate-x-[50%] top-0 w-4 h-4 rounded-full bg-blue-500 shadow-lg"></div>
                
                {/* Content */}
                <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-2">
                    {item.timeline}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.phase}</h2>
                  <ul className="space-y-2 text-left">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Roadmap;
