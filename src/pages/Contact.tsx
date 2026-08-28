import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';
import ContactForm from '../components/ContactForm';

const Contact = () => (
  <Layout>
    <SEOHead 
      title="Contact Us - Book Your Free Consultation"
      description="Ready to automate your service business? Book a free consultation with ProcessRx.ai. Get personalized automation solutions for your practice."
      keywords="book consultation, contact ProcessRx.ai, automation consultation, free demo"
      path="/contact"
    />
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Book Your Free Consultation</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">Ready to reclaim your time? Let's discuss how AI automation can transform your practice. We'll get back to you within 24 hours.</p>
      <ContactForm />
      
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Prefer to call?</h3>
        <p className="text-gray-600 mb-2">Speak directly with our automation specialists</p>
        <a href="tel:+1-555-PROCESS" className="text-purple-700 font-semibold text-lg hover:underline">
          (555) PROCESS
        </a>
        <p className="text-sm text-gray-500 mt-2">Available weekdays 9 AM - 6 PM EST</p>
      </div>
    </section>
  </Layout>
);

export default Contact; 