import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    setIsVisible(false);
    localStorage.setItem('cookie_consent', 'true');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-md">
      <div className="p-4 rounded-lg bg-dark-bg/90 dark:bg-subtle-bg/95 backdrop-blur-sm shadow-2xl flex items-center space-x-4">
        <p className="text-sm text-dark-text dark:text-brand-text flex-grow">
          This website uses cookies to enhance your experience. 
          {/* In a real app, this would link to the Legal page */}
          <a href="#" className="font-bold underline hover:text-white dark:hover:text-brand-green"> Learn more</a>.
        </p>
        <button onClick={acceptCookies} type="button" className="flex-shrink-0 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark-bg bg-white hover:bg-gray-200 transition-colors">
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
