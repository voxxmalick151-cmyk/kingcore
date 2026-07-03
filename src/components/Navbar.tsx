/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export default function Navbar({ onContactClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#171717]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="logo-home-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#21f1a8] rounded-md flex items-center justify-center group-hover:bg-white transition-all duration-300">
            <span className="font-display font-black text-xl text-[#171717] tracking-tighter">K</span>
          </div>
          <div>
            <span className="font-display font-black text-2xl text-white tracking-tighter uppercase leading-none block">
              King<span className="text-[#21f1a8]">Core</span>
            </span>
            <span className="block text-[9px] font-mono tracking-[0.2em] text-gray-400 uppercase leading-none mt-1">
              Digital Studio
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'Início', id: 'hero' },
            { label: 'Sobre', id: 'about' },
            { label: 'Serviços', id: 'services' },
            { label: 'Diferenciais', id: 'differentials' },
            { label: 'Resultados', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' }
          ].map((item) => (
            <button
              id={`nav-link-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display text-xs font-bold uppercase tracking-widest text-gray-300 hover:text-[#21f1a8] transition-colors duration-300 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            id="nav-cta-btn"
            onClick={onContactClick}
            className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#21f1a8] hover:bg-white text-[#171717] font-black text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(33,241,168,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer"
          >
            Começar Projeto
            <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#21f1a8] hover:bg-[#21f1a8]/10 transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-nav-drawer"
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-[#171717] border-l border-white/5 z-40 shadow-2xl p-6 transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: scrolled ? '73px' : '88px', height: 'calc(100vh - 80px)' }}
      >
        <div className="flex flex-col gap-6 mt-8">
          {[
            { label: 'Início', id: 'hero' },
            { label: 'Sobre', id: 'about' },
            { label: 'Serviços', id: 'services' },
            { label: 'Diferenciais', id: 'differentials' },
            { label: 'Resultados', id: 'testimonials' },
            { label: 'FAQ', id: 'faq' }
          ].map((item) => (
            <button
              id={`mobile-nav-link-${item.id}`}
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="font-display text-sm font-bold uppercase tracking-widest text-left text-gray-300 hover:text-[#21f1a8] transition-colors py-3 border-b border-white/5 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <button
            id="mobile-nav-cta-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full flex items-center justify-center gap-2 py-4 mt-6 rounded-sm bg-[#21f1a8] text-[#171717] font-black text-xs tracking-widest uppercase shadow-[0_0_20px_rgba(33,241,168,0.25)] transition-all cursor-pointer"
          >
            Começar Projeto
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
