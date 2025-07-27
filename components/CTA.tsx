
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="bg-primary">
      <div className="container mx-auto px-6 md:px-8 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Bạn cần hỗ trợ kỹ thuật tại nhà?
        </h2>
        <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
          Đừng ngần ngại, hãy gọi ngay cho chúng tôi để được tư vấn miễn phí và giải quyết vấn đề nhanh chóng.
        </p>
        <a 
          href="tel:0987654321" 
          className="bg-secondary text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-secondary-dark shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 inline-block"
        >
          Gọi ngay – 0987.654.321
        </a>
      </div>
    </section>
  );
};

export default CTA;
