// pages/PopularChallenges.js
import React from 'react';
import { Link } from 'react-router-dom';

const PopularChallenges = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4 text-center">Thử thách phổ biến</h1>
      <p className="text-center text-gray-600 mb-12">
        Khám phá các thử thách được nhiều người lựa chọn để cải thiện cuộc sống hàng ngày
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-orange-100 rounded-lg overflow-hidden">
          <div className="h-32 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="bg-white p-6">
            <div className="text-orange-500 text-sm font-medium mb-2">Sức khỏe</div>
            <h3 className="font-bold text-lg mb-2">Tập thể dục mỗi ngày</h3>
            <p className="text-gray-600 text-sm mb-4">Dành 15-30 phút mỗi ngày để vận động cơ thể, tăng cường sức khỏe và năng lượng.</p>
            <div className="mb-4 flex items-center text-gray-500 text-sm">
              <span>2,145 người tham gia</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600">
              Bắt đầu
            </button>
          </div>
        </div>
        
        <div className="bg-green-100 rounded-lg overflow-hidden">
          <div className="h-32 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="bg-white p-6">
            <div className="text-green-500 text-sm font-medium mb-2">Kỹ năng</div>
            <h3 className="font-bold text-lg mb-2">Đọc sách 15 phút</h3>
            <p className="text-gray-600 text-sm mb-4">Dành 15 phút mỗi ngày để đọc sách, mở rộng kiến thức và phát triển tư duy.</p>
            <div className="mb-4 flex items-center text-gray-500 text-sm">
              <span>1,879 người tham gia</span>
            </div>
            <button className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">
              Bắt đầu
            </button>
          </div>
        </div>
        
        <div className="bg-blue-100 rounded-lg overflow-hidden">
          <div className="h-32 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div className="bg-white p-6">
            <div className="text-blue-500 text-sm font-medium mb-2">Tinh thần</div>
            <h3 className="font-bold text-lg mb-2">Thiền 10 phút</h3>
            <p className="text-gray-600 text-sm mb-4">Dành 10 phút mỗi ngày để thiền, giảm căng thẳng và cải thiện sức khỏe tinh thần.</p>
            <div className="mb-4 flex items-center text-gray-500 text-sm">
              <span>1,456 người tham gia</span>
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
              Bắt đầu
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center mb-16">
        <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-md hover:bg-gray-50">
          Xem thêm thử thách
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-8">Tạo thử thách mới</h2>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-bold text-lg mb-6">Tạo thử thách cá nhân</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Tên thử thách</label>
              <input 
                type="text" 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                placeholder="Ví dụ: Dậy sớm 6h mỗi ngày"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Danh mục</label>
              <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Sức khỏe</option>
                <option>Kỹ năng</option>
                <option>Tinh thần</option>
                <option>Học tập</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Thời gian</label>
              <div className="flex space-x-4">
                <button type="button" className="flex-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50">7 ngày</button>
                <button type="button" className="flex-1 border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50">14 ngày</button>
                <button type="button" className="flex-1 bg-orange-500 text-white rounded-md px-3 py-2 hover:bg-orange-600">30 ngày</button>
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-medium mb-2">Mô tả ngắn</label>
              <textarea 
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                rows="4"
                placeholder="Mô tả ngắn về thử thách của bạn"
              ></textarea>
            </div>
            
            <div className="mb-6">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-gray-700 text-sm">Nhắc nhở hàng ngày</span>
              </label>
            </div>
            
            <button 
              type="button"
              className="w-full bg-orange-500 text-white font-medium py-3 rounded-md hover:bg-orange-600"
            >
              Tạo thử thách
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PopularChallenges;