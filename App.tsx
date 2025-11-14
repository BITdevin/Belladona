
import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';
import LegalPage from './pages/LegalPage';
import FloatingButtons from './components/FloatingButtons';
import CookieBanner from './components/CookieBanner';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home:
        return <HomePage setCurrentPage={setCurrentPage} />;
      case Page.Rooms:
        return <RoomsPage setCurrentPage={setCurrentPage} />;
      case Page.Gallery:
        return <GalleryPage />;
      case Page.Contact:
        // FIX: The `setCurrentPage` prop was missing for the `ContactPage` component.
        return <ContactPage setCurrentPage={setCurrentPage} />;
      case Page.Booking:
        return <BookingPage />;
      case Page.Legal:
        return <LegalPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <main className="flex-grow pt-16 sm:pt-20">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage}/>
      <FloatingButtons />
      <CookieBanner />
    </div>
  );
};

export default App;
