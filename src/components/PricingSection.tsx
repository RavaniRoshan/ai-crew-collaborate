
import React from 'react';
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold">
            Start for free.<br />
            Get used to winning.
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Whether you're managing AI agents for development, research,
            content creation, or just exploring, join our waitlist today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="waitlist-card opacity-0 animate-fade-in">
            <h3 className="text-2xl font-bold">Free</h3>
            <div className="text-3xl font-bold my-2">$0<span className="text-gray-500 text-lg font-normal">/mo</span></div>
            
            <p className="text-gray-600 mb-8">
              Get a taste of how CrewHub works with limited features and agents.
            </p>
            
            <Button className="waitlist-btn w-full">Join Waitlist</Button>
          </div>
          
          <div className="waitlist-card opacity-0 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold">Pro</h3>
            <div className="text-3xl font-bold my-2">$29<span className="text-gray-500 text-lg font-normal">/mo</span></div>
            
            <p className="text-gray-600 mb-8">
              Unlimited access to CrewHub. Use all agents, create custom workflows, and collaborate with your team.
            </p>
            
            <Button className="waitlist-btn w-full">Join Waitlist</Button>
          </div>
          
          <div className="waitlist-card bg-crew-darkBlue text-white opacity-0 animate-fade-in animate-delay-400">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <div className="text-3xl font-bold my-2">Custom</div>
            
            <p className="text-gray-200 mb-8">
              Specifically made for teams who need full customization, dedicated support, and advanced security.
            </p>
            
            <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-crew-darkBlue">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
