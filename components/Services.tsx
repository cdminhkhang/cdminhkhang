
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Dịch Vụ Của Chúng Tôi</h2>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Cung cấp giải pháp chuyên nghiệp cho mọi nhu cầu về cơ điện của bạn.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <div 
            key={index} 
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-6">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">{service.title}</h3>
            <p className="text-slate-600 text-base flex-grow">{service.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
