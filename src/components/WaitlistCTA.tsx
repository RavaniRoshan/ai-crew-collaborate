
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WaitlistForm from './WaitlistForm';

const WaitlistCTA = () => {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-blue-gradient">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join the CrewHub waitlist
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          Be the first to know when we launch and get early access to the platform.
        </p>
        
        <div className="max-w-lg mx-auto">
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default WaitlistCTA;
