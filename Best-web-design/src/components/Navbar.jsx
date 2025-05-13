import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';
import DarkModeToggle from './DarkModeToggle';
import logo from '../assets/A__1_-removebg-preview.png';

function Navbar({ darkMode, toggleDarkMode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showAccountMenu, setShowAccountMenu] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <nav className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md fixed w-full z-50 transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2 ml-20">
                <img src={logo} alt="Logo" className="w-8 h-8" />
                <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-dark'} ml-20 md:ml-20`}>
                    <Link to="/">Acend</Link>
                </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 mr-20">
                <Link to="/" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} transition-colors relative group`}>
                    Home
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to="/challenges" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} transition-colors relative group`}>
                    Thử thách
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to="/progress" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} transition-colors relative group`}>
                    Theo dõi
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to="/badges" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} transition-colors relative group`}>
                    Huy hiệu
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <Link to="/team" className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} transition-colors relative group`}>
                    Đội ngũ
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                </Link>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                
                {isLoggedIn ? (
                    <div className="relative">
                        <button 
                            onClick={toggleAccountMenu}
                            className={`${darkMode ? 'text-white hover:text-gray-300' : 'text-black hover:text-orange-500'} transition-colors relative group border-2 border-primary rounded-full p-1`}
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
                                    className={`absolute right-0 mt-2 w-48 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-md shadow-lg py-1 z-50`}
                                >
                                    <Link to="/account" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14c-4.418 0-8 2.239-8 5v1a1 1 0 001 1h14a1 1 0 001-1v-1c0-2.761-3.582-5-8-5z" />
                                            </svg>
                                            Tài khoản của tôi
                                        </div>
                                    </Link>
                                    <Link to="/setting" className={`block px-4 py-2 text-sm ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}>
                                        <div className="flex items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            Cài đặt
                                        </div>
                                    </Link>
                                    <div className="flex items-center">
                                        <button 
                                            onClick={handleLogout}
                                            className={`flex items-center text-left px-4 py-2 text-sm text-red-600 hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                            <Link to="/" className="text-red-600">Đăng xuất</Link>
                                        </button>
                                    </div>
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
                            className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-primary-dark'} transition-colors`}
                        >
                            Đăng nhập
                        </button>
                        <button 
                            onClick={handleRegisterClick}
                            className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-primary hover:bg-primary-dark'} text-white px-4 py-2 rounded-full transition-colors`}
                        >
                            Đăng ký
                        </button>
                    </div>
                )}
            </div>
            
            <div className="md:hidden">
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`p-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} focus:outline-none`}
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    )}
                </button>
            </div>
        </div>
        
        {/* Mobile menu */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg`}
                    style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', }}
                >
                    <div className="px-4 py-2 space-y-1">
                        <Link to="/" className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} relative group`}>
                            Home
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                        </Link>
                        <Link to="/challenges" className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} relative group`}>
                            Thử thách
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                        </Link>
                        <Link to="/progress" className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} relative group`}>
                            Theo dõi
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                        </Link>
                        <Link to="/badges" className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} relative group`}>
                            Huy hiệu
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                        </Link>
                        <Link to="/team" className={`block py-2 ${darkMode ? 'text-gray-300 hover:text-white' : 'text-dark hover:text-primary'} relative group`}>
                            Đội ngũ
                            <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${darkMode ? 'bg-white' : 'bg-primary'} transition-all duration-300 group-hover:w-full`}></span>
                        </Link>
                        <div className="flex items-center justify-between py-2">
                            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                            {!isLoggedIn && (
                                <div className="flex space-x-2">
                                    <button 
                                        onClick={handleLoginClick}
                                        className={`${darkMode ? 'text-gray-300 hover:text-white' : 'text-primary hover:text-primary-dark'} transition-colors`}
                                    >
                                        Đăng nhập
                                    </button>
                                    <button 
                                        onClick={handleRegisterClick}
                                        className={`${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-primary hover:bg-primary-dark'} text-white px-4 py-2 rounded-full transition-colors`}
                                    >
                                        Đăng ký
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        
        {/* Modals */}
        <AnimatePresence>
            {showLoginModal && (
                <LoginModal 
                    isOpen={showLoginModal}
                    onClose={() => setShowLoginModal(false)}
                    onSwitchToRegister={handleSwitchToRegister}
                    darkMode={darkMode}
                />
            )}
            {showRegisterModal && (
                <RegisterModal 
                    isOpen={showRegisterModal}
                    onClose={() => setShowRegisterModal(false)}
                    onSwitchToLogin={handleSwitchToLogin}
                    darkMode={darkMode}
                />
            )}
        </AnimatePresence>
    </nav>
    );
}

export default Navbar;
