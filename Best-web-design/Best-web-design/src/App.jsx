import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
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
import AnimatedPage from './components/AnimatedPage';

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
                            <CreateChallenge />
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
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
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
                    <AnimatedRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
