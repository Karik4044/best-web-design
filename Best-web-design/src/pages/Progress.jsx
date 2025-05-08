import React from 'react';

function Progress() {
    return (
        <section id="progress" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6">Theo dõi tiến trình hằng ngày</h2>
                        <p className="text-gray-600 mb-8">Dễ dàng đánh dấu hoàn thành mỗi ngày và xem thống kê chi tiết về quá trình rèn luyện của bạn.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Đánh dấu hoàn thành</h3>
                                    <p className="text-gray-600 text-sm">Tích vào mỗi ngày khi bạn hoàn thành thử thách</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Thống kê trực quan</h3>
                                    <p className="text-gray-600 text-sm">Xem biểu đồ tiến trình và phần trăm hoàn thành</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Chuỗi ngày liên tiếp</h3>
                                    <p className="text-gray-600 text-sm">Theo dõi số ngày liên tiếp bạn đã hoàn thành thử thách</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                        <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-semibold">Tập thể dục mỗi ngày</h3>
                                <span className="bg-primary bg-opacity-10 text-primary text-xs font-semibold px-3 py-1 rounded-full">Ngày 15/30</span>
                            </div>
                            
                            {/* Calendar Grid */}
                            <div className="grid grid-cols-7 gap-2 mb-6">
                                {/* Day labels */}
                                <div className="text-center text-gray-500 text-xs">T2</div>
                                <div className="text-center text-gray-500 text-xs">T3</div>
                                <div className="text-center text-gray-500 text-xs">T4</div>
                                <div className="text-center text-gray-500 text-xs">T5</div>
                                <div className="text-center text-gray-500 text-xs">T6</div>
                                <div className="text-center text-gray-500 text-xs">T7</div>
                                <div className="text-center text-gray-500 text-xs">CN</div>
                                
                                {/* Days 1-7 */}
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">1</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">2</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">3</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">4</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">5</div>
                                <div className="h-10 rounded-md bg-gray-200 flex items-center justify-center text-gray-400">6</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">7</div>
                                
                                {/* Days 8-14 */}
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">8</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">9</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">10</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">11</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">12</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">13</div>
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">14</div>
                                
                                {/* Days 15-21 */}
                                <div className="h-10 rounded-md bg-primary flex items-center justify-center text-white">15</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">16</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">17</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">18</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">19</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">20</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">21</div>
                                
                                {/* Days 22-28 */}
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">22</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">23</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">24</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">25</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">26</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">27</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">28</div>
                                
                                {/* Days 29-30 */}
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">29</div>
                                <div className="h-10 rounded-md bg-gray-100 flex items-center justify-center text-gray-400">30</div>
                            </div>
                            
                            {/* Progress Stats */}
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Tiến độ</span>
                                <span className="text-sm font-medium">50%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
                                <div className="bg-primary h-2.5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                            
                            <div className="flex justify-between">
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">14</p>
                                    <p className="text-xs text-gray-500">Ngày liên tiếp</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">15</p>
                                    <p className="text-xs text-gray-500">Hoàn thành</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-primary">1</p>
                                    <p className="text-xs text-gray-500">Bỏ lỡ</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Progress;

