import React from 'react';

const GalleryPage: React.FC = () => {
  const imageSources = [
    // === YOUR FIXED ORDER (1–5 + 8) ===
    '/media/hero-background.webp',        // 1
    '/media/courtyard-view-full.webp',    // 2
    '/media/outise10.webp',               // 3
    '/media/outise6.webp',                // 4
    '/media/outise9.webp',                // 5
    '/media/outise7.webp',                // 6 → now moved to end

    // === Remaining exterior shots (newest first) ===
    '/media/outise8.webp',
    '/media/outise4.webp',
    '/media/outise5.webp',
    '/media/outise11.webp',
    '/media/outise2.webp',
    '/media/outise3.webp',
    '/media/outside.webp',

    // === Room interiors ===
    '/media/room-double.webp',
    '/media/Twinroom.webp',
    '/media/Twinroom1.webp',
    '/media/Twinroom4.webp',
    '/media/standard1.webp',

    // === MOVED TO END: Picture 6 & 7 ===
    '/media/outise13.webp',               // ← was 6, now last
    '/media/outise12.webp',               // ← was 7, now second-to-last
  ];

  return (
    <>
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-subtle-bg dark:bg-black/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-brand-text dark:text-dark-text">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80 dark:text-dark-text/80">
            A glimpse into the tranquility and comfort that awaits you.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {imageSources.map((src, index) => {
              const fileName = src.split('/').pop()?.replace('.webp', '') || `image ${index + 1}`;
              const cleanName = fileName
                .replace('hero-background', 'Garden Entrance')
                .replace('courtyard-view-full', 'Courtyard Garden')
                .replace('outise', 'Outside View ')
                .replace('outside', 'Outside Panorama')
                .replace('room-double', 'Double Room')
                .replace('Twinroom', 'Twin Room')
                .replace('standard1', 'Standard Room')
                .replace(/\d+/g, ' $&')
                .trim();

              return (
                <div
                  key={src}
                  className="overflow-hidden rounded-lg shadow-lg group aspect-w-1 aspect-h-1"
                >
                  <img
                    src={src}
                    alt={`${cleanName} at Belladonna Guest House`}
                    loading="lazy"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;