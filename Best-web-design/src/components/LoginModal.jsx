import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//dark mode
function LoginModal({ isOpen, onClose, onSwitchToRegister, darkMode }) {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });

    const [error, setError] = useState('');

    // Test account credentials
    const testAccount = {
        email: 'test@example.com',
        password: 'test123'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        // Check if credentials match test account
        if (formData.email === testAccount.email && formData.password === testAccount.password) {
            // Store login state
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('user', JSON.stringify({
                email: formData.email,
                username: 'Test User'
            }));
            
            // Close modal
            onClose();
            
            // Dispatch a custom event to notify about login state change
            window.dispatchEvent(new Event('storage'));
        } else {
            setError('Email hoặc mật khẩu không đúng');
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user types
        if (error) setError('');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div 
                    className="fixed inset-0 transition-opacity" 
                    aria-hidden="true"
                    onClick={onClose}
                >
                    <div className={`absolute inset-0 ${darkMode ? 'bg-gray-900' : 'bg-gray-500'} opacity-75 transition-colors`}></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={`inline-block align-bottom ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full relative z-[101]`}
                    onClick={e => e.stopPropagation()}
                >
                    <div className="p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'} transition-colors`}>Đăng nhập</h2>
                            <button
                                onClick={onClose}
                                className={`${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Test Account Info */}
                        <div className={`mb-4 p-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-md transition-colors`}>
                            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}>
                                Tài khoản test: <br />
                                Email: {testAccount.email} <br />
                                Mật khẩu: {testAccount.password}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="email" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1 transition-colors`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                                        darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                                    }`}
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className={`block text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1 transition-colors`}>
                                    Mật khẩu
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors ${
                                        darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                                    }`}
                                    required
                                />
                            </div>

                            {error && (
                                <div className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-500'} transition-colors`}>
                                    {error}
                                </div>
                            )}

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className={`h-4 w-4 text-primary focus:ring-primary rounded transition-colors ${
                                            darkMode ? 'border-gray-600' : 'border-gray-300'
                                        }`}
                                    />
                                    <label htmlFor="rememberMe" className={`ml-2 block text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors`}>
                                        Ghi nhớ đăng nhập
                                    </label>
                                </div>
                                <button
                                    type="button"
                                    className={`text-sm ${darkMode ? 'text-primary-light hover:text-primary' : 'text-primary hover:text-primary-dark'} transition-colors`}
                                >
                                    Quên mật khẩu?
                                </button>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
                            >
                                Đăng nhập
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors`}>
                                Chưa có tài khoản?{' '}
                                <button
                                    onClick={onSwitchToRegister}
                                    className={`font-medium ${darkMode ? 'text-primary-light hover:text-primary' : 'text-primary hover:text-primary-dark'} transition-colors`}
                                >
                                    Đăng ký ngay
                                </button>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default LoginModal; 