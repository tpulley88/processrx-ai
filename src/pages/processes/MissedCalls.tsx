import React from 'react';
import Layout from '../../components/Layout';

const MissedCalls = () => (
  <Layout>
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-4">Missed Call Follow-Up Automation</h1>
      <p className="text-lg text-gray-600 mb-8">Never lose a lead—automate follow-up on missed calls and boost conversions.</p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 rounded-xl p-6">
          <h2 className="font-semibold text-purple-700 mb-2">Before Automation</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Missed calls go unanswered</li>
            <li>Lost leads and revenue</li>
            <li>Manual callbacks (often forgotten)</li>
          </ul>
        </div>
        <div className="bg-purple-50 rounded-xl p-6">
          <h2 className="font-semibold text-purple-700 mb-2">After Workflow</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Instant automated follow-up</li>
            <li>Leads captured and nurtured</li>
            <li>Revenue opportunities recovered</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-gray-200 rounded p-4 text-gray-400 mb-4">[Chatbot: "Automated follow-up recovers up to 30% of missed leads. Want to see how?"]</div>
      <div className="bg-green-50 border border-green-200 rounded p-4 text-green-700 text-center">Thank you for your interest! (Banner placeholder)</div>
    </section>
  </Layout>
);

export default MissedCalls; 