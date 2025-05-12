import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import Features from './pages/Features';
import Challenges from './pages/Challenges';
import Progress from './pages/Progress';
import Badge from './pages/Badge';
import CreateChallenge from './pages/alter/CreateChallenge';
import GroupChallenge from './pages/GroupChallenge';
import PopupChallenges from './pages/alter/PopupChallenges';
import CTA from './pages/alter/CTA';
import Footer from './components/Footer';
import AnimatedPage from './animaition/AnimatedPage';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Account from './pages/alter/Account';
import Team from './pages/alter/team';
import Aboutus from './pages/alter/aboutus';
import Contact from './pages/alter/contact';
import Help from './pages/alter/Help';
import Clause from './pages/alter/clause';
import Policy from './pages/alter/policy';
import FAQ from './pages/alter/FAQ';
import './parallax.css';
import Setting from './pages/alter/setting';
// ScrollToTop component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <AnimatedPage>
                            <Hero />
                            <Features />
                            <Challenges />
                            <GroupChallenge />
                            <CTA />
                        </AnimatedPage>
                    }
                />
                <Route 
                    path="/features" 
                    element={
                        <AnimatedPage>
                            <Features />
                        </AnimatedPage>
                    } 
                />
                <Route 
                    path="/challenges" 
                    element={
                        <AnimatedPage>
                            <Challenges />
                        </AnimatedPage>
                    } 
                />
                <Route 
                    path="/challenges/:id" 
                    element={<PopupChallenges />} 
                />
                <Route 
                    path="/progress" 
                    element={
                        <AnimatedPage>
                            <Progress />
                        </AnimatedPage>
                    } 
                />
                <Route 
                    path="/badges" 
                    element={
                        <AnimatedPage>
                            <Badge />
                        </AnimatedPage>
                    } 
                />
                <Route 
                    path="/create-challenge" 
                    element={
                        <AnimatedPage>
                            <CreateChallenge />
                        </AnimatedPage>
                    } 
                />
                <Route 
                    path="/group-challenge" 
                    element={
                        <AnimatedPage>
                            <GroupChallenge />
                        </AnimatedPage>
                    } 
                />
                <Route path="/account" element={
                    <AnimatedPage>
                        <Account />
                    </AnimatedPage>
                } />
                <Route path="/team" element={
                    <AnimatedPage>
                        <Team />
                    </AnimatedPage>
                } />
                <Route path="/aboutus" element={
                    <AnimatedPage>
                        <Aboutus />
                    </AnimatedPage>
                } />
                <Route path="/contact" element={
                    <AnimatedPage>
                        <Contact />
                    </AnimatedPage>
                } />
                <Route path="/help" element={
                    <AnimatedPage>
                        <Help />
                    </AnimatedPage>
                } />
                <Route path="/clause" element={
                    <AnimatedPage>
                        <Clause />
                    </AnimatedPage>
                } />
                <Route path="/policy" element={
                    <AnimatedPage>
                        <Policy />
                    </AnimatedPage>
                } />
                <Route path="/faq" element={
                    <AnimatedPage>
                        <FAQ />
                    </AnimatedPage>
                } />
                <Route path="/setting" element={
                    <AnimatedPage>
                        <Setting />
                    </AnimatedPage>
                } />
                <Route path="/login" element={<LoginModal />} />
                <Route path="/register" element={<RegisterModal />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedMode = localStorage.getItem('darkMode');
        return savedMode === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : savedMode === 'true';
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev);
    };

    return (
        <Router>
            <div className={`min-h-screen flex flex-col ${
                darkMode 
                    ? 'bg-dark-bg-primary text-dark-text-primary' 
                    : 'bg-light-bg-primary text-light-text-primary'
            } transition-colors duration-300`}>
                <ScrollToTop />
                <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <main className="flex-grow">
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
