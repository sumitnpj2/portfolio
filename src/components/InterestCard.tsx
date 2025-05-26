import React from 'react';

interface InterestCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start">
        <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 mt-1">
          {icon}
        </div>
        <div>
          <h4 className="font-bold text-lg mb-2">{title}</h4>
          <p className="text-gray-700 dark:text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InterestCard;