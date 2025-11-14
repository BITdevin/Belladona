import React from 'react';
import { Page } from '../types';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="bg-dark-bg text-dark-text/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-sans font-bold"><span className="text-white">Belladonna</span> <span className="text-dark-accent">Guest House</span></h4>
            <p className="mt-2 text-sm">1 Belladonna Street,<br />Cnr Dr Enos Mabuza Dr, West Acres Ext 4,<br />Mbombela (Nelspruit), 1201</p>
          </div>
          <div>
            <h4 className="text-lg font-sans font-bold text-white">Quick Links</h4>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Home); }} className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Rooms); }} className="hover:text-white transition-colors">Rooms</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Booking); }} className="hover:text-white transition-colors">Booking</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Gallery); }} className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Contact); }} className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Legal); }} className="hover:text-white transition-colors">Privacy & Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-sans font-bold text-white">Connect</h4>
            <p className="mt-2 text-sm">
              Tel: <a href="tel:0137414802" className="hover:text-white transition-colors">013 741 4802</a><br />
              Cell: <a href="tel:+27636084576" className="hover:text-white transition-colors">+27 63 608 4576</a><br />
              Email: <a href="mailto:booking@belladonaguesthouse.co.za" className="hover:text-white transition-colors">booking@belladonaguesthouse.co.za</a>
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Belladonna Guest House. All Rights Reserved. | Developed by Bizwhatwhat</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;