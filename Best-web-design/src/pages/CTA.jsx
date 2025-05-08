import React from 'react';

function CTA() {
    return (
        <section class="py-16 bg-primary">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-white mb-6">Sẵn sàng thay đổi bản thân?</h2>
            <p class="text-white text-lg mb-8 max-w-2xl mx-auto">Bắt đầu thử thách 30 ngày ngay hôm nay và hình thành thói quen tích cực cho cuộc sống của bạn.</p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <button class="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
                    Bắt đầu ngay
                </button>
                <button class="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-primary transition-all">
                    Khám phá thử thách
                </button>
            </div>
        </div>
    </section>
    );
}

export default CTA;
