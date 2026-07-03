/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#171717] border-t border-white/5 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-[#21f1a8]/30 to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#21f1a8]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Prova Social & Métricas
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Resultados Reais de <span className="text-[#21f1a8]">Clientes Satisfeitos</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            Muito mais que depoimentos vagos. Medimos o sucesso de cada parceiro através de números de conversão validados e otimização de faturamento comercial.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="p-8 rounded-sm bg-[#121212] border border-white/5 hover:border-[#21f1a8]/25 transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div className="space-y-6">
                
                {/* Metric Badge (Stunning focus point) */}
                <div className="flex items-start justify-between">
                  <div className="px-3 py-2 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/20 text-[#21f1a8]">
                    <p className="text-[9px] font-mono uppercase tracking-[0.15em] font-bold text-gray-400 leading-none">Métrica Alavancada</p>
                    <p className="text-xl font-display font-black text-[#21f1a8] tracking-tighter uppercase mt-1.5">{testimonial.metric}</p>
                    <p className="text-[9px] font-sans text-gray-400 font-semibold">{testimonial.metricLabel}</p>
                  </div>

                  {/* Star rating */}
                  <div className="flex items-center gap-0.5 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#21f1a8] text-[#21f1a8]" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="font-sans text-sm text-gray-300 leading-relaxed italic">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>

              </div>

              {/* Author Info */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-3">
                {/* Avatar Placeholder with Initials in Tiffany colors */}
                <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/20 flex items-center justify-center font-display font-black text-xs text-[#21f1a8]">
                  {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-white">{testimonial.name}</h4>
                  <p className="font-sans text-xs text-gray-400">
                    {testimonial.role} &middot; <strong className="text-gray-500">{testimonial.company}</strong>
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Dynamic Trust Stats footer for authority */}
        <div className="mt-16 p-8 rounded-sm bg-[#121212] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-1">
            <h3 className="font-display text-xl font-black uppercase tracking-tighter text-white">Pronto para ser a nossa próxima história de sucesso?</h3>
            <p className="font-sans text-xs text-gray-400">Garantimos a entrega técnica com o mais alto nível de performance comercial e suporte total.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 shrink-0">
            <div>
              <p className="text-3xl font-display font-black text-[#21f1a8] tracking-tighter uppercase">100%</p>
              <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Satisfação</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white tracking-tighter uppercase">R$ 2.4M+</p>
              <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest font-bold">Em tráfego</p>
            </div>
            <div>
              <p className="text-3xl font-display font-black text-white tracking-tighter uppercase">24h</p>
              <p className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">Suporte</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
