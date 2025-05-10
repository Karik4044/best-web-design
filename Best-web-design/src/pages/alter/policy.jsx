import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const useScroll = () => {
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    return null;
  };
function Policy() {
    const sections = [
        {
            title: "1. Thông tin chúng tôi thu thập",
            content: "Chúng tôi thu thập thông tin cá nhân của bạn khi bạn đăng ký tài khoản, sử dụng dịch vụ hoặc liên hệ với chúng tôi. Thông tin này bao gồm tên, email, số điện thoại và thông tin đăng nhập."
        },
        {
            title: "2. Cách chúng tôi sử dụng thông tin",
            content: "Chúng tôi sử dụng thông tin của bạn để cung cấp và cải thiện dịch vụ, gửi thông báo quan trọng, và tùy chỉnh trải nghiệm người dùng. Chúng tôi cam kết không sử dụng thông tin của bạn cho mục đích khác mà không có sự đồng ý của bạn."
        },
        {
            title: "3. Bảo mật thông tin",
            content: "Chúng tôi áp dụng các biện pháp bảo mật tiên tiến để bảo vệ thông tin cá nhân của bạn khỏi truy cập trái phép, thay đổi hoặc phá hủy. Tuy nhiên, không có phương pháp truyền tải qua internet hoặc lưu trữ điện tử nào là an toàn 100%."
        },
        {
            title: "4. Chia sẻ thông tin",
            content: "Chúng tôi không bán, trao đổi hoặc chuyển thông tin cá nhân của bạn cho bên thứ ba mà không có sự đồng ý của bạn. Chúng tôi chỉ chia sẻ thông tin khi cần thiết để tuân thủ pháp luật hoặc bảo vệ quyền lợi của chúng tôi."
        },
        {
            title: "5. Quyền của người dùng",
            content: "Bạn có quyền truy cập, sửa đổi hoặc xóa thông tin cá nhân của mình bất cứ lúc nào. Bạn cũng có quyền từ chối việc thu thập và sử dụng thông tin của mình."
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
                            
                            Chính sách bảo mật
                            <svg 
                                className="w-10 h-10 inline-block mr-2 mb-1" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path 
                                    d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                    fill="url(#shield-gradient)"
                                />
                                <defs>
                                    <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#FF7F50" />
                                        <stop offset="100%" stopColor="#FF4500" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </motion.h1>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Chúng tôi cam kết bảo vệ quyền riêng tư của bạn. Vui lòng đọc kỹ chính sách bảo mật này để hiểu cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn.
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
                            Nếu bạn có bất kỳ câu hỏi nào về chính sách bảo mật của chúng tôi, vui lòng liên hệ với chúng tôi.
                        </p>
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
                </motion.div>
            </div>
        </div>
    );
}

export default Policy;
