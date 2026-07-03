/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Send, Star, ShieldCheck, Zap } from 'lucide-react';

const heroImage = '/src/assets/images/king_core_hero_graphic_1783090746201.jpg';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const WHATSAPP_LINK = 'https://wa.me/5564992168724?text=Olá!%20Vi%20o%20site%20da%20King%20Core%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20de%20desenvolvimento%20e%20automação.';

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#171717]"
    >
      {/* Background Decorative Gradients & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#21f1a8]/10 via-[#171717] to-[#171717] pointer-events-none" />
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{
          backgroundImage: 'radial-gradient(#21f1a8 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Glowing Neon Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#21f1a8]/5 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-1/3 right-1/10 w-80 h-80 bg-[#21f1a8]/5 rounded-full blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left: Context & Text Copy */}
          <div className="lg:col-span-7 text-left space-y-8">
            
            {/* Live conversion badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20 shadow-[0_0_15px_rgba(33,241,168,0.05)]"
            >
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#21f1a8] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#21f1a8]"></span>
              </span>
              <span>
                Expert em Escalar Conversões via WhatsApp
              </span>
            </motion.div>

            {/* High-impact Headings */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-5xl sm:text-6xl lg:text-[76px] font-black uppercase text-white tracking-tighter leading-[0.95] text-balance"
              >
                Desenvolvemos Sites <br className="hidden sm:inline" />
                <span className="text-[#21f1a8]">
                  Ultra-Velozes
                </span> que Vendem Todos os Dias.
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
              >
                A <strong>King Core</strong> une design premium de alta autoridade com tecnologia pura 
                (sem templates pesados) para criar páginas prontas para tráfego pago, totalmente integradas com robôs inteligentes de WhatsApp.
              </motion.p>
            </div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                id="hero-whatsapp-cta"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-5 rounded-sm bg-[#21f1a8] text-[#171717] font-black uppercase text-sm tracking-widest hover:bg-white transition-colors shadow-[0_0_20px_rgba(33,241,168,0.25)] hover:shadow-[0_0_35px_rgba(33,241,168,0.5)] cursor-pointer"
              >
                Falar no WhatsApp
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                id="hero-explore-cta"
                onClick={onContactClick}
                className="group inline-flex items-center justify-center gap-2 px-8 py-5 rounded-sm bg-transparent border border-white/10 hover:border-[#21f1a8]/50 hover:bg-white/5 text-gray-200 hover:text-[#21f1a8] font-black uppercase text-sm tracking-widest transition-colors cursor-pointer"
              >
                Simular Projeto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-4 border-t border-white/5 max-w-lg"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#21f1a8] shrink-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Performance <br /><strong className="text-[#21f1a8]">100% Core Vitals</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#21f1a8] shrink-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Garantia Técnica <br /><strong className="text-[#21f1a8]">90 Dias Inclusos</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#21f1a8] shrink-0" />
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">Satisfação <br /><strong className="text-[#21f1a8]">Classificação 5★</strong></span>
              </div>
            </motion.div>

          </div>

          {/* Hero Right: Premium Visual Concept Device Mockup */}
          <div className="lg:col-span-5 relative w-full h-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[440px] aspect-square rounded-3xl bg-gradient-to-br from-white/10 to-transparent p-1.5 border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden group"
            >
              {/* Internal container holding the graphic */}
              <div className="w-full h-full rounded-[20px] bg-[#121212] overflow-hidden relative flex flex-col justify-between">
                
                {/* Simulated Web Header */}
                <div className="px-4 py-3 bg-[#1e1e1e] border-b border-white/5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[10px] font-mono text-gray-400 select-none">kingcore.com/analytics</span>
                  <span className="w-4 h-4 rounded bg-[#21f1a8]/10 border border-[#21f1a8]/20" />
                </div>

                {/* Main Rendered Image of the cybernetic core */}
                <div className="absolute inset-x-0 top-11 bottom-0 z-0">
                  <img
                    src={heroImage}
                    alt="Cybernetic Core"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[12s] ease-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette on top of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/30 via-transparent to-[#121212]/30" />
                </div>

                {/* Floating Real-time Lead capture notification block */}
                <motion.div
                  initial={{ opacity: 0, x: 50, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="absolute bottom-6 right-6 left-6 z-20 p-4 rounded-xl bg-[#171717]/95 border border-[#21f1a8]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)] backdrop-blur-md flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#21f1a8]/10 border border-[#21f1a8]/30 flex items-center justify-center shrink-0">
                    <span className="animate-bounce text-lg">🚀</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-mono text-[#21f1a8] font-bold uppercase tracking-wider">Novo Lead Qualificado</p>
                    <p className="text-xs text-white font-semibold truncate">Dr. Thiago Menezes</p>
                    <p className="text-[10px] text-gray-400">Interesse: LP de Vendas + Bot WhatsApp</p>
                  </div>
                  <span className="text-[9px] font-mono text-gray-500 self-start mt-0.5">Agora</span>
                </motion.div>

                {/* Floating Speed Radar graphic overlay */}
                <div className="absolute top-16 left-6 z-20 px-3 py-1.5 rounded-lg bg-[#171717]/90 border border-white/5 shadow-md flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#21f1a8] flex items-center justify-center text-[7px] text-[#171717] font-bold">✓</span>
                  <span className="text-[10px] font-mono text-gray-300">PageSpeed: <strong className="text-[#21f1a8]">100/100</strong></span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
