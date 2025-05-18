
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="py-4 px-6 md:px-12 lg:px-24 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Link to="/">
          <span className="text-xl font-bold">CrewHub</span>
        </Link>
      </div>
      <div className="hidden md:flex gap-10 items-center">
        <Link to="/features" className="text-gray-700 hover:text-black transition-colors">Features</Link>
        <Link to="/use-cases" className="text-gray-700 hover:text-black transition-colors">Use cases</Link>
        <Link to="/pricing" className="text-gray-700 hover:text-black transition-colors">Pricing</Link>
        <Link to="/help" className="text-gray-700 hover:text-black transition-colors">Help</Link>
      </div>
      <div className="flex items-center">
        <Link to="/">
          <Button className="bg-black text-white hover:bg-gray-800">
            Join waitlist <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
