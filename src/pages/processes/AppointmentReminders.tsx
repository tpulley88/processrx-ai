import React from 'react';
import Layout from '../../components/Layout';

const AppointmentReminders = () => (
  <Layout>
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Appointment Reminders Automation</h1>
      <p className="text-lg text-gray-600 mb-8">Automate reminders to reduce no-shows and keep your schedule full.</p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="font-semibold text-purple-700 mb-2">Before Automation</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Manual calls or texts</li>
            <li>Missed reminders</li>
            <li>High no-show rates</li>
          </ul>
        </div>
        <div className="bg-purple-50 rounded-xl p-6">
          <h2 className="font-semibold text-purple-700 mb-2">After Workflow</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Automated, timely reminders</li>
            <li>Personalized messages</li>
            <li>No-shows reduced by up to 40%</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded p-4 text-gray-400 mb-4">[Chatbot: "Automated reminders can reduce no-shows by 40%. Want to see how?"]</div>
      <div className="bg-green-50 border border-green-200 rounded p-4 text-green-700 text-center">Thank you for your interest! (Banner placeholder)</div>
    </section>
  </Layout>
);

export default AppointmentReminders; 