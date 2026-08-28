import React, { useState, useRef } from 'react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/how-it-works' },
  {
    label: 'Industries',
    dropdown: [
      { label: 'Therapist', href: '/industries/therapist' },
      { label: 'Dentist', href: '/industries/dentist' },
      { label: 'Vet', href: '/industries/vet' },
      { label: 'Medspa', href: '/industries/medspa' },
    ],
  },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  // Helper to handle mouse enter/leave for dropdowns with delay
  const handleDropdownEnter = (label: string) => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpenDropdown(label);
  };
  const handleDropdownLeave = (label: string) => {
    closeTimeout.current = setTimeout(() => {
      if (openDropdown === label) setOpenDropdown(null);
    }, 180);
  };

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-silver border-b border-gray-100 relative z-50">
      <div className="flex items-center gap-3">
        {/* Logo placeholder */}
        <div className="w-10 h-10 bg-royal rounded-full flex items-center justify-center font-bold text-xl text-white">Rx</div>
        <span className="font-bold text-lg md:text-2xl text-black">ProcessRx.ai</span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) =>
          link.dropdown ? (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => handleDropdownEnter(link.label)}
              onMouseLeave={() => handleDropdownLeave(link.label)}
            >
              <button
                className="hover:text-accentblue font-medium flex items-center gap-1 text-black focus:outline-none focus:text-accentblue transition-colors duration-200"
                aria-haspopup="true"
                aria-expanded={openDropdown === link.label}
                tabIndex={0}
              >
                {link.label}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div
                className={`absolute left-0 mt-2 min-w-[180px] bg-white border border-silver rounded-2xl shadow-xl transition-all duration-200 z-20 ${openDropdown === link.label ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onMouseEnter={() => handleDropdownEnter(link.label)}
                onMouseLeave={() => handleDropdownLeave(link.label)}
              >
                {link.dropdown.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-5 py-3 rounded-xl hover:text-blue-600 focus:text-green-500 hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-green-500 transition-all duration-200 font-medium text-black"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-accentblue font-medium text-black transition-colors duration-200"
            >
              {link.label}
            </a>
          )
        )}
      </nav>
      {/* CTA always visible */}
      <a href="/contact" className="ml-4 px-5 py-2 rounded-full bg-black text-white font-semibold shadow-none hover:bg-royal hover:shadow-lg transition-colors duration-300">Book a Free Consult</a>
      {/* Hamburger for mobile */}
      <button
        className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-royal"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Open menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>
      </button>
      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/40 z-40" onClick={() => setMobileOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-xs h-full bg-white shadow-2xl z-50 transform transition-transform duration-300 md:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-silver">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-royal rounded-full flex items-center justify-center font-bold text-lg text-white">Rx</div>
            <span className="font-bold text-base text-black">ProcessRx.ai</span>
          </div>
          <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-6 py-6">
          {navLinks.map((link) =>
            link.dropdown ? (
              <details key={link.label} className="mb-2">
                <summary className="font-semibold text-black py-2 cursor-pointer flex items-center justify-between">
                  {link.label}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="flex flex-col gap-1 mt-2 pl-2">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 rounded-lg hover:text-blue-600 focus:text-green-500 hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-green-500 transition-all duration-200 font-medium text-black"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </details>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 rounded-lg hover:text-blue-600 focus:text-green-500 hover:ring-2 hover:ring-blue-500 focus:ring-2 focus:ring-green-500 transition-all duration-200 font-medium text-black"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            )
          )}
          <a href="/contact" className="mt-4 px-5 py-2 rounded-full bg-black text-white font-semibold shadow-none hover:bg-royal hover:shadow-lg transition-colors duration-300 text-center">Book a Free Consult</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 