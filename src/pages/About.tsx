
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "AI Orchestration Team",
      role: "Product Design & Development",
      description: "Our product team is focused on creating the most intuitive and powerful AI management platform available."
    },
    {
      name: "Infrastructure Team",
      role: "Backend Engineering",
      description: "Building the robust infrastructure needed to support complex AI operations at scale."
    },
    {
      name: "UX Research Team",
      role: "User Experience",
      description: "Constantly testing and refining the platform based on real user feedback and behavior."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About CrewHub</h1>
          <p className="text-lg text-gray-700 mb-8">
            Building the future of AI orchestration and management.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                CrewHub exists to democratize access to advanced AI capabilities by making it simple to orchestrate, manage, and optimize AI agents and tools.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that the future of work involves humans and AI working together seamlessly, with each focusing on what they do best. Our platform makes this collaboration intuitive and powerful.
              </p>
              <Link to="/contact" className="inline-block mt-4">
                <Button className="bg-black text-white hover:bg-gray-800">
                  Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="bg-gray-100 rounded-xl opacity-0 animate-fade-in animate-delay-200" style={{ animationDelay: '200ms' }}>
              <div className="h-64 bg-blue-gradient rounded-t-xl"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Founded in 2025</h3>
                <p className="text-gray-700">
                  CrewHub was born out of the need for better tools to manage increasingly complex AI ecosystems. What started as an internal tool has evolved into a comprehensive platform serving teams across industries.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl shadow-md p-8 border-t-4 border-blue-500 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-500">{member.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-700">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
