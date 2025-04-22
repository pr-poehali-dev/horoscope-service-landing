import { Check } from "lucide-react";

const features = [
  "Точные астрологические расчеты на основе вашей даты рождения",
  "Индивидуальная интерпретация от профессиональных астрологов",
  "Элегантное PDF-оформление вашей натальной карты",
  "Рекомендации, адаптированные под ваш личный гороскоп",
  "Онлайн-консультации для объяснения всех деталей",
  "Регулярные обновления прогнозов"
];

const FeatureSection = () => {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают нас</h2>
            <p className="text-lg text-apple-darkgray mb-8">
              Мы сочетаем древнюю мудрость астрологии с современными технологиями, чтобы предоставить вам самые точные и полезные астрологические прогнозы.
            </p>
            
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 bg-black rounded-full p-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 p-8 flex items-center justify-center">
              <img 
                src="/placeholder.svg" 
                alt="Натальная карта" 
                className="w-full h-auto max-w-md mx-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full z-0 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
