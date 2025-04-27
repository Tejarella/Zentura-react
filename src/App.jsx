import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Sparkles size={20} className="text-white" />
                </div>
                <h1 className={`text-2xl font-bold ${darkMode ? 'text-indigo-200' : 'text-gray-800'}`}>Zentura</h1>
              </Link>

              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/poses"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  Poses
                </Link>
                <Link
                  to="/diagnostics"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  Chakra Diagnostics
                </Link>
                <Link
                  to="/community"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  Community
                </Link>
                <Link
                  to="/about"
                  className={`${darkMode ? 'text-gray-400 hover:text-indigo-300' : 'text-gray-600 hover:text-indigo-500'} font-medium transition-colors`}
                >
                  About
                </Link>
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

        {/* Footer remains the same */}
      </div>
    </Router>
  );
};



export default ZenturaApp;








