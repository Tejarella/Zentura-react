import React, { useState, useEffect } from 'react';
import { 
  Sun, Award, Flame, Heart, Calendar, Instagram, Twitter, Linkedin, 
  Facebook, ChevronDown, Star, Trophy, Medal, ArrowRight, Moon, 
  TimerIcon, XCircle, Check, ShieldCheck, Zap, Wind, Sunrise, Flower, Crown,
  Monitor, Sparkles, ExternalLink, Layers, Diamond
} from 'lucide-react';

// Enhanced yoga pose data with Sanskrit names and chakra associations
const yogaPoses = [
  { 
    id: 1, 
    name: "Tadasana", 
    englishName: "Mountain Pose",
    icon: <Sun size={28} />, 
    level: "Beginner", 
    description: "Foundational standing pose that improves posture, balance and mindfulness",
    points: 10,
    duration: "1 minute",
    benefits: ["Improves posture", "Strengthens thighs and ankles", "Increases body awareness"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Connects you to earth energy and stability"
  },
  { 
    id: 2, 
    name: "Virabhadrasana II", 
    englishName: "Warrior II",
    icon: <Award size={28} />, 
    level: "Intermediate", 
    description: "Powerful standing pose that builds strength and focus",
    points: 20,
    duration: "2 minutes",
    benefits: ["Strengthens legs and core", "Opens hips and chest", "Improves concentration"],
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    chakraDescription: "Enhances creativity and emotional flow"
  },
  { 
    id: 3, 
    name: "Vrikshasana", 
    englishName: "Tree Pose",
    icon: <Flame size={28} />, 
    level: "Intermediate", 
    description: "Balancing pose that enhances focus and stability",
    points: 15,
    duration: "1 minute",
    benefits: ["Improves balance", "Strengthens legs", "Calms the mind"],
    chakra: "Root",
    chakraColor: "#FF5F5F",
    chakraDescription: "Grounds your energy and builds stability"
  },
  { 
    id: 4, 
    name: "Setu Bandhasana", 
    englishName: "Bridge Pose",
    icon: <Heart size={28} />, 
    level: "Beginner", 
    description: "Gentle backbend that opens the chest and strengthens the spine",
    points: 12,
    duration: "1 minute",
    benefits: ["Opens chest and shoulders", "Strengthens back", "Calms the nervous system"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Opens your heart to love and compassion"
  },
  { 
    id: 5, 
    name: "Adho Mukha Svanasana", 
    englishName: "Downward-Facing Dog",
    icon: <Wind size={28} />, 
    level: "Beginner", 
    description: "Rejuvenating inversion that stretches and strengthens the whole body",
    points: 15,
    duration: "1 minute",
    benefits: ["Stretches hamstrings and calves", "Strengthens arms and shoulders", "Energizes the body"],
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    chakraDescription: "Builds confidence and personal power"
  },
  { 
    id: 6, 
    name: "Trikonasana", 
    englishName: "Triangle Pose",
    icon: <Zap size={28} />, 
    level: "Intermediate", 
    description: "Standing pose that improves balance and opens the hips",
    points: 18,
    duration: "1 minute per side",
    benefits: ["Stretches legs, hips and spine", "Improves digestion", "Reduces stress"],
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    chakraDescription: "Enhances creative energy and emotional balance"
  },
  { 
    id: 7, 
    name: "Chakrasana", 
    englishName: "Wheel Pose",
    icon: <Sunrise size={28} />, 
    level: "Advanced", 
    description: "Deep backbend that expands the chest and strengthens the back",
    points: 25,
    duration: "30 seconds",
    benefits: ["Strengthens spine and arms", "Opens chest and shoulders", "Increases energy"],
    chakra: "Heart",
    chakraColor: "#5CFF8F",
    chakraDescription: "Expands heart energy and opens to possibility"
  },
  { 
    id: 8, 
    name: "Padmasana", 
    englishName: "Flower Pose",
    icon: <Flower size={28} />, 
    level: "Advanced", 
    description: "Classic meditation pose that promotes deep relaxation",
    points: 20,
    duration: "3 minutes",
    benefits: ["Calms the mind", "Opens hips", "Improves focus"],
    chakra: "Crown",
    chakraColor: "#AF5CFF",
    chakraDescription: "Connects to higher consciousness and spiritual awareness"
  },
];

// Chakra information with updated images for dark theme
const chakraInfo = [
  {
    id: 1,
    name: "Muladhara",
    englishName: "Root Chakra",
    color: "#FF5F5F",
    element: "Earth",
    location: "Base of spine",
    description: "The Root Chakra is the foundation of our energy system, representing our connection to the earth, physical stability, and sense of security and survival.",
    benefits: ["Grounds energy", "Provides stability", "Creates sense of safety", "Enhances physical vitality"],
    affirmation: "I am safe, secure, and connected to the earth",
    poses: ["Mountain Pose", "Tree Pose", "Warrior I"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/root-chakra-symbol.png"
  },
  {
    id: 2,
    name: "Svadhisthana",
    englishName: "Sacral Chakra",
    color: "#FF9D5C",
    element: "Water",
    location: "Lower abdomen",
    description: "The Sacral Chakra governs our creativity, emotional fluidity, pleasure, and our ability to embrace change with ease.",
    benefits: ["Enhances creativity", "Balances emotions", "Improves adaptability", "Increases pleasure and joy"],
    affirmation: "I flow with life and embrace change with creativity",
    poses: ["Warrior II", "Triangle Pose", "Goddess Pose"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/sacral-chakra-symbol.png"
  },
  {
    id: 3,
    name: "Manipura",
    englishName: "Solar Plexus Chakra",
    color: "#FFEF5C",
    element: "Fire",
    location: "Upper abdomen",
    description: "The Solar Plexus Chakra is our center of personal power, confidence, self-esteem, and the ability to meet challenges with strength.",
    benefits: ["Builds confidence", "Enhances personal power", "Improves digestion", "Boosts willpower"],
    affirmation: "I am powerful, confident, and worthy of success",
    poses: ["Boat Pose", "Downward-Facing Dog", "Warrior III"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/solar-plexus-chakra-symbol.png"
  },
  {
    id: 4,
    name: "Anahata",
    englishName: "Heart Chakra",
    color: "#5CFF8F",
    element: "Air",
    location: "Center of chest",
    description: "The Heart Chakra is the bridge between the lower and upper chakras, representing love, compassion, empathy, and connection to others.",
    benefits: ["Opens to love", "Enhances compassion", "Improves relationships", "Promotes healing"],
    affirmation: "I give and receive love freely and unconditionally",
    poses: ["Bridge Pose", "Camel Pose", "Wheel Pose"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/heart-chakra-symbol.png"
  },
  {
    id: 5,
    name: "Vishuddha",
    englishName: "Throat Chakra",
    color: "#5CD9FF",
    element: "Ether",
    location: "Throat",
    description: "The Throat Chakra governs our ability to communicate clearly, speak our truth, and express ourselves authentically.",
    benefits: ["Improves communication", "Enhances self-expression", "Promotes authenticity", "Fosters clarity"],
    affirmation: "I speak my truth clearly and confidently",
    poses: ["Fish Pose", "Plow Pose", "Shoulder Stand"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/throat-chakra-symbol.png"
  },
  {
    id: 6,
    name: "Ajna",
    englishName: "Third Eye Chakra",
    color: "#5C75FF",
    element: "Light",
    location: "Forehead",
    description: "The Third Eye Chakra is our center of intuition, insight, and higher wisdom that helps us see beyond the physical world.",
    benefits: ["Enhances intuition", "Improves visualization", "Expands awareness", "Strengthens focus"],
    affirmation: "I trust my intuition and inner wisdom",
    poses: ["Child's Pose", "Eagle Pose", "Forward Fold"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/third-eye-chakra-symbol.png"
  },
  {
    id: 7,
    name: "Sahasrara",
    englishName: "Crown Chakra",
    color: "#AF5CFF",
    element: "Consciousness",
    location: "Top of head",
    description: "The Crown Chakra connects us to universal consciousness, spiritual insight, and our higher purpose.",
    benefits: ["Connects to divinity", "Enhances spiritual awareness", "Promotes inner peace", "Expands consciousness"],
    affirmation: "I am connected to all that is",
    poses: ["Flower Pose", "Headstand", "Corpse Pose"],
    image: "https://7wisdoms.org/wp-content/uploads/2018/06/crown-chakra-symbol.png"
  }
];

// Enhanced user progress data
const userProgress = {
  level: 7,
  totalPoints: 1240,
  streak: 14,
  badges: 8,
  completedChallenges: 21,
  nextMilestone: 1500,
  rank: "Cosmic Yogi",
  chakraBalance: [
    { name: "Root", value: 85 },
    { name: "Sacral", value: 70 },
    { name: "Solar Plexus", value: 60 },
    { name: "Heart", value: 90 },
    { name: "Throat", value: 65 },
    { name: "Third Eye", value: 75 },
    { name: "Crown", value: 80 }
  ],
  achievements: [
    { name: "Early Riser", description: "Complete 10 morning practices", completed: true },
    { name: "Flexibility Master", description: "Complete all flexibility poses", completed: false },
    { name: "Zen Master", description: "Meditate for 30 days straight", completed: false },
    { name: "Chakra Explorer", description: "Practice poses for all 7 chakras", completed: true }
  ]
};

// Enhanced testimonials
const testimonials = [
  {
    id: 1,
    name: "Alex Chen",
    quote: "Zentura transformed my yoga practice! The chakra focus and achievement system keeps me motivated every day.",
    stars: 5,
    avatar: "https://i.pinimg.com/474x/60/5b/9b/605b9b86a82dd0147ed8aa612381326f.jpg"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    quote: "I love the spiritual elements and how I can track my chakra energy. The animations make each session magical!",
    stars: 5,
    avatar: "https://thumb.photo-ac.com/2a/2a921e47ef53e782b2b4e16a1b236bd9_t.jpeg"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    quote: "The Sanskrit names and chakra visuals make yoga feel exciting and mystical. It's like practicing in another dimension!",
    stars: 4,
    avatar: "https://cdn.prod.website-files.com/6600e1eab90de089c2d9c9cd/6697274132daf24911799669_6635609f1211ec0f632803d6_fatzFxYM_ad86_raw.jpeg"
  }
];

// Animated element component
const AnimatedElement = ({ children, delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    switch(direction) {
      case "up": return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
      case "down": return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12';
      case "left": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12';
      case "right": return isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12';
      case "scale": return isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90';
      default: return isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12';
    }
  };
  
  return (
    <div className={`transition-all duration-700 transform ${getTransform()}`}>
      {children}
    </div>
  );
};

// Enhanced timer modal for dark theme
const TimerModal = ({ pose, onClose, darkMode }) => {
  const [timeLeft, setTimeLeft] = useState(parseInt(pose.duration) * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      setIsRunning(false);
      setCompleted(true);
    }
    
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
  
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };
  
  const startTimer = () => setIsRunning(true);
  const pauseTimer = () => setIsRunning(false);
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(parseInt(pose.duration) * 60);
    setCompleted(false);
  };
  
  const progressPercent = (timeLeft / (parseInt(pose.duration) * 60)) * 100;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 backdrop-blur-md">
      <div className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-3xl p-8 max-w-md w-full mx-4 border ${darkMode ? 'border-indigo-900' : 'border-gray-200'} shadow-2xl relative overflow-hidden`}>
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-br from-gray-900 to-indigo-950' : 'bg-gradient-to-br from-white to-gray-50'} opacity-50`}></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
          <div 
            className="h-full bg-gradient-to-r"
            style={{ 
              width: `${100 - progressPercent}%`,
              backgroundColor: pose.chakraColor 
            }}
          ></div>
        </div>
        
        {/* Futuristic particle effects */}
        <div className="absolute top-10 right-10 w-20 h-20 rounded-full blur-xl opacity-20 animate-pulse" style={{ backgroundColor: pose.chakraColor }}></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full blur-xl opacity-10 animate-pulse" style={{ animationDuration: '4s', backgroundColor: pose.chakraColor }}></div>
        <div className="absolute -bottom-20 right-20 w-40 h-40 rounded-full blur-xl opacity-10 animate-pulse" style={{ animationDuration: '6s', backgroundColor: '#5C75FF' }}></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h3 className={`text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-gray-800'}`}>{pose.name}</h3>
            <button onClick={onClose} className={`${darkMode ? 'text-indigo-400 hover:text-indigo-200' : 'text-gray-500 hover:text-gray-800'}`}>
              <XCircle size={24} />
            </button>
          </div>
          
          <p className={`${darkMode ? 'text-indigo-200' : 'text-gray-600'} mb-2`}>{pose.englishName}</p>
          <p className={`${darkMode ? 'text-blue-200' : 'text-gray-700'} mb-6`}>{pose.description}</p>
          
          <div className="flex justify-center mb-8">
            <div className={`w-40 h-40 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} border-4 flex items-center justify-center relative`} style={{ borderColor: pose.chakraColor }}>
              {/* Orbital animation */}
              <div className="absolute inset-0 rounded-full border-t-4 animate-spin" style={{ borderColor: pose.chakraColor, animationDuration: '10s' }}></div>
              <div className="absolute inset-0 rounded-full border-l-2 animate-spin" style={{ borderColor: '#5C75FF', animationDuration: '8s', animationDirection: 'reverse' }}></div>
              <div className={`text-4xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-800'}`}>{formatTime(timeLeft)}</div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            {!completed ? (
              <>
                <button 
                  onClick={startTimer} 
                  disabled={isRunning}
                  className={`py-2 rounded-lg font-medium ${isRunning ? (darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-500') : 'text-white hover:opacity-90'} transition-colors`}
                  style={{ backgroundColor: isRunning ? '' : pose.chakraColor }}
                >
                  Start
                </button>
                <button 
                  onClick={pauseTimer}
                  disabled={!isRunning} 
                  className={`py-2 rounded-lg font-medium ${!isRunning ? (darkMode ? 'bg-gray-800 text-gray-500' : 'bg-gray-200 text-gray-500') : 'text-white hover:opacity-90'} transition-colors`}
                  style={{ backgroundColor: !isRunning ? '' : pose.chakraColor }}
                >
                  Pause
                </button>
                <button 
                  onClick={resetTimer} 
                  className={`py-2 rounded-lg font-medium ${darkMode ? 'bg-indigo-800 text-indigo-100 hover:bg-indigo-700' : 'bg-gray-600 text-white hover:bg-gray-500'} transition-colors`}
                >
                  Reset
                </button>
              </>
            ) : (
              <button 
                onClick={resetTimer} 
                className="col-span-3 py-3 rounded-lg font-medium text-white hover:opacity-90 flex items-center justify-center"
                style={{ backgroundColor: pose.chakraColor }}
              >
                <Check size={20} className="mr-2" /> Complete (+{pose.points} points)
              </button>
            )}
          </div>
          
          {/* Enhanced benefits card with glow effects */}
          <div className={`${darkMode ? 'bg-gray-800 bg-opacity-60' : 'bg-gray-100'} p-4 rounded-xl border ${darkMode ? 'border-indigo-900' : ''}`}>
            <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} mb-2`}>Benefits:</h4>
            <ul className={`${darkMode ? 'text-blue-200' : 'text-gray-700'} space-y-1`}>
              {pose.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <ShieldCheck size={16} className="mr-2" style={{ color: pose.chakraColor }} />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-3 flex items-center">
              <div className="px-3 py-1 rounded-full text-white text-sm flex items-center" style={{ backgroundColor: pose.chakraColor }}>
                <Flower size={14} className="mr-1" /> {pose.chakra} Chakra
              </div>
            </div>
            <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'} text-sm mt-2`}>{pose.chakraDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced futuristic yoga pose card for dark theme
const PoseCard = ({ pose, onStartPractice, darkMode }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl p-6 shadow-xl transition-all duration-500 border ${isHovered ? 'transform scale-105 shadow-2xl' : ''} ${darkMode ? (isHovered ? 'border-indigo-600' : 'border-gray-800') : (isHovered ? 'border-gray-300' : 'border-gray-200')}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={darkMode && isHovered ? {boxShadow: `0 0 30px -5px ${pose.chakraColor}30`} : {}}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 rounded-xl text-white shadow-lg" style={{ backgroundColor: pose.chakraColor }}>
          {pose.icon}
        </div>
        <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: pose.chakraColor }}>
          {pose.level}
        </span>
      </div>
      
      <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{pose.name}</h3>
      <p className={`${darkMode ? 'text-blue-200' : 'text-gray-600'} text-sm mb-2`}>{pose.englishName}</p>
      <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'} mb-4`}>{pose.description}</p>
      
      <div className={`flex justify-between text-sm ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>
        <div className="flex items-center">
          <Trophy size={16} className="mr-1" style={{ color: pose.chakraColor }} />
          <span>{pose.points} pts</span>
        </div>
        <div className="flex items-center">
          <TimerIcon size={16} className="mr-1" style={{ color: pose.chakraColor }} />
          <span>{pose.duration}</span>
        </div>
      </div>
      
      <div className="mt-4 flex items-center">
        <div className="px-2 py-1 rounded-full text-xs text-white flex items-center" style={{ backgroundColor: pose.chakraColor }}>
          <Flower size={12} className="mr-1" /> {pose.chakra} Chakra
        </div>
      </div>
      
      <button 
        onClick={() => onStartPractice(pose)}
        className={`mt-5 w-full py-3 rounded-xl font-medium transition-all duration-500 flex items-center justify-center ${
          isHovered ? 'text-white shadow-lg' : `${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-700'}`
        }`}
        style={{ backgroundColor: isHovered ? pose.chakraColor : '' }}
      >
        Start Practice {isHovered && <ArrowRight size={16} className="ml-2" />}
      </button>
    </div>
  );
};

// Enhanced futuristic chakra card for dark mode
const ChakraCard = ({ chakra, isActive, onClick, darkMode }) => {
  return (
    <div 
      className={`rounded-2xl shadow-lg p-6 transition-all duration-500 cursor-pointer ${
        isActive ? 'border-2 scale-105' : 'border'
      } ${darkMode ? (isActive ? '' : 'border-gray-800 bg-gray-900') : (isActive ? '' : 'border-gray-200 bg-white')}`}
      style={{ 
        borderColor: isActive ? chakra.color : '',
        backgroundColor: isActive ? (darkMode ? `${chakra.color}20` : `${chakra.color}10`) : (darkMode ? 'rgb(17, 24, 39)' : 'white')
      }}
      onClick={() => onClick(chakra)}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full mr-4 relative" style={{ backgroundColor: chakra.color }}>
          {/* Orbital effect */}
          {isActive && (
            <div className="absolute -inset-2 rounded-full border border-dashed animate-spin" 
              style={{ borderColor: chakra.color, animationDuration: '8s' }}>
            </div>
          )}
        </div>
        <div>
          <h3 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{chakra.name}</h3>
          <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>{chakra.englishName}</p>
        </div>
      </div>
      <div className={`flex items-center text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-700'} mb-2`}>
        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chakra.color }}></div>
        <span>{chakra.location}</span>
      </div>
      <div className={`flex items-center text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: chakra.color }}></div>
        <span>Element: {chakra.element}</span>
      </div>
    </div>
  );
};

// Enhanced futuristic testimonial card for dark mode
const TestimonialCard = ({ testimonial, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity bg-indigo-500"></div>
      
      <div className="relative z-10">
        <div className="flex mb-3">
          {[...Array(testimonial.stars)].map((_, i) => (
            <Star key={i} size={16} fill="#FF9D5C" color="#FF9D5C" />
          ))}
        </div>
        
        <p className={`italic mb-6 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>"{testimonial.quote}"</p>
        
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-10 h-10 rounded-full mr-3 border-2 border-indigo-500"
          />
          <p className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{testimonial.name}</p>
        </div>
      </div>
    </div>
  );
};

// Enhanced futuristic progress stat component for dark mode
const ProgressStat = ({ icon, label, value, color = "teal", darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-5 border transform transition-transform hover:scale-105`}>
      <div className={`p-3 rounded-xl mb-3 flex justify-center`} style={{ backgroundColor: darkMode ? `${color}30` : `${color}20` }}>
        {React.cloneElement(icon, { style: { color } })}
      </div>
      <span className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} block text-center`}>{value}</span>
      <span className={`${darkMode ? 'text-blue-200' : 'text-gray-600'} text-sm block text-center`}>{label}</span>
    </div>
  );
};

// Continue the ChakraBalance component
const ChakraBalance = ({ chakraBalance, darkMode }) => {
  const chakraColors = {
    "Root": "#FF5F5F",
    "Sacral": "#FF9D5C",
    "Solar Plexus": "#FFEF5C",
    "Heart": "#5CFF8F",
    "Throat": "#5CD9FF",
    "Third Eye": "#5C75FF",
    "Crown": "#AF5CFF"
  };
  
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border relative overflow-hidden`}>
      <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Chakra Balance</h3>
      
      <div className="space-y-4">
        {chakraBalance.map((chakra) => (
          <div key={chakra.name} className="relative">
            <div className="flex justify-between mb-1">
              <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'} text-sm`}>{chakra.name}</span>
              <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} text-sm font-medium`}>{chakra.value}%</span>
            </div>
            <div className={`w-full h-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
              <div 
                className="h-full transition-all duration-1000 ease-out"
                style={{ 
                  width: `${chakra.value}%`, 
                  backgroundColor: chakraColors[chakra.name],
                  boxShadow: `0 0 10px ${chakraColors[chakra.name]}80`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-10" style={{ backgroundColor: "#5C75FF" }}></div>
      <div className="absolute top-10 -left-20 w-40 h-40 rounded-full blur-2xl opacity-10" style={{ backgroundColor: "#FF5F5F" }}></div>
    </div>
  );
};

// Enhanced achievement card component for dark mode
const AchievementCard = ({ achievement, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-4 rounded-xl shadow-md border flex items-center justify-between transition-transform hover:scale-105`}>
      <div className="flex items-center">
        {achievement.completed ? (
          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
            <Check size={16} className="text-white" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center mr-3">
            <Medal size={16} className="text-white" />
          </div>
        )}
        <div>
          <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{achievement.name}</h4>
          <p className={`text-xs ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>{achievement.description}</p>
        </div>
      </div>
      {achievement.completed ? (
        <span className="px-2 py-1 text-xs rounded-full text-white bg-green-500">Complete</span>
      ) : (
        <span className="px-2 py-1 text-xs rounded-full bg-gray-200 text-gray-700">In Progress</span>
      )}
    </div>
  );
};

// Main ZenturaApp component
const ZenturaApp = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedPose, setSelectedPose] = useState(null);
  const [showTimer, setShowTimer] = useState(false);
  const [activeChakra, setActiveChakra] = useState(chakraInfo[0]);
  const [chakraDetailExpanded, setChakraDetailExpanded] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  const startPractice = (pose) => {
    setSelectedPose(pose);
    setShowTimer(true);
  };
  
  const closeTimer = () => {
    setShowTimer(false);
  };
  
  const selectChakra = (chakra) => {
    setActiveChakra(chakra);
    setChakraDetailExpanded(true);
  };
  
  // Filtered poses based on active chakra
  const filteredPoses = yogaPoses.filter(pose => pose.chakra === activeChakra.englishName);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Animated background effect for dark mode */}
      {darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10 animate-pulse" style={{ backgroundColor: "#5CD9FF", animationDuration: '15s' }}></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 animate-pulse" style={{ backgroundColor: "#FF5F5F", animationDuration: '20s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 animate-pulse" style={{ backgroundColor: "#5CFF8F", animationDuration: '25s' }}></div>
        </div>
      )}
      
      {/* Header */}
      <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg border-b sticky top-0 z-40`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <h1 className={`text-2xl font-bold ${darkMode ? 'text-indigo-300' : 'text-gray-800'}`}>Zentura</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className={`${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full flex items-center`}>
              <Crown size={16} className="mr-1 text-yellow-500" />
              <span className="font-medium">Level {userProgress.level}</span>
            </div>
            <div className={`${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full flex items-center`}>
              <Trophy size={16} className="mr-1 text-orange-500" />
              <span className="font-medium">{userProgress.totalPoints} pts</span>
            </div>
            <button onClick={toggleDarkMode} className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-indigo-800'}`}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="mb-16">
          <AnimatedElement delay={100}>
            <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-3xl shadow-xl border p-8 md:p-12 relative overflow-hidden`}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#5CD9FF" }}></div>
                <div className="absolute top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#FF5F5F" }}></div>
              </div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center">
                <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
                  <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Elevate Your Yoga Journey Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Chakra Balance</span>
                  </h2>
                  <p className={`text-lg mb-6 ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}>
                    Track your progress, unlock achievements, and balance your energy centers with our futuristic yoga practice system.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center">
                      <Medal size={18} className="mr-2" /> View Daily Challenge
                    </button>
                    <button className={`px-6 py-3 ${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} font-medium rounded-xl shadow hover:opacity-90 transition-opacity flex items-center`}>
                      <Calendar size={18} className="mr-2" /> Schedule Practice
                    </button>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-20 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Diamond size={100} className="text-indigo-400" />
                    </div>
                    {/* Orbital decorative elements */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500 animate-spin" style={{ animationDuration: '15s' }}></div>
                    <div className="absolute inset-3 rounded-full border border-dashed border-purple-500 animate-spin" style={{ animationDuration: '10s', animationDirection: 'reverse' }}></div>
                  </div>
                </div>
              </div>
              
              {/* Progress stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                <ProgressStat icon={<Flame size={24} />} label="Day Streak" value={userProgress.streak} color="#FF5F5F" darkMode={darkMode} />
                <ProgressStat icon={<Award size={24} />} label="Badges" value={userProgress.badges} color="#FF9D5C" darkMode={darkMode} />
                <ProgressStat icon={<Trophy size={24} />} label="Challenges" value={userProgress.completedChallenges} color="#5CFF8F" darkMode={darkMode} />
                <ProgressStat icon={<Star size={24} />} label="Rank" value={userProgress.rank} color="#5C75FF" darkMode={darkMode} />
              </div>
            </div>
          </AnimatedElement>
        </section>
        
        {/* Chakra Selection Section */}
        <section className="mb-16">
          <AnimatedElement delay={300}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Explore Energy Centers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {chakraInfo.slice(0, 4).map((chakra) => (
                <ChakraCard 
                  key={chakra.id} 
                  chakra={chakra} 
                  isActive={activeChakra.id === chakra.id}
                  onClick={selectChakra}
                  darkMode={darkMode}
                />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {chakraInfo.slice(4).map((chakra) => (
                <ChakraCard 
                  key={chakra.id} 
                  chakra={chakra} 
                  isActive={activeChakra.id === chakra.id}
                  onClick={selectChakra}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </AnimatedElement>
        </section>
        
        {/* Chakra Detail View */}
        {chakraDetailExpanded && (
          <AnimatedElement delay={200} direction="scale">
            <section className="mb-16">
              <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-3xl shadow-xl border p-8 relative overflow-hidden`}>
                <button 
                  onClick={() => setChakraDetailExpanded(false)}
                  className={`absolute top-4 right-4 ${darkMode ? 'text-indigo-400 hover:text-indigo-200' : 'text-gray-500 hover:text-gray-800'}`}
                >
                  <XCircle size={24} />
                </button>
                
                <div className="mb-8 flex items-center">
                  <div className="w-16 h-16 rounded-full mr-5 relative" style={{ backgroundColor: activeChakra.color }}>
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed animate-spin" 
                      style={{ borderColor: activeChakra.color, animationDuration: '10s' }}>
                    </div>
                  </div>
                  <div>
                    <h2 className={`text-3xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{activeChakra.name}</h2>
                    <p className={`text-lg ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>{activeChakra.englishName}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <p className={`text-lg mb-6 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>{activeChakra.description}</p>
                    
                    <div className={`mb-6 p-4 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
                      <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Benefits:</h3>
                      <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}>
                        {activeChakra.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center">
                            <ShieldCheck size={16} className="mr-2" style={{ color: activeChakra.color }} />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
                      <h3 className={`font-semibold mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Affirmation:</h3>
                      <p className={`text-lg italic ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>"{activeChakra.affirmation}"</p>
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className={`aspect-square rounded-2xl overflow-hidden mb-4 border ${darkMode ? 'border-gray-800' : 'border-gray-200'} relative`}
                    >
                      <img src={activeChakra.image} alt={activeChakra.englishName} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="px-3 py-1 rounded-full text-white text-sm inline-flex items-center" style={{ backgroundColor: activeChakra.color }}>
                          <Diamond size={14} className="mr-1" /> {activeChakra.element} Element
                        </div>
                      </div>
                    </div>
                    
                    <div className={`p-4 rounded-xl ${darkMode ? 'bg-gray-800 bg-opacity-50' : 'bg-gray-50'}`}>
                      <h3 className={`font-semibold mb-3 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Recommended Poses:</h3>
                      <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}>
                        {activeChakra.poses.map((pose, index) => (
                          <li key={index} className="flex items-center">
                            <ArrowRight size={14} className="mr-2" style={{ color: activeChakra.color }} />
                            {pose}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </AnimatedElement>
        )}
        
        {/* Recommended Poses Section */}
        <section className="mb-16">
          <AnimatedElement delay={500}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                {activeChakra ? `${activeChakra.englishName} Poses` : 'Recommended Poses'}
              </h2>
              <button className={`flex items-center ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                View All <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPoses.map((pose) => (
                <PoseCard 
                  key={pose.id} 
                  pose={pose} 
                  onStartPractice={startPractice}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </AnimatedElement>
        </section>
        
        {/* Progress & Achievements Section */}
        <section className="mb-16">
          <AnimatedElement delay={700}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Your Progress
                </h3>
                
                <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border mb-6 relative overflow-hidden`}>
                  <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-10" style={{ backgroundColor: "#5C75FF" }}></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <h4 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Level Progress</h4>
                        <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>{userProgress.totalPoints} / {userProgress.nextMilestone} points</p>
                      </div>
                      <div className="text-xl font-bold" style={{ color: "#5C75FF" }}>
                        {Math.round((userProgress.totalPoints / userProgress.nextMilestone) * 100)}%
                      </div>
                    </div>
                    
                    <div className={`w-full h-3 ${darkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden mb-6`}>
                      <div 
                        className="h-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${(userProgress.totalPoints / userProgress.nextMilestone) * 100}%`, 
                          backgroundColor: "#5C75FF",
                          boxShadow: `0 0 10px #5C75FF80`
                        }}
                      ></div>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div className="flex items-center">
                        <Trophy size={16} className="mr-1 text-yellow-500" />
                        <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>Level {userProgress.level}</span>
                      </div>
                      <div className="flex items-center">
                        <Crown size={16} className="mr-1 text-indigo-500" />
                        <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>Level {userProgress.level + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <ChakraBalance chakraBalance={userProgress.chakraBalance} darkMode={darkMode} />
              </div>
              
              <div>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Achievements
                </h3>
                
                <div className="space-y-4">
                  {userProgress.achievements.map((achievement, index) => (
                    <AchievementCard 
                      key={index} 
                      achievement={achievement}
                      darkMode={darkMode}
                    />
                  ))}
                </div>
                
                <div className={`mt-6 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} p-6 rounded-2xl shadow-lg border relative overflow-hidden`}>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-2xl opacity-10" style={{ backgroundColor: "#FF9D5C" }}></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h4 className={`font-bold mb-4 flex items-center ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      <Calendar size={20} className="mr-2 text-orange-500" /> Current Streak
                    </h4>
                    
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center mr-4">
                        <span className="text-2xl font-bold text-white">{userProgress.streak}</span>
                      </div>
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{userProgress.streak} Days</p>
                        <p className={`text-sm ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>Keep the momentum going!</p>
                      </div>
                    </div>
                    
                    <button className="mt-4 w-full py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center justify-center">
                      <Flame size={18} className="mr-2" /> Continue Streak Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-16">
          <AnimatedElement delay={900}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Community Experiences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <TestimonialCard 
                  key={testimonial.id} 
                  testimonial={testimonial}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </AnimatedElement>
        </section>
        
        {/* CTA Section */}
        <section>
          <AnimatedElement delay={1100}>
            <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-3xl shadow-xl border p-8 md:p-12 relative overflow-hidden text-center`}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-900 to-transparent opacity-10"></div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20" style={{ backgroundColor: "#5C75FF" }}></div>
                <div className="absolute top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#FF5F5F" }}></div>
              </div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Begin Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600">Spiritual Journey</span> Today
                </h2>
                <p className={`text-lg mb-8 ${darkMode ? 'text-blue-200' : 'text-gray-700'}`}>
                  Join our community of mindful practitioners and transform your yoga practice with chakra-focused routines tailored to your energy needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition-opacity flex items-center">
                    <Star size={18} className="mr-2" /> Start Free Trial
                  </button>
                  <button className={`px-8 py-4 ${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} font-medium rounded-xl shadow hover:opacity-90 transition-opacity flex items-center`}>
                    <ExternalLink size={18} className="mr-2" /> Learn More
                  </button>
                </div>
                <div className="mt-8 flex justify-center space-x-6">
                  <Instagram size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
                  <Facebook size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
                  <Twitter size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
                  <Linkedin size={20} className="text-gray-400 hover:text-indigo-400 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </AnimatedElement>
        </section>
      </main>
      {/* Footer */}
      <footer className={`mt-20 ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-gray-100 border-gray-200'} border-t py-12`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles size={16} className="text-white" />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-300' : 'text-gray-800'}`}>Zentura</h3>
              </div>
              <p className={`${darkMode ? 'text-blue-200' : 'text-gray-600'} mb-4`}>
                Experience yoga practice that balances your chakras and elevates your spiritual journey.
              </p>
              <div className="flex space-x-4">
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`}>
                  <Instagram size={20} />
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`}>
                  <Facebook size={20} />
                </a>
                <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`}>
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Quick Links</h4>
              <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About</a></li>
                <li><a href="#" className="hover:underline">Chakras</a></li>
                <li><a href="#" className="hover:underline">Poses</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Resources</h4>
              <ul className={`space-y-2 ${darkMode ? 'text-blue-200' : 'text-gray-600'}`}>
                <li><a href="#" className="hover:underline">Yoga Guides</a></li>
                <li><a href="#" className="hover:underline">Meditation Techniques</a></li>
                <li><a href="#" className="hover:underline">Chakra Healing</a></li>
                <li><a href="#" className="hover:underline">Mindfulness Practices</a></li>
                <li><a href="#" className="hover:underline">Retreats</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Subscribe</h4>
              <p className={`${darkMode ? 'text-blue-200' : 'text-gray-600'} mb-4`}>
                Get weekly insights and spiritual guidance.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className={`flex-1 px-3 py-2 rounded-l-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none`}
                />
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className={`mt-12 pt-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t text-center`}>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              &copy; {new Date().getFullYear()} Zentura. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Pose Timer Modal */}
      {showTimer && selectedPose && (
        <TimerModal pose={selectedPose} onClose={closeTimer} darkMode={darkMode} />
      )}
    </div>
  );
};

export default ZenturaApp;
