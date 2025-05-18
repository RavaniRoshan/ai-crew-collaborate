
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from 'react-router-dom';

interface ComingSoonPageProps {
  title: string;
  description: string;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({ title, description }) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="py-20 px-6 md:px-12 lg:px-24 bg-blue-gradient">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-lg text-gray-700 mb-8">{description}</p>
        </div>
      </div>

      <section className="py-16 px-6 md:px-12 lg:px-24 min-h-[40vh] flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Coming Soon!</h2>
            <p className="text-lg text-gray-700 mb-8">
              We're working hard to bring you this content. Join our waitlist to be notified when it's ready.
            </p>
            <Link to="/">
              <Button variant="outline" className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" /> Return to Home
              </Button>
            </Link>
            <Link to="/">
              <Button className="bg-black text-white hover:bg-gray-800">
                Join Waitlist
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoonPage;
