import React, { useState } from 'react';

const CookieConsent = () => {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookieAccepted'));

  const accept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 shadow-lg rounded-full px-6 py-3 flex items-center gap-3 z-50">
      <span className="text-sm text-gray-700">We use cookies for analytics. See our <a href='/privacy' className='underline text-purple-700'>privacy policy</a>.</span>
      <button onClick={accept} className="ml-4 px-4 py-1 rounded-full bg-purple-700 text-white font-semibold hover:bg-purple-800 transition">Accept</button>
    </div>
  );
};

export default CookieConsent; 