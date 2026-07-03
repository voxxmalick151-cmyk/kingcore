/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Clock, ShieldCheck, TrendingUp, Code2 } from 'lucide-react';

export default function About() {
  const stats = [
    {
      id: 'stat-1',
      icon: <Clock className="w-6 h-6 text-[#21f1a8]" />,
      value: '< 0.8s',
      label: 'Tempo de Resposta',
      desc: 'Hospedagem em nuvem global com carregamento quase instantâneo.',
    },
    {
      id: 'stat-2',
      icon: <Code2 className="w-6 h-6 text-[#21f1a8]" />,
      value: '100%',
      label: 'Código Autoral',
      desc: 'Projetos codificados do zero. Sem Elementor, WordPress ou peso extra.',
    },
    {
      id: 'stat-3',
      icon: <TrendingUp className="w-6 h-6 text-[#21f1a8]" />,
      value: '+150%',
      label: 'Taxa de Conversão',
      desc: 'Posicionamento premium e copy planejada para gerar orçamentos.',
    },
    {
      id: 'stat-4',
      icon: <ShieldCheck className="w-6 h-6 text-[#21f1a8]" />,
      value: '90 Dias',
      label: 'Garantia Técnica',
      desc: 'Suporte VIP pós-lançamento para total segurança da sua empresa.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#121212] border-t border-white/5 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#21f1a8]/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Text Layout */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
                Nossa Essência
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Design de Luxo Unido a <br />
                <span className="text-[#21f1a8]">Engenharia de Conversão.</span>
              </h2>
            </div>
            
            <p className="font-sans text-gray-300 leading-relaxed text-base sm:text-lg">
              A <strong>King Core</strong> nasceu para resolver uma dor crítica de empresários modernos: 
              sites corporativos lentos, feios e que não trazem resultados. Nós rejeitamos a mesmice 
              de sites padronizados construídos em WordPress.
            </p>

            <p className="font-sans text-gray-400 leading-relaxed text-sm sm:text-base">
              Nossa equipe cria ecossistemas digitais exclusivos que carregam em milissegundos. 
              Ao aliar um visual futurista com a psicologia de conversão, prendemos a atenção de quem 
              pesquisa pelo seu produto ou serviço e direcionamos essa pessoa para o seu WhatsApp 
              de maneira irresistível, com ferramentas de qualificação inteligente.
            </p>

            {/* Quote Block with local Goiás authority feel */}
            <div className="p-6 rounded-sm bg-[#171717] border border-white/5 shadow-inner">
              <p className="text-sm italic text-gray-300 font-sans leading-relaxed">
                &ldquo;Não vendemos apenas páginas da web. Nós criamos funis de aquisição de clientes automatizados e de extrema velocidade. É a junção do design que converte com a engenharia que acelera.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-[#21f1a8]" />
                <div>
                  <h4 className="text-[10px] font-black text-white font-mono uppercase tracking-widest">Liderança King Core</h4>
                  <p className="text-[9px] text-gray-500 font-mono uppercase tracking-widest">Goiás, Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Stat Grid Layout */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-sm bg-[#171717] border border-white/5 hover:border-[#21f1a8]/35 shadow-lg group transition-all duration-300 hover:shadow-[0_10px_35px_rgba(33,241,168,0.04)]"
                >
                  <div className="w-12 h-12 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    {stat.icon}
                  </div>
                  <h3 className="font-display text-4xl font-black uppercase text-white mt-5 tracking-tighter group-hover:text-[#21f1a8] transition-colors">
                    {stat.value}
                  </h3>
                  <h4 className="font-display font-bold text-xs text-gray-400 mt-1 uppercase tracking-widest">
                    {stat.label}
                  </h4>
                  <p className="font-sans text-xs text-gray-400 mt-2 leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
