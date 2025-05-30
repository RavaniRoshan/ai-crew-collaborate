
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient dark:bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">Contact Us</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Have questions about CrewHub? We're here to help.
          </p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="opacity-0 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 dark:text-white">CrewHub Team</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 border-l-4 border-blue-500">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold text-blue-500 dark:text-blue-300">R</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold dark:text-white">Ravani Roshan</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">Lead Developer</p>
                    <a 
                      href="https://www.linkedin.com/in/roshan-ravani-3a79882a3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      <Linkedin className="h-5 w-5 mr-2" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Join Our Waitlist</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  CrewHub is currently in development. Join our waitlist to be notified when we launch.
                </p>
                <Link to="/">
                  <Button className="bg-black text-white hover:bg-gray-800 dark:bg-blue-600 dark:hover:bg-blue-700">
                    Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
