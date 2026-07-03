/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, ArrowUpRight, Target, Calendar, User, Layout, ArrowRight } from 'lucide-react';

interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  client: string;
  description: string;
  results: string;
  metric: string;
  year: string;
  tech: string[];
}

const PROJECTS: PortfolioProject[] = [
  {
    id: 'clinic',
    title: 'Landing Page & Bot de Triagem Inteligente',
    category: 'Saúde / Clínicas',
    client: 'Menezes Odontologia',
    description: 'Landing page ultra-veloz focado no público de implantes de alta renda, totalmente integrado com assistente de atendimento automatizado no WhatsApp.',
    results: 'Redução drástica no custo de aquisição por lead e eliminação total do tempo ocioso da recepção.',
    metric: '63% Menor CPA',
    year: '2025',
    tech: ['React', 'Tailwind', 'WhatsApp API', 'SEO Local']
  },
  {
    id: 'ecommerce',
    title: 'Plataforma de Vendas & Delivery Próprio',
    category: 'Alimentação / Lojas',
    client: 'Massas Gourmet Don Filippo',
    description: 'E-commerce interativo com checkout veloz de um clique e redirecionamento de pedido estruturado direto para a cozinha do estabelecimento.',
    results: 'Aumento expressivo nas vendas e economia de mais de R$ 3.800 mensais em taxas de aplicativos de entrega.',
    metric: '185% em Vendas',
    year: '2026',
    tech: ['React', 'Tailwind CSS', 'Pix Integrado', 'Frictionless Checkout']
  },
  {
    id: 'logistics',
    title: 'Portal Corporativo & Otimização de Busca',
    category: 'Logística / Serviços',
    client: 'Goiás Cargo Transportes',
    description: 'Site institucional corporativo focado em demonstrar credibilidade, segurança e gerar solicitações automáticas de cotações de frete.',
    results: 'Ranqueamento orgânico na primeira página do Google para as principais palavras-chave da região centro-oeste.',
    metric: 'Top #3 Google',
    year: '2025',
    tech: ['React', 'SEO Técnico', 'Google Analytics', 'Filtro de Cotação']
  }
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<string>('clinic');

  const selectedProject = PROJECTS.find(p => p.id === activeProject) || PROJECTS[0];

  return (
    <section id="portfolio" className="py-24 bg-[#121212] border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#21f1a8]/1 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Portfólio de Elite
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Projetos que <span className="text-[#21f1a8]">Geram Lucro</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            Veja como transformamos linhas de código em faturamento real para empresas de serviços e comércios locais.
          </p>
        </div>

        {/* Core Portfolio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Project Selector List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-4">
            {PROJECTS.map((project) => {
              const isSelected = project.id === activeProject;
              return (
                <button
                  id={`portfolio-select-btn-${project.id}`}
                  key={project.id}
                  onClick={() => setActiveProject(project.id)}
                  className={`text-left p-6 rounded-sm border transition-all duration-300 cursor-pointer relative group ${
                    isSelected
                      ? 'bg-[#171717] border-[#21f1a8] shadow-[0_0_20px_rgba(33,241,168,0.03)]'
                      : 'bg-transparent border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5">
                      <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${isSelected ? 'text-[#21f1a8]' : 'text-gray-500'}`}>
                        {project.category}
                      </span>
                      <h3 className="font-display text-lg font-black uppercase tracking-tighter text-white">
                        {project.client}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-sm flex items-center justify-center border transition-all ${
                      isSelected 
                        ? 'bg-[#21f1a8]/10 border-[#21f1a8]/30 text-[#21f1a8]' 
                        : 'border-white/5 text-gray-500 group-hover:text-white group-hover:border-white/20'
                    }`}>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Subtle marker line for the selected project */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#21f1a8]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Interactive Case Study Box */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-[#171717] border border-white/5 rounded-sm p-8 h-full flex flex-col justify-between"
              >
                <div className="space-y-6">
                  {/* Header metadata */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-5">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest text-gray-500">PROJETO DE SUCESSO</p>
                      <h4 className="font-display text-2xl font-black uppercase text-white mt-1 tracking-tight">
                        {selectedProject.client}
                      </h4>
                    </div>
                    <div className="px-4 py-2 bg-[#21f1a8]/10 border border-[#21f1a8]/20 rounded-sm text-center">
                      <p className="text-[9px] font-mono text-gray-400 uppercase tracking-widest leading-none">RESULTADO</p>
                      <p className="font-display text-lg font-black text-[#21f1a8] mt-1 uppercase tracking-tight">
                        {selectedProject.metric}
                      </p>
                    </div>
                  </div>

                  {/* Visual Layout Mockup Placeholder */}
                  <div className="aspect-[16/8] bg-[#121212] border border-white/5 rounded-sm p-6 flex flex-col justify-between relative group overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                      </div>
                      <span className="text-[9px] font-mono text-gray-600 bg-white/5 px-2 py-0.5 rounded-sm">kingcore.co/{selectedProject.id}</span>
                    </div>

                    <div className="text-center py-4 space-y-2">
                      <span className="text-[10px] font-mono text-[#21f1a8]/55 uppercase tracking-widest font-bold">DESEMPENHO TÉCNICO 100%</span>
                      <p className="font-display text-xl sm:text-2xl font-black text-white uppercase tracking-tighter max-w-sm mx-auto">
                        {selectedProject.title}
                      </p>
                    </div>

                    <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-2">
                      <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono">
                        <Layout className="w-3.5 h-3.5 text-[#21f1a8]" />
                        <span>Mobile Optimization: Live</span>
                      </div>
                      <div className="w-2.5 h-2.5 bg-[#21f1a8] animate-pulse rounded-sm" />
                    </div>

                    {/* Glossy overlay effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#21f1a8]/0 via-[#21f1a8]/1 to-[#21f1a8]/0 pointer-events-none" />
                  </div>

                  {/* Technical Analysis */}
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-[10px] font-mono text-[#21f1a8] uppercase tracking-widest font-bold">O Escopo do Projeto</h5>
                      <p className="text-sm text-gray-300 mt-1.5 leading-relaxed font-sans">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-[10px] font-mono text-[#21f1a8] uppercase tracking-widest font-bold">Impacto Comercial</h5>
                      <p className="text-sm text-gray-300 mt-1.5 leading-relaxed font-sans flex items-start gap-2">
                        <Target className="w-4 h-4 text-[#21f1a8] shrink-0 mt-0.5" />
                        <span>{selectedProject.results}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer specs & tags */}
                <div className="pt-6 border-t border-white/5 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="text-[9px] font-display font-black uppercase tracking-wider px-2.5 py-1 rounded-sm bg-white/5 text-gray-400 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#21f1a8]" /> {selectedProject.year}</span>
                    <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-[#21f1a8]" /> {selectedProject.client.split(' ')[0]}</span>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
