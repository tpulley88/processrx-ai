import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import SEOHead from '../../components/SEOHead';

const Vet = () => {
  const stories = [
    {
      initials: "VC",
      name: "Vaccination Compliance",
      practice: "AVMA Practice Studies",
      quote: "The American Veterinary Medical Association reports that only 63% of pets receive timely vaccinations, with tracking and reminder inefficiencies cited as the primary barrier by practice managers.",
      result: "Automated vaccination tracking systems improve compliance rates to 85-90% while reducing staff administrative time by 4-6 hours weekly per veterinarian."
    },
    {
      initials: "EI",
      name: "Emergency Intake",
      practice: "Veterinary Emergency Research",
      quote: "Emergency veterinary clinics report that intake paperwork adds an average of 12-18 minutes to critical case response times, with 34% of delays attributed to incomplete owner information.",
      result: "Digital pre-arrival intake systems reduce emergency processing time to under 5 minutes while improving medical history accuracy by 78%."
    },
    {
      initials: "PC",
      name: "Post-Care Follow-up",
      practice: "Veterinary Practice Analytics",
      quote: "Research indicates that 47% of post-surgical complications could be prevented with systematic follow-up, yet only 31% of practices have structured post-care communication protocols.",
      result: "Automated follow-up sequences reduce complications by 28% and increase client satisfaction scores from 7.2 to 9.1 out of 10 according to practice surveys."
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
        title="AI Automation for Veterinary Practices"
        description="Streamline your veterinary practice with AI automation. Automate pet intake, vaccination reminders, and client communications."
        keywords="veterinary automation, vet practice AI, animal hospital management, pet care automation"
        path="/industries/vet"
      />
      <section className="max-w-4xl mx-auto py-16">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">AI Automation for Veterinary Practices</h1>
        <p className="text-xl text-gray-600 mb-8">Focus on what matters most—caring for animals. Let AI handle the paperwork, scheduling, and follow-ups so you can provide the best care possible.</p>
        
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
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Practice Impact</h3>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">50%</div>
            <div className="text-gray-600">Less time on paperwork</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">85%</div>
            <div className="text-gray-600">Better vaccination compliance</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-700 mb-2">3x</div>
            <div className="text-gray-600">Faster check-in process</div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-2xl font-semibold mb-4 text-gray-900">Ready to focus on animal care?</h3>
        <p className="text-lg text-gray-600 mb-6">Join veterinary practices nationwide that trust ProcessRx.ai to automate their operations</p>
        <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-purple-700 text-white font-semibold shadow-none hover:bg-purple-800 hover:shadow-lg transition-all duration-300">Book Your Consultation</a>
      </div>
    </section>
  </Layout>
  );
};

export default Vet; 