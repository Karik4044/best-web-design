import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import logo from '../assets/A__1_-removebg-preview.png';

function Navbar({ darkMode, toggleDarkMode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    // Check login status on component mount and when localStorage changes
    useEffect(() => {
        const checkLoginStatus = () => {
            const loginStatus = localStorage.getItem('isLoggedIn');
            setIsLoggedIn(loginStatus === 'true');
        };

        // Check initial login status
        checkLoginStatus();

        // Listen for storage changes
        window.addEventListener('storage', checkLoginStatus);

        return () => {
            window.removeEventListener('storage', checkLoginStatus);
        };
    }, []);

    const toggleAccountMenu = () => {
        setShowAccountMenu(!showAccountMenu);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
        setShowRegisterModal(false);
    };

    const handleRegisterClick = () => {
        setShowRegisterModal(true);
        setShowLoginModal(false);
    };

    const handleSwitchToRegister = () => {
        setShowLoginModal(false);
        setShowRegisterModal(true);
    };

    const handleSwitchToLogin = () => {
        setShowRegisterModal(false);
        setShowLoginModal(true);
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        setShowAccountMenu(false);
        // Dispatch custom event for login status change
        window.dispatchEvent(new Event('loginStatusChange'));
    };

    return (
    <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2 ml-20">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className="text-xl font-bold text-dark ml-20 md:ml-20">
                    <Link to="/">Acend</Link>
                </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 mr-20">
                <Link to="/" className="text-dark hover:text-primary transition-colors relative group">
                    Home
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/challenges" className="text-dark hover:text-primary transition-colors relative group">
                    Thử thách
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/progress" className="text-dark hover:text-primary transition-colors relative group">
                    Theo dõi
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/badges" className="text-dark hover:text-primary transition-colors relative group">
                    Huy hiệu
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link to="/team" className="text-dark hover:text-primary transition-colors relative group">
                    Đội ngũ
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <button className="theme-toggle p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={toggleDarkMode}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                </button>
                
                {isLoggedIn ? (
                    <div className="relative">
                        <button 
                            onClick={toggleAccountMenu}
                            className="text-black hover:text-orange-500 transition-colors relative group border-2 border-primary rounded-full p-1"
                            title="Tài khoản"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z" />
                            </svg>
                        </button>
                        
                        <AnimatePresence>
                            {showAccountMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50"
                                >
                                    <Link to="/account" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Tài khoản của tôi
                                    </Link>
                                    <Link to="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                        Cài đặt
                                    </Link>
                                    <button 
                                        onClick={handleLogout}
                                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                                    >
                                        <Link to="/" className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Đăng xuất</Link>
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                        {/* Add click outside handler to close menu */}
                        {showAccountMenu && (
                            <div 
                                className="fixed inset-0 z-40" 
                                onClick={() => setShowAccountMenu(false)}
                            ></div>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={handleLoginClick}
                            className="text-primary hover:text-primary-dark transition-colors"
                        >
                            Đăng nhập
                        </button>
                        <button 
                            onClick={handleRegisterClick}
                            className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors"
                        >
                            Đăng ký
                        </button>
                    </div>
                )}
            </div>
            
            <div className="md:hidden">
                <button id="mobile-menu-button" className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white pb-4 px-4">
            <Link to="/features" className="block py-2 text-dark hover:text-primary relative group">
                Tính năng
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/challenges" className="block py-2 text-dark hover:text-primary relative group">
                Thử thách
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/progress" className="block py-2 text-dark hover:text-primary relative group">
                Theo dõi
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link to="/badges" className="block py-2 text-dark hover:text-primary relative group">
                Huy hiệu
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button className="theme-toggle mt-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={toggleDarkMode}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </button>
            {!isLoggedIn && (
                <div className="mt-4 space-y-2">
                    <button 
                        onClick={handleLoginClick}
                        className="block text-primary hover:text-primary-dark transition-colors"
                    >
                        Đăng nhập
                    </button>
                    <button 
                        onClick={handleRegisterClick}
                        className="block bg-primary text-white px-4 py-2 rounded-full hover:bg-primary-dark transition-colors text-center"
                    >
                        Đăng ký
                    </button>
                </div>
            )}
        </div>

        {/* Modals */}
        <LoginModal 
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onSwitchToRegister={handleSwitchToRegister}
        />
        <RegisterModal 
            isOpen={showRegisterModal}
            onClose={() => setShowRegisterModal(false)}
            onSwitchToLogin={handleSwitchToLogin}
        />
    </nav>
    );
}

export default Navbar;
