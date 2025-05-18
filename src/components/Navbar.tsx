
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 px-6 md:px-12 lg:px-24">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-crew-darkBlue dark:text-white">Crew<span className="text-blue-500">Hub</span></span>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:items-center md:w-auto mt-4 md:mt-0`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 font-medium">
            <li>
              <Link to="/features" className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Features</Link>
            </li>
            <li>
              <Link to="/use-cases" className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Use Cases</Link>
            </li>
            <li>
              <Link to="/pricing" className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Pricing</Link>
            </li>
            <li>
              <Link to="/help" className="text-gray-900 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">Help</Link>
            </li>
          </ul>
        </div>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto mt-4 md:mt-0 space-y-2 md:space-y-0 space-x-0 md:space-x-4`}>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Link to="/" className="block">
            <Button className="w-full md:w-auto px-4 py-2 text-base">Join Waitlist</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
