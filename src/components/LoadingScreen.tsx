import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="absolute inset-0 animate-spin">
              <img 
                src="/LOGOCR1.png" 
                alt="Цифровые Решения"
                className="w-full h-full object-contain filter brightness-0 invert"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-black text-white mb-4 font-orbitron tracking-wider">
          ЦИФРОВЫЕ
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-300 font-orbitron tracking-widest">
          РЕШЕНИЯ
        </h2>
        
        <div className="mt-8">
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;