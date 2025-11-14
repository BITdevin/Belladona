import React, { useState, useMemo } from 'react';

const rooms = [
  { id: 1, name: 'Standard Double Room', price: 700, maxGuests: 2 },
  { id: 2, name: 'Twin Room (with Shower)', price: 600, maxGuests: 2 },
];

const BookingPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const today = new Date().toISOString().split('T')[0];
  const [formData, setFormData] = useState({
    checkin: today,
    checkout: '',
    roomType: '',
    adults: 1,
    children: 0,
    addBreakfast: false,
    name: '',
    email: '',
    phone: '',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState({ step1: '', step2: '', step3: '' });

  const selectedRoom = useMemo(() => rooms.find(r => r.id === parseInt(formData.roomType)), [formData.roomType]);

  const totalDays = useMemo(() => {
    if (formData.checkin && formData.checkout) {
      const start = new Date(formData.checkin);
      const end = new Date(formData.checkout);
      const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
      return diff > 0 ? diff : 0;
    }
    return 0;
  }, [formData.checkin, formData.checkout]);

  const subtotal = useMemo(() => (selectedRoom ? selectedRoom.price * totalDays : 0), [selectedRoom, totalDays]);
  const breakfastCost = useMemo(() => (formData.addBreakfast ? 80 * (formData.adults + formData.children) * totalDays : 0), [formData, totalDays]);
  const totalCost = useMemo(() => subtotal + breakfastCost, [subtotal, breakfastCost]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    if (isCheckbox) {
      const { checked } = e.target as HTMLInputElement;
       setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
       setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateStep1 = () => {
    if (!formData.checkin || !formData.checkout || !formData.roomType) {
      setFormErrors(e => ({ ...e, step1: 'Please fill in all fields.' }));
      return false;
    }
    if (totalDays <= 0) {
      setFormErrors(e => ({ ...e, step1: 'Check-out date must be after check-in date.' }));
      return false;
    }
    setFormErrors(e => ({ ...e, step1: '' }));
    return true;
  }

  const validateStep2 = () => {
    const totalGuests = formData.adults + formData.children;
    if (totalGuests < 1) {
      setFormErrors(e => ({ ...e, step2: 'At least one adult is required.' }));
      return false;
    }
    if (selectedRoom && totalGuests > selectedRoom.maxGuests) {
      setFormErrors(e => ({ ...e, step2: `This room can only accommodate up to ${selectedRoom.maxGuests} guests.` }));
      return false;
    }
    setFormErrors(e => ({ ...e, step2: '' }));
    return true;
  }

  const validateStep3 = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setFormErrors(e => ({ ...e, step3: 'Please fill in all required fields.' }));
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
       setFormErrors(e => ({ ...e, step3: 'Please enter a valid email address.'}));
       return false;
    }
    setFormErrors(e => ({ ...e, step3: '' }));
    return true;
  }
  
  const nextStep = () => {
    let isValid = false;
    if (step === 1) isValid = validateStep1();
    else if (step === 2) isValid = validateStep2();
    else if (step === 3) isValid = validateStep3();
    
    if (isValid && step < 4) {
      setStep(s => s + 1);
    }
  };
  
  const prevStep = () => setStep(s => s > 1 ? s - 1 : 1);

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
        const message = `*Belladonna Booking Inquiry*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\n\nRoom: ${selectedRoom?.name}\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nDuration: ${totalDays} night(s)\nGuests: ${formData.adults} Adults, ${formData.children} Children\n\nBreakfast: ${formData.addBreakfast ? 'Yes' : 'No'}\n\nNotes: ${formData.notes || 'None'}\n\n*Estimated Total: R${totalCost.toFixed(2)}*`;
        const whatsappUrl = `https://wa.me/27636084576?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappUrl, '_blank');
        
        setIsProcessing(false);
        setStep(5);
    }, 1500);
  }

  const resetForm = () => {
    setFormData({
        checkin: today, checkout: '', roomType: '', adults: 1, children: 0, addBreakfast: false,
        name: '', email: '', phone: '', notes: '',
    });
    setStep(1);
  }

  const steps = ['Dates & Room', 'Guests & Extras', 'Your Details', 'Review & Submit'];
  
  return (
    <>
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 bg-subtle-bg dark:bg-black/20 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-bold text-brand-text dark:text-dark-text">Make a Reservation</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-text/80 dark:text-dark-text/80">Complete the steps below to send your booking inquiry.</p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-brand-bg dark:bg-dark-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white dark:bg-dark-bg/50 p-6 sm:p-10 rounded-xl shadow-2xl">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex items-center">
                {steps.map((stepName, index) => (
                  <React.Fragment key={index}>
                    <div className="flex items-center text-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold transition-colors ${step > index + 1 ? 'bg-brand-green text-white' : step === index + 1 ? 'bg-white dark:bg-dark-bg border-2 border-brand-green text-brand-green dark:border-dark-accent dark:text-dark-accent' : 'bg-subtle-bg dark:bg-dark-bg/50 border-2 border-gray-300 dark:border-gray-600 text-gray-500'}`}>
                        {step > index + 1 ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg> : <span>{index + 1}</span>}
                      </div>
                      <p className={`ml-4 text-sm font-semibold hidden sm:block ${step >= index + 1 ? 'text-brand-green dark:text-dark-accent' : 'text-gray-500'}`}>{stepName}</p>
                    </div>
                    {index < steps.length - 1 && <div className={`flex-1 h-px mx-4 ${step > index + 1 ? 'bg-brand-green dark:bg-dark-accent' : 'bg-gray-300 dark:bg-gray-600'}`}></div>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <form onSubmit={submitForm}>
              {step === 1 && (
                <div>
                  <h2 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text mb-6">1. Select Dates & Room</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="checkin" className="block text-sm font-medium">Check-in Date</label>
                      <input type="date" id="checkin" name="checkin" value={formData.checkin} onChange={handleChange} min={today} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                    </div>
                    <div>
                      <label htmlFor="checkout" className="block text-sm font-medium">Check-out Date</label>
                      <input type="date" id="checkout" name="checkout" value={formData.checkout} onChange={handleChange} min={formData.checkin} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                    </div>
                  </div>
                  <div className="mt-6">
                    <label htmlFor="roomType" className="block text-sm font-medium">Room Type</label>
                    <select id="roomType" name="roomType" value={formData.roomType} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg">
                      <option value="">-- Select a Room --</option>
                      {rooms.map(room => <option key={room.id} value={room.id}>{`${room.name} (R${room.price}/night)`}</option>)}
                    </select>
                  </div>
                  {formErrors.step1 && <p className="text-red-500 text-sm mt-2">{formErrors.step1}</p>}
                </div>
              )}

              {step === 2 && (
                <div>
                  <h2 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text mb-6">2. Guests & Extras</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                          <label htmlFor="adults" className="block text-sm font-medium">Adults</label>
                          <input type="number" id="adults" name="adults" value={formData.adults} onChange={handleChange} min="1" max={selectedRoom?.maxGuests} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                      </div>
                      <div>
                          <label htmlFor="children" className="block text-sm font-medium">Children</label>
                          <input type="number" id="children" name="children" value={formData.children} onChange={handleChange} min="0" max={(selectedRoom?.maxGuests || 1) - formData.adults} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                      </div>
                  </div>
                  <div className="mt-6">
                      <label className="block text-sm font-medium">Extras</label>
                      <div className="mt-2 space-y-2">
                          <label className="flex items-center p-3 rounded-md hover:bg-subtle-bg dark:hover:bg-dark-bg/40 cursor-pointer border border-gray-300 dark:border-gray-600">
                              <input type="checkbox" name="addBreakfast" checked={formData.addBreakfast} onChange={handleChange} className="h-4 w-4 rounded border-gray-300 text-brand-green focus:ring-brand-green" />
                              <span className="ml-3">Breakfast (R80 per person per day)</span>
                          </label>
                      </div>
                  </div>
                  {formErrors.step2 && <p className="text-red-500 text-sm mt-2">{formErrors.step2}</p>}
                </div>
              )}

              {step === 3 && (
                 <div>
                    <h2 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text mb-6">3. Your Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium">Email Address</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium">Phone Number</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+27 82 123 4567" className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg" />
                        </div>
                    </div>
                    <div className="mt-6">
                        <label htmlFor="notes" className="block text-sm font-medium">Special Requests / Notes</label>
                        <textarea id="notes" name="notes" rows={3} value={formData.notes} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-brand-green focus:ring-brand-green bg-subtle-bg dark:bg-dark-bg"></textarea>
                    </div>
                    {formErrors.step3 && <p className="text-red-500 text-sm mt-2">{formErrors.step3}</p>}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h2 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text mb-6">4. Review & Submit</h2>
                  <div className="space-y-4 border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-subtle-bg dark:bg-dark-bg/40">
                      <div className="flex justify-between"><span className="font-medium">Room:</span><span className="text-right">{selectedRoom ? selectedRoom.name : 'N/A'}</span></div>
                      <div className="flex justify-between"><span className="font-medium">Dates:</span><span className="text-right">{`${formData.checkin} to ${formData.checkout}`}</span></div>
                      <div className="flex justify-between"><span className="font-medium">Duration:</span><span className="text-right">{`${totalDays} night(s)`}</span></div>
                      <div className="flex justify-between"><span className="font-medium">Guests:</span><span className="text-right">{`${formData.adults} Adults, ${formData.children} Children`}</span></div>
                      <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                      <div className="flex justify-between"><span className="font-medium">Room Cost:</span><span className="text-right">{`R ${subtotal.toFixed(2)}`}</span></div>
                      {formData.addBreakfast && <div className="flex justify-between"><span className="font-medium">Breakfast:</span><span className="text-right">{`R ${breakfastCost.toFixed(2)}`}</span></div>}
                      <div className="border-t border-gray-300 dark:border-gray-700 my-2"></div>
                      <div className="flex justify-between text-xl font-bold text-brand-green dark:text-dark-accent"><span>Total Cost:</span><span>{`R ${totalCost.toFixed(2)}`}</span></div>
                  </div>
                  <div className="mt-6 text-center text-sm p-4 bg-brand-green/10 text-brand-green-dark dark:bg-dark-accent/10 dark:text-dark-accent rounded-lg"><p>A <strong>R200 deposit</strong> may be required to confirm your booking. Payment details will be sent via WhatsApp or Email. No payment is needed now.</p></div>
                </div>
              )}

              {step === 5 && (
                <div className="text-center py-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    <h2 className="text-2xl font-sans font-bold text-brand-text dark:text-dark-text">Booking Inquiry Sent!</h2>
                    <p className="mt-2">We have opened WhatsApp with your booking summary. Please send the pre-filled message. We will contact you shortly to confirm availability.</p>
                    <button type="button" onClick={resetForm} className="mt-6 bg-brand-green text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300">Make another booking</button>
                </div>
              )}
              
              {step < 5 && (
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
                  <button type="button" onClick={prevStep} className={`w-full sm:w-auto bg-gray-200 dark:bg-dark-bg text-brand-text dark:text-dark-text font-bold px-6 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-dark-bg/50 transition ${step <= 1 ? 'invisible' : ''}`}>Back</button>
                  {step === 1 && <div className="hidden sm:flex flex-grow"></div>}
                  {step < 4 && <button type="button" onClick={nextStep} className="w-full sm:w-auto bg-brand-green text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300">Next</button>}
                  {step === 4 && <button type="submit" disabled={isProcessing} className="w-full sm:w-auto bg-brand-green text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-brand-green-dark transition-all transform hover:scale-105 duration-300 flex items-center justify-center disabled:bg-brand-green/70 disabled:cursor-not-allowed">
                    {isProcessing && <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>}
                    {isProcessing ? 'Processing...' : 'Submit Inquiry'}
                  </button>}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
