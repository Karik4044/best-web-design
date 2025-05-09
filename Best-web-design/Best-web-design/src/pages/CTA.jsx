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

function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sẵn sàng bắt đầu hành trình của bạn?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Tham gia cùng hàng nghìn người đang xây dựng thói quen tích cực mỗi ngày
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Đăng ký miễn phí
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
