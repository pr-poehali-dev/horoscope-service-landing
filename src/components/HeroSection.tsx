
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative min-h-[90vh] pt-20 overflow-hidden">
      {/* Космические декоративные элементы */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white animate-pulse opacity-70"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 rounded-full bg-white animate-pulse opacity-60 delay-700"></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 rounded-full bg-white animate-pulse opacity-80 delay-500"></div>
      
      {/* Планета (декоративный элемент) */}
      <div className="hidden md:block absolute -right-32 top-1/3 w-64 h-64 rounded-full bg-gradient-to-br from-cosmic-deepPurple to-cosmic-purple opacity-30 animate-float"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            <span className="astro-text-gradient">Раскройте тайны вселенной</span>
            <br />
            <span className="block mt-2 text-white">с вашей личной натальной картой</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            Познайте себя на глубинном уровне через индивидуальный астрологический анализ, 
            основанный на точном положении планет в момент вашего рождения
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cosmic-purple to-cosmic-deepPurple hover:opacity-90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-cosmic-purple/20 hover:shadow-cosmic-purple/40 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              Получить натальную карту
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-cosmic-purple/50 text-white hover:bg-cosmic-purple/10 px-8 py-6 text-lg rounded-full"
              onClick={scrollToServices}
            >
              Узнать больше
            </Button>
          </div>
          
          <div className="mt-16 animate-bounce">
            <ChevronDown className="text-cosmic-purple w-10 h-10 cursor-pointer" onClick={scrollToServices} />
          </div>
          
          {/* Блок с мини-фактами */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="cosmic-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-cosmic-purple mb-2">96%</div>
              <p className="text-gray-300">клиентов отмечают высокую точность прогнозов</p>
            </div>
            
            <div className="cosmic-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-cosmic-purple mb-2">15+</div>
              <p className="text-gray-300">лет опыта в астрологическом анализе</p>
            </div>
            
            <div className="cosmic-card p-6 rounded-xl">
              <div className="text-4xl font-bold text-cosmic-purple mb-2">24ч</div>
              <p className="text-gray-300">максимальное время ожидания результатов</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Градиентная полоса внизу секции */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cosmic-purple/50 to-transparent"></div>
    </div>
  );
};

export default HeroSection;
