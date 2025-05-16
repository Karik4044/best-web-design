import React, { useState } from 'react';
import { FaUsers, FaClock, FaLock, FaUnlock, FaInfoCircle } from 'react-icons/fa';
import { useUser } from '../../context/UserContext';    //Quan lý state group challenge của user
import { useNavigate } from 'react-router-dom';

function CreateGroupChallenge({ darkMode }) {
    const navigate = useNavigate();
    const { addGroupChallenge } = useUser();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        duration: '30',
        maxMembers: '10',
        privacy: 'public'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        addGroupChallenge(formData);
        navigate('/account'); // Chuyển hướng đến trang Account sau khi tạo
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className={`py-16 ${darkMode ? 'bg-dark-bg-primary text-dark-text-primary' : 'bg-gray-50'} mt-10`}>
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold mb-4">Tạo nhóm thử thách mới</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tạo một nhóm thử thách để cùng nhau phấn đấu và đạt được mục tiêu
                        </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
                        <div className="space-y-8">
                            {/* Tên thử thách */}
                            <div className="relative">
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Tên thử thách
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    placeholder="Nhập tên thử thách"
                                    required
                                />
                                <div className="absolute right-3 top-10 text-gray-400">
                                    <FaInfoCircle className="w-5 h-5" />
                                </div>
                            </div>

                            {/* Mô tả */}
                            <div>
                                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mô tả
                                </label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                    placeholder="Mô tả chi tiết về thử thách và mục tiêu của nhóm"
                                    required
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Thời gian */}
                                <div className="relative">
                                    <label htmlFor="duration" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Thời gian
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="duration"
                                            name="duration"
                                            value={formData.duration}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
                                        >
                                            <option value="7">7 ngày</option>
                                            <option value="14">14 ngày</option>
                                            <option value="30">30 ngày</option>
                                            <option value="60">60 ngày</option>
                                            <option value="90">90 ngày</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaClock className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>

                                {/* Số thành viên tối đa */}
                                <div className="relative">
                                    <label htmlFor="maxMembers" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Số thành viên tối đa
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="maxMembers"
                                            name="maxMembers"
                                            value={formData.maxMembers}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
                                        >
                                            <option value="5">5 thành viên</option>
                                            <option value="10">10 thành viên</option>
                                            <option value="20">20 thành viên</option>
                                            <option value="50">50 thành viên</option>
                                            <option value="100">100 thành viên</option>
                                        </select>
                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                            <FaUsers className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quyền riêng tư */}
                            <div className="relative">
                                <label htmlFor="privacy" className="block text-sm font-semibold text-gray-700 mb-2">
                                    Quyền riêng tư
                                </label>
                                <div className="relative">
                                    <select
                                        id="privacy"
                                        name="privacy"
                                        value={formData.privacy}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 appearance-none"
                                    >
                                        <option value="public">Công khai</option>
                                        <option value="private">Riêng tư</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        {formData.privacy === 'public' ? <FaUnlock className="w-5 h-5" /> : <FaLock className="w-5 h-5" />}
                                    </div>
                                </div>
                            </div>

                            {/* Nút gửi */}
                            <div className="pt-6">
                                <button
                                    type="submit"
                                    className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-xl hover:bg-opacity-90 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                                >
                                    Tạo thử thách
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateGroupChallenge;
