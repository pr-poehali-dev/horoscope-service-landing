import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cosmic-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold astro-text-gradient inline-block mb-4">
              AstroChart
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Профессиональный расчет натальных карт и составление индивидуальных гороскопов с детальной интерпретацией результатов.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Натальная карта
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Синастрия
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Прогностика
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Консультации
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} AstroChart. Все права защищены.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-cosmic-purple text-sm">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-gray-500 hover:text-cosmic-purple text-sm">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
