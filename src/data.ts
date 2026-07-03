/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, TestimonialItem, FAQItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'institutional-websites',
    title: 'Sites Institucionais de Alta Performance',
    description: 'Sites institucionais modernos que transmitem autoridade imediata, estabelecem seu posicionamento de luxo e capturam novos leads todos os dias.',
    longDescription: 'Sua empresa não deve parecer amadora. Criamos sites de nível corporativo premium com design focado em autoridade, transições elegantes e navegação inteligente. Desenvolvido com as melhores práticas de SEO (Otimização para Mecanismos de Busca), ajudando seu negócio a aparecer organicamente nas primeiras posições do Google, perfeito para clínicas, escritórios e serviços locais.',
    iconName: 'ShieldCheck',
    features: [
      'Design Exclusivo e Fluido (Micro-transições)',
      'SEO Técnico Avançado (Otimização Local e Nacional)',
      'Páginas de Serviços, Sobre, Contato e Blog',
      'Segurança Avançada contra Invasões e Quedas',
      'Painel Administrativo sob medida para gestão fácil'
    ],
    priceEst: 'A partir de R$ 2.800',
    deliveryTime: '10 a 15 dias úteis'
  },
  {
    id: 'e-commerce-stores',
    title: 'Lojas Virtuais & Delivery Sob Medida',
    description: 'E-commerces rápidos e integrados que transformam visitantes em compradores fiéis, sem depender de taxas abusivas de terceiros.',
    longDescription: 'Seja para uma loja física expandindo para o online ou um restaurante otimizando seu delivery próprio, criamos plataformas robustas, intuitivas e totalmente responsivas. Integração completa com meios de pagamento (Pix, Cartão), cálculo de frete inteligente e painel administrativo intuitivo para você gerenciar seu estoque e pedidos em tempo real.',
    iconName: 'ShoppingBag',
    features: [
      'Checkout Exclusivo de Alta Conversão',
      'Cálculo de Frete Inteligente & Rotas de Entrega',
      'Integração Completa de Meios de Pagamento (Pix/Cartão)',
      'Painel de Gestão de Estoque e Vendas Simplificado',
      'Carregamento ultra-rápido focado em Mobile'
    ],
    priceEst: 'A partir de R$ 4.500',
    deliveryTime: '15 a 25 dias úteis'
  },
  {
    id: 'whatsapp-automation',
    title: 'Automação Comercial & Bots de WhatsApp',
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
    priceEst: 'A partir de R$ 1.800',
    deliveryTime: '7 a 12 dias úteis'
  },
  {
    id: 'seo-marketing',
    title: 'SEO Avançado & Posicionamento Local',
    description: 'Destaque-se no Google Search e Google Maps. Coloque seu comércio físico na frente de todos os clientes em sua região.',
    longDescription: 'Aparecer no topo do Google quando alguém busca pelo seu serviço na sua cidade é o marketing de maior retorno do mundo. Otimizamos toda a estrutura de SEO técnico do seu site, cadastramos e estruturamos seu perfil de Negócio no Google (antigo Google Meu Negócio), criamos estratégias de palavras-chave locais e otimizamos a experiência do usuário para buscas mobile.',
    iconName: 'TrendingUp',
    features: [
      'Otimização Google Meu Negócio Extrema',
      'Pesquisa e Mapeamento de Palavras-Chave de Alta Conversão',
      'SEO Técnico Avançado (velocidade, sitemap, robots.txt)',
      'Estratégias de Link Building Local e Autoridade',
      'Relatório de Desempenho e Posicionamento Mensal'
    ],
    priceEst: 'A partir de R$ 1.200/mês',
    deliveryTime: 'Estratégia Contínua'
  },
  {
    id: 'maintenance-support',
    title: 'Suporte Dedicado & Manutenção Ativa',
    description: 'Sua paz de espírito garantida. Monitoramos, atualizamos e otimizamos seu site 24/7 para você focar apenas em vender.',
    longDescription: 'Um site fora do ar é prejuízo garantido. Com nosso serviço de suporte e manutenção ativa, cuidamos de toda a infraestrutura técnica. Realizamos backups diários, atualizações de segurança constantes, monitoramento em tempo real de tentativas de invasão, correção imediata de bugs e pequenas alterações de textos e imagens inclusas.',
    iconName: 'Wrench',
    features: [
      'Monitoramento de Status de Hospedagem 24/7',
      'Backups Diários Automatizados na Nuvem',
      'Atualizações Críticas de Segurança e Performance',
      'Tempo de Resposta de Suporte em até 4h via WhatsApp',
      'Incluso Pequenas Alterações de Conteúdo Mensais'
    ],
    priceEst: 'A partir de R$ 250/mês',
    deliveryTime: 'Atendimento Mensal'
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
