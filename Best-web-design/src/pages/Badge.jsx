import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

function Badge() {
    const [hasConfettiPlayed, setHasConfettiPlayed] = useState(false);

    useEffect(() => {
        // Create a fixed canvas container
        const canvas = document.createElement('canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);

        // Initialize confetti with the fixed canvas
        const myConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });

        // Check if confetti has been played in this page visit
        const hasPlayed = localStorage.getItem('badgeConfettiPlayed');
        
        if (!hasPlayed) {
            // Left side confetti
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 0, y: 0.6 },
                angle: 60,
                colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98']
            });

            // Right side confetti
            myConfetti({
                particleCount: 100,
                spread: 70,
                origin: { x: 1, y: 0.6 },
                angle: 120,
                colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98']
            });

            // Center burst
            setTimeout(() => {
                myConfetti({
                    particleCount: 50,
                    spread: 360,
                    origin: { x: 0.5, y: 0.5 },
                    colors: ['#FFD700', '#FFA500', '#FF69B4', '#87CEEB', '#98FB98']
                });
            }, 500);

            // Mark confetti as played for this page visit
            localStorage.setItem('badgeConfettiPlayed', 'true');
        }

        // Cleanup function
        return () => {
            document.body.removeChild(canvas);
            localStorage.removeItem('badgeConfettiPlayed');
        };
    }, []);

    return (
        <section id="badges" className="py-16 bg-gray-50 mt-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className="flex justify-center items-center">
                    <motion.span 
                                className="text-3xl font-bold"
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
                                Huy hiệu và thành tích
                            </motion.span>
                        <svg className="w-8 h-8 ml-2 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#FFD43B" d="M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0L133.9 0c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0L487.4 0C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"/>
                        </svg>
                    </div>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Nhận huy hiệu đặc biệt khi hoàn thành các cột mốc quan trọng trong hành trình rèn luyện của bạn</p>
                </motion.div>
                
                <motion.div 
                    className="flex flex-col items-center space-y-16 max-w-4xl mx-auto"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Row 1 - Day Achievements */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                >
                                    <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">7 ngày liên tiếp</h3>
                            <p className="text-xs text-gray-500 text-center">Tuần đầu tiên</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                                >
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">14 ngày liên tiếp</h3>
                            <p className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 text-xs">Hai tuần kiên trì</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-3 relative overflow-hidden"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                style={{
                                    background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
                                    backgroundSize: "400% 400%"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 10,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                {/* Sparkle effect overlay */}
                                <motion.div 
                                    className="absolute inset-0"
                                    style={{
                                        background: "radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)",
                                        backgroundSize: "15px 15px"
                                    }}
                                    animate={{
                                        opacity: [0, 0.5, 0],
                                        scale: [0.8, 1.2, 0.8],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <motion.svg 
                                    className="w-12 h-12 text-white relative z-10" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ rotate: 0 }}
                                    animate={{ 
                                        y: [-5, 5, -5], 
                                        x: [3, -3, 3],
                                        filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.5))", "drop-shadow(0 0 8px rgba(255,255,255,0.8))", "drop-shadow(0 0 3px rgba(255,255,255,0.5))"]
                                    }}
                                    transition={{ 
                                        y: { duration: 2, ease: "easeInOut", repeat: Infinity },
                                        x: { duration: 1.5, ease: "easeInOut", repeat: Infinity },
                                        filter: { duration: 2.5, ease: "easeInOut", repeat: Infinity }
                                    }}
                                >
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <div className="flex items-center justify-center">
                                <h3 className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">30 ngày liên tiếp</h3>
                                <svg className="w-5 h-5 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 text-xs">Thói quen đã hình thành</p>
                        </motion.div>
                    </motion.div>

                    {/* Row 2 - Challenge Achievements */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">Thử thách đầu tiên</h3>
                            <p className="text-xs text-gray-500 text-center">Hoàn thành 1 thử thách</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">Siêu sao</h3>
                            <p className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600 text-xs">Hoàn thành 5 thử thách</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-3 relative overflow-hidden"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                style={{
                                    background: "linear-gradient(-45deg, #6e48aa, #9d50bb, #6e48aa, #9d50bb)",
                                    backgroundSize: "400% 400%"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 8,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                {/* Sparkle effect */}
                                <motion.div 
                                    className="absolute inset-0"
                                    style={{
                                        background: "radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)",
                                        backgroundSize: "20px 20px"
                                    }}
                                    animate={{
                                        opacity: [0, 0.7, 0],
                                        backgroundPosition: ["0% 0%", "100% 100%"],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                />
                                <motion.svg 
                                    className="w-12 h-12 text-white relative z-10" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ 
                                        scale: 1,
                                        filter: ["drop-shadow(0 0 2px rgba(255,255,255,0.7))", "drop-shadow(0 0 8px rgba(255,255,255,0.9))", "drop-shadow(0 0 2px rgba(255,255,255,0.7))"]
                                    }}
                                    transition={{ 
                                        scale: { duration: 0.5, delay: 1 },
                                        filter: { duration: 2, repeat: Infinity }
                                    }}
                                >
                                    <path d="M2 5a1 1 0 011.707-.707l2.586 2.586L10 3l3.707 3.879 2.586-2.586A1 1 0 0118 5v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 2.414V15h12V7.414l-2.293 2.293a1 1 0 01-1.414 0L10 6.414l-2.293 3.293a1 1 0 01-1.414 0L4 7.414z" />
                                </motion.svg>
                            </motion.div>
                            <div className="flex items-center justify-center">
                                <h3 className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600">
                                    Master
                                </h3>
                                <svg className="w-5 h-5 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M5 8l2.5 3L12 5l4.5 6L19 8l-2 9H7L5 8z" />
                                    <path d="M4 19h16v2H4z" />
                                </svg>
                            </div>
                            <p className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-600 text-xs">Hoàn thành 10 thử thách</p>
                        </motion.div>
                    </motion.div>
                    
                    {/* Row 3 - Additional Achievements */}
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
                        variants={staggerContainer}
                    >
                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.2 }}
                                >
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">Người truyền cảm hứng</h3>
                            <p className="text-xs text-gray-500 text-center">Chia sẻ 5 thành tựu</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.4 }}
                                >
                                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">Người kết nối</h3>
                            <p className="text-xs text-gray-500 text-center">Kết nối với 10 người bạn</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full flex items-center justify-center shadow-lg mb-3 relative overflow-hidden"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                                style={{
                                    background: "linear-gradient(-45deg, #00c9ff, #92fe9d, #00c9ff, #92fe9d)",
                                    backgroundSize: "400% 400%"
                                }}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                                }}
                                transition={{
                                    duration: 6,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
                                {/* Lightning sparkle effect */}
                                <motion.div 
                                    className="absolute inset-0"
                                    style={{
                                        background: "radial-gradient(circle, rgba(255,255,255,0.9) 5%, transparent 10%)",
                                        backgroundSize: "10px 10px"
                                    }}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        scale: [0.9, 1.1, 0.9],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                />
                                <motion.svg 
                                    className="w-12 h-12 text-white relative z-10" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ 
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 5, -5, 0],
                                        filter: ["drop-shadow(0 0 3px rgba(255,255,255,0.7))", "drop-shadow(0 0 10px rgba(255,255,255,0.9))", "drop-shadow(0 0 3px rgba(255,255,255,0.7))"]
                                    }}
                                    transition={{ 
                                        scale: { duration: 1.5, repeat: Infinity },
                                        rotate: { duration: 2, repeat: Infinity },
                                        filter: { duration: 1.5, repeat: Infinity }
                                    }}
                                >
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <div className="flex items-center justify-center">
                                <h3 className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500">Siêu tốc</h3>
                                <svg className="w-5 h-5 ml-1 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M11.3 1L3 10h5l-1 9 8.3-9h-5l1-9z" />  
                                </svg>
                            </div>
                            <p className="font-semibold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-green-500 text-xs">Hoàn thành thử thách trước hạn</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Badge;
