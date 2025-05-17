
import React from 'react';

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
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-blue-600 font-medium uppercase tracking-wider text-sm">THE TURNING POINT OF AI MANAGEMENT</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">
            CrewHub orchestrates<br />
            all your AI agents.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="border-l-4 border-blue-500 pl-4 mb-4">
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
