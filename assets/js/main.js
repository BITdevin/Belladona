<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Belladonna Guest House | Serenity in Mbombela, Nelspruit</title>
  <meta name="description" content="Escape to serenity at Belladonna Guest House. Spacious rooms, beautiful gardens, and peaceful hospitality in Mbombela (Nelspruit), South Africa." />
  <meta name="keywords" content="guesthouse nelspruit, accommodation mbombela, belladonna guest house, mpumalanga" />

  <!-- favicon: corrected viewBox -->
  <link rel="icon" href='data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">🌿</text></svg>'>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

  <!-- Tailwind config (must load before CDN) -->
  <script>
    tailwind = window.tailwind || {};
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: { sans: ['Poppins', 'sans-serif'] },
          colors: {
            'brand-green': '#5A7D7C',
            'brand-green-dark': '#4B6867',
            'brand-bg': '#FBF9F6',
            'brand-text': '#333333',
            'dark-bg': '#2C3531',
            'dark-text': '#E2E8F0',
            'dark-accent': '#81A1A0',
            'subtle-bg': '#F1F1F1'
          }
        }
      }
    }
  </script>
  <script src="https://cdn.tailwindcss.com"></script>

  <style>[x-cloak]{display:none !important}</style>

  <script src="https://cdn.jsdelivr.net/npm/alpinejs@3.13.10/dist/cdn.min.js" defer></script>
  <script src="assets/js/main.js" defer></script>

  <link rel="stylesheet" href="/index.css">
</head>
<body x-data="app()" x-init="init()" class="bg-brand-bg text-brand-text font-sans antialiased dark:bg-dark-bg dark:text-dark-text transition-colors duration-300">

  <!-- Header -->
  <header x-data="{ open: false }" @keydown.escape.window="open = false" class="fixed inset-x-0 top-0 z-50 bg-brand-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-md transition-all duration-300">
    <nav class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-20">
        <a href="index.html" class="flex-shrink-0 flex items-center space-x-3" aria-label="Belladonna Guest House home">
          <span class="font-bold text-xl text-brand-green dark:text-dark-accent">Belladonna</span>
          <span class="text-xs font-semibold tracking-wider text-brand-text/70 dark:text-dark-text/70">Guest House</span>
        </a>

        <div class="hidden md:flex items-center space-x-8">
          <a href="index.html" class="pb-1 font-semibold text-brand-green dark:text-dark-accent border-b-2 border-brand-green dark:border-dark-accent">Home</a>
          <a href="rooms.html" class="pb-1 text-brand-text/80 hover:text-brand-text dark:text-dark-text/80 dark:hover:text-dark-text transition-colors border-b-2 border-transparent hover:border-brand-green/50">Rooms</a>
          <a href="gallery.html" class="pb-1 text-brand-text/80 hover:text-brand-text dark:text-dark-text/80 dark:hover:text-dark-text transition-colors border-b-2 border-transparent hover:border-brand-green/50">Gallery</a>
          <a href="contact.html" class="pb-1 text-brand-text/80 hover:text-brand-text dark:text-dark-text/80 dark:hover:text-dark-text transition-colors border-b-2 border-transparent hover:border-brand-green/50">Contact</a>
          <a href="booking.html" class="ml-4 inline-block bg-brand-green text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300">Book Now</a>

          <!-- Theme toggle uses $root to access app() from nested scope -->
          <button @click="$root.toggleTheme()" class="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors" aria-label="Toggle theme" :aria-pressed="$root.isDarkMode.toString()">
            <svg x-show="!$root.isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            <svg x-show="$root.isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </button>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="open = !open" :aria-expanded="open.toString()" class="inline-flex items-center justify-center p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none" aria-label="Open menu">
            <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              <path :class="{'hidden': open, 'inline-flex': !open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
              <path :class="{'hidden': !open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div x-show="open" x-transition class="md:hidden bg-brand-bg dark:bg-dark-bg border-t border-black/10 dark:border-white/10" x-cloak>
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="index.html" class="block px-3 py-2 rounded-md text-base font-medium bg-brand-green/10 text-brand-green dark:bg-dark-accent/10 dark:text-dark-accent">Home</a>
        <a href="rooms.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Rooms</a>
        <a href="gallery.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Gallery</a>
        <a href="contact.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Contact</a>
        <a href="booking.html" class="block px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Book Now</a>
        <button @click="$root.toggleTheme()" class="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-black/5 dark:hover:bg-white/10">Toggle Theme</button>
      </div>
    </div>
  </header>

  <main class="pt-20">
    <!-- Hero -->
    <section class="relative h-screen min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <div class="absolute inset-0 w-full h-full">
        <img src="public/media/hero-background.webp" alt="Lush garden at Belladonna Guest House in Nelspruit" class="w-full h-full object-cover">
      </div>
      <div class="relative z-20 text-center px-4">
        <h1 class="text-4xl sm:text-5xl md:text-7xl font-sans font-bold tracking-tight">Escape to Serenity in Mbombela</h1>
        <p class="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/90">Experience unparalleled comfort and hospitality in the heart of the Lowveld.</p>
        <div class="mt-8">
          <a href="booking.html" class="inline-block bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300">Book Your Stay</a>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div class="md:col-span-2">
            <img loading="lazy" src="public/media/courtyard-view.jpg" alt="Courtyard view of Belladonna Guest House" class="rounded-lg shadow-xl w-full h-auto object-cover aspect-[3/4]">
          </div>
          <div class="md:col-span-3 text-center md:text-left">
            <h2 class="text-3xl md:text-4xl font-sans font-bold text-brand-text dark:text-dark-text">Your Home in the Lowveld</h2>
            <p class="mt-4 text-lg text-brand-text/80 dark:text-dark-text/80">Nestled in the quiet suburbs of Mbombela (Nelspruit), Belladonna Guest House offers a serene escape with all the comforts of home. We pride ourselves on providing a warm, welcoming atmosphere where you can relax after a day of exploring or business.</p>
            <p class="mt-4 text-brand-text/80 dark:text-dark-text/80">All our spacious rooms feature en-suite bathrooms, ensuring your privacy and comfort. We are committed to providing an exceptional stay for every guest.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Amenities -->
    <section class="py-20 md:py-32 bg-subtle-bg dark:bg-black/20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl md:text-5xl font-sans font-bold text-brand-text dark:text-dark-text">Comfort & Convenience</h2>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-brand-text/80 dark:text-dark-text/80">We've thought of everything to make your stay enjoyable and hassle-free.</p>

        <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8.288 15.038a5.5 5.5 0 017.424 0M5.026 11.776a9.5 9.5 0 0113.948 0M2.164 8.514a13.5 13.5 0 0119.672 0" /></svg>
            <span class="font-semibold mt-4">Free Wi-Fi</span>
          </div>

          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.75h-.152c-3.196 0-6.1-1.248-8.25-3.286z" /></svg>
            <span class="font-semibold mt-4">Secure Parking</span>
          </div>

          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <!-- Use 'Snowflake' like symbol for AC (simple replacement path) -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></svg>
            <span class="font-semibold mt-4">Air-Conditioning</span>
          </div>

          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013-3.862z" /></svg>
            <span class="font-semibold mt-4">Heaters</span>
          </div>

          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            <span class="font-semibold mt-4">24/7 Security</span>
          </div>

          <div class="bg-white dark:bg-dark-bg/50 p-6 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-brand-green dark:text-dark-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25zM12 15.75v-3.75" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /></svg>
            <span class="font-semibold mt-4">In-Room TV</span>
          </div>
        </div>
      </div>
    </section>

  </main>

  <!-- Footer -->
  <footer class="bg-dark-bg text-dark-text/80">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 class="text-lg font-sans font-bold"><span class="text-white">Belladonna</span> <span class="text-dark-accent">Guest House</span></h4>
          <p class="mt-2 text-sm">1 Belladonna Street,<br>Cnr Dr Enos Mabuza Dr, West Acres Ext 4,<br>Mbombela (Nelspruit), 1201</p>
        </div>
        <div>
          <h4 class="text-lg font-sans font-bold text-white">Quick Links</h4>
          <ul class="mt-2 space-y-1 text-sm">
            <li><a href="index.html" class="hover:text-white transition-colors">Home</a></li>
            <li><a href="rooms.html" class="hover:text-white transition-colors">Rooms</a></li>
            <li><a href="booking.html" class="hover:text-white transition-colors">Booking</a></li>
            <li><a href="gallery.html" class="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="contact.html" class="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="legal.html" class="hover:text-white transition-colors">Privacy & Terms</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-sans font-bold text-white">Connect</h4>
          <p class="mt-2 text-sm">
            Tel: <a href="tel:0137414802" class="hover:text-white transition-colors">013 741 4802</a><br>
            Cell: <a href="tel:+27636084576" class="hover:text-white transition-colors">+27 63 608 4576</a><br>
            Email: <a href="mailto:booking@belladonaguesthouse.co.za" class="hover:text-white transition-colors">booking@belladonaguesthouse.co.za</a>
          </p>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-white/10 text-center text-sm">
        <p>&copy; <span id="currentYear"></span> Belladonna Guest House. All Rights Reserved. | Developed by Bizwhatwhat</p>
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Button -->
  <a href="https://wa.me/27636084576" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" class="fixed bottom-5 right-5 z-50 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-transform transform hover:scale-110">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 16 16" fill="currentColor"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/></svg>
  </a>

  <!-- Back to Top -->
  <button x-show="showBackToTop" @click="window.scrollTo({ top: 0, behavior: 'smooth' })" x-transition class="fixed bottom-20 right-5 z-50 bg-brand-green/80 dark:bg-dark-accent/80 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-brand-green dark:hover:bg-dark-accent transition-all duration-300 transform hover:scale-110" aria-label="Back to top">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" /></svg>
  </button>

  <!-- Cookie -->
  <div x-show="!cookiesAccepted" x-transition class="fixed bottom-4 left-4 z-50 max-w-md" x-cloak>
    <div class="p-4 rounded-lg bg-dark-bg/90 dark:bg-subtle-bg/95 backdrop-blur-sm shadow-2xl flex items-center space-x-4">
      <p class="text-sm text-dark-text dark:text-brand-text flex-grow">
        This website uses cookies to enhance your experience. <a href="legal.html" class="font-bold underline hover:text-white dark:hover:text-brand-green">Learn more</a>.
      </p>
      <button @click="acceptCookies()" type="button" class="flex-shrink-0 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-dark-bg bg-white hover:bg-gray-200 transition-colors">Accept</button>
    </div>
  </div>

</body>
</html>
