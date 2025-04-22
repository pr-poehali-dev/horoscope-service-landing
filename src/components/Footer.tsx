const Footer = () => {
  return (
    <footer className="w-full py-8 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">АстроНаутика</h3>
            <p className="text-sm text-gray-400">
              Профессиональные астрологические услуги с применением современных технологий.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: info@astronautica.ru</li>
              <li>Телефон: +7 (123) 456-78-90</li>
              <li>Адрес: г. Москва, ул. Звездная, 42</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                ВКонтакте
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Telegram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} АстроНаутика. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
