import React, { useState, useEffect } from 'react';
import WhatsAppIcon from './icons/WhatsAppIcon';
import ChevronUpIcon from './icons/ChevronUpIcon';

const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showBackToTop && window.pageYOffset > 400) {
        setShowBackToTop(true);
      } else if (showBackToTop && window.pageYOffset <= 400) {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showBackToTop]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/27636084576" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110">
        <WhatsAppIcon />
      </a>
    
      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={scrollToTop} className="fixed bottom-20 right-5 z-50 bg-brand-green/80 dark:bg-dark-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-green dark:hover:bg-dark-accent transition-all duration-300 transform hover:scale-110" aria-label="Back to top">
          <ChevronUpIcon />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;