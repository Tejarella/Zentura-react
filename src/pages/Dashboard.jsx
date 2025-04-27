import React, { useState, useEffect } from 'react';
import {
  Sun, Award, Flame, Heart, Calendar, ChevronDown, Star, Trophy, 
  Medal, ArrowRight, Zap, Wind, Sunrise, Flower, Crown, Sparkles,
  Activity, Clock, Maximize, TimerIcon, Book, Users, Compass, Diamond
} from 'lucide-react';

// Chakra Energy Wheel SVG Component
const ChakraWheel = ({ chakraBalance, activeChakra, setActiveChakra, darkMode }) => {
  const chakraColors = {
    "Root": "#FF5F5F",
    "Sacral": "#FF9D5C",
    "Solar Plexus": "#FFEF5C",
    "Heart": "#5CFF8F",
    "Throat": "#5CD9FF",
    "Third Eye": "#5C75FF",
    "Crown": "#AF5CFF"
  };

  // Calculate positions around a circle
  const centerX = 150;
  const centerY = 150;
  const radius = 80;
  
  // Generate chakra positions in a circle
  const chakraPositions = chakraBalance.map((chakra, index) => {
    const angle = (Math.PI * 2 * index) / chakraBalance.length - Math.PI / 2;
    return {
      ...chakra,
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
      angle
    };
  });

  return (
    <div className="relative w-full aspect-square max-w-sm mx-auto">
      {/* Animated background effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 opacity-10 blur-xl animate-pulse"></div>
      
      <svg viewBox="0 0 300 300" className="w-full h-full">
        {/* Background circle */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r={radius + 15} 
          fill={darkMode ? "rgba(17, 24, 39, 0.7)" : "rgba(255, 255, 255, 0.7)"}
          stroke={darkMode ? "#1F2937" : "#F3F4F6"}
          strokeWidth="2"
        />
        
        {/* Pulsing center */}
        <circle 
          cx={centerX} 
          cy={centerY} 
          r="15" 
          fill="#5C75FF"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        
        {/* Chakra connection lines */}
        {chakraPositions.map((chakra) => (
          <line 
            key={`line-${chakra.name}`}
            x1={centerX} 
            y1={centerY} 
            x2={chakra.x} 
            y2={chakra.y} 
            stroke={chakraColors[chakra.name]} 
            strokeWidth="1.5"
            strokeOpacity="0.6"
            strokeDasharray={activeChakra === chakra.name ? "2,2" : ""}
            className={activeChakra === chakra.name ? "animate-ping" : ""}
            style={{ animationDuration: '3s', opacity: 0.3 }}
          />
        ))}
        
        {/* Chakra nodes */}
        {chakraPositions.map((chakra) => (
          <g key={chakra.name} onClick={() => setActiveChakra(chakra.name)}>
            {/* Subtle glow effect */}
            <circle 
              cx={chakra.x} 
              cy={chakra.y} 
              r="20" 
              fill={chakraColors[chakra.name]}
              opacity="0.2"
              className={activeChakra === chakra.name ? "animate-pulse" : ""}
            />
            
            {/* Main chakra circle */}
            <circle 
              cx={chakra.x} 
              cy={chakra.y} 
              r="15" 
              fill={chakraColors[chakra.name]}
              stroke={darkMode ? "#1F2937" : "#FFFFFF"}
              strokeWidth="2"
              className="cursor-pointer hover:opacity-90 transition-opacity"
            />
            
            {/* Percentage indicator */}
            <circle 
              cx={chakra.x} 
              cy={chakra.y} 
              r="10" 
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="3"
              strokeDasharray={`${chakra.value / 100 * 63}, 63`}
              transform={`rotate(-90, ${chakra.x}, ${chakra.y})`}
            />
            
            {/* Chakra value text */}
            <text 
              x={chakra.x} 
              y={chakra.y} 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill="#FFFFFF" 
              fontSize="9"
              fontWeight="bold"
            >
              {chakra.value}%
            </text>
            
            {/* Chakra name text */}
            <text 
              x={chakra.x + 30 * Math.cos(chakra.angle)} 
              y={chakra.y + 30 * Math.sin(chakra.angle)} 
              dominantBaseline="middle" 
              textAnchor="middle" 
              fill={darkMode ? "#E5E7EB" : "#374151"} 
              fontSize="8"
              fontWeight="bold"
            >
              {chakra.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
};

// Chakra detail component
const ChakraDetail = ({ chakraName, chakraValue, chakraColor, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-800 bg-opacity-80' : 'bg-white'} p-4 rounded-xl shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} mb-4`}>
      <div className="flex items-center mb-2">
        <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: chakraColor }}></div>
        <h3 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{chakraName} Chakra</h3>
      </div>
      
      <div className="flex justify-between items-center mb-1">
        <span className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>Balance</span>
        <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{chakraValue}%</span>
      </div>
      
      <div className={`w-full h-2 ${darkMode ? 'bg-gray-900' : 'bg-gray-200'} rounded-full overflow-hidden`}>
        <div
          className="h-full transition-all duration-1000 ease-out"
          style={{
            width: `${chakraValue}%`,
            backgroundColor: chakraColor,
            boxShadow: `0 0 8px ${chakraColor}80`
          }}
        ></div>
      </div>
      
      <div className="mt-2 flex justify-between">
        <button 
          className={`px-3 py-1 rounded-lg text-xs ${darkMode ? 'bg-gray-700 text-indigo-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          View Poses
        </button>
        <button 
          className="px-3 py-1 rounded-lg text-xs text-white"
          style={{ backgroundColor: chakraColor }}
        >
          Balance Now
        </button>
      </div>
    </div>
  );
};

// Weekly Progress Chart component
const WeeklyProgressChart = ({ data, darkMode }) => {
  // Calculate max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  const chartHeight = 60;
  
  return (
    <div className="w-full h-full">
      <div className="flex items-end justify-between h-full gap-1">
        {data.map((item, index) => {
          const height = (item.value / maxValue) * chartHeight;
          return (
            <div key={index} className="flex flex-col items-center justify-end flex-1">
              <div 
                className="w-full rounded-t-sm transition-all duration-500"
                style={{ 
                  height: `${height}px`,
                  backgroundColor: item.active ? "#5C75FF" : darkMode ? "#4B5563" : "#E5E7EB",
                  opacity: item.active ? 1 : 0.7
                }}
              ></div>
              <span className={`text-xs mt-1 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                {item.day}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// DashboardPage component
const DashboardPage = ({ darkMode, navigate }) => {
  // Sample data for weekly progress
  const weeklyData = [
    { day: "Mon", value: 15, active: false },
    { day: "Tue", value: 30, active: false },
    { day: "Wed", value: 45, active: false },
    { day: "Thu", value: 25, active: false },
    { day: "Fri", value: 60, active: false },
    { day: "Sat", value: 40, active: true },
    { day: "Sun", value: 20, active: true }
  ];
  
  // Sample pose of the day
  const poseOfDay = {
    name: "Vrikshasana",
    englishName: "Tree Pose",
    icon: <Wind size={28} />,
    chakra: "Root",
    chakraColor: "#FF5F5F",
    duration: "5 minutes",
    points: 25,
    level: "Intermediate",
    description: "Balancing pose that enhances focus and stability"
  };
  
  // Sample badges
  const recentBadges = [
    { name: "7-Day Streak", icon: <Flame size={20} />, color: "#FF5F5F", date: "Today" },
    { name: "Root Master", icon: <Flower size={20} />, color: "#FF5F5F", date: "Yesterday" },
    { name: "Morning Ritual", icon: <Sunrise size={20} />, color: "#FFEF5C", date: "3 days ago" }
  ];
  
  const [activeChakra, setActiveChakra] = useState(null);
  
  // Sample chakra balance data
  const chakraBalance = [
    { name: "Root", value: 85, color: "#FF5F5F" },
    { name: "Sacral", value: 70, color: "#FF9D5C" },
    { name: "Solar Plexus", value: 60, color: "#FFEF5C" },
    { name: "Heart", value: 90, color: "#5CFF8F" },
    { name: "Throat", value: 65, color: "#5CD9FF" },
    { name: "Third Eye", value: 75, color: "#5C75FF" },
    { name: "Crown", value: 80, color: "#AF5CFF" }
  ];
  
  // Calculate total meditation minutes
  const totalMeditationMinutes = weeklyData.reduce((sum, day) => sum + day.value, 0);
  
  // Calculate progress percentage to next level
  const currentPoints = 1240;
  const nextMilestone = 1500;
  const progressPercent = (currentPoints / nextMilestone) * 100;
  
  // Get the active chakra data
  const activeChakraData = chakraBalance.find(chakra => chakra.name === activeChakra);
  
  // Random featured journeys
  const featuredJourneys = [
    { name: "Heart Opening", color: "#5CFF8F", duration: "3 days" },
    { name: "Grounding Practices", color: "#FF5F5F", duration: "5 days" }
  ];
  
  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Welcome message and progress bar */}
      <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border mb-6`}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Welcome back, Yogi
            </h2>
            <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
              Continue your practice to maintain balance
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`flex items-center ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
              <Clock size={18} className="mr-1" />
              <span>4:32 PM</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
              <Calendar size={18} className="mr-1" />
              <span>April 27</span>
            </div>
          </div>
        </div>
        
        {/* Level progress bar */}
        <div className="mb-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className={`w-8 h-8 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center mr-2`}>
              <Crown size={16} className="text-yellow-500" />
            </div>
            <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Level 7</span>
          </div>
          <div className="flex items-center">
            <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'} text-sm mr-2`}>
              {currentPoints} / {nextMilestone} XP
            </span>
            <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} font-medium`}>
              Level 8
            </span>
          </div>
        </div>
        
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full transition-all duration-1000"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        
        {/* Stats row */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-3 flex flex-col items-center`}>
            <div className="flex items-center mb-1">
              <Flame size={16} className="mr-1 text-orange-500" />
              <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Streak</span>
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}>14 days</span>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-3 flex flex-col items-center`}>
            <div className="flex items-center mb-1">
              <TimerIcon size={16} className="mr-1 text-blue-500" />
              <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>This Week</span>
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}>{totalMeditationMinutes} mins</span>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-3 flex flex-col items-center`}>
            <div className="flex items-center mb-1">
              <Medal size={16} className="mr-1 text-yellow-500" />
              <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Badges</span>
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}>8 total</span>
          </div>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-xl p-3 flex flex-col items-center`}>
            <div className="flex items-center mb-1">
              <Trophy size={16} className="mr-1 text-purple-500" />
              <span className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Rank</span>
            </div>
            <span className={`text-xl font-bold ${darkMode ? 'text-indigo-100' : 'text-gray-900'}`}>Cosmic Yogi</span>
          </div>
        </div>
      </div>
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="md:col-span-2 space-y-6">
          {/* Chakra balance section */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Chakra Energy Balance
            </h3>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3">
                <ChakraWheel 
                  chakraBalance={chakraBalance} 
                  activeChakra={activeChakra} 
                  setActiveChakra={setActiveChakra}
                  darkMode={darkMode}
                />
              </div>
              
              <div className="md:w-1/3 mt-4 md:mt-0">
                {activeChakraData ? (
                  <ChakraDetail 
                    chakraName={activeChakraData.name}
                    chakraValue={activeChakraData.value}
                    chakraColor={activeChakraData.color}
                    darkMode={darkMode}
                  />
                ) : (
                  <div className={`${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-gray-100 text-gray-700'} p-4 rounded-xl`}>
                    <p className="text-center mb-2">Select a chakra to view details</p>
                    <div className="flex justify-center space-x-2">
                      {chakraBalance.map((chakra) => (
                        <div 
                          key={chakra.name} 
                          className="w-4 h-4 rounded-full cursor-pointer"
                          style={{ backgroundColor: chakra.color }}
                          onClick={() => setActiveChakra(chakra.name)}
                        ></div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 flex justify-center">
                  <button className={`px-4 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center shadow-lg hover:opacity-90 transition-opacity`}>
                    <Compass size={16} className="mr-2" />
                    Full Chakra Diagnostic
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Activity summary section */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                Weekly Practice
              </h3>
              <button className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm flex items-center`}>
                View details <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="h-24">
              <WeeklyProgressChart data={weeklyData} darkMode={darkMode} />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-xl`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>Total minutes</span>
                  <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} font-bold`}>{totalMeditationMinutes}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>Daily average</span>
                  <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} font-bold`}>{Math.round(totalMeditationMinutes / 7)}</span>
                </div>
              </div>
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-xl`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>Best day</span>
                  <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} font-bold`}>Friday</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>Streak</span>
                  <span className={`${darkMode ? 'text-indigo-200' : 'text-gray-800'} font-bold`}>14 days</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent badges section */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border`}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                Recent Badges
              </h3>
              <button className={`${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-700'} text-sm flex items-center`}>
                View all <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {recentBadges.map((badge, index) => (
                <div key={index} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-xl flex flex-col items-center`}>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2" style={{ backgroundColor: badge.color }}>
                    {badge.icon}
                  </div>
                  <span className={`font-medium text-center ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{badge.name}</span>
                  <span className={`text-xs ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>{badge.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right column */}
        <div className="space-y-6">
          {/* Pose of the day */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10 bg-indigo-500"></div>
            
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Daily Practice
            </h3>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-xl mb-4 relative`}>
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-lg mr-3 text-white" style={{ backgroundColor: poseOfDay.chakraColor }}>
                  {poseOfDay.icon}
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    {poseOfDay.name}
                  </h4>
                  <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                    {poseOfDay.englishName}
                  </p>
                </div>
              </div>
              
              <p className={`text-sm mb-3 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
                {poseOfDay.description}
              </p>
              
              <div className="flex justify-between text-sm mb-3">
                <div className="flex items-center">
                  <TimerIcon size={14} className="mr-1" style={{ color: poseOfDay.chakraColor }} />
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>{poseOfDay.duration}</span>
                </div>
                <div className="flex items-center">
                  <Trophy size={14} className="mr-1" style={{ color: poseOfDay.chakraColor }} />
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>{poseOfDay.points} pts</span>
                </div>
              </div>
              
              <div className="flex space-x-2 mb-2">
                <div className="px-2 py-1 rounded-full text-xs text-white" style={{ backgroundColor: poseOfDay.chakraColor }}>
                  <span>{poseOfDay.level}</span>
                </div>
                <div className="px-2 py-1 rounded-full text-xs text-white flex items-center" style={{ backgroundColor: poseOfDay.chakraColor }}>
                  <Flower size={10} className="mr-1" /> {poseOfDay.chakra}
                </div>
              </div>
              
              <button className="w-full py-2 rounded-lg font-medium text-white flex items-center justify-center" style={{ backgroundColor: poseOfDay.chakraColor }}>
                Start Practice <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            
            <button className={`w-full py-3 rounded-xl font-medium mb-4 flex items-center justify-center ${darkMode ? 'bg-gray-800 text-indigo-200 hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
              <Sunrise size={18} className="mr-2 text-orange-500" />
              5-Minute Morning Meditation
            </button>
            
            <div className="flex justify-between">
              <button className={`px-4 py-2 rounded-lg flex items-center text-sm ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <Book size={14} className="mr-1" />
                Saved
              </button>
              <button className={`px-4 py-2 rounded-lg flex items-center text-sm ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                <Users size={14} className="mr-1" />
                Share
              </button>
            </div>
          </div>
          
          {/* Featured journeys */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
  Featured Journeys
</h3>
            
<div className="space-y-3">
  {featuredJourneys.map((journey, index) => (
    <div 
      key={index} 
      className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-3 rounded-xl flex justify-between items-center cursor-pointer hover:opacity-90 transition-opacity`}
    >
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: journey.color }}>
          <Diamond size={18} className="text-white" />
        </div>
        <div>
          <h4 className={`font-medium ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
            {journey.name}
          </h4>
          <p className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
            {journey.duration} journey
          </p>
        </div>
      </div>
      <ArrowRight size={16} className={darkMode ? 'text-indigo-400' : 'text-indigo-600'} />
    </div>
  ))}
</div>

{/* View all journeys button */}
<button className="w-full mt-4 py-2 rounded-lg font-medium flex items-center justify-center text-white bg-gradient-to-r from-indigo-500 to-purple-600">
  Explore All Journeys
</button>
          </div>
          
          {/* Upcoming events or challenges */}
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-lg p-6 border`}>
            <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
              Upcoming Challenge
            </h3>
            
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 rounded-xl relative overflow-hidden`}>
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full blur-xl opacity-20 bg-purple-500"></div>
              
              <div className="flex items-center mb-3">
                <div className="p-2 rounded-lg mr-3 bg-purple-600 text-white">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className={`font-semibold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    21-Day Transformation
                  </h4>
                  <p className={`text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                    Starts in 2 days
                  </p>
                </div>
              </div>
              
              <div className="flex justify-between text-sm mb-4">
                <div className="flex items-center">
                  <Users size={14} className="mr-1 text-purple-500" />
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>234 participants</span>
                </div>
                <div className="flex items-center">
                  <Award size={14} className="mr-1 text-purple-500" />
                  <span className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>500 pts reward</span>
                </div>
              </div>
              
              <button className="w-full py-2 rounded-lg font-medium text-white bg-purple-600 flex items-center justify-center">
                Join Challenge <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>



   
  );
};

export default DashboardPage;