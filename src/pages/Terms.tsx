import React from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const Terms = () => (
  <Layout>
    <SEOHead 
      title="Terms of Service"
      description="ProcessRx.ai Terms of Service - Understand the terms and conditions for using our AI automation services and website."
      path="/terms"
    />
    <section className="max-w-2xl mx-auto py-16">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: January 2026</p>
      <div className="prose max-w-none">
        <ol className="list-decimal pl-6">
          <li><b>Website Purpose</b><br />This site is intended for educational and consulting lead generation purposes. It showcases automation capabilities and invites users to inquire about services through a contact form.</li>
          <li><b>No Guarantees</b><br />ProcessRx.ai does not guarantee specific business outcomes. Automation suggestions are based on best practices, not one-size-fits-all solutions.</li>
          <li><b>External Tools</b><br />We may reference or integrate with third-party tools (e.g., OpenAI, Airtable, N8N, OpenPhone). We are not responsible for the functionality, uptime, or data policies of these external services.</li>
          <li><b>Intellectual Property</b><br />All branding, content, and visuals on this site are owned by MTTM Ventures. Please do not copy, redistribute, or present our material as your own.</li>
          <li><b>Consultations & Agreements</b><br />Engaging with our team beyond the initial contact form may require additional contracts and terms, which will be provided separately.</li>
        </ol>
      </div>
    </section>
  </Layout>
);

export default Terms; 