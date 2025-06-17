import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { Cloud, Headphones, Server, ArrowRight, Shield, Clock } from 'lucide-react';

const Services: React.FC = () => {
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

  const services = [
    {
      number: '01',
      icon: Cloud,
      title: 'Облачные решения',
      description: 'Предоставляем услуги облачной виртуализации с доступом к современным серверам и высокоэффективным SSD, обеспечивающим стабильную работу приложений без простоя.',
      features: ['Масштабируемость ресурсов', 'Высокая производительность SSD', '99.9% гарантия uptime', 'Автоматическое резервное копирование']
    },
    {
      number: '02',
      icon: Server,
      title: 'Инфраструктура',
      description: 'Наши решения по сетевой инфраструктуре включают надежное оборудование и DDoS-защиту, что обеспечивает максимальную безопасность и непрерывность бизнеса.',
      features: ['DDoS защита', 'Надежное оборудование', 'Сетевая безопасность', 'Мониторинг 24/7']
    },
    {
      number: '03',
      icon: Headphones,
      title: 'Техническая поддержка',
      description: 'Мы обеспечиваем круглосуточную техническую поддержку и мониторинг, гарантируя стабильную работу всех систем и быструю реакцию на возможные проблемы.',
      features: ['Поддержка 24/7/365', 'Среднее время ответа < 15 мин', 'Команда сертифицированных специалистов', 'Проактивный мониторинг']
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Безопасность данных',
      description: 'Мы гарантируем высокую степень безопасности ваших данных благодаря современным технологиям и надежному оборудованию. Ваши данные защищены от угроз и потерь.'
    },
    {
      icon: Clock,
      title: 'Доступность услуг',
      description: 'Обеспечиваем 24/7 доступ к нашим услугам, что позволяет вашему бизнесу работать без сбоев и потерь. Всегда на связи, всегда готовы помочь.'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 right-32 w-48 h-48 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-24 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              НАШИ УСЛУГИ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ключевые предложения компании
          </p>
          <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Мы предлагаем широкий спектр услуг, которые помогут вашему бизнесу быть более эффективным и безопасным в цифровом пространстве.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-8">
                  <div className="flex items-center space-x-6">
                    <span className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 font-orbitron">
                      {service.number}
                    </span>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white font-orbitron">
                    {service.title}
                  </h3>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 shadow-lg hover:shadow-blue-500/25">
                    <span>Начать</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border border-blue-500/30">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-blue-400 opacity-50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-12 rounded-2xl border border-blue-500/30">
              <blockquote className="text-2xl italic text-gray-300 mb-6">
                "Сотрудничество с 'Цифровыми решениями' значительно ускорило наши процессы и повысило безопасность данных. Мы довольны их услугами."
              </blockquote>
              <cite className="text-blue-400 font-semibold text-lg">— Анна Иванова</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              ПОЧЕМУ ВЫБРАТЬ
            </span>
            <br />
            <span className="text-white">"ЦИФРОВЫЕ РЕШЕНИЯ"?</span>
          </h2>
          
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Наши уникальные предложения включают надежность, доступность и безопасность, 
            которые помогут вашему бизнесу максимально эффективно использовать ресурсы.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-10 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactButton />
      <Footer />
    </div>
  );
};

export default Services;