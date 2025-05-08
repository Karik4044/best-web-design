// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Features from './pages/Features';
import PopularChallenges from './pages/PopularChallenges';
import Progress from './pages/Progress';
import Achievements from './pages/Achievements';
import CreateChallenge from './pages/CreateChallenge';
import GroupChallenges from './pages/GroupChallenges';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/challenges" element={<PopularChallenges />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/create-challenge" element={<CreateChallenge />} />
            <Route path="/group-challenges" element={<GroupChallenges />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;