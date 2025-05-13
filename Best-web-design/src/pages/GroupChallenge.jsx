import React from 'react';
import { Link } from 'react-router-dom';

function GroupChallenge() {
    return (
        <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-4">Thử thách nhóm</h2>
            <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Tạo động lực và trách nhiệm bằng cách tham gia thử thách cùng bạn bè</p>
            
            <div class="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
                <div class="p-6 md:p-8">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                            <h3 class="text-xl font-semibold mb-4">Tại sao nên tham gia thử thách nhóm?</h3>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <div class="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">Tăng động lực và trách nhiệm khi có người cùng tham gia</p>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">Chia sẻ kinh nghiệm và động viên lẫn nhau</p>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">Tạo tinh thần cạnh tranh lành mạnh để đạt kết quả tốt hơn</p>
                                </div>
                                
                                <div class="flex items-start">
                                    <div class="bg-primary bg-opacity-10 w-8 h-8 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                                        <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <p class="text-gray-600">Kết nối với những người có cùng mục tiêu và sở thích</p>
                                </div>
                            </div>
                            
                            <div class="mt-8">
                                <Link to="/create-group-challenge" class="inline-block">
                                    <button class="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                                        Tạo nhóm thử thách
                                    </button>
                                </Link>
                            </div>
                        </div>
                        
                        <div class="md:w-1/2 md:border-l md:pl-8 border-gray-200">
                            <h3 class="text-xl font-semibold mb-4">Nhóm thử thách đang hot</h3>
                            
                            <div class="space-y-4">
                                <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div class="flex justify-between items-center mb-2">
                                        <h4 class="font-medium">Đọc sách mỗi ngày</h4>
                                        <span class="bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded-full">12 thành viên</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-3">Cùng nhau đọc sách 15 phút mỗi ngày trong 30 ngày</p>
                                    <div class="flex -space-x-2">
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">TH</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">MN</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">KL</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">+9</div>
                                    </div>
                                </div>
                                
                                <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div class="flex justify-between items-center mb-2">
                                        <h4 class="font-medium">Dậy sớm 6h</h4>
                                        <span class="bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded-full">8 thành viên</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-3">Thử thách dậy sớm 6h mỗi ngày trong 30 ngày</p>
                                    <div class="flex -space-x-2">
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">HN</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">PT</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">+5</div>
                                    </div>
                                </div>
                                
                                <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                    <div class="flex justify-between items-center mb-2">
                                        <h4 class="font-medium">Không dùng mạng xã hội</h4>
                                        <span class="bg-purple-100 text-purple-500 text-xs font-semibold px-2 py-1 rounded-full">15 thành viên</span>
                                    </div>
                                    <p class="text-sm text-gray-600 mb-3">Hạn chế sử dụng mạng xã hội trong 30 ngày</p>
                                    <div class="flex -space-x-2">
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">LT</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">VH</div>
                                        <div class="w-8 h-8 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-medium">+12</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default GroupChallenge;
