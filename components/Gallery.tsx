
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Hình Ảnh Dự Án</h2>
        <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">
          Một vài hình ảnh từ các dự án thực tế chúng tôi đã triển khai.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_IMAGES.map((image, index) => (
          <div key={index} className="group overflow-hidden rounded-xl shadow-lg relative aspect-w-1 aspect-h-1">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
