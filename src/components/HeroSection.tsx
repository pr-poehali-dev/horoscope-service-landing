import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;
      
      starsRef.current.innerHTML = '';
      const numStars = 100;
      
      for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        const size = Math.random() * 3;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        
        star.style.animationDelay = `${Math.random() * 5}s`;
        
        starsRef.current.appendChild(star);
      }
    };

    createStars();
    
    window.addEventListener('resize', createStars);
    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <div className="relative min-h-screen cosmic-bg overflow-hidden pt-16">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      {/* Cosmic circles */}
      <div className="absolute inset-0 z-0 bg-stars opacity-30"></div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Раскройте тайны <span className="astro-text-gradient">вашей судьбы</span> через звезды
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Индивидуальный гороскоп и натальная карта, созданные на основе точных астрономических данных, раскроют ваш потенциал и помогут принимать верные решения.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button 
                size="lg" 
                className="bg-cosmic-purple hover:bg-cosmic-deepPurple text-white font-medium px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 cosmic-pulse"
                onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
              >
                Рассчитать натальную карту
              </Button>
              <Button 
                variant="outline"
                size="lg" 
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-medium px-8 py-3 rounded-xl transition-all duration-300"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Узнать больше
              </Button>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative w-full aspect-square max-w-md mx-auto"
            >
              {/* Main circle */}
              <div className="absolute inset-0 rounded-full border-2 border-cosmic-purple/30 animate-pulse"></div>
              
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '60s' }}></div>
              <div className="absolute inset-[15%] rounded-full border border-cosmic-purple/40 animate-spin" style={{ animationDuration: '40s' }}></div>
              <div className="absolute inset-[30%] rounded-full border border-white/30 animate-spin" style={{ animationDuration: '30s' }}></div>
              
              {/* Center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-cosmic-purple/20 backdrop-blur-md flex items-center justify-center animate-glow">
                <div className="text-white text-6xl">♃</div>
              </div>
              
              {/* Planets */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cosmic-blue/70 shadow-lg shadow-cosmic-blue/30 planet-orbit" style={{ animationDuration: '15s' }}></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-cosmic-purple/70 shadow-lg shadow-cosmic-purple/30 planet-orbit" style={{ animationDuration: '25s', animationDelay: '1s' }}></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-500/70 shadow-lg shadow-yellow-500/30 planet-orbit" style={{ animationDuration: '10s', animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Stars */}
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                ></div>
              ))}
            </motion.div>
          </div>
        </div>
        
        {/* Statistics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="cosmic-card p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-white mb-2">10+ лет</div>
            <p className="text-gray-300">опыта в астрологии</p>
          </div>
          <div className="cosmic-card p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-white mb-2">5000+</div>
            <p className="text-gray-300">довольных клиентов</p>
          </div>
          <div className="cosmic-card p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-white mb-2">98%</div>
            <p className="text-gray-300">точность прогнозов</p>
          </div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-cosmic-black"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
