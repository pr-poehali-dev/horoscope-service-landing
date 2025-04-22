
import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-cosmic-black border-t border-cosmic-purple/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <a href="#" className="text-2xl font-bold astro-text-gradient inline-block mb-4">
              AstroChart
            </a>
            <p className="text-gray-400 mb-4 max-w-md">
              Профессиональные астрологические услуги для всех, кто стремится
              лучше понять себя, свое предназначение и путь.
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
            <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Преимущества
                </a>
              </li>
              <li>
                <a href="#order" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Заказать карту
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  Блог
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  О нас
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-cosmic-purple mr-2" />
                <span className="text-gray-400">+7 (800) 555-35-35</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-cosmic-purple mr-2" />
                <a href="mailto:info@astrochart.ru" className="text-gray-400 hover:text-cosmic-purple transition-colors">
                  info@astrochart.ru
                </a>
              </li>
            </ul>
            
            <div className="mt-6">
              <h4 className="text-sm font-medium text-white mb-2">Подпишитесь на новости</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Ваш email" 
                  className="px-4 py-2 bg-cosmic-gray/20 border border-cosmic-purple/30 rounded-l-md text-white flex-1"
                />
                <button className="bg-cosmic-purple hover:bg-cosmic-deepPurple px-4 py-2 text-white rounded-r-md transition-colors">
                  Отправить
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-cosmic-purple/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AstroChart. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-cosmic-purple text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-500 hover:text-cosmic-purple text-sm transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
