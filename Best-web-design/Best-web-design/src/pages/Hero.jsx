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

function Hero() {
  return (
    <section className="hero-gradient pt-24 md:pt-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 text-white mb-10 md:mb-10 mt-0 md:mt-1 ml-20 md:ml-20 relative z-10">
            <motion.div 
              className="flex flex-col gap-32"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div className="flex flex-col mt-10" variants={fadeInUp}>
                <h1 className="text-3xl md:text-5xl font-bold mb-4">Một ngày một bước – bạn sẽ đi xa hơn bạn nghĩ</h1>
                <p className="text-lg md:text-xl mb-8">Nền tảng giúp bạn xây dựng thói quen tích cực và phát triển bản thân qua các thử thách 30 ngày.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Bắt đầu ngay
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all"
                  >
                    Tìm hiểu thêm
                  </motion.button>
                </div>
              </motion.div>
              
              {/* Statistics Section */}
              <motion.div className="flex items-center space-x-10" variants={fadeInUp}>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-6xl md:text-7xl font-bold">10K+</div>
                  <div className="text-base md:text-lg opacity-80">Người dùng</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-6xl md:text-7xl font-bold">50K+</div>
                  <div className="text-base md:text-lg opacity-80">Thử thách</div>
                </motion.div>
                <motion.div 
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-6xl md:text-7xl font-bold">95%</div>
                  <div className="text-base md:text-lg opacity-80">Hoàn thành</div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end pt-0 md:pt-0 pr-20 md:pr-40"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.div 
              className="relative w-80 h-[640px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Phone mockup with app */}
              <svg className="absolute inset-0" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="300" height="520" rx="30" fill="white" stroke="#E2E8F0" strokeWidth="4"/>
                <rect x="20" y="30" width="280" height="480" rx="20" fill="#F7FAFC"/>
                <circle cx="160" cy="510" r="15" fill="#E2E8F0"/>
                <rect x="140" y="20" width="40" height="5" rx="2.5" fill="#E2E8F0"/>
                
                {/* App UI */}
                <rect x="40" y="60" width="240" height="50" rx="10" fill="#FF7F50"/>
                <text x="60" y="90" fill="white" fontFamily="Montserrat" fontSize="16" fontWeight="600">ChallengeMe</text>
                
                <rect x="40" y="130" width="240" height="80" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
                <text x="60" y="160" fill="#2D3748" fontFamily="Montserrat" fontSize="14" fontWeight="600">Tập thể dục mỗi ngày</text>
                <text x="60" y="185" fill="#718096" fontFamily="Montserrat" fontSize="12">Ngày 8/30 • 26% hoàn thành</text>
                <rect x="60" y="195" width="200" height="6" rx="3" fill="#EDF2F7"/>
                <rect x="60" y="195" width="52" height="6" rx="3" fill="#3EB489"/>
                
                <rect x="40" y="230" width="240" height="80" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
                <text x="60" y="260" fill="#2D3748" fontFamily="Montserrat" fontSize="14" fontWeight="600">Đọc sách 15 phút</text>
                <text x="60" y="285" fill="#718096" fontFamily="Montserrat" fontSize="12">Ngày 12/30 • 40% hoàn thành</text>
                <rect x="60" y="295" width="200" height="6" rx="3" fill="#EDF2F7"/>
                <rect x="60" y="295" width="80" height="6" rx="3" fill="#3EB489"/>
                
                <circle cx="160" cy="430" r="30" fill="#FF7F50"/>
                <text x="152" y="436" fill="white" fontFamily="Montserrat" fontSize="24" fontWeight="bold">+</text>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;