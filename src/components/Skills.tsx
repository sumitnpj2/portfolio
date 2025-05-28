import React from 'react';
import { Code, Globe, Layout, Laptop } from 'lucide-react';
import SkillCard from './SkillCard';
import InterestCard from './InterestCard';

const Skills: React.FC = () => {  
  const technicalSkills = [
    { name: "HTML", icon: <Globe size={20} /> },
    { name: "JavaScript", icon: <Code size={20} /> },
    { name: "Computer Applications", icon: <Laptop size={20} /> },
    { name: "Operating Systems", icon: <Laptop size={20} /> },
    { name: "Tailwind CSS", icon: <Layout size={20} /> },
  ];

  const interests = [
    { 
      title: "Front-end Development", 
      description: "Building responsive and interactive user interfaces", 
      icon: <Layout size={24} className="text-blue-500 dark:text-blue-400" />
    },
    { 
      title: "UI/UX Basics", 
      description: "Creating intuitive and visually appealing designs", 
      icon: <Layout size={24} className="text-teal-500 dark:text-teal-400" />
    },
    { 
      title: "React.js & Node.js", 
      description: "Learning modern JavaScript frameworks and runtime environments", 
      icon: <Code size={24} className="text-purple-500 dark:text-purple-400" />
    },
    { 
      title: "Digital Literacy Education", 
      description: "Teaching essential digital skills to others", 
      icon: <Laptop size={24} className="text-green-500 dark:text-green-400" />
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I've developed these skills through education and hands-on experience. 
            I'm constantly learning and improving my abilities.
          </p>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (              <SkillCard 
                key={index} 
                name={skill.name}
                icon={skill.icon}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Areas of Interest</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <InterestCard 
                key={index} 
                title={interest.title} 
                description={interest.description} 
                icon={interest.icon} 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;