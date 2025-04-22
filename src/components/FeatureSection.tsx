import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "Точность расчетов",
    description: "Используем высокоточные астрономические алгоритмы NASA для расчета положения планет в момент вашего рождения с точностью до секунды.",
    icon: "⭐"
  },
  {
    id: 2,
    title: "Индивидуальный подход",
    description: "Каждая карта и гороскоп интерпретируются лично опытным астрологом, а не генерируются автоматически.",
    icon: "👤"
  },
  {
    id: 3,
    title: "Детальная интерпретация",
    description: "Вы получите глубокий анализ всех аспектов вашей жизни: личность, отношения, карьера, здоровье и духовное развитие.",
    icon: "📊"
  },
  {
    id: 4,
    title: "Современный подход",
    description: "Сочетаем классические астрологические техники с современными методиками для максимально точных прогнозов.",
    icon: "🔮"
  },
  {
    id: 5,
    title: "Конфиденциальность",
    description: "Гарантируем полную конфиденциальность всех предоставленных вами данных и результатов астрологических расчетов.",
    icon: "🔒"
  },
  {
    id: 6,
    title: "Постоянная поддержка",
    description: "После получения расчетов вы можете задать дополнительные вопросы для уточнения интерпретации вашей карты.",
    icon: "💬"
  }
];

const FeatureSection = () => {
  return (
    <div id="features" className="py-24 bg-gray-50 dark:bg-cosmic-black/95 cosmic-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 astro-text-gradient inline-block"
          >
            Почему выбирают нас
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Наш многолетний опыт и индивидуальный подход к каждому клиенту гарантируют высокое качество астрологического анализа.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cosmic-card group rounded-xl p-8 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl bg-cosmic-purple/10 group-hover:bg-cosmic-purple/20 mb-6 transition-all duration-300">
                <span>{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-cosmic-purple transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 bg-white dark:bg-cosmic-gray/10 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-cosmic-gray/20"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 dark:bg-cosmic-gray/30 overflow-hidden mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <img src="/placeholder.svg" alt="Клиент" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="text-cosmic-purple text-3xl mb-4">★★★★★</div>
              <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-6">
                "Натальная карта, составленная вашими астрологами, поразила меня своей точностью. Она не только подтвердила мои наблюдения о себе, но и открыла новые грани моей личности. Теперь я лучше понимаю свои сильные стороны и знаю, как использовать их для достижения целей. Спасибо за вашу работу!"
              </p>
              <div className="font-semibold text-gray-900 dark:text-white">Елена Смирнова</div>
              <div className="text-gray-500 dark:text-gray-400">Москва</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeatureSection;
