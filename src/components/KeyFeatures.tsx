
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
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white">Key Features</h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4">Everything you need to manage AI agents efficiently</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-container">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="waitlist-card hover-scale stagger-item"
              style={{transitionDelay: `${index * 50}ms`}}
            >
              <h3 className="text-xl font-bold mb-3 dark:text-white">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
