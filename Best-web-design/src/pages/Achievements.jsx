// pages/Achievements.js
import React from 'react';

const Achievements = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Huy hiệu và thành tích</h1>
      <p className="text-center text-gray-600 mb-12">
        Nhận huy hiệu đặc biệt khi hoàn thành các cột mốc quan trọng trong hành trình rèn luyện của bạn
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-medium mb-1 text-center">7 ngày liên tiếp</h3>
          <p className="text-sm text-gray-500 text-center">Tuần đầu tiên</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-medium mb-1 text-center">14 ngày liên tiếp</h3>
          <p className="text-sm text-gray-500 text-center">Hai tuần liên tục</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="font-medium mb-1 text-center">30 ngày liên tiếp</h3>
          <p className="text-sm text-gray-500 text-center">Thói quen đã hình thành</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="font-medium mb-1 text-center">Thử thách đầu tiên</h3>
          <p className="text-sm text-gray-500 text-center">Hoàn thành 1 thử thách</p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>
          <h3 className="font-medium mb-1 text-center">Siêu sao</h3>
          <p className="text-sm text-gray-500 text-center">Hoàn thành 5 thử thách</p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-10">
        <h2 className="font-bold text-xl mb-6">Tạo thử thách mới</h2>
        <p className="text-gray-600 mb-6">
          Tiếp tục phát triển bản thân với các thử thách mới và thu thập thêm thành tích
        </p>
        <button className="bg-orange-500 text-white font-medium px-6 py-3 rounded-md hover:bg-orange-600">
          Tạo thử thách
        </button>
      </div>
    </div>
  );
};

export default Achievements;