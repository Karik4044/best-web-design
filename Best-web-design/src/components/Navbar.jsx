import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.style.backgroundColor = '#2D3748'; // Dark background
            document.body.style.color = '#F7FAFC'; // Light text color
        } else {
            document.body.classList.remove('dark-mode');
            document.body.style.backgroundColor = '#FFFFFF'; // Light background
            document.body.style.color = '#2D3748'; // Dark text color
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        // <!-- Navigation -->
    <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="#">
                <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xl font-bold text-dark">ChallengeMe</span>
            </div>
            </a>
            
            <div className="hidden md:flex items-center space-x-8">
                <a href="#features" className="text-dark hover:text-primary transition-colors relative group">
                    Tính năng
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#challenges" className="text-dark hover:text-primary transition-colors relative group">
                    Thử thách
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#progress" className="text-dark hover:text-primary transition-colors relative group">
                    Theo dõi
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <a href="#badges" className="text-dark hover:text-primary transition-colors relative group">
                    Huy hiệu
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                </a>
                <button className="theme-toggle p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={toggleDarkMode}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                </button>
            </div>
            
            <div className="md:hidden">
                <button id="mobile-menu-button" className="p-2">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div id="mobile-menu" class="hidden md:hidden bg-white pb-4 px-4">
            <a href="#features" class="block py-2 text-dark hover:text-primary">Tính năng</a>
            <a href="#challenges" class="block py-2 text-dark hover:text-primary">Thử thách</a>
            <a href="#progress" class="block py-2 text-dark hover:text-primary">Theo dõi</a>
            <a href="#badges" class="block py-2 text-dark hover:text-primary">Huy hiệu</a>
            <button class="theme-toggle mt-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={toggleDarkMode}>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </button>
        </div>
    </nav>
    );
}

export default Navbar;
