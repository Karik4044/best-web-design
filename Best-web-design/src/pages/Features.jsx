import React from 'react';

function Features() {
    return (
        <section id="features" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Tính năng chính</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Feature 1 */}
                    <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Khám phá thử thách</h3>
                        <p className="text-gray-600">Duyệt qua các thử thách gợi ý được phân loại theo mục tiêu: sức khỏe, kỹ năng, tinh thần và nhiều hơn nữa.</p>
                    </div>
                    
                    {/* Feature 2 */}
                    <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Tạo thử thách cá nhân</h3>
                        <p className="text-gray-600">Tự tạo thử thách riêng với tên, mục tiêu, thời gian và cài đặt nhắc nhở qua email hoặc thông báo.</p>
                    </div>
                    
                    {/* Feature 3 */}
                    <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Theo dõi tiến trình</h3>
                        <p className="text-gray-600">Dễ dàng đánh dấu hoàn thành mỗi ngày và xem thống kê về số ngày liên tiếp và phần trăm hoàn thành.</p>
                    </div>
                    
                    {/* Feature 4 */}
                    <div className="feature-card bg-white rounded-xl shadow-md p-6 border border-gray-100">
                        <div className="bg-primary bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-3">Huy hiệu và khen thưởng</h3>
                        <p className="text-gray-600">Nhận huy hiệu khi hoàn thành chuỗi 7, 14 và 30 ngày, cùng với hệ thống điểm thành tích cá nhân.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Features;
