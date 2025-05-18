
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-900 dark:border-t dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4 dark:text-white">CrewHub</h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-xs">
              The comprehensive platform for AI agent & MCP management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3 dark:text-white">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/features" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Features</Link></li>
                <li><Link to="/use-cases" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Use Cases</Link></li>
                <li><Link to="/pricing" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Pricing</Link></li>
                <li><Link to="/roadmap" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 dark:text-white">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About</Link></li>
                <li><Link to="/blog" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Blog</Link></li>
                <li><Link to="/careers" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
                <li><Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 dark:text-white">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Privacy</Link></li>
                <li><Link to="/terms" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Terms</Link></li>
                <li><Link to="/security" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 CrewHub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Twitter</Link>
            <a 
              href="https://www.linkedin.com/in/roshan-ravani-3a79882a3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              LinkedIn
            </a>
            <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
