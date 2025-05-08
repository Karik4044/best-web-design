// pages/CreateChallenge.js
import React, { useState } from 'react';

const CreateChallenge = () => {
  const [challengeType, setChallengeType] = useState('personal');
  const [duration, setDuration] = useState(30);
  const [reminderEnabled, setReminderEnabled] = useState(false);
  const [challengeName, setChallengeName] = useState('');
  const [category, setCategory] = useState('Sức khỏe');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Tạo object chứa thông tin thử thách
    const challengeData = {
      name: challengeName,
      category,
      duration,
      description,
      reminderEnabled,
      type: challengeType
    };
    
    // Xử lý logic gửi dữ liệu
    console.log('Challenge data:', challengeData);
    // TODO: Gửi dữ liệu lên server hoặc lưu vào local storage
    
    // Reset form sau khi gửi
    alert('Tạo thử thách thành công!');
  };

  const handleChallengeTypeChange = (type) => {
    setChallengeType(type);
  };
  
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Tab lựa chọn loại thử thách */}
      <div className="mb-8 flex space-x-4">
        <button
          className={`px-4 py-2 rounded-md ${
            challengeType === 'personal'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => handleChallengeTypeChange('personal')}
        >
          Thử thách cá nhân
        </button>
        <button
          className={`px-4 py-2 rounded-md ${
            challengeType === 'group'
              ? 'bg-orange-500 text-white'
              : 'bg-gray-100 text-gray-700'
          }`}
          onClick={() => handleChallengeTypeChange('group')}
        >
          Thử thách nhóm
        </button>
      </div>

      {challengeType === 'personal' ? (
        <>
          <h1 className="text-3xl font-bold mb-4">Tạo thử thách cá nhân</h1>
          <p className="text-gray-600 mb-8">
            Tự tạo thử thách riêng phù hợp với mục tiêu và lịch trình của bạn. Thiết lập thời gian, nhắc nhở và theo dõi tiến trình một cách dễ dàng.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Tùy chỉnh thử thách</h3>
                  <p className="text-gray-600 text-sm">Đặt tên, mô tả và thời gian cho thử thách của bạn</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Cài đặt nhắc nhở</h3>
                  <p className="text-gray-600 text-sm">Nhận thông báo hàng ngày để không bỏ lỡ thử thách</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Mời bạn bè tham gia</h3>
                  <p className="text-gray-600 text-sm">Tạo thử thách nhóm và cùng nhau hoàn thành</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="font-bold text-xl mb-6">Tạo thử thách mới</h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Tên thử thách</label>
                <input 
                  type="text" 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  placeholder="Ví dụ: Dậy sớm 6h mỗi ngày"
                  value={challengeName}
                  onChange={(e) => setChallengeName(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Danh mục</label>
                <select 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Sức khỏe">Sức khỏe</option>
                  <option value="Kỹ năng">Kỹ năng</option>
                  <option value="Tinh thần">Tinh thần</option>
                  <option value="Học tập">Học tập</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Thời gian</label>
                <div className="flex space-x-4">
                  <button 
                    type="button" 
                    className={`flex-1 border rounded-md px-3 py-2 ${duration === 7 ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setDuration(7)}
                  >
                    7 ngày
                  </button>
                  <button 
                    type="button" 
                    className={`flex-1 border rounded-md px-3 py-2 ${duration === 14 ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setDuration(14)}
                  >
                    14 ngày
                  </button>
                  <button 
                    type="button" 
                    className={`flex-1 border rounded-md px-3 py-2 ${duration === 30 ? 'bg-orange-500 text-white border-orange-500' : 'border-gray-300 hover:bg-gray-50'}`}
                    onClick={() => setDuration(30)}
                  >
                    30 ngày
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Mô tả ngắn</label>
                <textarea 
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" 
                  rows="4"
                  placeholder="Mô tả ngắn về thử thách của bạn"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="form-checkbox h-5 w-5 text-orange-500"
                    checked={reminderEnabled}
                    onChange={() => setReminderEnabled(!reminderEnabled)}
                  />
                  <span className="ml-2 text-gray-700">Nhắc nhở hàng ngày</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200"
              >
                Tạo thử thách
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-4">Thử thách nhóm</h1>
          <p className="text-gray-600 mb-8">
            Tạo động lực và trách nhiệm bằng cách tham gia thử thách cùng bạn bè
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-bold text-xl mb-4">Tại sao nên tham gia thử thách nhóm?</h2>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Tăng động lực và trách nhiệm khi có người cùng tham gia</p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Chia sẻ kinh nghiệm và động viên lẫn nhau</p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Tạo tinh thần cạnh tranh lành mạnh để đạt kết quả tốt hơn</p>
                </div>
                
                <div className="flex items-center">
                  <div className="text-orange-500 mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p>Kết nối với những người có cùng mục tiêu và sở thích</p>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition duration-200">
                Tạo nhóm thử thách
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="font-bold text-xl mb-4">Nhóm thử thách đang hot</h2>
              
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Đọc sách mỗi ngày</h3>
                  <p className="text-sm text-gray-600 mb-2">Cùng nhau đọc sách 15 phút mỗi ngày trong 30 ngày</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">TH</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">KL</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">+9</span>
                    </div>
                    <span className="text-sm text-gray-600">12 thành viên</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Dậy sớm 6h</h3>
                  <p className="text-sm text-gray-600 mb-2">Thử thách dậy sớm 6h mỗi ngày trong 30 ngày</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">HN</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">PP</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">+5</span>
                    </div>
                    <span className="text-sm text-gray-600">8 thành viên</span>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium">Không dùng mạng xã hội</h3>
                  <p className="text-sm text-gray-600 mb-2">Hạn chế sử dụng mạng xã hội trong 30 ngày</p>
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">LT</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">VH</span>
                      <span className="inline-block h-6 w-6 rounded-full bg-gray-200 text-xs flex items-center justify-center">+12</span>
                    </div>
                    <span className="text-sm text-gray-600">15 thành viên</span>
                  </div>
                </div>
              </div>
              
              <button className="mt-6 w-full bg-white border border-orange-500 text-orange-500 hover:bg-orange-50 font-medium py-3 px-4 rounded-md transition duration-200">
                Xem thêm thử thách
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateChallenge;