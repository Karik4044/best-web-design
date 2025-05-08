import React from 'react';

function Badge() {
    return (
        <section id="badges" className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-4">Huy hiệu và thành tích</h2>
                <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Nhận huy hiệu đặc biệt khi hoàn thành các cột mốc quan trọng trong hành trình rèn luyện của bạn</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
                    {/* Badge 1 */}
                    <div className="badge flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg mb-3">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm11 14V6H4v10h12z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-center">7 ngày liên tiếp</h3>
                        <p className="text-xs text-gray-500 text-center">Tuần đầu tiên</p>
                    </div>
                    
                    {/* Badge 2 */}
                    <div className="badge flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg mb-3">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-center">14 ngày liên tiếp</h3>
                        <p className="text-xs text-gray-500 text-center">Hai tuần kiên trì</p>
                    </div>
                    
                    {/* Badge 3 */}
                    <div className="badge flex flex-col items-center opacity-50">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg mb-3">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-center">30 ngày liên tiếp</h3>
                        <p className="text-xs text-gray-500 text-center">Thói quen đã hình thành</p>
                    </div>
                    
                    {/* Badge 4 */}
                    <div className="badge flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg mb-3">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-center">Thử thách đầu tiên</h3>
                        <p className="text-xs text-gray-500 text-center">Hoàn thành 1 thử thách</p>
                    </div>
                    
                    {/* Badge 5 */}
                    <div className="badge flex flex-col items-center opacity-50">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center shadow-lg mb-3">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                        </div>
                        <h3 className="font-semibold text-center">Siêu sao</h3>
                        <p className="text-xs text-gray-500 text-center">Hoàn thành 5 thử thách</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Badge;
