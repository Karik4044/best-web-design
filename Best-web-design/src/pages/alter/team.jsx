import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Team() {
    const teamMembers = [
        {
            name: 'Huỳnh Ngọc Bảo Trường',
            role: 'Bochi-con',
            image: '/src/assets/489909405_1230454181839521_2184527119995905431_n.jpg',
            bio: 'CEO-Founder Công ty trách nghiệm hữu hạn 1 mình tôi',
            social: {
                twitter: '#',
                instagram: '#',
                facebook: '#'
            }
        },
        {
            name: 'Võ Văn Khánh',
            role: 'Cái bang',
            image: '/src/assets/fa65411d6c03730a8cb16f0cbf713e0e.jpg',
            bio: 'Đẹp trai vô đối, thích gái đít bự, con trai Yilong Ma',
            social: {
                twitter: '#',
                instagram: '#',
                facebook: '#'
            }
        },
        {
            name: 'Đinh Văn Sang',
            role: 'Bang Chủ',
            image: '/src/assets/73367019-d6ef-4722-9fa0-0255fafae8fa.jpg',
            bio: 'Đẹp gái khoai to, Master pha thuốc lắc, Bang chủ các bang',
            social: {
                twitter: '#',
                instagram: '#',
                facebook: '#'
            }
        },
    ];

    return (
        <div className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
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
                            background: "linear-gradient(to right, #FF7F50, #FF9F7F, #FFD700, #3EB489, #87CEEB)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            textFillColor: "transparent",
                            backgroundSize: "300% auto"
                        }}
                    >
                        Đội ngũ của chúng tôi
                    </motion.h1>
                    <motion.p 
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Những người đam mê giúp bạn xây dựng thói quen tốt và phát triển bản thân mỗi ngày.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <motion.div 
                            key={index}
                            className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                        >
                            <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-64 object-cover" // Giảm chiều cao từ h-64 xuống h-48
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x400?text=Team+Member';
                                }}
                            />
                            <div className="p-6 text-center w-full">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                                <p className="text-primary font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.bio}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="text-center mt-16">
                <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Link to="/contact">
                            <motion.button
                                className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Liên hệ với chúng tôi
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Team;
