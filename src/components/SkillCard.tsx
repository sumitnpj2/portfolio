import React from 'react';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center">
        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
          {icon}
        </div>
        <h4 className="font-bold text-lg">{name}</h4>
      </div>
    </div>
  );
};

export default SkillCard;