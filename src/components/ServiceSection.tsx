import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Базовая натальная карта",
    description: "Индивидуальный анализ положения планет в момент вашего рождения. Вы узнаете о своих врожденных качествах, сильных сторонах и потенциальных вызовах.",
    price: "2 900 ₽",
    features: [
      "Подробный PDF-отчет (15+ страниц)",
      "Анализ положения планет и домов",
      "Описание личности и характера",
      "Срок выполнения: 2-3 дня"
    ],
    icon: "♈"
  },
  {
    id: 2,
    title: "Расширенная натальная карта",
    description: "Глубокий анализ вашей натальной карты с детальным разбором всех аспектов. Включает рекомендации для раскрытия вашего потенциала.",
    price: "4 900 ₽",
    features: [
      "Подробный PDF-отчет (30+ страниц)",
      "Анализ всех планет, домов и аспектов",
      "Детальное описание личности и судьбы",
      "Карьерные предрасположенности",
      "Срок выполнения: 4-5 дней"
    ],
    icon: "♃",
    featured: true
  },
  {
    id: 3,
    title: "Прогностика на год",
    description: "Детальный прогноз на предстоящий год. Узнайте о благоприятных периодах для начинаний и потенциальных вызовах.",
    price: "5 900 ₽",
    features: [
      "Подробный PDF-отчет (25+ страниц)",
      "Транзиты планет и их влияние",
      "Прогрессии и дирекции",
      "Персональные рекомендации",
      "Срок выполнения: 5-7 дней"
    ],
    icon: "♄"
  }
];

const ServiceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div id="services" className="py-24 bg-white dark:bg-cosmic-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 astro-text-gradient inline-block"
          >
            Наши астрологические услуги
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Выберите подходящий вариант астрологического анализа, который раскроет перед вами тайны вашей судьбы и поможет найти ответы на важные вопросы.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                service.featured 
                  ? "bg-gradient-to-br from-cosmic-purple to-cosmic-darkPurple border-2 border-cosmic-purple/50" 
                  : "bg-white dark:bg-cosmic-gray/10 border border-gray-200 dark:border-cosmic-gray/20"
              }`}
            >
              {service.featured && (
                <div className="absolute top-0 right-0 bg-cosmic-purple text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                  Популярное
                </div>
              )}
              
              <div className="p-8">
                <div className={`text-4xl mb-6 ${service.featured ? "text-white" : "text-cosmic-purple"}`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-4 ${service.featured ? "text-white" : "text-gray-800 dark:text-white"}`}>
                  {service.title}
                </h3>
                <p className={`mb-6 ${service.featured ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                  {service.description}
                </p>
                <div className={`text-2xl font-bold mb-6 ${service.featured ? "text-white" : "text-cosmic-purple"}`}>
                  {service.price}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li 
                      key={index}
                      className={`flex items-start ${service.featured ? "text-white/90" : "text-gray-600 dark:text-gray-300"}`}
                    >
                      <span className="mr-2 mt-1 text-cosmic-purple">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    service.featured 
                      ? "bg-white text-cosmic-purple hover:bg-gray-100" 
                      : "bg-cosmic-purple hover:bg-cosmic-deepPurple text-white"
                  }`}
                  onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Заказать
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceSection;
