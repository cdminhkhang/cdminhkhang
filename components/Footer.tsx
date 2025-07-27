
import React from 'react';
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer id="lien-he" className="bg-dark text-slate-300">
      <div className="container mx-auto px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">CƠ ĐIỆN MINH KHANG</h3>
            <p className="text-slate-400">
              Chuyên cung cấp các giải pháp và dịch vụ cơ điện uy tín, chất lượng. Sự hài lòng của bạn là thành công của chúng tôi.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><SiZalo size={24} /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><FaPhoneAlt size={22} /></a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Thông tin liên hệ</h4>
            <ul className="space-y-3 text-slate-400">
              <li><strong>Địa chỉ:</strong> 123 Đường ABC, Phường XYZ, Quận 1, TP. HCM</li>
              <li><strong>Hotline:</strong> <a href="tel:0987654321" className="hover:text-white">0987.654.321</a></li>
              <li><strong>Email:</strong> <a href="mailto:info@codienminhkhang.com" className="hover:text-white">info@codienminhkhang.com</a></li>
              <li><strong>Giờ làm việc:</strong> 7:00 - 18:00 (T2 - CN)</li>
            </ul>
          </div>

          {/* Column 3 & 4: Map */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-4">Vị trí của chúng tôi</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447176527014!2d106.6974507152601!3d10.77698229232104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f369875f79f%3A0x284a1d4a4cf79d2b!2zQ2jhu6MgQuG6v24gVGjDoG5o!5e0!3m2!1svi!2s!4v1678886456789!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cơ Điện Minh Khang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
