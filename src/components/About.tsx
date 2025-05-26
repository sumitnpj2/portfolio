import React from 'react';
import { Briefcase, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Personal Bio */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                <User size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold">Personal Bio</h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              I'm a passionate individual who discovered a love for web development while teaching computer basics. 
              My journey combines my educational background with hands-on experience in technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy reading tech blogs, gaming, and photography. 
              I believe in continuous learning and sharing knowledge with others.
            </p>
          </div>
          
          {/* Education */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-4">
                <GraduationCap size={24} className="text-teal-600 dark:text-teal-400" />
              </div>
              <h3 className="text-xl font-bold">Education</h3>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-1">Bachelor's Degree</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Tribhuvan University</p>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Nepalgunj Campus of Management & Technology</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Expected graduation: 2028</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Continuing Education</h4>
              <p className="text-gray-700 dark:text-gray-300">Self-paced online courses in web development, focusing on modern front-end technologies.</p>
            </div>
          </div>
          
          {/* Work Experience */}
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-4">
                <Briefcase size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold">Work Experience</h3>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-1">Computer Teacher</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-1">City Public School</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Teaching computer basics and digital literacy</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold text-lg mb-1">Computer Operator</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Nepalgunj Sub Metropolitan Office</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Data entry and basic IT support</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Instructor</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-1">Bageshwari Institute</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Teaching computer applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;