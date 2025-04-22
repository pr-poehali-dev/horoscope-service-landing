import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-white/80 dark:bg-cosmic-black/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold astro-text-gradient">
              AstroChart
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="font-medium text-gray-600 hover:text-cosmic-purple dark:text-gray-300 dark:hover:text-cosmic-purple transition-colors"
            >
              Услуги
            </a>
            <a
              href="#features"
              className="font-medium text-gray-600 hover:text-cosmic-purple dark:text-gray-300 dark:hover:text-cosmic-purple transition-colors"
            >
              Преимущества
            </a>
            <a
              href="#order"
              className="font-medium text-gray-600 hover:text-cosmic-purple dark:text-gray-300 dark:hover:text-cosmic-purple transition-colors"
            >
              Заказать
            </a>
            <Button
              size="sm"
              className="bg-cosmic-purple hover:bg-cosmic-deepPurple text-white transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
            >
              Рассчитать карту
            </Button>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-cosmic-gray text-gray-800 dark:text-white"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-cosmic-gray text-gray-800 dark:text-white"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-purple focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-cosmic-black shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a
              href="#services"
              className="block py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Услуги
            </a>
            <a
              href="#features"
              className="block py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Преимущества
            </a>
            <a
              href="#order"
              className="block py-2 font-medium text-gray-700 dark:text-gray-300 hover:text-cosmic-purple dark:hover:text-cosmic-purple"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Заказать
            </a>
            <Button
              className="w-full bg-cosmic-purple hover:bg-cosmic-deepPurple text-white"
              onClick={() => {
                document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
              }}
            >
              Рассчитать карту
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
