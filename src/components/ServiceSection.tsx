import { Card, CardContent } from "@/components/ui/card";
import { Star, Moon, Sun, Sparkles } from "lucide-react";

const services = [
  {
    icon: <Star className="h-8 w-8 text-black" />,
    title: "Личный гороскоп",
    description: "Подробный анализ вашей личности, сильных сторон и потенциальных жизненных вызовов на основе положения звезд в момент рождения."
  },
  {
    icon: <Moon className="h-8 w-8 text-black" />,
    title: "Натальная карта",
    description: "Профессиональный расчет и интерпретация натальной карты с детальным анализом всех домов, планет и аспектов."
  },
  {
    icon: <Sun className="h-8 w-8 text-black" />,
    title: "Совместимость",
    description: "Анализ совместимости с партнером, включающий сильные стороны и потенциальные сложности ваших отношений."
  },
  {
    icon: <Sparkles className="h-8 w-8 text-black" />,
    title: "Прогноз на год",
    description: "Детальный прогноз основных событий и тенденций на ближайший год с рекомендациями по принятию важных решений."
  }
];

const ServiceSection = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-apple-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
          <p className="text-lg text-apple-darkgray">
            Откройте силу звезд с нашими персонализированными астрологическими услугами
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 bg-apple-gray p-3 rounded-full inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-apple-darkgray">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
