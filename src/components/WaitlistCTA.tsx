
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistForm from './WaitlistForm';

const WaitlistCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-blue-gradient dark:bg-dark-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 right-1/3 w-16 h-16 rounded-full bg-blue-200 dark:bg-blue-900/30 opacity-30 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-blue-300 dark:bg-blue-900/40 opacity-20 animate-float" style={{animationDelay: '1.2s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
          Join the CrewHub waitlist
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 mb-8">
          Whether you're managing AI agents for development, research, content creation, or just exploring, join our waitlist today.
        </p>
        
        <div className="max-w-lg mx-auto scale-in">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
