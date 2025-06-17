import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/home', label: 'Главная' },
    { path: '/about', label: 'О нас' },
    { path: '/services', label: 'Услуги' },
    { path: '/partners', label: 'Партнеры' },
    { path: '/contact', label: 'Контакты' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/LOGOCR1.png" 
              alt="Цифровые Решения"
              className="w-10 h-10 filter brightness-0 invert"
            />
            <span className="text-xl font-bold text-white font-orbitron">ЦР</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === item.path
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white'
                } rounded-lg border border-transparent hover:border-blue-500/30 hover:bg-blue-500/5`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></div>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;