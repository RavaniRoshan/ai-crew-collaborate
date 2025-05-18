
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Help = () => {
  const faqs = [
    {
      question: "What is CrewHub?",
      answer: "CrewHub is a comprehensive platform for AI agent orchestration. It allows you to assemble, configure, and manage teams of specialized AI models and tools to tackle complex projects efficiently."
    },
    {
      question: "When will CrewHub be available?",
      answer: "CrewHub is currently in private beta. Join our waitlist to be notified when we launch publicly."
    },
    {
      question: "What AI models does CrewHub support?",
      answer: "CrewHub will support all major AI models including ChatGPT, Claude, Gemini, and more. Our goal is to provide a unified interface for working with any AI model."
    },
    {
      question: "How does pricing work?",
      answer: "During beta, CrewHub is free to use. We will announce our pricing model before public launch, which will include a free tier and various paid plans based on usage and features."
    },
    {
      question: "Can I use my own custom AI models?",
      answer: "Yes, CrewHub is designed to support custom models alongside major providers. This feature will be available in our Professional and Enterprise plans."
    },
    {
      question: "How does the workflow builder work?",
      answer: "Our visual workflow builder allows you to connect AI models and tools together using a drag-and-drop interface. You can create complex workflows with conditional logic, triggers, and automated processes."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Help Center</h1>
          <p className="text-lg text-gray-700 mb-8">
            Find answers to common questions and learn how to get the most out of CrewHub.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-700 mb-4">{faq.answer}</p>
                <Separator className="mt-4" />
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-gray-50 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-gray-700 mb-6">
              Join our waitlist to stay updated and get priority access to our support team.
            </p>
            <Link to="/">
              <Button className="bg-black text-white hover:bg-gray-800">
                Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
