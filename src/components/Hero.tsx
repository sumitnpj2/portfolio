import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-blue-50 to-teal-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-800"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-5">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))] animate-pulse-soft"></div>
        
        {/* Floating blobs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/20 to-transparent rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300/20 to-transparent rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-transparent rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-20 left-1/3 w-24 h-24 bg-blue-400/10 dark:bg-blue-400/5 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-16 h-16 bg-teal-400/10 dark:bg-teal-400/5 rounded-full animate-float animation-delay-2000"></div>
      </div>
      
      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 -z-5 opacity-20 dark:opacity-10"
           style={{
             backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
             backgroundSize: '18px 18px'
           }}>
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Hi, I'm <br></br><span className="text-blue-600 dark:text-blue-400">Sumit Kumar Sahu</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            A passionate web developer on a learning journey
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            Welcome to my portfolio! I'm exploring the world of web development, 
            combining my teaching background with technical skills to create 
            engaging digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-transparent border-2 border-teal-500 text-teal-600 dark:text-teal-400 font-medium rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 mb-12 md:mb-0 flex justify-center order-1 hover:scale-100 md:order-2">          <div className="relative animate-heartbeat">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/490748232_1111546187655310_4606202988166905093_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kPnvVC6vzngQ7kNvwGtZwWk&_nc_oc=Admeaa9sVyJ0almlcjQxwnbuiUZuLHXys9oXBovCUcWW6Rqep3MZ02FT_h50-_2rH0-gRqsyJw6Dw7vdWhnKrRVc&_nc_zt=23&_nc_ht=scontent.fkep2-1.fna&_nc_gid=ZYrWUBg5SjUF5IONBD-hlw&oh=00_AfKKDSiPJ9SCKEjGE9tzCeOcFEKmdVloHYwxLa51tIY16Q&oe=6839ACED" 
                alt="Sumit Kumar Sahu" 
                className="w-full h-full object-cover transition-transform duration-300"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 px-6 py-2 rounded-full shadow-lg">
              <span className="text-blue-600 dark:text-blue-400 font-semibold">Web Developer</span>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
      </button>
    </section>
  );
};

export default Hero;