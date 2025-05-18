
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIFeatureBox from "@/components/AIFeatureBox";

const Features = () => {
  const features = [
    {
      title: "Agent Catalog",
      description: "Access and integrate all major AI models like Claude, ChatGPT, and Gemini, categorized by their strengths."
    },
    {
      title: "Visual Workflow Builder",
      description: "Create complex agent and tool workflows with our intuitive drag-and-drop interface."
    },
    {
      title: "Tool Library",
      description: "Extensive catalog of tools categorized by function, from data processing to code execution."
    },
    {
      title: "Real-time Collaboration",
      description: "Work with your team simultaneously on the same project with version control and commenting."
    },
    {
      title: "Analytics & Monitoring",
      description: "Track costs, performance metrics, and optimize resource allocation across projects."
    },
    {
      title: "Recommendation System",
      description: "Get AI-powered suggestions for tools, models, and workflow optimizations."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features</h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover the powerful capabilities that make CrewHub the ultimate platform for AI agent orchestration.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AIFeatureBox 
                key={index}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
