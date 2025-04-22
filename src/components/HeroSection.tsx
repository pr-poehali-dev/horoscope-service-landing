import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 relative overflow-hidden bg-apple-white">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            <span className="apple-text-gradient">Раскройте свою судьбу</span>
          </h1>
          <p className="text-xl md:text-2xl text-apple-darkgray mb-8 leading-relaxed">
            Индивидуальные гороскопы и натальные карты, созданные с использованием современных технологий и древних знаний.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full h-12 px-8 bg-black text-white hover:bg-black/90 transition-all">
              Узнать свою судьбу
            </Button>
            <Button variant="outline" className="rounded-full h-12 px-8 border-[1.5px] hover:bg-black hover:text-white transition-all">
              Подробнее
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#e5e5e5_0%,transparent_70%)] opacity-70 z-0"></div>
    </section>
  );
};

export default HeroSection;
