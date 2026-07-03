/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo } from 'react';
import { Send, Check, Shield, User, Landmark, HelpCircle, Bot } from 'lucide-react';
import { PROJECT_TYPES, PROJECT_GOALS, TIMEFRAMES } from '../data';

interface WhatsAppWidgetProps {
  prefilledService?: string;
}

export default function WhatsAppWidget({ prefilledService }: WhatsAppWidgetProps) {
  // Setup local states for the interactive widget
  const [name, setName] = useState('');
  const [business, setBusiness] = useState('');
  const [projectTypeId, setProjectTypeId] = useState(PROJECT_TYPES[0].id);
  const [goalId, setGoalId] = useState(PROJECT_GOALS[0].id);
  const [hasAutomation, setHasAutomation] = useState(true);
  const [timeframeId, setTimeframeId] = useState(TIMEFRAMES[1].id);
  const [submitting, setSubmitting] = useState(false);

  // If a prefilled service was requested via "Saiba Mais / Orçar", let's update local states
  useEffect(() => {
    if (prefilledService) {
      // Find matching project type
      const foundType = PROJECT_TYPES.find(t => 
        prefilledService.toLowerCase().includes(t.label.toLowerCase()) || 
        t.label.toLowerCase().includes(prefilledService.toLowerCase())
      );
      if (foundType) {
        setProjectTypeId(foundType.id);
      }
    }
  }, [prefilledService]);

  // Derive active values
  const activeType = useMemo(() => PROJECT_TYPES.find(t => t.id === projectTypeId) || PROJECT_TYPES[0], [projectTypeId]);
  const activeGoal = useMemo(() => PROJECT_GOALS.find(g => g.id === goalId) || PROJECT_GOALS[0], [goalId]);
  const activeTimeframe = useMemo(() => TIMEFRAMES.find(t => t.id === timeframeId) || TIMEFRAMES[0], [timeframeId]);

  // Construct Custom WhatsApp Message Text
  const messageText = useMemo(() => {
    const greeting = name ? `Olá! Me chamo *${name}*` : 'Olá!';
    const companyInfo = business ? ` da empresa *${business}*` : '';
    const autOption = hasAutomation ? 'Sim, de alta conversão' : 'Não, apenas o site';

    return `${greeting}${companyInfo}. Vi o site da King Core e gostaria de estruturar meu projeto!

🛠️ *Especificações Selecionadas:*
• *Serviço:* ${activeType.label}
• *Objetivo:* ${activeGoal.label}
• *Automação WhatsApp:* ${autOption}
• *Urgência / Prazo:* ${activeTimeframe.label}

Gostaria de entender melhor as etapas, receber uma estimativa inicial e iniciar o planejamento!`;
  }, [name, business, activeType, activeGoal, hasAutomation, activeTimeframe]);

  // Handle CTA button launch
  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Build link with encoded message
    const encodedMsg = encodeURIComponent(messageText);
    const whatsappUrl = `https://wa.me/5564992168724?text=${encodedMsg}`;
    
    // Open in a new tab or window
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setSubmitting(false);
    }, 400);
  };

  return (
    <section id="contact-widget" className="py-24 bg-[#121212] border-t border-white/5 relative">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#21f1a8]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="inline-block px-3 py-1 bg-[#21f1a8]/10 text-[#21f1a8] text-[10px] font-bold uppercase tracking-[0.2em] rounded-full border border-[#21f1a8]/20">
            Simulador de Projetos
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-white uppercase tracking-tighter leading-none">
            Monte Seu Escopo & <span className="text-[#21f1a8]">Inicie no WhatsApp</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-400">
            Ajuste as opções do simulador abaixo. Nossa inteligência integra suas respostas e gera uma mensagem de briefing personalizada para iniciarmos sua cotação na hora.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          
          {/* Left Column: Form Controls */}
          <form
            onSubmit={handleOpenWhatsApp}
            className="lg:col-span-7 bg-[#171717] rounded-sm p-6 sm:p-8 border border-white/5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-6">
              <h3 className="font-display text-xl font-black uppercase tracking-tighter text-white border-b border-white/5 pb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#21f1a8]" />
                Configure os Detalhes do Projeto
              </h3>

              {/* Step 1: Client Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="widget-name" className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#21f1a8]" /> Seu Nome
                  </label>
                  <input
                    id="widget-name"
                    type="text"
                    required
                    placeholder="Ex: Dr. Thiago Menezes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 rounded-sm px-4 py-3.5 text-white text-xs font-semibold focus:border-[#21f1a8] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="widget-business" className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Landmark className="w-3.5 h-3.5 text-[#21f1a8]" /> Nome da Empresa / Nicho
                  </label>
                  <input
                    id="widget-business"
                    type="text"
                    required
                    placeholder="Ex: Clínicas Menezes / Medicina"
                    value={business}
                    onChange={(e) => setBusiness(e.target.value)}
                    className="w-full bg-[#121212] border border-white/10 rounded-sm px-4 py-3.5 text-white text-xs font-semibold focus:border-[#21f1a8] outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Step 2: Project Type Select */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#21f1a8]" /> Qual tipo de projeto você busca?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_TYPES.map((type) => (
                    <button
                      id={`project-type-opt-${type.id}`}
                      key={type.id}
                      type="button"
                      onClick={() => setProjectTypeId(type.id)}
                      className={`text-left p-3.5 rounded-sm border text-[10px] font-display font-black uppercase tracking-widest transition-all cursor-pointer ${
                        projectTypeId === type.id
                          ? 'bg-[#21f1a8]/10 border-[#21f1a8] text-[#21f1a8] shadow-sm'
                          : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/10 hover:bg-[#121212]/80'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Main Goal Select */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest">
                  Qual é o objetivo principal do seu site?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROJECT_GOALS.map((g) => (
                    <button
                      id={`project-goal-opt-${g.id}`}
                      key={g.id}
                      type="button"
                      onClick={() => setGoalId(g.id)}
                      className={`text-left p-3 rounded-sm border text-[10px] font-display font-black uppercase tracking-widest transition-all cursor-pointer ${
                        goalId === g.id
                          ? 'bg-[#21f1a8]/10 border-[#21f1a8] text-[#21f1a8]'
                          : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/10'
                      }`}
                    >
                      {g.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4: Timeframe Desired */}
              <div className="space-y-2.5">
                <label className="text-[10px] font-display font-bold text-gray-400 uppercase tracking-widest">
                  Qual o seu prazo desejado de entrega?
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {TIMEFRAMES.map((t) => (
                    <button
                      id={`project-timeframe-opt-${t.id}`}
                      key={t.id}
                      type="button"
                      onClick={() => setTimeframeId(t.id)}
                      className={`px-4 py-2.5 rounded-sm border text-[10px] font-display font-black uppercase tracking-widest transition-all cursor-pointer ${
                        timeframeId === t.id
                          ? 'bg-[#21f1a8]/10 border-[#21f1a8] text-[#21f1a8]'
                          : 'bg-[#121212] border-white/5 text-gray-400 hover:border-white/10'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 5: Automation Toggle */}
              <div className="p-4 rounded-sm bg-[#121212] border border-white/5 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-display tracking-wider">
                    <Bot className="w-4 h-4 text-[#21f1a8]" /> Deseja Automação inteligente no WhatsApp?
                  </h4>
                  <p className="text-[10px] text-gray-500">
                    O site qualifica o lead e passa os dados para o atendimento comercial de forma instantânea.
                  </p>
                </div>
                <button
                  id="automation-toggle-btn"
                  type="button"
                  onClick={() => setHasAutomation(!hasAutomation)}
                  className={`w-12 h-6 rounded-sm p-1 transition-all flex items-center cursor-pointer ${
                    hasAutomation ? 'bg-[#21f1a8]' : 'bg-white/10'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-sm bg-[#121212] transition-all transform ${
                    hasAutomation ? 'translate-x-6' : 'translate-x-0'
                  }`} />
                </button>
              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                id="submit-widget-cta-btn"
                type="submit"
                disabled={submitting}
                className="w-full group flex items-center justify-center gap-2.5 py-4 rounded-sm bg-[#21f1a8] hover:bg-white text-[#171717] font-black text-xs uppercase tracking-widest transition-all cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Abrindo WhatsApp...' : 'Falar no WhatsApp'}
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <p className="text-[10px] text-gray-500 text-center font-display uppercase tracking-widest flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#21f1a8]" />
                Seu contato é direto e seguro via API Oficial do WhatsApp.
              </p>
            </div>
          </form>

          {/* Right Column: Simulated Live Message Preview Box */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-sm border border-white/5 bg-[#141414] overflow-hidden shadow-2xl">
            {/* WhatsApp App Mock Header */}
            <div className="bg-[#1e1e1e] p-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-3">
                {/* Chat Avatar */}
                <div className="w-10 h-10 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/30 flex items-center justify-center relative shadow-[0_0_10px_rgba(33,241,168,0.1)]">
                  <span className="font-display font-black text-xs text-[#21f1a8]">KC</span>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#1e1e1e]" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-display font-black uppercase text-white tracking-widest">Atendimento King Core</h4>
                  <p className="text-[10px] text-[#21f1a8] font-mono flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#21f1a8] animate-ping" />
                    Agente Online
                  </p>
                </div>
              </div>
              <div className="flex gap-2.5">
                <span className="w-1.5 h-1.5 rounded-none bg-gray-600" />
                <span className="w-1.5 h-1.5 rounded-none bg-gray-600" />
                <span className="w-1.5 h-1.5 rounded-none bg-gray-600" />
              </div>
            </div>

            {/* Chat Body simulating actual message bubbles */}
            <div 
              className="flex-1 p-5 overflow-y-auto space-y-4 min-h-[340px]" 
              style={{
                backgroundImage: 'radial-gradient(rgba(33, 241, 168, 0.02) 1px, transparent 1px)',
                backgroundSize: '16px 16px',
              }}
            >
              {/* Bot Greeting Bubble */}
              <div className="max-w-[85%] self-start p-3.5 rounded-sm bg-[#242424] text-white text-xs sm:text-sm space-y-1">
                <p>Olá! Seja muito bem-vindo à King Core. 👋</p>
                <p className="text-gray-400">Preencha o formulário ao lado para gerarmos seu briefing técnico em tempo real!</p>
                <span className="block text-[9px] text-gray-600 text-right mt-1 font-mono">09:12 AM</span>
              </div>

              {/* Dynamic Customer Generated Message Bubble */}
              <div className="max-w-[90%] ml-auto p-4 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/30 text-white text-xs space-y-3 shadow-md">
                <div className="flex items-center justify-between border-b border-[#21f1a8]/20 pb-1.5">
                  <span className="text-[10px] font-display font-black text-[#21f1a8] uppercase tracking-wider">Seu Briefing Técnico</span>
                  <span className="text-[9px] font-mono text-gray-500">Tempo Real</span>
                </div>
                
                {/* Visualizing markdown output formatted to look like Whatsapp bold text */}
                <div className="font-sans leading-relaxed space-y-2 whitespace-pre-line text-gray-300">
                  {name ? (
                    <p>Olá! Me chamo <strong className="text-white">{name}</strong>{business ? <> da empresa <strong className="text-white">{business}</strong></> : ''}. Vi o site da King Core e gostaria de estruturar meu projeto!</p>
                  ) : (
                    <p>Olá! Vi o site da King Core e gostaria de estruturar meu projeto!</p>
                  )}
                  
                  <div className="bg-[#121212]/60 p-2.5 rounded-sm space-y-1 border border-white/5 font-mono text-[11px]">
                    <p className="text-gray-400">🛠️ <span className="text-[#21f1a8]">Especificações:</span></p>
                    <p>&bull; <strong className="text-white">Serviço:</strong> {activeType.label}</p>
                    <p>&bull; <strong className="text-white">Objetivo:</strong> {activeGoal.label}</p>
                    <p>&bull; <strong className="text-white">Automação:</strong> {hasAutomation ? 'Sim, estruturado' : 'Não, apenas site'}</p>
                    <p>&bull; <strong className="text-white">Urgência:</strong> {activeTimeframe.label}</p>
                  </div>
                  
                  <p>Gostaria de entender melhor as etapas, receber uma estimativa inicial e iniciar o planejamento!</p>
                </div>

                <div className="flex items-center justify-end gap-1 text-[9px] text-gray-500 text-right font-mono">
                  <span>Agora</span>
                  <div className="flex text-[#21f1a8] leading-none">
                    <Check className="w-3 h-3" />
                    <Check className="w-3 h-3 -ml-1.5" />
                  </div>
                </div>
              </div>

            </div>

            {/* WhatsApp App Mock Footer */}
            <div className="bg-[#1a1a1a] p-3 flex items-center justify-between border-t border-white/5">
              <span className="text-[10px] text-gray-600 font-display font-bold uppercase tracking-wide italic">Gerado dinamicamente...</span>
              <div className="w-8 h-8 rounded-sm bg-[#21f1a8]/10 border border-[#21f1a8]/30 flex items-center justify-center shrink-0">
                <Send className="w-3.5 h-3.5 text-[#21f1a8]" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
