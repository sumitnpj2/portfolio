import React from 'react';

interface SkillCardProps {
  name: string;
  level: number;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, level, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
          {icon}
        </div>
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
        <span>Beginner</span>
        <span>Advanced</span>
      </div>
    </div>
  );
};

export default SkillCard;