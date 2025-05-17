
import React from 'react';

const features = [
  {
    title: "Agent Management",
    description: "Integrate major AI models with categorization by strengths and detailed configuration options."
  },
  {
    title: "Tool Integration",
    description: "Extensive catalog of tools categorized by function with easy configuration and chaining capabilities."
  },
  {
    title: "Visual Workflow Builder",
    description: "Drag-and-drop interface for creating complex agent+tool workflows with branching logic and triggers."
  },
  {
    title: "Collaboration Features",
    description: "Real-time collaboration with version control, commenting system, and sharing options."
  }
];

const KeyFeatures = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Key Features</h2>
          <p className="text-gray-700 mt-4">Everything you need to manage AI agents efficiently</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="waitlist-card opacity-0 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
