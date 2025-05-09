import React from 'react';
import { motion } from 'framer-motion';

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
    return (
        <section id="badges" className="py-16 bg-gray-50 mt-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <h2 className="text-3xl font-bold text-center mb-4">Huy hiệu và thành tích</h2>
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
                            <h3 className="font-semibold text-center">14 ngày liên tiếp</h3>
                            <p className="text-xs text-gray-500 text-center">Hai tuần kiên trì</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
                                >
                                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">30 ngày liên tiếp</h3>
                            <p className="text-xs text-gray-500 text-center">Thói quen đã hình thành</p>
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
                            <h3 className="font-semibold text-center">Siêu sao</h3>
                            <p className="text-xs text-gray-500 text-center">Hoàn thành 5 thử thách</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1 }}
                                >
                                    <path d="M2 5a1 1 0 011.707-.707l2.586 2.586L10 3l3.707 3.879 2.586-2.586A1 1 0 0118 5v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 2.414V15h12V7.414l-2.293 2.293a1 1 0 01-1.414 0L10 6.414l-2.293 3.293a1 1 0 01-1.414 0L4 7.414z" />
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">Master</h3>
                            <p className="text-xs text-gray-500 text-center">Hoàn thành 10 thử thách</p>
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
                            <p className="text-xs text-gray-500 text-center">Kết nối với 10 bạn</p>
                        </motion.div>

                        <motion.div 
                            className="badge flex flex-col items-center"
                            variants={fadeInUp}
                            whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                        >
                            <motion.div 
                                className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-lg mb-3"
                                whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                            >
                                <motion.svg 
                                    className="w-12 h-12 text-white" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 1.6 }}
                                >
                                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                                </motion.svg>
                            </motion.div>
                            <h3 className="font-semibold text-center">Siêu tốc</h3>
                            <p className="text-xs text-gray-500 text-center">Hoàn thành thử thách trước hạn</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Badge;
