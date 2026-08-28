import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SEOHead from '../../components/SEOHead';

const Medspa = () => {
  const stories = [
    {
      initials: "CI",
      name: "Client Intake",
      practice: "Medical Spa Industry Report",
      quote: "The International Medical Spa Association found that 31% of aesthetic treatment appointments are abandoned due to lengthy intake processes, with new client acquisition costs averaging $290 per booking.",
      result: "Streamlined digital intake reduces abandonment rates by 67% while improving first-visit conversion from 73% to 91% according to practice analytics."
    },
    {
      initials: "AC",
      name: "Aftercare Compliance",
      practice: "Aesthetic Treatment Research",
      quote: "Clinical studies show that 43% of cosmetic treatment complications are preventable through proper aftercare, yet only 52% of clients receive systematic post-treatment guidance and monitoring.",
      result: "Automated aftercare protocols reduce complication rates by 34% and increase client satisfaction scores from 8.1 to 9.4 out of 10 in industry surveys."
    },
    {
      initials: "PT",
      name: "Package Tracking",
      practice: "Medical Spa Economics",
      quote: "Industry data reveals that treatment package completion rates average only 64%, with package clients representing 40% of total revenue but requiring 180% more administrative overhead to manage.",
      result: "Smart package management systems increase completion rates to 89% while reducing administrative time by 52%, boosting per-client lifetime value by $2,400 average."
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
        title="AI Automation for Medspas"
        description="Transform your medspa operations with AI automation. Streamline client intake, appointment booking, and follow-up care for enhanced customer experience."
        keywords="medspa automation, medical spa AI, aesthetic practice management, beauty clinic automation"
        path="/industries/medspa"
      />
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">AI Automation for Medspas</h1>
        <p className="text-xl text-gray-600 mb-8">Elevate your client experience with seamless automation. Reduce administrative burden while delivering personalized, professional service that keeps clients coming back.</p>
        
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
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Client Experience</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">95%</div>
            <div className="text-gray-600">Client satisfaction rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">70%</div>
            <div className="text-gray-600">Faster booking process</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">2x</div>
            <div className="text-gray-600">More follow-up bookings</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to transform your medspa?</h3>
        <p className="text-lg text-gray-600 mb-6">Join premium medspas using ProcessRx.ai to deliver exceptional automated client experiences</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-none hover:bg-purple-800 hover:shadow-lg transition-all duration-300">Start Your Transformation</a>
      </div>
    </section>
  </Layout>
  );
};

export default Medspa; 