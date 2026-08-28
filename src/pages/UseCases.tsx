import React from 'react';
import Layout from '../components/Layout';

const UseCases = () => (
  <Layout>
    <section className="text-center py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Use Cases</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Explore how automation can streamline your business. See before-and-after workflows for common processes.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a href="/processes/intake" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Client Intake</a>
        <a href="/processes/appointment-reminders" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Appointment Reminders</a>
        <a href="/processes/missed-calls" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Missed Call Follow-Up</a>
      </div>
    </section>
  </Layout>
);

export default UseCases; 