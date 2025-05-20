
import React from 'react';
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center fade-in">
          <h2 className="text-3xl md:text-5xl font-bold dark:text-white">
            Start for free.<br />
            Get used to winning.
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg">
            Whether you're managing AI agents for development, research,
            content creation, or just exploring, join our waitlist today.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 stagger-container">
          <div className="waitlist-card hover-scale stagger-item">
            <h3 className="text-2xl font-bold dark:text-white">Free</h3>
            <div className="text-3xl font-bold my-2 dark:text-white">$0<span className="text-gray-500 dark:text-gray-400 text-lg font-normal">/mo</span></div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Get a taste of how CrewHub works with limited features and agents.
            </p>
            
            <Button className="waitlist-btn w-full">Join Waitlist</Button>
          </div>
          
          <div className="waitlist-card hover-scale stagger-item">
            <h3 className="text-2xl font-bold dark:text-white">Pro</h3>
            <div className="text-3xl font-bold my-2">
              <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 text-sm py-1 px-2 rounded-full">Coming Soon</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Unlimited access to CrewHub. Use all agents, create custom workflows, and collaborate with your team.
            </p>
            
            <Button className="waitlist-btn w-full">Join Waitlist</Button>
          </div>
          
          <div className="waitlist-card bg-crew-darkBlue text-white hover-scale stagger-item dark:bg-gray-800">
            <h3 className="text-2xl font-bold">Enterprise</h3>
            <div className="text-3xl font-bold my-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-sm py-1 px-2 rounded-full">Coming Soon</span>
            </div>
            
            <p className="text-gray-200 mb-8">
              Specifically made for teams who need full customization, dedicated support, and advanced security.
            </p>
            
            <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-crew-darkBlue dark:hover:bg-gray-700">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
