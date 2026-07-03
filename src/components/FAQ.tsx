/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Geral', 'WhatsApp', 'Processo', 'SEO', 'Garantia'];

  const filteredFaqs = FAQS.filter(faq => {
    if (activeCategory === 'Todos') return true;
    return faq.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#171717] border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#21f1a8]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Transparência & <span className="text-[#21f1a8]">Segurança Total</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 max-w-lg mx-auto">
            Tem alguma pergunta sobre o processo de desenvolvimento, prazos ou ferramentas? Confira as respostas abaixo ou fale diretamente no WhatsApp.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              id={`faq-cat-filter-${cat.toLowerCase()}`}
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setExpandedId(null);
              }}
              className={`px-4 py-2.5 rounded-sm text-[10px] font-display font-black uppercase tracking-widest transition-all cursor-pointer border ${
                activeCategory === cat
                  ? 'bg-[#21f1a8]/10 border-[#21f1a8] text-[#21f1a8] shadow-sm'
                  : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isExpanded = expandedId === faq.id;
            return (
              <div
                id={`faq-item-card-${faq.id}`}
                key={faq.id}
                className={`rounded-sm bg-[#121212] border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isExpanded
                    ? 'border-[#21f1a8]/40 shadow-[0_4px_20px_rgba(33,241,168,0.03)]'
                    : 'border-white/5 hover:border-white/10'
                }`}
                onClick={() => toggleExpand(faq.id)}
              >
                {/* Accordion Trigger */}
                <button
                  id={`faq-expand-btn-${faq.id}`}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <HelpCircle className={`w-5 h-5 shrink-0 transition-colors duration-300 ${isExpanded ? 'text-[#21f1a8]' : 'text-gray-500'}`} />
                    <span className="font-display font-extrabold uppercase text-xs sm:text-sm text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`w-8 h-8 rounded-sm bg-white/5 flex items-center justify-center shrink-0 border border-white/5 transition-colors duration-300 ${isExpanded ? 'border-[#21f1a8]/20 bg-[#21f1a8]/5' : ''}`}>
                    {isExpanded ? (
                      <Minus className="w-4 h-4 text-[#21f1a8]" />
                    ) : (
                      <Plus className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                </button>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-white/5 text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                        {faq.answer}
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
