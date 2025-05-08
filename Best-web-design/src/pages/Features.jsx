// pages/Features.js
import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-12 text-center">Tính năng chính</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="font-medium mb-2">Khám phá thử thách</h3>
          <p className="text-center text-gray-600 text-sm">
            Duyệt qua các thử thách gợi ý được phân loại theo mục tiêu, sức khỏe, kỹ năng, tinh thần và nhiều hơn nữa.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="font-medium mb-2">Tạo thử thách cá nhân</h3>
          <p className="text-center text-gray-600 text-sm">
            Tự tạo thử thách riêng với tên, mục tiêu, thời gian và cài đặt nhắc nhở qua email hoặc thông báo.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h3 className="font-medium mb-2">Theo dõi tiến trình</h3>
          <p className="text-center text-gray-600 text-sm">
            Dễ dàng đánh dấu hoàn thành mỗi ngày với thống kê số ngày liên tiếp và phần trăm hoàn thành.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-orange-100 p-4 rounded-full mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h3 className="font-medium mb-2">Huy hiệu và khen thưởng</h3>
          <p className="text-center text-gray-600 text-sm">
            Nhận huy hiệu khi hoàn thành chuỗi 7, 14 và 30 ngày, cùng với hệ thống điểm thành tích cá nhân.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">Tính năng chính</h2>
        <p className="text-gray-600 mb-8">
          Khám phá các thử thách được nhiều người lựa chọn để cải thiện cuộc sống hàng ngày
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-2">Khám phá thử thách</h3>
              <p className="text-gray-600">
                Duyệt qua các thử thách gợi ý được phân loại theo mục tiêu, sức khỏe, kỹ năng, tinh thần và nhiều hơn nữa. Tìm kiếm thử thách phù hợp với mục tiêu của bạn.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tạo thử thách cá nhân</h3>
              <p className="text-gray-600">
                Tự tạo thử thách riêng với tên, mục tiêu, thời gian và cài đặt nhắc nhở qua email hoặc thông báo. Tùy chỉnh thử thách theo nhu cầu cá nhân của bạn.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-start mb-4">
            <div className="bg-orange-100 p-4 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium mb-2">Theo dõi tiến trình</h3>
              <p className="text-gray-600">
                Dễ dàng đánh dấu hoàn thành mỗi ngày với thống kê số ngày liên tiếp và phần trăm hoàn thành. Xem biểu đồ tiến trình và phân tích thành tích của bạn.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <Link to="/challenges" className="bg-orange-500 text-white font-medium px-8 py-3 rounded-md hover:bg-orange-600">
          Khám phá thử thách ngay
        </Link>
      </div>
    </div>
  );
};

export default Features;