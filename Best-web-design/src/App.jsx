import React from 'react';
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
  return (
    <div className="bg-light">
      <Navbar />
      <Hero />
      <Features />
      <Challenges />
      <Progress />
      <Badge />
      <CreateChallenge />
      <GroupChallenge />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
