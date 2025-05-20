
import React from 'react';

interface AIFeatureBoxProps {
  title: string;
  description: string;
  index: number;
}

const AIFeatureBox: React.FC<AIFeatureBoxProps> = ({ title, description, index }) => {
  return (
    <div 
      className="p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 
      dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300
      hover:scale-[1.02] fade-in-item" 
      style={{transitionDelay: `${index * 100}ms`}}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default AIFeatureBox;
