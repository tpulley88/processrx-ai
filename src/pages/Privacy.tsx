import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const Privacy = () => (
  <Layout>
    <SEOHead 
      title="Privacy Policy"
      description="ProcessRx.ai Privacy Policy - Learn how we collect, use, and protect your personal information when using our AI automation services."
      path="/privacy"
    />
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600 mb-6">At ProcessRx.ai, a division of MTTM Ventures, we value your trust. This Privacy Policy explains how we collect, use, and protect your personal information.</p>
        <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>
        <ol className="list-decimal pl-6">
          <li><b>Information We Collect</b><br />When you use our website or submit a contact form, we may collect: your name, email address, phone number, preferred contact method, industry type, services of interest, and technical data (analytics).</li>
          <li><b>How We Use Your Information</b><br />We use this data to understand your automation needs, provide relevant services, improve our offerings, and respond to inquiries. We do not sell your information to third parties.</li>
          <li><b>Data Storage & Tools</b><br />We securely store form data using tools such as Airtable, Google Workspace, and N8N workflows. Only authorized team members have access.</li>
          <li><b>Analytics & Cookies</b><br />We use tools like Google Analytics to understand website traffic. By using our site, you consent to cookie tracking. You can manage preferences in your browser.</li>
          <li><b>Contact</b><br />Email us at: <a href="mailto:admin@processrx.ai">admin@processrx.ai</a>. Want your data removed? Just ask.</li>
        </ol>
      </div>
    </section>
  </Layout>
);

export default Privacy; 