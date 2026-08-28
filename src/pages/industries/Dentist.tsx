import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SEOHead from '../../components/SEOHead';

const Dentist = () => {
  const stories = [
    {
      initials: "TA",
      name: "Treatment Acceptance",
      practice: "Dental Economics Study",
      quote: "Industry studies show that 68% of comprehensive treatment plans are never completed, primarily due to lack of systematic follow-up after the initial consultation appointment.",
      result: "Structured follow-up protocols increase treatment acceptance rates by 35-45% and can add $180,000+ annually to practice revenue per provider."
    },
    {
      initials: "RC",
      name: "Recall Compliance",
      practice: "Preventive Care Research",
      quote: "Dental practice studies indicate that only 40-50% of patients return for recommended preventive appointments without systematic recall programs, leading to underutilized hygiene schedules.",
      result: "Automated recall systems improve compliance to 75-85%, with top-performing practices seeing hygiene productivity increases of 60-90%."
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
        title="AI Automation for Dental Practices"
        description="Automate your dental practice operations with AI. Streamline patient intake, appointment scheduling, data management, and follow-ups."
        keywords="dental practice automation, dentist AI, dental office management, patient intake automation"
        path="/industries/dentist"
      />
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">AI Automation for Dental Practices</h1>
        <p className="text-xl text-gray-600 mb-8">Transform your dental practice with intelligent automation. Reduce administrative overhead while improving patient experience and practice efficiency.</p>
        
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
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Practice Performance</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">60%</div>
            <div className="text-gray-600">Faster patient check-in</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">35%</div>
            <div className="text-gray-600">Reduction in no-shows</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">4x</div>
            <div className="text-gray-600">More recall appointments</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to modernize your practice?</h3>
        <p className="text-lg text-gray-600 mb-6">Join leading dental practices using ProcessRx.ai to automate operations and improve patient care</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-none hover:bg-purple-800 hover:shadow-lg transition-all duration-300">Schedule Your Demo</a>
      </div>
    </section>
  </Layout>
  );
};

export default Dentist; 