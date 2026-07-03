/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, MessageCircleCode, ShieldAlert, Cpu, ArrowRight, Check, Send, Sparkles } from 'lucide-react';
import { SERVICES } from '../data';
import { ServiceItem } from '../types';

interface ServicesProps {
  onContactClick: (prefilledService?: string) => void;
}

export default function Services({ onContactClick }: ServicesProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  // Dynamic icon mapper
  const getIcon = (name: string) => {
    switch (name) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#21f1a8]" />;
      case 'MessageSquareShare':
        return <MessageCircleCode className="w-6 h-6 text-[#21f1a8]" />;
      case 'ShieldCheck':
        return <ShieldAlert className="w-6 h-6 text-[#21f1a8]" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-[#21f1a8]" />;
      default:
        return <Zap className="w-6 h-6 text-[#21f1a8]" />;
    }
  };

  const handleServiceSelect = (id: string) => {
    setSelectedServiceId(selectedServiceId === id ? null : id);
  };

  return (
    <section id="services" className="py-24 bg-[#171717] border-t border-white/5 relative overflow-hidden">
      {/* Abstract Background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#21f1a8]/2 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#21f1a8]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Nossas Especialidades
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Soluções Digitais <span className="text-[#21f1a8]">Sob Medida</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            Criamos produtos digitais exclusivos focados em resultados, com infraestrutura impecável, design assinado e engenharia focada em leads quentes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {SERVICES.map((service) => {
            const isSelected = selectedServiceId === service.id;
            return (
              <div
                id={`service-card-${service.id}`}
                key={service.id}
                className={`p-8 rounded-sm bg-[#121212] border transition-all duration-300 relative group flex flex-col justify-between min-h-[340px] cursor-pointer ${
                  isSelected
                    ? 'border-[#21f1a8] shadow-[0_0_30px_rgba(33,241,168,0.06)]'
                    : 'border-white/5 hover:border-[#21f1a8]/30 shadow-md hover:shadow-lg'
                }`}
                onClick={() => handleServiceSelect(service.id)}
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/20 flex items-center justify-center">
                      {getIcon(service.iconName)}
                    </div>
                    {service.priceEst && (
                      <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-sm bg-[#21f1a8]/10 text-[#21f1a8] border border-[#21f1a8]/15 uppercase tracking-wider">
                        {service.priceEst}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-black uppercase text-white mt-6 tracking-tighter group-hover:text-[#21f1a8] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="font-sans text-sm text-gray-400 mt-3 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Main features preview (collapsed) */}
                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.features.slice(0, 3).map((f, i) => (
                      <span key={i} className="text-[9px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm bg-white/5 text-gray-300 border border-white/5">
                        {f}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-[9px] font-display font-bold text-gray-500 uppercase tracking-wider px-1 py-0.5">
                        +{service.features.length - 3} mais
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                    <span className="text-xs font-display font-bold uppercase tracking-widest text-[#21f1a8] flex items-center gap-1.5 group-hover:underline">
                      {isSelected ? 'Ocultar Detalhes' : 'Ver Detalhes do Escopo'}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? 'rotate-90 text-white' : 'group-hover:translate-x-1'}`} />
                    </span>
                    {service.deliveryTime && (
                      <span className="text-[10px] font-mono uppercase text-gray-500">
                        Prazo: {service.deliveryTime}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expandable scope area */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden w-full text-left"
                      onClick={(e) => e.stopPropagation()} // stop parent card toggle
                    >
                      <div className="pt-6 mt-6 border-t border-white/5 space-y-5 text-gray-300">
                        <p className="text-xs sm:text-sm leading-relaxed text-gray-400">
                          {service.longDescription}
                        </p>
                        
                        <div className="space-y-2">
                          <h4 className="text-[10px] font-mono font-bold text-white uppercase tracking-widest flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-[#21f1a8]" />
                            O que está incluso no projeto:
                          </h4>
                          <ul className="grid grid-cols-1 gap-2.5">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <span className="w-4 h-4 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/30 flex items-center justify-center shrink-0 mt-0.5">
                                  <Check className="w-2.5 h-2.5 text-[#21f1a8]" />
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Direct service CTA */}
                        <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                          <button
                            id={`request-scope-btn-${service.id}`}
                            onClick={() => onContactClick(service.title)}
                            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-sm bg-[#21f1a8] hover:bg-white text-[#171717] font-black text-xs tracking-widest uppercase transition-all cursor-pointer"
                          >
                            Orçar {service.title}
                            <Send className="w-3 h-3" />
                          </button>
                          
                          <a
                            id={`wa-direct-btn-${service.id}`}
                            href={`https://wa.me/5564992168724?text=Olá!%20Gostaria%20de%20conversar%20sobre%20o%20escopo%20de%20${encodeURIComponent(service.title)}.`}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="w-full sm:w-auto text-center px-6 py-4 rounded-sm bg-white/5 hover:bg-white/10 border border-white/10 text-white font-black text-xs tracking-widest uppercase transition-colors cursor-pointer"
                          >
                            WhatsApp Direto
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
