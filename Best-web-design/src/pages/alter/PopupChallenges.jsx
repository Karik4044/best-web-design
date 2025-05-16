import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';

function PopupChallenges() {
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const [challenge] = useState(location.state?.challenge || null);
    const [loading, setLoading] = useState(!challenge);
    
    // Get icon based on category
    const getCategoryIcon = (category) => {
        switch(category) {
            case 'Sức khỏe':
                return (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path>
                    </svg>
                );
            case 'Kỹ năng':
                return (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                );
            case 'Tinh thần':
                return (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                );
            case 'Học tập':
                return (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                );
            default:
                return (
                    <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11.414 10l1.293 1.293a1 1 0 001.414 0z" clipRule="evenodd"></path>
                    </svg>
                );
        }
    };
    
    const handleStartChallenge = () => {
        // Logic to start the challenge
        console.log("Starting challenge:", challenge.id);
        // You could navigate to a different page or show a confirmation
        alert(`Bạn đã bắt đầu thử thách: ${challenge.title}`);
    };

    // Auto-start challenge if 'action' is 'start'
    useEffect(() => {
        if (challenge && location.state?.action === 'start') {
            handleStartChallenge();
        }
    }, [challenge]);

    // Simulate fetching challenge data if not available in location state
    useEffect(() => {
        if (!challenge && id) {
            // In a real app, you would fetch the challenge from your API
            // This is just a simulation for demo purposes
            const fetchChallengeData = async () => {
                setLoading(true);
                try {
                    // Simulate API call delay
                    await new Promise(resolve => setTimeout(resolve, 500));
                    
                    // This would be replaced with actual API call
                    // For now, we'll just navigate back since we don't have the data
                    console.log("Challenge data not available, would fetch from API with ID:", id);
                    setLoading(false);
                    
                    // In a real app, you would set the challenge data here
                    // setChallenge(fetchedChallenge);
                    
                    // For demo, we'll just navigate back if no data is available
                    navigate(-1);
                } catch (error) {
                    console.error("Error fetching challenge data:", error);
                    setLoading(false);
                    navigate(-1);
                }
            };
            
            fetchChallengeData();
        }
    }, [challenge, id, navigate]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 max-w-lg w-full text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
                    <h2 className="text-xl font-semibold">Đang tải thông tin thử thách...</h2>
                </div>
            </div>
        );
    }

    if (!challenge) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white rounded-xl p-8 max-w-lg w-full">
                    <h2 className="text-2xl font-bold mb-4">Thử thách không tồn tại</h2>
                    <p className="text-gray-600 mb-6">Thử thách bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
                    <div className="flex justify-end">
                        <button 
                            onClick={() => navigate(-1)}
                            className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                        >
                            Quay lại
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // Get the appropriate icon for this challenge's category
    const icon = getCategoryIcon(challenge.category);

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 mt-14">
            <motion.div 
                className="bg-white rounded-xl overflow-hidden max-w-4xl w-full mx-auto shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
            >
                <div className={`h-48 bg-${challenge.color} flex items-center justify-center`}>
                    <div className="w-24 h-24 text-white">
                        {icon}
                    </div>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`bg-${challenge.bgColor || `${challenge.color} bg-opacity-10`} text-${challenge.textColor || challenge.color} text-sm font-semibold px-3 py-1 rounded-full`}>
                                    {challenge.category}
                                </span>
                                <span className="text-gray-500">{challenge.duration}</span>
                            </div>
                            <h1 className="text-3xl font-bold mb-2">{challenge.title}</h1>
                            <p className="text-gray-600 mb-2">{challenge.participants}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-xl font-semibold mb-4">Mô tả thử thách</h2>
                        <p className="text-gray-700 mb-6">{challenge.description}</p>
                        
                        <h2 className="text-xl font-semibold mb-4">Lợi ích khi tham gia</h2>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                            <li>Cải thiện sức khỏe thể chất và tinh thần</li>
                            <li>Tạo thói quen tốt và kiên trì</li>
                            <li>Tham gia cộng đồng những người có cùng mục tiêu</li>
                            <li>Nhận huy hiệu khi hoàn thành thử thách</li>
                        </ul>
                        
                        <h2 className="text-xl font-semibold mb-4">Cách thức tham gia</h2>
                        <ol className="list-decimal pl-5 space-y-2 text-gray-700 mb-6">
                            <li>Bấm "Bắt đầu thử thách" bên dưới</li>
                            <li>Đặt mục tiêu cá nhân của bạn</li>
                            <li>Hoàn thành hoạt động hàng ngày</li>
                            <li>Cập nhật tiến độ trên ứng dụng</li>
                            <li>Chia sẻ thành tích với bạn bè</li>
                        </ol>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <button 
                            onClick={() => navigate(-1)}
                            className="w-full sm:w-auto bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                        >
                            Quay lại
                        </button>
                        <motion.button 
                            className={`w-full sm:w-auto bg-${challenge.color} text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleStartChallenge}
                        >
                            Bắt đầu thử thách
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}

export default PopupChallenges;
