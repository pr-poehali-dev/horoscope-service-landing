
import React from "react";
import { Clock, Shield, BarChart, Sparkles, Compass, Star } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12 text-cosmic-purple" />,
      title: "Быстрый результат",
      description: "Получите детальную натальную карту в течение 24 часов после заказа"
    },
    {
      icon: <Shield className="w-12 h-12 text-cosmic-purple" />,
      title: "Конфиденциальность",
      description: "Ваши личные данные надежно защищены и используются только для расчетов"
    },
    {
      icon: <BarChart className="w-12 h-12 text-cosmic-purple" />,
      title: "Точность данных",
      description: "Используем высокоточные астрономические алгоритмы для расчета положения планет"
    },
    {
      icon: <Sparkles className="w-12 h-12 text-cosmic-blue" />,
      title: "Персонализация",
      description: "Каждая натальная карта уникальна и создается индивидуально для вас"
    },
    {
      icon: <Compass className="w-12 h-12 text-cosmic-blue" />,
      title: "Практические рекомендации",
      description: "Получите конкретные советы для применения знаний на практике"
    },
    {
      icon: <Star className="w-12 h-12 text-cosmic-blue" />,
      title: "Поддержка специалиста",
      description: "Консультация с профессиональным астрологом для разъяснения всех нюансов"
    }
  ];

  return (
    <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Почему <span className="astro-text-gradient">выбирают нас</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Наша команда астрологов использует современные технологии для создания точных и информативных натальных карт
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="cosmic-card p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-6 flex justify-center">
              <div className="relative">
                {feature.icon}
                <div className="absolute -inset-2 bg-gradient-to-r from-cosmic-purple to-cosmic-blue rounded-full opacity-30 blur-lg -z-10"></div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-center">{feature.title}</h3>
            
            <p className="text-gray-300 text-center">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Анимированный декоративный элемент */}
      <div className="mt-20 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full bg-cosmic-purple/10 animate-pulse"></div>
        </div>
        
        <div className="text-center relative z-10 p-12 max-w-3xl mx-auto cosmic-card rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Более 10,000 клиентов уже раскрыли свой потенциал
          </h3>
          <p className="text-gray-300 text-lg mb-6">
            Присоединяйтесь к тысячам людей, которые используют астрологические знания для улучшения своей жизни
          </p>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-lg font-medium text-cosmic-purple mt-2">
            4.9 из 5 на основе 856 отзывов
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
