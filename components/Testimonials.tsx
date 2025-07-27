
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Khách Hàng Nói Gì Về Chúng Tôi</h2>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Niềm tin và sự hài lòng của khách hàng là động lực lớn nhất của chúng tôi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-lg flex flex-col">
            <FaQuoteLeft className="text-primary text-3xl mb-4" />
            <p className="text-slate-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="mt-auto">
              <p className="font-bold text-dark">{testimonial.author}</p>
              <p className="text-sm text-slate-500">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
