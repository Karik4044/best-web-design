import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Team() { 
    const teamMembers = [
        {
            name: 'Huỳnh Ngọc Bảo Trường',
            role: 'Front-end, Design',
            image: '/src/assets/489909405_1230454181839521_2184527119995905431_n.jpg',
            bio: 'Đam mê lập trình và thiết kế. Luôn tìm tòi học hỏi để phát triển kỹ năng mới.',
        },
        {
            name: 'Võ Văn Khánh',
            role: 'Front-end, Design',
            image: '/src/assets/fa65411d6c03730a8cb16f0cbf713e0e.jpg',
            bio: 'Niềm đam mê lớn về công nghệ. Thích khám phá và áp dụng các xu hướng mới trong lĩnh vực web.',
        },
        {
            name: 'Đinh Văn Sang',
            role: 'Front-end, Design',
            image: '/src/assets/446847a4-8a18-4829-9172-d80b65e61940.jpg',
            bio: 'Năng động và sáng tạo. Luôn nỗ lực học hỏi để trở thành một nhà phát triển web chuyên nghiệp.',
        },
    ];

    return (
        <div className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h1 
                        className="text-4xl font-bold text-gray-800 mb-4"
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
                        Đội ngũ của chúng tôi
                    </motion.h1>
                    <motion.p 
                        className="text-xl max-w-2xl mx-auto mb-8 text-gray-600"
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
                            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="relative w-full">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-64 object-cover"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/300x400?text=Team+Member';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                            </div>
                            <div className="p-6 text-center w-full">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-orange-500 font-medium mb-3">{member.role}</p>
                                <p className="text-gray-600 mb-4">{member.bio}</p>
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
                                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
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
