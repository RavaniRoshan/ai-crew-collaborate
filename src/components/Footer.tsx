
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">CrewHub</h3>
            <p className="text-gray-600 max-w-xs">
              The comprehensive platform for AI agent & MCP management
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Use Cases</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Roadmap</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">About</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Privacy</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Terms</Link></li>
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© 2025 CrewHub. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Twitter</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">LinkedIn</Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900">GitHub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
