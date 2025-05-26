import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a 
              href="#" 
              className="text-xl font-bold text-blue-600 dark:text-blue-400"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Sumit<span className="text-teal-500">.dev</span>
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center space-x-4 mb-4 md:mb-0">
            {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-gray-600 dark:text-gray-400 flex items-center">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 mx-1" />
            <span>&copy; {new Date().getFullYear()} Sumit Kumar Sahu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;