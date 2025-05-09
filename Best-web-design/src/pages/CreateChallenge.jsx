import React, { useState } from 'react';

function CreateChallenge() {
    const [formData, setFormData] = useState({
        name: '',
        category: 'Sức khỏe',
        duration: '30',
        description: '',
        reminder: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h2 className="text-3xl font-bold mb-6">Tạo thử thách cá nhân</h2>
                        <p className="text-gray-600 mb-8">Tự tạo thử thách riêng phù hợp với mục tiêu và lịch trình của bạn. Thiết lập thời gian, nhắc nhở và theo dõi tiến trình một cách dễ dàng.</p>
                        
                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Tùy chỉnh thử thách</h3>
                                    <p className="text-gray-600 text-sm">Đặt tên, mô tả và thời gian cho thử thách của bạn</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Cài đặt nhắc nhở</h3>
                                    <p className="text-gray-600 text-sm">Nhận thông báo hàng ngày để không bỏ lỡ thử thách</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center">
                                <div className="bg-primary bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold">Mời bạn bè tham gia</h3>
                                    <p className="text-gray-600 text-sm">Tạo thử thách nhóm và cùng nhau hoàn thành</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center">
                        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
                            <h3 className="text-xl font-semibold mb-6">Tạo thử thách mới</h3>
                            
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tên thử thách</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        placeholder="Ví dụ: Dậy sớm 6h mỗi ngày"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Danh mục</label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                    >
                                        <option value="Sức khỏe">Sức khỏe</option>
                                        <option value="Kỹ năng">Kỹ năng</option>
                                        <option value="Tinh thần">Tinh thần</option>
                                        <option value="Học tập">Học tập</option>
                                        <option value="Khác">Khác</option>
                                    </select>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Thời gian</label>
                                    <div className="flex space-x-4">
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, duration: '7' }))}
                                            className={`flex-1 py-2 border rounded-lg hover:bg-gray-50 ${
                                                formData.duration === '7' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                                            }`}
                                        >
                                            7 ngày
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, duration: '14' }))}
                                            className={`flex-1 py-2 border rounded-lg hover:bg-gray-50 ${
                                                formData.duration === '14' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                                            }`}
                                        >
                                            14 ngày
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, duration: '30' }))}
                                            className={`flex-1 py-2 border rounded-lg hover:bg-gray-50 ${
                                                formData.duration === '30' ? 'bg-primary text-white border-primary' : 'border-gray-300'
                                            }`}
                                        >
                                            30 ngày
                                        </button>
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mô tả ngắn</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                        rows="3"
                                        placeholder="Mô tả ngắn về thử thách của bạn"
                                    ></textarea>
                                </div>
                                
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nhắc nhở</label>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="reminder"
                                            name="reminder"
                                            checked={formData.reminder}
                                            onChange={handleInputChange}
                                            className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-sm text-gray-600">Nhắc nhở hàng ngày</span>
                                    </div>
                                </div>
                                
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                                >
                                    Tạo thử thách
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateChallenge;
