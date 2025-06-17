import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { Users, Cpu, Brain, Cloud, Globe, Zap } from 'lucide-react';

const Partners: React.FC = () => {
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
      number: '1',
      icon: Cpu,
      title: 'Виртуализация и Высокопроизводительные Вычисления',
      description: 'Мы предлагаем комплексные решения для виртуализации серверов, что позволяет нашим клиентам гибко масштабировать ресурсы и оптимизировать затраты.',
      subDescription: 'Серверы, оборудованные видеокартами NVIDIA A100, обеспечивают беспрецедентную производительность, что делает их идеальными для сложных вычислительных задач.'
    },
    {
      number: '2',
      icon: Brain,
      title: 'Искусственный Интеллект и Машинное Обучение',
      description: 'ООО «Технодом» глубоко участвует в разработке и внедрении ИИ-решений для бизнеса. Мы помогаем компаниям создавать интеллектуальных ассистентов, автоматизировать процессы и принимать более точные решения на основе данных.',
      subDescription: 'Наши услуги включают разработку моделей машинного обучения, анализ больших данных и создание персонализированных решений для различных отраслей.'
    },
    {
      number: '3',
      icon: Cloud,
      title: 'Облачные Сервисы и Аренда Серверов',
      description: 'Мы предлагаем надежные облачные сервисы и аренду серверов, что позволяет нашим клиентам сосредоточиться на своей основной деятельности.',
      subDescription: 'Сайт: greencloud24.ru'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-blue-900/20"
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 right-32 w-48 h-48 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              ПАРТНЕРЫ
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Партнерство с ООО «Технодом»
          </p>
        </div>
      </section>

      {/* Partnership Info Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                СОВМЕСТНОЕ ПРЕДОСТАВЛЕНИЕ ИННОВАЦИОННЫХ СЕРВИСОВ
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Мы рады сообщить, что наша компания активно сотрудничает с ООО «Технодом», одной из ведущих организаций в области виртуализации и высокопроизводительных вычислений. 
                ООО «Технодом» специализируется на предоставлении передовых решений для серверов, оснащенных видеокартами NVIDIA A100, 
                что позволяет обеспечивать максимальную производительность и эффективность для самых требовательных задач.
              </p>
            </div>

            {/* Partner Logo Section */}
            <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 p-12 rounded-2xl border border-green-500/30 mb-16 text-center">
              <div className="flex items-center justify-center space-x-8 mb-8">
                <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-2xl">
                  <Users className="w-24 h-24 text-green-400" />
                </div>
                <div className="text-4xl font-bold text-green-400">×</div>
                <div className="bg-gradient-to-r from-gray-800 to-black p-8 rounded-2xl">
                  <Globe className="w-24 h-24 text-blue-400" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                ООО "Цифровые решения" + ООО "Технодом"
              </h3>
              <p className="text-gray-300">
                Стратегическое партнерство для предоставления передовых технологических решений
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              ИННОВАЦИОННЫЕ УСЛУГИ И РЕШЕНИЯ
            </span>
          </h2>

          <div className="space-y-24 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-10 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 font-orbitron">
                        {service.number}
                      </span>
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-lg text-gray-300 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    
                    <p className="text-gray-400 leading-relaxed">
                      {service.subDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-orbitron">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                ПРЕИМУЩЕСТВА ПАРТНЕРСТВА
              </span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
                <Zap className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-4">Высокая производительность</h3>
                <p className="text-gray-300">Серверы с NVIDIA A100 для самых требовательных задач</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-yellow-500/50 transition-all duration-500">
                <Brain className="w-12 h-12 text-yellow-400 mb-4 mx-auto" />
                <h3 className="text-xl font-bold text-white mb-4">ИИ решения</h3>
                <p className="text-gray-300">Передовые технологии машинного обучения и искусственного интеллекта</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactButton />
      <Footer />
    </div>
  );
};

export default Partners;