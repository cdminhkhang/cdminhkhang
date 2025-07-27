
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-2xl font-bold text-primary">
            MINH KHANG
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-dark font-medium hover:text-primary transition-colors">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="tel:0987654321" className="hidden md:block bg-secondary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary-dark shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Báo giá miễn phí
          </a>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-dark text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <nav className="flex flex-col items-center space-y-4 p-6">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-dark font-medium text-lg hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
          <a href="tel:0987654321" className="w-full text-center mt-4 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors">
            Báo giá miễn phí
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
