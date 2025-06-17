import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Server, Cpu, HardDrive } from 'lucide-react';

const Hub: React.FC = () => {
  const mouseRef = useRef({ x: 0, y: 0 });
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      
      if (sceneRef.current) {
        const rect = sceneRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = (e.clientX - centerX) / rect.width;
        const deltaY = (e.clientY - centerY) / rect.height;
        
        sceneRef.current.style.transform = `perspective(1000px) rotateY(${deltaX * 10}deg) rotateX(${-deltaY * 10}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
      </div>

      {/* Tech background elements */}
      <div className="absolute inset-0 opacity-10">
        <Server className="absolute top-20 left-1/4 w-16 h-16 text-blue-500 animate-float" />
        <Cpu className="absolute bottom-32 right-1/3 w-12 h-12 text-cyan-400 animate-float-delayed" />
        <HardDrive className="absolute top-1/2 left-12 w-10 h-10 text-purple-500 animate-float" />
      </div>

      <div className="flex items-center justify-center min-h-screen relative z-10">
        <div 
          ref={sceneRef}
          className="text-center transition-transform duration-150 ease-out transform-gpu"
        >
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 mb-6 font-orbitron tracking-wider animate-glow">
              ЦИФРОВЫЕ РЕШЕНИЯ
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium">
              для вашего бизнеса
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Надежная инфраструктура для разработки программного обеспечения<br />
              и развития современных технологий
            </p>
          </div>

          <div className="space-y-6">
            <Link
              to="/home"
              className="group inline-block px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white font-bold text-xl rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-3">
                <span>ПЕРЕЙТИ</span>
                <ChevronDown className="w-6 h-6 group-hover:animate-bounce" />
              </div>
            </Link>
          </div>

          {/* 3D decorative elements */}
          <div className="absolute -z-10 inset-0">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-transparent rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-r from-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;