import React, { useEffect, useState } from 'react';
import {
  Sparkles, Heart, Compass, Book, Flower, Sun, Moon, Users, Star, 
  Globe, Leaf, Droplet, Wind, Award, ArrowRight, Crosshair, Zap
} from 'lucide-react';

const AboutPage = ({ darkMode = true, navigate }) => {
  const [circles, setCircles] = useState([]);
  
  // Chakra colors
  const chakraColors = [
    "#FF5F5F", // Root
    "#FF9D5C", // Sacral
    "#FFEF5C", // Solar Plexus
    "#5CFF8F", // Heart
    "#5CD9FF", // Throat
    "#5C75FF", // Third Eye
    "#AF5CFF"  // Crown
  ];
  
  // Team members data
  const teamMembers = [
    { name: "Maya Patel", role: "Founder & Lead Instructor", avatar: "https://lavenderoom.com/wp-content/uploads/2024/04/IMG_6014-1024x683.jpeg" },
    { name: "David Chen", role: "Meditation Expert", avatar: "https://ugc.production.linktr.ee/UOKm6u2AQfaJnIGQV9hb_photo_0101%20copy.jpg" },
    { name: "Sophia Kim", role: "Chakra Specialist", avatar: "https://yog4lyf.com/wp-content/uploads/2022/09/image-15-1024x1024-1.jpg" }
  ];

  // Philosophy cards data
  const philosophyCards = [
    { 
      icon: <Heart size={24} />, 
      color: "#5CFF8F", 
      title: "Holistic Balance", 
      description: "We believe in treating the whole person—mind, body, and spirit—to achieve true harmony and wellness."
    },
    { 
      icon: <Compass size={24} />, 
      color: "#5C75FF", 
      title: "Self-Discovery", 
      description: "Our practices guide you on a journey inward, helping you discover your authentic self and inner wisdom."
    },
    { 
      icon: <Globe size={24} />, 
      color: "#FF9D5C", 
      title: "Universal Connection", 
      description: "By aligning with natural energies, we foster a deeper connection to ourselves and the world around us."
    }
  ];

  // Timeline milestones
  const milestones = [
    { year: "2018", title: "Zentura Founded", description: "Started as a small yoga studio in Seattle" },
    { year: "2020", title: "Digital Transformation", description: "Launched our first mobile application" },
    { year: "2022", title: "Global Community", description: "Reached practitioners in over 50 countries" },
    { year: "2024", title: "Advanced Platform", description: "Released our AI-powered personalized chakra analysis" }
  ];

  useEffect(() => {
    // Generate random circles for the background
    const generateCircles = () => {
      const newCircles = [];
      const count = window.innerWidth < 768 ? 4 : 7;
      
      for (let i = 0; i < count; i++) {
        newCircles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: 20 + Math.random() * 30,
          color: chakraColors[Math.floor(Math.random() * chakraColors.length)],
          animationDuration: 15 + Math.random() * 20,
          delay: Math.random() * 5
        });
      }
      
      setCircles(newCircles);
    };
    
    generateCircles();
    
    // Recreate circles when window is resized
    const handleResize = () => {
      generateCircles();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 relative ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Enhanced Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Gradient overlay */}
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'} opacity-80`}></div>
        
        {/* Animated circles */}
        {circles.map(circle => (
          <div
            key={circle.id}
            className="absolute rounded-full blur-3xl opacity-5 animate-pulse"
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}vw`,
              height: `${circle.size}vw`,
              backgroundColor: circle.color,
              animationDuration: `${circle.animationDuration}s`,
              animationDelay: `${circle.delay}s`
            }}
          ></div>
        ))}
        
        {/* Subtle grid pattern */}
        <div 
          className={`absolute inset-0 opacity-5 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}
          style={{
            backgroundImage: `radial-gradient(circle, ${darkMode ? '#ffffff' : '#000000'} 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        ></div>
        
        {/* Central chakra energy flow */}
        <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 overflow-hidden">
          <div className={`h-full w-full ${darkMode ? 'bg-gradient-to-b from-indigo-500/0 via-indigo-500/10 to-purple-600/0' : 'bg-gradient-to-b from-indigo-500/0 via-indigo-500/5 to-purple-600/0'}`}></div>
        </div>
        
        {/* Optional: animated particles effect for more advanced background */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="relative w-full h-full max-w-6xl">
            {Array.from({ length: 15 }).map((_, index) => (
              <div
                key={index}
                className={`absolute rounded-full ${darkMode ? 'bg-white' : 'bg-indigo-600'} opacity-20`}
                style={{
                  width: '3px',
                  height: '3px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  animation: `float 20s linear infinite`,
                  animationDelay: `-${Math.random() * 20}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Add a subtle vignette effect */}
        <div className={`absolute inset-0 opacity-40`} style={{
          background: darkMode 
            ? 'radial-gradient(circle, transparent 30%, #09090b 100%)' 
            : 'radial-gradient(circle, transparent 30%, #f9fafb 100%)'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section with enhanced glass morphism */}
        <div className={`relative overflow-hidden ${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-12 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12`}>
          {/* Background chakra symbols */}
          <div className="absolute -top-12 -right-12 opacity-5 text-indigo-500">
            <svg width="200" height="200" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
              <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="2"/>
              <path d="M26 26 L74 74 M26 74 L74 26" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center mb-12">
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 mb-6 p-5">
              <Sparkles size={40} className="text-white" />
            </div>
            <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
              About Zentura
            </h1>
            <p className={`text-xl max-w-3xl ${darkMode ? 'text-indigo-200' : 'text-gray-600'}`}>
              Empowering your journey to balanced energy and mindful living through ancient wisdom and modern technology.
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 my-8 rounded-full"></div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <div className={`flex items-center ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} backdrop-blur-sm px-6 py-3 rounded-xl shadow-md`}>
                <Users size={20} className="mr-3 text-indigo-500" />
                <span className={`text-lg ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>50,000+ Users</span>
              </div>
              <div className={`flex items-center ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} backdrop-blur-sm px-6 py-3 rounded-xl shadow-md`}>
                <Globe size={20} className="mr-3 text-indigo-500" />
                <span className={`text-lg ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Global Community</span>
              </div>
              <div className={`flex items-center ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} backdrop-blur-sm px-6 py-3 rounded-xl shadow-md`}>
                <Star size={20} className="mr-3 text-indigo-500" />
                <span className={`text-lg ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>4.9 Star Rating</span>
              </div>
            </div>
          </div>
          
          <div className="overflow-hidden relative rounded-2xl h-64 w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-70"></div>
            <img src="https://media.istockphoto.com/id/2158315779/video/meditative-bliss-yoga-day-animation-character-animation-concept.jpg?s=640x640&k=20&c=zl3nwe5nOOGiIzwM7-uQbJMYOuGPbCuz-2Nv_waLhrM=" alt="Zentura meditation" className="w-full h-full object-cover object-center opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white tracking-wide">Find Your Balance</h2>
            </div>
          </div>
        </div>
        
        {/* Our Mission with dynamic gradients */}
        <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-10 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12 relative overflow-hidden`}>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full blur-3xl opacity-10 bg-indigo-500"></div>
          
          <div className="flex items-center mb-8">
            <div className="p-4 rounded-2xl mr-6 bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg">
              <Crosshair size={32} className="text-white" />
            </div>
            <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Mission</h2>
          </div>
          
          <p className={`text-xl mb-8 leading-relaxed ${darkMode ? 'text-indigo-100' : 'text-gray-600'}`}>
            At Zentura, we are dedicated to making ancient chakra wisdom accessible through modern technology. 
            Our mission is to guide individuals on their personal journey toward energy balance, mindfulness, 
            and holistic well-being.
          </p>
          
          <div className="flex items-center py-6 px-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20">
            <Zap size={24} className="mr-4 text-indigo-500" />
            <p className={`text-lg italic ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>
              "We believe that when your chakras are balanced, you can unlock your full potential, 
              deepen your connections, and live with greater purpose and joy."
            </p>
          </div>
        </div>
        
        {/* Our Philosophy with improved cards */}
        <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-10 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12`}>
          <h2 className={`text-3xl font-bold mb-10 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophyCards.map((card, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:translate-y-1 flex flex-col items-center text-center backdrop-blur-sm`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 group-hover:from-transparent group-hover:to-black/10 transition-all duration-300"></div>
                
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg transform transition-transform group-hover:scale-110 duration-300"
                  style={{ backgroundColor: card.color }}
                >
                  {card.icon}
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-indigo-100' : 'text-gray-800'}`}>
                  {card.title}
                </h3>
                <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'} leading-relaxed`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Approach with improved panels */}
        <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-10 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12`}>
          <h2 className={`text-3xl font-bold mb-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className={`${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl mr-4 bg-blue-500 text-white shadow-lg">
                  <Book size={24} />
                </div>
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Ancient Wisdom
                </h3>
              </div>
              <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'} leading-relaxed`}>
                We draw from traditional yogic and meditative practices that have been 
                refined over thousands of years. Our content is respectful of these 
                lineages while making them relevant to modern practitioners.
              </p>
            </div>
            
            <div className={`${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl mr-4 bg-purple-500 text-white shadow-lg">
                  <Sparkles size={24} />
                </div>
                <h3 className={`text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  Modern Technology
                </h3>
              </div>
              <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'} leading-relaxed`}>
                Our technology adapts to your unique energy profile, creating a 
                personalized practice that evolves as you progress. Data-driven insights 
                help you track your growth and maintain consistency.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <Leaf size={18} />, text: "Sustainable Practice", color: "green" },
              { icon: <Droplet size={18} />, text: "Adaptive Learning", color: "blue" },
              { icon: <Wind size={18} />, text: "Breath-Centered", color: "indigo" },
              { icon: <Flower size={18} />, text: "Energetically Balanced", color: "purple" }
            ].map((item, index) => (
              <div key={index} className={`${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} p-4 rounded-xl flex items-center backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:translate-y-1`}>
                <div className={`p-2 rounded-lg mr-3 text-${item.color}-500`}>
                  {item.icon}
                </div>
                <span className={`${darkMode ? 'text-indigo-100' : 'text-gray-800'}`}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Our Journey with improved timeline */}
        <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-10 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12 relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-500/5"></div>
          
          <h2 className={`text-3xl font-bold mb-12 text-center relative z-10 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-indigo-500"></div>
            
            {/* Timeline events */}
            <div className="space-y-24">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot with pulse effect */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-4 border-white dark:border-gray-900 z-10 relative"></div>
                    <div className="absolute top-0 left-0 w-6 h-6 rounded-full bg-indigo-500 animate-ping opacity-75"></div>
                  </div>
                  
                  {/* Content with improved layout */}
                  <div className={`grid grid-cols-5 gap-4`}>
                    <div className={`col-span-2 ${index % 2 === 0 ? 'text-right pr-8' : 'col-start-4 text-left pl-8'}`}>
                      <div className={`inline-block ${darkMode ? 'bg-gray-800/80' : 'bg-gray-100/80'} backdrop-blur-sm px-4 py-2 rounded-lg text-lg font-bold ${darkMode ? 'text-indigo-300' : 'text-indigo-600'} shadow-md mb-3`}>
                        {milestone.year}
                      </div>
                      <h3 className={`text-xl font-semibold ${darkMode ? 'text-indigo-100' : 'text-gray-800'} mb-2`}>
                        {milestone.title}
                      </h3>
                      <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'}`}>
                        {milestone.description}
                      </p>
                    </div>
                    <div className="col-span-1"></div>
                    <div className={`col-span-2 ${index % 2 !== 0 ? 'text-right pr-8' : 'col-start-4 text-left pl-8'}`}>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Meet Our Team with improved design */}
        <div className={`${darkMode ? 'bg-gray-900/60' : 'bg-white/70'} backdrop-blur-lg rounded-3xl shadow-xl p-10 border ${darkMode ? 'border-gray-800/50' : 'border-gray-200/50'} mb-12`}>
          <h2 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Meet Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-gray-800/70' : 'bg-gray-100/70'} backdrop-blur-sm p-8 rounded-2xl flex flex-col items-center text-center group transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-br from-indigo-500/5 to-purple-600/5"></div>
                
                <div className="w-28 h-28 rounded-full overflow-hidden mb-6 border-4 border-indigo-500 group-hover:border-purple-500 transition-colors shadow-lg relative z-10">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                  {member.name}
                </h3>
                <p className={`mb-6 text-lg ${darkMode ? 'text-indigo-300' : 'text-indigo-600'}`}>
                  {member.role}
                </p>
                <div className="flex space-x-3">
                  {[Users, Globe, Book].map((Icon, i) => (
                    <button key={i} className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors shadow-md hover:shadow-lg`}>
                      <Icon size={18} className={darkMode ? 'text-indigo-300' : 'text-gray-700'} />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Join Us CTA with improved design */}
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600"></div>
          
          {/* Chakra circles decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-white"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 bg-white"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-2xl opacity-10 bg-white"></div>
          
          {/* Chakra symbols */}
          <div className="absolute top-8 right-8 opacity-20">
            <svg width="80" height="80" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="2"/>
              <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="2"/>
              <path d="M50 5 L50 95 M5 50 L95 50" stroke="white" strokeWidth="2"/>
            </svg>
          </div>
          
          <div className="relative z-10 p-12 text-white">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm mb-6">
                <Award size={32} className="text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Begin Your Journey Today</h2>
              <p className="text-xl mb-8 text-indigo-100">
                Join thousands of practitioners worldwide who are discovering balance, 
                peace, and energy alignment through our guided practices.
              </p>
              
              <button className="px-8 py-4 bg-white text-indigo-600 rounded-xl font-medium flex items-center hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 text-lg">
                Start Your Free Trial <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default AboutPage;