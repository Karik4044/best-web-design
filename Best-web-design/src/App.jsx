import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Challenges from './pages/Challenges';
import Progress from './pages/Progress';
import Badge from './pages/Badge';
import CreateChallenge from './pages/CreateChallenge';
import GroupChallenge from './pages/GroupChallenge';
import CTA from './pages/CTA';
import Footer from './components/Footer';

function App() {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark bg-dark' : 'bg-light'} transition-colors duration-300`}>
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <Challenges />
                  <Progress />
                  <Badge />
                  <CreateChallenge />
                  <GroupChallenge />
                  <CTA />
                </>
              }
            />
            <Route path="/features" element={<Features />} />
            <Route path="/challenges" element={<Challenges />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/badges" element={<Badge />} />
            <Route path="/create-challenge" element={<CreateChallenge />} />
            <Route path="/group-challenge" element={<GroupChallenge />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
