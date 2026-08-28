import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const Home = () => (
  <Layout>
    <SEOHead 
      title="AI Automation for Service-Based Businesses"
      description="Help therapists, dentists, vets, and medspas reclaim time and reduce admin burden with AI automation. Book a free consultation today."
      keywords="AI automation, service businesses, therapy automation, dental practice automation, veterinary automation, medspa automation"
      path="/"
    />
    <section className="relative h-[450px] md:h-[550px] flex items-center justify-center text-center overflow-hidden rounded-xl mb-12">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/hero-video.mp4"
      />
      <div className="relative z-10 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Automation for Service-Based Businesses</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">We help therapists, dentists, vets, and medspas reclaim time and reduce admin burden—without replacing human jobs. Confident, outcome-driven, and human-centered AI automation.</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold shadow-none hover:bg-royal hover:shadow-lg transition-colors duration-300">Book a Free Consult</a>
      </div>
    </section>
    <section className="py-12 grid md:grid-cols-3 gap-8">
      <a href="/processes/intake" className="block p-6 bg-white rounded-2xl shadow-sm hover:ring-2 hover:ring-blue-500 transition-all duration-300">
        <h2 className="font-bold text-xl mb-2 text-black">Client Intake</h2>
        <p className="text-gray-700">Automate new client onboarding, forms, and scheduling.</p>
      </a>
      <a href="/processes/appointment-reminders" className="block p-6 bg-white rounded-2xl shadow-sm hover:ring-2 hover:ring-green-500 transition-all duration-300">
        <h2 className="font-bold text-xl mb-2 text-black">Appointment Reminders</h2>
        <p className="text-gray-700">Reduce no-shows with automated, personalized reminders.</p>
      </a>
      <a href="/processes/missed-calls" className="block p-6 bg-white rounded-2xl shadow-sm hover:ring-2 hover:ring-royal transition-all duration-300">
        <h2 className="font-bold text-xl mb-2 text-black">Missed Call Follow-Up</h2>
        <p className="text-gray-700">Never lose a lead—automatically follow up on missed calls.</p>
      </a>
    </section>
    <section className="py-12 text-center">
      <div className="max-w-xl mx-auto bg-silver rounded-xl p-8 border border-gray-200">
        <h3 className="font-semibold text-lg mb-2 text-black">Contact Us</h3>
        <div className="bg-white border border-gray-200 rounded p-4 text-gray-400">[Tally form placeholder]</div>
      </div>
    </section>
  </Layout>
);

export default Home; 