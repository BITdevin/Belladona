import React, { useEffect, useState } from 'react';

const LegalPage: React.FC = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <>
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-subtle-bg dark:bg-black/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-brand-text dark:text-dark-text">Privacy Policy & Terms</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80 dark:text-dark-text/80">Your privacy is important to us. Here's how we handle your data.</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white dark:bg-dark-bg/50 p-8 sm:p-12 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-4 text-brand-text dark:text-dark-text">Privacy Policy</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6"><em>Last updated: {currentDate}</em></p>
            <div className="space-y-4 text-brand-text/80 dark:text-dark-text/80">
              <p>Your privacy is important to us. It is Belladonna Guest House's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.</p>
              <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
              
              <h3 className="text-2xl font-bold pt-6 pb-2 text-brand-text dark:text-dark-text">Information We Collect</h3>
              <p>When you use our booking form, we may collect information such as your name, email address, and phone number. This information is used solely for the purpose of processing your booking inquiry.</p>
              
              <h3 className="text-2xl font-bold pt-6 pb-2 text-brand-text dark:text-dark-text">Cookies</h3>
              <p>We use cookies to improve your experience on our website. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site and serve you content based on preferences you have specified. This policy explains how we use cookies.</p>
            </div>
            
            <hr className="my-12 border-gray-300 dark:border-gray-600" />

            <h2 className="text-3xl font-bold mb-4 text-brand-text dark:text-dark-text">Terms of Service</h2>
            <div className="space-y-4 text-brand-text/80 dark:text-dark-text/80">
              <p>By accessing this website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              
              <h3 className="text-2xl font-bold pt-6 pb-2 text-brand-text dark:text-dark-text">1. Use License</h3>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on Belladonna Guest House's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
              
              <h3 className="text-2xl font-bold pt-6 pb-2 text-brand-text dark:text-dark-text">2. Disclaimer</h3>
              <p>The materials on Belladonna Guest House's website are provided on an 'as is' basis. Belladonna Guest House makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
              
              <h3 className="text-2xl font-bold pt-6 pb-2 text-brand-text dark:text-dark-text">3. Limitations</h3>
              <p>In no event shall Belladonna Guest House or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Belladonna Guest House's website.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LegalPage;