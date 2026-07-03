/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TestimonialItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-pages',
    title: 'Landing Pages Ultra-Conversoras',
    description: 'Páginas de vendas de alto impacto com carregamento sub-segundo, focadas 100% em converter tráfego de anúncios (Google/Meta Ads) em vendas.',
    longDescription: 'Desenvolvemos landing pages exclusivas e codificadas do zero (sem usar construtores lentos como Elementor ou WordPress). Cada elemento visual, seção de copywriting e fluxo interativo é planejado cientificamente para guiar o usuário até a ação de conversão. Seus anúncios terão um custo por clique menor devido ao excelente índice de desempenho técnico.',
    iconName: 'Zap',
    features: [
      'Copywriting focado em Vendas (AIDA)',
      'Desempenho 100/100 no Google PageSpeed',
      'Integração Avançada de Pixels e APIs de Conversão',
      'Layout Mobile-First de Extrema Fluidez',
      'Design sob medida com identidade visual Tiffany'
    ],
    priceEst: 'A partir de R$ 1.800',
    deliveryTime: '7 a 10 dias úteis'
  },
  {
    id: 'whatsapp-automation',
    title: 'Automação & Bots de WhatsApp',
    description: 'Integração de assistentes virtuais inteligentes e fluxos automatizados que qualificam leads, respondem dúvidas frequentes e aquecem o cliente 24/7.',
    longDescription: 'Não perca mais nenhuma venda por demora no atendimento. Criamos robôs de atendimento personalizados integrados com o seu site. Quando o cliente entra em contato, o bot faz a triagem imediata, coleta dados cruciais (como orçamento e necessidades), e passa o lead pronto para seu fechamento comercial ou finaliza a venda automaticamente.',
    iconName: 'MessageSquareShare',
    features: [
      'Fluxos de Conversação Interativos e Naturais',
      'Distribuição Inteligente de Leads (Sistema Rodízio)',
      'Integração Nativa com CRM (ActiveCampaign, RD Station, Hubspot)',
      'Envio de Mídias Automatizadas (Áudio, PDF, Imagens)',
      'Relatórios e Métricas de Atendimento em Tempo Real'
    ],
    priceEst: 'A partir de R$ 2.200',
    deliveryTime: '10 a 15 dias úteis'
  },
  {
    id: 'institutional-websites',
    title: 'Sites Corporativos Premium',
    description: 'Sites institucionais modernos que transmitem autoridade imediata, estabelecem seu posicionamento de luxo e capturam novos leads todos os dias.',
    longDescription: 'Sua empresa não deve parecer amadora. Criamos sites de nível corporativo premium com design focado em autoridade, transições elegantes e navegação inteligente. Desenvolvido com as melhores práticas de SEO (Otimização para Mecanismos de Busca), ajudando seu negócio a aparecer organicamente nas primeiras posições do Google.',
    iconName: 'ShieldCheck',
    features: [
      'Design Exclusivo e Fluido (Micro-transições)',
      'SEO Técnico Avançado (Otimização Local e Nacional)',
      'Páginas de Serviços, Sobre, Contato e Blog',
      'Segurança Avançada contra Invasões e Quedas',
      'Painel Administrativo sob medida para gestão fácil'
    ],
    priceEst: 'A partir de R$ 3.500',
    deliveryTime: '15 a 20 dias úteis'
  },
  {
    id: 'custom-systems',
    title: 'Plataformas e Sistemas Web',
    description: 'Desenvolvimento de dashboards inteligentes, painéis de controle e soluções SaaS sob demanda para automatizar sua operação comercial.',
    longDescription: 'Se sua empresa precisa de uma ferramenta personalizada, banco de dados robusto, área de membros exclusiva ou painel de análise de dados, nós construímos com arquiteturas escaláveis. Sistemas 100% integrados via APIs, responsivos e otimizados para segurança máxima de dados corporativos.',
    iconName: 'Cpu',
    features: [
      'Arquiteturas de Nuvem Escaláveis e Seguras',
      'Painéis de Controle (Dashboards) Interativos',
      'Banco de Dados de Alta Performance',
      'Sistemas de Login Seguro e Níveis de Permissão',
      'Automatização de Fluxos de Trabalho Internos'
    ],
    priceEst: 'Sob Consulta',
    deliveryTime: 'Sob Planejamento'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Dr. Thiago Menezes',
    role: 'Fundador & Diretor Médico',
    company: 'Instituto Menezes de Odontologia',
    rating: 5,
    comment: 'A King Core redesenhou nossa Landing Page de implantes e integrou com o assistente de WhatsApp. Nosso custo de aquisição de leads (CPA) caiu de R$ 38 para R$ 14, e o bot qualifica tudo antes de agendar. O melhor investimento em marketing que já fizemos.',
    metric: '63% redução',
    metricLabel: 'no Custo por Lead'
  },
  {
    id: '2',
    name: 'Marina Albuquerque',
    role: 'Diretora de Marketing',
    company: 'Vitta Incorporadora',
    rating: 5,
    comment: 'Nossos sites antigos em WordPress demoravam quase 6 segundos para carregar no 4G. Com o site sob medida desenvolvido em React pela King Core, o carregamento agora é instantâneo. A taxa de conversão do tráfego pago subiu absurdamente e os corretores recebem leads qualificados.',
    metric: '185% aumento',
    metricLabel: 'em Conversões'
  },
  {
    id: '3',
    name: 'Roberto Vasconcelos',
    role: 'CEO & Fundador',
    company: 'Goiás Cargo Logística',
    rating: 5,
    comment: 'Sensacional o trabalho deles! O sistema de cotação integrado com bot de WhatsApp automatizou 70% do nosso fluxo comercial. O que antes levava 30 minutos por cotação manual, agora acontece em 15 segundos direto no celular do cliente. Indico de olhos fechados!',
    metric: '4.2h salvas',
    metricLabel: 'por dia por atendente'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Geral',
    question: 'Por que a King Core não utiliza WordPress ou Elementor para criar os sites?',
    answer: 'WordPress e construtores visuais como Elementor geram códigos inflados, pesados e lentos, além de dependerem de dezenas de plugins que frequentemente quebram ou sofrem falhas de segurança. Na King Core, codificamos nossos projetos do zero usando as tecnologias mais rápidas do mundo (React, Tailwind e Vite). Isso garante um site ultra-rápido, extremamente seguro, exclusivo e otimizado para o menor custo possível em anúncios.'
  },
  {
    id: 'faq-2',
    category: 'WhatsApp',
    question: 'Como funciona a integração com o bot de WhatsApp?',
    answer: 'Quando o usuário clica em qualquer botão do seu site, ele é direcionado para o WhatsApp com um link inteligente contendo dados estruturados. Ao chegar no WhatsApp, nosso bot de atendimento pode entrar em ação imediatamente, oferecendo opções de múltipla escolha, coletando o nome do lead, segmento de interesse, orçamento disponível, e agendando uma reunião, entregando tudo mastigado para seu vendedor.'
  },
  {
    id: 'faq-3',
    category: 'Processo',
    question: 'Eu já preciso ter os textos e imagens prontos?',
    answer: 'Não se preocupe com isso! Nós cuidamos de toda a estrutura de Copywriting (redação persuasiva focada em vendas) do seu site. Quanto às imagens, criamos ilustrações modernas, gráficos tecnológicos de alta qualidade ou integramos suas fotos reais de forma otimizada para manter a performance incrível do site.'
  },
  {
    id: 'faq-4',
    category: 'SEO',
    question: 'Meu site vai aparecer nas buscas do Google?',
    answer: 'Com certeza! Toda nossa arquitetura é pensada em SEO Técnico Avançado. Criamos o site com as tags HTML semanticamente corretas, sitemaps automatizados, velocidade de carregamento excepcional (fator principal no ranqueamento do Google) e configuramos sua página para que seja indexada rapidamente.'
  },
  {
    id: 'faq-5',
    category: 'Garantia',
    question: 'Os projetos possuem garantia e suporte?',
    answer: 'Sim, oferecemos 90 dias de garantia total contra qualquer instabilidade ou erro no código, além de suporte prioritário via WhatsApp. Também entregamos um treinamento em vídeo mostrando como monitorar os acessos e analisar os leads recebidos.'
  }
];

export const PROJECT_TYPES = [
  { id: 'lp', label: 'Landing Page de Vendas', defaultMsg: 'Quero uma Landing Page de alta conversão para o meu negócio.' },
  { id: 'site', label: 'Site Institucional Corporativo', defaultMsg: 'Quero modernizar o posicionamento digital da minha empresa com um site institucional premium.' },
  { id: 'bot', label: 'Automação & Bot de WhatsApp', defaultMsg: 'Gostaria de automatizar o meu atendimento e integrar um bot inteligente no WhatsApp.' },
  { id: 'sistema', label: 'Plataforma Web / SaaS / Dashboard', defaultMsg: 'Tenho uma demanda para desenvolver um sistema ou aplicativo web personalizado.' }
];

export const PROJECT_GOALS = [
  { id: 'vendas', label: 'Aumentar Vendas / Captar Leads' },
  { id: 'autoridade', label: 'Transmitir mais Autoridade' },
  { id: 'tempo', label: 'Economizar Tempo / Automatizar Processos' },
  { id: 'outro', label: 'Outro objetivo estratégico' }
];

export const TIMEFRAMES = [
  { id: 'urgente', label: 'Urgente (Menos de 15 dias)' },
  { id: 'normal', label: 'Ideal (15 a 30 dias)' },
  { id: 'planejado', label: 'Apenas planejando / Sem pressa' }
];
