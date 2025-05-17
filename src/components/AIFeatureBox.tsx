
import React from 'react';

interface AIFeatureBoxProps {
  title: string;
  description: string;
  index: number;
}

const AIFeatureBox: React.FC<AIFeatureBoxProps> = ({ title, description, index }) => {
  return (
    <div className="waitlist-card p-8 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AIFeatureBox;
