import React, { useState } from 'react';
import Layout from '../components/Layout';
import SEOHead from '../components/SEOHead';

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState('process');

  const processSteps = [
    {
      step: "01",
      title: "Discovery Consultation",
      description: "We analyze your current workflows, identify automation opportunities, and understand your practice's specific needs and pain points.",
      duration: "1-2 hours",
      deliverable: "Custom automation roadmap & ROI projections"
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our team designs tailored automation workflows using industry-leading tools with healthcare security considerations specific to your practice.",
      duration: "3-5 days",
      deliverable: "Technical implementation plan & timeline"
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build and rigorously test your automation systems in a secure sandbox environment before any deployment to your live systems.",
      duration: "1-2 weeks",
      deliverable: "Fully tested automation system & documentation"
    },
    {
      step: "04",
      title: "Implementation & Training",
      description: "Seamless deployment with minimal disruption to your practice, including comprehensive staff training and gradual system rollout.",
      duration: "2-3 days",
      deliverable: "Live automation system & trained staff"
    },
    {
      step: "05",
      title: "Optimization & Support",
      description: "Ongoing monitoring, performance optimization, and dedicated support to ensure maximum efficiency and ROI for your practice.",
      duration: "Ongoing",
      deliverable: "Continuous improvement & 24/7 support"
    }
  ];

  const automationTypes = [
    {
      title: "Client Intake Automation",
      icon: "📋",
      description: "Streamline patient onboarding with intelligent forms, data collection, and validation workflows.",
      features: [
        "Digital intake forms with conditional logic",
        "Automated appointment scheduling",
        "Medical history integration",
        "Healthcare data security considerations"
      ],
      timesSaved: "4-6 hours/week",
      industries: ["Therapists", "Dentists", "Vets", "Medspas"]
    },
    {
      title: "Appointment Management",
      icon: "📅",
      description: "Reduce no-shows and optimize scheduling with intelligent reminders and calendar management.",
      features: [
        "Multi-channel appointment reminders (SMS, Email, Voice)",
        "Automated rescheduling for cancellations",
        "Calendar optimization and gap filling",
        "Wait-list management and notifications",
        "Two-way communication handling"
      ],
      timesSaved: "3-5 hours/week", 
      industries: ["Therapists", "Dentists", "Vets", "Medspas"]
    },
    {
      title: "Follow-up & Care Sequences",
      icon: "🔄",
      description: "Ensure no patient falls through the cracks with automated follow-up and care coordination.",
      features: [
        "Post-treatment care instructions",
        "Medication and care reminders",
        "Progress check-ins and surveys",
        "Treatment plan compliance tracking",
        "Outcome measurement and reporting"
      ],
      timesSaved: "2-4 hours/week",
      industries: ["Therapists", "Dentists", "Vets", "Medspas"]
    },
    {
      title: "Communication Automation", 
      icon: "💬",
      description: "Handle routine communications automatically while maintaining personal touch and compliance.",
      features: [
        "Missed call follow-up sequences",
        "Patient education content delivery",
        "Billing and payment reminders",
        "Review and feedback collection",
        "Emergency communication protocols"
      ],
      timesSaved: "2-3 hours/week",
      industries: ["Therapists", "Dentists", "Vets", "Medspas"]
    }
  ];

  const industries = [
    {
      name: "Therapists & Mental Health Practices",
      icon: "🧠",
      challenges: [
        "8-10 hours weekly spent on administrative tasks (APA study)",
        "67% of intake forms incomplete on arrival (JMIR research)",
        "30-40% average no-show rates without systematic reminders",
        "30-40% average no-show rates without systematic reminders"
      ],
      solutions: [
        "Automated therapy-specific intake with organized client data collection",
        "Secure appointment reminders and rescheduling systems",
        "Treatment plan follow-up sequences and progress tracking", 
        "Automated billing and session note reminders for providers"
      ],
      implementation: "Integration with SimplePractice, TherapyNotes, or custom API connections"
    },
    {
      name: "Dental Practices", 
      icon: "🦷",
      challenges: [
        "68% of comprehensive treatment plans never completed (ADA data)",
        "68% of comprehensive treatment plans never completed",
        "Only 40-50% recall appointment compliance without systems",
        "Manual appointment confirmations consuming front desk time"
      ],
      solutions: [
        "Systematic treatment plan follow-up with acceptance tracking",
        "Systematic treatment plan follow-up with acceptance tracking",
        "Intelligent recall campaigns with automated scheduling",
        "Post-procedure care instructions and check-in sequences"
      ],
      implementation: "Dental practice management system APIs + custom workflow automation"
    },
    {
      name: "Veterinary Clinics",
      icon: "🐕", 
      challenges: [
        "Only 63% vaccination compliance due to tracking inefficiencies",
        "12-18 minute emergency intake delays for critical cases", 
        "47% of post-surgical complications preventable with better follow-up",
        "Multiple reminder systems creating confusion and gaps"
      ],
      solutions: [
        "Unified vaccination tracking with automated owner reminders",
        "Pre-arrival emergency intake via mobile-friendly forms",
        "Structured post-surgery follow-up with complication prevention",
        "Wellness visit scheduling and pet health education campaigns"
      ],
      implementation: "Veterinary software integration + mobile-optimized communication"
    },
    {
      name: "Medical Spas & Aesthetic Practices",
      icon: "💆",
      challenges: [
        "31% appointment abandonment due to lengthy intake processes",
        "Only 64% treatment package completion rates",
        "43% of aesthetic complications preventable with proper aftercare",
        "High administrative overhead for package and membership tracking"
      ],
      solutions: [
        "Streamlined aesthetic consultation and consent workflows",
        "Intelligent package tracking with completion optimization", 
        "Precise aftercare sequences timed to treatment protocols",
        "Client retention campaigns and upsell automation"
      ],
      implementation: "Booking platform APIs + treatment-specific automation workflows"
    }
  ];

  return (
    <Layout>
      <SEOHead 
        title="How It Works - Practice Automation Process"
        description="Learn how ProcessRx.ai transforms healthcare practices through custom automation. From consultation to ongoing optimization."
        keywords="healthcare automation process, practice management automation, workflow optimization"
        path="/how-it-works"
      />
      
      <section className="max-w-6xl mx-auto py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to ongoing optimization, we transform your practice operations 
            through intelligent automation tailored to your specific needs and workflows.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setActiveTab('process')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'process' 
                  ? 'bg-white text-purple-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Our Process
            </button>
            <button
              onClick={() => setActiveTab('automations')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'automations' 
                  ? 'bg-white text-purple-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Automation Types
            </button>
            <button
              onClick={() => setActiveTab('industries')}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'industries' 
                  ? 'bg-white text-purple-700 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Industry Solutions
            </button>
          </div>
        </div>

        {/* Process Tab */}
        {activeTab === 'process' && (
          <div className="space-y-12">
            <div className="grid gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-purple-300 to-purple-100"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-800 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    
                    <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="md:col-span-2">
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-700">{step.description}</p>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <span className="text-sm font-medium text-purple-700">Timeline:</span>
                            <p className="text-sm text-gray-600">{step.duration}</p>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-purple-700">Deliverable:</span>
                            <p className="text-sm text-gray-600">{step.deliverable}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to Get Started?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Join our Early Access Program and be among the first practices to implement next-generation automation.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-3 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition-all duration-300"
              >
                Schedule Discovery Call
              </a>
            </div>
          </div>
        )}

        {/* Automations Tab */}
        {activeTab === 'automations' && (
          <div className="grid lg:grid-cols-2 gap-8">
            {automationTypes.map((automation, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{automation.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{automation.title}</h3>
                    <p className="text-sm text-gray-600">{automation.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-purple-700 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {automation.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm font-medium text-purple-700">Time Saved:</span>
                    <p className="text-lg font-semibold text-gray-900">{automation.timesSaved}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-purple-700">Applies to:</span>
                    <p className="text-sm text-gray-600">{automation.industries.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Industries Tab */}
        {activeTab === 'industries' && (
          <div className="space-y-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{industry.icon}</span>
                  <h3 className="text-2xl font-semibold text-gray-900">{industry.name}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">Current Challenges:</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {industry.challenges.map((challenge, challengeIndex) => (
                        <li key={challengeIndex}>• {challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">Our Solutions:</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {industry.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex}>• {solution}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <span className="text-sm font-medium text-purple-700">Implementation Approach: </span>
                  <span className="text-sm text-gray-700">{industry.implementation}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Technology Stack Section */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Our Technology Foundation</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-700 text-2xl">🔧</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Automation Engine</h4>
              <p className="text-sm text-gray-600">N8N-powered workflows with custom integrations and intelligent triggers for maximum flexibility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-700 text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Security & Compliance Focus</h4>
              <p className="text-sm text-gray-600">Built with healthcare data security in mind, designed to work within your existing compliance framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-700 text-2xl">🔗</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integration Layer</h4>
              <p className="text-sm text-gray-600">RESTful APIs and webhooks for seamless connection to existing practice management systems</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-700 mb-2">Early Access Program</h4>
            <p className="text-sm text-gray-700">
              We're currently onboarding select practices for our beta program. Implementation includes dedicated support, 
              custom workflow design, and preferential pricing for founding partners.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HowItWorks;