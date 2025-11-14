import React from 'react';
import { Page } from '../types';

interface RoomCardProps {
  imageUrl: string;
  title: string;
  description: string;
  price: number;
  onBook: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ imageUrl, title, description, price, onBook }) => (
  <div className="bg-white dark:bg-dark-bg/50 rounded-lg shadow-lg overflow-hidden group flex flex-col">
    <img src={imageUrl} loading="lazy" alt={title} className="w-full h-64 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text">{title}</h3>
      <p className="text-brand-text/80 dark:text-dark-text/80 mt-2">{description}</p>
      <div className="mt-auto pt-6 flex justify-between items-center">
        <p className="text-xl font-bold text-brand-green dark:text-dark-accent">
          R{price} <span className="text-sm font-normal text-brand-text/60 dark:text-dark-text/60">/ night</span>
        </p>
        <button onClick={onBook} className="bg-brand-green/10 text-brand-green dark:bg-dark-accent/20 dark:text-dark-accent px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-green hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-bg transition-colors duration-300">
          Check Availability
        </button>
      </div>
    </div>
  </div>
);

interface RoomsPageProps {
  setCurrentPage: (page: Page) => void;
}

const RoomsPage: React.FC<RoomsPageProps> = ({ setCurrentPage }) => {
  const rooms = [
    {
      imageUrl: '/media/rooms/room-double.webp',
      title: 'Standard Double Room',
      description: 'A cozy retreat for solo travelers or couples, featuring a comfortable double bed and a modern en-suite bathroom.',
      price: 700,
    },
    {
      imageUrl: '/media/rooms/room-twin.webp',
      title: 'Twin Room (with Shower)',
      description: 'Ideal for friends or colleagues, equipped with two comfortable single beds and a private en-suite bathroom with a refreshing shower.',
      price: 600,
    },
  ];

  const handleBook = () => {
    setCurrentPage(Page.Booking);
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-subtle-bg dark:bg-black/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-brand-text dark:text-dark-text">Our Rooms</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80 dark:text-dark-text/80">Comfort, style, and tranquility in every space.</p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {rooms.map((room) => (
              <RoomCard key={room.title} {...room} onBook={handleBook} />
            ))}
          </div>
          <div className="mt-12 text-center text-brand-text/70 dark:text-dark-text/70">
            <p>* Please note: Our rooms are often in high demand. Please use the booking form to inquire about specific date availability.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoomsPage;