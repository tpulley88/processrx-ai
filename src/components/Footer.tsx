import React from 'react';

const Footer = () => (
  <footer className="w-full px-6 py-8 bg-gray-50 border-t border-gray-100 mt-12 text-sm text-gray-600">
    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        {/* Logo placeholder */}
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold text-lg text-purple-700">Rx</div>
        <span className="font-bold text-base text-gray-900">ProcessRx.ai</span>
      </div>
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center">
        <a href="/privacy" className="hover:text-purple-700">Privacy Policy</a>
        <a href="/terms" className="hover:text-purple-700">Terms of Service</a>
        <span>Contact: <a href="mailto:admin@processrx.ai" className="hover:text-purple-700">admin@processrx.ai</a></span>
      </div>
      <div className="text-xs text-gray-400">A product of MTTM Ventures</div>
    </div>
  </footer>
);

export default Footer; 