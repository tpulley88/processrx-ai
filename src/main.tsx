import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './main.css';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Industries from './pages/Industries';
import Therapist from './pages/industries/Therapist';
import Dentist from './pages/industries/Dentist';
import Vet from './pages/industries/Vet';
import Medspa from './pages/industries/Medspa';
import Intake from './pages/processes/Intake';
// Placeholders for additional use cases
import AppointmentReminders from './pages/processes/AppointmentReminders';
import MissedCalls from './pages/processes/MissedCalls';
import CookieConsent from './components/CookieConsent';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/use-cases" element={<Navigate to="/how-it-works" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/therapist" element={<Therapist />} />
          <Route path="/industries/dentist" element={<Dentist />} />
          <Route path="/industries/vet" element={<Vet />} />
          <Route path="/industries/medspa" element={<Medspa />} />
          <Route path="/processes/intake" element={<Intake />} />
          <Route path="/processes/appointment-reminders" element={<AppointmentReminders />} />
          <Route path="/processes/missed-calls" element={<MissedCalls />} />
        </Routes>
      </BrowserRouter>
      <CookieConsent />
      <ChatWidget />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />); 