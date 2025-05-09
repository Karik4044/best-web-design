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
      staggerChildren: 0.2
    }
  }
};

function Challenges() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thử thách phổ biến</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các thử thách được yêu thích nhất và bắt đầu hành trình của bạn ngay hôm nay
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Challenge 1 */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-600 relative">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <svg className="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Tập thể dục mỗi ngày</h3>
                <p className="text-sm opacity-90">30 ngày • 10K+ người tham gia</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Xây dựng thói quen tập thể dục với các bài tập đơn giản mỗi ngày
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Tham gia ngay
              </motion.button>
            </div>
          </motion.div>

          {/* Challenge 2 */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <svg className="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Đọc sách 15 phút</h3>
                <p className="text-sm opacity-90">30 ngày • 8K+ người tham gia</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Phát triển thói quen đọc sách và mở rộng kiến thức mỗi ngày
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Tham gia ngay
              </motion.button>
            </div>
          </motion.div>

          {/* Challenge 3 */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 relative">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <svg className="w-16 h-16 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-semibold">Thiền định</h3>
                <p className="text-sm opacity-90">30 ngày • 5K+ người tham gia</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Tìm sự bình yên và cân bằng trong cuộc sống với thiền định
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Tham gia ngay
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          className="text-center mt-12"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border-2 border-primary text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            Xem thêm thử thách
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Challenges;
