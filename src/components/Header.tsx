import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl">
            <span className="apple-text-gradient">АстроНаутика</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Преимущества
            </button>
            <button 
              onClick={() => scrollToSection("order")} 
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Заказать
            </button>
          </nav>
          
          <Button 
            onClick={() => scrollToSection("order")}
            className="rounded-full h-10 px-6 bg-black text-white hover:bg-black/90 transition-all"
          >
            Узнать судьбу
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
