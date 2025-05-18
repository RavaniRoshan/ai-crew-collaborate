
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const UseCases = () => {
  const useCases = [
    {
      title: "Software Development",
      description: "Accelerate development by orchestrating coding assistants, documentation generators, and testing tools.",
      details: "Teams can create workflows that integrate coding AI models with version control, code analysis tools, and custom documentation generators."
    },
    {
      title: "Content Creation",
      description: "Streamline content production with specialized AI models for writing, editing, and media generation.",
      details: "Content studios can connect text generation models with SEO tools, image generators, and publishing platforms."
    },
    {
      title: "Research & Analysis",
      description: "Enhance research capabilities by combining data analysis tools with specialized knowledge models.",
      details: "Research teams can create workflows that process data sources, generate insights, and compile comprehensive reports."
    },
    {
      title: "Customer Support",
      description: "Build responsive support systems with AI agents trained for different types of customer inquiries.",
      details: "Support teams can route customer queries to specialized agents based on context, with human escalation paths when needed."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Use Cases</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore how teams across different industries are leveraging CrewHub to transform their workflows.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} className="mb-16 p-8 bg-white rounded-xl shadow-md opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <h2 className="text-2xl font-bold mb-4">{useCase.title}</h2>
              <p className="text-lg text-gray-700 mb-4">{useCase.description}</p>
              <p className="text-gray-600 mb-6">{useCase.details}</p>
              <Link to="/">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UseCases;
