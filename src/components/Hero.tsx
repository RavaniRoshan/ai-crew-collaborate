
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistForm from './WaitlistForm';

const Hero = () => {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center px-6 md:px-12 lg:px-24 py-16 bg-blue-gradient">
      <div className="max-w-4xl mx-auto text-center opacity-0 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold text-crew-black mb-4 leading-tight">
          Orchestrate AI Agents.
          <br />
          All in One Hub.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          CrewHub is a comprehensive platform that helps you assemble, configure, and manage 
          teams of specialized AI agents and tools to tackle complex projects efficiently.
        </p>
        
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
