
import React from 'react';
import AIFeatureBox from './AIFeatureBox';

const AIResponseSection = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-4xl mx-auto bg-gray-50 rounded-2xl p-6 md:p-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-5 w-5 rounded-full bg-crew-darkBlue flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.75V19.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2501 8.75L5.75 15.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.2501 15.25L5.75 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-medium text-gray-700">AI Response</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">What is CrewHub?</h3>
        
        <div className="space-y-4 text-gray-700">
          <p>
            CrewHub is a comprehensive platform for managing AI agents and Machine Control Protocols (MCPs). It serves as a collaborative workspace where users can assemble, configure, and manage teams of specialized AI models alongside various tools.
          </p>
          
          <h4 className="font-semibold mt-6 mb-2">Key Features:</h4>
          <ul className="list-disc pl-5 space-y-2">
            <li>User & workspace management with role-based permissions</li>
            <li>AI agent catalog with detailed configuration options</li>
            <li>Tool library and integration capabilities</li>
            <li>Visual workflow builder for creating complex agent+tool workflows</li>
            <li>Real-time collaboration features for teams</li>
          </ul>
          
          <p className="mt-4">
            CrewHub transforms how teams work with AI by providing a GitHub-like collaborative environment specifically designed for AI agent orchestration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIResponseSection;
