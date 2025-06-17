import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <img 
            src="/LOGOCR1.png" 
            alt="Цифровые Решения"
            className="w-8 h-8 filter brightness-0 invert"
          />
          <span className="text-lg font-bold text-white font-orbitron">Цифровые Решения</span>
        </div>
        <p className="text-gray-400 text-sm">
          © 2024 ООО "Цифровые решения". Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;