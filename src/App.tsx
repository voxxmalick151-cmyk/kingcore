/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import BentoDifferentials from './components/BentoDifferentials';
import Testimonials from './components/Testimonials';
import WhatsAppWidget from './components/WhatsAppWidget';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  const [prefilledService, setPrefilledService] = useState<string | undefined>(undefined);

  const handleContactClick = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPrefilledService(serviceTitle);
    }
    
    // Smooth scroll to contact section
    const contactSection = document.getElementById('contact-widget');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-[#171717] min-h-screen text-gray-200 overflow-x-hidden antialiased selection:bg-[#21f1a8]/20 selection:text-[#21f1a8]">
      {/* Navigation bar with callback to contact widget */}
      <Navbar onContactClick={() => handleContactClick()} />

      <main>
        {/* Hero Banner Section */}
        <Hero onContactClick={() => handleContactClick()} />

        {/* Corporate Authority / About Agency Section */}
        <About />

        {/* Dynamic & Detailed Service scopes */}
        <Services onContactClick={(title) => handleContactClick(title)} />

        {/* Grid of technological & conversion differences */}
        <BentoDifferentials />

        {/* Testimonials from top tier clients */}
        <Testimonials />

        {/* Interactive briefing generator & customized WhatsApp CTA */}
        <WhatsAppWidget prefilledService={prefilledService} />

        {/* Expandable and Categorized FAQs */}
        <FAQ />
      </main>

      {/* Footer navigation and legal copyright */}
      <Footer onContactClick={() => handleContactClick()} />
    </div>
  );
}
