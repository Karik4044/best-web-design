import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ darkMode, toggleDarkMode }) {
    return (
    <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-xl font-bold text-dark ml-20 md:ml-20">
                    <Link to="/">ChallengeMe</Link>
                </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-dark hover:text-primary transition-colors">Home</Link>
                <Link to="/challenges" className="text-dark hover:text-primary transition-colors">Thử thách</Link>
                <Link to="/progress" className="text-dark hover:text-primary transition-colors">Theo dõi</Link>
                <Link to="/badges" className="text-dark hover:text-primary transition-colors">Huy hiệu</Link>
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
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white pb-4 px-4">
            <Link to="/features" className="block py-2 text-dark hover:text-primary">Tính năng</Link>
            <Link to="/challenges" className="block py-2 text-dark hover:text-primary">Thử thách</Link>
            <Link to="/progress" className="block py-2 text-dark hover:text-primary">Theo dõi</Link>
            <Link to="/badges" className="block py-2 text-dark hover:text-primary">Huy hiệu</Link>
            <button className="theme-toggle mt-2 p-2 rounded-full bg-gray-100 hover:bg-gray-200" onClick={toggleDarkMode}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
            </button>
        </div>
    </nav>
    );
}

export default Navbar;
