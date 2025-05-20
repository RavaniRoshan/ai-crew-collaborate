
import React, { useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AIFeatureBox from "@/components/AIFeatureBox";
import { Card } from "@/components/ui/card";

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

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-item');
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
    <div className="min-h-screen bg-white dark:bg-[#0D1117]">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient dark:bg-gradient-to-br dark:from-[#161B22] dark:to-[#1F2937]">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white animate-fade-in">Features</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 animate-fade-in animation-delay-200">
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

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-[#161B22]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white fade-in-item">Why Choose CrewHub?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 fade-in-item">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Seamless Integration</h3>
              <p className="text-gray-600 dark:text-gray-300">Connect your favorite AI models and tools with just a few clicks, without any coding required.</p>
            </Card>
            
            <Card className="p-6 bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 fade-in-item">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Enterprise-Grade Security</h3>
              <p className="text-gray-600 dark:text-gray-300">Your data and AI workflows are protected with industry-leading security measures and compliance standards.</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
