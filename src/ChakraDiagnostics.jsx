import React, { useState, useEffect } from 'react';
import { ArrowLeft, Plus, CheckCircle, XCircle, AlertCircle, Flower, RefreshCw, Send, Play, ChevronDown, ChevronUp, Download, Hexagon, ChevronRight } from 'lucide-react';

const ChakraDiagnosticsPage = ({ darkMode, navigate }) => {
  // All chakras data from the provided code
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

  // Diagnostic questions for each chakra
  const diagnosticQuestions = {
    "Root": [
      { question: "Do you feel secure and grounded in your daily life?", positive: true },
      { question: "Do you often experience anxiety about basic needs or survival?", positive: false },
      { question: "Do you feel connected to your physical body?", positive: true },
      { question: "Do you struggle with feelings of instability?", positive: false },
      { question: "Are you able to stand up for yourself when needed?", positive: true }
    ],
    "Sacral": [
      { question: "Do you feel emotionally balanced?", positive: true },
      { question: "Do you embrace change easily?", positive: true },
      { question: "Do you experience joy and pleasure in your daily life?", positive: true },
      { question: "Do you feel disconnected from your desires?", positive: false },
      { question: "Do you struggle with creative blocks?", positive: false }
    ],
    "Solar Plexus": [
      { question: "Do you feel confident in your abilities?", positive: true },
      { question: "Do you feel in control of your life?", positive: true },
      { question: "Do you struggle with self-doubt?", positive: false },
      { question: "Are you able to set and maintain healthy boundaries?", positive: true },
      { question: "Do you frequently experience digestive issues?", positive: false }
    ],
    "Heart": [
      { question: "Are you able to give and receive love openly?", positive: true },
      { question: "Do you hold grudges?", positive: false },
      { question: "Do you practice compassion toward yourself and others?", positive: true },
      { question: "Do you feel emotional walls protecting your heart?", positive: false },
      { question: "Do you experience harmonious relationships?", positive: true }
    ],
    "Throat": [
      { question: "Do you express yourself authentically?", positive: true },
      { question: "Do you feel heard and understood by others?", positive: true },
      { question: "Do you often hold back your true thoughts and feelings?", positive: false },
      { question: "Do you listen as much as you speak?", positive: true },
      { question: "Do you frequently experience throat discomfort?", positive: false }
    ],
    "Third Eye": [
      { question: "Do you trust your intuition?", positive: true },
      { question: "Do you have clear mental visualization?", positive: true },
      { question: "Do you often experience mental fog or confusion?", positive: false },
      { question: "Are you open to seeing beyond the physical world?", positive: true },
      { question: "Do you experience frequent headaches?", positive: false }
    ],
    "Crown": [
      { question: "Do you feel connected to something larger than yourself?", positive: true },
      { question: "Do you have a sense of purpose?", positive: true },
      { question: "Do you feel spiritually disconnected?", positive: false },
      { question: "Do you experience moments of peace and unity?", positive: true },
      { question: "Do you struggle with existential questions?", positive: false }
    ]
  };

  // State management
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentChakraIndex, setCurrentChakraIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [chakraResults, setChakraResults] = useState([]);
  const [expandedChakra, setExpandedChakra] = useState(null);
  const [completedPercentage, setCompletedPercentage] = useState(0);
  const [animateQuestionOut, setAnimateQuestionOut] = useState(false);
  const [animateQuestionIn, setAnimateQuestionIn] = useState(true);

  // Animation state
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (currentStep === 'questions') {
      // Calculate completion percentage
      const totalQuestions = Object.keys(diagnosticQuestions).length * 5;
      const answeredQuestions = Object.keys(answers).length;
      const percentage = Math.floor((answeredQuestions / totalQuestions) * 100);
      setCompletedPercentage(percentage);
    }
  }, [answers, currentStep]);

  // Handle answer selection
  const handleAnswer = (value) => {
    const chakraName = Object.keys(diagnosticQuestions)[currentChakraIndex];
    const question = diagnosticQuestions[chakraName][currentQuestionIndex];
    
    // Store the answer
    setAnswers({
      ...answers,
      [`${chakraName}-${currentQuestionIndex}`]: value === question.positive
    });

    // Animate question out
    setAnimateQuestionOut(true);
    
    setTimeout(() => {
      // Move to next question or chakra
      if (currentQuestionIndex < diagnosticQuestions[chakraName].length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // If we've reached the end of questions for this chakra
        if (currentChakraIndex < Object.keys(diagnosticQuestions).length - 1) {
          setCurrentChakraIndex(currentChakraIndex + 1);
          setCurrentQuestionIndex(0);
        } else {
          // All questions answered, calculate results
          calculateResults();
          setCurrentStep('results');
          setAnimateQuestionOut(false);
          return;
        }
      }
      
      setAnimateQuestionOut(false);
      setAnimateQuestionIn(true);
      
      setTimeout(() => {
        setAnimateQuestionIn(false);
      }, 500);
    }, 300);
  };

  // Calculate chakra balance results
  const calculateResults = () => {
    const results = [];

    Object.keys(diagnosticQuestions).forEach((chakraName, chakraIndex) => {
      let correctAnswers = 0;
      let totalQuestions = diagnosticQuestions[chakraName].length;
      
      for (let i = 0; i < totalQuestions; i++) {
        const answerKey = `${chakraName}-${i}`;
        if (answers[answerKey]) {
          correctAnswers++;
        }
      }

      const percentage = Math.floor((correctAnswers / totalQuestions) * 100);
      let status = "Balanced";
      
      if (percentage < 40) {
        status = "Underactive";
      } else if (percentage > 80) {
        status = "Overactive";
      }

      // Find matching chakra info
      const chakraData = chakraInfo.find(c => c.englishName.includes(chakraName));
      
      results.push({
        name: chakraName,
        sanskritName: chakraData.name,
        value: percentage,
        status,
        color: chakraData.color,
        element: chakraData.element,
        location: chakraData.location,
        description: chakraData.description,
        affirmation: chakraData.affirmation,
        poses: chakraData.poses,
        advice: getChakraAdvice(status, chakraName)
      });
    });

    setChakraResults(results);
  };

  // Generate chakra-specific advice based on status
  const getChakraAdvice = (status, chakraName) => {
    if (status === "Underactive") {
      switch(chakraName) {
        case "Root": 
          return "Focus on grounding exercises, walk barefoot in nature, and practice stability-enhancing poses.";
        case "Sacral": 
          return "Express yourself creatively, dance freely, and engage in activities that bring joy and pleasure.";
        case "Solar Plexus": 
          return "Set achievable goals, practice daily affirmations, and engage in confidence-building activities.";
        case "Heart": 
          return "Practice self-love, forgiveness exercises, and heart-opening yoga poses.";
        case "Throat": 
          return "Journal your thoughts, practice speaking your truth in safe spaces, and try singing or chanting.";
        case "Third Eye": 
          return "Meditate regularly, practice visualization, and reduce screen time to enhance intuition.";
        case "Crown": 
          return "Deepen your spiritual practice, try meditation focused on universal connection, and spend time in quiet reflection.";
        default:
          return "Practice mindfulness and yoga to bring this chakra into balance.";
      }
    } else if (status === "Overactive") {
      switch(chakraName) {
        case "Root": 
          return "Practice letting go, release control, and focus on flexibility in both body and mind.";
        case "Sacral": 
          return "Create healthy emotional boundaries, practice moderation, and establish routines for emotional stability.";
        case "Solar Plexus": 
          return "Practice surrender, delegate responsibilities, and balance assertion with receptivity.";
        case "Heart": 
          return "Establish healthy boundaries, balance giving with receiving, and practice discernment in relationships.";
        case "Throat": 
          return "Practice mindful listening, journal instead of always speaking, and cultivate the power of silence.";
        case "Third Eye": 
          return "Ground yourself in practical realities, balance vision with action, and practice being present.";
        case "Crown": 
          return "Connect with your physical body through exercise, spend time in nature, and practice grounding meditation.";
        default:
          return "Practice grounding techniques to bring this chakra into balance.";
      }
    } else {
      return "Continue your current practices to maintain this balanced state. Regular check-ins and minor adjustments will help sustain harmony.";
    }
  };

  // Restart the diagnostic process
  const restartDiagnostic = () => {
    setCurrentStep('intro');
    setCurrentChakraIndex(0);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setChakraResults([]);
    setExpandedChakra(null);
  };

  // Toggle expanded chakra details
  const toggleExpandChakra = (index) => {
    if (expandedChakra === index) {
      setExpandedChakra(null);
    } else {
      setExpandedChakra(index);
    }
  };

  // Animation class helper
  const getTransitionClass = () => {
    return isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-12';
  };

  // Get status color
  const getStatusColor = (status) => {
    switch(status) {
      case "Underactive": return "text-yellow-500";
      case "Overactive": return "text-orange-500";
      case "Balanced": return "text-green-500";
      default: return "text-gray-500";
    }
  };

  // Get chakra icon based on index
  const ChakraIcon = ({ index, size = 24, className = "" }) => {
    const rotation = index * 51.4; // Approximation for 7 chakras to make a visually distinct rotation
    
    return (
      <div className={`relative ${className}`}>
        <Hexagon 
          size={size} 
          style={{ transform: `rotate(${rotation}deg)` }}
          className="text-white opacity-80"
        />
        <div 
          className="absolute inset-0 flex items-center justify-center text-xs font-medium"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {index + 1}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-all duration-500`}>
      {/* Header */}
      <div className={`fixed top-0 w-full z-20 ${darkMode ? 'bg-gray-900/80 backdrop-blur-lg border-gray-800' : 'bg-white/80 backdrop-blur-lg border-gray-200'} border-b shadow-sm`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <button 
              onClick={() => navigate('/dashboard')}
              className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-gray-700 hover:text-gray-900'} mr-3 transition-colors p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800`}
              aria-label="Go back"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className={`text-xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Chakra Diagnostics</h1>
          </div>
          
          {currentStep === 'questions' && (
            <div className="flex items-center">
              <div className="w-32 md:w-48 h-2 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-300"
                  style={{ 
                    width: `${completedPercentage}%`,
                    backgroundColor: chakraInfo[currentChakraIndex].color 
                  }}
                ></div>
              </div>
              <span className={`ml-2 text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                {completedPercentage}%
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 pt-24 pb-24 transition-all duration-500">
        {/* Introduction screen */}
        {currentStep === 'intro' && (
          <div className={`transition-all duration-700 transform ${getTransitionClass()}`}>
            <div className={`max-w-2xl mx-auto mt-8 ${darkMode ? 'bg-gray-800/50 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'} rounded-3xl border shadow-xl p-8 relative overflow-hidden`}>
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse"
                style={{ background: 'linear-gradient(120deg, #5C75FF, #AF5CFF, #5CFF8F)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Hexagon size={40} className="text-white" />
                  </div>
                </div>
                
                <h2 className={`text-3xl font-bold text-center mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Chakra Balance Assessment
                </h2>
                
                <p className={`text-center text-lg mb-8 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                  Discover which of your energy centers need attention and balancing for optimal well-being.
                </p>
                
                <div className={`${darkMode ? 'bg-gray-900/70 backdrop-blur-sm' : 'bg-gray-50/80 backdrop-blur-sm'} rounded-xl p-6 mb-8 border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`font-semibold mb-4 text-lg ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    How it works:
                  </h3>
                  <ul className={`space-y-4 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 shadow-lg">
                        <span className="text-white font-medium">1</span>
                      </div>
                      <span>Answer thoughtful questions about your mental, emotional, and physical experiences</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 shadow-lg">
                        <span className="text-white font-medium">2</span>
                      </div>
                      <span>Receive a personalized analysis of your seven main chakras and their current state</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center mt-0.5 mr-4 flex-shrink-0 shadow-lg">
                        <span className="text-white font-medium">3</span>
                      </div>
                      <span>Get tailored recommendations for poses, affirmations, and practices to restore balance</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex justify-center">
                  <button
                    onClick={() => setCurrentStep('questions')}
                    className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center"
                  >
                    Begin Assessment <Play size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto mt-10">
              <div className="flex justify-center mb-4">
                <h3 className={`font-medium ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
                  The Seven Energy Centers
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 mt-2">
                {chakraInfo.map((chakra) => (
                  <div 
                    key={chakra.id}
                    className={`flex flex-col items-center p-4 rounded-xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800/80' : 'bg-white/60 backdrop-blur-sm hover:bg-white/90'} transition-all duration-300 transform hover:-translate-y-1 border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-lg`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full mb-3 flex items-center justify-center shadow-lg"
                      style={{ 
                        backgroundColor: chakra.color,
                        boxShadow: `0 0 15px ${chakra.color}80` 
                      }}
                    >
                      <ChakraIcon index={chakra.id - 1} size={20} />
                    </div>
                    <span className={`text-xs font-medium mb-1 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      {chakra.englishName.replace(' Chakra', '')}
                    </span>
                    <span className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                      {chakra.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Questions screen */}
        {currentStep === 'questions' && (
          <div className={`max-w-3xl mx-auto mt-8 ${darkMode ? 'bg-gray-800/70 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'} rounded-3xl border shadow-xl p-8 relative overflow-hidden transition-all duration-500`}>
            <div 
              className="absolute top-0 left-0 h-1.5 transition-all duration-300"
              style={{ 
                width: `${((currentQuestionIndex + 1) / diagnosticQuestions[Object.keys(diagnosticQuestions)[currentChakraIndex]].length) * 100}%`,
                backgroundColor: chakraInfo[currentChakraIndex].color 
              }}
            ></div>
            
            <div 
              className="absolute top-0 right-0 w-60 h-60 rounded-full blur-3xl opacity-10 transition-all duration-700"
              style={{ backgroundColor: chakraInfo[currentChakraIndex].color }}
            ></div>
                
            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center">
                  <div 
                    className="w-12 h-12 rounded-full mr-4 flex items-center justify-center shadow-lg transition-all duration-300"
                    style={{ 
                      backgroundColor: chakraInfo[currentChakraIndex].color,
                      boxShadow: `0 0 15px ${chakraInfo[currentChakraIndex].color}80` 
                    }}
                  >
                    <ChakraIcon index={currentChakraIndex} />
                  </div>
                  <div>
                    <h3 className={`font-bold text-lg ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      {chakraInfo[currentChakraIndex].name}
                    </h3>
                    <div className="flex items-center">
                      <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                        {chakraInfo[currentChakraIndex].englishName}
                      </p>
                      <p className={`text-sm ml-2 px-2 py-0.5 rounded-full ${darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-gray-100 text-gray-600'}`}>
                        {chakraInfo[currentChakraIndex].element}
                      </p>
                    </div>
                  </div>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-gray-100 text-gray-600'}`}>
                  Question {currentQuestionIndex + 1}/{diagnosticQuestions[Object.keys(diagnosticQuestions)[currentChakraIndex]].length}
                </span>
              </div>
              
              <div 
                className={`mb-10 transition-all duration-300 transform ${animateQuestionOut ? 'opacity-0 -translate-x-10' : ''} ${animateQuestionIn ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'}`}
              >
                <h2 className={`text-2xl font-medium mb-10 text-center ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  {diagnosticQuestions[Object.keys(diagnosticQuestions)[currentChakraIndex]][currentQuestionIndex].question}
                </h2>
                
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => handleAnswer(true)}
                    className={`py-5 px-6 rounded-xl font-medium transition-all flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-indigo-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    Yes, frequently
                  </button>
                  <button
                    onClick={() => handleAnswer('sometimes')}
                    className={`py-5 px-6 rounded-xl font-medium transition-all flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-indigo-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    Sometimes
                  </button>
                  <button
                    onClick={() => handleAnswer(false)}
                    className={`py-5 px-6 rounded-xl font-medium transition-all flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-indigo-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    No, rarely
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Results screen */}
        {currentStep === 'results' && (
          <div className={`transition-all duration-700 transform ${getTransitionClass()}`}>
            <div className={`max-w-3xl mx-auto mt-8 ${darkMode ? 'bg-gray-800/70 backdrop-blur-sm border-gray-700' : 'bg-white/80 backdrop-blur-sm border-gray-200'} rounded-3xl border shadow-xl p-8 relative overflow-hidden`}>
              <div 
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse"
                style={{ background: 'linear-gradient(120deg, #5C75FF, #AF5CFF, #5CFF8F)' }}
              ></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
                    <CheckCircle size={32} className="text-white" />
                  </div>
                </div>
                
                <h2 className={`text-2xl font-bold text-center mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Your Chakra Balance Results
                </h2>
                
                <p className={`text-center mb-10 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                  Based on your answers, here's an assessment of your chakra energy system.
                </p>
                
                <div className="grid grid-cols-7 gap-1 mb-8">
                  {chakraResults.map((result, index) => (
                    <div 
                      key={index}
                      className="flex flex-col items-center"
                    >
                      <div 
                        className="h-2 w-full"
                        style={{ backgroundColor: result.color }}
                      ></div>
                      <div 
                        className="w-full flex flex-col items-center justify-center p-2"
                        style={{ 
                          backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.5)' : 'rgba(255, 255, 255, 0.5)',
                          height: '80px'
                        }}
                      >
                        <div 
                          className="w-6 h-6 rounded-full mb-1"
                          style={{ backgroundColor: result.color }}
                        ></div>
                        <span className={`text-xs text-center font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                          {result.name}
                        </span>
                      </div>
                      <div 
                        className="h-24 w-1 transition-all duration-700"
                        style={{ 
                          backgroundColor: result.color,
                          height: `${result.value}px`,
                          maxHeight: '100px' 
                        }}
                      ></div>
                      <div className={`text-xs font-medium mt-1 ${getStatusColor(result.status)}`}>
                        {result.value}%
                      </div>
                      <div className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                        {result.status}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-10">
                  <h3 className={`font-medium mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Chakra Analysis & Recommendations
                  </h3>
                  
                  <div className={`space-y-4 ${darkMode ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
                    {chakraResults.map((result, index) => (
                      <div 
                        key={index}
                        className={`${index === 0 ? '' : 'pt-4'}`}
                      >
                        <div 
                          className={`flex items-center justify-between cursor-pointer`}
                          onClick={() => toggleExpandChakra(index)}
                        >
                          <div className="flex items-center">
                            <div 
                              className={`w-10 h-10 rounded-full mr-4 flex items-center justify-center shadow-lg`}
                              style={{ 
                                backgroundColor: result.color,
                                boxShadow: `0 0 15px ${result.color}80` 
                              }}
                            >
                              <ChakraIcon index={index} size={20} />
                            </div>
                            <div>
                              <h4 className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                                {result.sanskritName} ({result.name})
                              </h4>
                              <div className="flex items-center">
                                <span className={`text-sm ${getStatusColor(result.status)}`}>
                                  {result.status}
                                </span>
                                <span className={`text-sm ml-2 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                                  • {result.value}%
                                </span>
                              </div>
                            </div>
                          </div>
                          {expandedChakra === index ? (
                            <ChevronUp size={20} className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`} />
                          ) : (
                            <ChevronDown size={20} className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`} />
                          )}
                        </div>
                        
                        {expandedChakra === index && (
                          <div className="mt-4 ml-14">
                            <div className={`p-4 rounded-xl mb-4 ${darkMode ? 'bg-gray-900/70 backdrop-blur-sm border-gray-700' : 'bg-gray-50/80 backdrop-blur-sm border-gray-200'} border`}>
                              <p className={`text-sm mb-3 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                                {result.description}
                              </p>
                              
                              <div className="grid grid-cols-2 gap-4 mb-3">
                                <div>
                                  <span className={`text-xs font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Location:</span>
                                  <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>{result.location}</p>
                                </div>
                                <div>
                                  <span className={`text-xs font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Element:</span>
                                  <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>{result.element}</p>
                                </div>
                              </div>
                              
                              <h5 className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Recommended Poses:</h5>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {result.poses.map((pose, i) => (
                                  <span 
                                    key={i}
                                    className={`text-xs px-3 py-1.5 rounded-full ${darkMode ? 'bg-gray-800 text-indigo-300 border-gray-700' : 'bg-white text-gray-700 border-gray-200'} border`}
                                  >
                                    {pose}
                                  </span>
                                ))}
                              </div>
                              
                              <h5 className={`text-sm font-medium mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-700'}`}>Affirmation:</h5>
                              <p className={`text-sm italic ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-3`}>"{result.affirmation}"</p>
                              
                              <div className={`mt-4 p-3 rounded-lg ${result.status === 'Balanced' ? 'bg-green-500/10 border-green-500/20' : result.status === 'Underactive' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-orange-500/10 border-orange-500/20'} border`}>
                                <h5 className={`text-sm font-medium mb-1 ${result.status === 'Balanced' ? 'text-green-500' : result.status === 'Underactive' ? 'text-yellow-500' : 'text-orange-500'}`}>
                                  {result.status === 'Balanced' ? 'Balance Maintenance' : `${result.status} Recommendations`}:
                                </h5>
                                <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                                  {result.advice}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={restartDiagnostic}
                    className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-indigo-200' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                  >
                    <RefreshCw size={16} className="mr-2" /> Restart Assessment
                  </button>
                  <button
                    onClick={() => {/* Download functionality would go here */}}
                    className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <Download size={16} className="mr-2" /> Save Results
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={`fixed bottom-0 w-full z-20 ${darkMode ? 'bg-gray-900/80 backdrop-blur-lg border-gray-800' : 'bg-white/80 backdrop-blur-lg border-gray-200'} border-t shadow-sm`}>
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <span className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
              © 2025 Chakra Balance
            </span>
          </div>
          
          <div className="flex items-center">
            <button 
              className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-gray-700 hover:text-gray-900'} p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors mr-2`}
              aria-label="Help"
            >
              <AlertCircle size={18} />
            </button>
            <button 
              className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-gray-700 hover:text-gray-900'} p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors`}
              aria-label="Settings"
            >
              <Flower size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChakraDiagnosticsPage;