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

function Progress() {
    return (
        <section id="progress" className="py-16 bg-white mt-10">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="flex flex-col md:flex-row items-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div 
                        className="md:w-1/2 mb-10 md:mb-0"
                        variants={fadeInUp}
                    >
                        <div className="flex items-center mb-6 ml-20">
                            <h2 className="text-3xl font-bold">Theo dõi tiến trình hằng ngày</h2>
                            <motion.svg 
                                className="w-10 h-10 ml-3 text-primary" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, ease: "easeInOut" }}
                            >
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </motion.svg>
                        </div>
                        <p className="text-gray-600 mb-8 ml-20">Dễ dàng đánh dấu hoàn thành mỗi ngày và xem thống kê chi tiết về quá trình rèn luyện của bạn.</p>
                        
                        <motion.div 
                            className="space-y-6"
                            variants={staggerContainer}
                        >
                            <motion.div 
                                className="flex items-center"
                                variants={fadeInUp}
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4 ml-20">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Đánh dấu hoàn thành</h3>
                                    <p className="text-gray-600 text-sm">Tích vào mỗi ngày khi bạn hoàn thành thử thách</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center"
                                variants={fadeInUp}
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4 ml-20">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Thống kê trực quan</h3>
                                    <p className="text-gray-600 text-sm">Xem biểu đồ tiến trình và phần trăm hoàn thành</p>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="flex items-center"
                                variants={fadeInUp}
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4 ml-20">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Chuỗi ngày liên tiếp</h3>
                                    <p className="text-gray-600 text-sm">Theo dõi số ngày liên tiếp bạn đã hoàn thành thử thách</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    
                    <motion.div 
                        className="md:w-1/2 flex justify-center"
                        variants={fadeInUp}
                    >
                        <motion.div 
                            className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md"
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold">Tập thể dục mỗi ngày</h3>
                                <motion.span 
                                    className="bg-primary bg-opacity-10 text-primary text-xs font-semibold px-3 py-1 rounded-full"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    Ngày 15/30
                                </motion.span>
                            </div>
                            
                            {/* Calendar Grid */}
                            <motion.div 
                                className="grid grid-cols-7 gap-2 mb-6"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                            >
                                {/* Day labels */}
                                <div className="text-center text-gray-500 text-xs">T2</div>
                                <div className="text-center text-gray-500 text-xs">T3</div>
                                <div className="text-center text-gray-500 text-xs">T4</div>
                                <div className="text-center text-gray-500 text-xs">T5</div>
                                <div className="text-center text-gray-500 text-xs">T6</div>
                                <div className="text-center text-gray-500 text-xs">T7</div>
                                <div className="text-center text-gray-500 text-xs">CN</div>
                                
                                {/* Days 1-7 */}
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                >1</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.2 }}
                                >2</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.3 }}
                                >3</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.4 }}
                                >4</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.5 }}
                                >5</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-200 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.6 }}
                                >6</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.7 }}
                                >7</motion.div>
                                
                                {/* Days 8-14 */}
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.8 }}
                                >8</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 0.9 }}
                                >9</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1 }}
                                >10</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.1 }}
                                >11</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.2 }}
                                >12</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.3 }}
                                >13</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.4 }}
                                >14</motion.div>
                                
                                {/* Days 15-21 */}
                                <motion.div 
                                    className="h-10 rounded-md bg-primary flex items-center justify-center text-white"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.5 }}
                                >15</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.6 }}
                                >16</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.7 }}
                                >17</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.8 }}
                                >18</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 1.9 }}
                                >19</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2 }}
                                >20</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.05 }}
                                >21</motion.div>
                                
                                {/* Days 22-28 */}
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.1 }}
                                >22</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.15 }}
                                >23</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.2 }}
                                >24</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.25 }}
                                >25</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.3 }}
                                >26</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.35 }}
                                >27</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.4 }}
                                >28</motion.div>
                                
                                {/* Days 29-30 */}
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.45 }}
                                >29</motion.div>
                                <motion.div 
                                    className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.2, delay: 2.55 }}
                                >30</motion.div>
                            </motion.div>
                            
                            {/* Progress Stats */}
                            <motion.div 
                                className="flex justify-between mb-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 2.5 }}
                            >
                                <div>
                                    <span className="text-sm font-medium">Tiến độ</span>
                                </div>
                                <div>
                                    <span className="text-sm font-medium">50%</span>
                                </div>
                            </motion.div>
                            <motion.div 
                                className="w-full bg-gray-200 rounded-full h-2.5 mb-6"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, delay: 2.6 }}
                            >
                                <motion.div 
                                    className="bg-primary h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: "50%" }}
                                    transition={{ duration: 1, delay: 2.7 }}
                                />
                            </motion.div>
                            
                            <motion.div 
                                className="flex justify-between"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 3 }}
                            >
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">14</p>
                                    <p className="text-xs text-gray-500">Ngày liên tiếp</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">15</p>
                                    <p className="text-xs text-gray-500">Hoàn thành</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">1</p>
                                    <p className="text-xs text-gray-500">Bỏ lỡ</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default Progress;

