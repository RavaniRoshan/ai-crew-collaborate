
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

const quotes = [
  "The future of AI isn't about replacing humans, but enhancing what makes us human.",
  "AI won't replace humans. Teams that use AI effectively will replace teams that don't.",
  "The best way to predict the future of AI is to build it together.",
  "In the AI era, our most valuable skill will be deciding what to ask AI to do.",
  "The goal of AI is not to replace human intelligence, but to expand our capabilities."
];

const ThankYou = () => {
  // Get a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Thank You!</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            You've successfully joined the CrewHub waitlist.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 dark:text-white">We're thrilled to have you join us!</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Thank you for signing up for the CrewHub waitlist. We're working hard to create the ultimate platform for AI agent orchestration and management. We'll notify you as soon as we launch or if we have any beta testing opportunities.
            </p>
            
            <div className="bg-blue-50 dark:bg-gray-700 p-6 rounded-lg mb-8">
              <p className="italic text-gray-700 dark:text-gray-300">"{randomQuote}"</p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              In the meantime, follow us on social media to stay updated with our progress.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
              <Link to="/">
                <Button variant="outline" className="w-full sm:w-auto dark:border-gray-700 dark:text-gray-300">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
