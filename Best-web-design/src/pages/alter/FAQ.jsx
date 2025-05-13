import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const useScroll = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return null;
};

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqItems = [
        {
            question: "Làm thế nào để bắt đầu sử dụng nền tảng?",
            answer: "Để bắt đầu, bạn cần đăng ký tài khoản bằng email hoặc tài khoản mạng xã hội. Sau khi đăng ký, bạn có thể hoàn thiện hồ sơ cá nhân và bắt đầu tham gia các thử thách."
        },
        {
            question: "Cách tính điểm và xếp hạng như thế nào?",
            answer: "Điểm được tính dựa trên việc hoàn thành các thử thách hàng ngày và các hoạt động khác. Mỗi hoạt động có số điểm khác nhau tùy thuộc vào độ khó. Xếp hạng được cập nhật theo thời gian thực."
        },
        {
            question: "Làm sao để nhận được huy hiệu?",
            answer: "Huy hiệu được trao khi bạn đạt được các mốc thành tích nhất định. Ví dụ: hoàn thành 7 ngày liên tiếp, đạt 1000 điểm, hoặc hoàn thành một thử thách đặc biệt."
        },
        {
            question: "Có thể thay đổi mục tiêu không?",
            answer: "Có, bạn có thể thay đổi mục tiêu của mình bất cứ lúc nào. Tuy nhiên, việc thay đổi mục tiêu có thể ảnh hưởng đến tiến độ và điểm số của bạn."
        },
        {
            question: "Làm thế nào để liên hệ với hỗ trợ?",
            answer: "Bạn có thể liên hệ với chúng tôi thông qua form liên hệ trên trang web, email hỗ trợ, hoặc các kênh mạng xã hội của chúng tôi. Đội ngũ hỗ trợ sẽ phản hồi trong vòng 24 giờ."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

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
                            Câu hỏi thường gặp
                        </motion.h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Tìm câu trả lời cho những câu hỏi phổ biến về nền tảng của chúng tôi.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg overflow-hidden shadow-lg"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                                    <motion.span
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        className="text-orange-500"
                                    >
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </motion.span>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openIndex === index ? "auto" : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-4">
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-gray-600 mb-6">
                            Không tìm thấy câu trả lời cho câu hỏi của bạn?
                        </p>
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
                </motion.div>
            </div>
        </div>
    );
}

export default FAQ;