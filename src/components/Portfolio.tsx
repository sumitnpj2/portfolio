import React from 'react';
import { Clock, PlusCircle } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm currently building my portfolio. Check back soon to see my upcoming projects!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Project Cards */}
          <ProjectPlaceholder 
            title="Web Application" 
            description="An interactive web application with modern UI/UX principles"
          />
          <ProjectPlaceholder 
            title="Responsive Website" 
            description="A fully responsive website with custom CSS and JavaScript"
          />
          <ProjectPlaceholder 
            title="E-commerce Store" 
            description="An online store with product listings and cart functionality"
          />
        </div>
        
        {/* Coming Soon Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 dark:bg-gray-700 rounded-full">
            <Clock size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-gray-700 dark:text-gray-300">More projects coming soon!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectPlaceholderProps {
  title: string;
  description: string;
}

const ProjectPlaceholder: React.FC<ProjectPlaceholderProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group">
      <div className="h-48 bg-gradient-to-br from-blue-100 to-teal-100 dark:from-blue-900/30 dark:to-teal-900/30 flex items-center justify-center">
        <div className="text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-all duration-300">
          <PlusCircle size={48} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
          <Clock size={16} className="mr-1" />
          <span>Coming Soon</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;