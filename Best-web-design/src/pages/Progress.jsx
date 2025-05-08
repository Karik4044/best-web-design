// pages/Progress.js
import React from 'react';

const Progress = () => {
  // Mock data for calendar
  const currentMonth = Array(30).fill(null).map((_, index) => index + 1);
  const completedDays = [1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Theo dõi tiến trình hàng ngày</h1>
      <p className="text-center text-gray-600 mb-12">
        Dễ dàng đánh dấu hoàn thành mỗi ngày và xem thống kê chi tiết về quá trình rèn luyện của bạn.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-bold text-xl mb-6">Tập thể dục mỗi ngày</h2>
          <div className="mb-6">
            <h3 className="font-medium text-gray-600 mb-4">Ngày 16/30</h3>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {currentMonth.map((day) => (
                <div 
                  key={day} 
                  className={`flex items-center justify-center rounded-md p-2 text-sm ${
                    completedDays.includes(day) 
                      ? 'bg-orange-500 text-white' 
                      : day <= 16 
                        ? 'bg-gray-200 text-gray-400' 
                        : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Tiến độ</span>
                <span>50%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
            
            <div className="flex justify-between items-center pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">14</div>
                <div className="text-xs text-gray-500">Ngày liên tiếp</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">15</div>
                <div className="text-xs text-gray-500">Hoàn thành</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-700">1</div>
                <div className="text-xs text-gray-500">Bỏ lỡ</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="font-bold text-xl mb-4">Đánh dấu hoàn thành</h2>
          <p className="text-gray-600 mb-4">Tích vào mỗi ngày khi bạn hoàn thành thử thách</p>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="flex items-center">
                  <input type="checkbox" checked className="mr-2" />
                  <span>Đánh dấu hoàn thành</span>
                </label>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Thống kê trực quan</h3>
              <p className="text-gray-600 text-sm mb-2">Xem biểu đồ tiến trình và phần trăm hoàn thành</p>
            </div>
            
            <div>
              <h3 className="font-medium mb-3">Chuỗi ngày liên tiếp</h3>
              <p className="text-gray-600 text-sm mb-2">Theo dõi số ngày liên tiếp bạn đã hoàn thành thử thách</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;