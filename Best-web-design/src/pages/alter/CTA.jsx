import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import RegisterModal from '../../components/RegisterModal';
import LoginModal from '../../components/LoginModal';
import { createPortal } from 'react-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

function CTA() {
  const navigate = useNavigate();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on component mount and when localStorage changes
  useEffect(() => {
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(loginStatus === 'true');
    };

    // Check initial login status
    checkLoginStatus();

    // Listen for storage changes (for changes from other tabs)
    window.addEventListener('storage', checkLoginStatus);

    // Create a custom event listener for login status changes
    const handleLoginChange = () => {
      checkLoginStatus();
    };

    // Add event listener for custom login change event
    window.addEventListener('loginStatusChange', handleLoginChange);

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('loginStatusChange', handleLoginChange);
    };
  }, []);

  const handleRegisterClick = () => {
    setIsRegisterModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
  };

  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  // Don't render if user is logged in
  if (isLoggedIn) {
    return null;
  }

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
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
              onClick={handleRegisterClick}
            >
              Đăng ký miễn phí
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-all"
            >
              <Link to="/aboutus">Tìm hiểu thêm</Link>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {isRegisterModalOpen && createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <RegisterModal 
              isOpen={isRegisterModalOpen}
              onClose={handleCloseModal}
              onSwitchToLogin={handleSwitchToLogin}
            />
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      {isLoginModalOpen && createPortal(
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoginModal 
              isOpen={isLoginModalOpen}
              onClose={handleCloseModal}
              onSwitchToRegister={handleSwitchToRegister}
            />
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
}

export default CTA;
