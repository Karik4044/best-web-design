import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Challenge Hub</h3>
            <p className="text-gray-300">
              Empowering individuals to achieve their goals through challenges and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/features" className="text-gray-300 hover:text-white">Features</Link></li>
              <li><Link to="/challenges" className="text-gray-300 hover:text-white">Challenges</Link></li>
              <li><Link to="/progress" className="text-gray-300 hover:text-white">Progress</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/achievements" className="text-gray-300 hover:text-white">Achievements</Link></li>
              <li><Link to="/create-challenge" className="text-gray-300 hover:text-white">Create Challenge</Link></li>
              <li><Link to="/group-challenges" className="text-gray-300 hover:text-white">Group Challenges</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Email: support@challengehub.com</li>
              <li className="text-gray-300">Phone: (555) 123-4567</li>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Challenge Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 