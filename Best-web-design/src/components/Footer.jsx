import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
    const [activeFilter, setActiveFilter] = useState('');
    
    // Check if we came from Challenges page with a filter
    useEffect(() => {
        if (location.state?.filter) {
            setActiveFilter(location.state.filter);
        }
    }, [location.state]);
    
    // Handle filter click - navigate to challenges page with filter state
    const handleFilterClick = (filter) => {
        // Scroll to top first
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Then navigate to challenges page
        navigate('/challenges', { 
            state: { 
                filter, 
                // Set this flag so Challenges component knows to apply the filter
                applyFilter: true 
            } 
        });
    };
    
    // Handle regular navigation without scroll
    const handleNavigation = (path) => {
        navigate(path);
    };
    
    return(
        <footer className="bg-dark text-white py-12">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-8 md:mb-0 ml-10">
                    <div className="flex items-center space-x-2 mb-4">
                        <Link to="/" className="flex items-center space-x-2">
                            <img src="/src/assets/A__1_-removebg-preview.png" alt="Logo" className="w-8 h-8" /> 
                            <motion.span 
                                className="text-xl font-bold"
                                style={{
                                    background: "linear-gradient(to right, #FF7F50, #FF9F7F, #FFD700, #3EB489, #87CEEB)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    textFillColor: "transparent",
                                    backgroundSize: "300% auto"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    backgroundPosition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }}
                            >
                                Acend
                            </motion.span>
                        </Link>
                    </div>
                    <p className="text-gray-400 max-w-xs">Nền tảng giúp bạn xây dựng thói quen tích cực và phát triển bản thân qua các thử thách 30 ngày.</p>
                    <div className="flex space-x-4 mt-6">
                        <motion.button
                             className="text-left text-gray-400 hover:text-white transition-colors"
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                            </a>
                        </motion.button>
                        <motion.button
                            className="text-left text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                                </svg>
                            </a>
                        </motion.button>
                        <motion.button
                            className="text-left text-gray-400 hover:text-white transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                                </svg>
                            </a>
                        </motion.button>
                    </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mr-10">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Thử thách</h3>
                        <div className="flex flex-col space-y-2">
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleFilterClick('Sức khỏe')}
                            >
                                Sức khỏe
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleFilterClick('Kỹ năng')}
                            >
                                Kỹ năng
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleFilterClick('Tinh thần')}
                            >
                                Tinh thần
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleFilterClick('Học tập')}
                            >
                                Học tập
                            </motion.button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
                        <div className="flex flex-col space-y-2">
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/aboutus')}
                            >
                                <Link to="/aboutus">Giới thiệu</Link>
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/team')}
                            >
                                <Link to="/team">Đội ngũ</Link>
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/contact')}
                            >
                                <Link to="/contact">Liên hệ</Link>
                            </motion.button>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
                        <div className="flex flex-col space-y-2">
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/help')}
                            >
                                <Link to="/help">Trợ giúp</Link>
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/clause')}
                            >
                                <Link to="/clause">Điều khoản</Link>
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/policy')}
                            >
                                <Link to="/policy">Chính sách</Link>
                            </motion.button>
                            <motion.button 
                                className="text-left text-gray-400 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavigation('/faq')}
                            >
                                <Link to="/faq">FAQ</Link>
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ml-10">
                <p className="text-gray-400 text-sm">© 2025 Acend. Tất cả quyền được bảo lưu.</p>
                <div className="flex space-x-6 mt-4 md:mt-0 mr-20">
                    <motion.button 
                        className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavigation('/clause')}
                    >
                        <Link to="/clause">Điều khoản sử dụng</Link>
                    </motion.button>
                    <motion.button 
                        className="text-left text-gray-400 hover:text-white transition-colors text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleNavigation('/policy')}
                    >
                        <Link to="/policy">Chính sách bảo mật</Link>
                    </motion.button>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
