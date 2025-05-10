import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">Đăng nhập</h2>
                                <motion.button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-gray-700 transition-colors"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </motion.button>
                            </div>

                            {/* Test Account Info */}
                            <div className="mb-4 p-3 bg-gray-100 rounded-md">
                                <p className="text-sm text-gray-600">
                                    Tài khoản test: <br />
                                    Email: {testAccount.email} <br />
                                    Mật khẩu: {testAccount.password}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Mật khẩu
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        required
                                    />
                                </div>

                                {error && (
                                    <div className="text-red-500 text-sm">
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
                                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                        />
                                        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                                            Ghi nhớ đăng nhập
                                        </label>
                                    </div>
                                    <button
                                        type="button"
                                        className="text-sm text-primary hover:text-primary-dark"
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
                                <p className="text-sm text-gray-600">
                                    Chưa có tài khoản?{' '}
                                    <button
                                        onClick={onSwitchToRegister}
                                        className="text-primary hover:text-primary-dark font-medium"
                                    >
                                        Đăng ký ngay
                                    </button>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default LoginModal; 