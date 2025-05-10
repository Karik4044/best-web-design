import React from 'react';
import { motion } from 'framer-motion';

function Clause() {
    const sections = [
        {
            title: "1. Điều khoản chung",
            content: "Bằng việc truy cập và sử dụng nền tảng này, bạn đồng ý tuân thủ và chịu ràng buộc bởi các điều khoản và điều kiện sau đây. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng không sử dụng nền tảng của chúng tôi."
        },
        {
            title: "2. Tài khoản người dùng",
            content: "Để sử dụng đầy đủ các tính năng của nền tảng, bạn cần đăng ký tài khoản. Bạn chịu trách nhiệm duy trì tính bảo mật của tài khoản và mật khẩu của mình. Bạn đồng ý thông báo ngay lập tức cho chúng tôi về bất kỳ việc sử dụng trái phép nào."
        },
        {
            title: "3. Quyền sở hữu trí tuệ",
            content: "Tất cả nội dung trên nền tảng, bao gồm nhưng không giới hạn ở văn bản, hình ảnh, logo, thiết kế, đều thuộc quyền sở hữu của chúng tôi hoặc được cấp phép sử dụng. Bạn không được phép sao chép, phân phối hoặc sử dụng nội dung này cho mục đích thương mại mà không có sự cho phép bằng văn bản."
        },
        {
            title: "4. Bảo mật thông tin",
            content: "Chúng tôi cam kết bảo vệ thông tin cá nhân của bạn theo chính sách bảo mật của chúng tôi. Chúng tôi sẽ không chia sẻ thông tin của bạn với bên thứ ba mà không có sự đồng ý của bạn, trừ khi được yêu cầu bởi pháp luật."
        },
        {
            title: "5. Giới hạn trách nhiệm",
            content: "Nền tảng được cung cấp 'nguyên trạng' và chúng tôi không đảm bảo rằng nó sẽ không bị gián đoạn hoặc không có lỗi. Chúng tôi không chịu trách nhiệm về bất kỳ thiệt hại nào phát sinh từ việc sử dụng nền tảng."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 pt-20">
            <div className="container mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-12">
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
                                background: "linear-gradient(to right, #FF7F50, #FF9F7F, #FFD700, #3EB489, #87CEEB)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textFillColor: "transparent",
                                backgroundSize: "300% auto"
                            }}
                        >
                            Điều khoản sử dụng
                            <svg 
                                className="w-10 h-10 inline-block ml-2 mb-1" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    fill="url(#document-gradient)"
                                />
                                <defs>
                                    <linearGradient id="document-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#FF7F50" />
                                        <stop offset="100%" stopColor="#FFD700" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Vui lòng đọc kỹ các điều khoản và điều kiện sau đây trước khi sử dụng nền tảng của chúng tôi.
                        </p>
                    </div>

                    <div className="space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-800 rounded-lg p-6 shadow-md"
                            >
                                <h2 className="text-xl font-semibold text-white mb-4">{section.title}</h2>
                                <p className="text-gray-300 leading-relaxed">{section.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-300 mb-6">
                            Nếu bạn có bất kỳ câu hỏi nào về điều khoản sử dụng, vui lòng liên hệ với chúng tôi.
                        </p>
                        <motion.button
                            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Liên hệ với chúng tôi
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Clause;
