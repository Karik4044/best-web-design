// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Header = () => {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-3 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-1">
          <div className="bg-orange-500 rounded-full p-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-base">ChallengeMe</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/features" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Tính năng</Link>
          <Link to="/challenges" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Thử thách</Link>
          <Link to="/progress" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Theo dõi</Link>
          <Link to="/achievements" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">Huy Hiệu</Link>
        </nav>
        
        <div className="flex items-center">
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;