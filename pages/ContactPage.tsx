import React, { useState } from 'react';
import LocationIcon from '../components/icons/LocationIcon';
import PhoneIcon from '../components/icons/PhoneIcon';
import EmailIcon from '../components/icons/EmailIcon';
import { Page } from '../types';

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  
  const getDirections = () => {
    setIsGettingLocation(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const destination = "-25.437935,30.950091"; // Belladonna Guest House coordinates
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${destination}`;
        window.open(url, '_blank');
        setIsGettingLocation(false);
      }, (error) => {
        console.error("Error getting location", error);
        alert("Could not get your location. Please ensure location services are enabled.");
        setIsGettingLocation(false);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
      setIsGettingLocation(false);
    }
  };


  return (
    <>
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-subtle-bg dark:bg-black/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-brand-text dark:text-dark-text">Get In Touch</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80 dark:text-dark-text/80">We'd love to hear from you. Here's how you can reach us.</p>
        </div>
      </section>
      
      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-dark-bg/50 p-8 rounded-lg shadow-lg mb-12">
              <h2 className="text-3xl font-sans font-bold text-brand-text dark:text-dark-text mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-brand-green dark:text-dark-accent mt-1 flex-shrink-0"><LocationIcon /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Address</h4>
                    <p className="text-brand-text/80 dark:text-dark-text/80">1 Belladonna Street, Cnr Dr Enos Mabuza Dr, West Acres Ext 4, Mbombela, 1201</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-brand-green dark:text-dark-accent mt-1 flex-shrink-0"><PhoneIcon /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Phone</h4>
                    <p><a href="tel:0137414802" className="text-brand-text/80 dark:text-dark-text/80 hover:text-brand-green dark:hover:text-dark-accent">Tel: 013 741 4802</a></p>
                    <p><a href="tel:+27636084576" className="text-brand-text/80 dark:text-dark-text/80 hover:text-brand-green dark:hover:text-dark-accent">Cell: +27 63 608 4576</a></p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="h-6 w-6 text-brand-green dark:text-dark-accent mt-1 flex-shrink-0"><EmailIcon /></div>
                  <div>
                    <h4 className="font-semibold text-lg">Email</h4>
                    <a href="mailto:booking@belladonaguesthouse.co.za" className="text-brand-text/80 dark:text-dark-text/80 hover:text-brand-green dark:hover:text-dark-accent">booking@belladonaguesthouse.co.za</a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600 flex flex-col sm:flex-row gap-4">
                <button onClick={() => setCurrentPage(Page.Booking)} className="w-full text-center bg-brand-green text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300">Book Now</button>
                <a href="https://wa.me/27636084576?text=Hello%2C%20I%20have%20a%20question%20about%20Belladonna%20Guest%20House." target="_blank" rel="noopener noreferrer" className="w-full text-center bg-gray-100 dark:bg-dark-bg text-brand-text dark:text-dark-text font-bold py-3 px-6 rounded-full hover:bg-gray-200 dark:hover:bg-dark-bg/50 transition">Ask on WhatsApp</a>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.011369348982!2d30.95009081501444!3d-25.4379349837851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee84a1ef4e54291%3A0x6d9a9f24c3e8a4d4!2sBelladonna%20Guesthouse!5e0!3m2!1sen!2sza!4v1672584501234!5m2!1sen!2sza"
                width="100%" height="450" style={{ border:0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map of Belladonna Guest House Location"></iframe>
            </div>
            <div className="text-center mt-8">
              <button onClick={getDirections} disabled={isGettingLocation} className="inline-flex items-center justify-center bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300 disabled:bg-brand-green/70 disabled:cursor-not-allowed">
                {isGettingLocation && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                {isGettingLocation ? 'Getting Location...' : 'Get Directions'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;