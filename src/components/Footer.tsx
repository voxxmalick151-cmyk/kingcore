/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

export default function Footer({ onContactClick }: FooterProps) {
  const WHATSAPP_LINK = 'https://wa.me/5564992168724?text=Olá!%20Estou%20vindo%20do%20site%20da%20King%20Core%20e%20gostaria%20de%20bater%20um%20papo%20com%20um%20especialista.';

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#121212] border-t border-white/5 pt-16 pb-12 relative">
      
      {/* Floating Action WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer noopener"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-sm bg-[#21f1a8] text-[#171717] flex items-center justify-center shadow-[0_4px_25px_rgba(33,241,168,0.4)] hover:shadow-[0_4px_35px_rgba(33,241,168,0.65)] hover:scale-105 transition-all duration-300 group cursor-pointer"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="absolute inset-0 rounded-sm border-2 border-[#21f1a8]/30 animate-ping pointer-events-none group-hover:animate-none" />
        <MessageCircle className="w-5.5 h-5.5 fill-[#171717] group-hover:rotate-12 transition-transform duration-300" />
      </a>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <button
              id="footer-logo-btn"
              onClick={handleScrollToTop}
              className="flex items-center gap-3 group cursor-pointer text-left focus:outline-none"
            >
              <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/30 flex items-center justify-center group-hover:border-[#21f1a8] transition-colors shadow-sm">
                <span className="font-display font-black text-xl text-[#21f1a8]">K</span>
              </div>
              <div>
                <span className="font-display font-black text-2xl uppercase tracking-tighter text-white block leading-none">
                  King<span className="text-[#21f1a8]">Core</span>
                </span>
                <span className="block text-[8px] font-mono tracking-widest text-gray-500 uppercase leading-none mt-1">
                  Estúdio Digital
                </span>
              </div>
            </button>
            <p className="font-sans text-sm text-gray-400 max-w-sm leading-relaxed">
              Desenvolvimento de sites institucionais, landing pages e sistemas sob medida integrados ao WhatsApp. Performance absoluta, design sob assinatura e foco estratégico em conversão comercial.
            </p>
          </div>

          {/* Quick Nav links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display text-xs font-black text-[#21f1a8] uppercase tracking-widest">Navegação</h4>
            <ul className="space-y-2 text-sm font-semibold">
              {[
                { label: 'Início', id: 'hero' },
                { label: 'Sobre', id: 'about' },
                { label: 'Serviços', id: 'services' },
                { label: 'Diferenciais', id: 'differentials' },
                { label: 'Depoimentos', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => handleScrollTo(link.id)}
                    className="text-gray-400 hover:text-[#21f1a8] transition-colors cursor-pointer text-left uppercase text-xs tracking-wider"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-black text-[#21f1a8] uppercase tracking-widest">Contato Direto</h4>
            <ul className="space-y-3.5 text-sm text-gray-400 font-semibold">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#21f1a8] shrink-0" />
                <a href="tel:+5564992168724" className="hover:text-white transition-colors text-xs tracking-wider uppercase">
                  +55 (64) 99216-8724
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#21f1a8] shrink-0" />
                <a href="mailto:contato@kingcore.com" className="hover:text-white transition-colors text-xs tracking-wider uppercase">
                  contato@kingcore.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#21f1a8] shrink-0 mt-0.5" />
                <span className="text-xs tracking-wider uppercase text-gray-400">Goiás, Brasil<br /><span className="text-[10px] text-gray-500 lowercase tracking-normal font-mono">Atendimento a nível nacional</span></span>
              </li>
            </ul>
          </div>

        </div>

        {/* Dynamic Dot Labels */}
        <div className="pt-8 pb-4 flex flex-wrap justify-center sm:justify-start gap-y-3 gap-x-12 border-b border-white/5 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#21f1a8]"></div>
            <span className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest">Site 100% Seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#21f1a8]"></div>
            <span className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest">Tecnologia React / Vite</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-[#21f1a8]"></div>
            <span className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest">Otimização SEO Extrema</span>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-display font-bold text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} KING CORE • TODOS OS DIREITOS RESERVADOS</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors" onClick={onContactClick}>
              BRIEFING INTEGRADO
            </span>
            <span>•</span>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              FALE CONOSCO
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
