// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">
              Một ngày một bước – bạn sẽ đi xa hơn bạn nghĩ
            </h1>
            <p className="text-lg mb-8">
              Nền tảng giúp bạn xây dựng thói quen tích cực và phát triển bản thân qua các thử thách 30 ngày.
            </p>
            <div className="flex space-x-4">
              <Link to="/challenges" className="bg-white text-orange-500 font-medium px-6 py-3 rounded-md hover:bg-orange-50">
                Bắt đầu ngay
              </Link>
              <Link to="/features" className="border border-white text-white px-6 py-3 rounded-md hover:bg-orange-600">
                Tìm hiểu thêm
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto">
              <div className="text-center bg-orange-500 text-white py-3 px-4 rounded-md mb-4">
                ChallengeMe
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Tập thể dục mỗi ngày</span>
                  <span>26% hoàn thành</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '26%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Đọc sách 15 phút</span>
                  <span>40% hoàn thành</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-gray-700 mb-1">
                  <span>Học từ vựng mới</span>
                  <span>18% hoàn thành</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '18%' }}></div>
                </div>
              </div>
              <div className="flex justify-center mt-6">
                <button className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Tính năng chính</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Sẵn sàng thay đổi bản thân?</h2>
          <p className="mb-8">
            Bắt đầu thử thách 30 ngày ngay hôm nay và hình thành thói quen tích cực cho cuộc sống của bạn.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/challenges" className="bg-white text-orange-500 font-medium px-6 py-3 rounded-md hover:bg-orange-50">
              Bắt đầu ngay
            </Link>
            <Link to="/challenges" className="border border-white text-white px-6 py-3 rounded-md hover:bg-orange-600">
              Khám phá thử thách
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;