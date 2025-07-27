
import React, { useState, useEffect, useRef, ReactNode } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { FaPhoneAlt } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

const AboutSection: React.FC = () => {
    return (
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Về Chúng Tôi</h2>
            <p className="text-lg text-slate-600">
                Với nhiều năm kinh nghiệm trong lĩnh vực cơ điện, Minh Khang cam kết mang đến những giải pháp toàn diện, an toàn và tiết kiệm nhất. Chúng tôi tự hào có đội ngũ kỹ thuật viên tay nghề cao, luôn tận tâm phục vụ và sẵn sàng hỗ trợ khách hàng tại nhiều khu vực.
            </p>
        </div>
    );
};

const Section: React.FC<{ children: ReactNode; id: string; className?: string }> = ({ children, id, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className}`}
    >
      <div className="container mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

const ContactBubble: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      <a href="https://zalo.me/0987654321" target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all transform hover:scale-110">
        <SiZalo className="w-7 h-7" />
      </a>
      <a href="tel:0987654321" className="bg-secondary text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-secondary-dark transition-all transform hover:scale-110">
        <FaPhoneAlt className="w-6 h-6" />
      </a>
    </div>
  );
};


function App() {
  return (
    <div className="bg-light font-sans text-dark antialiased">
      <Header />
      <main>
        <Hero />
        <Section id="gioi-thieu" className="bg-white">
          <AboutSection />
        </Section>
        <Section id="dich-vu">
          <Services />
        </Section>
        <Section id="hinh-anh" className="bg-slate-100">
            <Gallery />
        </Section>
        <Section id="danh-gia">
            <Testimonials />
        </Section>
        <CTA />
      </main>
      <Footer />
      <ContactBubble />
    </div>
  );
}

export default App;
