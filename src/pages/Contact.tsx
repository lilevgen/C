import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Building, Hash, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес',
      content: '450047, РОССИЯ, Респ БАШКОРТОСТАН, г УФА, ул БАКАЛИНСКАЯ, ДОМ 33/2, оф ПОМЕЩ. 9А'
    },
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (347) 294-52-28'
    },
    {
      icon: Mail,
      title: 'Электронная почта',
      content: 'support@serverspro.ru'
    }
  ];

  const companyInfo = [
    {
      icon: Building,
      title: 'Полное наименование',
      content: 'Общество с ограниченной ответственностью «Цифровые решения»'
    },
    {
      icon: FileText,
      title: 'Сокращенное наименование',
      content: 'ООО «ЦР»'
    },
    {
      icon: Hash,
      title: 'ИНН',
      content: '0274957426'
    },
    {
      icon: Hash,
      title: 'КПП',
      content: '027401001'
    },
    {
      icon: Hash,
      title: 'ОГРН',
      content: '1200200031866'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20"
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-32 w-48 h-48 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              СВЯЖИТЕСЬ С НАМИ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Вы можете связаться с нами через указанные контакты
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {info.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {info.content}
                </p>
              </div>
            ))}
          </div>

          {/* Telegram QR Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/30 p-12 rounded-2xl border border-cyan-500/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                СВЯЗЬ ЧЕРЕЗ TELEGRAM
              </h2>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="bg-white p-8 rounded-2xl">
                  <img 
                    src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                    alt="QR Code для Telegram"
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                </div>
                
                <div className="text-left space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    Telegram: @ArtemGerasimov
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    Отсканируйте QR-код или напишите напрямую в Telegram для быстрой связи с нашими специалистами.
                  </p>
                  <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-semibold rounded-lg">
                    <span>@ArtemGerasimov</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              ИНФОРМАЦИЯ О КОМПАНИИ
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companyInfo.map((info, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;