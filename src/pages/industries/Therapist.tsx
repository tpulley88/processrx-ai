import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SEOHead from '../../components/SEOHead';

const Therapist = () => {
  const stories = [
    {
      initials: "AR",
      name: "Administrative Research",
      practice: "Industry Study Analysis",
      quote: "According to the American Psychological Association, therapists spend an average of 8-10 hours per week on administrative tasks including appointment scheduling, documentation, and client follow-ups.",
      result: "Automation could redirect these hours to billable client sessions, with practice management studies showing potential revenue increases of 15-25%."
    },
    {
      initials: "IF", 
      name: "Intake Efficiency",
      practice: "Digital Health Research",
      quote: "Research from the Journal of Medical Internet Research shows that digital intake processes reduce incomplete forms by 67% and decrease appointment delays by an average of 18 minutes per session.",
      result: "Streamlined digital workflows ensure sessions start on time while improving data quality and client satisfaction scores."
    },
    {
      initials: "NS",
      name: "No-Show Statistics",
      practice: "Healthcare Analytics",
      quote: "Healthcare industry data indicates that automated reminder systems reduce no-show rates from an average of 30-40% down to 10-15%, with text and email combinations showing the highest effectiveness.",
      result: "Smart scheduling systems can optimize calendar utilization and reduce waiting list backlogs by up to 50% according to practice management studies."
    }
  ];

  const [currentStory, setCurrentStory] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => prev + 1);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentStory === stories.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentStory(0);
        setTimeout(() => setIsTransitioning(true), 50);
      }, 500);
    }
  }, [currentStory, stories.length]);

  const handleManualChange = (index) => {
    setIsTransitioning(true);
    setCurrentStory(index);
  };

  return (
    <Layout>
      <SEOHead 
        title="AI Automation for Therapists"
        description="Streamline your therapy practice with AI automation. Automate intake, appointment reminders, and client follow-ups. Focus on client care, not paperwork."
        keywords="therapy automation, therapist AI, mental health practice management, therapy intake automation"
        path="/industries/therapist"
      />
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">AI Automation for Therapists</h1>
        <p className="text-xl text-gray-600 mb-8">Focus on what matters most—your clients. Let AI handle the administrative burden so you can dedicate more time to providing exceptional care.</p>
        
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900">Industry Research & Impact</h2>
          <div className="relative overflow-hidden">
            <div 
              className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${currentStory * 100}%)` }}
            >
              {[...stories, ...stories].map((story, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white border border-gray-200 rounded-xl p-6 mx-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                      <p className="text-sm text-gray-500">{story.practice}</p>
                    </div>
                    <p className="text-gray-700 mb-4 italic">{story.quote}</p>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <p className="text-sm text-purple-800"><strong>Research Impact:</strong> {story.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
              {stories.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentStory ? 'bg-purple-700 scale-110' : 'bg-gray-300 hover:bg-gray-400 hover:scale-105'
                  }`}
                  onClick={() => handleManualChange(index)}
                />
              ))}
            </div>
          </div>
        </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Industry-Backed Results</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">8-10hrs</div>
            <div className="text-gray-600">Weekly admin time saved (APA study)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">67%</div>
            <div className="text-gray-600">Reduction in incomplete forms (JMIR)</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">50%</div>
            <div className="text-gray-600">Faster waiting list movement</div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 mb-8">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900">How It Works</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-3 text-purple-700">Security-First Design</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Built with healthcare data security principles</li>
              <li>• Designed to work within your compliance requirements</li>
              <li>• Secure API integrations and data handling</li>
              <li>• Access controls and activity logging capabilities</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3 text-purple-700">Automation Framework</h4>
            <ul className="text-gray-700 space-y-2 text-sm">
              <li>• Custom workflow automation engine</li>
              <li>• RESTful API architecture for flexibility</li>
              <li>• Multi-channel communication (SMS, Email, Voice)</li>
              <li>• Intelligent scheduling and reminder systems</li>
            </ul>
          </div>
        </div>
        <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
          <p className="text-sm text-gray-600 italic">
            <strong>Early Access Program:</strong> We're currently onboarding select therapy practices for our beta program. 
            Implementation includes dedicated support and custom workflow design.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to join our Early Access Program?</h3>
        <p className="text-lg text-gray-600 mb-6">Be among the first therapy practices to implement next-generation automation</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-none hover:bg-purple-800 hover:shadow-lg transition-all duration-300">Apply for Beta Access</a>
      </div>
    </section>
  </Layout>
  );
};

export default Therapist; 