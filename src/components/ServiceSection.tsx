
import React from "react";
import { CheckCircle, Star, Moon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServiceSection = () => {
  const services = [
    {
      title: "Базовая натальная карта",
      price: "1 900 ₽",
      description: "Полный анализ расположения планет на момент вашего рождения с базовой интерпретацией",
      features: [
        "Расчет точной натальной карты",
        "Анализ положения планет",
        "Анализ восходящего знака",
        "Базовая интерпретация",
        "PDF отчет"
      ],
      icon: <Star className="w-16 h-16 text-cosmic-purple animate-pulse" />,
      popular: false,
    },
    {
      title: "Премиум натальная карта",
      price: "3 900 ₽",
      description: "Углубленный анализ с детальной интерпретацией и персональными рекомендациями",
      features: [
        "Все из базового пакета",
        "Детальный анализ аспектов планет",
        "Анализ лунных узлов",
        "Личные рекомендации и прогнозы",
        "Дополнительная 30-минутная консультация",
        "Премиум PDF отчет"
      ],
      icon: <Moon className="w-16 h-16 text-cosmic-blue animate-glow" />,
      popular: true,
    },
    {
      title: "Годовой прогноз",
      price: "5 900 ₽",
      description: "Комплексный анализ натальной карты и прогнозирование на год вперед",
      features: [
        "Все из премиум пакета",
        "Прогноз на 12 месяцев вперед",
        "Анализ транзитов планет",
        "Периоды благоприятных возможностей",
        "Стратегии для преодоления сложных периодов",
        "Две 30-минутных консультации",
        "VIP PDF отчет с ежемесячной детализацией"
      ],
      icon: <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cosmic-purple to-cosmic-blue animate-spin-slow"></div>,
      popular: false,
    },
  ];

  return (
    <div className="py-20 container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
          Наши <span className="astro-text-gradient">услуги</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Выберите подходящий вариант астрологического анализа и откройте двери к пониманию своей судьбы
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`relative cosmic-card p-6 md:p-8 rounded-xl flex flex-col h-full ${
              service.popular ? 'border-cosmic-purple border-2 shadow-lg shadow-cosmic-purple/20' : ''
            }`}
          >
            {service.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cosmic-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                Популярный выбор
              </div>
            )}
            
            <div className="flex justify-center mb-6">{service.icon}</div>
            
            <h3 className="text-2xl font-bold text-white mb-2 text-center">{service.title}</h3>
            
            <div className="text-3xl font-bold text-center mb-4 text-cosmic-purple">{service.price}</div>
            
            <p className="text-gray-300 mb-6 text-center">{service.description}</p>
            
            <div className="mb-8 flex-grow">
              <ul className="space-y-3">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-cosmic-purple shrink-0 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button 
              className={`mt-auto w-full py-6 rounded-full group ${
                service.popular 
                  ? 'bg-cosmic-purple hover:bg-cosmic-deepPurple' 
                  : 'bg-transparent border-2 border-cosmic-purple/50 hover:bg-cosmic-purple/10'
              } text-white transition-all duration-300`}
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span>Выбрать</span>
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
