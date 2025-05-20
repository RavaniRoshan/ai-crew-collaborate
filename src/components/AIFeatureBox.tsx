
import React from 'react';

interface AIFeatureBoxProps {
  title: string;
  description: string;
  index: number;
}

const AIFeatureBox: React.FC<AIFeatureBoxProps> = ({ title, description, index }) => {
  return (
    <div 
      className="waitlist-card p-8 hover-scale fade-in" 
      style={{transitionDelay: `${index * 100}ms`}}
    >
      <h3 className="text-xl font-bold mb-3 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default AIFeatureBox;
