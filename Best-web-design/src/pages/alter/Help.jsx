import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const useScroll = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };
  
function Help() {
    const faqItems = [
        {
            question: "Làm thế nào để bắt đầu?",
            answer: "Để bắt đầu, bạn cần đăng ký tài khoản và hoàn thành hồ sơ cá nhân. Sau đó, bạn có thể tham gia các thử thách và theo dõi tiến độ của mình."
        },
        {
            question: "Cách tính điểm như thế nào?",
            answer: "Điểm được tính dựa trên việc hoàn thành các thử thách và mục tiêu hàng ngày. Mỗi hoạt động có một số điểm khác nhau tùy thuộc vào độ khó."
        },
        {
            question: "Làm sao để nhận huy hiệu?",
            answer: "Huy hiệu được trao khi bạn đạt được các mốc thành tích nhất định. Ví dụ: hoàn thành 7 ngày liên tiếp, đạt 1000 điểm, hoặc hoàn thành một thử thách đặc biệt."
        },
        {
            question: "Có thể thay đổi mục tiêu không?",
            answer: "Có, bạn có thể thay đổi mục tiêu của mình bất cứ lúc nào. Tuy nhiên, việc thay đổi mục tiêu có thể ảnh hưởng đến tiến độ và điểm số của bạn."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
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
                                background: "linear-gradient(to right, #FF7F50, #FF9F7F, #FFD700)",
                                WebkitBackgroundClip: "text",
                                backgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textFillColor: "transparent",
                                backgroundSize: "300% auto"
                            }}
                        >
                            Trung tâm trợ giúp
                        </motion.h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tìm câu trả lời cho các câu hỏi thường gặp và hướng dẫn sử dụng nền tảng của chúng tôi.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg p-6 shadow-lg"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.question}</h3>
                                <p className="text-gray-600">{item.answer}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 text-center"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Không tìm thấy câu trả lời?</h2>
                        <p className="text-gray-600 mb-6">
                            Nếu bạn không tìm thấy câu trả lời cho câu hỏi của mình, hãy liên hệ với chúng tôi.
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Liên hệ hỗ trợ
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

export default Help;