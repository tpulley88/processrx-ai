import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  bestTime: string;
  preferredMethod: string[];
  industry: string;
  interestedProcesses: string[];
  other: string;
  honeypot: string; // spam protection
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    bestTime: '',
    preferredMethod: [],
    industry: '',
    interestedProcesses: [],
    other: '',
    honeypot: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkboxInput = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkboxInput.checked 
          ? [...(prev[name as keyof FormData] as string[]), value]
          : (prev[name as keyof FormData] as string[]).filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Spam protection - honeypot check
    if (formData.honeypot) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual Tally or backend integration)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      setIsSubmitted(true);
      setShowThankYou(true);
      
      // Auto-hide thank you banner after 60 seconds
      setTimeout(() => {
        setShowThankYou(false);
      }, 60000);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        bestTime: '',
        preferredMethod: [],
        industry: '',
        interestedProcesses: [],
        other: '',
        honeypot: ''
      });
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted && showThankYou) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="text-green-700 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
          <p className="text-lg">We've received your consultation request and will be in touch within 24 hours.</p>
          <p className="text-sm mt-4">In the meantime, feel free to explore our use cases or chat with our assistant.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        
        <div>
          <label htmlFor="bestTime" className="block text-sm font-medium text-gray-700 mb-2">
            Best Time to Contact
          </label>
          <input
            type="text"
            id="bestTime"
            name="bestTime"
            value={formData.bestTime}
            onChange={handleInputChange}
            placeholder="e.g., Weekdays 9-5 EST"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Contact Method
        </label>
        <div className="flex flex-wrap gap-4">
          {['Email', 'Phone', 'Text'].map(method => (
            <label key={method} className="flex items-center">
              <input
                type="checkbox"
                name="preferredMethod"
                value={method}
                onChange={handleInputChange}
                className="mr-2"
              />
              {method}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
          Industry Type
        </label>
        <input
          type="text"
          id="industry"
          name="industry"
          value={formData.industry}
          onChange={handleInputChange}
          placeholder="e.g., Therapy, Dentistry, Veterinary, Medspa"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interested Processes (select all that apply)
        </label>
        <div className="grid md:grid-cols-2 gap-2">
          {['Client Intake', 'Appointment Reminders', 'Missed Call Follow-up', 'Scheduling Optimization'].map(process => (
            <label key={process} className="flex items-center">
              <input
                type="checkbox"
                name="interestedProcesses"
                value={process}
                onChange={handleInputChange}
                className="mr-2"
              />
              {process}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="other" className="block text-sm font-medium text-gray-700 mb-2">
          Other Processes or Questions
        </label>
        <textarea
          id="other"
          name="other"
          value={formData.other}
          onChange={handleInputChange}
          rows={4}
          placeholder="Tell us about any specific challenges or automation needs..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Honeypot field for spam protection - hidden from users */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        tabIndex={-1}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={isSubmitting || !formData.name || !formData.email}
        className="w-full px-8 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-none hover:bg-purple-800 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Book Free Consultation'}
      </button>
      
      <p className="text-xs text-gray-500 text-center">
        By submitting this form, you agree to our <a href="/privacy" className="text-purple-700 hover:underline">Privacy Policy</a> and <a href="/terms" className="text-purple-700 hover:underline">Terms of Service</a>.
      </p>
    </form>
  );
};

export default ContactForm;