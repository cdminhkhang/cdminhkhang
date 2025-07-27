
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('https://picsum.photos/id/56/1920/1080')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 drop-shadow-xl">
          CƠ ĐIỆN MINH KHANG
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto mb-8 font-light drop-shadow-lg">
          Giải pháp cơ điện toàn diện – Dịch vụ tận tâm – Phục vụ tận nơi
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#dich-vu" className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-primary-dark shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto">
            Xem dịch vụ
          </a>
          <a href="#lien-he" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-primary shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full sm:w-auto">
            Liên hệ Kỹ thuật viên
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
