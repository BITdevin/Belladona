import React, { useState } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-brand-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.Home); }} className="flex-shrink-0 group flex items-center space-x-3 cursor-pointer">
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-brand-green dark:text-dark-accent">Belladonna</span>
              <span className="text-xs font-semibold tracking-wider text-brand-text/70 dark:text-dark-text/70">GUEST HOUSE</span>
            </div>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }}
                className={`pb-1 transition-colors border-b-2 ${
                  currentPage === link.name 
                    ? 'font-semibold text-brand-green dark:text-dark-accent border-brand-green dark:border-dark-accent' 
                    : 'text-brand-text/80 hover:text-brand-text dark:text-dark-text/80 dark:hover:text-dark-text border-transparent hover:border-brand-green/50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => handleNavClick(Page.Booking)}
              className="ml-4 inline-block bg-brand-green text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300"
            >
              Book Now
            </button>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme">
              {isDarkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none" aria-label="Open menu">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-bg dark:bg-dark-bg border-t border-black/10 dark:border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
               <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.name); }}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === link.name 
                  ? 'bg-brand-green/10 text-brand-green dark:bg-dark-accent/10 dark:text-dark-accent'
                  : 'hover:bg-black/5 dark:hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick(Page.Booking); }} className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Book Now</a>
            <button onClick={toggleTheme} className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Toggle Theme</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
