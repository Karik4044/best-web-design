import React from 'react';
import { motion } from 'framer-motion';

const useScroll = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
};

function aboutus() {
    return (
        <div className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl font-bold mb-4"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ 
                            opacity: 1, 
                            y: 0,
                            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                        }}
                        transition={{ 
                            duration: 0.5,
                            backgroundPosition: {
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }}
                        style={{
                            background: "linear-gradient(to right, #FF7F50, #FF9F7F, #FFD700)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textFillColor: "transparent",
                            backgroundSize: "300% auto"
                        }}
                    >
                        <img src="/src/assets/A__1_-removebg-preview.png" alt="logo" className="w-10 h-10 inline-block mr-2 mb-1" />
                        Về Chúng Tôi
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Ascend - Nền tảng giúp bạn xây dựng thói quen tích cực và phát triển bản thân
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="bg-white rounded-lg p-8 shadow-lg border-2 border-orange-300"
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Sứ Mệnh</h2>
                        <p className="text-gray-600">
                            Chúng tôi cam kết giúp mọi người xây dựng những thói quen tích cực thông qua các thử thách 30 ngày. 
                            Mỗi thử thách được thiết kế để giúp bạn phát triển bản thân một cách bền vững và hiệu quả.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-white rounded-lg p-8 shadow-lg border-2 border-orange-300"
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tầm Nhìn</h2>
                        <p className="text-gray-600">
                            Chúng tôi mong muốn trở thành nền tảng hàng đầu trong việc giúp mọi người phát triển bản thân 
                            và xây dựng cộng đồng những người có cùng chí hướng.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="bg-white rounded-lg p-8 shadow-lg md:col-span-2 border-2 border-orange-300"
                        whileHover={{ 
                            scale: 1.02,
                            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                            transition: { duration: 0.2 }
                        }}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Giá Trị Cốt Lõi</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <motion.div 
                                className="text-center"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    whileHover={{
                                        backgroundColor: "rgba(255, 127, 80, 0.2)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.svg 
                                        className="w-8 h-8 text-orange-500" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        whileHover={{ 
                                            scale: 1.2,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </motion.svg>
                                </motion.div>
                                <h3 className="font-semibold text-gray-800 mb-2">Đổi Mới</h3>
                                <p className="text-gray-600">Luôn tìm kiếm những cách tiếp cận mới và hiệu quả</p>
                            </motion.div>

                            <motion.div 
                                className="text-center"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    whileHover={{
                                        backgroundColor: "rgba(255, 127, 80, 0.2)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.svg 
                                        className="w-8 h-8 text-orange-500" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        whileHover={{ 
                                            scale: 1.2,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </motion.svg>
                                </motion.div>
                                <h3 className="font-semibold text-gray-800 mb-2">Cộng Đồng</h3>
                                <p className="text-gray-600">Xây dựng và phát triển cộng đồng tích cực</p>
                            </motion.div>

                            <motion.div 
                                className="text-center"
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                            >
                                <motion.div 
                                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                                    whileHover={{
                                        backgroundColor: "rgba(255, 127, 80, 0.2)",
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <motion.svg 
                                        className="w-8 h-8 text-orange-500" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                        whileHover={{ 
                                            scale: 1.2,
                                            transition: { duration: 0.2 }
                                        }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </motion.svg>
                                </motion.div>
                                <h3 className="font-semibold text-gray-800 mb-2">Đáng Tin Cậy</h3>
                                <p className="text-gray-600">Cam kết chất lượng và độ tin cậy trong mọi hoạt động</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default aboutus;
