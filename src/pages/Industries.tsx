import React from 'react';
import Layout from '../components/Layout';

const Industries = () => (
  <Layout>
    <section className="text-center py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries</h1>
      <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">See how automation can help your field. Explore industry-specific examples and inspiration.</p>
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        <a href="/industries/therapist" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Therapist</a>
        <a href="/industries/dentist" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Dentist</a>
        <a href="/industries/vet" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Vet</a>
        <a href="/industries/medspa" className="px-6 py-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 font-semibold">Medspa</a>
      </div>
    </section>
  </Layout>
);

export default Industries; 