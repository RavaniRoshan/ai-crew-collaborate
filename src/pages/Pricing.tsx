
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Free during beta",
      features: [
        "Access to core platform features",
        "Integration with 3 major AI models",
        "Basic workflow builder",
        "5 projects",
        "Community support"
      ],
      recommended: false
    },
    {
      name: "Professional",
      price: "Coming soon",
      features: [
        "All Starter features",
        "Integration with all supported AI models",
        "Advanced workflow builder",
        "Unlimited projects",
        "Priority support",
        "Analytics dashboard",
        "Team collaboration"
      ],
      recommended: true
    },
    {
      name: "Enterprise",
      price: "Contact us",
      features: [
        "All Professional features",
        "Custom AI model integrations",
        "Dedicated support manager",
        "SLA guarantees",
        "Advanced security features",
        "On-premise deployment options",
        "Custom training"
      ],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-lg text-gray-700 mb-8">
            Flexible plans designed to scale with your AI orchestration needs.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`p-8 rounded-xl shadow-md border opacity-0 animate-fade-in ${
                  plan.recommended ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Recommended
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-xl mb-6">{plan.price}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/" className="block w-full">
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
