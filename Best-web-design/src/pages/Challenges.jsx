import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../animaition/AnimatedPage';
import ScrollAnimation from '../animaition/ScrollAnimation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { challenges } from '../data/challenges.jsx';
import { useUser } from '../context/UserContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.1,
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredChallenges, setFilteredChallenges] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);
  const location = useLocation();
  const navigate = useNavigate();
  const { addChallenge } = useUser();
  
  // Check if we're on the challenges page or home page
  const isChallengePage = location.pathname === '/challenges';
  
  // Check if a filter was passed via location state (from Footer)
  useEffect(() => {
    if (location.state?.filter && location.state?.applyFilter) {
      setActiveFilter(location.state.filter);
      
      // Clear the location state so refreshing the page doesn't reapply the filter
      // This is optional but helps with user experience
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);
  
  

  // Filter challenges when activeFilter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      const sortedChallenges = [...challenges].sort((a, b) => b.participantsCount - a.participantsCount);
      setFilteredChallenges(sortedChallenges);
    } else {
      const filtered = challenges
        .filter(challenge => challenge.category === activeFilter)
        .sort((a, b) => b.participantsCount - a.participantsCount);
      setFilteredChallenges(filtered);
    }
    
    setVisibleCards(isChallengePage ? filteredChallenges.length : 6);
  }, [activeFilter, isChallengePage, filteredChallenges.length]);

  // Handle starting a challenge
  const handleStartChallenge = (challenge) => {
    addChallenge(challenge);
    navigate(`/challenges/${challenge.id}`, { 
      state: { 
        challenge: getSerializableChallenge(challenge),
        action: 'start'
      } 
    });
  };

  // Helper function to create serializable challenge object
  const getSerializableChallenge = (challenge) => {
    // Exclude the icon property and create a new object
    const { icon, ...serializableChallenge } = challenge;
    return serializableChallenge;
  };

  return (
    <AnimatedPage>
      <section id="challenges" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 mt-10">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold text-center mb-4">Thử thách phổ biến</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Khám phá các thử thách được nhiều người lựa chọn để cải thiện cuộc sống hàng ngày
            </p>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Filter buttons */}
              <motion.button 
                className={`px-6 py-2 ${activeFilter === 'Sức khỏe' ? 'bg-primary' : 'bg-primary bg-opacity-70'} text-white rounded-full hover:bg-opacity-90 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter('Sức khỏe')}
              >
                Sức khỏe
              </motion.button>
              <motion.button 
                className={`px-6 py-2 ${activeFilter === 'Kỹ năng' ? 'bg-secondary' : 'bg-secondary bg-opacity-70'} text-white rounded-full hover:bg-opacity-90 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter('Kỹ năng')}
              >
                Kỹ năng
              </motion.button>
              <motion.button 
                className={`px-6 py-2 ${activeFilter === 'Tinh thần' ? 'bg-tertiary' : 'bg-tertiary bg-opacity-70'} text-white rounded-full hover:bg-opacity-90 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter('Tinh thần')}
              >
                Tinh thần
              </motion.button>
              <motion.button 
                className={`px-6 py-2 ${activeFilter === 'Học tập' ? 'bg-accent' : 'bg-accent bg-opacity-70'} text-white rounded-full hover:bg-opacity-90 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter('Học tập')}
              >
                Học tập
              </motion.button>
              <motion.button 
                className={`px-6 py-2 ${activeFilter === 'all' ? 'bg-gray-700' : 'bg-gray-300'} text-${activeFilter === 'all' ? 'white' : 'gray-700'} rounded-full hover:bg-opacity-90 transition-colors`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter('all')}
              >
                Tất cả
              </motion.button>
              <motion.button 
                className={`px-6 py-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors text-gray-500`}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/create-challenge">
                  Tạo thử thách mới +
                </Link>
              </motion.button>
            </div>
          </ScrollAnimation>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <AnimatePresence mode="wait">
              {filteredChallenges.slice(0, visibleCards).map((challenge, index) => (
                <motion.div 
                  key={challenge.id}
                  variants={fadeInUp} 
                  custom={index}
                  className="challenge-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 30, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: index * 0.05,
                    ease: [0.25, 0.1, 0.25, 1.0]
                  }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div 
                    className={`h-40 bg-${challenge.color} flex items-center justify-center overflow-hidden`}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0.9 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, repeat: 0 }}
                    >
                      {challenge.icon}
                    </motion.div>
                  </motion.div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <motion.span 
                        className={`bg-${challenge.bgColor || `${challenge.color} bg-opacity-10`} text-${challenge.textColor || challenge.color} text-xs font-semibold px-3 py-1 rounded-full`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {challenge.category}
                      </motion.span>
                      <span className="text-gray-500 text-sm">{challenge.duration}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 mb-4">{challenge.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{challenge.participants}</span>
                      <div className="flex gap-2">
                        <Link 
                          to={`/challenges/${challenge.id}`}
                          state={{ challenge: getSerializableChallenge(challenge) }}
                        >
                          <motion.button 
                            className={`bg-white text-${challenge.color} border border-${challenge.color} px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            Xem thêm
                          </motion.button>
                        </Link>
                        <motion.button 
                          className={`bg-${challenge.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleStartChallenge(challenge)}
                        >
                          Bắt đầu
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {!isChallengePage && (
          <ScrollAnimation className="text-center mt-12">
              <Link to="/challenges">
            <button className="bg-white border border-gray-300 text-gray-500 font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Xem thêm thử thách
            </button>
              </Link>
          </ScrollAnimation>
          )}
        </div>
      </section>
    </AnimatedPage>
  );
}

export default Challenges;
