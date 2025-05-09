import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Challenges.css'; // Import CSS for animations

function Challenges() {
    const [showMoreChallenges, setShowMoreChallenges] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleShowMoreChallenges = () => {
        setShowMoreChallenges(!showMoreChallenges);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <section id="challenges" className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Thử thách phổ biến</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Khám phá các thử thách được nhiều người lựa chọn để cải thiện cuộc sống hàng ngày</p>

                <TransitionGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Existing challenges */}
                    <div className="challenge-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="h-40 bg-primary flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-primary bg-opacity-10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Sức khỏe</span>
                                <span className="text-gray-500 text-sm">30 ngày</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Tập thể dục mỗi ngày</h3>
                            <p className="text-gray-600 mb-4">Dành 15-30 phút mỗi ngày để vận động cơ thể, tăng cường sức khỏe và năng lượng.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">2,145 người tham gia</span>
                                <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">Bắt đầu</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="challenge-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="h-40 bg-secondary flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-secondary bg-opacity-10 text-secondary text-xs font-semibold px-3 py-1 rounded-full">Kỹ năng</span>
                                <span className="text-gray-500 text-sm">30 ngày</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Đọc sách 15 phút</h3>
                            <p className="text-gray-600 mb-4">Dành 15 phút mỗi ngày để đọc sách, mở rộng kiến thức và phát triển tư duy.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">1,879 người tham gia</span>
                                <button className="bg-secondary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">Bắt đầu</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="challenge-card bg-white rounded-xl shadow-md overflow-hidden">
                        <div className="h-40 bg-blue-500 flex items-center justify-center">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                            </svg>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-3">
                                <span className="bg-blue-100 bg-opacity-10 text-blue-500 text-xs font-semibold px-3 py-1 rounded-full">Tinh thần</span>
                                <span className="text-gray-500 text-sm">30 ngày</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Thiền 10 phút</h3>
                            <p className="text-gray-600 mb-4">Dành 10 phút mỗi ngày để thiền, giảm căng thẳng và cải thiện sức khỏe tinh thần.</p>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-500">1,456 người tham gia</span>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors">Bắt đầu</button>
                            </div>
                        </div>
                    </div>

                    {/* New challenges */}
                    {showMoreChallenges && (
                        [
                            { color: 'bg-red-500', title: 'Học kỹ năng mới', description: 'Dành 20 phút mỗi ngày để học một kỹ năng mới.', participants: '1,200 người tham gia', spanStyle: 'bg-red-100 bg-opacity-10 text-red-500' },
                            { color: 'bg-green-500', title: 'Chạy bộ', description: 'Chạy bộ 2km mỗi ngày để cải thiện sức khỏe.', participants: '950 người tham gia', spanStyle: 'bg-green-100 bg-opacity-10 text-green-500' },
                            { color: 'bg-yellow-500', title: 'Viết nhật ký', description: 'Viết nhật ký mỗi ngày để ghi lại cảm xúc và suy nghĩ.', participants: '800 người tham gia', spanStyle: 'bg-yellow-100 bg-opacity-10 text-yellow-500' },
                            { color: 'bg-purple-500', title: 'Học ngoại ngữ', description: 'Dành 15 phút mỗi ngày để học một ngôn ngữ mới.', participants: '1,100 người tham gia', spanStyle: 'bg-purple-100 bg-opacity-10 text-purple-500' },
                            { color: 'bg-pink-500', title: 'Nấu ăn', description: 'Thử nấu một món ăn mới mỗi tuần.', participants: '700 người tham gia', spanStyle: 'bg-pink-100 bg-opacity-10 text-pink-500' },
                            { color: 'bg-teal-500', title: 'Tập yoga', description: 'Dành 10 phút mỗi ngày để tập yoga.', participants: '600 người tham gia', spanStyle: 'bg-teal-100 bg-opacity-10 text-teal-500' }
            
                        ].map((challenge, index) => (
                            <CSSTransition key={index} timeout={300} classNames="fade">
                                <div className="challenge-card bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className={`h-40 ${challenge.color} flex items-center justify-center`}>
                                        <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                        </svg>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${challenge.spanStyle}`}>Thử thách</span>
                                            <span className="text-gray-500 text-sm">30 ngày</span>
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                                        <p className="text-gray-600 mb-4">{challenge.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm text-gray-500">{challenge.participants}</span>
                                            <button className={`${challenge.color} text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors`}>Bắt đầu</button>
                                        </div>
                                    </div>
                                </div>
                            </CSSTransition>
                        ))
                    )}
                </TransitionGroup>

                <div className="text-center mt-12">
                    <button onClick={handleShowMoreChallenges} className="bg-white border border-gray-300 text-dark font-medium px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                        {showMoreChallenges ? 'Thu gọn' : 'Xem thêm thử thách'}
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Challenges;
