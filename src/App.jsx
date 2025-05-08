import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Sun, Moon, Crown, Trophy, Instagram, Twitter, Facebook, Sparkles } from 'lucide-react';
import Home from './pages/Home';
import DashboardPage from './pages/Dashboard';
import AboutPage from './pages/About';
import PosesPage from './pages/Poses';
import ChakraDiagnosticsPage from './pages/ChakraDiagnostics';
import CommunityPage from './pages/Community';

const ZenturaApp = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'}`}>
        {/* Header with Navbar */}
        <header className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} shadow-lg border-b sticky top-0 z-40`}>
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <NavLink to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>ZenYogi</h1>
              </NavLink>

              <nav className="hidden md:flex space-x-6">
                <NavLink
                  to="/"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  Dashboard
                </NavLink>
                <NavLink
                  to="/poses"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  Poses
                </NavLink>
                <NavLink
                  to="/diagnostics"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  Chakra Diagnostics
                </NavLink>
                <NavLink
                  to="/community"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  Community
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => 
                    `font-medium transition-colors pb-1 ${
                      isActive 
                        ? `${darkMode ? 'text-indigo-300' : 'text-indigo-600'} border-b-2 border-indigo-500` 
                        : `${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'}`
                    }`
                  }
                >
                  About
                </NavLink>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <div className={`${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full flex items-center`}>
                <Crown size={16} className="mr-1 text-yellow-500" />
                <span className="font-medium">Level 7</span>
              </div>
              <div className={`${darkMode ? 'bg-gray-800 text-indigo-200' : 'bg-gray-100 text-gray-800'} px-3 py-1 rounded-full flex items-center`}>
                <Trophy size={16} className="mr-1 text-orange-500" />
                <span className="font-medium">1240 pts</span>
              </div>
              <button
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-indigo-800'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/dashboard" element={<DashboardPage darkMode={darkMode} />} />
            <Route path="/about" element={<AboutPage darkMode={darkMode} />} />
            <Route path="/poses" element={<PosesPage darkMode={darkMode} />} />
            <Route path="/diagnostics" element={<ChakraDiagnosticsPage darkMode={darkMode} />} />
            <Route path="/community" element={<CommunityPage darkMode={darkMode} />} />
          </Routes>
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
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>ZenYogi</h3>
                </div>
                <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4`}>
                  Experience yoga practice that balances your chakras and elevates your spiritual journey.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`} aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`} aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className={`${darkMode ? 'text-gray-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'}`} aria-label="Twitter">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
    
              <div>
                <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Quick Links</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                  <li><a href="#" className="hover:underline">Home</a></li>
                  <li><a href="#" className="hover:underline">About</a></li>
                  <li><a href="#" className="hover:underline">Chakras</a></li>
                  <li><a href="#" className="hover:underline">Poses</a></li>
                  <li><a href="#" className="hover:underline">Contact</a></li>
                </ul>
              </div>
    
              <div>
                <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Resources</h4>
                <ul className={`space-y-2 ${darkMode ? 'text-indigo-300' : 'text-gray-600'}`}>
                  <li><a href="#" className="hover:underline">Yoga Guides</a></li>
                  <li><a href="#" className="hover:underline">Meditation Techniques</a></li>
                  <li><a href="#" className="hover:underline">Chakra Healing</a></li>
                  <li><a href="#" className="hover:underline">Mindfulness Practices</a></li>
                  <li><a href="#" className="hover:underline">Retreats</a></li>
                </ul>
              </div>
    
              <div>
                <h4 className={`font-bold mb-4 ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Subscribe</h4>
                <p className={`${darkMode ? 'text-indigo-300' : 'text-gray-600'} mb-4`}>
                  Get weekly insights and spiritual guidance.
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    aria-label="Email for subscription"
                    className={`flex-1 px-3 py-2 rounded-l-lg ${darkMode ? 'bg-gray-800 text-white border-gray-700' : 'bg-white text-gray-800 border-gray-300'} border focus:outline-none`}
                  />
                  <button
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-lg hover:bg-indigo-700"
                    aria-label="Subscribe to newsletter"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
    
            <div className={`mt-12 pt-6 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t text-center`}>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                © {new Date().getFullYear()} ZenYogi. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default ZenturaApp;
