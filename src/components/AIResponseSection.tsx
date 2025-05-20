
import React from 'react';
import AIFeatureBox from './AIFeatureBox';

const AIResponseSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white dark:bg-transparent">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 md:p-10 fade-in">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-5 w-5 rounded-full bg-crew-darkBlue dark:bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.75V19.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2501 8.75L5.75 15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2501 15.25L5.75 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-medium text-gray-700 dark:text-gray-300">AI Response</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 dark:text-white">What is CrewHub?</h3>
        
        <div className="space-y-4 text-gray-700 dark:text-gray-300">
          <p className="scale-in">
            CrewHub is a comprehensive platform for managing AI agents and Machine Control Protocols (MCPs). It serves as a collaborative workspace where users can assemble, configure, and manage teams of specialized AI models alongside various tools.
          </p>
          
          <h4 className="font-semibold mt-6 mb-2 dark:text-gray-200">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-2 stagger-container">
            <li className="stagger-item">User & workspace management with role-based permissions</li>
            <li className="stagger-item">AI agent catalog with detailed configuration options</li>
            <li className="stagger-item">Tool library and integration capabilities</li>
            <li className="stagger-item">Visual workflow builder for creating complex agent+tool workflows</li>
            <li className="stagger-item">Real-time collaboration features for teams</li>
          </ul>
          
          <p className="mt-4 slide-in-right">
            CrewHub transforms how teams work with AI by providing a GitHub-like collaborative environment specifically designed for AI agent orchestration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIResponseSection;
