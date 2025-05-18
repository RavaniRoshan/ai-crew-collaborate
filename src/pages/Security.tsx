
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Shield, Lock, Server, Eye, Code, Bell } from "lucide-react";

const Security = () => {
  const securityFeatures = [
    {
      title: "Data Encryption",
      description: "All data is encrypted both in transit and at rest using industry-standard encryption protocols.",
      icon: Lock
    },
    {
      title: "Secure Infrastructure",
      description: "Our platform is hosted on secure, SOC 2 compliant cloud infrastructure with regular security audits.",
      icon: Server
    },
    {
      title: "Privacy Controls",
      description: "Granular access controls allow you to determine who can access your data and workflows.",
      icon: Eye
    },
    {
      title: "Secure Development",
      description: "Our development process includes regular code reviews and security testing.",
      icon: Code
    },
    {
      title: "Security Monitoring",
      description: "24/7 monitoring for suspicious activities and potential security threats.",
      icon: Bell
    },
    {
      title: "Compliance",
      description: "We are committed to meeting regulatory and compliance requirements for data security.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Security</h1>
          <p className="text-lg text-gray-700 mb-8">
            How we protect your data and ensure the security of our platform.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Security</h2>
            <p className="text-lg text-gray-700">
              At CrewHub, security is a top priority. We implement multiple layers of protection to safeguard your data and ensure the integrity of our platform. Our security practices are continuously reviewed and updated to address emerging threats.
            </p>
          </div>
          
          <h2 className="text-3xl font-bold mb-12 text-center">Security Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-8 opacity-0 animate-fade-in" 
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-blue-100 rounded-full p-3 inline-block mb-4">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <Separator className="my-16" />
          
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Reporting Security Issues</h2>
            <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
              If you believe you've found a security vulnerability in our platform, please report it to security@crewhub.ai. We appreciate your help in keeping CrewHub secure.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Security;
