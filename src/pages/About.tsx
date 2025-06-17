import React, { useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
import ContactButton from '../components/ContactButton';
import Footer from '../components/Footer';
import { Target, Users, Shield, Zap } from 'lucide-react';

const About: React.FC = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Доступность',
      description: 'Мы стремимся предоставить нашим клиентам доступ к современным ресурсам и технологиям, которые соответствуют их потребностям и бюджету.'
    },
    {
      icon: Shield,
      title: 'Надежность',
      description: 'Наша инфраструктура построена на надежных решениях и оборудовании, что гарантирует стабильную работу и безопасность для наших клиентов.'
    },
    {
      icon: Zap,
      title: 'Безопасность',
      description: 'Мы заботимся о безопасности ваших данных и инфраструктуры, обеспечивая высший уровень защиты и возможные меры реагирования на угрозы.'
    }
  ];

  const teamMembers = [
    {
      role: 'Системный архитектор',
      description: 'Разработка и внедрение масштабируемых IT-решений'
    },
    {
      role: 'DevOps инженер',
      description: 'Автоматизация процессов и обеспечение непрерывной интеграции'
    },
    {
      role: 'Специалист по безопасности',
      description: 'Защита данных и инфраструктуры от современных угроз'
    },
    {
      role: 'Техническая поддержка',
      description: 'Круглосуточная поддержка и мониторинг систем'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          ref={parallaxRef}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
        ></div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-32 left-32 w-48 h-48 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-48 right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              О НАС
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Наша история и миссия компании
          </p>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  КОМПАНИЯ ООО "ЦИФРОВЫЕ РЕШЕНИЯ"
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Компания ООО Цифровые решения предлагает широкий спектр услуг в области виртуализации и облачных технологий с 2015 года. 
                    Мы нацелены на оптимизацию процессов и повышение эффективности работы наших клиентов.
                  </p>
                  <p>
                    Компания была основана с целью предоставить доступные и надежные технологии для разработки программного обеспечения и реализации проектов. 
                    Мы начали свое путешествие, основываясь на потребностях клиентов.
                  </p>
                  <p>
                    Мы работаем с различными клиентами, от стартапов до крупных корпоративных организаций. 
                    Наша гибкость и индивидуальный подход позволяют подстраиваться под уникальные потребности каждого клиента.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border border-purple-500/30">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-purple-400 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              НАШИ ЦЕННОСТИ
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 text-center mb-16 max-w-4xl mx-auto">
            Мы верим в важность ценностей, которые определяют нашу работу и взаимодействие с клиентами и партнерами.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group text-center transform hover:scale-105 transition-all duration-500"
              >
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-green-500/50 transition-all duration-500 h-full">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-orbitron">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              НАША КОМАНДА
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-square bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-cyan-400 opacity-70" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {member.role}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {member.description}
                </p>
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

export default About;