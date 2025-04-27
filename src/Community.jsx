import React, { useState, useEffect } from 'react';
import {
  Users, MessageSquare, Award, Calendar, Star, Heart,
  Send, Search, ChevronDown, User, Globe, Hash,
  Trophy, Camera, Share2, Bookmark, Activity, XCircle, Flower
} from 'lucide-react';

// Animated element component reused from main code
const AnimatedElement = ({ children, delay = 0, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
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

// Sample community data
const communityMembers = [
  {
    id: 1,
    name: "Maya Johnson",
    username: "@maya_yogaflow",
    avatar: "https://images.squarespace-cdn.com/content/v1/5c5efdd601232cd65fe2086b/1617981399890-ZG98O5STN3C4SLB644E5/private%2Byoga%2Btherapy%2Bsmall.jpg?format=1000w",
    level: 12,
    streak: 45,
    badges: 18,
    chakraAffinity: "Heart",
    chakraColor: "#5CFF8F",
    location: "San Francisco, CA",
    bio: "Yoga instructor and mindfulness coach passionate about chakra healing"
  },
  {
    id: 2,
    name: "Rahul Patel",
    username: "@rahul_zen",
    avatar: "https://media.istockphoto.com/id/1483989790/photo/adult-indian-male-yoga-instructor-smiling-at-the-camera-and-holding-a-yoga-mat-under-his-arm.jpg?s=612x612&w=0&k=20&c=vZZ1--vZ_LF612IrI7jXBBxdG5fExnOO3rYu-uHAtiM=",
    level: 9,
    streak: 30,
    badges: 12,
    chakraAffinity: "Throat",
    chakraColor: "#5CD9FF",
    location: "New York, NY",
    bio: "Finding balance through daily practice and breath work"
  },
  {
    id: 3,
    name: "Sophie Chen",
    username: "@sophie_yogi",
    avatar: "https://beyogi.com/wp-content/uploads/2021/03/image-4.png",
    level: 15,
    streak: 60,
    badges: 24,
    chakraAffinity: "Crown",
    chakraColor: "#AF5CFF",
    location: "Austin, TX", 
    bio: "Meditation guide exploring spiritual dimensions through yoga"
  },
  {
    id: 4,
    name: "James Wilson",
    username: "@james_flow",
    avatar: "https://www.shutterstock.com/image-photo/young-male-doing-yoga-260nw-263673470.jpg",
    level: 7,
    streak: 14,
    badges: 9,
    chakraAffinity: "Root",
    chakraColor: "#FF5F5F",
    location: "Portland, OR",
    bio: "Former athlete using yoga for recovery and strength building"
  }
];

const communityChallenges = [
  {
    id: 1,
    title: "7-Day Root Chakra Challenge",
    chakra: "Root",
    chakraColor: "#FF5F5F",
    participants: 1247,
    startDate: "May 1, 2025",
    endDate: "May 7, 2025",
    description: "Ground your energy with daily poses focused on the Root Chakra",
    image: "https://play-lh.googleusercontent.com/ho9GlFF75f4fEVLPrqsjvBRggtdM6EHDq2ZqMIDe88sAgZZ5ZKRZCoGKBdZpVlox4jU=w240-h480-rw"
  },
  {
    id: 2,
    title: "Heart Opening Journey",
    chakra: "Heart",
    chakraColor: "#5CFF8F", 
    participants: 859,
    startDate: "May 10, 2025",
    endDate: "May 24, 2025",
    description: "Two weeks of heart-centered poses to cultivate compassion and love",
    image: "https://i.ytimg.com/vi/6VWgl9WhSVU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANAJpSvv13FskjgYdn2fh9YQfYGg"
  },
  {
    id: 3,
    title: "Full Chakra Balance",
    chakra: "All",
    chakraColor: "#5C75FF",
    participants: 2134,
    startDate: "May 15, 2025",
    endDate: "June 15, 2025",
    description: "Monthly challenge to balance all chakras with daily focused practices",
    image: "https://i.ytimg.com/vi/vCpBSnYBTM0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDoHBevseG5szuxkuua52tbZGUOZA"
  }
];

const discussionThreads = [
  {
    id: 1,
    title: "Best poses for throat chakra activation?",
    author: "Rebecca T.",
    chakra: "Throat",
    chakraColor: "#5CD9FF",
    replies: 28,
    likes: 42,
    timestamp: "2 hours ago",
    tags: ["throat-chakra", "techniques", "beginners"]
  },
  {
    id: 2,
    title: "Sacral chakra and emotional healing - your experiences?",
    author: "Miguel L.",
    chakra: "Sacral",
    chakraColor: "#FF9D5C",
    replies: 45,
    likes: 76,
    timestamp: "5 hours ago",
    tags: ["sacral-chakra", "healing", "emotions"]
  },
  {
    id: 3,
    title: "Meditation techniques for crown chakra opening",
    author: "Aisha K.",
    chakra: "Crown",
    chakraColor: "#AF5CFF",
    replies: 19,
    likes: 37,
    timestamp: "1 day ago", 
    tags: ["crown-chakra", "meditation", "spiritual"]
  },
  {
    id: 4,
    title: "Solar plexus exercises for confidence building",
    author: "Thomas W.",
    chakra: "Solar Plexus",
    chakraColor: "#FFEF5C",
    replies: 31,
    likes: 53,
    timestamp: "2 days ago",
    tags: ["solar-plexus", "confidence", "power"]
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Live Guided Third Eye Meditation",
    host: "Sophie Chen",
    date: "April 30, 2025",
    time: "7:00 PM EST",
    participants: 124,
    chakra: "Third Eye",
    chakraColor: "#5C75FF"
  },
  {
    id: 2,
    title: "Chakra Sound Healing Workshop",
    host: "Ravi Sharma",
    date: "May 3, 2025",
    time: "2:00 PM EST",
    participants: 89,
    chakra: "All",
    chakraColor: "#5CD9FF"
  },
  {
    id: 3,
    title: "Root to Crown Flow Class",
    host: "Maya Johnson",
    date: "May 5, 2025",
    time: "10:00 AM EST",
    participants: 76,
    chakra: "All",
    chakraColor: "#AF5CFF"
  }
];

// Member card component
const MemberCard = ({ member, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-6 shadow-xl border transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${darkMode ? 'hover:border-indigo-700' : 'hover:border-indigo-300'}`}>
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-10" style={{ backgroundColor: member.chakraColor }}></div>
      
      <div className="flex items-start relative z-10">
        <div className="relative mr-4">
          <img src={member.avatar} alt={member.name} className="w-16 h-16 rounded-xl object-cover" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-medium" style={{ backgroundColor: member.chakraColor }}>
            {member.level}
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{member.name}</h3>
          <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-2`}>{member.username}</p>
          
          <div className="flex space-x-3 text-sm mb-3">
            <div className="flex items-center" style={{ color: member.chakraColor }}>
              <Flower size={14} className="mr-1" />
              <span>{member.chakraAffinity}</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
              <Trophy size={14} className="mr-1" />
              <span>{member.badges}</span>
            </div>
            <div className={`flex items-center ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
              <Activity size={14} className="mr-1" />
              <span>{member.streak} days</span>
            </div>
          </div>
          
          <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-700'} line-clamp-2`}>{member.bio}</p>
        </div>
      </div>
      
      <div className="mt-4 flex justify-between items-center">
        <span className={`text-xs ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}>
          <Globe size={12} className="inline mr-1" />
          {member.location}
        </span>
        
        <button className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${darkMode ? 'bg-indigo-900 text-indigo-200 hover:bg-indigo-800' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
          <User size={12} className="mr-1" />
          Connect
        </button>
      </div>
    </div>
  );
};

// Challenge card component
const ChallengeCard = ({ challenge, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl overflow-hidden shadow-xl border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'hover:border-indigo-700' : 'hover:border-indigo-300'}`}>
      <div className="h-40 relative">
        <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-3 left-4 right-4">
          <div className="flex justify-between items-center">
            <span className="px-3 py-1 rounded-full text-xs text-white font-medium flex items-center" style={{ backgroundColor: challenge.chakraColor }}>
              <Flower size={12} className="mr-1" />
              {challenge.chakra} Chakra
            </span>
            <span className={`text-white text-xs`}>
              <Users size={12} className="inline mr-1" />
              {challenge.participants} yogis
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className={`font-bold text-lg mb-2 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{challenge.title}</h3>
        <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-700'} mb-3`}>{challenge.description}</p>
        
        <div className={`flex justify-between text-xs ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4`}>
          <span>
            <Calendar size={12} className="inline mr-1" />
            {challenge.startDate} - {challenge.endDate}
          </span>
        </div>
        
        <div className="flex space-x-2">
          <button className={`flex-1 py-2 rounded-xl font-medium text-sm text-white transition-colors`} style={{ backgroundColor: challenge.chakraColor }}>
            Join Challenge
          </button>
          <button className={`w-10 h-10 flex items-center justify-center rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Discussion thread card component
const DiscussionCard = ({ thread, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-5 shadow-xl border transition-all duration-300 hover:shadow-2xl ${darkMode ? 'hover:border-indigo-700' : 'hover:border-indigo-300'}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'} flex-1`}>{thread.title}</h3>
        <span className="px-2 py-1 rounded-full text-xs text-white" style={{ backgroundColor: thread.chakraColor }}>
          {thread.chakra}
        </span>
      </div>
      
      <div className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4 flex justify-between`}>
        <span>By {thread.author}</span>
        <span>{thread.timestamp}</span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {thread.tags.map((tag, index) => (
          <span key={index} className={`text-xs px-2 py-1 rounded-full flex items-center ${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-gray-100 text-gray-700'}`}>
            <Hash size={10} className="mr-1" />
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <div className={`flex items-center text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
            <MessageSquare size={14} className="mr-1" />
            <span>{thread.replies}</span>
          </div>
          <div className={`flex items-center text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
            <Heart size={14} className="mr-1" />
            <span>{thread.likes}</span>
          </div>
        </div>
        
        <button className={`px-3 py-1 rounded-full text-xs font-medium flex items-center ${darkMode ? 'bg-indigo-900 text-indigo-200 hover:bg-indigo-800' : 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'}`}>
          View Thread
        </button>
      </div>
    </div>
  );
};

// Event card component
const EventCard = ({ event, darkMode }) => {
  return (
    <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl p-5 shadow-xl border transition-all duration-300 hover:shadow-2xl relative overflow-hidden ${darkMode ? 'hover:border-indigo-700' : 'hover:border-indigo-300'}`}>
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10" style={{ backgroundColor: event.chakraColor }}></div>
      
      <div className="flex justify-between items-start mb-3 relative z-10">
        <h3 className={`font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>{event.title}</h3>
        <span className="px-2 py-1 rounded-full text-xs text-white flex items-center" style={{ backgroundColor: event.chakraColor }}>
          <Flower size={12} className="mr-1" />
          {event.chakra}
        </span>
      </div>
      
      <p className={`text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4`}>Hosted by {event.host}</p>
      
      <div className={`flex justify-between text-sm ${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4`}>
        <span className="flex items-center">
          <Calendar size={14} className="mr-1" />
          {event.date}
        </span>
        <span>{event.time}</span>
      </div>
      
      <div className="flex justify-between items-center">
        <span className={`text-xs ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}>
          <Users size={12} className="inline mr-1" />
          {event.participants} attending
        </span>
        
        <div className="flex space-x-2">
          <button className={`px-3 py-1 rounded-full text-xs font-medium text-white`} style={{ backgroundColor: event.chakraColor }}>
            RSVP
          </button>
          <button className={`px-2 py-1 rounded-full ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
            <Bookmark size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Community = ({ darkMode = true }) => {
  const [activeTab, setActiveTab] = useState('featured');
  const [showPopup, setShowPopup] = useState(false);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Background elements */}
      {darkMode && (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/5 w-96 h-96 rounded-full blur-3xl opacity-5 animate-pulse" style={{ backgroundColor: "#5CD9FF", animationDuration: '18s' }}></div>
          <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full blur-3xl opacity-5 animate-pulse" style={{ backgroundColor: "#FF5F5F", animationDuration: '15s' }}></div>
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        {/* Community Header */}
        <AnimatedElement delay={100}>
          <section className="mb-12">
            <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-3xl shadow-xl border p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#5CD9FF" }}></div>
                <div className="absolute top-20 -left-20 w-60 h-60 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#5CFF8F" }}></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-8">
                  <div>
                    <h1 className={`text-3xl md:text-4xl font-bold mb-3 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      Zentura Community
                    </h1>
                    <p className={`text-lg mb-6 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>
                      Connect, share and grow with fellow yogis on their chakra balancing journey
                    </p>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button
                      className={`px-5 py-2 rounded-xl flex items-center ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'} shadow-lg transition-colors`}
                      onClick={() => setShowPopup(true)}
                    >
                      <MessageSquare size={18} className="mr-2" />
                      New Post
                    </button>
                    <button className={`px-3 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>
                      <Camera size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Search bar */}
                <div className={`flex items-center p-3 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <Search size={20} className={`mr-3 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`} />
                  <input
                    type="text"
                    placeholder="Search the community..."
                    className={`flex-1 bg-transparent outline-none ${darkMode ? 'text-indigo-200 placeholder-indigo-400' : 'text-gray-800 placeholder-gray-500'}`}
                  />
                  <button className={`px-4 py-1 rounded-lg ${darkMode ? 'bg-gray-700 text-indigo-300' : 'bg-gray-200 text-gray-700'}`}>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedElement>
        
        {/* Navigation Tabs */}
        <AnimatedElement delay={200}>
          <section className="mb-8">
            <div className={`flex overflow-x-auto hide-scrollbar ${darkMode ? 'border-b border-gray-800' : 'border-b border-gray-200'}`}>
              <button
                className={`pb-3 px-5 font-medium transition-colors ${activeTab === 'featured' ? (darkMode ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600') : (darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500')}`}
                onClick={() => setActiveTab('featured')}
              >
                Featured
              </button>
              <button
                className={`pb-3 px-5 font-medium transition-colors ${activeTab === 'members' ? (darkMode ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600') : (darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500')}`}
                onClick={() => setActiveTab('members')}
              >
                Members
              </button>
              <button
                className={`pb-3 px-5 font-medium transition-colors ${activeTab === 'challenges' ? (darkMode ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600') : (darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500')}`}
                onClick={() => setActiveTab('challenges')}
              >
                Challenges
              </button>
              <button
                className={`pb-3 px-5 font-medium transition-colors ${activeTab === 'discussions' ? (darkMode ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600') : (darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500')}`}
                onClick={() => setActiveTab('discussions')}
              >
                Discussions
              </button>
              <button
                className={`pb-3 px-5 font-medium transition-colors ${activeTab === 'events' ? (darkMode ? 'text-indigo-400 border-b-2 border-indigo-400' : 'text-indigo-600 border-b-2 border-indigo-600') : (darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500')}`}
                onClick={() => setActiveTab('events')}
              >
                Events
              </button>
            </div>
          </section>
        </AnimatedElement>
        
        {/* Featured Content (Default tab) */}
        {activeTab === 'featured' && (
          <>
            {/* Featured Members */}
            <AnimatedElement delay={300}>
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Featured Members
                  </h2>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                    View All <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {communityMembers.map(member => (
                    <MemberCard key={member.id} member={member} darkMode={darkMode} />
                  ))}
                </div>
              </section>
            </AnimatedElement>
            
            {/* Active Challenges */}
            <AnimatedElement delay={400}>
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Active Challenges
                  </h2>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                    View All <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {communityChallenges.map(challenge => (
                    <ChallengeCard key={challenge.id} challenge={challenge} darkMode={darkMode} />
                  ))}
                </div>
              </section>
            </AnimatedElement>
            
            {/* Trending Discussions */}
            <AnimatedElement delay={500}>
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Trending Discussions
                  </h2>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                    View All <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {discussionThreads.slice(0, 2).map(thread => (
                    <DiscussionCard key={thread.id} thread={thread} darkMode={darkMode} />
                  ))}
                </div>
              </section>
            </AnimatedElement>
            
            {/* Upcoming Events */}
            <AnimatedElement delay={600}>
              <section className="mb-12">
                <div className="flex justify-between items-center mb-6">
                  <h2 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                    Upcoming Events
                  </h2>
                  <button className={`text-sm flex items-center ${darkMode ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-500'}`}>
                    View All <ChevronDown size={16} className="ml-1" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {upcomingEvents.map(event => (
                    <EventCard key={event.id} event={event} darkMode={darkMode} />
                  ))}
                </div>
              </section>
            </AnimatedElement>
          </>
        )}
        
        {/* Members Tab Content */}
        {activeTab === 'members' && (
          <section>
            <AnimatedElement delay={300}>
              <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
                <h2 className={`text-2xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Community Members
                </h2>
                
                <div className="flex space-x-4">
                  <div className={`flex items-center p-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <Search size={16} className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`} />
                    <input
                      type="text"
                      placeholder="Find members..."
                      className={`flex-1 bg-transparent outline-none ${darkMode ? 'text-indigo-200 placeholder-indigo-400' : 'text-gray-800 placeholder-gray-500'}`}
                    />
                  </div>
                  
                  <div className={`flex items-center p-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <span className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}>Sort by:</span>
                    <select className={`bg-transparent outline-none ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      <option>Active</option>
                      <option>New</option>
                      <option>Level</option>
                      <option>Chakra</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...communityMembers, ...communityMembers].slice(0, 6).map((member, idx) => (
                  <MemberCard key={`extended-${member.id}-${idx}`} member={member} darkMode={darkMode} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button className={`px-6 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-700 hover:bg-gray-200'}`}>
                  Load More Members
                </button>
              </div>
            </AnimatedElement>
          </section>
        )}
        
        {/* Challenges Tab Content */}
        {activeTab === 'challenges' && (
          <section>
            <AnimatedElement delay={300}>
              <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
                <h2 className={`text-2xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Chakra Challenges
                </h2>
                
                <div className="flex flex-wrap gap-2">
                  <button className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                    All Challenges
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FF5F5F" }}>
                    Root
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FF9D5C" }}>
                    Sacral
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FFEF5C" }}>
                    Solar Plexus
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5CFF8F" }}>
                    Heart
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5CD9FF" }}>
                    Throat
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5C75FF" }}>
                    Third Eye
                  </button>
                  <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#AF5CFF" }}>
                    Crown
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...communityChallenges, ...communityChallenges].slice(0, 6).map((challenge, idx) => (
                  <ChallengeCard key={`extended-${challenge.id}-${idx}`} challenge={challenge} darkMode={darkMode} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button className={`px-6 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-700 hover:bg-gray-200'}`}>
                  Load More Challenges
                </button>
              </div>
            </AnimatedElement>
          </section>
        )}
        
        {/* Discussions Tab Content */}
        {activeTab === 'discussions' && (
          <section>
            <AnimatedElement delay={300}>
              <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
                <h2 className={`text-2xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Community Discussions
                </h2>
                
                <div className="flex space-x-4">
                  <button className={`px-4 py-2 rounded-xl flex items-center ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'} shadow-lg transition-colors`}>
                    <MessageSquare size={16} className="mr-2" />
                    New Topic
                  </button>
                  
                  <div className={`flex items-center p-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <span className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}>Filter:</span>
                    <select className={`bg-transparent outline-none ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      <option>All Topics</option>
                      <option>Recent</option>
                      <option>Popular</option>
                      <option>Unanswered</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {discussionThreads.map(thread => (
                  <DiscussionCard key={thread.id} thread={thread} darkMode={darkMode} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button className={`px-6 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-700 hover:bg-gray-200'}`}>
                  Load More Discussions
                </button>
              </div>
            </AnimatedElement>
          </section>
        )}
        
        {/* Events Tab Content */}
        {activeTab === 'events' && (
          <section>
            <AnimatedElement delay={300}>
              <div className="mb-6 flex flex-col md:flex-row justify-between md:items-center">
                <h2 className={`text-2xl font-bold mb-4 md:mb-0 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                  Upcoming Events
                </h2>
                
                <div className="flex space-x-4">
                  <button className={`px-4 py-2 rounded-xl flex items-center ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'} shadow-lg transition-colors`}>
                    <Calendar size={16} className="mr-2" />
                    Host Event
                  </button>
                  
                  <div className={`flex items-center p-2 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <span className={`mr-2 ${darkMode ? 'text-indigo-400' : 'text-gray-500'}`}>View:</span>
                    <select className={`bg-transparent outline-none ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                      <option>All Events</option>
                      <option>This Week</option>
                      <option>This Month</option>
                      <option>Your RSVPs</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...upcomingEvents, ...upcomingEvents].slice(0, 6).map((event, idx) => (
                  <EventCard key={`extended-${event.id}-${idx}`} event={event} darkMode={darkMode} />
                ))}
              </div>
              
              <div className="mt-10 flex justify-center">
                <button className={`px-6 py-2 rounded-xl ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-indigo-700 hover:bg-gray-200'}`}>
                  Load More Events
                </button>
              </div>
            </AnimatedElement>
          </section>
        )}
      </main>
      
      {/* New Post Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <AnimatedElement direction="scale">
            <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} rounded-2xl shadow-2xl border p-6 max-w-2xl w-full relative`}>
              <button className={`absolute right-4 top-4 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`} onClick={() => setShowPopup(false)}>
                <XCircle size={24} />
              </button>
              
              <h3 className={`text-xl font-bold mb-6 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>
                Create New Post
              </h3>
              
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Enter post title..."
                  className={`w-full p-3 rounded-xl mb-4 ${darkMode ? 'bg-gray-800 border-gray-700 text-indigo-200 placeholder-indigo-400' : 'bg-gray-100 border-gray-200 text-gray-800 placeholder-gray-500'} border outline-none`}
                />
                
                <textarea
                  placeholder="Share your thoughts, questions or insights with the community..."
                  className={`w-full p-3 rounded-xl h-40 ${darkMode ? 'bg-gray-800 border-gray-700 text-indigo-200 placeholder-indigo-400' : 'bg-gray-100 border-gray-200 text-gray-800 placeholder-gray-500'} border outline-none`}
                ></textarea>
              </div>
              
              <div className="mb-6 flex flex-wrap gap-2">
                <h4 className={`w-full mb-2 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>Select related chakra:</h4>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FF5F5F" }}>
                  Root
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FF9D5C" }}>
                  Sacral
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#FFEF5C" }}>
                  Solar Plexus
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5CFF8F" }}>
                  Heart
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5CD9FF" }}>
                  Throat
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#5C75FF" }}>
                  Third Eye
                </button>
                <button className="px-3 py-1 rounded-full text-xs text-white" style={{ backgroundColor: "#AF5CFF" }}>
                  Crown
                </button>
                <button className={`px-3 py-1 rounded-full text-xs ${darkMode ? 'bg-gray-800 text-indigo-300' : 'bg-gray-200 text-gray-800'}`}>
                  All Chakras
                </button>
              </div>
              
              <div className="mb-6">
                <h4 className={`mb-2 ${darkMode ? 'text-indigo-300' : 'text-gray-700'}`}>Add media:</h4>
                <div className="flex space-x-3">
                  <button className={`px-4 py-2 rounded-xl flex items-center ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <Camera size={16} className="mr-2" />
                    Photo
                  </button>
                  <button className={`px-4 py-2 rounded-xl flex items-center ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    <Bookmark size={16} className="mr-2" />
                    Link
                  </button>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button
                  className={`px-5 py-2 rounded-xl mr-3 ${darkMode ? 'bg-gray-800 text-indigo-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                  onClick={() => setShowPopup(false)}
                >
                  Cancel
                </button>
                <button className={`px-5 py-2 rounded-xl ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-500 text-white hover:bg-indigo-600'} shadow-lg transition-colors`}>
                  Post <Send size={16} className="ml-2 inline" />
                </button>
              </div>
            </div>
          </AnimatedElement>
        </div>
      )}
    </div>
  );
};

export default Community;