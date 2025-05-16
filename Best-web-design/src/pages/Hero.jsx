import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import RegisterModal from '../components/RegisterModal';
import LoginModal from '../components/LoginModal';
import { createPortal } from 'react-dom';
import heroVideo from '../videos/RUN, Cinematic fitness video.mp4';

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
  const navigate = useNavigate();
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundMessage] = useState(false);
  const videoRef = useRef(null);
  const heroRef = useRef(null);
  const videoContainerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Hiệu ứng parallax chỉ di chuyển, không phóng to
  const y = useTransform(scrollY, [0, 300, 600, 900], [0, 200, 550, 1000]); // Tăng chuyển động theo chiều dọc nhiều hơn
  const opacity = useTransform(scrollY, [0, 400], [1, 0.9]); // Giảm độ trong suốt nhẹ khi cuộn

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

    // Handle video scaling to fit the hero section perfectly
    const adjustVideo = () => {
      if (videoRef.current && heroRef.current && videoContainerRef.current) {
        const heroWidth = heroRef.current.offsetWidth;
        const heroHeight = heroRef.current.offsetHeight;
        
        // Set container to match hero dimensions exactly
        videoContainerRef.current.style.width = `${heroWidth}px`;
        videoContainerRef.current.style.height = `${heroHeight}px`;
        
        // Get video's natural dimensions
        const videoWidth = videoRef.current.videoWidth;
        const videoHeight = videoRef.current.videoHeight;
        
        // Calculate aspect ratios
        const videoRatio = videoWidth / videoHeight;
        const heroRatio = heroWidth / heroHeight;
        
        if (videoRatio > heroRatio) {
          // Video is wider than hero - match height and center horizontally
          const newWidth = heroHeight * videoRatio;
          videoRef.current.style.width = `${newWidth}px`;
          videoRef.current.style.height = '100%';
          videoRef.current.style.left = `${(heroWidth - newWidth) / 2}px`;
          videoRef.current.style.top = '0';
        } else {
          // Video is taller than hero - match width and center vertically
          const newHeight = heroWidth / videoRatio;
          videoRef.current.style.width = '100%';
          videoRef.current.style.height = `${newHeight}px`;
          videoRef.current.style.left = '0';
          videoRef.current.style.top = `${(heroHeight - newHeight) / 2}px`;
        }
      }
    };

    // Run on load and when video metadata is loaded
    if (videoRef.current) {
      videoRef.current.addEventListener('loadedmetadata', adjustVideo);
      window.addEventListener('resize', adjustVideo);
      
      // Force adjustment after a short delay to ensure DOM is ready
      setTimeout(adjustVideo, 100);
    }

    return () => {
      window.removeEventListener('storage', checkLoginStatus);
      window.removeEventListener('loginStatusChange', handleLoginChange);
      if (videoRef.current) {
        videoRef.current.removeEventListener('loadedmetadata', adjustVideo);
      }
      window.removeEventListener('resize', adjustVideo);
    };
  }, []);

  //Xử lý button âm thanh
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  // Xử lý lỗi khi video không tải được
  const handleVideoError = () => {
    console.error('Video không thể tải được. Đang thử tải từ nguồn khác...');
    if (videoRef.current) {
      videoRef.current.style.display = 'none';
    }
  };

  // Xử lý khi người dùng nhấn nút "Bắt đầu ngay"
  // Nếu đã đăng nhập, chuyển hướng đến trang thử thách
  // Nếu chưa đăng nhập, mở modal đăng ký
  const handleStartClick = () => {
    if (isLoggedIn) {
      navigate('/challenges');
    } else {
      setIsRegisterModalOpen(true);
    }
  };

  // Xử lý đóng modal
  // Đóng cả hai modal nếu một trong hai modal đang mở
  // Nếu không có modal nào mở, không làm gì cả
  // Điều này giúp tránh việc đóng modal không cần thiết
  const handleCloseModal = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(false);
  };

  // Chuyển đổi giữa modal đăng ký và đăng nhập
  // Khi người dùng nhấn nút "Đăng nhập" trong modal đăng ký
  // hoặc "Đăng ký" trong modal đăng nhập
  // Điều này giúp người dùng dễ dàng chuyển đổi giữa hai modal mà không cần phải đóng modal hiện tại
  // và mở modal khác
  const handleSwitchToLogin = () => {
    setIsRegisterModalOpen(false);
    setIsLoginModalOpen(true);
  };

  // Chuyển đổi giữa modal đăng ký và đăng nhập
  // Khi người dùng nhấn nút "Đăng ký" trong modal đăng nhập
  // hoặc "Đăng nhập" trong modal đăng ký
  // Điều này giúp người dùng dễ dàng chuyển đổi giữa hai modal mà không cần phải đóng modal hiện tại
  // và mở modal khác
  const handleSwitchToRegister = () => {
    setIsLoginModalOpen(false);
    setIsRegisterModalOpen(true);
  };

  return (
    <section ref={heroRef} className="relative hero-gradient pt-24 md:pt-32 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-orange-500/70"
          style={{
            backgroundImage: 'linear-gradient(to bottom, rgba(255, 127, 80, 0.7), rgba(255, 127, 80, 0.8))',
            zIndex: 2,
            mixBlendMode: 'overlay'
          }}
        ></div>
        
        <AnimatePresence>
          <motion.div 
            key="video-background"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
            exit={{ opacity: 0 }}
            style={{ 
              y, 
              opacity,
              position: 'absolute',
              width: '100%',
              height: '100%'
            }} 
            className="z-0"
          >
            <div 
              ref={videoContainerRef}
              className="video-container" 
              style={{ 
                overflow: 'hidden', 
                position: 'relative',
                width: '100%',
                height: '100%'
              }}
            >
              <video 
                ref={videoRef}
                autoPlay 
                loop 
                muted={isMuted}
                playsInline 
                preload="auto"
                onError={handleVideoError}
                className="video-element"
                src={heroVideo}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Sound Control Button */}
      <motion.button 
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-[100] bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px'
        }}
        aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        )}
      </motion.button>
      
      {/* Sound Message */}
      <AnimatePresence>
        {showSoundMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-20 right-6 z-30 bg-white/80 backdrop-blur-sm text-black px-4 py-2 rounded-lg shadow-lg"
          >
            Âm nhạc đã được bật!
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Text content with parallax effect */}
      <motion.div 
        style={{ 
          y: useTransform(scrollY, [0, 800], [0, -150]), // Tăng chuyển động ngược lại
        }}
        className="relative z-20 parallax-layer-front"
      >
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
                  <p className="text-lg md:text-xl mb-8">Ascend - Nền tảng giúp bạn xây dựng thói quen tích cực và phát triển bản thân qua các thử thách 30 ngày. </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-primary font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
                      onClick={handleStartClick}
                    >
                      {isLoggedIn ? 'Xem thử thách' : 'Bắt đầu ngay'}
                    </motion.button>
                    <motion.button 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-transparent border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary transition-all"
                    >
                      <Link to="/aboutus">Tìm hiểu thêm</Link>
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
                  <image href="/src/assets/be22adc6-9678-4cd0-8c8f-1416c25ec1ec_removalai_preview.png" x="55" y="73" width="24" height="24" />
                  <text x="85" y="90" fill="white" fontFamily="Montserrat" fontSize="16" fontWeight="600">Ascend</text>
                  
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
                  <text x="152" y="438" fill="white" fontFamily="Montserrat" fontSize="24" fontWeight="bold">+</text>
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Modals */}
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

export default Hero;
