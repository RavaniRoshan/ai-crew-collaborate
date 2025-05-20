
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 bg-blue-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-blue-200 opacity-40 animate-float" style={{animationDelay: '0s'}}></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-blue-200 opacity-30 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-12 h-12 rounded-full bg-blue-300 opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-blue-100 opacity-30 animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-crew-black dark:text-white mb-4 leading-tight animate-[slideUp_0.8s_ease-out]">
          Orchestrate AI Agents.
          <br />
          <span className="animate-[slideUp_0.8s_ease-out_0.2s_both]">All in One Hub.</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto animate-[fadeIn_1s_ease-out_0.4s_both]">
          CrewHub is a comprehensive platform that helps you assemble, configure, and manage 
          teams of specialized AI agents and tools to tackle complex projects efficiently.
        </p>
        
        <div className="max-w-lg mx-auto animate-[scaleIn_0.8s_ease-out_0.6s_both]">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
