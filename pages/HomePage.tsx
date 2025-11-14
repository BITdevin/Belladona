import React from 'react';
import { Page } from '../types';
import WifiIcon from '../components/icons/WifiIcon';
import SecureParkingIcon from '../components/icons/SecureParkingIcon';
import AcIcon from '../components/icons/AcIcon';
import HeaterIcon from '../components/icons/HeaterIcon';
import LockIcon from '../components/icons/LockIcon';
import TvIcon from '../components/icons/TvIcon';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const Amenity: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
    <div className="h-10 w-10 text-brand-green dark:text-dark-accent">
      {icon}
    </div>
    <span className="font-semibold mt-4">{title}</span>
  </div>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 w-full h-full">
          <img
            src="/media/hero-background.webp"
            alt="Lush garden at Belladonna Guest House in Nelspruit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-20 text-center px-4">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tight">
            Escape to Serenity in Mbombela
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">
            Experience unparalleled comfort and hospitality in the heart of the Lowveld.
          </p>
          <div className="mt-8">
            <button
              onClick={() => setCurrentPage(Page.Booking)}
              className="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300"
            >
              Book Your Stay
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="md:col-span-2">
              <img
                src="/media/courtyard-view-full.webp"
                alt="Courtyard view of Belladonna Guest House with lush trees and garden"
                className="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            <div className="md:col-span-3 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-sans font-bold text-brand-text dark:text-dark-text">
                Your Home in the Lowveld
              </h2>
              <p className="mt-4 text-lg text-brand-text/80 dark:text-dark-text/80">
                Nestled in the quiet suburbs of Mbombela (Nelspruit), Belladonna Guest House offers a serene escape with all the comforts of home. We pride ourselves on providing a warm, welcoming atmosphere where you can relax after a day of exploring or business.
              </p>
              <p className="mt-4 text-brand-text/80 dark:text-dark-text/80">
                All our spacious rooms feature en-suite bathrooms, ensuring your privacy and comfort. We are committed to providing an exceptional stay for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 md:py-32 bg-subtle-bg dark:bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-brand-text dark:text-dark-text">
            Comfort & Convenience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-brand-text/80 dark:text-dark-text/80">
            We've thought of everything to make your stay enjoyable and hassle-free.
          </p>
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Amenity icon={<WifiIcon />} title="Free Wi-Fi" />
            <Amenity icon={<SecureParkingIcon />} title="Secure Parking" />
            <Amenity icon={<AcIcon />} title="Air-Conditioning" />
            <Amenity icon={<HeaterIcon />} title="Heaters" />
            <Amenity icon={<LockIcon />} title="24/7 Security" />
            <Amenity icon={<TvIcon />} title="In-Room TV" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;