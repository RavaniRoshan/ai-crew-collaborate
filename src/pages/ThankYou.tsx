
import React, { useEffect, useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from 'react-router-dom';

const ThankYou = () => {
  const [quote, setQuote] = useState("");
  const location = useLocation();
  const email = location.state?.email || "your email";

  const aiQuotes = [
    "The future of AI is not about replacing humans, but enhancing our capabilities.",
    "AI is a tool that will amplify human creativity, not replace it.",
    "The best AI systems are those that collaborate with humans, not compete with them.",
    "Tomorrow's innovations will come from humans and AI working together.",
    "AI doesn't just automate tasks, it unlocks new possibilities we haven't yet imagined."
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * aiQuotes.length);
    setQuote(aiQuotes[randomIndex]);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 min-h-[70vh] flex items-center">
        <div className="max-w-3xl mx-auto text-center">
          <div className="waitlist-card p-10 opacity-0 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You for Joining Our Waitlist!</h1>
            
            <p className="text-xl text-gray-700 mb-8">
              We've added <span className="font-semibold">{email}</span> to our waitlist. 
              You'll be among the first to know when CrewHub launches!
            </p>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <p className="text-lg italic text-gray-700">"{quote}"</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">What's next?</h3>
              <p className="text-gray-700">
                We're working hard to build CrewHub and will send you updates on our progress. 
                In the meantime, follow us on social media for the latest news and insights.
              </p>
            </div>
            
            <Link to="/">
              <Button variant="outline" className="mt-6">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ThankYou;
