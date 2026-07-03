/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Zap, MessageSquare, ShieldCheck, BarChart3, Fingerprint, Database } from 'lucide-react';

export default function BentoDifferentials() {
  return (
    <section id="differentials" className="py-24 bg-[#121212] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#171717] via-transparent to-[#171717] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Por Que Nos Escolher?
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            A Ciência da Conversão <br className="hidden sm:inline" />
            <span className="text-[#21f1a8]">Aplicada ao seu Negócio</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            Cada linha de código que escrevemos tem um único propósito: transformar o tráfego que você paga para receber em faturamento real no seu bolso.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Performance (High-Speed) - Width: md:col-span-7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 p-8 rounded-sm bg-[#171717] border border-white/5 hover:border-[#21f1a8]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[360px]"
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#21f1a8]/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-[#21f1a8]/10 transition-colors" />
            
            <div className="space-y-4 relative z-10">
              <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/25 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#21f1a8]" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tighter group-hover:text-[#21f1a8] transition-colors">
                Performance Extrema (Sub-Segundo)
              </h3>
              <p className="font-sans text-sm text-gray-400 max-w-md leading-relaxed">
                Cada milissegundo de atraso faz com que mais pessoas abandonem seu site antes mesmo de ver sua oferta. Nossos sites carregam instantaneamente no celular ou 4G, aumentando a qualidade do seu anúncio no Google Ads e reduzindo o custo por clique (CPC).
              </p>
            </div>

            {/* Visual indicator / Performance Counter representation */}
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-8 relative z-10">
              <div className="text-center">
                <p className="text-[28px] font-display font-black text-[#21f1a8] tracking-tighter uppercase">100/100</p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">Google PageSpeed</p>
              </div>
              <div className="h-10 w-px bg-white/5" />
              <div className="text-center">
                <p className="text-[28px] font-display font-black text-white tracking-tighter uppercase">0.6s</p>
                <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-0.5">Tempo Carregamento</p>
              </div>
              <div className="h-10 w-px bg-white/5" />
              <div className="text-center hidden sm:block">
                <p className="text-[28px] font-display font-black text-white tracking-tighter uppercase">Aprovado</p>
                <p className="text-[10px] font-mono text-[#21f1a8] uppercase tracking-widest mt-0.5">Core Vitals</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Design Assinado (Premium Aesthetic) - Width: md:col-span-5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 p-8 rounded-sm bg-[#171717] border border-white/5 hover:border-[#21f1a8]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/25 flex items-center justify-center">
                <Fingerprint className="w-5 h-5 text-[#21f1a8]" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tighter group-hover:text-[#21f1a8] transition-colors">
                Design Assinado Tiffany
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                O visual luxuoso e tecnológico da assinatura Tiffany (#21f1a8) transmite autoridade e profissionalismo imediatos. Seus concorrentes parecerão ultrapassados ao lado da presença moderna que criamos para sua marca.
              </p>
            </div>

            {/* Design accents */}
            <div className="mt-8 flex items-center justify-start gap-1">
              <span className="w-8 h-2 bg-[#21f1a8] shadow-[0_0_10px_rgba(33,241,168,0.5)]" />
              <span className="w-2 h-2 bg-[#21f1a8]/60" />
              <span className="w-2 h-2 bg-[#21f1a8]/40" />
              <span className="w-2 h-2 bg-[#21f1a8]/20" />
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest ml-3">Estética Exclusiva</span>
            </div>
          </motion.div>

          {/* Card 3: WhatsApp Bot & Qualificação - Width: md:col-span-5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 p-8 rounded-sm bg-[#171717] border border-white/5 hover:border-[#21f1a8]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[360px]"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/25 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#21f1a8]" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tighter group-hover:text-[#21f1a8] transition-colors">
                Automação Comercial
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Integração nativa com bots de WhatsApp estruturados para qualificar leads. Em vez de receber contatos frios que só tomam seu tempo, sua equipe receberá clientes quentes com dados de orçamento, problemas e necessidades já mapeadas de antemão.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="px-3 py-1.5 rounded-sm bg-green-500/10 border border-green-500/20 text-green-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Funil de Atendimento Ativo
              </div>
            </div>
          </motion.div>

          {/* Card 4: Analytics, Copy & Infra - Width: md:col-span-7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-7 p-8 rounded-sm bg-[#171717] border border-white/5 hover:border-[#21f1a8]/30 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between min-h-[360px]"
          >
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#21f1a8]/3 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/25 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-[#21f1a8]" />
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white tracking-tighter group-hover:text-[#21f1a8] transition-colors">
                Copy persuasion e Rastreamento
              </h3>
              <p className="font-sans text-sm text-gray-400 leading-relaxed">
                Não criamos apenas sites bonitos. Estruturamos os textos persuasivos usando técnicas de neurovendas e neuromarketing. Adicionalmente, deixamos seu site blindado com o rastreamento correto do Meta Pixel, Google Analytics e APIs de Conversão, para que suas campanhas otimizem com precisão absoluta.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Database className="w-4 h-4 text-[#21f1a8]" />
                <span className="uppercase font-bold tracking-wider text-[10px]">APIs de Conversão</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck className="w-4 h-4 text-[#21f1a8]" />
                <span className="uppercase font-bold tracking-wider text-[10px]">Estrutura LGPD Pronta</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
