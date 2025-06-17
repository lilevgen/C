import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { Cloud, Headphones, Server, Shield, Clock, Users } from 'lucide-react';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Cloud,
      title: 'Облачные решения',
      description: 'Предоставляем масштабируемые облачные решения, которые позволяют вашему бизнесу работать без прерываний и с максимальной эффективностью. Доступные и надежные услуги для любого проекта.'
    },
    {
      icon: Headphones,
      title: 'Техническая поддержка',
      description: 'Наши специалисты обеспечивают круглосуточную техническую поддержку, готовую помочь в любое время. Мы следим за качеством услуг и быстротой реагирования.'
    },
    {
      icon: Server,
      title: 'Инфраструктура',
      description: 'Построенная на современных технологиях инфраструктура гарантирует высокую надежность и безопасность данных. Мы предлагаем только лучшие решения для вашего бизнеса.'
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
          className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              КЛЮЧЕВЫЕ ПРЕДЛОЖЕНИЯ
            </span>
            <br />
            <span className="text-white">КОМПАНИИ</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Мы предлагаем широкий спектр услуг, которые помогут вашему бизнесу быть более эффективным и безопасным в цифровом пространстве.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/50 to-black/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-purple-500 rounded-full blur-xl animate-float-delayed"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-orbitron">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                НАША ИСТОРИЯ И МИССИЯ
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Наша команда имеет многолетний опыт работы в сфере разработки программного обеспечения и инфраструктуры. 
              Мы создаем безопасные и инновационные решения для бизнеса, обеспечивая высококачественные услуги на каждом этапе проекта.
            </p>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-8 rounded-2xl border border-blue-500/30 mb-12">
              <blockquote className="text-lg italic text-gray-300 mb-4">
                "Цифровые решения помогли нам оптимизировать бизнес-процессы, значительно снизив затраты. Очень довольны сотрудничеством!"
              </blockquote>
              <cite className="text-blue-400 font-semibold">— Иван Петров</cite>
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

export default Home;